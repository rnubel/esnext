import MagicString from 'magic-string';
import type { Scope } from 'escope';
import { analyze } from 'escope';
import parse from './utils/parse';

type Warning = {
  node: Object,
  type: string,
  message: string
};

export type RenderedModule = {
  code: string,
  map: Object,
  warnings: Array<Warning>,
  metadata: Object
};

type Token = {
  type: string,
  value: string,
  range: Array<number>,
  loc: Loc
};

type Loc = {
  line: number,
  column: number
};

export default class Module {
  constructor(id: ?string, source: string) {
    this.id = id;
    this.metadata = ({}: Object);
    this.source = source;
    this.ast = parse(source);
    this.tokens = this.ast.tokens;
    delete this.ast.tokens;
    this.scopeManager = analyze(this.ast, { ecmaVersion: 6, sourceType: 'module' });
    this.magicString = new MagicString(source, {
      filename: id
    });

    /**
     * @private
     */
    this.warnings = ([]: Array<Warning>);
  }

  warn(node: Object, type: string, message: string) {
    this.warnings.push({ node, type, message });
  }

  tokensForNode(node: Object): Array<Token> {
    const result = [];
    const tokens = this.tokens;
    const [ start, end ] = node.range;
    for (let i = 0; i < tokens.length; i++) {
      const { range } = tokens[i];
      if (range[1] > end) {
        break;
      } else if (range[0] >= start) {
        result.push(tokens[i]);
      }
    }
    return result;
  }

  render(): RenderedModule {
    return {
      code: this.magicString.toString(),
      map: this.magicString.generateMap(),
      ast: this.ast,
      warnings: this.warnings.slice(),
      metadata: this.metadata
    };
  }

  get moduleScope(): Scope {
    for (let i = 0; i < this.scopeManager.scopes.length; i++) {
      if (this.scopeManager.scopes[i].type === 'module') {
        return this.scopeManager.scopes[i];
      }
    }
    return this.scopeManager.globalScope;
  }

  sourceOf(node): string {
    return this.source.slice(...node.range);
  }
}
