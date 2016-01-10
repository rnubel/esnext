'use strict';

var babel = require('rollup-plugin-babel');
babel = 'default' in babel ? babel['default'] : babel;
var json = require('rollup-plugin-json');
json = 'default' in json ? json['default'] : json;
var npm = require('rollup-plugin-npm');
npm = 'default' in npm ? npm['default'] : npm;
var path = require('path');
var estraverse = require('estraverse');
estraverse = 'default' in estraverse ? estraverse['default'] : estraverse;
var shebangRegex = require('shebang-regex');
shebangRegex = 'default' in shebangRegex ? shebangRegex['default'] : shebangRegex;
var espree = require('espree');
var MagicString = require('magic-string');
MagicString = 'default' in MagicString ? MagicString['default'] : MagicString;
var escope = require('escope');
var fs = require('fs');
var mkdirp = require('mkdirp');
mkdirp = 'default' in mkdirp ? mkdirp['default'] : mkdirp;

function babelHelpers_typeof (obj) {
  return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

function babelHelpers_classCallCheck (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var babelHelpers_createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function babelHelpers_inherits (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

function babelHelpers_possibleConstructorReturn (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var babelHelpers_slicedToArray = (function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
})();

function babelHelpers_toConsumableArray (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function groupContentBetweenElements(elements, startsNewGroupPredicate, contentBetweenElements) {
  var result = [];
  var group = [];

  for (var i = 0; i < elements.length - 1; i++) {
    var thisElement = elements[i];
    var nextElement = elements[i + 1];

    if (i > 0 && startsNewGroupPredicate(thisElement)) {
      result.push(group);
      group = [];
    }

    group.push(contentBetweenElements(thisElement, nextElement));
  }

  result.push(group);

  return result;
}

var PARSE_OPTIONS = {
  loc: true,
  range: true,
  sourceType: 'module',
  tokens: true
};

var Module = (function () {
  function Module(id, source) {
    babelHelpers_classCallCheck(this, Module);

    this.id = id;
    this.metadata = {};
    this.source = source;
    this.ast = espree.parse(source, PARSE_OPTIONS);
    this.tokens = this.ast.tokens;
    delete this.ast.tokens;
    this.scopeManager = escope.analyze(this.ast, { ecmaVersion: 6, sourceType: 'module' });
    this.magicString = new MagicString(source, {
      filename: id
    });

    /**
     * @private
     */
    this.warnings = [];
  }

  babelHelpers_createClass(Module, [{
    key: 'warn',
    value: function warn(node, type, message) {
      this.warnings.push({ node: node, type: type, message: message });
    }
  }, {
    key: 'tokensForNode',
    value: function tokensForNode(node) {
      return this.tokensInRange.apply(this, babelHelpers_toConsumableArray(node.range));
    }
  }, {
    key: 'tokensBetweenNodes',
    value: function tokensBetweenNodes(left, right) {
      return this.tokensInRange(left.range[1], right.range[0]);
    }
  }, {
    key: 'tokensInRange',
    value: function tokensInRange(start, end) {
      var tokenRange = this._tokenIndexRangeForSourceRange(start, end);

      if (!tokenRange) {
        return [];
      }

      return this.tokens.slice(tokenRange.start, tokenRange.end);
    }
  }, {
    key: 'tokenRangeForNode',
    value: function tokenRangeForNode(node) {
      return this._tokenIndexRangeForSourceRange(node.range[0], node.range[1]);
    }
  }, {
    key: '_tokenIndexRangeForSourceRange',
    value: function _tokenIndexRangeForSourceRange(start, end) {
      var location = null;
      var length = 0;
      var tokens = this.tokens;

      for (var i = 0; i < tokens.length; i++) {
        var _range = tokens[i].range;

        if (_range[1] > end) {
          break;
        } else if (_range[0] >= start) {
          if (location === null) {
            location = i;
          }
          length++;
        }
      }

      if (location === null) {
        return null;
      }

      return { start: location, end: location + length };
    }
  }, {
    key: 'render',
    value: function render() {
      return {
        code: this.magicString.toString(),
        map: this.magicString.generateMap(),
        ast: this.ast,
        warnings: this.warnings.slice(),
        metadata: this.metadata
      };
    }
  }, {
    key: 'sourceOf',
    value: function sourceOf(node) {
      var _source;

      return (_source = this.source).slice.apply(_source, babelHelpers_toConsumableArray(node.range));
    }
  }, {
    key: 'moduleScope',
    get: function get() {
      for (var i = 0; i < this.scopeManager.scopes.length; i++) {
        if (this.scopeManager.scopes[i].type === 'module') {
          return this.scopeManager.scopes[i];
        }
      }
      return this.scopeManager.globalScope;
    }
  }]);
  return Module;
})();

var Context$7 = (function () {
  function Context(pluginName, module) {
    babelHelpers_classCallCheck(this, Context);

    this.pluginName = pluginName;
    this.module = module;
  }

  babelHelpers_createClass(Context, [{
    key: 'charAt',
    value: function charAt(index) {
      return this.module.magicString.original[index];
    }
  }, {
    key: 'slice',
    value: function slice(start, end) {
      return this.module.magicString.original.slice(start, end);
    }
  }, {
    key: 'remove',
    value: function remove(start, end) {
      this.module.magicString.remove(start, end);
      return this;
    }
  }, {
    key: 'overwrite',
    value: function overwrite(start, end, content) {
      this.module.magicString.overwrite(start, end, content);
      return this;
    }
  }, {
    key: 'insert',
    value: function insert(index, content) {
      this.module.magicString.insert(index, content);
      return this;
    }
  }, {
    key: 'indexOf',
    value: function indexOf(string) {
      var start = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

      return this.module.magicString.original.indexOf(string, start);
    }
  }, {
    key: 'endIndexOf',
    value: function endIndexOf(string) {
      var start = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

      var startIndexOf = this.indexOf(string, start);
      if (startIndexOf < 0) {
        return startIndexOf;
      }
      return startIndexOf + string.length;
    }
  }, {
    key: 'escape',
    value: function escape(char, start, end) {
      for (var i = start; i < end; i++) {
        if (this.charAt(i) === char) {
          this.insert(i, '\\');
        }
      }
      return this;
    }
  }, {
    key: 'metadata',
    get: function get() {
      return this.module.metadata[this.pluginName];
    }
  }]);
  return Context;
})();

function clone(object) {
  return JSON.parse(JSON.stringify(object));
}

function replace(destination, source) {
  for (var key in destination) {
    delete destination[key];
  }

  for (var key in source) {
    destination[key] = source[key];
  }

  return destination;
}

var Syntax$4 = estraverse.Syntax;
var name$4 = 'strings.template';
var description$4 = 'Transforms manual string concatenation into template strings.';

var Context$4 = (function (_BaseContext) {
  babelHelpers_inherits(Context, _BaseContext);

  function Context(module) {
    babelHelpers_classCallCheck(this, Context);

    var _this = babelHelpers_possibleConstructorReturn(this, Object.getPrototypeOf(Context).call(this, name$4, module));

    module.metadata[name$4] = {
      concatenations: []
    };
    return _this;
  }

  babelHelpers_createClass(Context, [{
    key: 'flatten',
    value: function flatten(node) {
      if (node.type !== Syntax$4.BinaryExpression || node.operator !== '+') {
        return null;
      }

      var left = node.left;
      var right = node.right;

      if (isString(left)) {
        // This is the root.
        return [left, right];
      } else {
        // We need to go deeper.
        var flattenedLeft = this.flatten(left);
        if (!flattenedLeft) {
          return null;
        }
        return [].concat(babelHelpers_toConsumableArray(flattenedLeft), [right]);
      }
    }
  }, {
    key: 'combine',
    value: function combine(node, parts) {
      var _this2 = this;

      var annotatedParts = parts.map(function (part, i) {
        var previousPart = parts[i - 1];
        var nextPart = parts[i + 1];
        var annotatedPart = {
          node: part,
          prefix: '',
          suffix: ''
        };

        if (previousPart) {
          var _insignificantContent = _this2.insignificantContentSeparatedByPlus(previousPart, part);

          var _insignificantContent2 = babelHelpers_slicedToArray(_insignificantContent, 2);

          var prefix = _insignificantContent2[1];

          annotatedPart.prefix = prefix.replace(/^\s*/, '');
        }

        if (nextPart) {
          var _insignificantContent3 = _this2.insignificantContentSeparatedByPlus(part, nextPart);

          var _insignificantContent4 = babelHelpers_slicedToArray(_insignificantContent3, 1);

          var suffix = _insignificantContent4[0];

          annotatedPart.suffix = suffix.replace(/\s*$/, '');
        }

        return annotatedPart;
      });

      if (annotatedParts.every(function (part) {
        return isString(part.node) && !part.prefix && !part.suffix;
      })) {
        return this.combineStrings(parts);
      } else {
        return this.buildTemplateString(node, annotatedParts);
      }
    }
  }, {
    key: 'combineStrings',
    value: function combineStrings(parts) {
      var quote = this.charAt(parts[0].range[0]);
      var value = parts[0].value;

      var raw = parts[0].raw.slice(1, -1);

      for (var i = 0; i < parts.length; i++) {
        var thisPart = parts[i];
        var nextPart = parts[i + 1];
        if (nextPart) {
          // Remove the space between the strings.
          this.remove(thisPart.range[1] - 1, nextPart.range[0] + 1);
          value += nextPart.value;
          raw += nextPart.raw.slice(1, -1);
        }
        this.escape(quote, thisPart.range[0] + 1, thisPart.range[1] - 1);
      }

      var lastPart = parts[parts.length - 1];
      this.overwrite(lastPart.range[1] - 1, lastPart.range[1], quote);

      raw = quote + raw.replace(new RegExp(quote, 'g'), '\\' + quote) + quote;
      return { type: Syntax$4.Literal, value: value, raw: raw };
    }
  }, {
    key: 'buildTemplateString',
    value: function buildTemplateString(node, parts) {
      var _this3 = this;

      var expressions = [];
      var quasis = [];

      var firstPart = parts[0];
      var firstNode = firstPart.node;
      var cooked = '';
      var raw = '';
      this.insert(firstNode.range[0], '`');

      parts.forEach(function (_ref, i) {
        var node = _ref.node;
        var prefix = _ref.prefix;
        var suffix = _ref.suffix;

        if (prefix || suffix || !isString(node)) {
          // This one has to be an interpolated expression.
          _this3.insert(node.range[0], '${' + prefix);
          _this3.insert(node.range[1], suffix + '}');
          expressions.push(node);
          quasis.push({
            type: Syntax$4.TemplateElement,
            tail: false,
            value: { cooked: cooked, raw: raw.replace(/`/g, '\\`') }
          });
          cooked = '';
          raw = '';
        } else {
          // This one can become a quasi,
          cooked += node.value;
          raw += node.raw.slice(1, -1);
          _this3.remove(node.range[0], node.range[0] + 1);
          _this3.remove(node.range[1] - 1, node.range[1]);
          _this3.escape.apply(_this3, ['`'].concat(babelHelpers_toConsumableArray(node.range)));
        }

        var nextPart = parts[i + 1];
        if (nextPart) {
          _this3.remove(node.range[1], nextPart.node.range[0]);
        }
      });

      quasis.push({
        type: Syntax$4.TemplateElement,
        tail: true,
        value: { cooked: cooked, raw: raw }
      });

      this.overwrite(parts[parts.length - 1].node.range[1], node.range[1], '`');

      return { type: Syntax$4.TemplateLiteral, expressions: expressions, quasis: quasis };
    }
  }, {
    key: 'insignificantContentSeparatedByPlus',
    value: function insignificantContentSeparatedByPlus(left, right) {
      var _this4 = this;

      return groupContentBetweenElements([left].concat(babelHelpers_toConsumableArray(this.module.tokensBetweenNodes(left, right)), [right]), function (token) {
        return token.type === 'Punctuator' && token.value === '+';
      }, function (left, right) {
        return _this4.slice(left.range[1], right.range[0]);
      }).map(function (strings) {
        return strings.join('');
      });
    }
  }]);
  return Context;
})(Context$7);

function begin$4(module) {
  return new Context$4(module);
}

function enter$4(node, module, context) {
  var parts = context.flatten(node);

  if (parts) {
    context.metadata.concatenations.push({
      node: clone(node),
      parts: clone(parts)
    });

    replace(node, context.combine(node, parts));
  }

  return null;
}

function isString(node) {
  if (!node) {
    return false;
  }
  return node.type === Syntax$4.Literal && typeof node.value === 'string';
}

var stringsTemplate = Object.freeze({
  name: name$4,
  description: description$4,
  begin: begin$4,
  enter: enter$4
});

var Syntax$3 = estraverse.Syntax;
var name$3 = 'objects.destructuring';
var description$3 = 'Transform some declarations and assignments to the more compact destructuring form.';

var Context$3 = (function (_BaseContext) {
  babelHelpers_inherits(Context, _BaseContext);

  function Context(module) {
    babelHelpers_classCallCheck(this, Context);

    var _this = babelHelpers_possibleConstructorReturn(this, Object.getPrototypeOf(Context).call(this, name$3, module));

    module.metadata[name$3] = [];
    return _this;
  }

  babelHelpers_createClass(Context, [{
    key: 'rewriteVariableDeclaration',
    value: function rewriteVariableDeclaration(node) {
      if (node.type !== Syntax$3.VariableDeclaration) {
        return false;
      }

      for (var index = 0; index < node.declarations.length; index++) {
        var elements = this._extractSequentialDestructurableElements(node.declarations, index);
        this._rewriteDestructurableElements(elements);

        if (elements.length !== 0) {
          // Add information about the transformation.
          this.metadata.push({
            ids: elements.map(function (_ref) {
              var id = _ref.id;
              return id;
            }),
            inits: elements.map(function (_ref2) {
              var init = _ref2.init;
              return init;
            })
          });

          // Mutate the AST to reflect the new reality.
          node.declarations.splice(index, elements.length, {
            type: Syntax$3.VariableDeclarator,
            id: {
              type: Syntax$3.ObjectPattern,
              properties: elements.map(function (declarator) {
                return {
                  type: Syntax$3.Property,
                  computed: false,
                  shorthand: true,
                  method: false,
                  key: declarator.id,
                  value: declarator.id
                };
              })
            },
            init: elements[0].init.object
          });
        }
      }

      return true;
    }
  }, {
    key: '_rewriteDestructurableElements',
    value: function _rewriteDestructurableElements(elements) {
      if (elements.length === 0) {
        return;
      }

      var firstElement = elements[0];

      // `const a = obj.a, b = obj.b;` -> `const { a = obj.a, b = obj.b;`
      //                                         ^^
      var lr = leftRightOfAssignment(firstElement);
      if (!lr.left.range) {
        console.log(lr);
      }
      this.insert(lr.left.range[0], '{ ');

      for (var i = 0; i < elements.length - 1; i++) {
        var _leftRightOfAssignmen = leftRightOfAssignment(elements[i]);

        var _left = _leftRightOfAssignmen.left;
        var _right = _leftRightOfAssignmen.right;
        // `const { a = obj.a, b = obj.b;` -> `const { a, b = obj.b;`
        //           ^^^^^^^^

        this.remove(_left.range[1], _right.range[1]);
      }

      var lastElement = elements[elements.length - 1];

      var _leftRightOfAssignmen2 = leftRightOfAssignment(lastElement);

      var lastLeft = _leftRightOfAssignmen2.left;
      var lastRight = _leftRightOfAssignmen2.right;

      // `const { a, b = obj.b;` -> `const { a, b } = obj.b;`
      //                                         ^^

      this.insert(lastLeft.range[1], ' }');

      // `const { a, b } = obj.b;` -> `const { a, b } = obj;`
      //                      ^^
      this.remove(lastRight.object.range[1], lastRight.range[1]);
    }
  }, {
    key: 'rewriteAssignment',
    value: function rewriteAssignment(node) {
      var assignments = this._extractSequentialDestructurableElements([node]);

      if (assignments.length === 0) {
        return false;
      }

      if (node.parentNode.type === Syntax$3.ExpressionStatement) {
        // `a = obj.a;` -> `(a = obj.a);`
        //                  ^         ^
        this.insert(assignments[0].range[0], '(');
        this.insert(assignments[assignments.length - 1].range[1], ')');
      }

      this._rewriteDestructurableElements(assignments);

      // Add information about the transformation.
      this.metadata.push({
        ids: assignments.map(function (assignment) {
          return assignment.left;
        }),
        inits: assignments.map(function (assignment) {
          return assignment.right;
        })
      });

      replace(node, {
        type: Syntax$3.AssignmentExpression,
        operator: '=',
        left: {
          type: Syntax$3.ObjectPattern,
          properties: assignments.map(function (assignment) {
            return {
              type: Syntax$3.Property,
              computed: false,
              shorthand: true,
              method: false,
              key: {
                type: Syntax$3.Identifier,
                name: assignment.left.name
              },
              value: {
                type: Syntax$3.Identifier,
                name: assignment.left.name
              }
            };
          })
        },
        right: node.right.object
      });

      return true;
    }
  }, {
    key: 'rewriteSequenceExpression',
    value: function rewriteSequenceExpression(node) {
      if (node.type !== Syntax$3.SequenceExpression) {
        return false;
      }

      var expressions = node.expressions;

      for (var index = 0; index < expressions.length; index++) {
        var assignments = this._extractSequentialDestructurableElements(expressions, index);

        if (assignments.length > 0 && index === 0) {
          // `a = obj.a;` -> `(a = obj.a);`
          this.insert(assignments[0].range[0], '(');
          this.insert(assignments[assignments.length - 1].range[1], ')');
        }

        if (assignments.length > 0) {
          this._rewriteDestructurableElements(assignments);

          this.metadata.push({
            ids: assignments.map(function (assignment) {
              return assignment.left;
            }),
            inits: assignments.map(function (assignment) {
              return assignment.right;
            })
          });

          expressions.splice(index, assignments.length, {
            type: Syntax$3.AssignmentExpression,
            operator: '=',
            left: {
              type: Syntax$3.ObjectPattern,
              properties: assignments.map(function (_ref3) {
                var left = _ref3.left;
                return {
                  type: Syntax$3.Property,
                  computed: false,
                  method: false,
                  shorthand: true,
                  key: left,
                  value: left
                };
              })
            },
            right: assignments[0].right.object
          });
        }
      }

      if (expressions.length === 1) {
        replace(node, expressions[0]);
      }

      return true;
    }
  }, {
    key: '_extractSequentialDestructurableElements',
    value: function _extractSequentialDestructurableElements(elements) {
      var start = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

      var result = [];
      var objectSource = undefined;

      for (var i = start; i < elements.length; i++) {
        var element = elements[i];

        var _ref4 = leftRightOfAssignment(element) || {};

        var _left2 = _ref4.left;
        var _right2 = _ref4.right;

        if (!_left2 || _left2.type !== Syntax$3.Identifier) {
          break;
        }

        if (!_right2 || _right2.type !== Syntax$3.MemberExpression) {
          break;
        }

        if (_right2.computed) {
          break;
        }

        if (_left2.name !== _right2.property.name) {
          break;
        }

        var thisObjectSource = this.module.sourceOf(_right2.object);
        if (!objectSource) {
          objectSource = thisObjectSource;
        } else if (objectSource !== thisObjectSource) {
          break;
        }

        result.push(clone(element));

        if (!isSafeToConsolidate(_right2.object)) {
          break;
        }
      }

      return result;
    }
  }]);
  return Context;
})(Context$7);

function leftRightOfAssignment(node) {
  switch (node.type) {
    case Syntax$3.VariableDeclarator:
      return { left: node.id, right: node.init };

    case Syntax$3.AssignmentExpression:
      if (node.operator === '=') {
        return { left: node.left, right: node.right };
      }
      break;
  }

  return null;
}

function begin$3(module) {
  return new Context$3(module);
}

function enter$3(node, module, context) {
  context.rewriteVariableDeclaration(node) || context.rewriteSequenceExpression(node) || context.rewriteAssignment(node);
  return null;
}

function isSafeToConsolidate(node) {
  return node.type === Syntax$3.Identifier;
}

var objectsDestructuring = Object.freeze({
  name: name$3,
  description: description$3,
  begin: begin$3,
  enter: enter$3
});

var Syntax$9 = estraverse.Syntax;

function mostRestrictiveKindForDeclaration(node, scopeManager) {
  var declaredVariables = scopeManager.getDeclaredVariables(node);
  var blockScope = declaredVariables.every(function (variable) {
    return variable.defs.length < 2 && variable.references.every(referenceCouldBeBlockScope);
  });

  if (!blockScope) {
    return 'var';
  }

  var isConst = declaredVariables.every(function (variable) {
    return variable.references.length > 0 && variable.references.every(couldBeConstReference);
  });

  return isConst ? 'const' : 'let';
}

function couldBeConstReference(reference) {
  return reference.init || reference.isReadOnly();
}

function referenceCouldBeBlockScope(reference) {
  return referenceAfterDefinition(reference) && referenceInDefinitionParentBlock(reference);
}

function referenceAfterDefinition(reference) {
  var referenceIndex = reference.identifier.range[0];
  var definitionIndex = reference.resolved.identifiers[0].range[0];
  return referenceIndex >= definitionIndex;
}

function referenceInDefinitionParentBlock(reference) {
  var definitionName = reference.resolved.defs[0].name;
  var defBlock = definitionName;

  while (defBlock && defBlock.type !== Syntax$9.BlockStatement && defBlock.type !== Syntax$9.Program) {
    defBlock = defBlock.parentNode;
  }

  if (!defBlock) {
    var _definitionName$loc$s = definitionName.loc.start;
    var line = _definitionName$loc$s.line;
    var column = _definitionName$loc$s.column;

    throw new Error('BUG: Expected a block containing \'' + definitionName.name + '\'' + ('(' + line + ':' + (column + 1) + ') but did not find one.'));
  }

  var refBlock = reference.identifier;

  while (refBlock && refBlock !== defBlock) {
    refBlock = refBlock.parentNode;
  }

  return refBlock === defBlock;
}

var Syntax$2 = estraverse.Syntax;
var name$2 = 'declarations.block-scope';
var description$2 = 'Transform `var` into `let` and `const` as appropriate.';

var Context$2 = (function (_BaseContext) {
  babelHelpers_inherits(Context, _BaseContext);

  function Context(module) {
    babelHelpers_classCallCheck(this, Context);

    var _this = babelHelpers_possibleConstructorReturn(this, Object.getPrototypeOf(Context).call(this, name$2, module));

    module.metadata[name$2] = {
      declarations: []
    };
    return _this;
  }

  return Context;
})(Context$7);

function begin$2(module) {
  return new Context$2(module);
}

function enter$2(node, module, context) {
  if (node.type !== Syntax$2.VariableDeclaration) {
    return null;
  }

  if (node.kind !== 'var') {
    return null;
  }

  var magicString = module.magicString;

  var kind = mostRestrictiveKindForDeclaration(node, module.scopeManager);

  if (kind !== 'var') {
    magicString.overwrite(node.range[0], node.range[0] + 'var'.length, kind);
    context.metadata.declarations.push(clone(node));
    node.kind = kind;
  } else {
    module.warn(node, 'unsupported-declaration', '\'var\' declaration cannot be converted to block scope');
  }

  return null;
}

var declarationsBlockScope = Object.freeze({
  name: name$2,
  description: description$2,
  begin: begin$2,
  enter: enter$2
});

function hasParens(node, module) {
  var tokens = module.tokens;

  var _module$tokenRangeFor = module.tokenRangeForNode(node);

  var start = _module$tokenRangeFor.start;
  var end = _module$tokenRangeFor.end;

  var tokenBefore = tokens[start - 1];
  var tokenAfter = tokens[end];
  return tokenBefore.type === 'Punctuator' && tokenBefore.value === '(' && tokenAfter.type === 'Punctuator' && tokenAfter.value === ')';
}

var Syntax$7 = estraverse.Syntax;

function needsParens(node) {
  switch (node.type) {
    case Syntax$7.ArrowFunctionExpression:
      switch (node.parentNode.type) {
        case Syntax$7.MemberExpression:
          return node.parentNode.object === node;

        case Syntax$7.BinaryExpression:
          return true;
      }
      break;
  }

  return false;
}

var Syntax = estraverse.Syntax;
var name = 'functions.arrow';
var description = 'Transform regular functions to arrow functions as appropriate.';

var Context = (function (_BaseContext) {
  babelHelpers_inherits(Context, _BaseContext);

  function Context(module) {
    babelHelpers_classCallCheck(this, Context);

    var _this = babelHelpers_possibleConstructorReturn(this, Object.getPrototypeOf(Context).call(this, name, module));

    module.metadata[name] = {
      functions: []
    };
    return _this;
  }

  babelHelpers_createClass(Context, [{
    key: 'rewrite',
    value: function rewrite(node) {
      return this.rewriteFunctionExpression(node) || this.rewriteCallExpression(node);
    }
  }, {
    key: 'rewriteFunctionExpression',
    value: function rewriteFunctionExpression(node) {
      if (node.type !== Syntax.FunctionExpression) {
        return false;
      }

      if (node.generator) {
        return false;
      }

      if (node.id) {
        return false;
      }

      if (node.body.body.length !== 1) {
        return false;
      }

      var parentNode = node.parentNode;

      if (parentNode.type === Syntax.Property && parentNode.method) {
        return false;
      }

      var _node$body$body = babelHelpers_slicedToArray(node.body.body, 1);

      var statement = _node$body$body[0];

      if (statement.type !== Syntax.ReturnStatement) {
        return false;
      }

      if (referencesThisOrArguments(node, this.module.scopeManager)) {
        return false;
      }

      this._rewriteBlocklessArrowFunction(node);

      return true;
    }
  }, {
    key: 'rewriteCallExpression',
    value: function rewriteCallExpression(node) {
      var _this2 = this;

      if (node.type !== Syntax.CallExpression) {
        return false;
      }

      var callee = node.callee;

      if (callee.type !== Syntax.MemberExpression) {
        return false;
      }

      var object = callee.object;
      var property = callee.property;

      if (object.type !== Syntax.FunctionExpression || object.id) {
        return false;
      }

      if (property.type !== Syntax.Identifier || property.name !== 'bind') {
        return false;
      }

      if (node.arguments.length !== 1 || node.arguments[0].type !== Syntax.ThisExpression) {
        return false;
      }

      this._rewriteBlockArrowFunction(object);

      // `() => {}.bind(this)` -> `() => {}bind(this)`
      //          ^
      this.module.tokensBetweenNodes(object, property).forEach(function (token) {
        if (token.type === 'Punctuator' && token.value === '.') {
          _this2.remove.apply(_this2, babelHelpers_toConsumableArray(token.range));
        }
      });

      // `() => {}bind(this)` -> `() => {}`
      //          ^^^^^^^^^^
      this.remove(property.range[0], node.range[1]);

      replace(node, object);

      return true;
    }
  }, {
    key: '_rewriteBlocklessArrowFunction',
    value: function _rewriteBlocklessArrowFunction(node) {
      var _node$body$body2 = babelHelpers_slicedToArray(node.body.body, 1);

      var statement = _node$body$body2[0];

      this.metadata.functions.push(clone(node));

      var tokens = this.module.tokensForNode(node);
      var tokenIndex = 0;
      var functionToken = tokens[tokenIndex++];
      var paramStartParenToken = tokens[tokenIndex++];
      var paramEndParenToken = undefined;

      if (node.params.length === 0) {
        paramEndParenToken = tokens[tokenIndex++];
      } else {
        var lastParam = node.params[node.params.length - 1];
        while (tokenIndex < tokens.length) {
          var token = tokens[tokenIndex++];
          if (token.range[0] >= lastParam.range[1] && token.value === ')') {
            paramEndParenToken = token;
            break;
          }
        }
      }

      var paramsNeedsParens = node.params.length !== 1 || node.params[0].type !== Syntax.Identifier;

      if (!paramsNeedsParens) {
        // `(a)` -> `a`
        //  ^ ^
        this.remove.apply(this, babelHelpers_toConsumableArray(paramStartParenToken.range));
        this.remove.apply(this, babelHelpers_toConsumableArray(paramEndParenToken.range));
      }

      var blockStartBraceToken = tokens[tokenIndex++];
      var blockEndBraceToken = tokens[tokens.length - 1];

      // `function() {` -> `() =>`
      //  ^^^^^^^^   ^         ^^
      this.remove(functionToken.range[0], paramStartParenToken.range[0]);
      this.overwrite.apply(this, babelHelpers_toConsumableArray(blockStartBraceToken.range).concat(['=>']));

      var contentBetweenBlockStartBraceAndReturn = this.slice(blockStartBraceToken.range[1], statement.range[0]);

      var shouldCollapseToOneLine = /^\s*$/.test(contentBetweenBlockStartBraceAndReturn);

      if (shouldCollapseToOneLine) {
        // Removes whitespace between `{` and `return` and `foo;` and `}`.
        //
        //  function() {
        //    return foo;
        //  }
        //
        this.overwrite(blockStartBraceToken.range[1], statement.range[0], ' ');
        this.remove(statement.range[1], blockEndBraceToken.range[0]);
      }

      // `return foo;` -> `foo`
      //  ^^^^^^^   ^
      this.remove(statement.range[0], statement.argument.range[0]);
      this.remove(statement.argument.range[1], statement.range[1]);

      // `…}` -> `…`
      this.remove.apply(this, babelHelpers_toConsumableArray(blockEndBraceToken.range));

      node.type = Syntax.ArrowFunctionExpression;
      node.body = statement.argument;

      if (needsParens(node) && !hasParens(node, this.module)) {
        this.insert(node.range[0], '(');
        this.insert(node.range[1], ')');
      }
    }
  }, {
    key: '_rewriteBlockArrowFunction',
    value: function _rewriteBlockArrowFunction(node) {
      this.metadata.functions.push(clone(node));

      var tokens = this.module.tokensForNode(node);
      var tokenIndex = 0;
      var functionToken = tokens[tokenIndex++];
      var paramStartParenToken = tokens[tokenIndex++];
      var paramEndParenToken = undefined;

      if (node.params.length === 0) {
        paramEndParenToken = tokens[tokenIndex++];
      } else {
        var lastParam = node.params[node.params.length - 1];
        while (tokenIndex < tokens.length) {
          var token = tokens[tokenIndex++];
          if (token.range[0] >= lastParam.range[1] && token.value === ')') {
            paramEndParenToken = token;
            break;
          }
        }
      }

      var paramsNeedsParens = node.params.length !== 1 || node.params[0].type !== Syntax.Identifier;

      if (!paramsNeedsParens) {
        // `(a)` -> `a`
        //  ^ ^
        this.remove.apply(this, babelHelpers_toConsumableArray(paramStartParenToken.range));
        this.remove.apply(this, babelHelpers_toConsumableArray(paramEndParenToken.range));
      }

      var blockStartBraceToken = tokens[tokenIndex++];

      // `function() {` -> `() =>`
      //  ^^^^^^^^   ^         ^^
      this.remove(functionToken.range[0], paramStartParenToken.range[0]);
      this.insert(blockStartBraceToken.range[0], '=> ');

      node.type = Syntax.ArrowFunctionExpression;
    }
  }]);
  return Context;
})(Context$7);

function begin(module) {
  return new Context(module);
}

function enter(node, module, context) {
  context.rewrite(node);
  return null;
}

function referencesThisOrArguments(node, scopeManager) {
  var scope = scopeManager.acquire(node);

  if (scope.thisFound) {
    return true;
  }

  return scope.references.some(function (_ref) {
    var identifier = _ref.identifier;
    return identifier.name === 'arguments';
  });
}

var functionsArrow = Object.freeze({
  name: name,
  description: description,
  begin: begin,
  enter: enter
});

/**
 * Represents a module binding for either an import or export statement.
 */
var Binding = (function () {
  function Binding(localName, exportName) {
    babelHelpers_classCallCheck(this, Binding);

    this.localName = localName;
    this.exportName = exportName;
  }

  babelHelpers_createClass(Binding, [{
    key: 'isAliased',
    value: function isAliased() {
      return this.localName !== this.exportName;
    }
  }, {
    key: 'isDefaultExport',
    value: function isDefaultExport() {
      return this.exportName === 'default';
    }
  }]);
  return Binding;
})();

/**
 * Builds an export specifier list string for use in an export statement.
 */
var ExportSpecifierListStringBuilder = (function () {
  function ExportSpecifierListStringBuilder(bindings) {
    babelHelpers_classCallCheck(this, ExportSpecifierListStringBuilder);

    this.bindings = bindings;
  }

  babelHelpers_createClass(ExportSpecifierListStringBuilder, [{
    key: 'toString',
    value: function toString() {
      return '{ ' + this.bindings.map(function (binding) {
        if (!binding.isAliased()) {
          return binding.localName;
        } else {
          return binding.localName + ' as ' + binding.exportName;
        }
      }).join(', ') + ' }';
    }
  }], [{
    key: 'build',
    value: function build(bindings) {
      return new ExportSpecifierListStringBuilder(bindings).toString();
    }
  }]);
  return ExportSpecifierListStringBuilder;
})();

/**
 * Builds an import specifier list string for use in an import statement.
 */
var ImportSpecifierListStringBuilder = (function () {
  function ImportSpecifierListStringBuilder(bindings) {
    babelHelpers_classCallCheck(this, ImportSpecifierListStringBuilder);

    this.bindings = bindings;
  }

  babelHelpers_createClass(ImportSpecifierListStringBuilder, [{
    key: 'toString',
    value: function toString() {
      var defaultBinding = undefined;
      var namedBindings = [];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.bindings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var binding = _step.value;

          if (binding.isDefaultExport()) {
            defaultBinding = binding;
          } else {
            namedBindings.push(binding);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var result = '';

      var hasNamedBindings = namedBindings.length > 0;
      if (defaultBinding) {
        result += defaultBinding.localName;
        if (hasNamedBindings) {
          result += ', ';
        }
      }

      if (hasNamedBindings) {
        result += '{ ' + namedBindings.map(function (binding) {
          if (!binding.isAliased()) {
            return binding.localName;
          } else {
            return binding.exportName + ' as ' + binding.localName;
          }
        }).join(', ') + ' }';
      }

      return result;
    }
  }], [{
    key: 'build',
    value: function build(bindings) {
      return new ImportSpecifierListStringBuilder(bindings).toString();
    }
  }]);
  return ImportSpecifierListStringBuilder;
})();

var Syntax$8 = estraverse.Syntax;

function isMemberExpression(node) {
  var keyPath = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  if (node.type !== Syntax$8.MemberExpression) {
    return false;
  }

  if (keyPath === null) {
    return true;
  }

  var actualKeyPath = memberExpressionKeyPath(node);

  if (typeof keyPath === 'string') {
    return keyPath === actualKeyPath;
  } else if (typeof keyPath.test === 'function') {
    return keyPath.test(actualKeyPath);
  } else {
    throw new TypeError('keyPath is of unexpected type: ' + (typeof keyPath === 'undefined' ? 'undefined' : babelHelpers_typeof(keyPath)));
  }
}

function memberExpressionKeyPath(node) {
  switch (node.type) {
    case Syntax$8.Identifier:
      return node.name;

    case Syntax$8.MemberExpression:
      var objectPath = memberExpressionKeyPath(node.object);
      var propertyPath = memberExpressionKeyPath(node.property);
      if (!objectPath || !propertyPath || node.computed) {
        return null;
      }
      return objectPath + '.' + propertyPath;

    default:
      return null;
  }
}

var Syntax$1 = estraverse.Syntax;
var VisitorOption$1 = estraverse.VisitorOption;

var name$1 = 'modules.commonjs';
var description$1 = 'Transform CommonJS modules into ES6 modules.';

var Context$1 = (function (_BaseContext) {
  babelHelpers_inherits(Context, _BaseContext);

  function Context(module) {
    babelHelpers_classCallCheck(this, Context);

    var _this = babelHelpers_possibleConstructorReturn(this, Object.getPrototypeOf(Context).call(this, name$1, module));

    module.metadata[name$1] = {
      imports: [],
      exports: [],
      directives: []
    };
    return _this;
  }

  babelHelpers_createClass(Context, [{
    key: 'rewrite',
    value: function rewrite(node) {
      return this.rewriteRequire(node) || this.rewriteExport(node) || this.removeUseStrictDirective(node);
    }

    /**
     * @private
     */

  }, {
    key: 'rewriteRequire',
    value: function rewriteRequire(node) {
      return this.rewriteSingleExportRequire(node) || this.rewriteNamedExportRequire(node) || this.rewriteDeconstructedImportRequire(node) || this.rewriteSideEffectRequire(node) || this.warnAboutUnsupportedRequire(node);
    }

    /**
     * @private
     */

  }, {
    key: 'rewriteSingleExportRequire',
    value: function rewriteSingleExportRequire(node) {
      var parentNode = node.parentNode;

      if (!parentNode || parentNode.type !== Syntax$1.Program) {
        return false;
      }

      var declaration = extractSingleDeclaration(node);

      if (!declaration) {
        return false;
      }

      var id = declaration.id;
      var init = declaration.init;

      if (id.type !== Syntax$1.Identifier) {
        return false;
      }

      var pathNode = extractRequirePathNode(init);

      if (!pathNode) {
        return false;
      }

      this.rewriteRequireAsImport('default-import', node, [new Binding(id.name, 'default')], pathNode);

      replace(node, {
        type: Syntax$1.ImportDeclaration,
        specifiers: [{
          type: Syntax$1.ImportDefaultSpecifier,
          local: id
        }],
        source: pathNode
      });

      return true;
    }

    /**
     * @private
     */

  }, {
    key: 'rewriteNamedExportRequire',
    value: function rewriteNamedExportRequire(node) {
      var parentNode = node.parentNode;

      if (!parentNode || parentNode.type !== Syntax$1.Program) {
        return false;
      }

      var declaration = extractSingleDeclaration(node);

      if (!declaration) {
        return false;
      }

      var id = declaration.id;
      var init = declaration.init;

      if (!init || init.type !== Syntax$1.MemberExpression || init.computed) {
        return false;
      }

      var pathNode = extractRequirePathNode(init.object);

      if (!pathNode) {
        return false;
      }

      this.rewriteRequireAsImport('named-import', node, [new Binding(id.name, init.property.name)], pathNode);

      replace(node, {
        type: Syntax$1.ImportDeclaration,
        specifiers: [{
          type: Syntax$1.ImportSpecifier,
          local: id,
          imported: init.property
        }],
        source: pathNode
      });

      return true;
    }

    /**
     * @private
     */

  }, {
    key: 'rewriteDeconstructedImportRequire',
    value: function rewriteDeconstructedImportRequire(node) {
      var parentNode = node.parentNode;

      if (!parentNode || parentNode.type !== Syntax$1.Program) {
        return false;
      }

      var declaration = extractSingleDeclaration(node);

      if (!declaration) {
        return false;
      }

      var id = declaration.id;
      var init = declaration.init;

      if (id.type !== Syntax$1.ObjectPattern) {
        return false;
      }

      var bindings = [];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = id.properties[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _step.value;
          var key = _step$value.key;
          var value = _step$value.value;

          if (value.type !== Syntax$1.Identifier) {
            return false;
          }
          bindings.push(new Binding(value.name, key.name));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var pathNode = extractRequirePathNode(init);

      if (!pathNode) {
        return false;
      }

      this.rewriteRequireAsImport('named-import', node, bindings, pathNode);

      replace(node, {
        type: Syntax$1.ImportDeclaration,
        specifiers: bindings.map(function (binding) {
          return {
            type: Syntax$1.ImportSpecifier,
            local: {
              type: Syntax$1.Identifier,
              name: binding.localName
            },
            imported: {
              type: Syntax$1.Identifier,
              name: binding.exportName
            }
          };
        }),
        source: pathNode
      });

      return true;
    }

    /**
     * @private
     */

  }, {
    key: 'rewriteSideEffectRequire',
    value: function rewriteSideEffectRequire(node) {
      var parentNode = node.parentNode;

      if (!parentNode || parentNode.type !== Syntax$1.Program) {
        return false;
      }

      if (node.type !== Syntax$1.ExpressionStatement) {
        return false;
      }

      var pathNode = extractRequirePathNode(node.expression);

      if (!pathNode) {
        return false;
      }

      this.rewriteRequireAsImport('bare-import', node, [], pathNode);

      replace(node, {
        type: Syntax$1.ImportDeclaration,
        specifiers: [],
        source: pathNode
      });

      return true;
    }

    /**
     * @private
     */

  }, {
    key: 'warnAboutUnsupportedRequire',
    value: function warnAboutUnsupportedRequire(node) {
      var pathNode = extractRequirePathNode(node);

      if (!pathNode) {
        return false;
      }

      this.module.warn(node, 'unsupported-import', 'Unsupported \'require\' call cannot be transformed to an import');

      return true;
    }

    /**
     * @private
     */

  }, {
    key: 'rewriteRequireAsImport',
    value: function rewriteRequireAsImport(type, node, bindings, pathNode) {
      this.metadata.imports.push({
        type: type,
        node: clone(node),
        bindings: bindings,
        path: pathNode.value
      });

      var pathString = this.slice.apply(this, babelHelpers_toConsumableArray(pathNode.range));
      if (bindings.length === 0) {
        this.overwrite(node.range[0], node.range[1], 'import ' + pathString + ';');
      } else {
        this.overwrite(node.range[0], node.range[1], 'import ' + ImportSpecifierListStringBuilder.build(bindings) + ' from ' + pathString + ';');
      }
    }

    /**
     * @private
     */

  }, {
    key: 'rewriteExport',
    value: function rewriteExport(node) {
      return this.rewriteNamespaceExport(node) || this.rewriteNamedExport(node) || this.rewriteSingleExportAsDefaultExport(node);
    }

    /**
     * @private
     */

  }, {
    key: 'rewriteNamespaceExport',
    value: function rewriteNamespaceExport(node) {
      var right = extractModuleExportsSet(node);

      if (!right) {
        return false;
      }

      var pathNode = extractRequirePathNode(right);

      if (!pathNode) {
        return false;
      }

      this.overwrite.apply(this, babelHelpers_toConsumableArray(node.expression.range).concat(['export * from ' + this.slice.apply(this, babelHelpers_toConsumableArray(pathNode.range))]));

      this.metadata.exports.push({
        type: 'namespace-export',
        bindings: [],
        node: clone(node)
      });

      replace(node, {
        type: Syntax$1.ExportAllDeclaration,
        source: pathNode
      });
    }

    /**
     * @private
     */

  }, {
    key: 'rewriteNamedExport',
    value: function rewriteNamedExport(node) {
      if (node.type !== Syntax$1.ExpressionStatement) {
        return false;
      }

      var expression = node.expression;

      if (expression.type !== Syntax$1.AssignmentExpression) {
        return false;
      }

      var left = expression.left;
      var right = expression.right;

      if (!isMemberExpression(left, /^(module\.)?exports\.\w+$/) || left.computed) {
        return false;
      }

      var property = left.property;

      if (node.parentNode.type !== Syntax$1.Program) {
        this.module.warn(node, 'unsupported-export', 'Unsupported export cannot be turned into an \'export\' statement');
        return false;
      }

      if (right.type === Syntax$1.FunctionExpression) {
        var exportName = property.name;
        var id = right.id;

        this.metadata.exports.push({
          type: 'named-export',
          bindings: [{
            exportName: exportName,
            localName: id ? id.name : exportName
          }],
          node: clone(node)
        });

        this.overwrite(node.range[0], right.range[0], 'export ');

        if (!id) {
          this.insert(right.range[0] + 'function'.length, ' ' + exportName);
          right.id = { type: Syntax$1.Identifier, name: exportName };
        } else if (id.name !== property.name) {
          this.overwrite(id.range[0], id.range[1], property.name);
          this.module.warn(clone(id), 'export-function-name-mismatch', 'Exported function \'' + id.name + '\' does not match export name \'' + exportName + '\'');
          id.name = property.name;
        }

        var lastCharacterPosition = node.range[1] - 1;
        if (this.charAt(lastCharacterPosition) === ';') {
          this.remove(lastCharacterPosition, node.range[1]);
        }

        right.type = Syntax$1.FunctionDeclaration;
        right.expression = false;
        right.id = {
          type: Syntax$1.Identifier,
          name: exportName
        };
        delete right.range;

        replace(node, {
          type: Syntax$1.ExportNamedDeclaration,
          source: null,
          specifiers: [],
          declaration: right
        });
      } else if (right.type === Syntax$1.Identifier) {
        this.metadata.exports.push({
          type: 'named-export',
          bindings: [{
            exportName: property.name,
            localName: right.name
          }],
          node: clone(node)
        });

        if (right.name === property.name) {
          this.overwrite(node.range[0], node.range[1], 'export { ' + right.name + ' };');
        } else {
          this.overwrite(node.range[0], node.range[1], 'export { ' + right.name + ' as ' + property.name + ' };');
        }

        replace(node, {
          type: Syntax$1.ExportNamedDeclaration,
          source: null,
          declaration: null,
          specifiers: [{
            type: Syntax$1.ExportSpecifier,
            local: right,
            exported: property
          }]
        });
      } else {
        if (this.module.moduleScope.isUsedName(property.name)) {
          this.module.warn(clone(property), 'named-export-conflicts-with-local-binding', 'Named export \'' + property.name + '\' conflicts with existing local binding');
        }

        this.metadata.exports.push({
          type: 'named-export',
          bindings: [{
            exportName: property.name,
            localName: property.name
          }],
          node: clone(node)
        });

        this.overwrite(node.range[0], property.range[0], 'export let ');

        replace(node, {
          type: Syntax$1.ExportNamedDeclaration,
          source: null,
          specifiers: [],
          declaration: {
            type: Syntax$1.VariableDeclaration,
            kind: 'let',
            declarations: [{
              type: Syntax$1.VariableDeclarator,
              id: {
                type: Syntax$1.Identifier,
                name: property.name
              },
              init: right
            }]
          }
        });
      }

      return true;
    }

    /**
     * @private
     */

  }, {
    key: 'rewriteSingleExportAsDefaultExport',
    value: function rewriteSingleExportAsDefaultExport(node) {
      var right = extractModuleExportsSet(node);

      if (right === null) {
        return false;
      }

      if (right.type === Syntax$1.ObjectExpression) {
        var _bindings = [];
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = right.properties[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _step2$value = _step2.value;
            var key = _step2$value.key;
            var value = _step2$value.value;

            _bindings.push(new Binding(value.name, key.name));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        this.metadata.exports.push({
          type: 'named-export',
          bindings: _bindings,
          node: clone(node)
        });
        this.overwrite(node.range[0], node.range[1], 'export ' + ExportSpecifierListStringBuilder.build(_bindings) + ';');

        replace(node, {
          type: Syntax$1.ExportNamedDeclaration,
          source: null,
          declaration: null,
          specifiers: _bindings.map(function (binding) {
            return {
              type: Syntax$1.ExportSpecifier,
              local: {
                type: Syntax$1.Identifier,
                name: binding.localName
              },
              exported: {
                type: Syntax$1.Identifier,
                name: binding.exportName
              }
            };
          })
        });
      } else {
        this.metadata.exports.push({ type: 'default-export', node: clone(node) });
        this.overwrite(node.range[0], right.range[0], 'export default ');

        replace(node, {
          type: Syntax$1.ExportDefaultDeclaration,
          declaration: right
        });
      }

      return true;
    }

    /**
     * @private
     */

  }, {
    key: 'removeUseStrictDirective',
    value: function removeUseStrictDirective(node) {
      if (node.type !== Syntax$1.ExpressionStatement) {
        return false;
      }

      var expression = node.expression;

      if (expression.type !== Syntax$1.Literal) {
        return false;
      }

      if (expression.value !== 'use strict') {
        return false;
      }

      if (node.parentNode.body[0] !== node) {
        return false;
      }

      var _node$range = babelHelpers_slicedToArray(node.range, 2);

      var start = _node$range[0];
      var end = _node$range[1];

      if ((start === 0 || this.charAt(start - '\n'.length) === '\n') && this.charAt(end) === '\n') {
        end += '\n'.length;
      }

      this.metadata.directives.push({
        type: 'removed-strict-mode',
        node: node
      });

      node.parentNode.body.splice(0, 1);

      this.remove(start, end);
      return true;
    }
  }]);
  return Context;
})(Context$7);

function begin$1(module) {
  return new Context$1(module);
}

function enter$1(node, module, context) {
  if (/Function/.test(node.type) || context.rewrite(node)) {
    return VisitorOption$1.Skip;
  }
}

function extractSingleDeclaration(node) {
  if (node.type !== Syntax$1.VariableDeclaration) {
    return null;
  }

  if (node.declarations.length !== 1) {
    return null;
  }

  return node.declarations[0];
}

function extractRequirePathNode(node) {
  if (!node || node.type !== Syntax$1.CallExpression) {
    return null;
  }

  if (node.callee.type !== Syntax$1.Identifier || node.callee.name !== 'require') {
    return null;
  }

  if (node.arguments.length !== 1) {
    return null;
  }

  var arg = node.arguments[0];

  if (arg.type !== Syntax$1.Literal || typeof arg.value !== 'string') {
    return null;
  }

  return arg;
}

/**
 * @private
 */
function extractModuleExportsSet(node) {
  if (node.type !== Syntax$1.ExpressionStatement) {
    return null;
  }

  var expression = node.expression;

  if (expression.type !== Syntax$1.AssignmentExpression) {
    return null;
  }

  var left = expression.left;
  var right = expression.right;

  if (left.type !== Syntax$1.MemberExpression || left.computed) {
    return null;
  }

  var object = left.object;
  var property = left.property;

  if (object.type !== Syntax$1.Identifier || object.name !== 'module') {
    return null;
  }

  if (property.type !== Syntax$1.Identifier || property.name !== 'exports') {
    return null;
  }

  return right;
}

var modulesCommonjs = Object.freeze({
  name: name$1,
  description: description$1,
  begin: begin$1,
  enter: enter$1
});

var Syntax$6 = estraverse.Syntax;
var name$6 = 'objects.concise';
var description$6 = 'Use concise object property method syntax.';

var Context$6 = (function (_BaseContext) {
  babelHelpers_inherits(Context, _BaseContext);

  function Context(module) {
    babelHelpers_classCallCheck(this, Context);

    var _this = babelHelpers_possibleConstructorReturn(this, Object.getPrototypeOf(Context).call(this, name$6, module));

    module.metadata[name$6] = { properties: [] };
    return _this;
  }

  babelHelpers_createClass(Context, [{
    key: 'collapsePropertyToConcise',
    value: function collapsePropertyToConcise(node) {
      if (node.type !== Syntax$6.Property) {
        return false;
      }

      if (node.method) {
        return false;
      }

      if (node.value.type !== Syntax$6.FunctionExpression || node.value.id) {
        return false;
      }

      var keyEnd = node.key.range[1];
      var functionEnd = this.endIndexOf('function', keyEnd);

      if (node.computed) {
        this.remove(this.endIndexOf(']', keyEnd), functionEnd);
      } else {
        this.remove(keyEnd, functionEnd);
      }

      this.metadata.properties.push(clone(node));
      node.method = true;

      return true;
    }
  }]);
  return Context;
})(Context$7);

function begin$6(module) {
  return new Context$6(module);
}

function enter$6(node, module, context) {
  context.collapsePropertyToConcise(node);
  return null;
}

var objectsConcise = Object.freeze({
  name: name$6,
  description: description$6,
  begin: begin$6,
  enter: enter$6
});

var Syntax$5 = estraverse.Syntax;
var name$5 = 'objects.shorthand';
var description$5 = 'Use shorthand notation for object properties.';

var Context$5 = (function (_BaseContext) {
  babelHelpers_inherits(Context, _BaseContext);

  function Context(module) {
    babelHelpers_classCallCheck(this, Context);

    var _this = babelHelpers_possibleConstructorReturn(this, Object.getPrototypeOf(Context).call(this, name$5, module));

    module.metadata[name$5] = { properties: [] };
    return _this;
  }

  babelHelpers_createClass(Context, [{
    key: 'collapsePropertyToConcise',
    value: function collapsePropertyToConcise(node) {
      if (node.type !== Syntax$5.Property) {
        return false;
      }

      if (node.computed || node.shorthand) {
        return false;
      }

      if (node.key.type !== Syntax$5.Identifier || node.value.type !== Syntax$5.Identifier) {
        return false;
      }

      if (node.key.name !== node.value.name) {
        return false;
      }

      var _module$tokensForNode = this.module.tokensForNode(node);

      var _module$tokensForNode2 = babelHelpers_slicedToArray(_module$tokensForNode, 3);

      var keyToken = _module$tokensForNode2[0];
      var colonToken = _module$tokensForNode2[1];
      var valueToken = _module$tokensForNode2[2];

      var sourceBetweenKeyAndColon = this.slice(keyToken.range[1], colonToken.range[0]);
      var sourceBetweenColonAndValue = this.slice(colonToken.range[1], valueToken.range[0]);

      // `a /* 1 */ : /* 2 */ a` -> `/* 1 *//* 2 */a`
      //  ^^^^^^^^^^^                ^^^^^^^
      this.overwrite(keyToken.range[0], colonToken.range[1], sourceBetweenKeyAndColon.trim());

      // `a /* 1 */ : /* 2 */ a` -> `/* 1 *//* 2 */a`
      //             ^^^^^^^^^              ^^^^^^^
      this.overwrite(colonToken.range[1], valueToken.range[0], sourceBetweenColonAndValue.trim());

      this.metadata.properties.push(clone(node));
      node.shorthand = true;

      return true;
    }
  }]);
  return Context;
})(Context$7);

function begin$5(module) {
  return new Context$5(module);
}

function enter$5(node, module, context) {
  context.collapsePropertyToConcise(node);
  return null;
}

var objectsShorthand = Object.freeze({
  name: name$5,
  description: description$5,
  begin: begin$5,
  enter: enter$5
});

var allPlugins = [objectsShorthand, objectsConcise, modulesCommonjs, functionsArrow, declarationsBlockScope, objectsDestructuring, stringsTemplate];

var OptionError = (function (_Error) {
  babelHelpers_inherits(OptionError, _Error);

  function OptionError(message) {
    babelHelpers_classCallCheck(this, OptionError);

    var _this = babelHelpers_possibleConstructorReturn(this, Object.getPrototypeOf(OptionError).call(this, message));

    _this.message = message;
    return _this;
  }

  return OptionError;
})(Error);

var DelayedWritableFileStream = (function () {
  function DelayedWritableFileStream(path, options) {
    babelHelpers_classCallCheck(this, DelayedWritableFileStream);

    this.path = path;
    this.options = options;
  }

  babelHelpers_createClass(DelayedWritableFileStream, [{
    key: 'write',
    value: function write(chunk) {
      return this.stream.write(chunk);
    }
  }, {
    key: 'end',
    value: function end() {
      return this.stream.end();
    }
  }, {
    key: 'stream',
    get: function get() {
      if (!this._stream) {
        mkdirp.sync(path.dirname(this.path));
        this._stream = fs.createWriteStream(this.path, this.options);
      }
      return this._stream;
    }
  }]);
  return DelayedWritableFileStream;
})();

function convert(source) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  if (Array.isArray(options)) {
    console.warn('convert(source, plugins) is deprecated, please call as convert(source, options)'); // eslint-disable-line no-console
    options = { plugins: options };
  }

  var _options = options;
  var _options$validate = _options.validate;
  var validate = _options$validate === undefined ? true : _options$validate;
  var _options$plugins = _options.plugins;
  var plugins = _options$plugins === undefined ? allPlugins : _options$plugins;

  var shebangMatch = source.match(shebangRegex);

  if (shebangMatch) {
    source = source.slice(shebangMatch.index + shebangMatch[0].length);
  }

  var module = new Module(null, source);

  plugins.forEach(function (plugin) {
    var begin = plugin.begin;
    var end = plugin.end;
    var enter = plugin.enter;
    var leave = plugin.leave;

    var context = begin ? begin(module) : null;

    estraverse.traverse(module.ast, {
      enter: (function (_enter) {
        function enter(_x2, _x3) {
          return _enter.apply(this, arguments);
        }

        enter.toString = function () {
          return _enter.toString();
        };

        return enter;
      })(function (node, parent) {
        Object.defineProperty(node, 'parentNode', {
          value: parent,
          configurable: true,
          enumerable: false
        });
        if (enter) {
          return enter(node, module, context);
        }
      }),
      leave: (function (_leave) {
        function leave(_x4) {
          return _leave.apply(this, arguments);
        }

        leave.toString = function () {
          return _leave.toString();
        };

        return leave;
      })(function (node) {
        if (leave) {
          return leave(node, module, context);
        }
      })
    });

    if (end) {
      end(module, context);
    }
  });

  var result = module.render();

  if (validate) {
    var error = validateResult(result);
    if (error) {
      result.warnings.push({
        type: 'output-validation-failure',
        message: error.description,
        node: {
          loc: {
            start: {
              line: error.lineNumber,
              column: error.column - 1
            }
          }
        }
      });
    }
  }

  if (shebangMatch) {
    result.code = shebangMatch[0] + result.code;
  }

  return result;
}

function validateResult(_ref) {
  var code = _ref.code;

  try {
    espree.parse(code, { sourceType: 'module' });
    return null;
  } catch (ex) {
    return ex;
  }
}

const cjs = allPlugins.find(plugin => plugin.name === 'modules.commonjs');

var rollup_test_config = {
  entry: 'test/test.js',
  plugins: [
    json(),
    npm({
      main: true,
      jsnext: true
    }),
    {
      transform(code, id) {
        if (id.indexOf('node_modules/') >= 0) {
          console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', id);
          return convert(code, { plugins: [cjs] });
        }
      }
    },
    babel({
      babelrc: false,
      presets: ['es2015-rollup'],
      plugins: ['syntax-flow', 'transform-flow-strip-types']
    })
  ],
  format: 'cjs',
  dest: 'build/test-bundle.js'
};

module.exports = rollup_test_config;