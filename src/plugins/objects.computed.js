import BaseContext from '../context';
import clone from '../utils/clone';
import estraverse from 'estraverse'; // TODO: import { traverse } from 'estraverse';
import type Module from '../module';

const { Syntax, VisitorOption  } = estraverse;

export const name = 'objects.computed';
export const description = 'Use computed property keys in object literals';

type Metadata = {
  properties: Array<Object>
};

class Context extends BaseContext {
  constructor(module: Module) {
    super(name, module);
    module.metadata[name] = ({ properties: [] }: Metadata);
  }

  combineStatementsInBody(node: Object) {
    switch (node.type) {
      case Syntax.BlockStatement:
      case Syntax.Program:
        this.combineStatements(node.body);
        break;
    }
  }

  combineStatements(statements: Array<Object>) {
    let objectExpressionStatement;
    let propertySetStatements;

    statements.forEach(statement => {
      if (objectExpressionStatement) {
        if (this._isPropertySetForObjectInitializer(statement, objectExpressionStatement)) {
          propertySetStatements.push(statement);
        } else {
          this.combineAssignmentsIntoInitializer(propertySetStatements, objectExpressionStatement);
          objectExpressionStatement = null;
          propertySetStatements = null;
        }
      } else if (this._isObjectInitializeStatement(statement)) {
        objectExpressionStatement = statement;
        propertySetStatements = [];
      }
    });

    if (objectExpressionStatement) {
      this.combineAssignmentsIntoInitializer(propertySetStatements, objectExpressionStatement);
    }
  }

  combineAssignmentsIntoInitializer(assignments: Array<Object>, initializer: Object) {
    if (assignments.length) {
      const object = initializer.expression.right;
      const properties = object.properties;
      const isEmptyObject = properties.length === 0;
      const endOfLastProperty = isEmptyObject ?
        object.range[1] - '}'.length :
        properties[properties.length - 1].range[1];
      this.overwrite(
        endOfLastProperty,
        assignments[0].expression.left.object.range[1],
        isEmptyObject ? ' ' : ', '
      );
      assignments.forEach(assignment => {
        const { left, right } = assignment.expression;
        this.overwrite(left.range[1], right.range[0], ': ');
      });
      this.insert(assignments[assignments.length - 1].expression.range[1], ' }');
    }
  }

  _isObjectInitializeStatement(node: Object): boolean {
    if (node.type !== Syntax.ExpressionStatement) {
      return false;
    }

    const { expression } = node;

    if (expression.type !== Syntax.AssignmentExpression) {
      return false;
    }

    return (
      expression.left.type === Syntax.Identifier &&
      expression.right.type === Syntax.ObjectExpression
    );
  }

  _isPropertySetForObjectInitializer(node: Object, objectInitializer: Object): boolean {
    if (node.type !== Syntax.ExpressionStatement) {
      return false;
    }

    const { expression } = node;

    if (expression.type !== Syntax.AssignmentExpression) {
      return false;
    }

    const { left } = expression;

    if (left.type !== Syntax.MemberExpression) {
      return false;
    }

    if (left.object.type !== Syntax.Identifier) {
      return false;
    }

    return left.object.name === objectInitializer.expression.left.name;
  }
}

export function begin(module: Module): Context {
  return new Context(module);
}

export function enter(node: Object, parent: Object, module: Module, context: Context): ?VisitorOption {
  context.combineStatementsInBody(node, parent);
  return null;
}
