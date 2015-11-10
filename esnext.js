(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    factory((global.esnext = {}));
}(this, function (exports) { 'use strict';

    var babelHelpers = {};

    babelHelpers.createClass = (function () {
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

    babelHelpers.toConsumableArray = function (arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

        return arr2;
      } else {
        return Array.from(arr);
      }
    };

    babelHelpers.slicedToArray = (function () {
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

    babelHelpers.classCallCheck = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    var _args = [["estraverse@^4.1.1", "/Users/donovan/src/esnext"]];
    var _from = "estraverse@>=4.1.1 <5.0.0";
    var _id = "estraverse@4.1.1";
    var _inCache = true;
    var _installable = true;
    var _location = "/estraverse";
    var _nodeVersion = "4.1.1";
    var _npmUser = { "email": "utatane.tea@gmail.com", "name": "constellation" };
    var _npmVersion = "2.14.4";
    var _phantomChildren = {};
    var _requested = { "name": "estraverse", "raw": "estraverse@^4.1.1", "rawSpec": "^4.1.1", "scope": null, "spec": ">=4.1.1 <5.0.0", "type": "range" };
    var _requiredBy = ["/"];
    var _resolved = "https://registry.npmjs.org/estraverse/-/estraverse-4.1.1.tgz";
    var _shasum = "f6caca728933a850ef90661d0e17982ba47111a2";
    var _shrinkwrap = null;
    var _spec = "estraverse@^4.1.1";
    var _where = "/Users/donovan/src/esnext";
    var bugs = { "url": "https://github.com/estools/estraverse/issues" };
    var dependencies = {};
    var description$1 = "ECMAScript JS AST traversal functions";
    var devDependencies = { "chai": "^2.1.1", "coffee-script": "^1.8.0", "espree": "^1.11.0", "gulp": "^3.8.10", "gulp-bump": "^0.2.2", "gulp-filter": "^2.0.0", "gulp-git": "^1.0.1", "gulp-tag-version": "^1.2.1", "jshint": "^2.5.6", "mocha": "^2.1.0" };
    var directories = {};
    var dist = { "shasum": "f6caca728933a850ef90661d0e17982ba47111a2", "tarball": "http://registry.npmjs.org/estraverse/-/estraverse-4.1.1.tgz" };
    var engines = { "node": ">=0.10.0" };
    var gitHead = "bbcccbfe98296585e4311c8755e1d00dcd581e3c";
    var homepage = "https://github.com/estools/estraverse";
    var license = "BSD-2-Clause";
    var main = "estraverse.js";
    var maintainers = [{ "name": "constellation", "email": "utatane.tea@gmail.com" }, { "name": "michaelficarra", "email": "npm@michael.ficarra.me" }, { "name": "nzakas", "email": "nicholas@nczconsulting.com" }];
    var name$1 = "estraverse";
    var optionalDependencies = {};
    var repository = { "type": "git", "url": "git+ssh://git@github.com/estools/estraverse.git" };
    var scripts = { "lint": "jshint estraverse.js", "test": "npm run-script lint && npm run-script unit-test", "unit-test": "mocha --compilers coffee:coffee-script/register" };
    var version = "4.1.1";
    var require$$0 = {
    	_args: _args,
    	_from: _from,
    	_id: _id,
    	_inCache: _inCache,
    	_installable: _installable,
    	_location: _location,
    	_nodeVersion: _nodeVersion,
    	_npmUser: _npmUser,
    	_npmVersion: _npmVersion,
    	_phantomChildren: _phantomChildren,
    	_requested: _requested,
    	_requiredBy: _requiredBy,
    	_resolved: _resolved,
    	_shasum: _shasum,
    	_shrinkwrap: _shrinkwrap,
    	_spec: _spec,
    	_where: _where,
    	bugs: bugs,
    	dependencies: dependencies,
    	description: description$1,
    	devDependencies: devDependencies,
    	directories: directories,
    	dist: dist,
    	engines: engines,
    	gitHead: gitHead,
    	homepage: homepage,
    	license: license,
    	main: main,
    	maintainers: maintainers,
    	name: name$1,
    	optionalDependencies: optionalDependencies,
    	repository: repository,
    	scripts: scripts,
    	version: version
    };

    var estraverse = (function (module) {
    var exports = module.exports;
    /*
      Copyright (C) 2012-2013 Yusuke Suzuki <utatane.tea@gmail.com>
      Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>

      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are met:

        * Redistributions of source code must retain the above copyright
          notice, this list of conditions and the following disclaimer.
        * Redistributions in binary form must reproduce the above copyright
          notice, this list of conditions and the following disclaimer in the
          documentation and/or other materials provided with the distribution.

      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
      ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
      DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
      (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
      LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
      ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
      (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
      THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */
    /*jslint vars:false, bitwise:true*/
    /*jshint indent:4*/
    /*global exports:true*/
    'use strict';

    (function clone(exports) {
        'use strict';

        var Syntax, isArray, VisitorOption, VisitorKeys, objectCreate, objectKeys, BREAK, SKIP, REMOVE;

        function ignoreJSHintError() {}

        isArray = Array.isArray;
        if (!isArray) {
            isArray = function isArray(array) {
                return Object.prototype.toString.call(array) === '[object Array]';
            };
        }

        function deepCopy(obj) {
            var ret = {},
                key,
                val;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    val = obj[key];
                    if (typeof val === 'object' && val !== null) {
                        ret[key] = deepCopy(val);
                    } else {
                        ret[key] = val;
                    }
                }
            }
            return ret;
        }

        function shallowCopy(obj) {
            var ret = {},
                key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    ret[key] = obj[key];
                }
            }
            return ret;
        }
        ignoreJSHintError(shallowCopy);

        // based on LLVM libc++ upper_bound / lower_bound
        // MIT License

        function upperBound(array, func) {
            var diff, len, i, current;

            len = array.length;
            i = 0;

            while (len) {
                diff = len >>> 1;
                current = i + diff;
                if (func(array[current])) {
                    len = diff;
                } else {
                    i = current + 1;
                    len -= diff + 1;
                }
            }
            return i;
        }

        function lowerBound(array, func) {
            var diff, len, i, current;

            len = array.length;
            i = 0;

            while (len) {
                diff = len >>> 1;
                current = i + diff;
                if (func(array[current])) {
                    i = current + 1;
                    len -= diff + 1;
                } else {
                    len = diff;
                }
            }
            return i;
        }
        ignoreJSHintError(lowerBound);

        objectCreate = Object.create || (function () {
            function F() {}

            return function (o) {
                F.prototype = o;
                return new F();
            };
        })();

        objectKeys = Object.keys || function (o) {
            var keys = [],
                key;
            for (key in o) {
                keys.push(key);
            }
            return keys;
        };

        function extend(to, from) {
            var keys = objectKeys(from),
                key,
                i,
                len;
            for (i = 0, len = keys.length; i < len; i += 1) {
                key = keys[i];
                to[key] = from[key];
            }
            return to;
        }

        Syntax = {
            AssignmentExpression: 'AssignmentExpression',
            AssignmentPattern: 'AssignmentPattern',
            ArrayExpression: 'ArrayExpression',
            ArrayPattern: 'ArrayPattern',
            ArrowFunctionExpression: 'ArrowFunctionExpression',
            AwaitExpression: 'AwaitExpression', // CAUTION: It's deferred to ES7.
            BlockStatement: 'BlockStatement',
            BinaryExpression: 'BinaryExpression',
            BreakStatement: 'BreakStatement',
            CallExpression: 'CallExpression',
            CatchClause: 'CatchClause',
            ClassBody: 'ClassBody',
            ClassDeclaration: 'ClassDeclaration',
            ClassExpression: 'ClassExpression',
            ComprehensionBlock: 'ComprehensionBlock', // CAUTION: It's deferred to ES7.
            ComprehensionExpression: 'ComprehensionExpression', // CAUTION: It's deferred to ES7.
            ConditionalExpression: 'ConditionalExpression',
            ContinueStatement: 'ContinueStatement',
            DebuggerStatement: 'DebuggerStatement',
            DirectiveStatement: 'DirectiveStatement',
            DoWhileStatement: 'DoWhileStatement',
            EmptyStatement: 'EmptyStatement',
            ExportAllDeclaration: 'ExportAllDeclaration',
            ExportDefaultDeclaration: 'ExportDefaultDeclaration',
            ExportNamedDeclaration: 'ExportNamedDeclaration',
            ExportSpecifier: 'ExportSpecifier',
            ExpressionStatement: 'ExpressionStatement',
            ForStatement: 'ForStatement',
            ForInStatement: 'ForInStatement',
            ForOfStatement: 'ForOfStatement',
            FunctionDeclaration: 'FunctionDeclaration',
            FunctionExpression: 'FunctionExpression',
            GeneratorExpression: 'GeneratorExpression', // CAUTION: It's deferred to ES7.
            Identifier: 'Identifier',
            IfStatement: 'IfStatement',
            ImportDeclaration: 'ImportDeclaration',
            ImportDefaultSpecifier: 'ImportDefaultSpecifier',
            ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
            ImportSpecifier: 'ImportSpecifier',
            Literal: 'Literal',
            LabeledStatement: 'LabeledStatement',
            LogicalExpression: 'LogicalExpression',
            MemberExpression: 'MemberExpression',
            MetaProperty: 'MetaProperty',
            MethodDefinition: 'MethodDefinition',
            ModuleSpecifier: 'ModuleSpecifier',
            NewExpression: 'NewExpression',
            ObjectExpression: 'ObjectExpression',
            ObjectPattern: 'ObjectPattern',
            Program: 'Program',
            Property: 'Property',
            RestElement: 'RestElement',
            ReturnStatement: 'ReturnStatement',
            SequenceExpression: 'SequenceExpression',
            SpreadElement: 'SpreadElement',
            Super: 'Super',
            SwitchStatement: 'SwitchStatement',
            SwitchCase: 'SwitchCase',
            TaggedTemplateExpression: 'TaggedTemplateExpression',
            TemplateElement: 'TemplateElement',
            TemplateLiteral: 'TemplateLiteral',
            ThisExpression: 'ThisExpression',
            ThrowStatement: 'ThrowStatement',
            TryStatement: 'TryStatement',
            UnaryExpression: 'UnaryExpression',
            UpdateExpression: 'UpdateExpression',
            VariableDeclaration: 'VariableDeclaration',
            VariableDeclarator: 'VariableDeclarator',
            WhileStatement: 'WhileStatement',
            WithStatement: 'WithStatement',
            YieldExpression: 'YieldExpression'
        };

        VisitorKeys = {
            AssignmentExpression: ['left', 'right'],
            AssignmentPattern: ['left', 'right'],
            ArrayExpression: ['elements'],
            ArrayPattern: ['elements'],
            ArrowFunctionExpression: ['params', 'body'],
            AwaitExpression: ['argument'], // CAUTION: It's deferred to ES7.
            BlockStatement: ['body'],
            BinaryExpression: ['left', 'right'],
            BreakStatement: ['label'],
            CallExpression: ['callee', 'arguments'],
            CatchClause: ['param', 'body'],
            ClassBody: ['body'],
            ClassDeclaration: ['id', 'superClass', 'body'],
            ClassExpression: ['id', 'superClass', 'body'],
            ComprehensionBlock: ['left', 'right'], // CAUTION: It's deferred to ES7.
            ComprehensionExpression: ['blocks', 'filter', 'body'], // CAUTION: It's deferred to ES7.
            ConditionalExpression: ['test', 'consequent', 'alternate'],
            ContinueStatement: ['label'],
            DebuggerStatement: [],
            DirectiveStatement: [],
            DoWhileStatement: ['body', 'test'],
            EmptyStatement: [],
            ExportAllDeclaration: ['source'],
            ExportDefaultDeclaration: ['declaration'],
            ExportNamedDeclaration: ['declaration', 'specifiers', 'source'],
            ExportSpecifier: ['exported', 'local'],
            ExpressionStatement: ['expression'],
            ForStatement: ['init', 'test', 'update', 'body'],
            ForInStatement: ['left', 'right', 'body'],
            ForOfStatement: ['left', 'right', 'body'],
            FunctionDeclaration: ['id', 'params', 'body'],
            FunctionExpression: ['id', 'params', 'body'],
            GeneratorExpression: ['blocks', 'filter', 'body'], // CAUTION: It's deferred to ES7.
            Identifier: [],
            IfStatement: ['test', 'consequent', 'alternate'],
            ImportDeclaration: ['specifiers', 'source'],
            ImportDefaultSpecifier: ['local'],
            ImportNamespaceSpecifier: ['local'],
            ImportSpecifier: ['imported', 'local'],
            Literal: [],
            LabeledStatement: ['label', 'body'],
            LogicalExpression: ['left', 'right'],
            MemberExpression: ['object', 'property'],
            MetaProperty: ['meta', 'property'],
            MethodDefinition: ['key', 'value'],
            ModuleSpecifier: [],
            NewExpression: ['callee', 'arguments'],
            ObjectExpression: ['properties'],
            ObjectPattern: ['properties'],
            Program: ['body'],
            Property: ['key', 'value'],
            RestElement: ['argument'],
            ReturnStatement: ['argument'],
            SequenceExpression: ['expressions'],
            SpreadElement: ['argument'],
            Super: [],
            SwitchStatement: ['discriminant', 'cases'],
            SwitchCase: ['test', 'consequent'],
            TaggedTemplateExpression: ['tag', 'quasi'],
            TemplateElement: [],
            TemplateLiteral: ['quasis', 'expressions'],
            ThisExpression: [],
            ThrowStatement: ['argument'],
            TryStatement: ['block', 'handler', 'finalizer'],
            UnaryExpression: ['argument'],
            UpdateExpression: ['argument'],
            VariableDeclaration: ['declarations'],
            VariableDeclarator: ['id', 'init'],
            WhileStatement: ['test', 'body'],
            WithStatement: ['object', 'body'],
            YieldExpression: ['argument']
        };

        // unique id
        BREAK = {};
        SKIP = {};
        REMOVE = {};

        VisitorOption = {
            Break: BREAK,
            Skip: SKIP,
            Remove: REMOVE
        };

        function Reference(parent, key) {
            this.parent = parent;
            this.key = key;
        }

        Reference.prototype.replace = function replace(node) {
            this.parent[this.key] = node;
        };

        Reference.prototype.remove = function remove() {
            if (isArray(this.parent)) {
                this.parent.splice(this.key, 1);
                return true;
            } else {
                this.replace(null);
                return false;
            }
        };

        function Element(node, path, wrap, ref) {
            this.node = node;
            this.path = path;
            this.wrap = wrap;
            this.ref = ref;
        }

        function Controller() {}

        // API:
        // return property path array from root to current node
        Controller.prototype.path = function path() {
            var i, iz, j, jz, result, element;

            function addToPath(result, path) {
                if (isArray(path)) {
                    for (j = 0, jz = path.length; j < jz; ++j) {
                        result.push(path[j]);
                    }
                } else {
                    result.push(path);
                }
            }

            // root node
            if (!this.__current.path) {
                return null;
            }

            // first node is sentinel, second node is root element
            result = [];
            for (i = 2, iz = this.__leavelist.length; i < iz; ++i) {
                element = this.__leavelist[i];
                addToPath(result, element.path);
            }
            addToPath(result, this.__current.path);
            return result;
        };

        // API:
        // return type of current node
        Controller.prototype.type = function () {
            var node = this.current();
            return node.type || this.__current.wrap;
        };

        // API:
        // return array of parent elements
        Controller.prototype.parents = function parents() {
            var i, iz, result;

            // first node is sentinel
            result = [];
            for (i = 1, iz = this.__leavelist.length; i < iz; ++i) {
                result.push(this.__leavelist[i].node);
            }

            return result;
        };

        // API:
        // return current node
        Controller.prototype.current = function current() {
            return this.__current.node;
        };

        Controller.prototype.__execute = function __execute(callback, element) {
            var previous, result;

            result = undefined;

            previous = this.__current;
            this.__current = element;
            this.__state = null;
            if (callback) {
                result = callback.call(this, element.node, this.__leavelist[this.__leavelist.length - 1].node);
            }
            this.__current = previous;

            return result;
        };

        // API:
        // notify control skip / break
        Controller.prototype.notify = function notify(flag) {
            this.__state = flag;
        };

        // API:
        // skip child nodes of current node
        Controller.prototype.skip = function () {
            this.notify(SKIP);
        };

        // API:
        // break traversals
        Controller.prototype['break'] = function () {
            this.notify(BREAK);
        };

        // API:
        // remove node
        Controller.prototype.remove = function () {
            this.notify(REMOVE);
        };

        Controller.prototype.__initialize = function (root, visitor) {
            this.visitor = visitor;
            this.root = root;
            this.__worklist = [];
            this.__leavelist = [];
            this.__current = null;
            this.__state = null;
            this.__fallback = visitor.fallback === 'iteration';
            this.__keys = VisitorKeys;
            if (visitor.keys) {
                this.__keys = extend(objectCreate(this.__keys), visitor.keys);
            }
        };

        function isNode(node) {
            if (node == null) {
                return false;
            }
            return typeof node === 'object' && typeof node.type === 'string';
        }

        function isProperty(nodeType, key) {
            return (nodeType === Syntax.ObjectExpression || nodeType === Syntax.ObjectPattern) && 'properties' === key;
        }

        Controller.prototype.traverse = function traverse(root, visitor) {
            var worklist, leavelist, element, node, nodeType, ret, key, current, current2, candidates, candidate, sentinel;

            this.__initialize(root, visitor);

            sentinel = {};

            // reference
            worklist = this.__worklist;
            leavelist = this.__leavelist;

            // initialize
            worklist.push(new Element(root, null, null, null));
            leavelist.push(new Element(null, null, null, null));

            while (worklist.length) {
                element = worklist.pop();

                if (element === sentinel) {
                    element = leavelist.pop();

                    ret = this.__execute(visitor.leave, element);

                    if (this.__state === BREAK || ret === BREAK) {
                        return;
                    }
                    continue;
                }

                if (element.node) {

                    ret = this.__execute(visitor.enter, element);

                    if (this.__state === BREAK || ret === BREAK) {
                        return;
                    }

                    worklist.push(sentinel);
                    leavelist.push(element);

                    if (this.__state === SKIP || ret === SKIP) {
                        continue;
                    }

                    node = element.node;
                    nodeType = node.type || element.wrap;
                    candidates = this.__keys[nodeType];
                    if (!candidates) {
                        if (this.__fallback) {
                            candidates = objectKeys(node);
                        } else {
                            throw new Error('Unknown node type ' + nodeType + '.');
                        }
                    }

                    current = candidates.length;
                    while ((current -= 1) >= 0) {
                        key = candidates[current];
                        candidate = node[key];
                        if (!candidate) {
                            continue;
                        }

                        if (isArray(candidate)) {
                            current2 = candidate.length;
                            while ((current2 -= 1) >= 0) {
                                if (!candidate[current2]) {
                                    continue;
                                }
                                if (isProperty(nodeType, candidates[current])) {
                                    element = new Element(candidate[current2], [key, current2], 'Property', null);
                                } else if (isNode(candidate[current2])) {
                                    element = new Element(candidate[current2], [key, current2], null, null);
                                } else {
                                    continue;
                                }
                                worklist.push(element);
                            }
                        } else if (isNode(candidate)) {
                            worklist.push(new Element(candidate, key, null, null));
                        }
                    }
                }
            }
        };

        Controller.prototype.replace = function replace(root, visitor) {
            function removeElem(element) {
                var i, key, nextElem, parent;

                if (element.ref.remove()) {
                    // When the reference is an element of an array.
                    key = element.ref.key;
                    parent = element.ref.parent;

                    // If removed from array, then decrease following items' keys.
                    i = worklist.length;
                    while (i--) {
                        nextElem = worklist[i];
                        if (nextElem.ref && nextElem.ref.parent === parent) {
                            if (nextElem.ref.key < key) {
                                break;
                            }
                            --nextElem.ref.key;
                        }
                    }
                }
            }

            var worklist, leavelist, node, nodeType, target, element, current, current2, candidates, candidate, sentinel, outer, key;

            this.__initialize(root, visitor);

            sentinel = {};

            // reference
            worklist = this.__worklist;
            leavelist = this.__leavelist;

            // initialize
            outer = {
                root: root
            };
            element = new Element(root, null, null, new Reference(outer, 'root'));
            worklist.push(element);
            leavelist.push(element);

            while (worklist.length) {
                element = worklist.pop();

                if (element === sentinel) {
                    element = leavelist.pop();

                    target = this.__execute(visitor.leave, element);

                    // node may be replaced with null,
                    // so distinguish between undefined and null in this place
                    if (target !== undefined && target !== BREAK && target !== SKIP && target !== REMOVE) {
                        // replace
                        element.ref.replace(target);
                    }

                    if (this.__state === REMOVE || target === REMOVE) {
                        removeElem(element);
                    }

                    if (this.__state === BREAK || target === BREAK) {
                        return outer.root;
                    }
                    continue;
                }

                target = this.__execute(visitor.enter, element);

                // node may be replaced with null,
                // so distinguish between undefined and null in this place
                if (target !== undefined && target !== BREAK && target !== SKIP && target !== REMOVE) {
                    // replace
                    element.ref.replace(target);
                    element.node = target;
                }

                if (this.__state === REMOVE || target === REMOVE) {
                    removeElem(element);
                    element.node = null;
                }

                if (this.__state === BREAK || target === BREAK) {
                    return outer.root;
                }

                // node may be null
                node = element.node;
                if (!node) {
                    continue;
                }

                worklist.push(sentinel);
                leavelist.push(element);

                if (this.__state === SKIP || target === SKIP) {
                    continue;
                }

                nodeType = node.type || element.wrap;
                candidates = this.__keys[nodeType];
                if (!candidates) {
                    if (this.__fallback) {
                        candidates = objectKeys(node);
                    } else {
                        throw new Error('Unknown node type ' + nodeType + '.');
                    }
                }

                current = candidates.length;
                while ((current -= 1) >= 0) {
                    key = candidates[current];
                    candidate = node[key];
                    if (!candidate) {
                        continue;
                    }

                    if (isArray(candidate)) {
                        current2 = candidate.length;
                        while ((current2 -= 1) >= 0) {
                            if (!candidate[current2]) {
                                continue;
                            }
                            if (isProperty(nodeType, candidates[current])) {
                                element = new Element(candidate[current2], [key, current2], 'Property', new Reference(candidate, current2));
                            } else if (isNode(candidate[current2])) {
                                element = new Element(candidate[current2], [key, current2], null, new Reference(candidate, current2));
                            } else {
                                continue;
                            }
                            worklist.push(element);
                        }
                    } else if (isNode(candidate)) {
                        worklist.push(new Element(candidate, key, null, new Reference(node, key)));
                    }
                }
            }

            return outer.root;
        };

        function traverse(root, visitor) {
            var controller = new Controller();
            return controller.traverse(root, visitor);
        }

        function replace(root, visitor) {
            var controller = new Controller();
            return controller.replace(root, visitor);
        }

        function extendCommentRange(comment, tokens) {
            var target;

            target = upperBound(tokens, function search(token) {
                return token.range[0] > comment.range[0];
            });

            comment.extendedRange = [comment.range[0], comment.range[1]];

            if (target !== tokens.length) {
                comment.extendedRange[1] = tokens[target].range[0];
            }

            target -= 1;
            if (target >= 0) {
                comment.extendedRange[0] = tokens[target].range[1];
            }

            return comment;
        }

        function attachComments(tree, providedComments, tokens) {
            // At first, we should calculate extended comment ranges.
            var comments = [],
                comment,
                len,
                i,
                cursor;

            if (!tree.range) {
                throw new Error('attachComments needs range information');
            }

            // tokens array is empty, we attach comments to tree as 'leadingComments'
            if (!tokens.length) {
                if (providedComments.length) {
                    for (i = 0, len = providedComments.length; i < len; i += 1) {
                        comment = deepCopy(providedComments[i]);
                        comment.extendedRange = [0, tree.range[0]];
                        comments.push(comment);
                    }
                    tree.leadingComments = comments;
                }
                return tree;
            }

            for (i = 0, len = providedComments.length; i < len; i += 1) {
                comments.push(extendCommentRange(deepCopy(providedComments[i]), tokens));
            }

            // This is based on John Freeman's implementation.
            cursor = 0;
            traverse(tree, {
                enter: function enter(node) {
                    var comment;

                    while (cursor < comments.length) {
                        comment = comments[cursor];
                        if (comment.extendedRange[1] > node.range[0]) {
                            break;
                        }

                        if (comment.extendedRange[1] === node.range[0]) {
                            if (!node.leadingComments) {
                                node.leadingComments = [];
                            }
                            node.leadingComments.push(comment);
                            comments.splice(cursor, 1);
                        } else {
                            cursor += 1;
                        }
                    }

                    // already out of owned node
                    if (cursor === comments.length) {
                        return VisitorOption.Break;
                    }

                    if (comments[cursor].extendedRange[0] > node.range[1]) {
                        return VisitorOption.Skip;
                    }
                }
            });

            cursor = 0;
            traverse(tree, {
                leave: function leave(node) {
                    var comment;

                    while (cursor < comments.length) {
                        comment = comments[cursor];
                        if (node.range[1] < comment.extendedRange[0]) {
                            break;
                        }

                        if (node.range[1] === comment.extendedRange[0]) {
                            if (!node.trailingComments) {
                                node.trailingComments = [];
                            }
                            node.trailingComments.push(comment);
                            comments.splice(cursor, 1);
                        } else {
                            cursor += 1;
                        }
                    }

                    // already out of owned node
                    if (cursor === comments.length) {
                        return VisitorOption.Break;
                    }

                    if (comments[cursor].extendedRange[0] > node.range[1]) {
                        return VisitorOption.Skip;
                    }
                }
            });

            return tree;
        }

        exports.version = require$$0.version;
        exports.Syntax = Syntax;
        exports.traverse = traverse;
        exports.replace = replace;
        exports.attachComments = attachComments;
        exports.VisitorKeys = VisitorKeys;
        exports.VisitorOption = VisitorOption;
        exports.Controller = Controller;
        exports.cloneEnvironment = function () {
            return clone({});
        };

        return exports;
    })(exports);
    /* vim: set sw=4 ts=4 et tw=80 : */
    return module.exports;
    })({exports:{}});

    var Binding = (function () {
      function Binding(localName, exportName) {
        babelHelpers.classCallCheck(this, Binding);

        this.localName = localName;
        this.exportName = exportName;
      }

      /**
       * Builds an export specifier list string for use in an export statement.
       */
      babelHelpers.createClass(Binding, [{
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

    var ExportSpecifierListStringBuilder = (function () {
      function ExportSpecifierListStringBuilder(bindings) {
        babelHelpers.classCallCheck(this, ExportSpecifierListStringBuilder);

        this.bindings = bindings;
      }

      /**
       * Builds an import specifier list string for use in an import statement.
       */
      babelHelpers.createClass(ExportSpecifierListStringBuilder, [{
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

    var ImportSpecifierListStringBuilder = (function () {
      function ImportSpecifierListStringBuilder(bindings) {
        babelHelpers.classCallCheck(this, ImportSpecifierListStringBuilder);

        this.bindings = bindings;
      }

      babelHelpers.createClass(ImportSpecifierListStringBuilder, [{
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
              if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
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

    var Syntax = estraverse.Syntax;
    var VisitorOption = estraverse.VisitorOption;

    var name = 'modules.commonjs';
    var description = 'Transform CommonJS modules into ES6 modules.';

    function begin(module) {
      module.metadata[name] = {
        imports: [],
        exports: [],
        directives: []
      };
      return new Context(module);
    }

    function enter(node, parent, module, context) {
      if (/Function/.test(node.type) || context.rewrite(node, parent)) {
        return VisitorOption.Skip;
      }
    }

    var Context = (function () {
      function Context(module) {
        babelHelpers.classCallCheck(this, Context);

        this.module = module;
      }

      babelHelpers.createClass(Context, [{
        key: 'rewrite',
        value: function rewrite(node, parent) {
          return this.rewriteRequire(node, parent) || this.rewriteExport(node, parent) || this.removeUseStrictDirective(node, parent);
        }

        /**
         * @private
         */
      }, {
        key: 'rewriteRequire',
        value: function rewriteRequire(node, parent) {
          return this.rewriteSingleExportRequire(node, parent) || this.rewriteNamedExportRequire(node, parent) || this.rewriteDeconstructedImportRequire(node, parent) || this.rewriteSideEffectRequire(node, parent) || this.warnAboutUnsupportedRequire(node, parent);
        }

        /**
         * @private
         */
      }, {
        key: 'rewriteSingleExportRequire',
        value: function rewriteSingleExportRequire(node, parent) {
          var declaration = extractSingleDeclaration(node);

          if (!declaration) {
            return false;
          }

          var id = declaration.id;
          var init = declaration.init;

          if (id.type !== Syntax.Identifier) {
            return false;
          }

          var pathNode = extractRequirePathNode(init);

          if (!pathNode) {
            return false;
          }

          this.rewriteRequireAsImport('default-import', node, [new Binding(id.name, 'default')], pathNode);

          return true;
        }

        /**
         * @private
         */
      }, {
        key: 'rewriteNamedExportRequire',
        value: function rewriteNamedExportRequire(node, parent) {
          var declaration = extractSingleDeclaration(node);

          if (!declaration) {
            return false;
          }

          var id = declaration.id;
          var init = declaration.init;

          if (!init || init.type !== Syntax.MemberExpression || init.computed) {
            return false;
          }

          var pathNode = extractRequirePathNode(init.object);

          if (!pathNode) {
            return false;
          }

          this.rewriteRequireAsImport('named-import', node, [new Binding(id.name, init.property.name)], pathNode);

          return true;
        }

        /**
         * @private
         */
      }, {
        key: 'rewriteDeconstructedImportRequire',
        value: function rewriteDeconstructedImportRequire(node, parent) {
          var declaration = extractSingleDeclaration(node);

          if (!declaration) {
            return false;
          }

          var id = declaration.id;
          var init = declaration.init;

          if (id.type !== Syntax.ObjectPattern) {
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

              if (value.type !== Syntax.Identifier) {
                return false;
              }
              bindings.push(new Binding(value.name, key.name));
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
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

          return true;
        }

        /**
         * @private
         */
      }, {
        key: 'rewriteSideEffectRequire',
        value: function rewriteSideEffectRequire(node, parent) {
          if (node.type !== Syntax.ExpressionStatement) {
            return false;
          }

          var pathNode = extractRequirePathNode(node.expression);

          if (!pathNode) {
            return false;
          }

          this.rewriteRequireAsImport('bare-import', node, [], pathNode);

          return true;
        }

        /**
         * @private
         */
      }, {
        key: 'warnAboutUnsupportedRequire',
        value: function warnAboutUnsupportedRequire(node, parent) {
          var pathNode = extractRequirePathNode(node);

          if (!pathNode) {
            return false;
          }

          this.module.warn(node, 'unsupported-require', 'Unsupported \'require\' call cannot be transformed to an import');

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
            node: node,
            bindings: bindings,
            path: pathNode.value
          });

          var pathString = this.slice.apply(this, babelHelpers.toConsumableArray(pathNode.range));
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
        value: function rewriteExport(node, parent) {
          return this.rewriteNamedExport(node, parent) || this.rewriteSingleExportAsDefaultExport(node, parent);
        }

        /**
         * @private
         */
      }, {
        key: 'rewriteNamedExport',
        value: function rewriteNamedExport(node, parent) {
          if (node.type !== Syntax.ExpressionStatement) {
            return false;
          }

          var expression = node.expression;

          if (expression.type !== Syntax.AssignmentExpression) {
            return false;
          }

          var left = expression.left;
          var right = expression.right;

          if (left.type !== Syntax.MemberExpression || left.computed) {
            return false;
          }

          var object = left.object;
          var property = left.property;

          if (object.type !== Syntax.Identifier || object.name !== 'exports') {
            return false;
          }

          if (right.type === Syntax.FunctionExpression) {
            var exportName = property.name;

            this.metadata.exports.push({
              bindings: [{
                exportName: exportName,
                localName: right.id ? right.id.name : exportName
              }],
              node: node
            });

            this.overwrite(node.range[0], right.range[0], 'export ');

            if (!right.id) {
              this.insert(right.range[0] + 'function'.length, ' ' + exportName);
            } else if (right.id.name !== property.name) {
              this.overwrite(right.id.range[0], right.id.range[1], property.name);
              this.module.warn(right.id, 'export-function-name-mismatch', 'Exported function \'' + right.id.name + '\' does not match export name \'' + exportName + '\'');
            }

            var lastCharacterPosition = node.range[1] - 1;
            if (this.charAt(lastCharacterPosition) === ';') {
              this.remove(lastCharacterPosition, node.range[1]);
            }
          } else if (right.type === Syntax.Identifier) {
            this.metadata.exports.push({
              type: 'named-export',
              bindings: [{
                exportName: property.name,
                localName: right.name
              }],
              node: node
            });

            if (right.name === property.name) {
              this.overwrite(node.range[0], node.range[1], 'export { ' + right.name + ' };');
            } else {
              this.overwrite(node.range[0], node.range[1], 'export { ' + right.name + ' as ' + property.name + ' };');
            }
          } else {
            if (this.module.scope.globalScope.isUsedName(property.name)) {
              this.module.warn(property, 'named-export-conflicts-with-local-binding', 'Named export \'' + property.name + '\' conflicts with existing local binding');
            }

            this.metadata.exports.push({
              type: 'named-export',
              bindings: [{
                exportName: property.name,
                localName: property.name
              }],
              node: node
            });

            this.overwrite(node.range[0], property.range[0], 'export let ');
          }

          return true;
        }

        /**
         * @private
         */
      }, {
        key: 'rewriteSingleExportAsDefaultExport',
        value: function rewriteSingleExportAsDefaultExport(node, parent) {
          if (node.type !== Syntax.ExpressionStatement) {
            return false;
          }

          var expression = node.expression;

          if (expression.type !== Syntax.AssignmentExpression) {
            return false;
          }

          var left = expression.left;
          var right = expression.right;

          if (left.type !== Syntax.MemberExpression || left.computed) {
            return false;
          }

          var object = left.object;
          var property = left.property;

          if (object.type !== Syntax.Identifier || object.name !== 'module') {
            return false;
          }

          if (property.type !== Syntax.Identifier || property.name !== 'exports') {
            return false;
          }

          if (right.type === 'ObjectExpression') {
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
                if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                  _iterator2['return']();
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
              node: node
            });
            this.overwrite(node.range[0], node.range[1], 'export ' + ExportSpecifierListStringBuilder.build(_bindings) + ';');
          } else {
            this.metadata.exports.push({ type: 'default-export', node: node });
            this.overwrite(node.range[0], right.range[0], 'export default ');
          }

          return true;
        }

        /**
         * @private
         */
      }, {
        key: 'removeUseStrictDirective',
        value: function removeUseStrictDirective(node, parent) {
          if (node.type !== Syntax.ExpressionStatement) {
            return false;
          }

          var expression = node.expression;

          if (expression.type !== Syntax.Literal) {
            return false;
          }

          if (expression.value !== 'use strict') {
            return false;
          }

          if (parent.body[0] !== node) {
            return false;
          }

          var _node$range = babelHelpers.slicedToArray(node.range, 2);

          var start = _node$range[0];
          var end = _node$range[1];

          if ((start === 0 || this.charAt(start - '\n'.length) === '\n') && this.charAt(end) === '\n') {
            end += '\n'.length;
          }

          this.metadata.directives.push({
            type: 'removed-strict-mode',
            node: node
          });

          this.remove(start, end);
          return true;
        }

        /**
         * @private
         */
      }, {
        key: 'charAt',
        value: function charAt(index) {
          return this.module.magicString.original[index];
        }

        /**
         * @private
         */
      }, {
        key: 'slice',
        value: function slice(start, end) {
          return this.module.magicString.original.slice(start, end);
        }

        /**
         * @private
         */
      }, {
        key: 'remove',
        value: function remove(start, end) {
          this.module.magicString.remove(start, end);
        }

        /**
         * @private
         */
      }, {
        key: 'overwrite',
        value: function overwrite(start, end, content) {
          this.module.magicString.overwrite(start, end, content);
        }

        /**
         * @private
         */
      }, {
        key: 'insert',
        value: function insert(index, content) {
          return this.module.magicString.insert(index, content);
        }
      }, {
        key: 'metadata',
        get: function get() {
          return this.module.metadata[name];
        }
      }]);
      return Context;
    })();

    function extractSingleDeclaration(node) {
      if (node.type !== Syntax.VariableDeclaration) {
        return null;
      }

      if (node.declarations.length !== 1) {
        return null;
      }

      return node.declarations[0];
    }

    function extractRequirePathNode(node) {
      if (!node || node.type !== Syntax.CallExpression) {
        return null;
      }

      if (node.callee.type !== Syntax.Identifier || node.callee.name !== 'require') {
        return null;
      }

      if (node.arguments.length !== 1) {
        return null;
      }

      var arg = node.arguments[0];

      if (arg.type !== Syntax.Literal || typeof arg.value !== 'string') {
        return null;
      }

      return arg;
    }

    var CommonJSPlugin = Object.freeze({
      begin: begin,
      enter: enter,
      name: name,
      description: description
    });

    var charToInteger = {};
    var integerToChar = {};

    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.split('').forEach(function (char, i) {
    	charToInteger[char] = i;
    	integerToChar[i] = char;
    });

    function encode(value) {
    	var result, i;

    	if (typeof value === 'number') {
    		result = encodeInteger(value);
    	} else {
    		result = '';
    		for (i = 0; i < value.length; i += 1) {
    			result += encodeInteger(value[i]);
    		}
    	}

    	return result;
    }

    function encodeInteger(num) {
    	var result = '',
    	    clamped;

    	if (num < 0) {
    		num = -num << 1 | 1;
    	} else {
    		num <<= 1;
    	}

    	do {
    		clamped = num & 31;
    		num >>= 5;

    		if (num > 0) {
    			clamped |= 32;
    		}

    		result += integerToChar[clamped];
    	} while (num > 0);

    	return result;
    }

    var babelHelpers_classCallCheck = function babelHelpers_classCallCheck(instance, Constructor) {
    	if (!(instance instanceof Constructor)) {
    		throw new TypeError("Cannot call a class as a function");
    	}
    };

    var _btoa = undefined;

    if (typeof window !== 'undefined' && typeof window.btoa === 'function') {
    	_btoa = window.btoa;
    } else if (typeof Buffer === 'function') {
    	/* global Buffer */
    	_btoa = function (str) {
    		return new Buffer(str).toString('base64');
    	};
    } else {
    	throw new Error('Unsupported environment: `window.btoa` or `Buffer` should be supported.');
    }

    var btoa = _btoa;

    var SourceMap = (function () {
    	function SourceMap(properties) {
    		babelHelpers_classCallCheck(this, SourceMap);

    		this.version = 3;

    		this.file = properties.file;
    		this.sources = properties.sources;
    		this.sourcesContent = properties.sourcesContent;
    		this.names = properties.names;
    		this.mappings = properties.mappings;
    	}

    	SourceMap.prototype.toString = function toString() {
    		return JSON.stringify(this);
    	};

    	SourceMap.prototype.toUrl = function toUrl() {
    		return 'data:application/json;charset=utf-8;base64,' + btoa(this.toString());
    	};

    	return SourceMap;
    })();

    function guessIndent(code) {
    	var lines = code.split('\n');

    	var tabbed = lines.filter(function (line) {
    		return (/^\t+/.test(line)
    		);
    	});
    	var spaced = lines.filter(function (line) {
    		return (/^ {2,}/.test(line)
    		);
    	});

    	if (tabbed.length === 0 && spaced.length === 0) {
    		return null;
    	}

    	// More lines tabbed than spaced? Assume tabs, and
    	// default to tabs in the case of a tie (or nothing
    	// to go on)
    	if (tabbed.length >= spaced.length) {
    		return '\t';
    	}

    	// Otherwise, we need to guess the multiple
    	var min = spaced.reduce(function (previous, current) {
    		var numSpaces = /^ +/.exec(current)[0].length;
    		return Math.min(numSpaces, previous);
    	}, Infinity);

    	return new Array(min + 1).join(' ');
    }

    function encodeMappings(original, str, mappings, hires, sourcemapLocations, sourceIndex, offsets, names, nameLocations) {
    	// store locations, for fast lookup
    	var lineStart = 0;
    	var locations = original.split('\n').map(function (line) {
    		var start = lineStart;
    		lineStart += line.length + 1; // +1 for the newline

    		return start;
    	});

    	var inverseMappings = invert(str, mappings);

    	var charOffset = 0;
    	var lines = str.split('\n').map(function (line) {
    		var segments = [];

    		var char = undefined; // TODO put these inside loop, once we've determined it's safe to do so transpilation-wise
    		var origin = undefined;
    		var lastOrigin = -1;
    		var location = undefined;
    		var nameIndex = undefined;

    		var i = undefined;

    		var len = line.length;
    		for (i = 0; i < len; i += 1) {
    			char = i + charOffset;
    			origin = inverseMappings[char];

    			nameIndex = -1;
    			location = null;

    			// if this character has no mapping, but the last one did,
    			// create a new segment
    			if (! ~origin && ~lastOrigin) {
    				location = getLocation(locations, lastOrigin + 1);

    				if (lastOrigin + 1 in nameLocations) nameIndex = names.indexOf(nameLocations[lastOrigin + 1]);
    			} else if (~origin && (hires || ~lastOrigin && origin !== lastOrigin + 1 || sourcemapLocations[origin])) {
    				location = getLocation(locations, origin);
    			}

    			if (location) {
    				segments.push({
    					generatedCodeColumn: i,
    					sourceIndex: sourceIndex,
    					sourceCodeLine: location.line,
    					sourceCodeColumn: location.column,
    					sourceCodeName: nameIndex
    				});
    			}

    			lastOrigin = origin;
    		}

    		charOffset += line.length + 1;
    		return segments;
    	});

    	offsets.sourceIndex = offsets.sourceIndex || 0;
    	offsets.sourceCodeLine = offsets.sourceCodeLine || 0;
    	offsets.sourceCodeColumn = offsets.sourceCodeColumn || 0;
    	offsets.sourceCodeName = offsets.sourceCodeName || 0;

    	var encoded = lines.map(function (segments) {
    		var generatedCodeColumn = 0;

    		return segments.map(function (segment) {
    			var arr = [segment.generatedCodeColumn - generatedCodeColumn, segment.sourceIndex - offsets.sourceIndex, segment.sourceCodeLine - offsets.sourceCodeLine, segment.sourceCodeColumn - offsets.sourceCodeColumn];

    			generatedCodeColumn = segment.generatedCodeColumn;
    			offsets.sourceIndex = segment.sourceIndex;
    			offsets.sourceCodeLine = segment.sourceCodeLine;
    			offsets.sourceCodeColumn = segment.sourceCodeColumn;

    			if (~segment.sourceCodeName) {
    				arr.push(segment.sourceCodeName - offsets.sourceCodeName);
    				offsets.sourceCodeName = segment.sourceCodeName;
    			}

    			return encode(arr);
    		}).join(',');
    	}).join(';');

    	return encoded;
    }

    function invert(str, mappings) {
    	var inverted = new Uint32Array(str.length);

    	// initialise everything to -1
    	var i = str.length;
    	while (i--) {
    		inverted[i] = -1;
    	}

    	// then apply the actual mappings
    	i = mappings.length;
    	while (i--) {
    		if (~mappings[i]) {
    			inverted[mappings[i]] = i;
    		}
    	}

    	return inverted;
    }

    function getLocation(locations, char) {
    	var i = locations.length;
    	while (i--) {
    		if (locations[i] <= char) {
    			return {
    				line: i,
    				column: char - locations[i]
    			};
    		}
    	}

    	throw new Error('Character out of bounds');
    }

    function getRelativePath(from, to) {
    	var fromParts = from.split(/[\/\\]/);
    	var toParts = to.split(/[\/\\]/);

    	fromParts.pop(); // get dirname

    	while (fromParts[0] === toParts[0]) {
    		fromParts.shift();
    		toParts.shift();
    	}

    	if (fromParts.length) {
    		var i = fromParts.length;
    		while (i--) fromParts[i] = '..';
    	}

    	return fromParts.concat(toParts).join('/');
    }

    var warned = false;

    var MagicString = (function () {
    	function MagicString(string) {
    		var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    		babelHelpers_classCallCheck(this, MagicString);

    		Object.defineProperties(this, {
    			original: { writable: true, value: string },
    			str: { writable: true, value: string },
    			mappings: { writable: true, value: initMappings(string.length) },
    			filename: { writable: true, value: options.filename },
    			indentExclusionRanges: { writable: true, value: options.indentExclusionRanges },
    			sourcemapLocations: { writable: true, value: {} },
    			nameLocations: { writable: true, value: {} },
    			indentStr: { writable: true, value: guessIndent(string) }
    		});
    	}

    	MagicString.prototype.addSourcemapLocation = function addSourcemapLocation(char) {
    		this.sourcemapLocations[char] = true;
    	};

    	MagicString.prototype.append = function append(content) {
    		if (typeof content !== 'string') {
    			throw new TypeError('appended content must be a string');
    		}

    		this.str += content;
    		return this;
    	};

    	MagicString.prototype.clone = function clone() {
    		var clone = new MagicString(this.original, { filename: this.filename });
    		clone.str = this.str;

    		var i = clone.mappings.length;
    		while (i--) {
    			clone.mappings[i] = this.mappings[i];
    		}

    		if (this.indentExclusionRanges) {
    			clone.indentExclusionRanges = typeof this.indentExclusionRanges[0] === 'number' ? [this.indentExclusionRanges[0], this.indentExclusionRanges[1]] : this.indentExclusionRanges.map(function (range) {
    				return [range.start, range.end];
    			});
    		}

    		Object.keys(this.sourcemapLocations).forEach(function (loc) {
    			clone.sourcemapLocations[loc] = true;
    		});

    		return clone;
    	};

    	MagicString.prototype.generateMap = function generateMap(options) {
    		var _this = this;

    		options = options || {};

    		var names = [];
    		Object.keys(this.nameLocations).forEach(function (location) {
    			var name = _this.nameLocations[location];
    			if (! ~names.indexOf(name)) names.push(name);
    		});

    		return new SourceMap({
    			file: options.file ? options.file.split(/[\/\\]/).pop() : null,
    			sources: [options.source ? getRelativePath(options.file || '', options.source) : null],
    			sourcesContent: options.includeContent ? [this.original] : [null],
    			names: names,
    			mappings: this.getMappings(options.hires, 0, {}, names)
    		});
    	};

    	MagicString.prototype.getIndentString = function getIndentString() {
    		return this.indentStr === null ? '\t' : this.indentStr;
    	};

    	MagicString.prototype.getMappings = function getMappings(hires, sourceIndex, offsets, names) {
    		return encodeMappings(this.original, this.str, this.mappings, hires, this.sourcemapLocations, sourceIndex, offsets, names, this.nameLocations);
    	};

    	MagicString.prototype.indent = function indent(indentStr, options) {
    		var _this2 = this;

    		var mappings = this.mappings;
    		var reverseMappings = reverse(mappings, this.str.length);
    		var pattern = /^[^\r\n]/gm;

    		if (typeof indentStr === 'object') {
    			options = indentStr;
    			indentStr = undefined;
    		}

    		indentStr = indentStr !== undefined ? indentStr : this.indentStr || '\t';

    		if (indentStr === '') return this; // noop

    		options = options || {};

    		// Process exclusion ranges
    		var exclusions = undefined;

    		if (options.exclude) {
    			exclusions = typeof options.exclude[0] === 'number' ? [options.exclude] : options.exclude;

    			exclusions = exclusions.map(function (range) {
    				var rangeStart = _this2.locate(range[0]);
    				var rangeEnd = _this2.locate(range[1]);

    				if (rangeStart === null || rangeEnd === null) {
    					throw new Error('Cannot use indices of replaced characters as exclusion ranges');
    				}

    				return [rangeStart, rangeEnd];
    			});

    			exclusions.sort(function (a, b) {
    				return a[0] - b[0];
    			});

    			// check for overlaps
    			lastEnd = -1;
    			exclusions.forEach(function (range) {
    				if (range[0] < lastEnd) {
    					throw new Error('Exclusion ranges cannot overlap');
    				}

    				lastEnd = range[1];
    			});
    		}

    		var indentStart = options.indentStart !== false;
    		var inserts = [];

    		if (!exclusions) {
    			this.str = this.str.replace(pattern, function (match, index) {
    				if (!indentStart && index === 0) {
    					return match;
    				}

    				inserts.push(index);
    				return indentStr + match;
    			});
    		} else {
    			this.str = this.str.replace(pattern, function (match, index) {
    				if (!indentStart && index === 0 || isExcluded(index - 1)) {
    					return match;
    				}

    				inserts.push(index);
    				return indentStr + match;
    			});
    		}

    		var adjustments = inserts.map(function (index) {
    			var origin = undefined;

    			do {
    				origin = reverseMappings[index++];
    			} while (! ~origin && index < _this2.str.length);

    			return origin;
    		});

    		var i = adjustments.length;
    		var lastEnd = this.mappings.length;
    		while (i--) {
    			adjust(this.mappings, adjustments[i], lastEnd, (i + 1) * indentStr.length);
    			lastEnd = adjustments[i];
    		}

    		return this;

    		function isExcluded(index) {
    			var i = exclusions.length;
    			var range = undefined;

    			while (i--) {
    				range = exclusions[i];

    				if (range[1] < index) {
    					return false;
    				}

    				if (range[0] <= index) {
    					return true;
    				}
    			}
    		}
    	};

    	MagicString.prototype.insert = function insert(index, content) {
    		if (typeof content !== 'string') {
    			throw new TypeError('inserted content must be a string');
    		}

    		if (index === this.original.length) {
    			this.append(content);
    		} else {
    			var mapped = this.locate(index);

    			if (mapped === null) {
    				throw new Error('Cannot insert at replaced character index: ' + index);
    			}

    			this.str = this.str.substr(0, mapped) + content + this.str.substr(mapped);
    			adjust(this.mappings, index, this.mappings.length, content.length);
    		}

    		return this;
    	};

    	// get current location of character in original string

    	MagicString.prototype.locate = function locate(character) {
    		if (character < 0 || character > this.mappings.length) {
    			throw new Error('Character is out of bounds');
    		}

    		var loc = this.mappings[character];
    		return ~loc ? loc : null;
    	};

    	MagicString.prototype.locateOrigin = function locateOrigin(character) {
    		if (character < 0 || character >= this.str.length) {
    			throw new Error('Character is out of bounds');
    		}

    		var i = this.mappings.length;
    		while (i--) {
    			if (this.mappings[i] === character) {
    				return i;
    			}
    		}

    		return null;
    	};

    	MagicString.prototype.overwrite = function overwrite(start, end, content, storeName) {
    		if (typeof content !== 'string') {
    			throw new TypeError('replacement content must be a string');
    		}

    		var firstChar = this.locate(start);
    		var lastChar = this.locate(end - 1);

    		if (firstChar === null || lastChar === null) {
    			throw new Error('Cannot overwrite the same content twice: \'' + this.original.slice(start, end).replace(/\n/g, '\\n') + '\'');
    		}

    		if (firstChar > lastChar + 1) {
    			throw new Error('BUG! First character mapped to a position after the last character: ' + '[' + start + ', ' + end + '] -> [' + firstChar + ', ' + (lastChar + 1) + ']');
    		}

    		if (storeName) {
    			this.nameLocations[start] = this.original.slice(start, end);
    		}

    		this.str = this.str.substr(0, firstChar) + content + this.str.substring(lastChar + 1);

    		var d = content.length - (lastChar + 1 - firstChar);

    		blank(this.mappings, start, end);
    		adjust(this.mappings, end, this.mappings.length, d);
    		return this;
    	};

    	MagicString.prototype.prepend = function prepend(content) {
    		this.str = content + this.str;
    		adjust(this.mappings, 0, this.mappings.length, content.length);
    		return this;
    	};

    	MagicString.prototype.remove = function remove(start, end) {
    		if (start < 0 || end > this.mappings.length) {
    			throw new Error('Character is out of bounds');
    		}

    		var currentStart = -1;
    		var currentEnd = -1;
    		for (var i = start; i < end; i += 1) {
    			var loc = this.mappings[i];

    			if (~loc) {
    				if (! ~currentStart) currentStart = loc;

    				currentEnd = loc + 1;
    				this.mappings[i] = -1;
    			}
    		}

    		this.str = this.str.slice(0, currentStart) + this.str.slice(currentEnd);

    		adjust(this.mappings, end, this.mappings.length, currentStart - currentEnd);
    		return this;
    	};

    	MagicString.prototype.replace = function replace(start, end, content) {
    		if (!warned) {
    			console.warn('magicString.replace(...) is deprecated. Use magicString.overwrite(...) instead');
    			warned = true;
    		}

    		return this.overwrite(start, end, content);
    	};

    	MagicString.prototype.slice = function slice(start) {
    		var end = arguments.length <= 1 || arguments[1] === undefined ? this.original.length : arguments[1];

    		while (start < 0) start += this.original.length;
    		while (end < 0) end += this.original.length;

    		var firstChar = this.locate(start);
    		var lastChar = this.locate(end - 1);

    		if (firstChar === null || lastChar === null) {
    			throw new Error('Cannot use replaced characters as slice anchors');
    		}

    		return this.str.slice(firstChar, lastChar + 1);
    	};

    	MagicString.prototype.snip = function snip(start, end) {
    		var clone = this.clone();
    		clone.remove(0, start);
    		clone.remove(end, clone.original.length);

    		return clone;
    	};

    	MagicString.prototype.toString = function toString() {
    		return this.str;
    	};

    	MagicString.prototype.trimLines = function trimLines() {
    		return this.trim('[\\r\\n]');
    	};

    	MagicString.prototype.trim = function trim(charType) {
    		return this.trimStart(charType).trimEnd(charType);
    	};

    	MagicString.prototype.trimEnd = function trimEnd(charType) {
    		var _this3 = this;

    		var rx = new RegExp((charType || '\\s') + '+$');

    		this.str = this.str.replace(rx, function (trailing, index, str) {
    			var strLength = str.length;
    			var length = trailing.length;

    			var chars = [];

    			var i = strLength;
    			while (i-- > strLength - length) {
    				chars.push(_this3.locateOrigin(i));
    			}

    			i = chars.length;
    			while (i--) {
    				if (chars[i] !== null) {
    					_this3.mappings[chars[i]] = -1;
    				}
    			}

    			return '';
    		});

    		return this;
    	};

    	MagicString.prototype.trimStart = function trimStart(charType) {
    		var _this4 = this;

    		var rx = new RegExp('^' + (charType || '\\s') + '+');

    		this.str = this.str.replace(rx, function (leading) {
    			var length = leading.length;

    			var chars = [];
    			var adjustmentStart = 0;

    			var i = length;
    			while (i--) {
    				chars.push(_this4.locateOrigin(i));
    			}

    			i = chars.length;
    			while (i--) {
    				if (chars[i] !== null) {
    					_this4.mappings[chars[i]] = -1;
    					adjustmentStart += 1;
    				}
    			}

    			adjust(_this4.mappings, adjustmentStart, _this4.mappings.length, -length);

    			return '';
    		});

    		return this;
    	};

    	return MagicString;
    })();

    function adjust(mappings, start, end, d) {
    	if (!d) return; // replacement is same length as replaced string

    	var i = end;
    	while (i-- > start) {
    		if (~mappings[i]) {
    			mappings[i] += d;
    		}
    	}
    }

    function initMappings(i) {
    	var mappings = new Uint32Array(i);

    	while (i--) mappings[i] = i;
    	return mappings;
    }

    function blank(mappings, start, i) {
    	while (i-- > start) mappings[i] = -1;
    }

    function reverse(mappings, i) {
    	var result = new Uint32Array(i);

    	while (i--) {
    		result[i] = -1;
    	}

    	var location = undefined;
    	i = mappings.length;
    	while (i--) {
    		location = mappings[i];

    		if (~location) {
    			result[location] = i;
    		}
    	}

    	return result;
    }

    var hasOwnProp = Object.prototype.hasOwnProperty;

    var Bundle = (function () {
    	function Bundle() {
    		var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    		babelHelpers_classCallCheck(this, Bundle);

    		this.intro = options.intro || '';
    		this.outro = options.outro || '';
    		this.separator = options.separator !== undefined ? options.separator : '\n';

    		this.sources = [];

    		this.uniqueSources = [];
    		this.uniqueSourceIndexByFilename = {};
    	}

    	Bundle.prototype.addSource = function addSource(source) {
    		if (source instanceof MagicString) {
    			return this.addSource({
    				content: source,
    				filename: source.filename,
    				separator: this.separator
    			});
    		}

    		if (typeof source !== 'object' || !source.content) {
    			throw new Error('bundle.addSource() takes an object with a `content` property, which should be an instance of MagicString, and an optional `filename`');
    		}

    		['filename', 'indentExclusionRanges', 'separator'].forEach(function (option) {
    			if (!hasOwnProp.call(source, option)) source[option] = source.content[option];
    		});

    		if (source.separator === undefined) {
    			// TODO there's a bunch of this sort of thing, needs cleaning up
    			source.separator = this.separator;
    		}

    		if (source.filename) {
    			if (!hasOwnProp.call(this.uniqueSourceIndexByFilename, source.filename)) {
    				this.uniqueSourceIndexByFilename[source.filename] = this.uniqueSources.length;
    				this.uniqueSources.push({ filename: source.filename, content: source.content.original });
    			} else {
    				var uniqueSource = this.uniqueSources[this.uniqueSourceIndexByFilename[source.filename]];
    				if (source.content.original !== uniqueSource.content) {
    					throw new Error('Illegal source: same filename (' + source.filename + '), different contents');
    				}
    			}
    		}

    		this.sources.push(source);
    		return this;
    	};

    	Bundle.prototype.append = function append(str, options) {
    		this.addSource({
    			content: new MagicString(str),
    			separator: options && options.separator || ''
    		});

    		return this;
    	};

    	Bundle.prototype.clone = function clone() {
    		var bundle = new Bundle({
    			intro: this.intro,
    			outro: this.outro,
    			separator: this.separator
    		});

    		this.sources.forEach(function (source) {
    			bundle.addSource({
    				filename: source.filename,
    				content: source.content.clone(),
    				separator: source.separator
    			});
    		});

    		return bundle;
    	};

    	Bundle.prototype.generateMap = function generateMap(options) {
    		var _this = this;

    		var offsets = {};

    		var names = [];
    		this.sources.forEach(function (source) {
    			Object.keys(source.content.nameLocations).forEach(function (location) {
    				var name = source.content.nameLocations[location];
    				if (! ~names.indexOf(name)) names.push(name);
    			});
    		});

    		var encoded = getSemis(this.intro) + this.sources.map(function (source, i) {
    			var prefix = i > 0 ? getSemis(source.separator) || ',' : '';
    			var mappings = undefined;

    			// we don't bother encoding sources without a filename
    			if (!source.filename) {
    				mappings = getSemis(source.content.toString());
    			} else {
    				var sourceIndex = _this.uniqueSourceIndexByFilename[source.filename];
    				mappings = source.content.getMappings(options.hires, sourceIndex, offsets, names);
    			}

    			return prefix + mappings;
    		}).join('') + getSemis(this.outro);

    		return new SourceMap({
    			file: options.file ? options.file.split(/[\/\\]/).pop() : null,
    			sources: this.uniqueSources.map(function (source) {
    				return options.file ? getRelativePath(options.file, source.filename) : source.filename;
    			}),
    			sourcesContent: this.uniqueSources.map(function (source) {
    				return options.includeContent ? source.content : null;
    			}),
    			names: names,
    			mappings: encoded
    		});
    	};

    	Bundle.prototype.getIndentString = function getIndentString() {
    		var indentStringCounts = {};

    		this.sources.forEach(function (source) {
    			var indentStr = source.content.indentStr;

    			if (indentStr === null) return;

    			if (!indentStringCounts[indentStr]) indentStringCounts[indentStr] = 0;
    			indentStringCounts[indentStr] += 1;
    		});

    		return Object.keys(indentStringCounts).sort(function (a, b) {
    			return indentStringCounts[a] - indentStringCounts[b];
    		})[0] || '\t';
    	};

    	Bundle.prototype.indent = function indent(indentStr) {
    		var _this2 = this;

    		if (!arguments.length) {
    			indentStr = this.getIndentString();
    		}

    		if (indentStr === '') return this; // noop

    		var trailingNewline = !this.intro || this.intro.slice(-1) === '\n';

    		this.sources.forEach(function (source, i) {
    			var separator = source.separator !== undefined ? source.separator : _this2.separator;
    			var indentStart = trailingNewline || i > 0 && /\r?\n$/.test(separator);

    			source.content.indent(indentStr, {
    				exclude: source.indentExclusionRanges,
    				indentStart: indentStart //: trailingNewline || /\r?\n$/.test( separator )  //true///\r?\n/.test( separator )
    			});

    			trailingNewline = source.content.str.slice(0, -1) === '\n';
    		});

    		if (this.intro) {
    			this.intro = indentStr + this.intro.replace(/^[^\n]/gm, function (match, index) {
    				return index > 0 ? indentStr + match : match;
    			});
    		}

    		this.outro = this.outro.replace(/^[^\n]/gm, indentStr + '$&');

    		return this;
    	};

    	Bundle.prototype.prepend = function prepend(str) {
    		this.intro = str + this.intro;
    		return this;
    	};

    	Bundle.prototype.toString = function toString() {
    		var _this3 = this;

    		var body = this.sources.map(function (source, i) {
    			var separator = source.separator !== undefined ? source.separator : _this3.separator;
    			var str = (i > 0 ? separator : '') + source.content.toString();

    			return str;
    		}).join('');

    		return this.intro + body + this.outro;
    	};

    	Bundle.prototype.trimLines = function trimLines() {
    		return this.trim('[\\r\\n]');
    	};

    	Bundle.prototype.trim = function trim(charType) {
    		return this.trimStart(charType).trimEnd(charType);
    	};

    	Bundle.prototype.trimStart = function trimStart(charType) {
    		var rx = new RegExp('^' + (charType || '\\s') + '+');
    		this.intro = this.intro.replace(rx, '');

    		if (!this.intro) {
    			var source = undefined; // TODO put inside loop if safe
    			var i = 0;

    			do {
    				source = this.sources[i];

    				if (!source) {
    					this.outro = this.outro.replace(rx, '');
    					break;
    				}

    				source.content.trimStart();
    				i += 1;
    			} while (source.content.str === '');
    		}

    		return this;
    	};

    	Bundle.prototype.trimEnd = function trimEnd(charType) {
    		var rx = new RegExp((charType || '\\s') + '+$');
    		this.outro = this.outro.replace(rx, '');

    		if (!this.outro) {
    			var source = undefined;
    			var i = this.sources.length - 1;

    			do {
    				source = this.sources[i];

    				if (!source) {
    					this.intro = this.intro.replace(rx, '');
    					break;
    				}

    				source.content.trimEnd(charType);
    				i -= 1;
    			} while (source.content.str === '');
    		}

    		return this;
    	};

    	return Bundle;
    })();

    function getSemis(str) {
    	return new Array(str.split('\n').length).join(';');
    }

    MagicString.Bundle = Bundle;

    var _args$1 = [["escope@^3.2.0", "/Users/donovan/src/esnext"]];
    var _from$1 = "escope@>=3.2.0 <4.0.0";
    var _id$1 = "escope@3.2.0";
    var _inCache$1 = true;
    var _installable$1 = true;
    var _location$1 = "/escope";
    var _nodeVersion$1 = "2.3.3";
    var _npmUser$1 = { "email": "utatane.tea@gmail.com", "name": "constellation" };
    var _npmVersion$1 = "2.11.3";
    var _phantomChildren$1 = {};
    var _requested$1 = { "name": "escope", "raw": "escope@^3.2.0", "rawSpec": "^3.2.0", "scope": null, "spec": ">=3.2.0 <4.0.0", "type": "range" };
    var _requiredBy$1 = ["/"];
    var _resolved$1 = "https://registry.npmjs.org/escope/-/escope-3.2.0.tgz";
    var _shasum$1 = "b6215dc102c00bdc3624f22c26145d3b515ee1c7";
    var _shrinkwrap$1 = null;
    var _spec$1 = "escope@^3.2.0";
    var _where$1 = "/Users/donovan/src/esnext";
    var bugs$1 = { "url": "https://github.com/estools/escope/issues" };
    var dependencies$1 = { "es6-map": "^0.1.1", "es6-weak-map": "^0.1.2", "esrecurse": "^3.1.1", "estraverse": "^3.1.0" };
    var description$2 = "ECMAScript scope analyzer";
    var devDependencies$1 = { "acorn": "^0.12.0", "babel": "^4.7.12", "browserify": "^9.0.3", "chai": "^2.1.1", "coffee-script": "^1.9.1", "espree": "^2.0.2", "esprima": "^2.1.0", "gulp": "~3.8.10", "gulp-babel": "^4.0.0", "gulp-bump": "^0.3.0", "gulp-coffee": "^2.2.0", "gulp-eslint": "^0.6.0", "gulp-espower": "^0.10.0", "gulp-filter": "^2.0.0", "gulp-git": "^1.0.1", "gulp-mocha": "~2.0.0", "gulp-plumber": "^1.0.0", "gulp-sourcemaps": "^1.3.0", "gulp-tag-version": "^1.2.1", "jsdoc": "=3.3.0-alpha13", "lazypipe": "^0.2.2", "minimist": "^1.1.0", "vinyl-source-stream": "^1.0.0" };
    var directories$1 = {};
    var dist$1 = { "shasum": "b6215dc102c00bdc3624f22c26145d3b515ee1c7", "tarball": "http://registry.npmjs.org/escope/-/escope-3.2.0.tgz" };
    var engines$1 = { "node": ">=0.4.0" };
    var gitHead$1 = "c932340e2810ef5f83deb2b376df0917cae83b55";
    var homepage$1 = "http://github.com/estools/escope";
    var license$1 = "BSD-2-Clause";
    var main$1 = "lib/index.js";
    var maintainers$1 = [{ "name": "constellation", "email": "utatane.tea@gmail.com" }, { "name": "michaelficarra", "email": "npm@michael.ficarra.me" }];
    var name$2 = "escope";
    var optionalDependencies$1 = {};
    var repository$1 = { "type": "git", "url": "git+https://github.com/estools/escope.git" };
    var scripts$1 = { "jsdoc": "jsdoc src/*.js README.md", "lint": "gulp lint", "test": "gulp travis", "unit-test": "gulp test" };
    var version$2 = "3.2.0";
    var require$$0$1 = {
    	_args: _args$1,
    	_from: _from$1,
    	_id: _id$1,
    	_inCache: _inCache$1,
    	_installable: _installable$1,
    	_location: _location$1,
    	_nodeVersion: _nodeVersion$1,
    	_npmUser: _npmUser$1,
    	_npmVersion: _npmVersion$1,
    	_phantomChildren: _phantomChildren$1,
    	_requested: _requested$1,
    	_requiredBy: _requiredBy$1,
    	_resolved: _resolved$1,
    	_shasum: _shasum$1,
    	_shrinkwrap: _shrinkwrap$1,
    	_spec: _spec$1,
    	_where: _where$1,
    	bugs: bugs$1,
    	dependencies: dependencies$1,
    	description: description$2,
    	devDependencies: devDependencies$1,
    	directories: directories$1,
    	dist: dist$1,
    	engines: engines$1,
    	gitHead: gitHead$1,
    	homepage: homepage$1,
    	license: license$1,
    	main: main$1,
    	maintainers: maintainers$1,
    	name: name$2,
    	optionalDependencies: optionalDependencies$1,
    	repository: repository$1,
    	scripts: scripts$1,
    	version: version$2
    };

    var inheritsImplementation;
    function inherits(ctor, superCtor) {
      inheritsImplementation(ctor, superCtor);
    }

    if (typeof Object.create === 'function') {
      // implementation from standard node.js 'util' module
      inheritsImplementation = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      };
    } else {
      // old school shim for old browsers
      inheritsImplementation = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function TempCtor() {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      };
    }

    function isNumber(arg) {
      return typeof arg === 'number';
    }

    function isString(arg) {
      return typeof arg === 'string';
    }

    function isUndefined(arg) {
      return arg === void 0;
    }

    function isRegExp(re) {
      return isObject(re) && objectToString(re) === '[object RegExp]';
    }

    function isObject(arg) {
      return typeof arg === 'object' && arg !== null;
    }

    function isFunction(arg) {
      return typeof arg === 'function';
    }

    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }

    // 2. The AssertionError is defined in assert.
    // new AssertionError({ message: message,
    //                      actual: actual,
    //                      expected: expected })

    function AssertionError(options) {
      this.name = 'AssertionError';
      this.actual = options.actual;
      this.expected = options.expected;
      this.operator = options.operator;
      if (options.message) {
        this.message = options.message;
        this.generatedMessage = false;
      } else {
        this.message = getMessage(this);
        this.generatedMessage = true;
      }
      var stackStartFunction = options.stackStartFunction || fail;

      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, stackStartFunction);
      } else {
        // non v8 browsers so we can have a stacktrace
        var err = new Error();
        if (err.stack) {
          var out = err.stack;

          // try to strip useless frames
          var fn_name = stackStartFunction.name;
          var idx = out.indexOf('\n' + fn_name);
          if (idx >= 0) {
            // once we have located the function frame
            // we need to strip out everything before it (and its line)
            var next_line = out.indexOf('\n', idx + 1);
            out = out.substring(next_line + 1);
          }

          this.stack = out;
        }
      }
    }

    // AssertionError instanceof Error
    inherits(AssertionError, Error);

    function replacer(key, value) {
      if (isUndefined(value)) {
        return '' + value;
      }
      if (isNumber(value) && !isFinite(value)) {
        return value.toString();
      }
      if (isFunction(value) || isRegExp(value)) {
        return value.toString();
      }
      return value;
    }

    function truncate(s, n) {
      if (isString(s)) {
        return s.length < n ? s : s.slice(0, n);
      } else {
        return s;
      }
    }

    function getMessage(self) {
      return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' + self.operator + ' ' + truncate(JSON.stringify(self.expected, replacer), 128);
    }

    // At present only the three keys mentioned above are used and
    // understood by the spec. Implementations or sub modules can pass
    // other keys to the AssertionError's constructor - they will be
    // ignored.

    // 3. All of the following functions must throw an AssertionError
    // when a corresponding condition is not met, with a message that
    // may be undefined if not provided.  All assertion methods provide
    // both the actual and expected values to the assertion error for
    // display purposes.

    // EXTENSION! allows for well behaved errors defined elsewhere.

    function fail(actual, expected, message, operator, stackStartFunction) {
      throw new AssertionError({
        message: message,
        actual: actual,
        expected: expected,
        operator: operator,
        stackStartFunction: stackStartFunction
      });
    }

    // 4. Pure assertion tests whether a value is truthy, as determined
    // by !!guard.
    // ok(guard, message_opt);
    // This statement is equivalent to assert.equal(true, !!guard,
    // message_opt);. To test strictly for the value true, use
    // strictEqual(true, guard, message_opt);.

    function ok(value, message) {
      if (!value) fail(value, true, message, '==', ok);
    }

    var variable = (function (module) {
    var exports = module.exports;
    "use strict";

    var _classCallCheck = function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };

    /*
      Copyright (C) 2015 Yusuke Suzuki <utatane.tea@gmail.com>

      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are met:

        * Redistributions of source code must retain the above copyright
          notice, this list of conditions and the following disclaimer.
        * Redistributions in binary form must reproduce the above copyright
          notice, this list of conditions and the following disclaimer in the
          documentation and/or other materials provided with the distribution.

      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
      ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
      DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
      (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
      LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
      ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
      (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
      THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */

    /**
     * A Variable represents a locally scoped identifier. These include arguments to
     * functions.
     * @class Variable
     */

    var Variable = function Variable(name, scope) {
      _classCallCheck(this, Variable);

      /**
       * The variable name, as given in the source code.
       * @member {String} Variable#name
       */
      this.name = name;
      /**
       * List of defining occurrences of this variable (like in 'var ...'
       * statements or as parameter), as AST nodes.
       * @member {esprima.Identifier[]} Variable#identifiers
       */
      this.identifiers = [];
      /**
       * List of {@link Reference|references} of this variable (excluding parameter entries)
       * in its defining scope and all nested scopes. For defining
       * occurrences only see {@link Variable#defs}.
       * @member {Reference[]} Variable#references
       */
      this.references = [];

      /**
       * List of defining occurrences of this variable (like in 'var ...'
       * statements or as parameter), as custom objects.
       * @member {Definition[]} Variable#defs
       */
      this.defs = [];

      this.tainted = false;
      /**
       * Whether this is a stack variable.
       * @member {boolean} Variable#stack
       */
      this.stack = true;
      /**
       * Reference to the enclosing Scope.
       * @member {Scope} Variable#scope
       */
      this.scope = scope;
    };

    module.exports = Variable;

    Variable.CatchClause = "CatchClause";
    Variable.Parameter = "Parameter";
    Variable.FunctionName = "FunctionName";
    Variable.ClassName = "ClassName";
    Variable.Variable = "Variable";
    Variable.ImportBinding = "ImportBinding";
    Variable.TDZ = "TDZ";
    Variable.ImplicitGlobalVariable = "ImplicitGlobalVariable";

    /* vim: set sw=4 ts=4 et tw=80 : */
    return module.exports;
    })({exports:{}});

    var definition = (function (module) {
    var exports = module.exports;
    "use strict";

    var _interopRequire = function _interopRequire(obj) {
      return obj && obj.__esModule ? obj["default"] : obj;
    };

    var _get = function get(_x, _x2, _x3) {
      var _again = true;

      _function: while (_again) {
        var object = _x,
            property = _x2,
            receiver = _x3;
        _again = false;
        var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);if (parent === null) {
            return undefined;
          } else {
            _x = parent;
            _x2 = property;
            _x3 = receiver;
            _again = true;
            desc = parent = undefined;
            continue _function;
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;if (getter === undefined) {
            return undefined;
          }return getter.call(receiver);
        }
      }
    };

    var _inherits = function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
    };

    var _classCallCheck = function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /*
      Copyright (C) 2015 Yusuke Suzuki <utatane.tea@gmail.com>

      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are met:

        * Redistributions of source code must retain the above copyright
          notice, this list of conditions and the following disclaimer.
        * Redistributions in binary form must reproduce the above copyright
          notice, this list of conditions and the following disclaimer in the
          documentation and/or other materials provided with the distribution.

      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
      ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
      DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
      (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
      LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
      ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
      (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
      THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */

    var Variable = _interopRequire(variable);

    /**
     * @class Definition
     */

    var Definition = function Definition(type, name, node, parent, index, kind) {
      _classCallCheck(this, Definition);

      /**
       * @member {String} Definition#type - type of the occurrence (e.g. "Parameter", "Variable", ...).
       */
      this.type = type;
      /**
       * @member {esprima.Identifier} Definition#name - the identifier AST node of the occurrence.
       */
      this.name = name;
      /**
       * @member {esprima.Node} Definition#node - the enclosing node of the identifier.
       */
      this.node = node;
      /**
       * @member {esprima.Node?} Definition#parent - the enclosing statement node of the identifier.
       */
      this.parent = parent;
      /**
       * @member {Number?} Definition#index - the index in the declaration statement.
       */
      this.index = index;
      /**
       * @member {String?} Definition#kind - the kind of the declaration statement.
       */
      this.kind = kind;
    };

    exports["default"] = Definition;

    /**
     * @class ParameterDefinition
     */

    var ParameterDefinition = (function (_Definition) {
      function ParameterDefinition(name, node, index, rest) {
        _classCallCheck(this, ParameterDefinition);

        _get(Object.getPrototypeOf(ParameterDefinition.prototype), "constructor", this).call(this, Variable.Parameter, name, node, null, index, null);
        /**
         * Whether the parameter definition is a part of a rest parameter.
         * @member {boolean} ParameterDefinition#rest
         */
        this.rest = rest;
      }

      _inherits(ParameterDefinition, _Definition);

      return ParameterDefinition;
    })(Definition);

    exports.ParameterDefinition = ParameterDefinition;

    /* vim: set sw=4 ts=4 et tw=80 : */
    exports.Definition = Definition;
    return module.exports;
    })({exports:{}});

    var reference = (function (module) {
    var exports = module.exports;
    "use strict";

    var _createClass = (function () {
      function defineProperties(target, props) {
        for (var key in props) {
          var prop = props[key];prop.configurable = true;if (prop.value) prop.writable = true;
        }Object.defineProperties(target, props);
      }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
      };
    })();

    var _classCallCheck = function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };

    /*
      Copyright (C) 2015 Yusuke Suzuki <utatane.tea@gmail.com>

      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are met:

        * Redistributions of source code must retain the above copyright
          notice, this list of conditions and the following disclaimer.
        * Redistributions in binary form must reproduce the above copyright
          notice, this list of conditions and the following disclaimer in the
          documentation and/or other materials provided with the distribution.

      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
      ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
      DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
      (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
      LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
      ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
      (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
      THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */

    var READ = 1;
    var WRITE = 2;
    var RW = READ | WRITE;

    /**
     * A Reference represents a single occurrence of an identifier in code.
     * @class Reference
     */

    var Reference = (function () {
      function Reference(ident, scope, flag, writeExpr, maybeImplicitGlobal, partial, init) {
        _classCallCheck(this, Reference);

        /**
         * Identifier syntax node.
         * @member {esprima#Identifier} Reference#identifier
         */
        this.identifier = ident;
        /**
         * Reference to the enclosing Scope.
         * @member {Scope} Reference#from
         */
        this.from = scope;
        /**
         * Whether the reference comes from a dynamic scope (such as 'eval',
         * 'with', etc.), and may be trapped by dynamic scopes.
         * @member {boolean} Reference#tainted
         */
        this.tainted = false;
        /**
         * The variable this reference is resolved with.
         * @member {Variable} Reference#resolved
         */
        this.resolved = null;
        /**
         * The read-write mode of the reference. (Value is one of {@link
         * Reference.READ}, {@link Reference.RW}, {@link Reference.WRITE}).
         * @member {number} Reference#flag
         * @private
         */
        this.flag = flag;
        if (this.isWrite()) {
          /**
           * If reference is writeable, this is the tree being written to it.
           * @member {esprima#Node} Reference#writeExpr
           */
          this.writeExpr = writeExpr;
          /**
           * Whether the Reference might refer to a partial value of writeExpr.
           * @member {boolean} Reference#partial
           */
          this.partial = partial;
          /**
           * Whether the Reference is to write of initialization.
           * @member {boolean} Reference#init
           */
          this.init = init;
        }
        this.__maybeImplicitGlobal = maybeImplicitGlobal;
      }

      _createClass(Reference, {
        isStatic: {

          /**
           * Whether the reference is static.
           * @method Reference#isStatic
           * @return {boolean}
           */

          value: function isStatic() {
            return !this.tainted && this.resolved && this.resolved.scope.isStatic();
          }
        },
        isWrite: {

          /**
           * Whether the reference is writeable.
           * @method Reference#isWrite
           * @return {boolean}
           */

          value: function isWrite() {
            return !!(this.flag & Reference.WRITE);
          }
        },
        isRead: {

          /**
           * Whether the reference is readable.
           * @method Reference#isRead
           * @return {boolean}
           */

          value: function isRead() {
            return !!(this.flag & Reference.READ);
          }
        },
        isReadOnly: {

          /**
           * Whether the reference is read-only.
           * @method Reference#isReadOnly
           * @return {boolean}
           */

          value: function isReadOnly() {
            return this.flag === Reference.READ;
          }
        },
        isWriteOnly: {

          /**
           * Whether the reference is write-only.
           * @method Reference#isWriteOnly
           * @return {boolean}
           */

          value: function isWriteOnly() {
            return this.flag === Reference.WRITE;
          }
        },
        isReadWrite: {

          /**
           * Whether the reference is read-write.
           * @method Reference#isReadWrite
           * @return {boolean}
           */

          value: function isReadWrite() {
            return this.flag === Reference.RW;
          }
        }
      });

      return Reference;
    })();

    module.exports = Reference;

    /**
     * @constant Reference.READ
     * @private
     */
    Reference.READ = READ;
    /**
     * @constant Reference.WRITE
     * @private
     */
    Reference.WRITE = WRITE;
    /**
     * @constant Reference.RW
     * @private
     */
    Reference.RW = RW;

    /* vim: set sw=4 ts=4 et tw=80 : */
    return module.exports;
    })({exports:{}});

    var isNativeImplemented = (function (module) {
    var exports = module.exports;
    // Exports true if environment provides native `Map` implementation,
    // whatever that is.

    'use strict';

    module.exports = (function () {
    	if (typeof Map === 'undefined') return false;
    	return Object.prototype.toString.call(new Map()) === '[object Map]';
    })();
    return module.exports;
    })({exports:{}});

    var primitiveSet = (function (module) {
    var exports = module.exports;
    'use strict';

    var forEach = Array.prototype.forEach,
        create = Object.create;

    module.exports = function (arg /*, …args*/) {
    	var set = create(null);
    	forEach.call(arguments, function (name) {
    		set[name] = true;
    	});
    	return set;
    };
    return module.exports;
    })({exports:{}});

    var iteratorKinds = (function (module) {
    var exports = module.exports;
    'use strict';

    module.exports = primitiveSet('key', 'value', 'key+value');
    return module.exports;
    })({exports:{}});

    var isSymbol$2 = (function (module) {
    var exports = module.exports;
    'use strict';

    module.exports = function (x) {
    	return x && (typeof x === 'symbol' || x['@@toStringTag'] === 'Symbol') || false;
    };
    return module.exports;
    })({exports:{}});

    var validateSymbol$1 = (function (module) {
    var exports = module.exports;
    'use strict';

    var isSymbol = isSymbol$2;

    module.exports = function (value) {
    	if (!isSymbol(value)) throw new TypeError(value + " is not a symbol");
    	return value;
    };
    return module.exports;
    })({exports:{}});

    var shim$4 = (function (module) {
    var exports = module.exports;
    'use strict';

    var indexOf = String.prototype.indexOf;

    module.exports = function (searchString /*, position*/) {
    	return indexOf.call(this, searchString, arguments[1]) > -1;
    };
    return module.exports;
    })({exports:{}});

    var isImplemented$8 = (function (module) {
    var exports = module.exports;
    'use strict';

    var str = 'razdwatrzy';

    module.exports = function () {
    	if (typeof str.contains !== 'function') return false;
    	return str.contains('dwa') === true && str.contains('foo') === false;
    };
    return module.exports;
    })({exports:{}});

    var index$14 = (function (module) {
    var exports = module.exports;
    'use strict';

    module.exports = isImplemented$8() ? String.prototype.contains : shim$4;
    return module.exports;
    })({exports:{}});

    var isCallable = (function (module) {
    var exports = module.exports;
    // Deprecated

    'use strict';

    module.exports = function (obj) {
      return typeof obj === 'function';
    };
    return module.exports;
    })({exports:{}});

    var normalizeOptions = (function (module) {
    var exports = module.exports;
    'use strict';

    var forEach = Array.prototype.forEach,
        create = Object.create;

    var process = function process(src, obj) {
    	var key;
    	for (key in src) obj[key] = src[key];
    };

    module.exports = function (options /*, …options*/) {
    	var result = create(null);
    	forEach.call(arguments, function (options) {
    		if (options == null) return;
    		process(Object(options), result);
    	});
    	return result;
    };
    return module.exports;
    })({exports:{}});

    var validValue = (function (module) {
    var exports = module.exports;
    'use strict';

    module.exports = function (value) {
    	if (value == null) throw new TypeError("Cannot use null or undefined");
    	return value;
    };
    return module.exports;
    })({exports:{}});

    var shim$3 = (function (module) {
    var exports = module.exports;
    'use strict';

    var keys = Object.keys;

    module.exports = function (object) {
    	return keys(object == null ? object : Object(object));
    };
    return module.exports;
    })({exports:{}});

    var isImplemented$7 = (function (module) {
    var exports = module.exports;
    'use strict';

    module.exports = function () {
    	try {
    		Object.keys('primitive');
    		return true;
    	} catch (e) {
    		return false;
    	}
    };
    return module.exports;
    })({exports:{}});

    var index$13 = (function (module) {
    var exports = module.exports;
    'use strict';

    module.exports = isImplemented$7() ? Object.keys : shim$3;
    return module.exports;
    })({exports:{}});

    var shim$2 = (function (module) {
    var exports = module.exports;
    'use strict';

    var keys = index$13,
        value = validValue,
        max = Math.max;

    module.exports = function (dest, src /*, …srcn*/) {
    	var error,
    	    i,
    	    l = max(arguments.length, 2),
    	    assign;
    	dest = Object(value(dest));
    	assign = function (key) {
    		try {
    			dest[key] = src[key];
    		} catch (e) {
    			if (!error) error = e;
    		}
    	};
    	for (i = 1; i < l; ++i) {
    		src = arguments[i];
    		keys(src).forEach(assign);
    	}
    	if (error !== undefined) throw error;
    	return dest;
    };
    return module.exports;
    })({exports:{}});

    var isImplemented$6 = (function (module) {
    var exports = module.exports;
    'use strict';

    module.exports = function () {
    	var assign = Object.assign,
    	    obj;
    	if (typeof assign !== 'function') return false;
    	obj = { foo: 'raz' };
    	assign(obj, { bar: 'dwa' }, { trzy: 'trzy' });
    	return obj.foo + obj.bar + obj.trzy === 'razdwatrzy';
    };
    return module.exports;
    })({exports:{}});

    var index$12 = (function (module) {
    var exports = module.exports;
    'use strict';

    module.exports = isImplemented$6() ? Object.assign : shim$2;
    return module.exports;
    })({exports:{}});

    var index$7 = (function (module) {
    var exports = module.exports;
    'use strict';

    var assign = index$12,
        normalizeOpts = normalizeOptions,
        isCallable$$ = isCallable,
        contains = index$14,
        d;

    d = module.exports = function (dscr, value /*, options*/) {
    	var c, e, w, options, desc;
    	if (arguments.length < 2 || typeof dscr !== 'string') {
    		options = value;
    		value = dscr;
    		dscr = null;
    	} else {
    		options = arguments[2];
    	}
    	if (dscr == null) {
    		c = w = true;
    		e = false;
    	} else {
    		c = contains.call(dscr, 'c');
    		e = contains.call(dscr, 'e');
    		w = contains.call(dscr, 'w');
    	}

    	desc = { value: value, configurable: c, enumerable: e, writable: w };
    	return !options ? desc : assign(normalizeOpts(options), desc);
    };

    d.gs = function (dscr, get, set /*, options*/) {
    	var c, e, options, desc;
    	if (typeof dscr !== 'string') {
    		options = set;
    		set = get;
    		get = dscr;
    		dscr = null;
    	} else {
    		options = arguments[3];
    	}
    	if (get == null) {
    		get = undefined;
    	} else if (!isCallable$$(get)) {
    		options = get;
    		get = set = undefined;
    	} else if (set == null) {
    		set = undefined;
    	} else if (!isCallable$$(set)) {
    		options = set;
    		set = undefined;
    	}
    	if (dscr == null) {
    		c = true;
    		e = false;
    	} else {
    		c = contains.call(dscr, 'c');
    		e = contains.call(dscr, 'e');
    	}

    	desc = { get: get, set: set, configurable: c, enumerable: e };
    	return !options ? desc : assign(normalizeOpts(options), desc);
    };
    return module.exports;
    })({exports:{}});

    var polyfill$3 = (function (module) {
    var exports = module.exports;
    'use strict';

    var d = index$7,
        validateSymbol = validateSymbol$1,
        create = Object.create,
        defineProperties = Object.defineProperties,
        defineProperty = Object.defineProperty,
        objPrototype = Object.prototype,
        NativeSymbol,
        SymbolPolyfill,
        HiddenSymbol,
        globalSymbols = create(null);

    if (typeof Symbol === 'function') NativeSymbol = Symbol;

    var generateName = (function () {
    	var created = create(null);
    	return function (desc) {
    		var postfix = 0,
    		    name,
    		    ie11BugWorkaround;
    		while (created[desc + (postfix || '')]) ++postfix;
    		desc += postfix || '';
    		created[desc] = true;
    		name = '@@' + desc;
    		defineProperty(objPrototype, name, d.gs(null, function (value) {
    			// For IE11 issue see:
    			// https://connect.microsoft.com/IE/feedbackdetail/view/1928508/
    			//    ie11-broken-getters-on-dom-objects
    			// https://github.com/medikoo/es6-symbol/issues/12
    			if (ie11BugWorkaround) return;
    			ie11BugWorkaround = true;
    			defineProperty(this, name, d(value));
    			ie11BugWorkaround = false;
    		}));
    		return name;
    	};
    })();

    HiddenSymbol = function Symbol(description) {
    	if (this instanceof HiddenSymbol) throw new TypeError('TypeError: Symbol is not a constructor');
    	return SymbolPolyfill(description);
    };
    module.exports = SymbolPolyfill = function Symbol(description) {
    	var symbol;
    	if (this instanceof Symbol) throw new TypeError('TypeError: Symbol is not a constructor');
    	symbol = create(HiddenSymbol.prototype);
    	description = description === undefined ? '' : String(description);
    	return defineProperties(symbol, {
    		__description__: d('', description),
    		__name__: d('', generateName(description))
    	});
    };
    defineProperties(SymbolPolyfill, {
    	'for': d(function (key) {
    		if (globalSymbols[key]) return globalSymbols[key];
    		return globalSymbols[key] = SymbolPolyfill(String(key));
    	}),
    	keyFor: d(function (s) {
    		var key;
    		validateSymbol(s);
    		for (key in globalSymbols) if (globalSymbols[key] === s) return key;
    	}),
    	hasInstance: d('', NativeSymbol && NativeSymbol.hasInstance || SymbolPolyfill('hasInstance')),
    	isConcatSpreadable: d('', NativeSymbol && NativeSymbol.isConcatSpreadable || SymbolPolyfill('isConcatSpreadable')),
    	iterator: d('', NativeSymbol && NativeSymbol.iterator || SymbolPolyfill('iterator')),
    	match: d('', NativeSymbol && NativeSymbol.match || SymbolPolyfill('match')),
    	replace: d('', NativeSymbol && NativeSymbol.replace || SymbolPolyfill('replace')),
    	search: d('', NativeSymbol && NativeSymbol.search || SymbolPolyfill('search')),
    	species: d('', NativeSymbol && NativeSymbol.species || SymbolPolyfill('species')),
    	split: d('', NativeSymbol && NativeSymbol.split || SymbolPolyfill('split')),
    	toPrimitive: d('', NativeSymbol && NativeSymbol.toPrimitive || SymbolPolyfill('toPrimitive')),
    	toStringTag: d('', NativeSymbol && NativeSymbol.toStringTag || SymbolPolyfill('toStringTag')),
    	unscopables: d('', NativeSymbol && NativeSymbol.unscopables || SymbolPolyfill('unscopables'))
    });
    defineProperties(HiddenSymbol.prototype, {
    	constructor: d(SymbolPolyfill),
    	toString: d('', function () {
    		return this.__name__;
    	})
    });

    defineProperties(SymbolPolyfill.prototype, {
    	toString: d(function () {
    		return 'Symbol (' + validateSymbol(this).__description__ + ')';
    	}),
    	valueOf: d(function () {
    		return validateSymbol(this);
    	})
    });
    defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toPrimitive, d('', function () {
    	return validateSymbol(this);
    }));
    defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d('c', 'Symbol'));

    defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toPrimitive, d('c', SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive]));
    defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toStringTag, d('c', SymbolPolyfill.prototype[SymbolPolyfill.toStringTag]));
    return module.exports;
    })({exports:{}});

    var isImplemented$3 = (function (module) {
    var exports = module.exports;
    'use strict';

    module.exports = function () {
    	var symbol;
    	if (typeof Symbol !== 'function') return false;
    	symbol = Symbol('test symbol');
    	try {
    		String(symbol);
    	} catch (e) {
    		return false;
    	}
    	if (typeof Symbol.iterator === 'symbol') return true;

    	// Return 'true' for polyfills
    	if (typeof Symbol.isConcatSpreadable !== 'object') return false;
    	if (typeof Symbol.iterator !== 'object') return false;
    	if (typeof Symbol.toPrimitive !== 'object') return false;
    	if (typeof Symbol.toStringTag !== 'object') return false;
    	if (typeof Symbol.unscopables !== 'object') return false;

    	return true;
    };
    return module.exports;
    })({exports:{}});

    var index$6 = (function (module) {
    var exports = module.exports;
    'use strict';

    module.exports = isImplemented$3() ? Symbol : polyfill$3;
    return module.exports;
    })({exports:{}});

    var validCallable = (function (module) {
    var exports = module.exports;
    'use strict';

    module.exports = function (fn) {
    	if (typeof fn !== 'function') throw new TypeError(fn + " is not a function");
    	return fn;
    };
    return module.exports;
    })({exports:{}});

    var _iterate = (function (module) {
    var exports = module.exports;
    // Internal method, used by iteration functions.
    // Calls a function for each key-value pair found in object
    // Optionally takes compareFn to iterate object in specific order

    'use strict';

    var callable = validCallable,
        value = validValue,
        bind = Function.prototype.bind,
        call = Function.prototype.call,
        keys = Object.keys,
        propertyIsEnumerable = Object.prototype.propertyIsEnumerable;

    module.exports = function (method, defVal) {
    	return function (obj, cb /*, thisArg, compareFn*/) {
    		var list,
    		    thisArg = arguments[2],
    		    compareFn = arguments[3];
    		obj = Object(value(obj));
    		callable(cb);

    		list = keys(obj);
    		if (compareFn) {
    			list.sort(typeof compareFn === 'function' ? bind.call(compareFn, obj) : undefined);
    		}
    		if (typeof method !== 'function') method = list[method];
    		return call.call(method, list, function (key, index) {
    			if (!propertyIsEnumerable.call(obj, key)) return defVal;
    			return call.call(cb, thisArg, obj[key], key, obj, index);
    		});
    	};
    };
    return module.exports;
    })({exports:{}});

    var forEach = (function (module) {
    var exports = module.exports;
    'use strict';

    module.exports = _iterate('forEach');
    return module.exports;
    })({exports:{}});

    var map = (function (module) {
    var exports = module.exports;
    'use strict';

    var callable = validCallable,
        forEach$$ = forEach,
        call = Function.prototype.call;

    module.exports = function (obj, cb /*, thisArg*/) {
    	var o = {},
    	    thisArg = arguments[2];
    	callable(cb);
    	forEach$$(obj, function (value, key, obj, index) {
    		o[key] = call.call(cb, thisArg, value, key, obj, index);
    	});
    	return o;
    };
    return module.exports;
    })({exports:{}});

    var copy = (function (module) {
    var exports = module.exports;
    'use strict';

    var assign = index$12,
        value = validValue;

    module.exports = function (obj) {
    	var copy = Object(value(obj));
    	if (copy !== obj) return copy;
    	return assign({}, obj);
    };
    return module.exports;
    })({exports:{}});

    var autoBind = (function (module) {
    var exports = module.exports;
    'use strict';

    var copy$$ = copy,
        map$$ = map,
        callable = validCallable,
        validValue$$ = validValue,
        bind = Function.prototype.bind,
        defineProperty = Object.defineProperty,
        hasOwnProperty = Object.prototype.hasOwnProperty,
        define;

    define = function (name, desc, bindTo) {
    	var value = validValue$$(desc) && callable(desc.value),
    	    dgs;
    	dgs = copy$$(desc);
    	delete dgs.writable;
    	delete dgs.value;
    	dgs.get = function () {
    		if (hasOwnProperty.call(this, name)) return value;
    		desc.value = bind.call(value, bindTo == null ? this : this[bindTo]);
    		defineProperty(this, name, desc);
    		return this[name];
    	};
    	return dgs;
    };

    module.exports = function (props /*, bindTo*/) {
    	var bindTo = arguments[1];
    	return map$$(props, function (desc, name) {
    		return define(name, desc, bindTo);
    	});
    };
    return module.exports;
    })({exports:{}});

    var clear = (function (module) {
    var exports = module.exports;
    // Inspired by Google Closure:
    // http://closure-library.googlecode.com/svn/docs/
    // closure_goog_array_array.js.html#goog.array.clear

    'use strict';

    var value = validValue;

    module.exports = function () {
    	value(this).length = 0;
    	return this;
    };
    return module.exports;
    })({exports:{}});

    var index$9 = (function (module) {
    var exports = module.exports;
    'use strict';

    var clear$$ = clear,
        assign = index$12,
        callable = validCallable,
        value = validValue,
        d = index$7,
        autoBind$$ = autoBind,
        Symbol = index$6,
        defineProperty = Object.defineProperty,
        defineProperties = Object.defineProperties,
        Iterator;

    module.exports = Iterator = function (list, context) {
    	if (!(this instanceof Iterator)) return new Iterator(list, context);
    	defineProperties(this, {
    		__list__: d('w', value(list)),
    		__context__: d('w', context),
    		__nextIndex__: d('w', 0)
    	});
    	if (!context) return;
    	callable(context.on);
    	context.on('_add', this._onAdd);
    	context.on('_delete', this._onDelete);
    	context.on('_clear', this._onClear);
    };

    defineProperties(Iterator.prototype, assign({
    	constructor: d(Iterator),
    	_next: d(function () {
    		var i;
    		if (!this.__list__) return;
    		if (this.__redo__) {
    			i = this.__redo__.shift();
    			if (i !== undefined) return i;
    		}
    		if (this.__nextIndex__ < this.__list__.length) return this.__nextIndex__++;
    		this._unBind();
    	}),
    	next: d(function () {
    		return this._createResult(this._next());
    	}),
    	_createResult: d(function (i) {
    		if (i === undefined) return { done: true, value: undefined };
    		return { done: false, value: this._resolve(i) };
    	}),
    	_resolve: d(function (i) {
    		return this.__list__[i];
    	}),
    	_unBind: d(function () {
    		this.__list__ = null;
    		delete this.__redo__;
    		if (!this.__context__) return;
    		this.__context__.off('_add', this._onAdd);
    		this.__context__.off('_delete', this._onDelete);
    		this.__context__.off('_clear', this._onClear);
    		this.__context__ = null;
    	}),
    	toString: d(function () {
    		return '[object Iterator]';
    	})
    }, autoBind$$({
    	_onAdd: d(function (index) {
    		if (index >= this.__nextIndex__) return;
    		++this.__nextIndex__;
    		if (!this.__redo__) {
    			defineProperty(this, '__redo__', d('c', [index]));
    			return;
    		}
    		this.__redo__.forEach(function (redo, i) {
    			if (redo >= index) this.__redo__[i] = ++redo;
    		}, this);
    		this.__redo__.push(index);
    	}),
    	_onDelete: d(function (index) {
    		var i;
    		if (index >= this.__nextIndex__) return;
    		--this.__nextIndex__;
    		if (!this.__redo__) return;
    		i = this.__redo__.indexOf(index);
    		if (i !== -1) this.__redo__.splice(i, 1);
    		this.__redo__.forEach(function (redo, i) {
    			if (redo > index) this.__redo__[i] = --redo;
    		}, this);
    	}),
    	_onClear: d(function () {
    		if (this.__redo__) clear$$.call(this.__redo__);
    		this.__nextIndex__ = 0;
    	})
    })));

    defineProperty(Iterator.prototype, Symbol.iterator, d(function () {
    	return this;
    }));
    defineProperty(Iterator.prototype, Symbol.toStringTag, d('', 'Iterator'));
    return module.exports;
    })({exports:{}});

    var isImplemented$5 = (function (module) {
    var exports = module.exports;
    'use strict';

    var create = Object.create,
        getPrototypeOf = Object.getPrototypeOf,
        x = {};

    module.exports = function () /*customCreate*/{
    	var setPrototypeOf = Object.setPrototypeOf,
    	    customCreate = arguments[0] || create;
    	if (typeof setPrototypeOf !== 'function') return false;
    	return getPrototypeOf(setPrototypeOf(customCreate(null), x)) === x;
    };
    return module.exports;
    })({exports:{}});

    var create = (function (module) {
    var exports = module.exports;
    // Workaround for http://code.google.com/p/v8/issues/detail?id=2804

    'use strict';

    var create = Object.create,
        shim;

    if (!isImplemented$5()) {
    	shim = shim$1;
    }

    module.exports = (function () {
    	var nullObject, props, desc;
    	if (!shim) return create;
    	if (shim.level !== 1) return create;

    	nullObject = {};
    	props = {};
    	desc = { configurable: false, enumerable: false, writable: true,
    		value: undefined };
    	Object.getOwnPropertyNames(Object.prototype).forEach(function (name) {
    		if (name === '__proto__') {
    			props[name] = { configurable: true, enumerable: false, writable: true,
    				value: undefined };
    			return;
    		}
    		props[name] = desc;
    	});
    	Object.defineProperties(nullObject, props);

    	Object.defineProperty(shim, 'nullPolyfill', { configurable: false,
    		enumerable: false, writable: false, value: nullObject });

    	return function (prototype, props) {
    		return create(prototype === null ? nullObject : prototype, props);
    	};
    })();
    return module.exports;
    })({exports:{}});

    var isObject$1 = (function (module) {
    var exports = module.exports;
    'use strict';

    var map = { 'function': true, object: true };

    module.exports = function (x) {
    	return x != null && map[typeof x] || false;
    };
    return module.exports;
    })({exports:{}});

    var shim$1 = (function (module) {
    var exports = module.exports;
    // Big thanks to @WebReflection for sorting this out
    // https://gist.github.com/WebReflection/5593554

    'use strict';

    var isObject = isObject$1,
        value = validValue,
        isPrototypeOf = Object.prototype.isPrototypeOf,
        defineProperty = Object.defineProperty,
        nullDesc = { configurable: true, enumerable: false, writable: true,
    	value: undefined },
        validate;

    validate = function (obj, prototype) {
    	value(obj);
    	if (prototype === null || isObject(prototype)) return obj;
    	throw new TypeError('Prototype must be null or an object');
    };

    module.exports = (function (status) {
    	var fn, set;
    	if (!status) return null;
    	if (status.level === 2) {
    		if (status.set) {
    			set = status.set;
    			fn = function (obj, prototype) {
    				set.call(validate(obj, prototype), prototype);
    				return obj;
    			};
    		} else {
    			fn = function (obj, prototype) {
    				validate(obj, prototype).__proto__ = prototype;
    				return obj;
    			};
    		}
    	} else {
    		fn = function self(obj, prototype) {
    			var isNullBase;
    			validate(obj, prototype);
    			isNullBase = isPrototypeOf.call(self.nullPolyfill, obj);
    			if (isNullBase) delete self.nullPolyfill.__proto__;
    			if (prototype === null) prototype = self.nullPolyfill;
    			obj.__proto__ = prototype;
    			if (isNullBase) defineProperty(self.nullPolyfill, '__proto__', nullDesc);
    			return obj;
    		};
    	}
    	return Object.defineProperty(fn, 'level', { configurable: false,
    		enumerable: false, writable: false, value: status.level });
    })((function () {
    	var x = Object.create(null),
    	    y = {},
    	    set,
    	    desc = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');

    	if (desc) {
    		try {
    			set = desc.set; // Opera crashes at this point
    			set.call(x, y);
    		} catch (ignore) {}
    		if (Object.getPrototypeOf(x) === y) return { set: set, level: 2 };
    	}

    	x.__proto__ = y;
    	if (Object.getPrototypeOf(x) === y) return { level: 2 };

    	x = {};
    	x.__proto__ = y;
    	if (Object.getPrototypeOf(x) === y) return { level: 1 };

    	return false;
    })());

    create;
    return module.exports;
    })({exports:{}});

    var index$11 = (function (module) {
    var exports = module.exports;
    'use strict';

    module.exports = isImplemented$5() ? Object.setPrototypeOf : shim$1;
    return module.exports;
    })({exports:{}});

    var iterator = (function (module) {
    var exports = module.exports;
    'use strict';

    var setPrototypeOf = index$11,
        d = index$7,
        Iterator = index$9,
        toStringTagSymbol = index$6.toStringTag,
        kinds = iteratorKinds,
        defineProperties = Object.defineProperties,
        unBind = Iterator.prototype._unBind,
        MapIterator;

    MapIterator = module.exports = function (map, kind) {
    	if (!(this instanceof MapIterator)) return new MapIterator(map, kind);
    	Iterator.call(this, map.__mapKeysData__, map);
    	if (!kind || !kinds[kind]) kind = 'key+value';
    	defineProperties(this, {
    		__kind__: d('', kind),
    		__values__: d('w', map.__mapValuesData__)
    	});
    };
    if (setPrototypeOf) setPrototypeOf(MapIterator, Iterator);

    MapIterator.prototype = Object.create(Iterator.prototype, {
    	constructor: d(MapIterator),
    	_resolve: d(function (i) {
    		if (this.__kind__ === 'value') return this.__values__[i];
    		if (this.__kind__ === 'key') return this.__list__[i];
    		return [this.__list__[i], this.__values__[i]];
    	}),
    	_unBind: d(function () {
    		this.__values__ = null;
    		unBind.call(this);
    	}),
    	toString: d(function () {
    		return '[object Map Iterator]';
    	})
    });
    Object.defineProperty(MapIterator.prototype, toStringTagSymbol, d('c', 'Map Iterator'));
    return module.exports;
    })({exports:{}});

    var isString$1 = (function (module) {
    var exports = module.exports;
    'use strict';

    var toString = Object.prototype.toString,
        id = toString.call('');

    module.exports = function (x) {
    		return typeof x === 'string' || x && typeof x === 'object' && (x instanceof String || toString.call(x) === id) || false;
    };
    return module.exports;
    })({exports:{}});

    var isArguments$1 = (function (module) {
    var exports = module.exports;
    'use strict';

    var toString = Object.prototype.toString,
        id = toString.call((function () {
      return arguments;
    })());

    module.exports = function (x) {
      return toString.call(x) === id;
    };
    return module.exports;
    })({exports:{}});

    var isIterable$1 = (function (module) {
    var exports = module.exports;
    'use strict';

    var isArguments = isArguments$1,
        isString = isString$1,
        iteratorSymbol = index$6.iterator,
        isArray = Array.isArray;

    module.exports = function (value) {
    	if (value == null) return false;
    	if (isArray(value)) return true;
    	if (isString(value)) return true;
    	if (isArguments(value)) return true;
    	return typeof value[iteratorSymbol] === 'function';
    };
    return module.exports;
    })({exports:{}});

    var validIterable$1 = (function (module) {
    var exports = module.exports;
    'use strict';

    var isIterable = isIterable$1;

    module.exports = function (value) {
    	if (!isIterable(value)) throw new TypeError(value + " is not iterable");
    	return value;
    };
    return module.exports;
    })({exports:{}});

    var string$1 = (function (module) {
    var exports = module.exports;
    // Thanks @mathiasbynens
    // http://mathiasbynens.be/notes/javascript-unicode#iterating-over-symbols

    'use strict';

    var setPrototypeOf = index$11,
        d = index$7,
        Iterator = index$9,
        defineProperty = Object.defineProperty,
        StringIterator;

    StringIterator = module.exports = function (str) {
    	if (!(this instanceof StringIterator)) return new StringIterator(str);
    	str = String(str);
    	Iterator.call(this, str);
    	defineProperty(this, '__length__', d('', str.length));
    };
    if (setPrototypeOf) setPrototypeOf(StringIterator, Iterator);

    StringIterator.prototype = Object.create(Iterator.prototype, {
    	constructor: d(StringIterator),
    	_next: d(function () {
    		if (!this.__list__) return;
    		if (this.__nextIndex__ < this.__length__) return this.__nextIndex__++;
    		this._unBind();
    	}),
    	_resolve: d(function (i) {
    		var char = this.__list__[i],
    		    code;
    		if (this.__nextIndex__ === this.__length__) return char;
    		code = char.charCodeAt(0);
    		if (code >= 0xD800 && code <= 0xDBFF) return char + this.__list__[this.__nextIndex__++];
    		return char;
    	}),
    	toString: d(function () {
    		return '[object String Iterator]';
    	})
    });
    return module.exports;
    })({exports:{}});

    var array$1 = (function (module) {
    var exports = module.exports;
    'use strict';

    var setPrototypeOf = index$11,
        contains = index$14,
        d = index$7,
        Iterator = index$9,
        defineProperty = Object.defineProperty,
        ArrayIterator;

    ArrayIterator = module.exports = function (arr, kind) {
    	if (!(this instanceof ArrayIterator)) return new ArrayIterator(arr, kind);
    	Iterator.call(this, arr);
    	if (!kind) kind = 'value';else if (contains.call(kind, 'key+value')) kind = 'key+value';else if (contains.call(kind, 'key')) kind = 'key';else kind = 'value';
    	defineProperty(this, '__kind__', d('', kind));
    };
    if (setPrototypeOf) setPrototypeOf(ArrayIterator, Iterator);

    ArrayIterator.prototype = Object.create(Iterator.prototype, {
    	constructor: d(ArrayIterator),
    	_resolve: d(function (i) {
    		if (this.__kind__ === 'value') return this.__list__[i];
    		if (this.__kind__ === 'key+value') return [i, this.__list__[i]];
    		return i;
    	}),
    	toString: d(function () {
    		return '[object Array Iterator]';
    	})
    });
    return module.exports;
    })({exports:{}});

    var get$1 = (function (module) {
    var exports = module.exports;
    'use strict';

    var isArguments = isArguments$1,
        isString = isString$1,
        ArrayIterator = array$1,
        StringIterator = string$1,
        iterable = validIterable$1,
        iteratorSymbol = index$6.iterator;

    module.exports = function (obj) {
      if (typeof iterable(obj)[iteratorSymbol] === 'function') return obj[iteratorSymbol]();
      if (isArguments(obj)) return new ArrayIterator(obj);
      if (isString(obj)) return new StringIterator(obj);
      return new ArrayIterator(obj);
    };
    return module.exports;
    })({exports:{}});

    var forOf$1 = (function (module) {
    var exports = module.exports;
    'use strict';

    var isArguments = isArguments$1,
        callable = validCallable,
        isString = isString$1,
        get = get$1,
        isArray = Array.isArray,
        call = Function.prototype.call,
        some = Array.prototype.some;

    module.exports = function (iterable, cb /*, thisArg*/) {
    	var mode,
    	    thisArg = arguments[2],
    	    result,
    	    doBreak,
    	    broken,
    	    i,
    	    l,
    	    char,
    	    code;
    	if (isArray(iterable) || isArguments(iterable)) mode = 'array';else if (isString(iterable)) mode = 'string';else iterable = get(iterable);

    	callable(cb);
    	doBreak = function () {
    		broken = true;
    	};
    	if (mode === 'array') {
    		some.call(iterable, function (value) {
    			call.call(cb, thisArg, value, doBreak);
    			if (broken) return true;
    		});
    		return;
    	}
    	if (mode === 'string') {
    		l = iterable.length;
    		for (i = 0; i < l; ++i) {
    			char = iterable[i];
    			if (i + 1 < l) {
    				code = char.charCodeAt(0);
    				if (code >= 0xD800 && code <= 0xDBFF) char += iterable[++i];
    			}
    			call.call(cb, thisArg, char, doBreak);
    			if (broken) break;
    		}
    		return;
    	}
    	result = iterable.next();

    	while (!result.done) {
    		call.call(cb, thisArg, result.value, doBreak);
    		if (broken) return;
    		result = iterable.next();
    	}
    };
    return module.exports;
    })({exports:{}});

    var index$8 = (function (module) {
    var exports = module.exports;
    'use strict';

    var d = index$7,
        callable = validCallable,
        apply = Function.prototype.apply,
        call = Function.prototype.call,
        create = Object.create,
        defineProperty = Object.defineProperty,
        defineProperties = Object.defineProperties,
        hasOwnProperty = Object.prototype.hasOwnProperty,
        descriptor = { configurable: true, enumerable: false, writable: true },
        on,
        once,
        off,
        emit,
        methods,
        descriptors,
        base;

    on = function (type, listener) {
    	var data;

    	callable(listener);

    	if (!hasOwnProperty.call(this, '__ee__')) {
    		data = descriptor.value = create(null);
    		defineProperty(this, '__ee__', descriptor);
    		descriptor.value = null;
    	} else {
    		data = this.__ee__;
    	}
    	if (!data[type]) data[type] = listener;else if (typeof data[type] === 'object') data[type].push(listener);else data[type] = [data[type], listener];

    	return this;
    };

    once = function (type, listener) {
    	var once, self;

    	callable(listener);
    	self = this;
    	on.call(this, type, once = function () {
    		off.call(self, type, once);
    		apply.call(listener, this, arguments);
    	});

    	once.__eeOnceListener__ = listener;
    	return this;
    };

    off = function (type, listener) {
    	var data, listeners, candidate, i;

    	callable(listener);

    	if (!hasOwnProperty.call(this, '__ee__')) return this;
    	data = this.__ee__;
    	if (!data[type]) return this;
    	listeners = data[type];

    	if (typeof listeners === 'object') {
    		for (i = 0; candidate = listeners[i]; ++i) {
    			if (candidate === listener || candidate.__eeOnceListener__ === listener) {
    				if (listeners.length === 2) data[type] = listeners[i ? 0 : 1];else listeners.splice(i, 1);
    			}
    		}
    	} else {
    		if (listeners === listener || listeners.__eeOnceListener__ === listener) {
    			delete data[type];
    		}
    	}

    	return this;
    };

    emit = function (type) {
    	var i, l, listener, listeners, args;

    	if (!hasOwnProperty.call(this, '__ee__')) return;
    	listeners = this.__ee__[type];
    	if (!listeners) return;

    	if (typeof listeners === 'object') {
    		l = arguments.length;
    		args = new Array(l - 1);
    		for (i = 1; i < l; ++i) args[i - 1] = arguments[i];

    		listeners = listeners.slice();
    		for (i = 0; listener = listeners[i]; ++i) {
    			apply.call(listener, this, args);
    		}
    	} else {
    		switch (arguments.length) {
    			case 1:
    				call.call(listeners, this);
    				break;
    			case 2:
    				call.call(listeners, this, arguments[1]);
    				break;
    			case 3:
    				call.call(listeners, this, arguments[1], arguments[2]);
    				break;
    			default:
    				l = arguments.length;
    				args = new Array(l - 1);
    				for (i = 1; i < l; ++i) {
    					args[i - 1] = arguments[i];
    				}
    				apply.call(listeners, this, args);
    		}
    	}
    };

    methods = {
    	on: on,
    	once: once,
    	off: off,
    	emit: emit
    };

    descriptors = {
    	on: d(on),
    	once: d(once),
    	off: d(off),
    	emit: d(emit)
    };

    base = defineProperties({}, descriptors);

    module.exports = exports = function (o) {
    	return o == null ? create(base) : defineProperties(Object(o), descriptors);
    };
    exports.methods = methods;
    return module.exports;
    })({exports:{}});

    var shim = (function (module) {
    var exports = module.exports;
    'use strict';

    module.exports = function (value) {
    	value = Number(value);
    	if (isNaN(value) || value === 0) return value;
    	return value > 0 ? 1 : -1;
    };
    return module.exports;
    })({exports:{}});

    var isImplemented$4 = (function (module) {
    var exports = module.exports;
    'use strict';

    module.exports = function () {
    	var sign = Math.sign;
    	if (typeof sign !== 'function') return false;
    	return sign(10) === 1 && sign(-20) === -1;
    };
    return module.exports;
    })({exports:{}});

    var index$10 = (function (module) {
    var exports = module.exports;
    'use strict';

    module.exports = isImplemented$4() ? Math.sign : shim;
    return module.exports;
    })({exports:{}});

    var toInteger = (function (module) {
    var exports = module.exports;
    'use strict';

    var sign = index$10,
        abs = Math.abs,
        floor = Math.floor;

    module.exports = function (value) {
    	if (isNaN(value)) return 0;
    	value = Number(value);
    	if (value === 0 || !isFinite(value)) return value;
    	return sign(value) * floor(abs(value));
    };
    return module.exports;
    })({exports:{}});

    var toPosInteger = (function (module) {
    var exports = module.exports;
    'use strict';

    var toInteger$$ = toInteger,
        max = Math.max;

    module.exports = function (value) {
      return max(0, toInteger$$(value));
    };
    return module.exports;
    })({exports:{}});

    var eIndexOf = (function (module) {
    var exports = module.exports;
    'use strict';

    var toPosInt = toPosInteger,
        value = validValue,
        indexOf = Array.prototype.indexOf,
        hasOwnProperty = Object.prototype.hasOwnProperty,
        abs = Math.abs,
        floor = Math.floor;

    module.exports = function (searchElement /*, fromIndex*/) {
    	var i, l, fromIndex, val;
    	if (searchElement === searchElement) {
    		//jslint: ignore
    		return indexOf.apply(this, arguments);
    	}

    	l = toPosInt(value(this).length);
    	fromIndex = arguments[1];
    	if (isNaN(fromIndex)) fromIndex = 0;else if (fromIndex >= 0) fromIndex = floor(fromIndex);else fromIndex = toPosInt(this.length) - floor(abs(fromIndex));

    	for (i = fromIndex; i < l; ++i) {
    		if (hasOwnProperty.call(this, i)) {
    			val = this[i];
    			if (val !== val) return i; //jslint: ignore
    		}
    	}
    	return -1;
    };
    return module.exports;
    })({exports:{}});

    var polyfill = (function (module) {
    var exports = module.exports;
    'use strict';

    var clear$$ = clear,
        eIndexOf$$ = eIndexOf,
        setPrototypeOf = index$11,
        callable = validCallable,
        validValue$$ = validValue,
        d = index$7,
        ee = index$8,
        Symbol = index$6,
        iterator$$ = validIterable$1,
        forOf = forOf$1,
        Iterator = iterator,
        isNative = isNativeImplemented,
        call = Function.prototype.call,
        defineProperties = Object.defineProperties,
        getPrototypeOf = Object.getPrototypeOf,
        MapPoly;

    module.exports = MapPoly = function () /*iterable*/{
    	var iterable = arguments[0],
    	    keys,
    	    values,
    	    self;
    	if (!(this instanceof MapPoly)) throw new TypeError('Constructor requires \'new\'');
    	if (isNative && setPrototypeOf && Map !== MapPoly) {
    		self = setPrototypeOf(new Map(), getPrototypeOf(this));
    	} else {
    		self = this;
    	}
    	if (iterable != null) iterator$$(iterable);
    	defineProperties(self, {
    		__mapKeysData__: d('c', keys = []),
    		__mapValuesData__: d('c', values = [])
    	});
    	if (!iterable) return self;
    	forOf(iterable, function (value) {
    		var key = validValue$$(value)[0];
    		value = value[1];
    		if (eIndexOf$$.call(keys, key) !== -1) return;
    		keys.push(key);
    		values.push(value);
    	}, self);
    	return self;
    };

    if (isNative) {
    	if (setPrototypeOf) setPrototypeOf(MapPoly, Map);
    	MapPoly.prototype = Object.create(Map.prototype, {
    		constructor: d(MapPoly)
    	});
    }

    ee(defineProperties(MapPoly.prototype, {
    	clear: d(function () {
    		if (!this.__mapKeysData__.length) return;
    		clear$$.call(this.__mapKeysData__);
    		clear$$.call(this.__mapValuesData__);
    		this.emit('_clear');
    	}),
    	'delete': d(function (key) {
    		var index = eIndexOf$$.call(this.__mapKeysData__, key);
    		if (index === -1) return false;
    		this.__mapKeysData__.splice(index, 1);
    		this.__mapValuesData__.splice(index, 1);
    		this.emit('_delete', index, key);
    		return true;
    	}),
    	entries: d(function () {
    		return new Iterator(this, 'key+value');
    	}),
    	forEach: d(function (cb /*, thisArg*/) {
    		var thisArg = arguments[1],
    		    iterator$$,
    		    result;
    		callable(cb);
    		iterator$$ = this.entries();
    		result = iterator$$._next();
    		while (result !== undefined) {
    			call.call(cb, thisArg, this.__mapValuesData__[result], this.__mapKeysData__[result], this);
    			result = iterator$$._next();
    		}
    	}),
    	get: d(function (key) {
    		var index = eIndexOf$$.call(this.__mapKeysData__, key);
    		if (index === -1) return;
    		return this.__mapValuesData__[index];
    	}),
    	has: d(function (key) {
    		return eIndexOf$$.call(this.__mapKeysData__, key) !== -1;
    	}),
    	keys: d(function () {
    		return new Iterator(this, 'key');
    	}),
    	set: d(function (key, value) {
    		var index = eIndexOf$$.call(this.__mapKeysData__, key),
    		    emit;
    		if (index === -1) {
    			index = this.__mapKeysData__.push(key) - 1;
    			emit = true;
    		}
    		this.__mapValuesData__[index] = value;
    		if (emit) this.emit('_add', index, key);
    		return this;
    	}),
    	size: d.gs(function () {
    		return this.__mapKeysData__.length;
    	}),
    	values: d(function () {
    		return new Iterator(this, 'value');
    	}),
    	toString: d(function () {
    		return '[object Map]';
    	})
    }));
    Object.defineProperty(MapPoly.prototype, Symbol.iterator, d(function () {
    	return this.entries();
    }));
    Object.defineProperty(MapPoly.prototype, Symbol.toStringTag, d('c', 'Map'));
    return module.exports;
    })({exports:{}});

    var isImplemented = (function (module) {
    var exports = module.exports;
    'use strict';

    module.exports = function () {
    	var map, iterator, result;
    	if (typeof Map !== 'function') return false;
    	if (String(Map.prototype) !== '[object Map]') return false;
    	try {
    		// WebKit doesn't support arguments and crashes
    		map = new Map([['raz', 'one'], ['dwa', 'two'], ['trzy', 'three']]);
    	} catch (e) {
    		return false;
    	}
    	if (map.size !== 3) return false;
    	if (typeof map.clear !== 'function') return false;
    	if (typeof map['delete'] !== 'function') return false;
    	if (typeof map.entries !== 'function') return false;
    	if (typeof map.forEach !== 'function') return false;
    	if (typeof map.get !== 'function') return false;
    	if (typeof map.has !== 'function') return false;
    	if (typeof map.keys !== 'function') return false;
    	if (typeof map.set !== 'function') return false;
    	if (typeof map.values !== 'function') return false;

    	iterator = map.entries();
    	result = iterator.next();
    	if (result.done !== false) return false;
    	if (!result.value) return false;
    	if (result.value[0] !== 'raz') return false;
    	if (result.value[1] !== 'one') return false;

    	return true;
    };
    return module.exports;
    })({exports:{}});

    var index$2 = (function (module) {
    var exports = module.exports;
    'use strict';

    module.exports = isImplemented() ? Map : polyfill;
    return module.exports;
    })({exports:{}});

    var _args$3 = [["estraverse@^3.1.0", "/Users/donovan/src/esnext/node_modules/escope"]];
    var _from$3 = "estraverse@>=3.1.0 <4.0.0";
    var _id$3 = "estraverse@3.1.0";
    var _inCache$3 = true;
    var _installable$3 = true;
    var _location$3 = "/escope/estraverse";
    var _npmUser$3 = { "email": "utatane.tea@gmail.com", "name": "constellation" };
    var _npmVersion$3 = "2.0.0-alpha-5";
    var _phantomChildren$3 = {};
    var _requested$3 = { "name": "estraverse", "raw": "estraverse@^3.1.0", "rawSpec": "^3.1.0", "scope": null, "spec": ">=3.1.0 <4.0.0", "type": "range" };
    var _requiredBy$3 = ["/escope"];
    var _resolved$3 = "https://registry.npmjs.org/estraverse/-/estraverse-3.1.0.tgz";
    var _shasum$3 = "15e28a446b8b82bc700ccc8b96c78af4da0d6cba";
    var _shrinkwrap$3 = null;
    var _spec$3 = "estraverse@^3.1.0";
    var _where$3 = "/Users/donovan/src/esnext/node_modules/escope";
    var bugs$3 = { "url": "https://github.com/estools/estraverse/issues" };
    var dependencies$3 = {};
    var description$4 = "ECMAScript JS AST traversal functions";
    var devDependencies$3 = { "chai": "^2.1.1", "coffee-script": "^1.8.0", "espree": "^1.11.0", "gulp": "^3.8.10", "gulp-bump": "^0.2.2", "gulp-filter": "^2.0.0", "gulp-git": "^1.0.1", "gulp-tag-version": "^1.2.1", "jshint": "^2.5.6", "mocha": "^2.1.0" };
    var directories$3 = {};
    var dist$3 = { "shasum": "15e28a446b8b82bc700ccc8b96c78af4da0d6cba", "tarball": "http://registry.npmjs.org/estraverse/-/estraverse-3.1.0.tgz" };
    var engines$3 = { "node": ">=0.10.0" };
    var gitHead$3 = "166ebbe0a8d45ceb2391b6f5ef5d1bab6bfb267a";
    var homepage$3 = "https://github.com/estools/estraverse";
    var licenses$1 = [{ "type": "BSD", "url": "http://github.com/estools/estraverse/raw/master/LICENSE.BSD" }];
    var main$3 = "estraverse.js";
    var maintainers$3 = [{ "name": "constellation", "email": "utatane.tea@gmail.com" }, { "name": "michaelficarra", "email": "npm@michael.ficarra.me" }];
    var name$4 = "estraverse";
    var optionalDependencies$3 = {};
    var repository$3 = { "type": "git", "url": "http://github.com/estools/estraverse.git" };
    var scripts$3 = { "lint": "jshint estraverse.js", "test": "npm run-script lint && npm run-script unit-test", "unit-test": "mocha --compilers coffee:coffee-script/register" };
    var version$5 = "3.1.0";
    var require$$0$3 = {
    	_args: _args$3,
    	_from: _from$3,
    	_id: _id$3,
    	_inCache: _inCache$3,
    	_installable: _installable$3,
    	_location: _location$3,
    	_npmUser: _npmUser$3,
    	_npmVersion: _npmVersion$3,
    	_phantomChildren: _phantomChildren$3,
    	_requested: _requested$3,
    	_requiredBy: _requiredBy$3,
    	_resolved: _resolved$3,
    	_shasum: _shasum$3,
    	_shrinkwrap: _shrinkwrap$3,
    	_spec: _spec$3,
    	_where: _where$3,
    	bugs: bugs$3,
    	dependencies: dependencies$3,
    	description: description$4,
    	devDependencies: devDependencies$3,
    	directories: directories$3,
    	dist: dist$3,
    	engines: engines$3,
    	gitHead: gitHead$3,
    	homepage: homepage$3,
    	licenses: licenses$1,
    	main: main$3,
    	maintainers: maintainers$3,
    	name: name$4,
    	optionalDependencies: optionalDependencies$3,
    	repository: repository$3,
    	scripts: scripts$3,
    	version: version$5
    };

    var estraverse$1 = (function (module) {
    var exports = module.exports;
    /*
      Copyright (C) 2012-2013 Yusuke Suzuki <utatane.tea@gmail.com>
      Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>

      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are met:

        * Redistributions of source code must retain the above copyright
          notice, this list of conditions and the following disclaimer.
        * Redistributions in binary form must reproduce the above copyright
          notice, this list of conditions and the following disclaimer in the
          documentation and/or other materials provided with the distribution.

      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
      ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
      DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
      (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
      LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
      ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
      (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
      THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */
    /*jslint vars:false, bitwise:true*/
    /*jshint indent:4*/
    /*global exports:true*/
    'use strict';

    (function clone(exports) {
        'use strict';

        var Syntax, isArray, VisitorOption, VisitorKeys, objectCreate, objectKeys, BREAK, SKIP, REMOVE;

        function ignoreJSHintError() {}

        isArray = Array.isArray;
        if (!isArray) {
            isArray = function isArray(array) {
                return Object.prototype.toString.call(array) === '[object Array]';
            };
        }

        function deepCopy(obj) {
            var ret = {},
                key,
                val;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    val = obj[key];
                    if (typeof val === 'object' && val !== null) {
                        ret[key] = deepCopy(val);
                    } else {
                        ret[key] = val;
                    }
                }
            }
            return ret;
        }

        function shallowCopy(obj) {
            var ret = {},
                key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    ret[key] = obj[key];
                }
            }
            return ret;
        }
        ignoreJSHintError(shallowCopy);

        // based on LLVM libc++ upper_bound / lower_bound
        // MIT License

        function upperBound(array, func) {
            var diff, len, i, current;

            len = array.length;
            i = 0;

            while (len) {
                diff = len >>> 1;
                current = i + diff;
                if (func(array[current])) {
                    len = diff;
                } else {
                    i = current + 1;
                    len -= diff + 1;
                }
            }
            return i;
        }

        function lowerBound(array, func) {
            var diff, len, i, current;

            len = array.length;
            i = 0;

            while (len) {
                diff = len >>> 1;
                current = i + diff;
                if (func(array[current])) {
                    i = current + 1;
                    len -= diff + 1;
                } else {
                    len = diff;
                }
            }
            return i;
        }
        ignoreJSHintError(lowerBound);

        objectCreate = Object.create || (function () {
            function F() {}

            return function (o) {
                F.prototype = o;
                return new F();
            };
        })();

        objectKeys = Object.keys || function (o) {
            var keys = [],
                key;
            for (key in o) {
                keys.push(key);
            }
            return keys;
        };

        function extend(to, from) {
            var keys = objectKeys(from),
                key,
                i,
                len;
            for (i = 0, len = keys.length; i < len; i += 1) {
                key = keys[i];
                to[key] = from[key];
            }
            return to;
        }

        Syntax = {
            AssignmentExpression: 'AssignmentExpression',
            AssignmentPattern: 'AssignmentPattern',
            ArrayExpression: 'ArrayExpression',
            ArrayPattern: 'ArrayPattern',
            ArrowFunctionExpression: 'ArrowFunctionExpression',
            AwaitExpression: 'AwaitExpression', // CAUTION: It's deferred to ES7.
            BlockStatement: 'BlockStatement',
            BinaryExpression: 'BinaryExpression',
            BreakStatement: 'BreakStatement',
            CallExpression: 'CallExpression',
            CatchClause: 'CatchClause',
            ClassBody: 'ClassBody',
            ClassDeclaration: 'ClassDeclaration',
            ClassExpression: 'ClassExpression',
            ComprehensionBlock: 'ComprehensionBlock', // CAUTION: It's deferred to ES7.
            ComprehensionExpression: 'ComprehensionExpression', // CAUTION: It's deferred to ES7.
            ConditionalExpression: 'ConditionalExpression',
            ContinueStatement: 'ContinueStatement',
            DebuggerStatement: 'DebuggerStatement',
            DirectiveStatement: 'DirectiveStatement',
            DoWhileStatement: 'DoWhileStatement',
            EmptyStatement: 'EmptyStatement',
            ExportAllDeclaration: 'ExportAllDeclaration',
            ExportDefaultDeclaration: 'ExportDefaultDeclaration',
            ExportNamedDeclaration: 'ExportNamedDeclaration',
            ExportSpecifier: 'ExportSpecifier',
            ExpressionStatement: 'ExpressionStatement',
            ForStatement: 'ForStatement',
            ForInStatement: 'ForInStatement',
            ForOfStatement: 'ForOfStatement',
            FunctionDeclaration: 'FunctionDeclaration',
            FunctionExpression: 'FunctionExpression',
            GeneratorExpression: 'GeneratorExpression', // CAUTION: It's deferred to ES7.
            Identifier: 'Identifier',
            IfStatement: 'IfStatement',
            ImportDeclaration: 'ImportDeclaration',
            ImportDefaultSpecifier: 'ImportDefaultSpecifier',
            ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
            ImportSpecifier: 'ImportSpecifier',
            Literal: 'Literal',
            LabeledStatement: 'LabeledStatement',
            LogicalExpression: 'LogicalExpression',
            MemberExpression: 'MemberExpression',
            MethodDefinition: 'MethodDefinition',
            ModuleSpecifier: 'ModuleSpecifier',
            NewExpression: 'NewExpression',
            ObjectExpression: 'ObjectExpression',
            ObjectPattern: 'ObjectPattern',
            Program: 'Program',
            Property: 'Property',
            RestElement: 'RestElement',
            ReturnStatement: 'ReturnStatement',
            SequenceExpression: 'SequenceExpression',
            SpreadElement: 'SpreadElement',
            SuperExpression: 'SuperExpression',
            SwitchStatement: 'SwitchStatement',
            SwitchCase: 'SwitchCase',
            TaggedTemplateExpression: 'TaggedTemplateExpression',
            TemplateElement: 'TemplateElement',
            TemplateLiteral: 'TemplateLiteral',
            ThisExpression: 'ThisExpression',
            ThrowStatement: 'ThrowStatement',
            TryStatement: 'TryStatement',
            UnaryExpression: 'UnaryExpression',
            UpdateExpression: 'UpdateExpression',
            VariableDeclaration: 'VariableDeclaration',
            VariableDeclarator: 'VariableDeclarator',
            WhileStatement: 'WhileStatement',
            WithStatement: 'WithStatement',
            YieldExpression: 'YieldExpression'
        };

        VisitorKeys = {
            AssignmentExpression: ['left', 'right'],
            AssignmentPattern: ['left', 'right'],
            ArrayExpression: ['elements'],
            ArrayPattern: ['elements'],
            ArrowFunctionExpression: ['params', 'body'],
            AwaitExpression: ['argument'], // CAUTION: It's deferred to ES7.
            BlockStatement: ['body'],
            BinaryExpression: ['left', 'right'],
            BreakStatement: ['label'],
            CallExpression: ['callee', 'arguments'],
            CatchClause: ['param', 'body'],
            ClassBody: ['body'],
            ClassDeclaration: ['id', 'superClass', 'body'],
            ClassExpression: ['id', 'superClass', 'body'],
            ComprehensionBlock: ['left', 'right'], // CAUTION: It's deferred to ES7.
            ComprehensionExpression: ['blocks', 'filter', 'body'], // CAUTION: It's deferred to ES7.
            ConditionalExpression: ['test', 'consequent', 'alternate'],
            ContinueStatement: ['label'],
            DebuggerStatement: [],
            DirectiveStatement: [],
            DoWhileStatement: ['body', 'test'],
            EmptyStatement: [],
            ExportAllDeclaration: ['source'],
            ExportDefaultDeclaration: ['declaration'],
            ExportNamedDeclaration: ['declaration', 'specifiers', 'source'],
            ExportSpecifier: ['exported', 'local'],
            ExpressionStatement: ['expression'],
            ForStatement: ['init', 'test', 'update', 'body'],
            ForInStatement: ['left', 'right', 'body'],
            ForOfStatement: ['left', 'right', 'body'],
            FunctionDeclaration: ['id', 'params', 'body'],
            FunctionExpression: ['id', 'params', 'body'],
            GeneratorExpression: ['blocks', 'filter', 'body'], // CAUTION: It's deferred to ES7.
            Identifier: [],
            IfStatement: ['test', 'consequent', 'alternate'],
            ImportDeclaration: ['specifiers', 'source'],
            ImportDefaultSpecifier: ['local'],
            ImportNamespaceSpecifier: ['local'],
            ImportSpecifier: ['imported', 'local'],
            Literal: [],
            LabeledStatement: ['label', 'body'],
            LogicalExpression: ['left', 'right'],
            MemberExpression: ['object', 'property'],
            MethodDefinition: ['key', 'value'],
            ModuleSpecifier: [],
            NewExpression: ['callee', 'arguments'],
            ObjectExpression: ['properties'],
            ObjectPattern: ['properties'],
            Program: ['body'],
            Property: ['key', 'value'],
            RestElement: ['argument'],
            ReturnStatement: ['argument'],
            SequenceExpression: ['expressions'],
            SpreadElement: ['argument'],
            SuperExpression: ['super'],
            SwitchStatement: ['discriminant', 'cases'],
            SwitchCase: ['test', 'consequent'],
            TaggedTemplateExpression: ['tag', 'quasi'],
            TemplateElement: [],
            TemplateLiteral: ['quasis', 'expressions'],
            ThisExpression: [],
            ThrowStatement: ['argument'],
            TryStatement: ['block', 'handler', 'finalizer'],
            UnaryExpression: ['argument'],
            UpdateExpression: ['argument'],
            VariableDeclaration: ['declarations'],
            VariableDeclarator: ['id', 'init'],
            WhileStatement: ['test', 'body'],
            WithStatement: ['object', 'body'],
            YieldExpression: ['argument']
        };

        // unique id
        BREAK = {};
        SKIP = {};
        REMOVE = {};

        VisitorOption = {
            Break: BREAK,
            Skip: SKIP,
            Remove: REMOVE
        };

        function Reference(parent, key) {
            this.parent = parent;
            this.key = key;
        }

        Reference.prototype.replace = function replace(node) {
            this.parent[this.key] = node;
        };

        Reference.prototype.remove = function remove() {
            if (isArray(this.parent)) {
                this.parent.splice(this.key, 1);
                return true;
            } else {
                this.replace(null);
                return false;
            }
        };

        function Element(node, path, wrap, ref) {
            this.node = node;
            this.path = path;
            this.wrap = wrap;
            this.ref = ref;
        }

        function Controller() {}

        // API:
        // return property path array from root to current node
        Controller.prototype.path = function path() {
            var i, iz, j, jz, result, element;

            function addToPath(result, path) {
                if (isArray(path)) {
                    for (j = 0, jz = path.length; j < jz; ++j) {
                        result.push(path[j]);
                    }
                } else {
                    result.push(path);
                }
            }

            // root node
            if (!this.__current.path) {
                return null;
            }

            // first node is sentinel, second node is root element
            result = [];
            for (i = 2, iz = this.__leavelist.length; i < iz; ++i) {
                element = this.__leavelist[i];
                addToPath(result, element.path);
            }
            addToPath(result, this.__current.path);
            return result;
        };

        // API:
        // return type of current node
        Controller.prototype.type = function () {
            var node = this.current();
            return node.type || this.__current.wrap;
        };

        // API:
        // return array of parent elements
        Controller.prototype.parents = function parents() {
            var i, iz, result;

            // first node is sentinel
            result = [];
            for (i = 1, iz = this.__leavelist.length; i < iz; ++i) {
                result.push(this.__leavelist[i].node);
            }

            return result;
        };

        // API:
        // return current node
        Controller.prototype.current = function current() {
            return this.__current.node;
        };

        Controller.prototype.__execute = function __execute(callback, element) {
            var previous, result;

            result = undefined;

            previous = this.__current;
            this.__current = element;
            this.__state = null;
            if (callback) {
                result = callback.call(this, element.node, this.__leavelist[this.__leavelist.length - 1].node);
            }
            this.__current = previous;

            return result;
        };

        // API:
        // notify control skip / break
        Controller.prototype.notify = function notify(flag) {
            this.__state = flag;
        };

        // API:
        // skip child nodes of current node
        Controller.prototype.skip = function () {
            this.notify(SKIP);
        };

        // API:
        // break traversals
        Controller.prototype['break'] = function () {
            this.notify(BREAK);
        };

        // API:
        // remove node
        Controller.prototype.remove = function () {
            this.notify(REMOVE);
        };

        Controller.prototype.__initialize = function (root, visitor) {
            this.visitor = visitor;
            this.root = root;
            this.__worklist = [];
            this.__leavelist = [];
            this.__current = null;
            this.__state = null;
            this.__fallback = visitor.fallback === 'iteration';
            this.__keys = VisitorKeys;
            if (visitor.keys) {
                this.__keys = extend(objectCreate(this.__keys), visitor.keys);
            }
        };

        function isNode(node) {
            if (node == null) {
                return false;
            }
            return typeof node === 'object' && typeof node.type === 'string';
        }

        function isProperty(nodeType, key) {
            return (nodeType === Syntax.ObjectExpression || nodeType === Syntax.ObjectPattern) && 'properties' === key;
        }

        Controller.prototype.traverse = function traverse(root, visitor) {
            var worklist, leavelist, element, node, nodeType, ret, key, current, current2, candidates, candidate, sentinel;

            this.__initialize(root, visitor);

            sentinel = {};

            // reference
            worklist = this.__worklist;
            leavelist = this.__leavelist;

            // initialize
            worklist.push(new Element(root, null, null, null));
            leavelist.push(new Element(null, null, null, null));

            while (worklist.length) {
                element = worklist.pop();

                if (element === sentinel) {
                    element = leavelist.pop();

                    ret = this.__execute(visitor.leave, element);

                    if (this.__state === BREAK || ret === BREAK) {
                        return;
                    }
                    continue;
                }

                if (element.node) {

                    ret = this.__execute(visitor.enter, element);

                    if (this.__state === BREAK || ret === BREAK) {
                        return;
                    }

                    worklist.push(sentinel);
                    leavelist.push(element);

                    if (this.__state === SKIP || ret === SKIP) {
                        continue;
                    }

                    node = element.node;
                    nodeType = element.wrap || node.type;
                    candidates = this.__keys[nodeType];
                    if (!candidates) {
                        if (this.__fallback) {
                            candidates = objectKeys(node);
                        } else {
                            throw new Error('Unknown node type ' + nodeType + '.');
                        }
                    }

                    current = candidates.length;
                    while ((current -= 1) >= 0) {
                        key = candidates[current];
                        candidate = node[key];
                        if (!candidate) {
                            continue;
                        }

                        if (isArray(candidate)) {
                            current2 = candidate.length;
                            while ((current2 -= 1) >= 0) {
                                if (!candidate[current2]) {
                                    continue;
                                }
                                if (isProperty(nodeType, candidates[current])) {
                                    element = new Element(candidate[current2], [key, current2], 'Property', null);
                                } else if (isNode(candidate[current2])) {
                                    element = new Element(candidate[current2], [key, current2], null, null);
                                } else {
                                    continue;
                                }
                                worklist.push(element);
                            }
                        } else if (isNode(candidate)) {
                            worklist.push(new Element(candidate, key, null, null));
                        }
                    }
                }
            }
        };

        Controller.prototype.replace = function replace(root, visitor) {
            function removeElem(element) {
                var i, key, nextElem, parent;

                if (element.ref.remove()) {
                    // When the reference is an element of an array.
                    key = element.ref.key;
                    parent = element.ref.parent;

                    // If removed from array, then decrease following items' keys.
                    i = worklist.length;
                    while (i--) {
                        nextElem = worklist[i];
                        if (nextElem.ref && nextElem.ref.parent === parent) {
                            if (nextElem.ref.key < key) {
                                break;
                            }
                            --nextElem.ref.key;
                        }
                    }
                }
            }

            var worklist, leavelist, node, nodeType, target, element, current, current2, candidates, candidate, sentinel, outer, key;

            this.__initialize(root, visitor);

            sentinel = {};

            // reference
            worklist = this.__worklist;
            leavelist = this.__leavelist;

            // initialize
            outer = {
                root: root
            };
            element = new Element(root, null, null, new Reference(outer, 'root'));
            worklist.push(element);
            leavelist.push(element);

            while (worklist.length) {
                element = worklist.pop();

                if (element === sentinel) {
                    element = leavelist.pop();

                    target = this.__execute(visitor.leave, element);

                    // node may be replaced with null,
                    // so distinguish between undefined and null in this place
                    if (target !== undefined && target !== BREAK && target !== SKIP && target !== REMOVE) {
                        // replace
                        element.ref.replace(target);
                    }

                    if (this.__state === REMOVE || target === REMOVE) {
                        removeElem(element);
                    }

                    if (this.__state === BREAK || target === BREAK) {
                        return outer.root;
                    }
                    continue;
                }

                target = this.__execute(visitor.enter, element);

                // node may be replaced with null,
                // so distinguish between undefined and null in this place
                if (target !== undefined && target !== BREAK && target !== SKIP && target !== REMOVE) {
                    // replace
                    element.ref.replace(target);
                    element.node = target;
                }

                if (this.__state === REMOVE || target === REMOVE) {
                    removeElem(element);
                    element.node = null;
                }

                if (this.__state === BREAK || target === BREAK) {
                    return outer.root;
                }

                // node may be null
                node = element.node;
                if (!node) {
                    continue;
                }

                worklist.push(sentinel);
                leavelist.push(element);

                if (this.__state === SKIP || target === SKIP) {
                    continue;
                }

                nodeType = element.wrap || node.type;
                candidates = this.__keys[nodeType];
                if (!candidates) {
                    if (this.__fallback) {
                        candidates = objectKeys(node);
                    } else {
                        throw new Error('Unknown node type ' + nodeType + '.');
                    }
                }

                current = candidates.length;
                while ((current -= 1) >= 0) {
                    key = candidates[current];
                    candidate = node[key];
                    if (!candidate) {
                        continue;
                    }

                    if (isArray(candidate)) {
                        current2 = candidate.length;
                        while ((current2 -= 1) >= 0) {
                            if (!candidate[current2]) {
                                continue;
                            }
                            if (isProperty(nodeType, candidates[current])) {
                                element = new Element(candidate[current2], [key, current2], 'Property', new Reference(candidate, current2));
                            } else if (isNode(candidate[current2])) {
                                element = new Element(candidate[current2], [key, current2], null, new Reference(candidate, current2));
                            } else {
                                continue;
                            }
                            worklist.push(element);
                        }
                    } else if (isNode(candidate)) {
                        worklist.push(new Element(candidate, key, null, new Reference(node, key)));
                    }
                }
            }

            return outer.root;
        };

        function traverse(root, visitor) {
            var controller = new Controller();
            return controller.traverse(root, visitor);
        }

        function replace(root, visitor) {
            var controller = new Controller();
            return controller.replace(root, visitor);
        }

        function extendCommentRange(comment, tokens) {
            var target;

            target = upperBound(tokens, function search(token) {
                return token.range[0] > comment.range[0];
            });

            comment.extendedRange = [comment.range[0], comment.range[1]];

            if (target !== tokens.length) {
                comment.extendedRange[1] = tokens[target].range[0];
            }

            target -= 1;
            if (target >= 0) {
                comment.extendedRange[0] = tokens[target].range[1];
            }

            return comment;
        }

        function attachComments(tree, providedComments, tokens) {
            // At first, we should calculate extended comment ranges.
            var comments = [],
                comment,
                len,
                i,
                cursor;

            if (!tree.range) {
                throw new Error('attachComments needs range information');
            }

            // tokens array is empty, we attach comments to tree as 'leadingComments'
            if (!tokens.length) {
                if (providedComments.length) {
                    for (i = 0, len = providedComments.length; i < len; i += 1) {
                        comment = deepCopy(providedComments[i]);
                        comment.extendedRange = [0, tree.range[0]];
                        comments.push(comment);
                    }
                    tree.leadingComments = comments;
                }
                return tree;
            }

            for (i = 0, len = providedComments.length; i < len; i += 1) {
                comments.push(extendCommentRange(deepCopy(providedComments[i]), tokens));
            }

            // This is based on John Freeman's implementation.
            cursor = 0;
            traverse(tree, {
                enter: function enter(node) {
                    var comment;

                    while (cursor < comments.length) {
                        comment = comments[cursor];
                        if (comment.extendedRange[1] > node.range[0]) {
                            break;
                        }

                        if (comment.extendedRange[1] === node.range[0]) {
                            if (!node.leadingComments) {
                                node.leadingComments = [];
                            }
                            node.leadingComments.push(comment);
                            comments.splice(cursor, 1);
                        } else {
                            cursor += 1;
                        }
                    }

                    // already out of owned node
                    if (cursor === comments.length) {
                        return VisitorOption.Break;
                    }

                    if (comments[cursor].extendedRange[0] > node.range[1]) {
                        return VisitorOption.Skip;
                    }
                }
            });

            cursor = 0;
            traverse(tree, {
                leave: function leave(node) {
                    var comment;

                    while (cursor < comments.length) {
                        comment = comments[cursor];
                        if (node.range[1] < comment.extendedRange[0]) {
                            break;
                        }

                        if (node.range[1] === comment.extendedRange[0]) {
                            if (!node.trailingComments) {
                                node.trailingComments = [];
                            }
                            node.trailingComments.push(comment);
                            comments.splice(cursor, 1);
                        } else {
                            cursor += 1;
                        }
                    }

                    // already out of owned node
                    if (cursor === comments.length) {
                        return VisitorOption.Break;
                    }

                    if (comments[cursor].extendedRange[0] > node.range[1]) {
                        return VisitorOption.Skip;
                    }
                }
            });

            return tree;
        }

        exports.version = require$$0$3.version;
        exports.Syntax = Syntax;
        exports.traverse = traverse;
        exports.replace = replace;
        exports.attachComments = attachComments;
        exports.VisitorKeys = VisitorKeys;
        exports.VisitorOption = VisitorOption;
        exports.Controller = Controller;
        exports.cloneEnvironment = function () {
            return clone({});
        };

        return exports;
    })(exports);
    /* vim: set sw=4 ts=4 et tw=80 : */
    return module.exports;
    })({exports:{}});

    var scope = (function (module) {
    var exports = module.exports;
    "use strict";

    var _interopRequire = function _interopRequire(obj) {
        return obj && obj.__esModule ? obj["default"] : obj;
    };

    var _get = function get(_x, _x2, _x3) {
        var _again = true;

        _function: while (_again) {
            var object = _x,
                property = _x2,
                receiver = _x3;
            _again = false;
            var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);if (parent === null) {
                    return undefined;
                } else {
                    _x = parent;
                    _x2 = property;
                    _x3 = receiver;
                    _again = true;
                    desc = parent = undefined;
                    continue _function;
                }
            } else if ("value" in desc && desc.writable) {
                return desc.value;
            } else {
                var getter = desc.get;if (getter === undefined) {
                    return undefined;
                }return getter.call(receiver);
            }
        }
    };

    var _inherits = function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
    };

    var _createClass = (function () {
        function defineProperties(target, props) {
            for (var key in props) {
                var prop = props[key];prop.configurable = true;if (prop.value) prop.writable = true;
            }Object.defineProperties(target, props);
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    })();

    var _classCallCheck = function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    /*
      Copyright (C) 2015 Yusuke Suzuki <utatane.tea@gmail.com>

      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are met:

        * Redistributions of source code must retain the above copyright
          notice, this list of conditions and the following disclaimer.
        * Redistributions in binary form must reproduce the above copyright
          notice, this list of conditions and the following disclaimer in the
          documentation and/or other materials provided with the distribution.

      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
      ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
      DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
      (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
      LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
      ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
      (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
      THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */

    var Syntax = estraverse$1.Syntax;

    var Map = _interopRequire(index$2);

    var Reference = _interopRequire(reference);

    var Variable = _interopRequire(variable);

    var Definition = _interopRequire(definition);

    var assert = _interopRequire(ok);

    function isStrictScope(scope, block, isMethodDefinition, useDirective) {
        var body, i, iz, stmt, expr;

        // When upper scope is exists and strict, inner scope is also strict.
        if (scope.upper && scope.upper.isStrict) {
            return true;
        }

        // ArrowFunctionExpression's scope is always strict scope.
        if (block.type === Syntax.ArrowFunctionExpression) {
            return true;
        }

        if (isMethodDefinition) {
            return true;
        }

        if (scope.type === "class" || scope.type === "module") {
            return true;
        }

        if (scope.type === "block" || scope.type === "switch") {
            return false;
        }

        if (scope.type === "function") {
            if (block.type === "Program") {
                body = block;
            } else {
                body = block.body;
            }
        } else if (scope.type === "global") {
            body = block;
        } else {
            return false;
        }

        // Search 'use strict' directive.
        if (useDirective) {
            for (i = 0, iz = body.body.length; i < iz; ++i) {
                stmt = body.body[i];
                if (stmt.type !== "DirectiveStatement") {
                    break;
                }
                if (stmt.raw === "\"use strict\"" || stmt.raw === "'use strict'") {
                    return true;
                }
            }
        } else {
            for (i = 0, iz = body.body.length; i < iz; ++i) {
                stmt = body.body[i];
                if (stmt.type !== Syntax.ExpressionStatement) {
                    break;
                }
                expr = stmt.expression;
                if (expr.type !== Syntax.Literal || typeof expr.value !== "string") {
                    break;
                }
                if (expr.raw != null) {
                    if (expr.raw === "\"use strict\"" || expr.raw === "'use strict'") {
                        return true;
                    }
                } else {
                    if (expr.value === "use strict") {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    function registerScope(scopeManager, scope) {
        var scopes;

        scopeManager.scopes.push(scope);

        scopes = scopeManager.__nodeToScope.get(scope.block);
        if (scopes) {
            scopes.push(scope);
        } else {
            scopeManager.__nodeToScope.set(scope.block, [scope]);
        }
    }

    function shouldBeStatically(def) {
        return def.type === Variable.ClassName || def.type === Variable.Variable && def.parent.kind !== "var";
    }

    /**
     * @class Scope
     */

    var Scope = (function () {
        function Scope(scopeManager, type, upperScope, block, isMethodDefinition) {
            _classCallCheck(this, Scope);

            /**
             * One of 'TDZ', 'module', 'block', 'switch', 'function', 'catch', 'with', 'function', 'class', 'global'.
             * @member {String} Scope#type
             */
            this.type = type;
            /**
            * The scoped {@link Variable}s of this scope, as <code>{ Variable.name
            * : Variable }</code>.
            * @member {Map} Scope#set
            */
            this.set = new Map();
            /**
             * The tainted variables of this scope, as <code>{ Variable.name :
             * boolean }</code>.
             * @member {Map} Scope#taints */
            this.taints = new Map();
            /**
             * Generally, through the lexical scoping of JS you can always know
             * which variable an identifier in the source code refers to. There are
             * a few exceptions to this rule. With 'global' and 'with' scopes you
             * can only decide at runtime which variable a reference refers to.
             * Moreover, if 'eval()' is used in a scope, it might introduce new
             * bindings in this or its prarent scopes.
             * All those scopes are considered 'dynamic'.
             * @member {boolean} Scope#dynamic
             */
            this.dynamic = this.type === "global" || this.type === "with";
            /**
             * A reference to the scope-defining syntax node.
             * @member {esprima.Node} Scope#block
             */
            this.block = block;
            /**
            * The {@link Reference|references} that are not resolved with this scope.
            * @member {Reference[]} Scope#through
            */
            this.through = [];
            /**
            * The scoped {@link Variable}s of this scope. In the case of a
            * 'function' scope this includes the automatic argument <em>arguments</em> as
            * its first element, as well as all further formal arguments.
            * @member {Variable[]} Scope#variables
            */
            this.variables = [];
            /**
            * Any variable {@link Reference|reference} found in this scope. This
            * includes occurrences of local variables as well as variables from
            * parent scopes (including the global scope). For local variables
            * this also includes defining occurrences (like in a 'var' statement).
            * In a 'function' scope this does not include the occurrences of the
            * formal parameter in the parameter list.
            * @member {Reference[]} Scope#references
            */
            this.references = [];

            /**
            * For 'global' and 'function' scopes, this is a self-reference. For
            * other scope types this is the <em>variableScope</em> value of the
            * parent scope.
            * @member {Scope} Scope#variableScope
            */
            this.variableScope = this.type === "global" || this.type === "function" || this.type === "module" ? this : upperScope.variableScope;
            /**
            * Whether this scope is created by a FunctionExpression.
            * @member {boolean} Scope#functionExpressionScope
            */
            this.functionExpressionScope = false;
            /**
            * Whether this is a scope that contains an 'eval()' invocation.
            * @member {boolean} Scope#directCallToEvalScope
            */
            this.directCallToEvalScope = false;
            /**
            * @member {boolean} Scope#thisFound
            */
            this.thisFound = false;

            this.__left = [];

            /**
            * Reference to the parent {@link Scope|scope}.
            * @member {Scope} Scope#upper
            */
            this.upper = upperScope;
            /**
            * Whether 'use strict' is in effect in this scope.
            * @member {boolean} Scope#isStrict
            */
            this.isStrict = isStrictScope(this, block, isMethodDefinition, scopeManager.__useDirective());

            /**
            * List of nested {@link Scope}s.
            * @member {Scope[]} Scope#childScopes
            */
            this.childScopes = [];
            if (this.upper) {
                this.upper.childScopes.push(this);
            }

            this.__declaredVariables = scopeManager.__declaredVariables;

            registerScope(scopeManager, this);
        }

        _createClass(Scope, {
            __shouldStaticallyClose: {
                value: function __shouldStaticallyClose(scopeManager) {
                    return !this.dynamic || scopeManager.__isOptimistic();
                }
            },
            __shouldStaticallyCloseForGlobal: {
                value: function __shouldStaticallyCloseForGlobal(ref) {
                    // On global scope, let/const/class declarations should be resolved statically.
                    var name = ref.identifier.name;
                    if (!this.set.has(name)) {
                        return false;
                    }

                    var variable = this.set.get(name);
                    var defs = variable.defs;
                    return defs.length > 0 && defs.every(shouldBeStatically);
                }
            },
            __staticCloseRef: {
                value: function __staticCloseRef(ref) {
                    if (!this.__resolve(ref)) {
                        this.__delegateToUpperScope(ref);
                    }
                }
            },
            __dynamicCloseRef: {
                value: function __dynamicCloseRef(ref) {
                    // notify all names are through to global
                    var current = this;
                    do {
                        current.through.push(ref);
                        current = current.upper;
                    } while (current);
                }
            },
            __globalCloseRef: {
                value: function __globalCloseRef(ref) {
                    // let/const/class declarations should be resolved statically.
                    // others should be resolved dynamically.
                    if (this.__shouldStaticallyCloseForGlobal(ref)) {
                        this.__staticCloseRef(ref);
                    } else {
                        this.__dynamicCloseRef(ref);
                    }
                }
            },
            __close: {
                value: function __close(scopeManager) {
                    var closeRef;
                    if (this.__shouldStaticallyClose(scopeManager)) {
                        closeRef = this.__staticCloseRef;
                    } else if (this.type !== "global") {
                        closeRef = this.__dynamicCloseRef;
                    } else {
                        closeRef = this.__globalCloseRef;
                    }

                    // Try Resolving all references in this scope.
                    for (var i = 0, iz = this.__left.length; i < iz; ++i) {
                        var ref = this.__left[i];
                        closeRef.call(this, ref);
                    }
                    this.__left = null;

                    return this.upper;
                }
            },
            __resolve: {
                value: function __resolve(ref) {
                    var variable, name;
                    name = ref.identifier.name;
                    if (this.set.has(name)) {
                        variable = this.set.get(name);
                        variable.references.push(ref);
                        variable.stack = variable.stack && ref.from.variableScope === this.variableScope;
                        if (ref.tainted) {
                            variable.tainted = true;
                            this.taints.set(variable.name, true);
                        }
                        ref.resolved = variable;
                        return true;
                    }
                    return false;
                }
            },
            __delegateToUpperScope: {
                value: function __delegateToUpperScope(ref) {
                    if (this.upper) {
                        this.upper.__left.push(ref);
                    }
                    this.through.push(ref);
                }
            },
            __addDeclaredVariablesOfNode: {
                value: function __addDeclaredVariablesOfNode(variable, node) {
                    if (node == null) {
                        return;
                    }

                    var variables = this.__declaredVariables.get(node);
                    if (variables == null) {
                        variables = [];
                        this.__declaredVariables.set(node, variables);
                    }
                    variables.push(variable);
                }
            },
            __defineGeneric: {
                value: function __defineGeneric(name, set, variables, node, def) {
                    var variable;

                    variable = set.get(name);
                    if (!variable) {
                        variable = new Variable(name, this);
                        set.set(name, variable);
                        variables.push(variable);
                    }

                    if (def) {
                        variable.defs.push(def);
                        if (def.type !== Variable.TDZ) {
                            this.__addDeclaredVariablesOfNode(variable, def.node);
                            this.__addDeclaredVariablesOfNode(variable, def.parent);
                        }
                    }
                    if (node) {
                        variable.identifiers.push(node);
                    }
                }
            },
            __define: {
                value: function __define(node, def) {
                    if (node && node.type === Syntax.Identifier) {
                        this.__defineGeneric(node.name, this.set, this.variables, node, def);
                    }
                }
            },
            __referencing: {
                value: function __referencing(node, assign, writeExpr, maybeImplicitGlobal, partial, init) {
                    // because Array element may be null
                    if (!node || node.type !== Syntax.Identifier) {
                        return;
                    }

                    // Specially handle like `this`.
                    if (node.name === "super") {
                        return;
                    }

                    var ref = new Reference(node, this, assign || Reference.READ, writeExpr, maybeImplicitGlobal, !!partial, !!init);
                    this.references.push(ref);
                    this.__left.push(ref);
                }
            },
            __detectEval: {
                value: function __detectEval() {
                    var current;
                    current = this;
                    this.directCallToEvalScope = true;
                    do {
                        current.dynamic = true;
                        current = current.upper;
                    } while (current);
                }
            },
            __detectThis: {
                value: function __detectThis() {
                    this.thisFound = true;
                }
            },
            __isClosed: {
                value: function __isClosed() {
                    return this.__left === null;
                }
            },
            resolve: {

                /**
                 * returns resolved {Reference}
                 * @method Scope#resolve
                 * @param {Esprima.Identifier} ident - identifier to be resolved.
                 * @return {Reference}
                 */

                value: function resolve(ident) {
                    var ref, i, iz;
                    assert(this.__isClosed(), "Scope should be closed.");
                    assert(ident.type === Syntax.Identifier, "Target should be identifier.");
                    for (i = 0, iz = this.references.length; i < iz; ++i) {
                        ref = this.references[i];
                        if (ref.identifier === ident) {
                            return ref;
                        }
                    }
                    return null;
                }
            },
            isStatic: {

                /**
                 * returns this scope is static
                 * @method Scope#isStatic
                 * @return {boolean}
                 */

                value: function isStatic() {
                    return !this.dynamic;
                }
            },
            isArgumentsMaterialized: {

                /**
                 * returns this scope has materialized arguments
                 * @method Scope#isArgumentsMaterialized
                 * @return {boolean}
                 */

                value: function isArgumentsMaterialized() {
                    return true;
                }
            },
            isThisMaterialized: {

                /**
                 * returns this scope has materialized `this` reference
                 * @method Scope#isThisMaterialized
                 * @return {boolean}
                 */

                value: function isThisMaterialized() {
                    return true;
                }
            },
            isUsedName: {
                value: function isUsedName(name) {
                    if (this.set.has(name)) {
                        return true;
                    }
                    for (var i = 0, iz = this.through.length; i < iz; ++i) {
                        if (this.through[i].identifier.name === name) {
                            return true;
                        }
                    }
                    return false;
                }
            }
        });

        return Scope;
    })();

    exports["default"] = Scope;

    var GlobalScope = exports.GlobalScope = (function (_Scope) {
        function GlobalScope(scopeManager, block) {
            _classCallCheck(this, GlobalScope);

            _get(Object.getPrototypeOf(GlobalScope.prototype), "constructor", this).call(this, scopeManager, "global", null, block, false);
            this.implicit = {
                set: new Map(),
                variables: [],
                /**
                * List of {@link Reference}s that are left to be resolved (i.e. which
                * need to be linked to the variable they refer to).
                * @member {Reference[]} Scope#implicit#left
                */
                left: []
            };
        }

        _inherits(GlobalScope, _Scope);

        _createClass(GlobalScope, {
            __close: {
                value: function __close(scopeManager) {
                    var implicit = [];
                    for (var i = 0, iz = this.__left.length; i < iz; ++i) {
                        var ref = this.__left[i];
                        if (ref.__maybeImplicitGlobal && !this.set.has(ref.identifier.name)) {
                            implicit.push(ref.__maybeImplicitGlobal);
                        }
                    }

                    // create an implicit global variable from assignment expression
                    for (var i = 0, iz = implicit.length; i < iz; ++i) {
                        var info = implicit[i];
                        this.__defineImplicit(info.pattern, new Definition(Variable.ImplicitGlobalVariable, info.pattern, info.node, null, null, null));
                    }

                    this.implicit.left = this.__left;

                    return _get(Object.getPrototypeOf(GlobalScope.prototype), "__close", this).call(this, scopeManager);
                }
            },
            __defineImplicit: {
                value: function __defineImplicit(node, def) {
                    if (node && node.type === Syntax.Identifier) {
                        this.__defineGeneric(node.name, this.implicit.set, this.implicit.variables, node, def);
                    }
                }
            }
        });

        return GlobalScope;
    })(Scope);

    var ModuleScope = exports.ModuleScope = (function (_Scope2) {
        function ModuleScope(scopeManager, upperScope, block) {
            _classCallCheck(this, ModuleScope);

            _get(Object.getPrototypeOf(ModuleScope.prototype), "constructor", this).call(this, scopeManager, "module", upperScope, block, false);
        }

        _inherits(ModuleScope, _Scope2);

        return ModuleScope;
    })(Scope);

    var FunctionExpressionNameScope = exports.FunctionExpressionNameScope = (function (_Scope3) {
        function FunctionExpressionNameScope(scopeManager, upperScope, block) {
            _classCallCheck(this, FunctionExpressionNameScope);

            _get(Object.getPrototypeOf(FunctionExpressionNameScope.prototype), "constructor", this).call(this, scopeManager, "function-expression-name", upperScope, block, false);
            this.__define(block.id, new Definition(Variable.FunctionName, block.id, block, null, null, null));
            this.functionExpressionScope = true;
        }

        _inherits(FunctionExpressionNameScope, _Scope3);

        return FunctionExpressionNameScope;
    })(Scope);

    var CatchScope = exports.CatchScope = (function (_Scope4) {
        function CatchScope(scopeManager, upperScope, block) {
            _classCallCheck(this, CatchScope);

            _get(Object.getPrototypeOf(CatchScope.prototype), "constructor", this).call(this, scopeManager, "catch", upperScope, block, false);
        }

        _inherits(CatchScope, _Scope4);

        return CatchScope;
    })(Scope);

    var WithScope = exports.WithScope = (function (_Scope5) {
        function WithScope(scopeManager, upperScope, block) {
            _classCallCheck(this, WithScope);

            _get(Object.getPrototypeOf(WithScope.prototype), "constructor", this).call(this, scopeManager, "with", upperScope, block, false);
        }

        _inherits(WithScope, _Scope5);

        _createClass(WithScope, {
            __close: {
                value: function __close(scopeManager) {
                    if (this.__shouldStaticallyClose(scopeManager)) {
                        return _get(Object.getPrototypeOf(WithScope.prototype), "__close", this).call(this, scopeManager);
                    }

                    for (var i = 0, iz = this.__left.length; i < iz; ++i) {
                        var ref = this.__left[i];
                        ref.tainted = true;
                        this.__delegateToUpperScope(ref);
                    }
                    this.__left = null;

                    return this.upper;
                }
            }
        });

        return WithScope;
    })(Scope);

    var TDZScope = exports.TDZScope = (function (_Scope6) {
        function TDZScope(scopeManager, upperScope, block) {
            _classCallCheck(this, TDZScope);

            _get(Object.getPrototypeOf(TDZScope.prototype), "constructor", this).call(this, scopeManager, "TDZ", upperScope, block, false);
        }

        _inherits(TDZScope, _Scope6);

        return TDZScope;
    })(Scope);

    var BlockScope = exports.BlockScope = (function (_Scope7) {
        function BlockScope(scopeManager, upperScope, block) {
            _classCallCheck(this, BlockScope);

            _get(Object.getPrototypeOf(BlockScope.prototype), "constructor", this).call(this, scopeManager, "block", upperScope, block, false);
        }

        _inherits(BlockScope, _Scope7);

        return BlockScope;
    })(Scope);

    var SwitchScope = exports.SwitchScope = (function (_Scope8) {
        function SwitchScope(scopeManager, upperScope, block) {
            _classCallCheck(this, SwitchScope);

            _get(Object.getPrototypeOf(SwitchScope.prototype), "constructor", this).call(this, scopeManager, "switch", upperScope, block, false);
        }

        _inherits(SwitchScope, _Scope8);

        return SwitchScope;
    })(Scope);

    var FunctionScope = exports.FunctionScope = (function (_Scope9) {
        function FunctionScope(scopeManager, upperScope, block, isMethodDefinition) {
            _classCallCheck(this, FunctionScope);

            _get(Object.getPrototypeOf(FunctionScope.prototype), "constructor", this).call(this, scopeManager, "function", upperScope, block, isMethodDefinition);

            // section 9.2.13, FunctionDeclarationInstantiation.
            // NOTE Arrow functions never have an arguments objects.
            if (this.block.type !== Syntax.ArrowFunctionExpression) {
                this.__defineArguments();
            }
        }

        _inherits(FunctionScope, _Scope9);

        _createClass(FunctionScope, {
            isArgumentsMaterialized: {
                value: function isArgumentsMaterialized() {
                    // TODO(Constellation)
                    // We can more aggressive on this condition like this.
                    //
                    // function t() {
                    //     // arguments of t is always hidden.
                    //     function arguments() {
                    //     }
                    // }
                    if (this.block.type === Syntax.ArrowFunctionExpression) {
                        return false;
                    }

                    if (!this.isStatic()) {
                        return true;
                    }

                    var variable = this.set.get("arguments");
                    assert(variable, "Always have arguments variable.");
                    return variable.tainted || variable.references.length !== 0;
                }
            },
            isThisMaterialized: {
                value: function isThisMaterialized() {
                    if (!this.isStatic()) {
                        return true;
                    }
                    return this.thisFound;
                }
            },
            __defineArguments: {
                value: function __defineArguments() {
                    this.__defineGeneric("arguments", this.set, this.variables, null, null);
                    this.taints.set("arguments", true);
                }
            }
        });

        return FunctionScope;
    })(Scope);

    var ForScope = exports.ForScope = (function (_Scope10) {
        function ForScope(scopeManager, upperScope, block) {
            _classCallCheck(this, ForScope);

            _get(Object.getPrototypeOf(ForScope.prototype), "constructor", this).call(this, scopeManager, "for", upperScope, block, false);
        }

        _inherits(ForScope, _Scope10);

        return ForScope;
    })(Scope);

    var ClassScope = exports.ClassScope = (function (_Scope11) {
        function ClassScope(scopeManager, upperScope, block) {
            _classCallCheck(this, ClassScope);

            _get(Object.getPrototypeOf(ClassScope.prototype), "constructor", this).call(this, scopeManager, "class", upperScope, block, false);
        }

        _inherits(ClassScope, _Scope11);

        return ClassScope;
    })(Scope);

    /* vim: set sw=4 ts=4 et tw=80 : */
    return module.exports;
    })({exports:{}});

    var _args$4 = [["esrecurse@^3.1.1", "/Users/donovan/src/esnext/node_modules/escope"]];
    var _from$4 = "esrecurse@>=3.1.1 <4.0.0";
    var _id$4 = "esrecurse@3.1.1";
    var _inCache$4 = true;
    var _installable$4 = true;
    var _location$4 = "/esrecurse";
    var _npmUser$4 = { "email": "utatane.tea@gmail.com", "name": "constellation" };
    var _npmVersion$4 = "2.0.0-alpha-5";
    var _phantomChildren$4 = {};
    var _requested$4 = { "name": "esrecurse", "raw": "esrecurse@^3.1.1", "rawSpec": "^3.1.1", "scope": null, "spec": ">=3.1.1 <4.0.0", "type": "range" };
    var _requiredBy$4 = ["/escope"];
    var _resolved$4 = "https://registry.npmjs.org/esrecurse/-/esrecurse-3.1.1.tgz";
    var _shasum$4 = "8feb963699d4d1b2d65a576cd4b1296672a0f0e9";
    var _shrinkwrap$4 = null;
    var _spec$4 = "esrecurse@^3.1.1";
    var _where$4 = "/Users/donovan/src/esnext/node_modules/escope";
    var bugs$4 = { "url": "https://github.com/estools/esrecurse/issues" };
    var dependencies$4 = { "estraverse": "~3.1.0" };
    var description$5 = "ECMAScript scope analyzer";
    var devDependencies$4 = { "chai": "^2.1.1", "coffee-script": "^1.9.1", "esprima": "^2.1.0", "gulp": "~3.8.10", "gulp-bump": "^0.2.2", "gulp-eslint": "^0.6.0", "gulp-filter": "^2.0.2", "gulp-git": "^1.1.0", "gulp-mocha": "~2.0.0", "gulp-tag-version": "^1.2.1", "jsdoc": "~3.3.0-alpha10", "minimist": "^1.1.0" };
    var directories$4 = {};
    var dist$4 = { "shasum": "8feb963699d4d1b2d65a576cd4b1296672a0f0e9", "tarball": "http://registry.npmjs.org/esrecurse/-/esrecurse-3.1.1.tgz" };
    var engines$4 = { "node": ">=0.10.0" };
    var gitHead$4 = "600a8aac5e7b313875a873134fd110b47a76fc77";
    var homepage$4 = "http://github.com/estools/esrecurse";
    var licenses$2 = [{ "type": "BSD", "url": "http://github.com/estools/esrecurse/raw/master/LICENSE.BSD" }];
    var main$4 = "esrecurse.js";
    var maintainers$4 = [{ "name": "constellation", "email": "utatane.tea@gmail.com" }, { "name": "michaelficarra", "email": "npm@michael.ficarra.me" }];
    var name$5 = "esrecurse";
    var optionalDependencies$4 = {};
    var repository$4 = { "type": "git", "url": "http://github.com/estools/esrecurse.git" };
    var scripts$4 = { "lint": "gulp lint", "test": "gulp travis", "unit-test": "gulp test" };
    var version$7 = "3.1.1";
    var require$$0$4 = {
    	_args: _args$4,
    	_from: _from$4,
    	_id: _id$4,
    	_inCache: _inCache$4,
    	_installable: _installable$4,
    	_location: _location$4,
    	_npmUser: _npmUser$4,
    	_npmVersion: _npmVersion$4,
    	_phantomChildren: _phantomChildren$4,
    	_requested: _requested$4,
    	_requiredBy: _requiredBy$4,
    	_resolved: _resolved$4,
    	_shasum: _shasum$4,
    	_shrinkwrap: _shrinkwrap$4,
    	_spec: _spec$4,
    	_where: _where$4,
    	bugs: bugs$4,
    	dependencies: dependencies$4,
    	description: description$5,
    	devDependencies: devDependencies$4,
    	directories: directories$4,
    	dist: dist$4,
    	engines: engines$4,
    	gitHead: gitHead$4,
    	homepage: homepage$4,
    	licenses: licenses$2,
    	main: main$4,
    	maintainers: maintainers$4,
    	name: name$5,
    	optionalDependencies: optionalDependencies$4,
    	repository: repository$4,
    	scripts: scripts$4,
    	version: version$7
    };

    var _args$5 = [["estraverse@~3.1.0", "/Users/donovan/src/esnext/node_modules/esrecurse"]];
    var _from$5 = "estraverse@>=3.1.0 <3.2.0";
    var _id$5 = "estraverse@3.1.0";
    var _inCache$5 = true;
    var _installable$5 = true;
    var _location$5 = "/esrecurse/estraverse";
    var _npmUser$5 = { "email": "utatane.tea@gmail.com", "name": "constellation" };
    var _npmVersion$5 = "2.0.0-alpha-5";
    var _phantomChildren$5 = {};
    var _requested$5 = { "name": "estraverse", "raw": "estraverse@~3.1.0", "rawSpec": "~3.1.0", "scope": null, "spec": ">=3.1.0 <3.2.0", "type": "range" };
    var _requiredBy$5 = ["/esrecurse"];
    var _resolved$5 = "https://registry.npmjs.org/estraverse/-/estraverse-3.1.0.tgz";
    var _shasum$5 = "15e28a446b8b82bc700ccc8b96c78af4da0d6cba";
    var _shrinkwrap$5 = null;
    var _spec$5 = "estraverse@~3.1.0";
    var _where$5 = "/Users/donovan/src/esnext/node_modules/esrecurse";
    var bugs$5 = { "url": "https://github.com/estools/estraverse/issues" };
    var dependencies$5 = {};
    var description$6 = "ECMAScript JS AST traversal functions";
    var devDependencies$5 = { "chai": "^2.1.1", "coffee-script": "^1.8.0", "espree": "^1.11.0", "gulp": "^3.8.10", "gulp-bump": "^0.2.2", "gulp-filter": "^2.0.0", "gulp-git": "^1.0.1", "gulp-tag-version": "^1.2.1", "jshint": "^2.5.6", "mocha": "^2.1.0" };
    var directories$5 = {};
    var dist$5 = { "shasum": "15e28a446b8b82bc700ccc8b96c78af4da0d6cba", "tarball": "http://registry.npmjs.org/estraverse/-/estraverse-3.1.0.tgz" };
    var engines$5 = { "node": ">=0.10.0" };
    var gitHead$5 = "166ebbe0a8d45ceb2391b6f5ef5d1bab6bfb267a";
    var homepage$5 = "https://github.com/estools/estraverse";
    var licenses$3 = [{ "type": "BSD", "url": "http://github.com/estools/estraverse/raw/master/LICENSE.BSD" }];
    var main$5 = "estraverse.js";
    var maintainers$5 = [{ "name": "constellation", "email": "utatane.tea@gmail.com" }, { "name": "michaelficarra", "email": "npm@michael.ficarra.me" }];
    var name$6 = "estraverse";
    var optionalDependencies$5 = {};
    var repository$5 = { "type": "git", "url": "http://github.com/estools/estraverse.git" };
    var scripts$5 = { "lint": "jshint estraverse.js", "test": "npm run-script lint && npm run-script unit-test", "unit-test": "mocha --compilers coffee:coffee-script/register" };
    var version$8 = "3.1.0";
    var require$$0$5 = {
    	_args: _args$5,
    	_from: _from$5,
    	_id: _id$5,
    	_inCache: _inCache$5,
    	_installable: _installable$5,
    	_location: _location$5,
    	_npmUser: _npmUser$5,
    	_npmVersion: _npmVersion$5,
    	_phantomChildren: _phantomChildren$5,
    	_requested: _requested$5,
    	_requiredBy: _requiredBy$5,
    	_resolved: _resolved$5,
    	_shasum: _shasum$5,
    	_shrinkwrap: _shrinkwrap$5,
    	_spec: _spec$5,
    	_where: _where$5,
    	bugs: bugs$5,
    	dependencies: dependencies$5,
    	description: description$6,
    	devDependencies: devDependencies$5,
    	directories: directories$5,
    	dist: dist$5,
    	engines: engines$5,
    	gitHead: gitHead$5,
    	homepage: homepage$5,
    	licenses: licenses$3,
    	main: main$5,
    	maintainers: maintainers$5,
    	name: name$6,
    	optionalDependencies: optionalDependencies$5,
    	repository: repository$5,
    	scripts: scripts$5,
    	version: version$8
    };

    var estraverse$2 = (function (module) {
    var exports = module.exports;
    /*
      Copyright (C) 2012-2013 Yusuke Suzuki <utatane.tea@gmail.com>
      Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>

      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are met:

        * Redistributions of source code must retain the above copyright
          notice, this list of conditions and the following disclaimer.
        * Redistributions in binary form must reproduce the above copyright
          notice, this list of conditions and the following disclaimer in the
          documentation and/or other materials provided with the distribution.

      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
      ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
      DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
      (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
      LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
      ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
      (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
      THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */
    /*jslint vars:false, bitwise:true*/
    /*jshint indent:4*/
    /*global exports:true*/
    'use strict';

    (function clone(exports) {
        'use strict';

        var Syntax, isArray, VisitorOption, VisitorKeys, objectCreate, objectKeys, BREAK, SKIP, REMOVE;

        function ignoreJSHintError() {}

        isArray = Array.isArray;
        if (!isArray) {
            isArray = function isArray(array) {
                return Object.prototype.toString.call(array) === '[object Array]';
            };
        }

        function deepCopy(obj) {
            var ret = {},
                key,
                val;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    val = obj[key];
                    if (typeof val === 'object' && val !== null) {
                        ret[key] = deepCopy(val);
                    } else {
                        ret[key] = val;
                    }
                }
            }
            return ret;
        }

        function shallowCopy(obj) {
            var ret = {},
                key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    ret[key] = obj[key];
                }
            }
            return ret;
        }
        ignoreJSHintError(shallowCopy);

        // based on LLVM libc++ upper_bound / lower_bound
        // MIT License

        function upperBound(array, func) {
            var diff, len, i, current;

            len = array.length;
            i = 0;

            while (len) {
                diff = len >>> 1;
                current = i + diff;
                if (func(array[current])) {
                    len = diff;
                } else {
                    i = current + 1;
                    len -= diff + 1;
                }
            }
            return i;
        }

        function lowerBound(array, func) {
            var diff, len, i, current;

            len = array.length;
            i = 0;

            while (len) {
                diff = len >>> 1;
                current = i + diff;
                if (func(array[current])) {
                    i = current + 1;
                    len -= diff + 1;
                } else {
                    len = diff;
                }
            }
            return i;
        }
        ignoreJSHintError(lowerBound);

        objectCreate = Object.create || (function () {
            function F() {}

            return function (o) {
                F.prototype = o;
                return new F();
            };
        })();

        objectKeys = Object.keys || function (o) {
            var keys = [],
                key;
            for (key in o) {
                keys.push(key);
            }
            return keys;
        };

        function extend(to, from) {
            var keys = objectKeys(from),
                key,
                i,
                len;
            for (i = 0, len = keys.length; i < len; i += 1) {
                key = keys[i];
                to[key] = from[key];
            }
            return to;
        }

        Syntax = {
            AssignmentExpression: 'AssignmentExpression',
            AssignmentPattern: 'AssignmentPattern',
            ArrayExpression: 'ArrayExpression',
            ArrayPattern: 'ArrayPattern',
            ArrowFunctionExpression: 'ArrowFunctionExpression',
            AwaitExpression: 'AwaitExpression', // CAUTION: It's deferred to ES7.
            BlockStatement: 'BlockStatement',
            BinaryExpression: 'BinaryExpression',
            BreakStatement: 'BreakStatement',
            CallExpression: 'CallExpression',
            CatchClause: 'CatchClause',
            ClassBody: 'ClassBody',
            ClassDeclaration: 'ClassDeclaration',
            ClassExpression: 'ClassExpression',
            ComprehensionBlock: 'ComprehensionBlock', // CAUTION: It's deferred to ES7.
            ComprehensionExpression: 'ComprehensionExpression', // CAUTION: It's deferred to ES7.
            ConditionalExpression: 'ConditionalExpression',
            ContinueStatement: 'ContinueStatement',
            DebuggerStatement: 'DebuggerStatement',
            DirectiveStatement: 'DirectiveStatement',
            DoWhileStatement: 'DoWhileStatement',
            EmptyStatement: 'EmptyStatement',
            ExportAllDeclaration: 'ExportAllDeclaration',
            ExportDefaultDeclaration: 'ExportDefaultDeclaration',
            ExportNamedDeclaration: 'ExportNamedDeclaration',
            ExportSpecifier: 'ExportSpecifier',
            ExpressionStatement: 'ExpressionStatement',
            ForStatement: 'ForStatement',
            ForInStatement: 'ForInStatement',
            ForOfStatement: 'ForOfStatement',
            FunctionDeclaration: 'FunctionDeclaration',
            FunctionExpression: 'FunctionExpression',
            GeneratorExpression: 'GeneratorExpression', // CAUTION: It's deferred to ES7.
            Identifier: 'Identifier',
            IfStatement: 'IfStatement',
            ImportDeclaration: 'ImportDeclaration',
            ImportDefaultSpecifier: 'ImportDefaultSpecifier',
            ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
            ImportSpecifier: 'ImportSpecifier',
            Literal: 'Literal',
            LabeledStatement: 'LabeledStatement',
            LogicalExpression: 'LogicalExpression',
            MemberExpression: 'MemberExpression',
            MethodDefinition: 'MethodDefinition',
            ModuleSpecifier: 'ModuleSpecifier',
            NewExpression: 'NewExpression',
            ObjectExpression: 'ObjectExpression',
            ObjectPattern: 'ObjectPattern',
            Program: 'Program',
            Property: 'Property',
            RestElement: 'RestElement',
            ReturnStatement: 'ReturnStatement',
            SequenceExpression: 'SequenceExpression',
            SpreadElement: 'SpreadElement',
            SuperExpression: 'SuperExpression',
            SwitchStatement: 'SwitchStatement',
            SwitchCase: 'SwitchCase',
            TaggedTemplateExpression: 'TaggedTemplateExpression',
            TemplateElement: 'TemplateElement',
            TemplateLiteral: 'TemplateLiteral',
            ThisExpression: 'ThisExpression',
            ThrowStatement: 'ThrowStatement',
            TryStatement: 'TryStatement',
            UnaryExpression: 'UnaryExpression',
            UpdateExpression: 'UpdateExpression',
            VariableDeclaration: 'VariableDeclaration',
            VariableDeclarator: 'VariableDeclarator',
            WhileStatement: 'WhileStatement',
            WithStatement: 'WithStatement',
            YieldExpression: 'YieldExpression'
        };

        VisitorKeys = {
            AssignmentExpression: ['left', 'right'],
            AssignmentPattern: ['left', 'right'],
            ArrayExpression: ['elements'],
            ArrayPattern: ['elements'],
            ArrowFunctionExpression: ['params', 'body'],
            AwaitExpression: ['argument'], // CAUTION: It's deferred to ES7.
            BlockStatement: ['body'],
            BinaryExpression: ['left', 'right'],
            BreakStatement: ['label'],
            CallExpression: ['callee', 'arguments'],
            CatchClause: ['param', 'body'],
            ClassBody: ['body'],
            ClassDeclaration: ['id', 'superClass', 'body'],
            ClassExpression: ['id', 'superClass', 'body'],
            ComprehensionBlock: ['left', 'right'], // CAUTION: It's deferred to ES7.
            ComprehensionExpression: ['blocks', 'filter', 'body'], // CAUTION: It's deferred to ES7.
            ConditionalExpression: ['test', 'consequent', 'alternate'],
            ContinueStatement: ['label'],
            DebuggerStatement: [],
            DirectiveStatement: [],
            DoWhileStatement: ['body', 'test'],
            EmptyStatement: [],
            ExportAllDeclaration: ['source'],
            ExportDefaultDeclaration: ['declaration'],
            ExportNamedDeclaration: ['declaration', 'specifiers', 'source'],
            ExportSpecifier: ['exported', 'local'],
            ExpressionStatement: ['expression'],
            ForStatement: ['init', 'test', 'update', 'body'],
            ForInStatement: ['left', 'right', 'body'],
            ForOfStatement: ['left', 'right', 'body'],
            FunctionDeclaration: ['id', 'params', 'body'],
            FunctionExpression: ['id', 'params', 'body'],
            GeneratorExpression: ['blocks', 'filter', 'body'], // CAUTION: It's deferred to ES7.
            Identifier: [],
            IfStatement: ['test', 'consequent', 'alternate'],
            ImportDeclaration: ['specifiers', 'source'],
            ImportDefaultSpecifier: ['local'],
            ImportNamespaceSpecifier: ['local'],
            ImportSpecifier: ['imported', 'local'],
            Literal: [],
            LabeledStatement: ['label', 'body'],
            LogicalExpression: ['left', 'right'],
            MemberExpression: ['object', 'property'],
            MethodDefinition: ['key', 'value'],
            ModuleSpecifier: [],
            NewExpression: ['callee', 'arguments'],
            ObjectExpression: ['properties'],
            ObjectPattern: ['properties'],
            Program: ['body'],
            Property: ['key', 'value'],
            RestElement: ['argument'],
            ReturnStatement: ['argument'],
            SequenceExpression: ['expressions'],
            SpreadElement: ['argument'],
            SuperExpression: ['super'],
            SwitchStatement: ['discriminant', 'cases'],
            SwitchCase: ['test', 'consequent'],
            TaggedTemplateExpression: ['tag', 'quasi'],
            TemplateElement: [],
            TemplateLiteral: ['quasis', 'expressions'],
            ThisExpression: [],
            ThrowStatement: ['argument'],
            TryStatement: ['block', 'handler', 'finalizer'],
            UnaryExpression: ['argument'],
            UpdateExpression: ['argument'],
            VariableDeclaration: ['declarations'],
            VariableDeclarator: ['id', 'init'],
            WhileStatement: ['test', 'body'],
            WithStatement: ['object', 'body'],
            YieldExpression: ['argument']
        };

        // unique id
        BREAK = {};
        SKIP = {};
        REMOVE = {};

        VisitorOption = {
            Break: BREAK,
            Skip: SKIP,
            Remove: REMOVE
        };

        function Reference(parent, key) {
            this.parent = parent;
            this.key = key;
        }

        Reference.prototype.replace = function replace(node) {
            this.parent[this.key] = node;
        };

        Reference.prototype.remove = function remove() {
            if (isArray(this.parent)) {
                this.parent.splice(this.key, 1);
                return true;
            } else {
                this.replace(null);
                return false;
            }
        };

        function Element(node, path, wrap, ref) {
            this.node = node;
            this.path = path;
            this.wrap = wrap;
            this.ref = ref;
        }

        function Controller() {}

        // API:
        // return property path array from root to current node
        Controller.prototype.path = function path() {
            var i, iz, j, jz, result, element;

            function addToPath(result, path) {
                if (isArray(path)) {
                    for (j = 0, jz = path.length; j < jz; ++j) {
                        result.push(path[j]);
                    }
                } else {
                    result.push(path);
                }
            }

            // root node
            if (!this.__current.path) {
                return null;
            }

            // first node is sentinel, second node is root element
            result = [];
            for (i = 2, iz = this.__leavelist.length; i < iz; ++i) {
                element = this.__leavelist[i];
                addToPath(result, element.path);
            }
            addToPath(result, this.__current.path);
            return result;
        };

        // API:
        // return type of current node
        Controller.prototype.type = function () {
            var node = this.current();
            return node.type || this.__current.wrap;
        };

        // API:
        // return array of parent elements
        Controller.prototype.parents = function parents() {
            var i, iz, result;

            // first node is sentinel
            result = [];
            for (i = 1, iz = this.__leavelist.length; i < iz; ++i) {
                result.push(this.__leavelist[i].node);
            }

            return result;
        };

        // API:
        // return current node
        Controller.prototype.current = function current() {
            return this.__current.node;
        };

        Controller.prototype.__execute = function __execute(callback, element) {
            var previous, result;

            result = undefined;

            previous = this.__current;
            this.__current = element;
            this.__state = null;
            if (callback) {
                result = callback.call(this, element.node, this.__leavelist[this.__leavelist.length - 1].node);
            }
            this.__current = previous;

            return result;
        };

        // API:
        // notify control skip / break
        Controller.prototype.notify = function notify(flag) {
            this.__state = flag;
        };

        // API:
        // skip child nodes of current node
        Controller.prototype.skip = function () {
            this.notify(SKIP);
        };

        // API:
        // break traversals
        Controller.prototype['break'] = function () {
            this.notify(BREAK);
        };

        // API:
        // remove node
        Controller.prototype.remove = function () {
            this.notify(REMOVE);
        };

        Controller.prototype.__initialize = function (root, visitor) {
            this.visitor = visitor;
            this.root = root;
            this.__worklist = [];
            this.__leavelist = [];
            this.__current = null;
            this.__state = null;
            this.__fallback = visitor.fallback === 'iteration';
            this.__keys = VisitorKeys;
            if (visitor.keys) {
                this.__keys = extend(objectCreate(this.__keys), visitor.keys);
            }
        };

        function isNode(node) {
            if (node == null) {
                return false;
            }
            return typeof node === 'object' && typeof node.type === 'string';
        }

        function isProperty(nodeType, key) {
            return (nodeType === Syntax.ObjectExpression || nodeType === Syntax.ObjectPattern) && 'properties' === key;
        }

        Controller.prototype.traverse = function traverse(root, visitor) {
            var worklist, leavelist, element, node, nodeType, ret, key, current, current2, candidates, candidate, sentinel;

            this.__initialize(root, visitor);

            sentinel = {};

            // reference
            worklist = this.__worklist;
            leavelist = this.__leavelist;

            // initialize
            worklist.push(new Element(root, null, null, null));
            leavelist.push(new Element(null, null, null, null));

            while (worklist.length) {
                element = worklist.pop();

                if (element === sentinel) {
                    element = leavelist.pop();

                    ret = this.__execute(visitor.leave, element);

                    if (this.__state === BREAK || ret === BREAK) {
                        return;
                    }
                    continue;
                }

                if (element.node) {

                    ret = this.__execute(visitor.enter, element);

                    if (this.__state === BREAK || ret === BREAK) {
                        return;
                    }

                    worklist.push(sentinel);
                    leavelist.push(element);

                    if (this.__state === SKIP || ret === SKIP) {
                        continue;
                    }

                    node = element.node;
                    nodeType = element.wrap || node.type;
                    candidates = this.__keys[nodeType];
                    if (!candidates) {
                        if (this.__fallback) {
                            candidates = objectKeys(node);
                        } else {
                            throw new Error('Unknown node type ' + nodeType + '.');
                        }
                    }

                    current = candidates.length;
                    while ((current -= 1) >= 0) {
                        key = candidates[current];
                        candidate = node[key];
                        if (!candidate) {
                            continue;
                        }

                        if (isArray(candidate)) {
                            current2 = candidate.length;
                            while ((current2 -= 1) >= 0) {
                                if (!candidate[current2]) {
                                    continue;
                                }
                                if (isProperty(nodeType, candidates[current])) {
                                    element = new Element(candidate[current2], [key, current2], 'Property', null);
                                } else if (isNode(candidate[current2])) {
                                    element = new Element(candidate[current2], [key, current2], null, null);
                                } else {
                                    continue;
                                }
                                worklist.push(element);
                            }
                        } else if (isNode(candidate)) {
                            worklist.push(new Element(candidate, key, null, null));
                        }
                    }
                }
            }
        };

        Controller.prototype.replace = function replace(root, visitor) {
            function removeElem(element) {
                var i, key, nextElem, parent;

                if (element.ref.remove()) {
                    // When the reference is an element of an array.
                    key = element.ref.key;
                    parent = element.ref.parent;

                    // If removed from array, then decrease following items' keys.
                    i = worklist.length;
                    while (i--) {
                        nextElem = worklist[i];
                        if (nextElem.ref && nextElem.ref.parent === parent) {
                            if (nextElem.ref.key < key) {
                                break;
                            }
                            --nextElem.ref.key;
                        }
                    }
                }
            }

            var worklist, leavelist, node, nodeType, target, element, current, current2, candidates, candidate, sentinel, outer, key;

            this.__initialize(root, visitor);

            sentinel = {};

            // reference
            worklist = this.__worklist;
            leavelist = this.__leavelist;

            // initialize
            outer = {
                root: root
            };
            element = new Element(root, null, null, new Reference(outer, 'root'));
            worklist.push(element);
            leavelist.push(element);

            while (worklist.length) {
                element = worklist.pop();

                if (element === sentinel) {
                    element = leavelist.pop();

                    target = this.__execute(visitor.leave, element);

                    // node may be replaced with null,
                    // so distinguish between undefined and null in this place
                    if (target !== undefined && target !== BREAK && target !== SKIP && target !== REMOVE) {
                        // replace
                        element.ref.replace(target);
                    }

                    if (this.__state === REMOVE || target === REMOVE) {
                        removeElem(element);
                    }

                    if (this.__state === BREAK || target === BREAK) {
                        return outer.root;
                    }
                    continue;
                }

                target = this.__execute(visitor.enter, element);

                // node may be replaced with null,
                // so distinguish between undefined and null in this place
                if (target !== undefined && target !== BREAK && target !== SKIP && target !== REMOVE) {
                    // replace
                    element.ref.replace(target);
                    element.node = target;
                }

                if (this.__state === REMOVE || target === REMOVE) {
                    removeElem(element);
                    element.node = null;
                }

                if (this.__state === BREAK || target === BREAK) {
                    return outer.root;
                }

                // node may be null
                node = element.node;
                if (!node) {
                    continue;
                }

                worklist.push(sentinel);
                leavelist.push(element);

                if (this.__state === SKIP || target === SKIP) {
                    continue;
                }

                nodeType = element.wrap || node.type;
                candidates = this.__keys[nodeType];
                if (!candidates) {
                    if (this.__fallback) {
                        candidates = objectKeys(node);
                    } else {
                        throw new Error('Unknown node type ' + nodeType + '.');
                    }
                }

                current = candidates.length;
                while ((current -= 1) >= 0) {
                    key = candidates[current];
                    candidate = node[key];
                    if (!candidate) {
                        continue;
                    }

                    if (isArray(candidate)) {
                        current2 = candidate.length;
                        while ((current2 -= 1) >= 0) {
                            if (!candidate[current2]) {
                                continue;
                            }
                            if (isProperty(nodeType, candidates[current])) {
                                element = new Element(candidate[current2], [key, current2], 'Property', new Reference(candidate, current2));
                            } else if (isNode(candidate[current2])) {
                                element = new Element(candidate[current2], [key, current2], null, new Reference(candidate, current2));
                            } else {
                                continue;
                            }
                            worklist.push(element);
                        }
                    } else if (isNode(candidate)) {
                        worklist.push(new Element(candidate, key, null, new Reference(node, key)));
                    }
                }
            }

            return outer.root;
        };

        function traverse(root, visitor) {
            var controller = new Controller();
            return controller.traverse(root, visitor);
        }

        function replace(root, visitor) {
            var controller = new Controller();
            return controller.replace(root, visitor);
        }

        function extendCommentRange(comment, tokens) {
            var target;

            target = upperBound(tokens, function search(token) {
                return token.range[0] > comment.range[0];
            });

            comment.extendedRange = [comment.range[0], comment.range[1]];

            if (target !== tokens.length) {
                comment.extendedRange[1] = tokens[target].range[0];
            }

            target -= 1;
            if (target >= 0) {
                comment.extendedRange[0] = tokens[target].range[1];
            }

            return comment;
        }

        function attachComments(tree, providedComments, tokens) {
            // At first, we should calculate extended comment ranges.
            var comments = [],
                comment,
                len,
                i,
                cursor;

            if (!tree.range) {
                throw new Error('attachComments needs range information');
            }

            // tokens array is empty, we attach comments to tree as 'leadingComments'
            if (!tokens.length) {
                if (providedComments.length) {
                    for (i = 0, len = providedComments.length; i < len; i += 1) {
                        comment = deepCopy(providedComments[i]);
                        comment.extendedRange = [0, tree.range[0]];
                        comments.push(comment);
                    }
                    tree.leadingComments = comments;
                }
                return tree;
            }

            for (i = 0, len = providedComments.length; i < len; i += 1) {
                comments.push(extendCommentRange(deepCopy(providedComments[i]), tokens));
            }

            // This is based on John Freeman's implementation.
            cursor = 0;
            traverse(tree, {
                enter: function enter(node) {
                    var comment;

                    while (cursor < comments.length) {
                        comment = comments[cursor];
                        if (comment.extendedRange[1] > node.range[0]) {
                            break;
                        }

                        if (comment.extendedRange[1] === node.range[0]) {
                            if (!node.leadingComments) {
                                node.leadingComments = [];
                            }
                            node.leadingComments.push(comment);
                            comments.splice(cursor, 1);
                        } else {
                            cursor += 1;
                        }
                    }

                    // already out of owned node
                    if (cursor === comments.length) {
                        return VisitorOption.Break;
                    }

                    if (comments[cursor].extendedRange[0] > node.range[1]) {
                        return VisitorOption.Skip;
                    }
                }
            });

            cursor = 0;
            traverse(tree, {
                leave: function leave(node) {
                    var comment;

                    while (cursor < comments.length) {
                        comment = comments[cursor];
                        if (node.range[1] < comment.extendedRange[0]) {
                            break;
                        }

                        if (node.range[1] === comment.extendedRange[0]) {
                            if (!node.trailingComments) {
                                node.trailingComments = [];
                            }
                            node.trailingComments.push(comment);
                            comments.splice(cursor, 1);
                        } else {
                            cursor += 1;
                        }
                    }

                    // already out of owned node
                    if (cursor === comments.length) {
                        return VisitorOption.Break;
                    }

                    if (comments[cursor].extendedRange[0] > node.range[1]) {
                        return VisitorOption.Skip;
                    }
                }
            });

            return tree;
        }

        exports.version = require$$0$5.version;
        exports.Syntax = Syntax;
        exports.traverse = traverse;
        exports.replace = replace;
        exports.attachComments = attachComments;
        exports.VisitorKeys = VisitorKeys;
        exports.VisitorOption = VisitorOption;
        exports.Controller = Controller;
        exports.cloneEnvironment = function () {
            return clone({});
        };

        return exports;
    })(exports);
    /* vim: set sw=4 ts=4 et tw=80 : */
    return module.exports;
    })({exports:{}});

    var esrecurse = (function (module) {
    var exports = module.exports;
    /*
      Copyright (C) 2014 Yusuke Suzuki <utatane.tea@gmail.com>

      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are met:

        * Redistributions of source code must retain the above copyright
          notice, this list of conditions and the following disclaimer.
        * Redistributions in binary form must reproduce the above copyright
          notice, this list of conditions and the following disclaimer in the
          documentation and/or other materials provided with the distribution.

      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
      ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
      DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
      (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
      LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
      ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
      (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
      THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */
    'use strict';

    (function () {
        'use strict';

        var estraverse, isArray, objectKeys;

        estraverse = estraverse$2;

        isArray = Array.isArray;
        if (!isArray) {
            isArray = function isArray(array) {
                return Object.prototype.toString.call(array) === '[object Array]';
            };
        }

        objectKeys = Object.keys || function (o) {
            var keys = [],
                key;
            for (key in o) {
                keys.push(key);
            }
            return keys;
        };

        function isNode(node) {
            if (node == null) {
                return false;
            }
            return typeof node === 'object' && typeof node.type === 'string';
        }

        function isProperty(nodeType, key) {
            return (nodeType === estraverse.Syntax.ObjectExpression || nodeType === estraverse.Syntax.ObjectPattern) && key === 'properties';
        }

        function Visitor(visitor) {
            this.__visitor = visitor || this;
        }

        /* Default method for visiting children.
         * When you need to call default visiting operation inside custom visiting
         * operation, you can use it with `this.visitChildren(node)`.
         */
        Visitor.prototype.visitChildren = function (node) {
            var type, children, i, iz, j, jz, child;

            if (node == null) {
                return;
            }

            type = node.type || estraverse.Syntax.Property;

            children = estraverse.VisitorKeys[type];
            if (!children) {
                children = objectKeys(node);
            }

            for (i = 0, iz = children.length; i < iz; ++i) {
                child = node[children[i]];
                if (child) {
                    if (Array.isArray(child)) {
                        for (j = 0, jz = child.length; j < jz; ++j) {
                            if (child[j]) {
                                if (isNode(child[j]) || isProperty(type, children[i])) {
                                    this.visit(child[j]);
                                }
                            }
                        }
                    } else if (isNode(child)) {
                        this.visit(child);
                    }
                }
            }
        };

        /* Dispatching node. */
        Visitor.prototype.visit = function (node) {
            var type;

            if (node == null) {
                return;
            }

            type = node.type || estraverse.Syntax.Property;
            if (this.__visitor[type]) {
                this.__visitor[type].call(this, node);
                return;
            }
            this.visitChildren(node);
        };

        exports.version = require$$0$4.version;
        exports.Visitor = Visitor;
        exports.visit = function (node, visitor) {
            var v = new Visitor(visitor);
            v.visit(node);
        };
    })();
    /* vim: set sw=4 ts=4 et tw=80 : */
    return module.exports;
    })({exports:{}});

    var referencer = (function (module) {
    var exports = module.exports;
    "use strict";

    var _interopRequire = function _interopRequire(obj) {
        return obj && obj.__esModule ? obj["default"] : obj;
    };

    var _createClass = (function () {
        function defineProperties(target, props) {
            for (var key in props) {
                var prop = props[key];prop.configurable = true;if (prop.value) prop.writable = true;
            }Object.defineProperties(target, props);
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    })();

    var _get = function get(_x, _x2, _x3) {
        var _again = true;

        _function: while (_again) {
            var object = _x,
                property = _x2,
                receiver = _x3;
            _again = false;
            var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);if (parent === null) {
                    return undefined;
                } else {
                    _x = parent;
                    _x2 = property;
                    _x3 = receiver;
                    _again = true;
                    desc = parent = undefined;
                    continue _function;
                }
            } else if ("value" in desc && desc.writable) {
                return desc.value;
            } else {
                var getter = desc.get;if (getter === undefined) {
                    return undefined;
                }return getter.call(receiver);
            }
        }
    };

    var _inherits = function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
    };

    var _classCallCheck = function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    };

    /*
      Copyright (C) 2015 Yusuke Suzuki <utatane.tea@gmail.com>

      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are met:

        * Redistributions of source code must retain the above copyright
          notice, this list of conditions and the following disclaimer.
        * Redistributions in binary form must reproduce the above copyright
          notice, this list of conditions and the following disclaimer in the
          documentation and/or other materials provided with the distribution.

      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
      ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
      DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
      (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
      LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
      ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
      (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
      THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */

    var Syntax = estraverse$1.Syntax;

    var esrecurse$$ = _interopRequire(esrecurse);

    var Reference = _interopRequire(reference);

    var Variable = _interopRequire(variable);

    var _definition = definition;

    var ParameterDefinition = _definition.ParameterDefinition;
    var Definition = _definition.Definition;

    var assert = _interopRequire(ok);

    var PatternVisitor = (function (_esrecurse$Visitor) {
        function PatternVisitor(rootPattern, callback) {
            _classCallCheck(this, PatternVisitor);

            _get(Object.getPrototypeOf(PatternVisitor.prototype), "constructor", this).call(this);
            this.rootPattern = rootPattern;
            this.callback = callback;
            this.assignments = [];
            this.rightHandNodes = [];
            this.restElements = [];
        }

        _inherits(PatternVisitor, _esrecurse$Visitor);

        _createClass(PatternVisitor, {
            Identifier: {
                value: function Identifier(pattern) {
                    var lastRestElement = getLast(this.restElements);
                    this.callback(pattern, {
                        topLevel: pattern === this.rootPattern,
                        rest: lastRestElement != null && lastRestElement.argument === pattern,
                        assignments: this.assignments
                    });
                }
            },
            ObjectPattern: {
                value: function ObjectPattern(pattern) {
                    var i, iz, property;
                    for (i = 0, iz = pattern.properties.length; i < iz; ++i) {
                        property = pattern.properties[i];

                        // Computed property's key is a right hand node.
                        if (property.computed) {
                            this.rightHandNodes.push(property.key);
                        }

                        // If it's shorthand, its key is same as its value.
                        // If it's shorthand and has its default value, its key is same as its value.left (the value is AssignmentPattern).
                        // If it's not shorthand, the name of new variable is its value's.
                        this.visit(property.value);
                    }
                }
            },
            ArrayPattern: {
                value: function ArrayPattern(pattern) {
                    var i, iz, element;
                    for (i = 0, iz = pattern.elements.length; i < iz; ++i) {
                        element = pattern.elements[i];
                        this.visit(element);
                    }
                }
            },
            AssignmentPattern: {
                value: function AssignmentPattern(pattern) {
                    this.assignments.push(pattern);
                    this.visit(pattern.left);
                    this.rightHandNodes.push(pattern.right);
                    this.assignments.pop();
                }
            },
            RestElement: {
                value: function RestElement(pattern) {
                    this.restElements.push(pattern);
                    this.visit(pattern.argument);
                    this.restElements.pop();
                }
            },
            MemberExpression: {
                value: function MemberExpression(node) {
                    // Computed property's key is a right hand node.
                    if (node.computed) {
                        this.rightHandNodes.push(node.property);
                    }
                    // the object is only read, write to its property.
                    this.rightHandNodes.push(node.object);
                }
            },
            SpreadElement: {

                //
                // ForInStatement.left and AssignmentExpression.left are LeftHandSideExpression.
                // By spec, LeftHandSideExpression is Pattern or MemberExpression.
                //   (see also: https://github.com/estree/estree/pull/20#issuecomment-74584758)
                // But espree 2.0 and esprima 2.0 parse to ArrayExpression, ObjectExpression, etc...
                //

                value: function SpreadElement(node) {
                    this.visit(node.argument);
                }
            },
            ArrayExpression: {
                value: function ArrayExpression(node) {
                    node.elements.forEach(this.visit, this);
                }
            },
            ObjectExpression: {
                value: function ObjectExpression(node) {
                    var _this = this;

                    node.properties.forEach(function (property) {
                        // Computed property's key is a right hand node.
                        if (property.computed) {
                            _this.rightHandNodes.push(property.key);
                        }
                        _this.visit(property.value);
                    });
                }
            },
            AssignmentExpression: {
                value: function AssignmentExpression(node) {
                    this.assignments.push(node);
                    this.visit(node.left);
                    this.rightHandNodes.push(node.right);
                    this.assignments.pop();
                }
            },
            CallExpression: {
                value: function CallExpression(node) {
                    var _this = this;

                    // arguments are right hand nodes.
                    node.arguments.forEach(function (a) {
                        _this.rightHandNodes.push(a);
                    });
                    this.visit(node.callee);
                }
            }
        });

        return PatternVisitor;
    })(esrecurse$$.Visitor);

    function getLast(xs) {
        return xs[xs.length - 1] || null;
    }

    function traverseIdentifierInPattern(rootPattern, referencer, callback) {
        // Call the callback at left hand identifier nodes, and Collect right hand nodes.
        var visitor = new PatternVisitor(rootPattern, callback);
        visitor.visit(rootPattern);

        // Process the right hand nodes recursively.
        if (referencer != null) {
            visitor.rightHandNodes.forEach(referencer.visit, referencer);
        }
    }

    function isPattern(node) {
        var nodeType = node.type;
        return nodeType === Syntax.Identifier || nodeType === Syntax.ObjectPattern || nodeType === Syntax.ArrayPattern || nodeType === Syntax.SpreadElement || nodeType === Syntax.RestElement || nodeType === Syntax.AssignmentPattern;
    }

    // Importing ImportDeclaration.
    // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-moduledeclarationinstantiation
    // https://github.com/estree/estree/blob/master/es6.md#importdeclaration
    // FIXME: Now, we don't create module environment, because the context is
    // implementation dependent.

    var Importer = (function (_esrecurse$Visitor2) {
        function Importer(declaration, referencer) {
            _classCallCheck(this, Importer);

            _get(Object.getPrototypeOf(Importer.prototype), "constructor", this).call(this);
            this.declaration = declaration;
            this.referencer = referencer;
        }

        _inherits(Importer, _esrecurse$Visitor2);

        _createClass(Importer, {
            visitImport: {
                value: function visitImport(id, specifier) {
                    var _this = this;

                    this.referencer.visitPattern(id, function (pattern) {
                        _this.referencer.currentScope().__define(pattern, new Definition(Variable.ImportBinding, pattern, specifier, _this.declaration, null, null));
                    });
                }
            },
            ImportNamespaceSpecifier: {
                value: function ImportNamespaceSpecifier(node) {
                    var local = node.local || node.id;
                    if (local) {
                        this.visitImport(local, node);
                    }
                }
            },
            ImportDefaultSpecifier: {
                value: function ImportDefaultSpecifier(node) {
                    var local = node.local || node.id;
                    this.visitImport(local, node);
                }
            },
            ImportSpecifier: {
                value: function ImportSpecifier(node) {
                    var local = node.local || node.id;
                    if (node.name) {
                        this.visitImport(node.name, node);
                    } else {
                        this.visitImport(local, node);
                    }
                }
            }
        });

        return Importer;
    })(esrecurse$$.Visitor);

    // Referencing variables and creating bindings.

    var Referencer = (function (_esrecurse$Visitor3) {
        function Referencer(scopeManager) {
            _classCallCheck(this, Referencer);

            _get(Object.getPrototypeOf(Referencer.prototype), "constructor", this).call(this);
            this.scopeManager = scopeManager;
            this.parent = null;
            this.isInnerMethodDefinition = false;
        }

        _inherits(Referencer, _esrecurse$Visitor3);

        _createClass(Referencer, {
            currentScope: {
                value: function currentScope() {
                    return this.scopeManager.__currentScope;
                }
            },
            close: {
                value: function close(node) {
                    while (this.currentScope() && node === this.currentScope().block) {
                        this.scopeManager.__currentScope = this.currentScope().__close(this.scopeManager);
                    }
                }
            },
            pushInnerMethodDefinition: {
                value: function pushInnerMethodDefinition(isInnerMethodDefinition) {
                    var previous = this.isInnerMethodDefinition;
                    this.isInnerMethodDefinition = isInnerMethodDefinition;
                    return previous;
                }
            },
            popInnerMethodDefinition: {
                value: function popInnerMethodDefinition(isInnerMethodDefinition) {
                    this.isInnerMethodDefinition = isInnerMethodDefinition;
                }
            },
            materializeTDZScope: {
                value: function materializeTDZScope(node, iterationNode) {
                    // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-runtime-semantics-forin-div-ofexpressionevaluation-abstract-operation
                    // TDZ scope hides the declaration's names.
                    this.scopeManager.__nestTDZScope(node, iterationNode);
                    this.visitVariableDeclaration(this.currentScope(), Variable.TDZ, iterationNode.left, 0, true);
                }
            },
            materializeIterationScope: {
                value: function materializeIterationScope(node) {
                    var _this = this;

                    // Generate iteration scope for upper ForIn/ForOf Statements.
                    var letOrConstDecl;
                    this.scopeManager.__nestForScope(node);
                    letOrConstDecl = node.left;
                    this.visitVariableDeclaration(this.currentScope(), Variable.Variable, letOrConstDecl, 0);
                    this.visitPattern(letOrConstDecl.declarations[0].id, function (pattern) {
                        _this.currentScope().__referencing(pattern, Reference.WRITE, node.right, null, true, true);
                    });
                }
            },
            referencingDefaultValue: {
                value: function referencingDefaultValue(pattern, assignments, maybeImplicitGlobal, init) {
                    var scope = this.currentScope();
                    assignments.forEach(function (assignment) {
                        scope.__referencing(pattern, Reference.WRITE, assignment.right, maybeImplicitGlobal, pattern !== assignment.left, init);
                    });
                }
            },
            visitPattern: {
                value: function visitPattern(node, options, callback) {
                    if (typeof options === "function") {
                        callback = options;
                        options = { processRightHandNodes: false };
                    }
                    traverseIdentifierInPattern(node, options.processRightHandNodes ? this : null, callback);
                }
            },
            visitFunction: {
                value: function visitFunction(node) {
                    var _this = this;

                    var i, iz;
                    // FunctionDeclaration name is defined in upper scope
                    // NOTE: Not referring variableScope. It is intended.
                    // Since
                    //  in ES5, FunctionDeclaration should be in FunctionBody.
                    //  in ES6, FunctionDeclaration should be block scoped.
                    if (node.type === Syntax.FunctionDeclaration) {
                        // id is defined in upper scope
                        this.currentScope().__define(node.id, new Definition(Variable.FunctionName, node.id, node, null, null, null));
                    }

                    // FunctionExpression with name creates its special scope;
                    // FunctionExpressionNameScope.
                    if (node.type === Syntax.FunctionExpression && node.id) {
                        this.scopeManager.__nestFunctionExpressionNameScope(node);
                    }

                    // Consider this function is in the MethodDefinition.
                    this.scopeManager.__nestFunctionScope(node, this.isInnerMethodDefinition);

                    // Process parameter declarations.
                    for (i = 0, iz = node.params.length; i < iz; ++i) {
                        this.visitPattern(node.params[i], { processRightHandNodes: true }, function (pattern, info) {
                            _this.currentScope().__define(pattern, new ParameterDefinition(pattern, node, i, info.rest));

                            _this.referencingDefaultValue(pattern, info.assignments, null, true);
                        });
                    }

                    // if there's a rest argument, add that
                    if (node.rest) {
                        this.visitPattern({
                            type: "RestElement",
                            argument: node.rest
                        }, function (pattern) {
                            _this.currentScope().__define(pattern, new ParameterDefinition(pattern, node, node.params.length, true));
                        });
                    }

                    // Skip BlockStatement to prevent creating BlockStatement scope.
                    if (node.body.type === Syntax.BlockStatement) {
                        this.visitChildren(node.body);
                    } else {
                        this.visit(node.body);
                    }

                    this.close(node);
                }
            },
            visitClass: {
                value: function visitClass(node) {
                    if (node.type === Syntax.ClassDeclaration) {
                        this.currentScope().__define(node.id, new Definition(Variable.ClassName, node.id, node, null, null, null));
                    }

                    // FIXME: Maybe consider TDZ.
                    this.visit(node.superClass);

                    this.scopeManager.__nestClassScope(node);

                    if (node.id) {
                        this.currentScope().__define(node.id, new Definition(Variable.ClassName, node.id, node));
                    }
                    this.visit(node.body);

                    this.close(node);
                }
            },
            visitProperty: {
                value: function visitProperty(node) {
                    var previous, isMethodDefinition;
                    if (node.computed) {
                        this.visit(node.key);
                    }

                    isMethodDefinition = node.type === Syntax.MethodDefinition;
                    if (isMethodDefinition) {
                        previous = this.pushInnerMethodDefinition(true);
                    }
                    this.visit(node.value);
                    if (isMethodDefinition) {
                        this.popInnerMethodDefinition(previous);
                    }
                }
            },
            visitForIn: {
                value: function visitForIn(node) {
                    var _this = this;

                    if (node.left.type === Syntax.VariableDeclaration && node.left.kind !== "var") {
                        this.materializeTDZScope(node.right, node);
                        this.visit(node.right);
                        this.close(node.right);

                        this.materializeIterationScope(node);
                        this.visit(node.body);
                        this.close(node);
                    } else {
                        if (node.left.type === Syntax.VariableDeclaration) {
                            this.visit(node.left);
                            this.visitPattern(node.left.declarations[0].id, function (pattern) {
                                _this.currentScope().__referencing(pattern, Reference.WRITE, node.right, null, true, true);
                            });
                        } else {
                            this.visitPattern(node.left, { processRightHandNodes: true }, function (pattern, info) {
                                var maybeImplicitGlobal = null;
                                if (!_this.currentScope().isStrict) {
                                    maybeImplicitGlobal = {
                                        pattern: pattern,
                                        node: node
                                    };
                                }
                                _this.referencingDefaultValue(pattern, info.assignments, maybeImplicitGlobal, false);
                                _this.currentScope().__referencing(pattern, Reference.WRITE, node.right, maybeImplicitGlobal, true, false);
                            });
                        }
                        this.visit(node.right);
                        this.visit(node.body);
                    }
                }
            },
            visitVariableDeclaration: {
                value: function visitVariableDeclaration(variableTargetScope, type, node, index, fromTDZ) {
                    var _this = this;

                    // If this was called to initialize a TDZ scope, this needs to make definitions, but doesn't make references.
                    var decl, init;

                    decl = node.declarations[index];
                    init = decl.init;
                    this.visitPattern(decl.id, { processRightHandNodes: !fromTDZ }, function (pattern, info) {
                        variableTargetScope.__define(pattern, new Definition(type, pattern, decl, node, index, node.kind));

                        if (!fromTDZ) {
                            _this.referencingDefaultValue(pattern, info.assignments, null, true);
                        }
                        if (init) {
                            _this.currentScope().__referencing(pattern, Reference.WRITE, init, null, !info.topLevel, true);
                        }
                    });
                }
            },
            AssignmentExpression: {
                value: function AssignmentExpression(node) {
                    var _this = this;

                    if (isPattern(node.left)) {
                        if (node.operator === "=") {
                            this.visitPattern(node.left, { processRightHandNodes: true }, function (pattern, info) {
                                var maybeImplicitGlobal = null;
                                if (!_this.currentScope().isStrict) {
                                    maybeImplicitGlobal = {
                                        pattern: pattern,
                                        node: node
                                    };
                                }
                                _this.referencingDefaultValue(pattern, info.assignments, maybeImplicitGlobal, false);
                                _this.currentScope().__referencing(pattern, Reference.WRITE, node.right, maybeImplicitGlobal, !info.topLevel, false);
                            });
                        } else {
                            this.currentScope().__referencing(node.left, Reference.RW, node.right);
                        }
                    } else {
                        this.visit(node.left);
                    }
                    this.visit(node.right);
                }
            },
            CatchClause: {
                value: function CatchClause(node) {
                    var _this = this;

                    this.scopeManager.__nestCatchScope(node);

                    this.visitPattern(node.param, { processRightHandNodes: true }, function (pattern, info) {
                        _this.currentScope().__define(pattern, new Definition(Variable.CatchClause, node.param, node, null, null, null));
                        _this.referencingDefaultValue(pattern, info.assignments, null, true);
                    });
                    this.visit(node.body);

                    this.close(node);
                }
            },
            Program: {
                value: function Program(node) {
                    this.scopeManager.__nestGlobalScope(node);

                    if (this.scopeManager.__isNodejsScope()) {
                        // Force strictness of GlobalScope to false when using node.js scope.
                        this.currentScope().isStrict = false;
                        this.scopeManager.__nestFunctionScope(node, false);
                    }

                    if (this.scopeManager.__isES6() && this.scopeManager.isModule()) {
                        this.scopeManager.__nestModuleScope(node);
                    }

                    this.visitChildren(node);
                    this.close(node);
                }
            },
            Identifier: {
                value: function Identifier(node) {
                    this.currentScope().__referencing(node);
                }
            },
            UpdateExpression: {
                value: function UpdateExpression(node) {
                    if (isPattern(node.argument)) {
                        this.currentScope().__referencing(node.argument, Reference.RW, null);
                    } else {
                        this.visitChildren(node);
                    }
                }
            },
            MemberExpression: {
                value: function MemberExpression(node) {
                    this.visit(node.object);
                    if (node.computed) {
                        this.visit(node.property);
                    }
                }
            },
            Property: {
                value: function Property(node) {
                    this.visitProperty(node);
                }
            },
            MethodDefinition: {
                value: function MethodDefinition(node) {
                    this.visitProperty(node);
                }
            },
            BreakStatement: {
                value: function BreakStatement() {}
            },
            ContinueStatement: {
                value: function ContinueStatement() {}
            },
            LabeledStatement: {
                value: function LabeledStatement(node) {
                    this.visit(node.body);
                }
            },
            ForStatement: {
                value: function ForStatement(node) {
                    // Create ForStatement declaration.
                    // NOTE: In ES6, ForStatement dynamically generates
                    // per iteration environment. However, escope is
                    // a static analyzer, we only generate one scope for ForStatement.
                    if (node.init && node.init.type === Syntax.VariableDeclaration && node.init.kind !== "var") {
                        this.scopeManager.__nestForScope(node);
                    }

                    this.visitChildren(node);

                    this.close(node);
                }
            },
            ClassExpression: {
                value: function ClassExpression(node) {
                    this.visitClass(node);
                }
            },
            ClassDeclaration: {
                value: function ClassDeclaration(node) {
                    this.visitClass(node);
                }
            },
            CallExpression: {
                value: function CallExpression(node) {
                    // Check this is direct call to eval
                    if (!this.scopeManager.__ignoreEval() && node.callee.type === Syntax.Identifier && node.callee.name === "eval") {
                        // NOTE: This should be `variableScope`. Since direct eval call always creates Lexical environment and
                        // let / const should be enclosed into it. Only VariableDeclaration affects on the caller's environment.
                        this.currentScope().variableScope.__detectEval();
                    }
                    this.visitChildren(node);
                }
            },
            BlockStatement: {
                value: function BlockStatement(node) {
                    if (this.scopeManager.__isES6()) {
                        this.scopeManager.__nestBlockScope(node);
                    }

                    this.visitChildren(node);

                    this.close(node);
                }
            },
            ThisExpression: {
                value: function ThisExpression() {
                    this.currentScope().variableScope.__detectThis();
                }
            },
            WithStatement: {
                value: function WithStatement(node) {
                    this.visit(node.object);
                    // Then nest scope for WithStatement.
                    this.scopeManager.__nestWithScope(node);

                    this.visit(node.body);

                    this.close(node);
                }
            },
            VariableDeclaration: {
                value: function VariableDeclaration(node) {
                    var variableTargetScope, i, iz, decl;
                    variableTargetScope = node.kind === "var" ? this.currentScope().variableScope : this.currentScope();
                    for (i = 0, iz = node.declarations.length; i < iz; ++i) {
                        decl = node.declarations[i];
                        this.visitVariableDeclaration(variableTargetScope, Variable.Variable, node, i);
                        if (decl.init) {
                            this.visit(decl.init);
                        }
                    }
                }
            },
            SwitchStatement: {

                // sec 13.11.8

                value: function SwitchStatement(node) {
                    var i, iz;

                    this.visit(node.discriminant);

                    if (this.scopeManager.__isES6()) {
                        this.scopeManager.__nestSwitchScope(node);
                    }

                    for (i = 0, iz = node.cases.length; i < iz; ++i) {
                        this.visit(node.cases[i]);
                    }

                    this.close(node);
                }
            },
            FunctionDeclaration: {
                value: function FunctionDeclaration(node) {
                    this.visitFunction(node);
                }
            },
            FunctionExpression: {
                value: function FunctionExpression(node) {
                    this.visitFunction(node);
                }
            },
            ForOfStatement: {
                value: function ForOfStatement(node) {
                    this.visitForIn(node);
                }
            },
            ForInStatement: {
                value: function ForInStatement(node) {
                    this.visitForIn(node);
                }
            },
            ArrowFunctionExpression: {
                value: function ArrowFunctionExpression(node) {
                    this.visitFunction(node);
                }
            },
            ImportDeclaration: {
                value: function ImportDeclaration(node) {
                    var importer;

                    assert(this.scopeManager.__isES6() && this.scopeManager.isModule(), "ImportDeclaration should appear when the mode is ES6 and in the module context.");

                    importer = new Importer(node, this);
                    importer.visit(node);
                }
            },
            visitExportDeclaration: {
                value: function visitExportDeclaration(node) {
                    if (node.source) {
                        return;
                    }
                    if (node.declaration) {
                        this.visit(node.declaration);
                        return;
                    }

                    this.visitChildren(node);
                }
            },
            ExportDeclaration: {
                value: function ExportDeclaration(node) {
                    this.visitExportDeclaration(node);
                }
            },
            ExportNamedDeclaration: {
                value: function ExportNamedDeclaration(node) {
                    this.visitExportDeclaration(node);
                }
            },
            ExportSpecifier: {
                value: function ExportSpecifier(node) {
                    var local = node.id || node.local;
                    this.visit(local);
                }
            }
        });

        return Referencer;
    })(esrecurse$$.Visitor);

    module.exports = Referencer;

    /* vim: set sw=4 ts=4 et tw=80 : */
    return module.exports;
    })({exports:{}});

    var isNativeImplemented$1 = (function (module) {
    var exports = module.exports;
    // Exports true if environment provides native `WeakMap` implementation,
    // whatever that is.

    'use strict';

    module.exports = (function () {
    	if (typeof WeakMap === 'undefined') return false;
    	return Object.prototype.toString.call(WeakMap.prototype) === '[object WeakMap]';
    })();
    return module.exports;
    })({exports:{}});

    var isSymbol = (function (module) {
    var exports = module.exports;
    'use strict';

    module.exports = function (x) {
    	return x && (typeof x === 'symbol' || x['@@toStringTag'] === 'Symbol') || false;
    };
    return module.exports;
    })({exports:{}});

    var validateSymbol = (function (module) {
    var exports = module.exports;
    'use strict';

    var isSymbol$$ = isSymbol;

    module.exports = function (value) {
    	if (!isSymbol$$(value)) throw new TypeError(value + " is not a symbol");
    	return value;
    };
    return module.exports;
    })({exports:{}});

    var polyfill$2 = (function (module) {
    var exports = module.exports;
    'use strict';

    var d = index$7,
        validateSymbol$$ = validateSymbol,
        create = Object.create,
        defineProperties = Object.defineProperties,
        defineProperty = Object.defineProperty,
        objPrototype = Object.prototype,
        Symbol,
        HiddenSymbol,
        globalSymbols = create(null);

    var generateName = (function () {
    	var created = create(null);
    	return function (desc) {
    		var postfix = 0,
    		    name;
    		while (created[desc + (postfix || '')]) ++postfix;
    		desc += postfix || '';
    		created[desc] = true;
    		name = '@@' + desc;
    		defineProperty(objPrototype, name, d.gs(null, function (value) {
    			defineProperty(this, name, d(value));
    		}));
    		return name;
    	};
    })();

    HiddenSymbol = function Symbol(_x) {
    	var _this = this;

    	var _again = true;

    	_function: while (_again) {
    		var description = _x;
    		_again = false;

    		if (_this instanceof HiddenSymbol) throw new TypeError('TypeError: Symbol is not a constructor');
    		_this = undefined;
    		_x = description;
    		_again = true;
    		continue _function;
    	}
    };
    module.exports = Symbol = function Symbol(description) {
    	var symbol;
    	if (this instanceof Symbol) throw new TypeError('TypeError: Symbol is not a constructor');
    	symbol = create(HiddenSymbol.prototype);
    	description = description === undefined ? '' : String(description);
    	return defineProperties(symbol, {
    		__description__: d('', description),
    		__name__: d('', generateName(description))
    	});
    };
    defineProperties(Symbol, {
    	'for': d(function (key) {
    		if (globalSymbols[key]) return globalSymbols[key];
    		return globalSymbols[key] = Symbol(String(key));
    	}),
    	keyFor: d(function (s) {
    		var key;
    		validateSymbol$$(s);
    		for (key in globalSymbols) if (globalSymbols[key] === s) return key;
    	}),
    	hasInstance: d('', Symbol('hasInstance')),
    	isConcatSpreadable: d('', Symbol('isConcatSpreadable')),
    	iterator: d('', Symbol('iterator')),
    	match: d('', Symbol('match')),
    	replace: d('', Symbol('replace')),
    	search: d('', Symbol('search')),
    	species: d('', Symbol('species')),
    	split: d('', Symbol('split')),
    	toPrimitive: d('', Symbol('toPrimitive')),
    	toStringTag: d('', Symbol('toStringTag')),
    	unscopables: d('', Symbol('unscopables'))
    });
    defineProperties(HiddenSymbol.prototype, {
    	constructor: d(Symbol),
    	toString: d('', function () {
    		return this.__name__;
    	})
    });

    defineProperties(Symbol.prototype, {
    	toString: d(function () {
    		return 'Symbol (' + validateSymbol$$(this).__description__ + ')';
    	}),
    	valueOf: d(function () {
    		return validateSymbol$$(this);
    	})
    });
    defineProperty(Symbol.prototype, Symbol.toPrimitive, d('', function () {
    	return validateSymbol$$(this);
    }));
    defineProperty(Symbol.prototype, Symbol.toStringTag, d('c', 'Symbol'));

    defineProperty(HiddenSymbol.prototype, Symbol.toPrimitive, d('c', Symbol.prototype[Symbol.toPrimitive]));
    defineProperty(HiddenSymbol.prototype, Symbol.toStringTag, d('c', Symbol.prototype[Symbol.toStringTag]));
    return module.exports;
    })({exports:{}});

    var isImplemented$2 = (function (module) {
    var exports = module.exports;
    'use strict';

    module.exports = function () {
    	var symbol;
    	if (typeof Symbol !== 'function') return false;
    	symbol = Symbol('test symbol');
    	try {
    		String(symbol);
    	} catch (e) {
    		return false;
    	}
    	if (typeof Symbol.iterator === 'symbol') return true;

    	// Return 'true' for polyfills
    	if (typeof Symbol.isConcatSpreadable !== 'object') return false;
    	if (typeof Symbol.iterator !== 'object') return false;
    	if (typeof Symbol.toPrimitive !== 'object') return false;
    	if (typeof Symbol.toStringTag !== 'object') return false;
    	if (typeof Symbol.unscopables !== 'object') return false;

    	return true;
    };
    return module.exports;
    })({exports:{}});

    var index$5 = (function (module) {
    var exports = module.exports;
    'use strict';

    module.exports = isImplemented$2() ? Symbol : polyfill$2;
    return module.exports;
    })({exports:{}});

    var isIterable = (function (module) {
    var exports = module.exports;
    'use strict';

    var isString = isString$1,
        iteratorSymbol = index$5.iterator,
        isArray = Array.isArray;

    module.exports = function (value) {
    	if (value == null) return false;
    	if (isArray(value)) return true;
    	if (isString(value)) return true;
    	return typeof value[iteratorSymbol] === 'function';
    };
    return module.exports;
    })({exports:{}});

    var validIterable = (function (module) {
    var exports = module.exports;
    'use strict';

    var isIterable$$ = isIterable;

    module.exports = function (value) {
    	if (!isIterable$$(value)) throw new TypeError(value + " is not iterable");
    	return value;
    };
    return module.exports;
    })({exports:{}});

    var index$4 = (function (module) {
    var exports = module.exports;
    'use strict';

    var clear$$ = clear,
        assign = index$12,
        callable = validCallable,
        value = validValue,
        d = index$7,
        autoBind$$ = autoBind,
        Symbol = index$5,
        defineProperty = Object.defineProperty,
        defineProperties = Object.defineProperties,
        Iterator;

    module.exports = Iterator = function (list, context) {
    	if (!(this instanceof Iterator)) return new Iterator(list, context);
    	defineProperties(this, {
    		__list__: d('w', value(list)),
    		__context__: d('w', context),
    		__nextIndex__: d('w', 0)
    	});
    	if (!context) return;
    	callable(context.on);
    	context.on('_add', this._onAdd);
    	context.on('_delete', this._onDelete);
    	context.on('_clear', this._onClear);
    };

    defineProperties(Iterator.prototype, assign({
    	constructor: d(Iterator),
    	_next: d(function () {
    		var i;
    		if (!this.__list__) return;
    		if (this.__redo__) {
    			i = this.__redo__.shift();
    			if (i !== undefined) return i;
    		}
    		if (this.__nextIndex__ < this.__list__.length) return this.__nextIndex__++;
    		this._unBind();
    	}),
    	next: d(function () {
    		return this._createResult(this._next());
    	}),
    	_createResult: d(function (i) {
    		if (i === undefined) return { done: true, value: undefined };
    		return { done: false, value: this._resolve(i) };
    	}),
    	_resolve: d(function (i) {
    		return this.__list__[i];
    	}),
    	_unBind: d(function () {
    		this.__list__ = null;
    		delete this.__redo__;
    		if (!this.__context__) return;
    		this.__context__.off('_add', this._onAdd);
    		this.__context__.off('_delete', this._onDelete);
    		this.__context__.off('_clear', this._onClear);
    		this.__context__ = null;
    	}),
    	toString: d(function () {
    		return '[object Iterator]';
    	})
    }, autoBind$$({
    	_onAdd: d(function (index) {
    		if (index >= this.__nextIndex__) return;
    		++this.__nextIndex__;
    		if (!this.__redo__) {
    			defineProperty(this, '__redo__', d('c', [index]));
    			return;
    		}
    		this.__redo__.forEach(function (redo, i) {
    			if (redo >= index) this.__redo__[i] = ++redo;
    		}, this);
    		this.__redo__.push(index);
    	}),
    	_onDelete: d(function (index) {
    		var i;
    		if (index >= this.__nextIndex__) return;
    		--this.__nextIndex__;
    		if (!this.__redo__) return;
    		i = this.__redo__.indexOf(index);
    		if (i !== -1) this.__redo__.splice(i, 1);
    		this.__redo__.forEach(function (redo, i) {
    			if (redo > index) this.__redo__[i] = --redo;
    		}, this);
    	}),
    	_onClear: d(function () {
    		if (this.__redo__) clear$$.call(this.__redo__);
    		this.__nextIndex__ = 0;
    	})
    })));

    defineProperty(Iterator.prototype, Symbol.iterator, d(function () {
    	return this;
    }));
    defineProperty(Iterator.prototype, Symbol.toStringTag, d('', 'Iterator'));
    return module.exports;
    })({exports:{}});

    var string = (function (module) {
    var exports = module.exports;
    // Thanks @mathiasbynens
    // http://mathiasbynens.be/notes/javascript-unicode#iterating-over-symbols

    'use strict';

    var setPrototypeOf = index$11,
        d = index$7,
        Iterator = index$4,
        defineProperty = Object.defineProperty,
        StringIterator;

    StringIterator = module.exports = function (str) {
    	if (!(this instanceof StringIterator)) return new StringIterator(str);
    	str = String(str);
    	Iterator.call(this, str);
    	defineProperty(this, '__length__', d('', str.length));
    };
    if (setPrototypeOf) setPrototypeOf(StringIterator, Iterator);

    StringIterator.prototype = Object.create(Iterator.prototype, {
    	constructor: d(StringIterator),
    	_next: d(function () {
    		if (!this.__list__) return;
    		if (this.__nextIndex__ < this.__length__) return this.__nextIndex__++;
    		this._unBind();
    	}),
    	_resolve: d(function (i) {
    		var char = this.__list__[i],
    		    code;
    		if (this.__nextIndex__ === this.__length__) return char;
    		code = char.charCodeAt(0);
    		if (code >= 0xD800 && code <= 0xDBFF) return char + this.__list__[this.__nextIndex__++];
    		return char;
    	}),
    	toString: d(function () {
    		return '[object String Iterator]';
    	})
    });
    return module.exports;
    })({exports:{}});

    var array = (function (module) {
    var exports = module.exports;
    'use strict';

    var setPrototypeOf = index$11,
        contains = index$14,
        d = index$7,
        Iterator = index$4,
        defineProperty = Object.defineProperty,
        ArrayIterator;

    ArrayIterator = module.exports = function (arr, kind) {
    	if (!(this instanceof ArrayIterator)) return new ArrayIterator(arr, kind);
    	Iterator.call(this, arr);
    	if (!kind) kind = 'value';else if (contains.call(kind, 'key+value')) kind = 'key+value';else if (contains.call(kind, 'key')) kind = 'key';else kind = 'value';
    	defineProperty(this, '__kind__', d('', kind));
    };
    if (setPrototypeOf) setPrototypeOf(ArrayIterator, Iterator);

    ArrayIterator.prototype = Object.create(Iterator.prototype, {
    	constructor: d(ArrayIterator),
    	_resolve: d(function (i) {
    		if (this.__kind__ === 'value') return this.__list__[i];
    		if (this.__kind__ === 'key+value') return [i, this.__list__[i]];
    		return i;
    	}),
    	toString: d(function () {
    		return '[object Array Iterator]';
    	})
    });
    return module.exports;
    })({exports:{}});

    var get = (function (module) {
    var exports = module.exports;
    'use strict';

    var isString = isString$1,
        ArrayIterator = array,
        StringIterator = string,
        iterable = validIterable,
        iteratorSymbol = index$5.iterator;

    module.exports = function (obj) {
      if (typeof iterable(obj)[iteratorSymbol] === 'function') return obj[iteratorSymbol]();
      if (isString(obj)) return new StringIterator(obj);
      return new ArrayIterator(obj);
    };
    return module.exports;
    })({exports:{}});

    var forOf = (function (module) {
    var exports = module.exports;
    'use strict';

    var callable = validCallable,
        isString = isString$1,
        get$$ = get,
        isArray = Array.isArray,
        call = Function.prototype.call;

    module.exports = function (iterable, cb /*, thisArg*/) {
    	var mode,
    	    thisArg = arguments[2],
    	    result,
    	    doBreak,
    	    broken,
    	    i,
    	    l,
    	    char,
    	    code;
    	if (isArray(iterable)) mode = 'array';else if (isString(iterable)) mode = 'string';else iterable = get$$(iterable);

    	callable(cb);
    	doBreak = function () {
    		broken = true;
    	};
    	if (mode === 'array') {
    		iterable.some(function (value) {
    			call.call(cb, thisArg, value, doBreak);
    			if (broken) return true;
    		});
    		return;
    	}
    	if (mode === 'string') {
    		l = iterable.length;
    		for (i = 0; i < l; ++i) {
    			char = iterable[i];
    			if (i + 1 < l) {
    				code = char.charCodeAt(0);
    				if (code >= 0xD800 && code <= 0xDBFF) char += iterable[++i];
    			}
    			call.call(cb, thisArg, char, doBreak);
    			if (broken) break;
    		}
    		return;
    	}
    	result = iterable.next();

    	while (!result.done) {
    		call.call(cb, thisArg, result.value, doBreak);
    		if (broken) return;
    		result = iterable.next();
    	}
    };
    return module.exports;
    })({exports:{}});

    var validObject = (function (module) {
    var exports = module.exports;
    'use strict';

    var isObject = isObject$1;

    module.exports = function (value) {
    	if (!isObject(value)) throw new TypeError(value + " is not an Object");
    	return value;
    };
    return module.exports;
    })({exports:{}});

    var polyfill$1 = (function (module) {
    var exports = module.exports;
    'use strict';

    var setPrototypeOf = index$11,
        object = validObject,
        value = validValue,
        d = index$7,
        getIterator = get,
        forOf$$ = forOf,
        toStringTagSymbol = index$5.toStringTag,
        isNative = isNativeImplemented$1,
        isArray = Array.isArray,
        defineProperty = Object.defineProperty,
        random = Math.random,
        hasOwnProperty = Object.prototype.hasOwnProperty,
        genId,
        WeakMapPoly;

    genId = (function () {
    	var generated = Object.create(null);
    	return function () {
    		var id;
    		do {
    			id = random().toString(36).slice(2);
    		} while (generated[id]);
    		generated[id] = true;
    		return id;
    	};
    })();

    module.exports = WeakMapPoly = function () /*iterable*/{
    	var iterable = arguments[0];
    	if (!(this instanceof WeakMapPoly)) return new WeakMapPoly(iterable);
    	if (this.__weakMapData__ !== undefined) {
    		throw new TypeError(this + " cannot be reinitialized");
    	}
    	if (iterable != null) {
    		if (!isArray(iterable)) iterable = getIterator(iterable);
    	}
    	defineProperty(this, '__weakMapData__', d('c', '$weakMap$' + genId()));
    	if (!iterable) return;
    	forOf$$(iterable, function (val) {
    		value(val);
    		this.set(val[0], val[1]);
    	}, this);
    };

    if (isNative) {
    	if (setPrototypeOf) setPrototypeOf(WeakMapPoly, WeakMap);
    	WeakMapPoly.prototype = Object.create(WeakMap.prototype, {
    		constructor: d(WeakMapPoly)
    	});
    }

    Object.defineProperties(WeakMapPoly.prototype, {
    	clear: d(function () {
    		defineProperty(this, '__weakMapData__', d('c', '$weakMap$' + genId()));
    	}),
    	'delete': d(function (key) {
    		if (hasOwnProperty.call(object(key), this.__weakMapData__)) {
    			delete key[this.__weakMapData__];
    			return true;
    		}
    		return false;
    	}),
    	get: d(function (key) {
    		if (hasOwnProperty.call(object(key), this.__weakMapData__)) {
    			return key[this.__weakMapData__];
    		}
    	}),
    	has: d(function (key) {
    		return hasOwnProperty.call(object(key), this.__weakMapData__);
    	}),
    	set: d(function (key, value) {
    		defineProperty(object(key), this.__weakMapData__, d('c', value));
    		return this;
    	}),
    	toString: d(function () {
    		return '[object WeakMap]';
    	})
    });
    defineProperty(WeakMapPoly.prototype, toStringTagSymbol, d('c', 'WeakMap'));
    return module.exports;
    })({exports:{}});

    var isImplemented$1 = (function (module) {
    var exports = module.exports;
    'use strict';

    module.exports = function () {
    	var map;
    	if (typeof WeakMap !== 'function') return false;
    	map = new WeakMap();
    	if (typeof map.set !== 'function') return false;
    	if (map.set({}, 1) !== map) return false;
    	if (typeof map.clear !== 'function') return false;
    	if (typeof map['delete'] !== 'function') return false;
    	if (typeof map.has !== 'function') return false;

    	return true;
    };
    return module.exports;
    })({exports:{}});

    var index$3 = (function (module) {
    var exports = module.exports;
    'use strict';

    module.exports = isImplemented$1() ? WeakMap : polyfill$1;
    return module.exports;
    })({exports:{}});

    var scopeManager = (function (module) {
    var exports = module.exports;
    "use strict";

    var _interopRequire = function _interopRequire(obj) {
        return obj && obj.__esModule ? obj["default"] : obj;
    };

    var _createClass = (function () {
        function defineProperties(target, props) {
            for (var key in props) {
                var prop = props[key];prop.configurable = true;if (prop.value) prop.writable = true;
            }Object.defineProperties(target, props);
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    })();

    var _classCallCheck = function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    };

    /*
      Copyright (C) 2015 Yusuke Suzuki <utatane.tea@gmail.com>

      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are met:

        * Redistributions of source code must retain the above copyright
          notice, this list of conditions and the following disclaimer.
        * Redistributions in binary form must reproduce the above copyright
          notice, this list of conditions and the following disclaimer in the
          documentation and/or other materials provided with the distribution.

      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
      ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
      DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
      (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
      LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
      ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
      (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
      THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */

    var WeakMap = _interopRequire(index$3);

    var _scope = scope;

    var Scope = _interopRequire(_scope);

    var assert = _interopRequire(ok);

    var GlobalScope = _scope.GlobalScope;
    var CatchScope = _scope.CatchScope;
    var WithScope = _scope.WithScope;
    var ModuleScope = _scope.ModuleScope;
    var ClassScope = _scope.ClassScope;
    var SwitchScope = _scope.SwitchScope;
    var FunctionScope = _scope.FunctionScope;
    var ForScope = _scope.ForScope;
    var TDZScope = _scope.TDZScope;
    var FunctionExpressionNameScope = _scope.FunctionExpressionNameScope;
    var BlockScope = _scope.BlockScope;

    /**
     * @class ScopeManager
     */

    var ScopeManager = (function () {
        function ScopeManager(options) {
            _classCallCheck(this, ScopeManager);

            this.scopes = [];
            this.globalScope = null;
            this.__nodeToScope = new WeakMap();
            this.__currentScope = null;
            this.__options = options;
            this.__declaredVariables = new WeakMap();
        }

        _createClass(ScopeManager, {
            __useDirective: {
                value: function __useDirective() {
                    return this.__options.directive;
                }
            },
            __isOptimistic: {
                value: function __isOptimistic() {
                    return this.__options.optimistic;
                }
            },
            __ignoreEval: {
                value: function __ignoreEval() {
                    return this.__options.ignoreEval;
                }
            },
            __isNodejsScope: {
                value: function __isNodejsScope() {
                    return this.__options.nodejsScope;
                }
            },
            isModule: {
                value: function isModule() {
                    return this.__options.sourceType === "module";
                }
            },
            __get: {

                // Returns appropliate scope for this node.

                value: function __get(node) {
                    return this.__nodeToScope.get(node);
                }
            },
            getDeclaredVariables: {

                /**
                 * Get variables that are declared by the node.
                 *
                 * "are declared by the node" means the node is same as `Variable.defs[].node` or `Variable.defs[].parent`.
                 * If the node declares nothing, this method returns an empty array.
                 * CAUTION: This API is experimental. See https://github.com/estools/escope/pull/69 for more details.
                 *
                 * @param {Esprima.Node} node - a node to get.
                 * @returns {Variable[]} variables that declared by the node.
                 */

                value: function getDeclaredVariables(node) {
                    return this.__declaredVariables.get(node) || [];
                }
            },
            acquire: {

                /**
                 * acquire scope from node.
                 * @method ScopeManager#acquire
                 * @param {Esprima.Node} node - node for the acquired scope.
                 * @param {boolean=} inner - look up the most inner scope, default value is false.
                 * @return {Scope?}
                 */

                value: function acquire(node, inner) {
                    var scopes, scope, i, iz;

                    function predicate(scope) {
                        if (scope.type === "function" && scope.functionExpressionScope) {
                            return false;
                        }
                        if (scope.type === "TDZ") {
                            return false;
                        }
                        return true;
                    }

                    scopes = this.__get(node);
                    if (!scopes || scopes.length === 0) {
                        return null;
                    }

                    // Heuristic selection from all scopes.
                    // If you would like to get all scopes, please use ScopeManager#acquireAll.
                    if (scopes.length === 1) {
                        return scopes[0];
                    }

                    if (inner) {
                        for (i = scopes.length - 1; i >= 0; --i) {
                            scope = scopes[i];
                            if (predicate(scope)) {
                                return scope;
                            }
                        }
                    } else {
                        for (i = 0, iz = scopes.length; i < iz; ++i) {
                            scope = scopes[i];
                            if (predicate(scope)) {
                                return scope;
                            }
                        }
                    }

                    return null;
                }
            },
            acquireAll: {

                /**
                 * acquire all scopes from node.
                 * @method ScopeManager#acquireAll
                 * @param {Esprima.Node} node - node for the acquired scope.
                 * @return {Scope[]?}
                 */

                value: function acquireAll(node) {
                    return this.__get(node);
                }
            },
            release: {

                /**
                 * release the node.
                 * @method ScopeManager#release
                 * @param {Esprima.Node} node - releasing node.
                 * @param {boolean=} inner - look up the most inner scope, default value is false.
                 * @return {Scope?} upper scope for the node.
                 */

                value: function release(node, inner) {
                    var scopes, scope;
                    scopes = this.__get(node);
                    if (scopes && scopes.length) {
                        scope = scopes[0].upper;
                        if (!scope) {
                            return null;
                        }
                        return this.acquire(scope.block, inner);
                    }
                    return null;
                }
            },
            attach: {
                value: function attach() {}
            },
            detach: {
                value: function detach() {}
            },
            __nestScope: {
                value: function __nestScope(scope) {
                    if (scope instanceof GlobalScope) {
                        assert(this.__currentScope === null);
                        this.globalScope = scope;
                    }
                    this.__currentScope = scope;
                    return scope;
                }
            },
            __nestGlobalScope: {
                value: function __nestGlobalScope(node) {
                    return this.__nestScope(new GlobalScope(this, node));
                }
            },
            __nestBlockScope: {
                value: function __nestBlockScope(node, isMethodDefinition) {
                    return this.__nestScope(new BlockScope(this, this.__currentScope, node));
                }
            },
            __nestFunctionScope: {
                value: function __nestFunctionScope(node, isMethodDefinition) {
                    return this.__nestScope(new FunctionScope(this, this.__currentScope, node, isMethodDefinition));
                }
            },
            __nestForScope: {
                value: function __nestForScope(node) {
                    return this.__nestScope(new ForScope(this, this.__currentScope, node));
                }
            },
            __nestCatchScope: {
                value: function __nestCatchScope(node) {
                    return this.__nestScope(new CatchScope(this, this.__currentScope, node));
                }
            },
            __nestWithScope: {
                value: function __nestWithScope(node) {
                    return this.__nestScope(new WithScope(this, this.__currentScope, node));
                }
            },
            __nestClassScope: {
                value: function __nestClassScope(node) {
                    return this.__nestScope(new ClassScope(this, this.__currentScope, node));
                }
            },
            __nestSwitchScope: {
                value: function __nestSwitchScope(node) {
                    return this.__nestScope(new SwitchScope(this, this.__currentScope, node));
                }
            },
            __nestModuleScope: {
                value: function __nestModuleScope(node) {
                    return this.__nestScope(new ModuleScope(this, this.__currentScope, node));
                }
            },
            __nestTDZScope: {
                value: function __nestTDZScope(node) {
                    return this.__nestScope(new TDZScope(this, this.__currentScope, node));
                }
            },
            __nestFunctionExpressionNameScope: {
                value: function __nestFunctionExpressionNameScope(node) {
                    return this.__nestScope(new FunctionExpressionNameScope(this, this.__currentScope, node));
                }
            },
            __isES6: {
                value: function __isES6() {
                    return this.__options.ecmaVersion >= 6;
                }
            }
        });

        return ScopeManager;
    })();

    module.exports = ScopeManager;

    /* vim: set sw=4 ts=4 et tw=80 : */
    return module.exports;
    })({exports:{}});

    var index = (function (module) {
    var exports = module.exports;
    "use strict";

    var _interopRequire = function _interopRequire(obj) {
        return obj && obj.__esModule ? obj["default"] : obj;
    };

    /**
     * Main interface function. Takes an Esprima syntax tree and returns the
     * analyzed scopes.
     * @function analyze
     * @param {esprima.Tree} tree
     * @param {Object} providedOptions - Options that tailor the scope analysis
     * @param {boolean} [providedOptions.optimistic=false] - the optimistic flag
     * @param {boolean} [providedOptions.directive=false]- the directive flag
     * @param {boolean} [providedOptions.ignoreEval=false]- whether to check 'eval()' calls
     * @param {boolean} [providedOptions.nodejsScope=false]- whether the whole
     * script is executed under node.js environment. When enabled, escope adds
     * a function scope immediately following the global scope.
     * @param {string} [providedOptions.sourceType='script']- the source type of the script. one of 'script' and 'module'
     * @param {number} [providedOptions.ecmaVersion=5]- which ECMAScript version is considered
     * @return {ScopeManager}
     */
    exports.analyze = analyze;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    /*
      Copyright (C) 2012-2014 Yusuke Suzuki <utatane.tea@gmail.com>
      Copyright (C) 2013 Alex Seville <hi@alexanderseville.com>
      Copyright (C) 2014 Thiago de Arruda <tpadilha84@gmail.com>

      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are met:

        * Redistributions of source code must retain the above copyright
          notice, this list of conditions and the following disclaimer.
        * Redistributions in binary form must reproduce the above copyright
          notice, this list of conditions and the following disclaimer in the
          documentation and/or other materials provided with the distribution.

      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
      ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
      DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
      (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
      LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
      ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
      (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
      THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */

    /**
     * Escope (<a href="http://github.com/estools/escope">escope</a>) is an <a
     * href="http://www.ecma-international.org/publications/standards/Ecma-262.htm">ECMAScript</a>
     * scope analyzer extracted from the <a
     * href="http://github.com/estools/esmangle">esmangle project</a/>.
     * <p>
     * <em>escope</em> finds lexical scopes in a source program, i.e. areas of that
     * program where different occurrences of the same identifier refer to the same
     * variable. With each scope the contained variables are collected, and each
     * identifier reference in code is linked to its corresponding variable (if
     * possible).
     * <p>
     * <em>escope</em> works on a syntax tree of the parsed source code which has
     * to adhere to the <a
     * href="https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API">
     * Mozilla Parser API</a>. E.g. <a href="http://esprima.org">esprima</a> is a parser
     * that produces such syntax trees.
     * <p>
     * The main interface is the {@link analyze} function.
     * @module escope
     */

    /*jslint bitwise:true */

    var assert = _interopRequire(ok);

    var ScopeManager = _interopRequire(scopeManager);

    var Referencer = _interopRequire(referencer);

    var Reference = _interopRequire(reference);

    var Variable = _interopRequire(variable);

    var Scope = _interopRequire(scope);

    var version = require$$0$1.version;

    function defaultOptions() {
        return {
            optimistic: false,
            directive: false,
            nodejsScope: false,
            sourceType: "script", // one of ['script', 'module']
            ecmaVersion: 5
        };
    }

    function updateDeeply(target, override) {
        var key, val;

        function isHashObject(target) {
            return typeof target === "object" && target instanceof Object && !(target instanceof RegExp);
        }

        for (key in override) {
            if (override.hasOwnProperty(key)) {
                val = override[key];
                if (isHashObject(val)) {
                    if (isHashObject(target[key])) {
                        updateDeeply(target[key], val);
                    } else {
                        target[key] = updateDeeply({}, val);
                    }
                } else {
                    target[key] = val;
                }
            }
        }
        return target;
    }
    function analyze(tree, providedOptions) {
        var scopeManager, referencer, options;

        options = updateDeeply(defaultOptions(), providedOptions);

        scopeManager = new ScopeManager(options);

        referencer = new Referencer(scopeManager);
        referencer.visit(tree);

        assert(scopeManager.__currentScope === null, "currentScope should be null.");

        return scopeManager;
    }

    exports.version = version;

    /* vim: set sw=4 ts=4 et tw=80 : */
    exports.Reference = Reference;
    exports.Variable = Variable;
    exports.Scope = Scope;
    exports.ScopeManager = ScopeManager;

    /** @name module:escope.version */

    /** @name module:escope.Reference */

    /** @name module:escope.Variable */

    /** @name module:escope.Scope */

    /** @name module:escope.ScopeManager */
    return module.exports;
    })({exports:{}});

    var analyze = index.analyze;

    var _args$2 = [["espree@^2.2.5", "/Users/donovan/src/esnext"]];
    var _from$2 = "espree@>=2.2.5 <3.0.0";
    var _id$2 = "espree@2.2.5";
    var _inCache$2 = true;
    var _installable$2 = true;
    var _location$2 = "/espree";
    var _npmUser$2 = { "email": "nicholas@nczconsulting.com", "name": "nzakas" };
    var _npmVersion$2 = "1.4.28";
    var _phantomChildren$2 = {};
    var _requested$2 = { "name": "espree", "raw": "espree@^2.2.5", "rawSpec": "^2.2.5", "scope": null, "spec": ">=2.2.5 <3.0.0", "type": "range" };
    var _requiredBy$2 = ["/"];
    var _resolved$2 = "https://registry.npmjs.org/espree/-/espree-2.2.5.tgz";
    var _shasum$2 = "df691b9310889402aeb29cc066708c56690b854b";
    var _shrinkwrap$2 = null;
    var _spec$2 = "espree@^2.2.5";
    var _where$2 = "/Users/donovan/src/esnext";
    var author = { "email": "nicholas+npm@nczconsulting.com", "name": "Nicholas C. Zakas" };
    var bin = { "esparse": "./bin/esparse.js", "esvalidate": "./bin/esvalidate.js" };
    var bugs$2 = { "url": "http://github.com/eslint/espree.git" };
    var dependencies$2 = {};
    var description$3 = "An actively-maintained fork of Esprima, the ECMAScript parsing infrastructure for multipurpose analysis";
    var devDependencies$2 = { "browserify": "^7.0.0", "chai": "^1.10.0", "complexity-report": "~0.6.1", "dateformat": "^1.0.11", "eslint": "^0.9.2", "esprima": "git://github.com/jquery/esprima", "esprima-fb": "^8001.2001.0-dev-harmony-fb", "istanbul": "~0.2.6", "json-diff": "~0.3.1", "leche": "^1.0.1", "mocha": "^2.0.1", "npm-license": "^0.2.3", "optimist": "~0.6.0", "regenerate": "~0.5.4", "semver": "^4.1.1", "shelljs": "^0.3.0", "shelljs-nodecli": "^0.1.1", "unicode-6.3.0": "~0.1.0" };
    var directories$2 = {};
    var dist$2 = { "shasum": "df691b9310889402aeb29cc066708c56690b854b", "tarball": "http://registry.npmjs.org/espree/-/espree-2.2.5.tgz" };
    var engines$2 = { "node": ">=0.10.0" };
    var files = ["bin", "espree.js", "lib", "test/compat.js", "test/reflect.js", "test/run.js", "test/runner.js", "test/test.js"];
    var gitHead$2 = "eeeeb05b879783901ff2308efcbd0cda76753cbe";
    var homepage$2 = "https://github.com/eslint/espree";
    var keywords = ["ast", "ecmascript", "javascript", "parser", "syntax"];
    var licenses = [{ "type": "BSD", "url": "http://github.com/nzakas/espree/raw/master/LICENSE" }];
    var main$2 = "espree.js";
    var maintainers$2 = [{ "name": "nzakas", "email": "nicholas@nczconsulting.com" }];
    var name$3 = "espree";
    var optionalDependencies$2 = {};
    var repository$2 = { "type": "git", "url": "http://github.com/eslint/espree.git" };
    var scripts$2 = { "analyze-complexity": "node tools/list-complexity.js", "analyze-coverage": "node node_modules/istanbul/lib/cli.js cover test/runner.js", "benchmark": "node test/benchmarks.js", "benchmark-quick": "node test/benchmarks.js quick", "browserify": "node Makefile.js browserify", "check-complexity": "node node_modules/complexity-report/src/cli.js --maxcc 14 --silent -l -w espree.js", "check-coverage": "node node_modules/istanbul/lib/cli.js check-coverage --statement 99 --branch 99 --function 99", "complexity": "npm run-script analyze-complexity && npm run-script check-complexity", "coverage": "npm run-script analyze-coverage && npm run-script check-coverage", "generate-regex": "node tools/generate-identifier-regex.js", "lint": "node Makefile.js lint", "major": "node Makefile.js major", "minor": "node Makefile.js minor", "patch": "node Makefile.js patch", "test": "npm run-script lint && node Makefile.js test && node test/run.js" };
    var version$4 = "2.2.5";
    var require$$0$2 = {
    	_args: _args$2,
    	_from: _from$2,
    	_id: _id$2,
    	_inCache: _inCache$2,
    	_installable: _installable$2,
    	_location: _location$2,
    	_npmUser: _npmUser$2,
    	_npmVersion: _npmVersion$2,
    	_phantomChildren: _phantomChildren$2,
    	_requested: _requested$2,
    	_requiredBy: _requiredBy$2,
    	_resolved: _resolved$2,
    	_shasum: _shasum$2,
    	_shrinkwrap: _shrinkwrap$2,
    	_spec: _spec$2,
    	_where: _where$2,
    	author: author,
    	bin: bin,
    	bugs: bugs$2,
    	dependencies: dependencies$2,
    	description: description$3,
    	devDependencies: devDependencies$2,
    	directories: directories$2,
    	dist: dist$2,
    	engines: engines$2,
    	files: files,
    	gitHead: gitHead$2,
    	homepage: homepage$2,
    	keywords: keywords,
    	licenses: licenses,
    	main: main$2,
    	maintainers: maintainers$2,
    	name: name$3,
    	optionalDependencies: optionalDependencies$2,
    	repository: repository$2,
    	scripts: scripts$2,
    	version: version$4
    };

    var astNodeTypes = (function (module) {
    var exports = module.exports;
    /**
     * @fileoverview The AST node types produced by the parser.
     * @author Nicholas C. Zakas
     * @copyright 2014 Nicholas C. Zakas. All rights reserved.
     * @copyright 2011-2013 Ariya Hidayat <ariya.hidayat@gmail.com>
     *
     * Redistribution and use in source and binary forms, with or without
     * modification, are permitted provided that the following conditions are met:
     *
     * * Redistributions of source code must retain the above copyright
     *   notice, this list of conditions and the following disclaimer.
     * * Redistributions in binary form must reproduce the above copyright
     *   notice, this list of conditions and the following disclaimer in the
     *   documentation and/or other materials provided with the distribution.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
     * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
     * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
     * ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
     * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
     * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
     * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
     * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
     * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
     * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
     */

    "use strict";

    //------------------------------------------------------------------------------
    // Requirements
    //------------------------------------------------------------------------------

    // None!

    //------------------------------------------------------------------------------
    // Public
    //------------------------------------------------------------------------------

    module.exports = {
        AssignmentExpression: "AssignmentExpression",
        AssignmentPattern: "AssignmentPattern",
        ArrayExpression: "ArrayExpression",
        ArrayPattern: "ArrayPattern",
        ArrowFunctionExpression: "ArrowFunctionExpression",
        BlockStatement: "BlockStatement",
        BinaryExpression: "BinaryExpression",
        BreakStatement: "BreakStatement",
        CallExpression: "CallExpression",
        CatchClause: "CatchClause",
        ClassBody: "ClassBody",
        ClassDeclaration: "ClassDeclaration",
        ClassExpression: "ClassExpression",
        ConditionalExpression: "ConditionalExpression",
        ContinueStatement: "ContinueStatement",
        DoWhileStatement: "DoWhileStatement",
        DebuggerStatement: "DebuggerStatement",
        EmptyStatement: "EmptyStatement",
        ExperimentalRestProperty: "ExperimentalRestProperty",
        ExperimentalSpreadProperty: "ExperimentalSpreadProperty",
        ExpressionStatement: "ExpressionStatement",
        ForStatement: "ForStatement",
        ForInStatement: "ForInStatement",
        ForOfStatement: "ForOfStatement",
        FunctionDeclaration: "FunctionDeclaration",
        FunctionExpression: "FunctionExpression",
        Identifier: "Identifier",
        IfStatement: "IfStatement",
        Literal: "Literal",
        LabeledStatement: "LabeledStatement",
        LogicalExpression: "LogicalExpression",
        MemberExpression: "MemberExpression",
        MetaProperty: "MetaProperty",
        MethodDefinition: "MethodDefinition",
        NewExpression: "NewExpression",
        ObjectExpression: "ObjectExpression",
        ObjectPattern: "ObjectPattern",
        Program: "Program",
        Property: "Property",
        RestElement: "RestElement",
        ReturnStatement: "ReturnStatement",
        SequenceExpression: "SequenceExpression",
        SpreadElement: "SpreadElement",
        Super: "Super",
        SwitchCase: "SwitchCase",
        SwitchStatement: "SwitchStatement",
        TaggedTemplateExpression: "TaggedTemplateExpression",
        TemplateElement: "TemplateElement",
        TemplateLiteral: "TemplateLiteral",
        ThisExpression: "ThisExpression",
        ThrowStatement: "ThrowStatement",
        TryStatement: "TryStatement",
        UnaryExpression: "UnaryExpression",
        UpdateExpression: "UpdateExpression",
        VariableDeclaration: "VariableDeclaration",
        VariableDeclarator: "VariableDeclarator",
        WhileStatement: "WhileStatement",
        WithStatement: "WithStatement",
        YieldExpression: "YieldExpression",
        JSXIdentifier: "JSXIdentifier",
        JSXNamespacedName: "JSXNamespacedName",
        JSXMemberExpression: "JSXMemberExpression",
        JSXEmptyExpression: "JSXEmptyExpression",
        JSXExpressionContainer: "JSXExpressionContainer",
        JSXElement: "JSXElement",
        JSXClosingElement: "JSXClosingElement",
        JSXOpeningElement: "JSXOpeningElement",
        JSXAttribute: "JSXAttribute",
        JSXSpreadAttribute: "JSXSpreadAttribute",
        JSXText: "JSXText",
        ExportDefaultDeclaration: "ExportDefaultDeclaration",
        ExportNamedDeclaration: "ExportNamedDeclaration",
        ExportAllDeclaration: "ExportAllDeclaration",
        ExportSpecifier: "ExportSpecifier",
        ImportDeclaration: "ImportDeclaration",
        ImportSpecifier: "ImportSpecifier",
        ImportDefaultSpecifier: "ImportDefaultSpecifier",
        ImportNamespaceSpecifier: "ImportNamespaceSpecifier"
    };
    return module.exports;
    })({exports:{}});

    var commentAttachment = (function (module) {
    var exports = module.exports;
    /**
     * @fileoverview Attaches comments to the AST.
     * @author Nicholas C. Zakas
     * @copyright 2015 Nicholas C. Zakas. All rights reserved.
     * @copyright 2011-2013 Ariya Hidayat <ariya.hidayat@gmail.com>
     *
     * Redistribution and use in source and binary forms, with or without
     * modification, are permitted provided that the following conditions are met:
     *
     * * Redistributions of source code must retain the above copyright
     *   notice, this list of conditions and the following disclaimer.
     * * Redistributions in binary form must reproduce the above copyright
     *   notice, this list of conditions and the following disclaimer in the
     *   documentation and/or other materials provided with the distribution.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
     * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
     * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
     * ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
     * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
     * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
     * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
     * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
     * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
     * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
     */

    "use strict";

    //------------------------------------------------------------------------------
    // Requirements
    //------------------------------------------------------------------------------

    var astNodeTypes$$ = astNodeTypes;

    //------------------------------------------------------------------------------
    // Private
    //------------------------------------------------------------------------------

    var extra = {
        trailingComments: [],
        leadingComments: [],
        bottomRightStack: []
    };

    //------------------------------------------------------------------------------
    // Public
    //------------------------------------------------------------------------------

    module.exports = {

        reset: function reset() {
            extra.trailingComments = [];
            extra.leadingComments = [];
            extra.bottomRightStack = [];
        },

        addComment: function addComment(comment) {
            extra.trailingComments.push(comment);
            extra.leadingComments.push(comment);
        },

        processComment: function processComment(node) {
            var lastChild, trailingComments, i;

            if (node.type === astNodeTypes$$.Program) {
                if (node.body.length > 0) {
                    return;
                }
            }

            if (extra.trailingComments.length > 0) {

                /*
                 * If the first comment in trailingComments comes after the
                 * current node, then we're good - all comments in the array will
                 * come after the node and so it's safe to add then as official
                 * trailingComments.
                 */
                if (extra.trailingComments[0].range[0] >= node.range[1]) {
                    trailingComments = extra.trailingComments;
                    extra.trailingComments = [];
                } else {

                    /*
                     * Otherwise, if the first comment doesn't come after the
                     * current node, that means we have a mix of leading and trailing
                     * comments in the array and that leadingComments contains the
                     * same items as trailingComments. Reset trailingComments to
                     * zero items and we'll handle this by evaluating leadingComments
                     * later.
                     */
                    extra.trailingComments.length = 0;
                }
            } else {
                if (extra.bottomRightStack.length > 0 && extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments && extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments[0].range[0] >= node.range[1]) {
                    trailingComments = extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments;
                    delete extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments;
                }
            }

            // Eating the stack.
            while (extra.bottomRightStack.length > 0 && extra.bottomRightStack[extra.bottomRightStack.length - 1].range[0] >= node.range[0]) {
                lastChild = extra.bottomRightStack.pop();
            }

            if (lastChild) {
                if (lastChild.leadingComments) {
                    if (lastChild.leadingComments[lastChild.leadingComments.length - 1].range[1] <= node.range[0]) {
                        node.leadingComments = lastChild.leadingComments;
                        delete lastChild.leadingComments;
                    } else {
                        // A leading comment for an anonymous class had been stolen by its first MethodDefinition,
                        // so this takes back the leading comment.
                        // See Also: https://github.com/eslint/espree/issues/158
                        for (i = lastChild.leadingComments.length - 2; i >= 0; --i) {
                            if (lastChild.leadingComments[i].range[1] <= node.range[0]) {
                                node.leadingComments = lastChild.leadingComments.splice(0, i + 1);
                                break;
                            }
                        }
                    }
                }
            } else if (extra.leadingComments.length > 0) {

                if (extra.leadingComments[extra.leadingComments.length - 1].range[1] <= node.range[0]) {
                    node.leadingComments = extra.leadingComments;
                    extra.leadingComments = [];
                } else {

                    // https://github.com/eslint/espree/issues/2

                    /*
                     * In special cases, such as return (without a value) and
                     * debugger, all comments will end up as leadingComments and
                     * will otherwise be eliminated. This extra step runs when the
                     * bottomRightStack is empty and there are comments left
                     * in leadingComments.
                     *
                     * This loop figures out the stopping point between the actual
                     * leading and trailing comments by finding the location of the
                     * first comment that comes after the given node.
                     */
                    for (i = 0; i < extra.leadingComments.length; i++) {
                        if (extra.leadingComments[i].range[1] > node.range[0]) {
                            break;
                        }
                    }

                    /*
                     * Split the array based on the location of the first comment
                     * that comes after the node. Keep in mind that this could
                     * result in an empty array, and if so, the array must be
                     * deleted.
                     */
                    node.leadingComments = extra.leadingComments.slice(0, i);
                    if (node.leadingComments.length === 0) {
                        delete node.leadingComments;
                    }

                    /*
                     * Similarly, trailing comments are attached later. The variable
                     * must be reset to null if there are no trailing comments.
                     */
                    trailingComments = extra.leadingComments.slice(i);
                    if (trailingComments.length === 0) {
                        trailingComments = null;
                    }
                }
            }

            if (trailingComments) {
                node.trailingComments = trailingComments;
            }

            extra.bottomRightStack.push(node);
        }

    };
    return module.exports;
    })({exports:{}});

    var stringMap = (function (module) {
    var exports = module.exports;
    /**
     * @fileoverview A simple map that helps avoid collisions on the Object prototype.
     * @author Jamund Ferguson
     * @copyright 2015 Jamund Ferguson. All rights reserved.
     * @copyright 2011-2013 Ariya Hidayat <ariya.hidayat@gmail.com>
     *
     * Redistribution and use in source and binary forms, with or without
     * modification, are permitted provided that the following conditions are met:
     *
     * * Redistributions of source code must retain the above copyright
     *   notice, this list of conditions and the following disclaimer.
     * * Redistributions in binary form must reproduce the above copyright
     *   notice, this list of conditions and the following disclaimer in the
     *   documentation and/or other materials provided with the distribution.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
     * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
     * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
     * ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
     * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
     * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
     * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
     * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
     * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
     * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
     */

    "use strict";

    function StringMap() {
        this.$data = {};
    }

    StringMap.prototype.get = function (key) {
        key = "$" + key;
        return this.$data[key];
    };

    StringMap.prototype.set = function (key, value) {
        key = "$" + key;
        this.$data[key] = value;
        return this;
    };

    StringMap.prototype.has = function (key) {
        key = "$" + key;
        return Object.prototype.hasOwnProperty.call(this.$data, key);
    };

    StringMap.prototype["delete"] = function (key) {
        key = "$" + key;
        return delete this.$data[key];
    };

    module.exports = StringMap;
    return module.exports;
    })({exports:{}});

    var xhtmlEntities = (function (module) {
    var exports = module.exports;
    /**
     * @fileoverview The list of XHTML entities that are valid in JSX.
     * @author Nicholas C. Zakas
     * @copyright 2014 Nicholas C. Zakas. All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without
     * modification, are permitted provided that the following conditions are met:
     *
     * * Redistributions of source code must retain the above copyright
     *   notice, this list of conditions and the following disclaimer.
     * * Redistributions in binary form must reproduce the above copyright
     *   notice, this list of conditions and the following disclaimer in the
     *   documentation and/or other materials provided with the distribution.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
     * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
     * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
     * ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
     * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
     * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
     * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
     * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
     * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
     * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
     */

    "use strict";

    //------------------------------------------------------------------------------
    // Requirements
    //------------------------------------------------------------------------------

    // None!

    //------------------------------------------------------------------------------
    // Public
    //------------------------------------------------------------------------------

    module.exports = {
        quot: "\"",
        amp: "&",
        apos: "'",
        lt: "<",
        gt: ">",
        nbsp: " ",
        iexcl: "¡",
        cent: "¢",
        pound: "£",
        curren: "¤",
        yen: "¥",
        brvbar: "¦",
        sect: "§",
        uml: "¨",
        copy: "©",
        ordf: "ª",
        laquo: "«",
        not: "¬",
        shy: "­",
        reg: "®",
        macr: "¯",
        deg: "°",
        plusmn: "±",
        sup2: "²",
        sup3: "³",
        acute: "´",
        micro: "µ",
        para: "¶",
        middot: "·",
        cedil: "¸",
        sup1: "¹",
        ordm: "º",
        raquo: "»",
        frac14: "¼",
        frac12: "½",
        frac34: "¾",
        iquest: "¿",
        Agrave: "À",
        Aacute: "Á",
        Acirc: "Â",
        Atilde: "Ã",
        Auml: "Ä",
        Aring: "Å",
        AElig: "Æ",
        Ccedil: "Ç",
        Egrave: "È",
        Eacute: "É",
        Ecirc: "Ê",
        Euml: "Ë",
        Igrave: "Ì",
        Iacute: "Í",
        Icirc: "Î",
        Iuml: "Ï",
        ETH: "Ð",
        Ntilde: "Ñ",
        Ograve: "Ò",
        Oacute: "Ó",
        Ocirc: "Ô",
        Otilde: "Õ",
        Ouml: "Ö",
        times: "×",
        Oslash: "Ø",
        Ugrave: "Ù",
        Uacute: "Ú",
        Ucirc: "Û",
        Uuml: "Ü",
        Yacute: "Ý",
        THORN: "Þ",
        szlig: "ß",
        agrave: "à",
        aacute: "á",
        acirc: "â",
        atilde: "ã",
        auml: "ä",
        aring: "å",
        aelig: "æ",
        ccedil: "ç",
        egrave: "è",
        eacute: "é",
        ecirc: "ê",
        euml: "ë",
        igrave: "ì",
        iacute: "í",
        icirc: "î",
        iuml: "ï",
        eth: "ð",
        ntilde: "ñ",
        ograve: "ò",
        oacute: "ó",
        ocirc: "ô",
        otilde: "õ",
        ouml: "ö",
        divide: "÷",
        oslash: "ø",
        ugrave: "ù",
        uacute: "ú",
        ucirc: "û",
        uuml: "ü",
        yacute: "ý",
        thorn: "þ",
        yuml: "ÿ",
        OElig: "Œ",
        oelig: "œ",
        Scaron: "Š",
        scaron: "š",
        Yuml: "Ÿ",
        fnof: "ƒ",
        circ: "ˆ",
        tilde: "˜",
        Alpha: "Α",
        Beta: "Β",
        Gamma: "Γ",
        Delta: "Δ",
        Epsilon: "Ε",
        Zeta: "Ζ",
        Eta: "Η",
        Theta: "Θ",
        Iota: "Ι",
        Kappa: "Κ",
        Lambda: "Λ",
        Mu: "Μ",
        Nu: "Ν",
        Xi: "Ξ",
        Omicron: "Ο",
        Pi: "Π",
        Rho: "Ρ",
        Sigma: "Σ",
        Tau: "Τ",
        Upsilon: "Υ",
        Phi: "Φ",
        Chi: "Χ",
        Psi: "Ψ",
        Omega: "Ω",
        alpha: "α",
        beta: "β",
        gamma: "γ",
        delta: "δ",
        epsilon: "ε",
        zeta: "ζ",
        eta: "η",
        theta: "θ",
        iota: "ι",
        kappa: "κ",
        lambda: "λ",
        mu: "μ",
        nu: "ν",
        xi: "ξ",
        omicron: "ο",
        pi: "π",
        rho: "ρ",
        sigmaf: "ς",
        sigma: "σ",
        tau: "τ",
        upsilon: "υ",
        phi: "φ",
        chi: "χ",
        psi: "ψ",
        omega: "ω",
        thetasym: "ϑ",
        upsih: "ϒ",
        piv: "ϖ",
        ensp: " ",
        emsp: " ",
        thinsp: " ",
        zwnj: "‌",
        zwj: "‍",
        lrm: "‎",
        rlm: "‏",
        ndash: "–",
        mdash: "—",
        lsquo: "‘",
        rsquo: "’",
        sbquo: "‚",
        ldquo: "“",
        rdquo: "”",
        bdquo: "„",
        dagger: "†",
        Dagger: "‡",
        bull: "•",
        hellip: "…",
        permil: "‰",
        prime: "′",
        Prime: "″",
        lsaquo: "‹",
        rsaquo: "›",
        oline: "‾",
        frasl: "⁄",
        euro: "€",
        image: "ℑ",
        weierp: "℘",
        real: "ℜ",
        trade: "™",
        alefsym: "ℵ",
        larr: "←",
        uarr: "↑",
        rarr: "→",
        darr: "↓",
        harr: "↔",
        crarr: "↵",
        lArr: "⇐",
        uArr: "⇑",
        rArr: "⇒",
        dArr: "⇓",
        hArr: "⇔",
        forall: "∀",
        part: "∂",
        exist: "∃",
        empty: "∅",
        nabla: "∇",
        isin: "∈",
        notin: "∉",
        ni: "∋",
        prod: "∏",
        sum: "∑",
        minus: "−",
        lowast: "∗",
        radic: "√",
        prop: "∝",
        infin: "∞",
        ang: "∠",
        and: "∧",
        or: "∨",
        cap: "∩",
        cup: "∪",
        "int": "∫",
        there4: "∴",
        sim: "∼",
        cong: "≅",
        asymp: "≈",
        ne: "≠",
        equiv: "≡",
        le: "≤",
        ge: "≥",
        sub: "⊂",
        sup: "⊃",
        nsub: "⊄",
        sube: "⊆",
        supe: "⊇",
        oplus: "⊕",
        otimes: "⊗",
        perp: "⊥",
        sdot: "⋅",
        lceil: "⌈",
        rceil: "⌉",
        lfloor: "⌊",
        rfloor: "⌋",
        lang: "〈",
        rang: "〉",
        loz: "◊",
        spades: "♠",
        clubs: "♣",
        hearts: "♥",
        diams: "♦"
    };
    return module.exports;
    })({exports:{}});

    var messages = (function (module) {
    var exports = module.exports;
    /**
     * @fileoverview Error messages returned by the parser.
     * @author Nicholas C. Zakas
     * @copyright 2014 Nicholas C. Zakas. All rights reserved.
     * @copyright 2011-2013 Ariya Hidayat <ariya.hidayat@gmail.com>
     *
     * Redistribution and use in source and binary forms, with or without
     * modification, are permitted provided that the following conditions are met:
     *
     * * Redistributions of source code must retain the above copyright
     *   notice, this list of conditions and the following disclaimer.
     * * Redistributions in binary form must reproduce the above copyright
     *   notice, this list of conditions and the following disclaimer in the
     *   documentation and/or other materials provided with the distribution.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
     * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
     * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
     * ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
     * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
     * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
     * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
     * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
     * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
     * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
     */

    "use strict";

    //------------------------------------------------------------------------------
    // Requirements
    //------------------------------------------------------------------------------

    // None!

    //------------------------------------------------------------------------------
    // Public
    //------------------------------------------------------------------------------

    // error messages should be identical to V8 where possible
    module.exports = {
        UnexpectedToken: "Unexpected token %0",
        UnexpectedNumber: "Unexpected number",
        UnexpectedString: "Unexpected string",
        UnexpectedIdentifier: "Unexpected identifier",
        UnexpectedReserved: "Unexpected reserved word",
        UnexpectedTemplate: "Unexpected quasi %0",
        UnexpectedEOS: "Unexpected end of input",
        NewlineAfterThrow: "Illegal newline after throw",
        InvalidRegExp: "Invalid regular expression",
        InvalidRegExpFlag: "Invalid regular expression flag",
        UnterminatedRegExp: "Invalid regular expression: missing /",
        InvalidLHSInAssignment: "Invalid left-hand side in assignment",
        InvalidLHSInFormalsList: "Invalid left-hand side in formals list",
        InvalidLHSInForIn: "Invalid left-hand side in for-in",
        MultipleDefaultsInSwitch: "More than one default clause in switch statement",
        NoCatchOrFinally: "Missing catch or finally after try",
        NoUnintializedConst: "Const must be initialized",
        UnknownLabel: "Undefined label '%0'",
        Redeclaration: "%0 '%1' has already been declared",
        IllegalContinue: "Illegal continue statement",
        IllegalBreak: "Illegal break statement",
        IllegalReturn: "Illegal return statement",
        IllegalYield: "Illegal yield expression",
        IllegalSpread: "Illegal spread element",
        StrictModeWith: "Strict mode code may not include a with statement",
        StrictCatchVariable: "Catch variable may not be eval or arguments in strict mode",
        StrictVarName: "Variable name may not be eval or arguments in strict mode",
        StrictParamName: "Parameter name eval or arguments is not allowed in strict mode",
        StrictParamDupe: "Strict mode function may not have duplicate parameter names",
        TemplateOctalLiteral: "Octal literals are not allowed in template strings.",
        ParameterAfterRestParameter: "Rest parameter must be last formal parameter",
        DefaultRestParameter: "Rest parameter can not have a default value",
        ElementAfterSpreadElement: "Spread must be the final element of an element list",
        ObjectPatternAsRestParameter: "Invalid rest parameter",
        ObjectPatternAsSpread: "Invalid spread argument",
        StrictFunctionName: "Function name may not be eval or arguments in strict mode",
        StrictOctalLiteral: "Octal literals are not allowed in strict mode.",
        StrictDelete: "Delete of an unqualified identifier in strict mode.",
        StrictDuplicateProperty: "Duplicate data property in object literal not allowed in strict mode",
        DuplicatePrototypeProperty: "Duplicate '__proto__' property in object literal are not allowed",
        ConstructorSpecialMethod: "Class constructor may not be an accessor",
        DuplicateConstructor: "A class may only have one constructor",
        StaticPrototype: "Classes may not have static property named prototype",
        AccessorDataProperty: "Object literal may not have data and accessor property with the same name",
        AccessorGetSet: "Object literal may not have multiple get/set accessors with the same name",
        StrictLHSAssignment: "Assignment to eval or arguments is not allowed in strict mode",
        StrictLHSPostfix: "Postfix increment/decrement may not have eval or arguments operand in strict mode",
        StrictLHSPrefix: "Prefix increment/decrement may not have eval or arguments operand in strict mode",
        StrictReservedWord: "Use of future reserved word in strict mode",
        InvalidJSXAttributeValue: "JSX value should be either an expression or a quoted JSX text",
        ExpectedJSXClosingTag: "Expected corresponding JSX closing tag for %0",
        AdjacentJSXElements: "Adjacent JSX elements must be wrapped in an enclosing tag",
        MissingFromClause: "Missing from clause",
        NoAsAfterImportNamespace: "Missing as after import *",
        InvalidModuleSpecifier: "Invalid module specifier",
        IllegalImportDeclaration: "Illegal import declaration",
        IllegalExportDeclaration: "Illegal export declaration"
    };
    return module.exports;
    })({exports:{}});

    var features = (function (module) {
    var exports = module.exports;
    /**
     * @fileoverview The list of feature flags supported by the parser and their default
     *      settings.
     * @author Nicholas C. Zakas
     * @copyright 2015 Fred K. Schott. All rights reserved.
     * @copyright 2014 Nicholas C. Zakas. All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without
     * modification, are permitted provided that the following conditions are met:
     *
     * * Redistributions of source code must retain the above copyright
     *   notice, this list of conditions and the following disclaimer.
     * * Redistributions in binary form must reproduce the above copyright
     *   notice, this list of conditions and the following disclaimer in the
     *   documentation and/or other materials provided with the distribution.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
     * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
     * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
     * ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
     * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
     * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
     * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
     * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
     * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
     * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
     */

    "use strict";

    //------------------------------------------------------------------------------
    // Requirements
    //------------------------------------------------------------------------------

    // None!

    //------------------------------------------------------------------------------
    // Public
    //------------------------------------------------------------------------------

    module.exports = {

        // enable parsing of arrow functions
        arrowFunctions: false,

        // enable parsing of let and const
        blockBindings: true,

        // enable parsing of destructured arrays and objects
        destructuring: false,

        // enable parsing of regex u flag
        regexUFlag: false,

        // enable parsing of regex y flag
        regexYFlag: false,

        // enable parsing of template strings
        templateStrings: false,

        // enable parsing binary literals
        binaryLiterals: false,

        // enable parsing ES6 octal literals
        octalLiterals: false,

        // enable parsing unicode code point escape sequences
        unicodeCodePointEscapes: true,

        // enable parsing of default parameters
        defaultParams: false,

        // enable parsing of rest parameters
        restParams: false,

        // enable parsing of for-of statements
        forOf: false,

        // enable parsing computed object literal properties
        objectLiteralComputedProperties: false,

        // enable parsing of shorthand object literal methods
        objectLiteralShorthandMethods: false,

        // enable parsing of shorthand object literal properties
        objectLiteralShorthandProperties: false,

        // Allow duplicate object literal properties (except '__proto__')
        objectLiteralDuplicateProperties: false,

        // enable parsing of generators/yield
        generators: false,

        // support the spread operator
        spread: false,

        // enable super in functions
        superInFunctions: false,

        // enable parsing of classes
        classes: false,

        // enable parsing of new.target
        newTarget: false,

        // enable parsing of modules
        modules: false,

        // React JSX parsing
        jsx: false,

        // allow return statement in global scope
        globalReturn: false,

        // allow experimental object rest/spread
        experimentalObjectRestSpread: false
    };
    return module.exports;
    })({exports:{}});

    var astNodeFactory = (function (module) {
    var exports = module.exports;
    /**
     * @fileoverview A factory for creating AST nodes
     * @author Fred K. Schott
     * @copyright 2014 Fred K. Schott. All rights reserved.
     * @copyright 2011-2013 Ariya Hidayat <ariya.hidayat@gmail.com>
     *
     * Redistribution and use in source and binary forms, with or without
     * modification, are permitted provided that the following conditions are met:
     *
     * * Redistributions of source code must retain the above copyright
     *   notice, this list of conditions and the following disclaimer.
     * * Redistributions in binary form must reproduce the above copyright
     *   notice, this list of conditions and the following disclaimer in the
     *   documentation and/or other materials provided with the distribution.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
     * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
     * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
     * ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
     * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
     * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
     * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
     * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
     * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
     * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
     */

    "use strict";

    //------------------------------------------------------------------------------
    // Requirements
    //------------------------------------------------------------------------------

    var astNodeTypes$$ = astNodeTypes;

    //------------------------------------------------------------------------------
    // Public
    //------------------------------------------------------------------------------

    module.exports = {

        /**
         * Create an Array Expression ASTNode out of an array of elements
         * @param {ASTNode[]} elements An array of ASTNode elements
         * @returns {ASTNode} An ASTNode representing the entire array expression
         */
        createArrayExpression: function createArrayExpression(elements) {
            return {
                type: astNodeTypes$$.ArrayExpression,
                elements: elements
            };
        },

        /**
         * Create an Arrow Function Expression ASTNode
         * @param {ASTNode} params The function arguments
         * @param {ASTNode} body The function body
         * @param {boolean} expression True if the arrow function is created via an expression.
         *      Always false for declarations, but kept here to be in sync with
         *      FunctionExpression objects.
         * @returns {ASTNode} An ASTNode representing the entire arrow function expression
         */
        createArrowFunctionExpression: function createArrowFunctionExpression(params, body, expression) {
            return {
                type: astNodeTypes$$.ArrowFunctionExpression,
                id: null,
                params: params,
                body: body,
                generator: false,
                expression: expression
            };
        },

        /**
         * Create an ASTNode representation of an assignment expression
         * @param {ASTNode} operator The assignment operator
         * @param {ASTNode} left The left operand
         * @param {ASTNode} right The right operand
         * @returns {ASTNode} An ASTNode representing the entire assignment expression
         */
        createAssignmentExpression: function createAssignmentExpression(operator, left, right) {
            return {
                type: astNodeTypes$$.AssignmentExpression,
                operator: operator,
                left: left,
                right: right
            };
        },

        /**
         * Create an ASTNode representation of an assignment pattern (default parameters)
         * @param {ASTNode} left The left operand
         * @param {ASTNode} right The right operand
         * @returns {ASTNode} An ASTNode representing the entire assignment pattern
         */
        createAssignmentPattern: function createAssignmentPattern(left, right) {
            return {
                type: astNodeTypes$$.AssignmentPattern,
                left: left,
                right: right
            };
        },

        /**
         * Create an ASTNode representation of a binary expression
         * @param {ASTNode} operator The assignment operator
         * @param {ASTNode} left The left operand
         * @param {ASTNode} right The right operand
         * @returns {ASTNode} An ASTNode representing the entire binary expression
         */
        createBinaryExpression: function createBinaryExpression(operator, left, right) {
            var type = operator === "||" || operator === "&&" ? astNodeTypes$$.LogicalExpression : astNodeTypes$$.BinaryExpression;
            return {
                type: type,
                operator: operator,
                left: left,
                right: right
            };
        },

        /**
         * Create an ASTNode representation of a block statement
         * @param {ASTNode} body The block statement body
         * @returns {ASTNode} An ASTNode representing the entire block statement
         */
        createBlockStatement: function createBlockStatement(body) {
            return {
                type: astNodeTypes$$.BlockStatement,
                body: body
            };
        },

        /**
         * Create an ASTNode representation of a break statement
         * @param {ASTNode} label The break statement label
         * @returns {ASTNode} An ASTNode representing the break statement
         */
        createBreakStatement: function createBreakStatement(label) {
            return {
                type: astNodeTypes$$.BreakStatement,
                label: label
            };
        },

        /**
         * Create an ASTNode representation of a call expression
         * @param {ASTNode} callee The function being called
         * @param {ASTNode[]} args An array of ASTNodes representing the function call arguments
         * @returns {ASTNode} An ASTNode representing the entire call expression
         */
        createCallExpression: function createCallExpression(callee, args) {
            return {
                type: astNodeTypes$$.CallExpression,
                callee: callee,
                "arguments": args
            };
        },

        /**
         * Create an ASTNode representation of a catch clause/block
         * @param {ASTNode} param Any catch clause exeption/conditional parameter information
         * @param {ASTNode} body The catch block body
         * @returns {ASTNode} An ASTNode representing the entire catch clause
         */
        createCatchClause: function createCatchClause(param, body) {
            return {
                type: astNodeTypes$$.CatchClause,
                param: param,
                body: body
            };
        },

        /**
         * Creates an ASTNode representation of a class body.
         * @param {ASTNode} body The node representing the body of the class.
         * @returns {ASTNode} An ASTNode representing the class body.
         */
        createClassBody: function createClassBody(body) {
            return {
                type: astNodeTypes$$.ClassBody,
                body: body
            };
        },

        createClassExpression: function createClassExpression(id, superClass, body) {
            return {
                type: astNodeTypes$$.ClassExpression,
                id: id,
                superClass: superClass,
                body: body
            };
        },

        createClassDeclaration: function createClassDeclaration(id, superClass, body) {
            return {
                type: astNodeTypes$$.ClassDeclaration,
                id: id,
                superClass: superClass,
                body: body
            };
        },

        createMethodDefinition: function createMethodDefinition(propertyType, kind, key, value, computed) {
            return {
                type: astNodeTypes$$.MethodDefinition,
                key: key,
                value: value,
                kind: kind,
                "static": propertyType === "static",
                computed: computed
            };
        },

        createMetaProperty: function createMetaProperty(meta, property) {
            return {
                type: astNodeTypes$$.MetaProperty,
                meta: meta,
                property: property
            };
        },

        /**
         * Create an ASTNode representation of a conditional expression
         * @param {ASTNode} test The conditional to evaluate
         * @param {ASTNode} consequent The code to be run if the test returns true
         * @param {ASTNode} alternate The code to be run if the test returns false
         * @returns {ASTNode} An ASTNode representing the entire conditional expression
         */
        createConditionalExpression: function createConditionalExpression(test, consequent, alternate) {
            return {
                type: astNodeTypes$$.ConditionalExpression,
                test: test,
                consequent: consequent,
                alternate: alternate
            };
        },

        /**
         * Create an ASTNode representation of a continue statement
         * @param {?ASTNode} label The optional continue label (null if not set)
         * @returns {ASTNode} An ASTNode representing the continue statement
         */
        createContinueStatement: function createContinueStatement(label) {
            return {
                type: astNodeTypes$$.ContinueStatement,
                label: label
            };
        },

        /**
         * Create an ASTNode representation of a debugger statement
         * @returns {ASTNode} An ASTNode representing the debugger statement
         */
        createDebuggerStatement: function createDebuggerStatement() {
            return {
                type: astNodeTypes$$.DebuggerStatement
            };
        },

        /**
         * Create an ASTNode representation of an empty statement
         * @returns {ASTNode} An ASTNode representing an empty statement
         */
        createEmptyStatement: function createEmptyStatement() {
            return {
                type: astNodeTypes$$.EmptyStatement
            };
        },

        /**
         * Create an ASTNode representation of an expression statement
         * @param {ASTNode} expression The expression
         * @returns {ASTNode} An ASTNode representing an expression statement
         */
        createExpressionStatement: function createExpressionStatement(expression) {
            return {
                type: astNodeTypes$$.ExpressionStatement,
                expression: expression
            };
        },

        /**
         * Create an ASTNode representation of a while statement
         * @param {ASTNode} test The while conditional
         * @param {ASTNode} body The while loop body
         * @returns {ASTNode} An ASTNode representing a while statement
         */
        createWhileStatement: function createWhileStatement(test, body) {
            return {
                type: astNodeTypes$$.WhileStatement,
                test: test,
                body: body
            };
        },

        /**
         * Create an ASTNode representation of a do..while statement
         * @param {ASTNode} test The do..while conditional
         * @param {ASTNode} body The do..while loop body
         * @returns {ASTNode} An ASTNode representing a do..while statement
         */
        createDoWhileStatement: function createDoWhileStatement(test, body) {
            return {
                type: astNodeTypes$$.DoWhileStatement,
                body: body,
                test: test
            };
        },

        /**
         * Create an ASTNode representation of a for statement
         * @param {ASTNode} init The initialization expression
         * @param {ASTNode} test The conditional test expression
         * @param {ASTNode} update The update expression
         * @param {ASTNode} body The statement body
         * @returns {ASTNode} An ASTNode representing a for statement
         */
        createForStatement: function createForStatement(init, test, update, body) {
            return {
                type: astNodeTypes$$.ForStatement,
                init: init,
                test: test,
                update: update,
                body: body
            };
        },

        /**
         * Create an ASTNode representation of a for..in statement
         * @param {ASTNode} left The left-side variable for the property name
         * @param {ASTNode} right The right-side object
         * @param {ASTNode} body The statement body
         * @returns {ASTNode} An ASTNode representing a for..in statement
         */
        createForInStatement: function createForInStatement(left, right, body) {
            return {
                type: astNodeTypes$$.ForInStatement,
                left: left,
                right: right,
                body: body,
                each: false
            };
        },

        /**
         * Create an ASTNode representation of a for..of statement
         * @param {ASTNode} left The left-side variable for the property value
         * @param {ASTNode} right The right-side object
         * @param {ASTNode} body The statement body
         * @returns {ASTNode} An ASTNode representing a for..of statement
         */
        createForOfStatement: function createForOfStatement(left, right, body) {
            return {
                type: astNodeTypes$$.ForOfStatement,
                left: left,
                right: right,
                body: body
            };
        },

        /**
         * Create an ASTNode representation of a function declaration
         * @param {ASTNode} id The function name
         * @param {ASTNode} params The function arguments
         * @param {ASTNode} body The function body
         * @param {boolean} generator True if the function is a generator, false if not.
         * @param {boolean} expression True if the function is created via an expression.
         *      Always false for declarations, but kept here to be in sync with
         *      FunctionExpression objects.
         * @returns {ASTNode} An ASTNode representing a function declaration
         */
        createFunctionDeclaration: function createFunctionDeclaration(id, params, body, generator, expression) {
            return {
                type: astNodeTypes$$.FunctionDeclaration,
                id: id,
                params: params || [],
                body: body,
                generator: !!generator,
                expression: !!expression
            };
        },

        /**
         * Create an ASTNode representation of a function expression
         * @param {ASTNode} id The function name
         * @param {ASTNode} params The function arguments
         * @param {ASTNode} body The function body
         * @param {boolean} generator True if the function is a generator, false if not.
         * @param {boolean} expression True if the function is created via an expression.
         * @returns {ASTNode} An ASTNode representing a function declaration
         */
        createFunctionExpression: function createFunctionExpression(id, params, body, generator, expression) {
            return {
                type: astNodeTypes$$.FunctionExpression,
                id: id,
                params: params || [],
                body: body,
                generator: !!generator,
                expression: !!expression
            };
        },

        /**
         * Create an ASTNode representation of an identifier
         * @param {ASTNode} name The identifier name
         * @returns {ASTNode} An ASTNode representing an identifier
         */
        createIdentifier: function createIdentifier(name) {
            return {
                type: astNodeTypes$$.Identifier,
                name: name
            };
        },

        /**
         * Create an ASTNode representation of an if statement
         * @param {ASTNode} test The if conditional expression
         * @param {ASTNode} consequent The consequent if statement to run
         * @param {ASTNode} alternate the "else" alternate statement
         * @returns {ASTNode} An ASTNode representing an if statement
         */
        createIfStatement: function createIfStatement(test, consequent, alternate) {
            return {
                type: astNodeTypes$$.IfStatement,
                test: test,
                consequent: consequent,
                alternate: alternate
            };
        },

        /**
         * Create an ASTNode representation of a labeled statement
         * @param {ASTNode} label The statement label
         * @param {ASTNode} body The labeled statement body
         * @returns {ASTNode} An ASTNode representing a labeled statement
         */
        createLabeledStatement: function createLabeledStatement(label, body) {
            return {
                type: astNodeTypes$$.LabeledStatement,
                label: label,
                body: body
            };
        },

        /**
         * Create an ASTNode literal from the source code
         * @param {ASTNode} token The ASTNode token
         * @param {string} source The source code to get the literal from
         * @returns {ASTNode} An ASTNode representing the new literal
         */
        createLiteralFromSource: function createLiteralFromSource(token, source) {
            var node = {
                type: astNodeTypes$$.Literal,
                value: token.value,
                raw: source.slice(token.range[0], token.range[1])
            };

            // regular expressions have regex properties
            if (token.regex) {
                node.regex = token.regex;
            }

            return node;
        },

        /**
         * Create an ASTNode template element
         * @param {Object} value Data on the element value
         * @param {string} value.raw The raw template string
         * @param {string} value.cooked The processed template string
         * @param {boolean} tail True if this is the final element in a template string
         * @returns {ASTNode} An ASTNode representing the template string element
         */
        createTemplateElement: function createTemplateElement(value, tail) {
            return {
                type: astNodeTypes$$.TemplateElement,
                value: value,
                tail: tail
            };
        },

        /**
         * Create an ASTNode template literal
         * @param {ASTNode[]} quasis An array of the template string elements
         * @param {ASTNode[]} expressions An array of the template string expressions
         * @returns {ASTNode} An ASTNode representing the template string
         */
        createTemplateLiteral: function createTemplateLiteral(quasis, expressions) {
            return {
                type: astNodeTypes$$.TemplateLiteral,
                quasis: quasis,
                expressions: expressions
            };
        },

        /**
         * Create an ASTNode representation of a spread element
         * @param {ASTNode} argument The array being spread
         * @returns {ASTNode} An ASTNode representing a spread element
         */
        createSpreadElement: function createSpreadElement(argument) {
            return {
                type: astNodeTypes$$.SpreadElement,
                argument: argument
            };
        },

        /**
         * Create an ASTNode representation of an experimental rest property
         * @param {ASTNode} argument The identifier being rested
         * @returns {ASTNode} An ASTNode representing a rest element
         */
        createExperimentalRestProperty: function createExperimentalRestProperty(argument) {
            return {
                type: astNodeTypes$$.ExperimentalRestProperty,
                argument: argument
            };
        },

        /**
         * Create an ASTNode representation of an experimental spread property
         * @param {ASTNode} argument The identifier being spread
         * @returns {ASTNode} An ASTNode representing a spread element
         */
        createExperimentalSpreadProperty: function createExperimentalSpreadProperty(argument) {
            return {
                type: astNodeTypes$$.ExperimentalSpreadProperty,
                argument: argument
            };
        },

        /**
         * Create an ASTNode tagged template expression
         * @param {ASTNode} tag The tag expression
         * @param {ASTNode} quasi A TemplateLiteral ASTNode representing
         * the template string itself.
         * @returns {ASTNode} An ASTNode representing the tagged template
         */
        createTaggedTemplateExpression: function createTaggedTemplateExpression(tag, quasi) {
            return {
                type: astNodeTypes$$.TaggedTemplateExpression,
                tag: tag,
                quasi: quasi
            };
        },

        /**
         * Create an ASTNode representation of a member expression
         * @param {string} accessor The member access method (bracket or period)
         * @param {ASTNode} object The object being referenced
         * @param {ASTNode} property The object-property being referenced
         * @returns {ASTNode} An ASTNode representing a member expression
         */
        createMemberExpression: function createMemberExpression(accessor, object, property) {
            return {
                type: astNodeTypes$$.MemberExpression,
                computed: accessor === "[",
                object: object,
                property: property
            };
        },

        /**
         * Create an ASTNode representation of a new expression
         * @param {ASTNode} callee The constructor for the new object type
         * @param {ASTNode} args The arguments passed to the constructor
         * @returns {ASTNode} An ASTNode representing a new expression
         */
        createNewExpression: function createNewExpression(callee, args) {
            return {
                type: astNodeTypes$$.NewExpression,
                callee: callee,
                "arguments": args
            };
        },

        /**
         * Create an ASTNode representation of a new object expression
         * @param {ASTNode[]} properties An array of ASTNodes that represent all object
         *      properties and associated values
         * @returns {ASTNode} An ASTNode representing a new object expression
         */
        createObjectExpression: function createObjectExpression(properties) {
            return {
                type: astNodeTypes$$.ObjectExpression,
                properties: properties
            };
        },

        /**
         * Create an ASTNode representation of a postfix expression
         * @param {string} operator The postfix operator ("++", "--", etc.)
         * @param {ASTNode} argument The operator argument
         * @returns {ASTNode} An ASTNode representing a postfix expression
         */
        createPostfixExpression: function createPostfixExpression(operator, argument) {
            return {
                type: astNodeTypes$$.UpdateExpression,
                operator: operator,
                argument: argument,
                prefix: false
            };
        },

        /**
         * Create an ASTNode representation of an entire program
         * @param {ASTNode} body The program body
         * @param {string} sourceType Either "module" or "script".
         * @returns {ASTNode} An ASTNode representing an entire program
         */
        createProgram: function createProgram(body, sourceType) {
            return {
                type: astNodeTypes$$.Program,
                body: body,
                sourceType: sourceType
            };
        },

        /**
         * Create an ASTNode representation of an object property
         * @param {string} kind The type of property represented ("get", "set", etc.)
         * @param {ASTNode} key The property key
         * @param {ASTNode} value The new property value
         * @param {boolean} method True if the property is also a method (value is a function)
         * @param {boolean} shorthand True if the property is shorthand
         * @param {boolean} computed True if the property value has been computed
         * @returns {ASTNode} An ASTNode representing an object property
         */
        createProperty: function createProperty(kind, key, value, method, shorthand, computed) {
            return {
                type: astNodeTypes$$.Property,
                key: key,
                value: value,
                kind: kind,
                method: method,
                shorthand: shorthand,
                computed: computed
            };
        },

        /**
         * Create an ASTNode representation of a rest element
         * @param {ASTNode} argument The rest argument
         * @returns {ASTNode} An ASTNode representing a rest element
         */
        createRestElement: function createRestElement(argument) {
            return {
                type: astNodeTypes$$.RestElement,
                argument: argument
            };
        },

        /**
         * Create an ASTNode representation of a return statement
         * @param {?ASTNode} argument The return argument, null if no argument is provided
         * @returns {ASTNode} An ASTNode representing a return statement
         */
        createReturnStatement: function createReturnStatement(argument) {
            return {
                type: astNodeTypes$$.ReturnStatement,
                argument: argument
            };
        },

        /**
         * Create an ASTNode representation of a sequence of expressions
         * @param {ASTNode[]} expressions An array containing each expression, in order
         * @returns {ASTNode} An ASTNode representing a sequence of expressions
         */
        createSequenceExpression: function createSequenceExpression(expressions) {
            return {
                type: astNodeTypes$$.SequenceExpression,
                expressions: expressions
            };
        },

        /**
         * Create an ASTNode representation of super
         * @returns {ASTNode} An ASTNode representing super
         */
        createSuper: function createSuper() {
            return {
                type: astNodeTypes$$.Super
            };
        },

        /**
         * Create an ASTNode representation of a switch case statement
         * @param {ASTNode} test The case value to test against the switch value
         * @param {ASTNode} consequent The consequent case statement
         * @returns {ASTNode} An ASTNode representing a switch case
         */
        createSwitchCase: function createSwitchCase(test, consequent) {
            return {
                type: astNodeTypes$$.SwitchCase,
                test: test,
                consequent: consequent
            };
        },

        /**
         * Create an ASTNode representation of a switch statement
         * @param {ASTNode} discriminant An expression to test against each case value
         * @param {ASTNode[]} cases An array of switch case statements
         * @returns {ASTNode} An ASTNode representing a switch statement
         */
        createSwitchStatement: function createSwitchStatement(discriminant, cases) {
            return {
                type: astNodeTypes$$.SwitchStatement,
                discriminant: discriminant,
                cases: cases
            };
        },

        /**
         * Create an ASTNode representation of a this statement
         * @returns {ASTNode} An ASTNode representing a this statement
         */
        createThisExpression: function createThisExpression() {
            return {
                type: astNodeTypes$$.ThisExpression
            };
        },

        /**
         * Create an ASTNode representation of a throw statement
         * @param {ASTNode} argument The argument to throw
         * @returns {ASTNode} An ASTNode representing a throw statement
         */
        createThrowStatement: function createThrowStatement(argument) {
            return {
                type: astNodeTypes$$.ThrowStatement,
                argument: argument
            };
        },

        /**
         * Create an ASTNode representation of a try statement
         * @param {ASTNode} block The try block
         * @param {ASTNode} handler A catch handler
         * @param {?ASTNode} finalizer The final code block to run after the try/catch has run
         * @returns {ASTNode} An ASTNode representing a try statement
         */
        createTryStatement: function createTryStatement(block, handler, finalizer) {
            return {
                type: astNodeTypes$$.TryStatement,
                block: block,
                handler: handler,
                finalizer: finalizer
            };
        },

        /**
         * Create an ASTNode representation of a unary expression
         * @param {string} operator The unary operator
         * @param {ASTNode} argument The unary operand
         * @returns {ASTNode} An ASTNode representing a unary expression
         */
        createUnaryExpression: function createUnaryExpression(operator, argument) {
            if (operator === "++" || operator === "--") {
                return {
                    type: astNodeTypes$$.UpdateExpression,
                    operator: operator,
                    argument: argument,
                    prefix: true
                };
            }
            return {
                type: astNodeTypes$$.UnaryExpression,
                operator: operator,
                argument: argument,
                prefix: true
            };
        },

        /**
         * Create an ASTNode representation of a variable declaration
         * @param {ASTNode[]} declarations An array of variable declarations
         * @param {string} kind The kind of variable created ("var", "let", etc.)
         * @returns {ASTNode} An ASTNode representing a variable declaration
         */
        createVariableDeclaration: function createVariableDeclaration(declarations, kind) {
            return {
                type: astNodeTypes$$.VariableDeclaration,
                declarations: declarations,
                kind: kind
            };
        },

        /**
         * Create an ASTNode representation of a variable declarator
         * @param {ASTNode} id The variable ID
         * @param {ASTNode} init The variable's initial value
         * @returns {ASTNode} An ASTNode representing a variable declarator
         */
        createVariableDeclarator: function createVariableDeclarator(id, init) {
            return {
                type: astNodeTypes$$.VariableDeclarator,
                id: id,
                init: init
            };
        },

        /**
         * Create an ASTNode representation of a with statement
         * @param {ASTNode} object The with statement object expression
         * @param {ASTNode} body The with statement body
         * @returns {ASTNode} An ASTNode representing a with statement
         */
        createWithStatement: function createWithStatement(object, body) {
            return {
                type: astNodeTypes$$.WithStatement,
                object: object,
                body: body
            };
        },

        createYieldExpression: function createYieldExpression(argument, delegate) {
            return {
                type: astNodeTypes$$.YieldExpression,
                argument: argument || null,
                delegate: delegate
            };
        },

        createJSXAttribute: function createJSXAttribute(name, value) {
            return {
                type: astNodeTypes$$.JSXAttribute,
                name: name,
                value: value || null
            };
        },

        createJSXSpreadAttribute: function createJSXSpreadAttribute(argument) {
            return {
                type: astNodeTypes$$.JSXSpreadAttribute,
                argument: argument
            };
        },

        createJSXIdentifier: function createJSXIdentifier(name) {
            return {
                type: astNodeTypes$$.JSXIdentifier,
                name: name
            };
        },

        createJSXNamespacedName: function createJSXNamespacedName(namespace, name) {
            return {
                type: astNodeTypes$$.JSXNamespacedName,
                namespace: namespace,
                name: name
            };
        },

        createJSXMemberExpression: function createJSXMemberExpression(object, property) {
            return {
                type: astNodeTypes$$.JSXMemberExpression,
                object: object,
                property: property
            };
        },

        createJSXElement: function createJSXElement(openingElement, closingElement, children) {
            return {
                type: astNodeTypes$$.JSXElement,
                openingElement: openingElement,
                closingElement: closingElement,
                children: children
            };
        },

        createJSXEmptyExpression: function createJSXEmptyExpression() {
            return {
                type: astNodeTypes$$.JSXEmptyExpression
            };
        },

        createJSXExpressionContainer: function createJSXExpressionContainer(expression) {
            return {
                type: astNodeTypes$$.JSXExpressionContainer,
                expression: expression
            };
        },

        createJSXOpeningElement: function createJSXOpeningElement(name, attributes, selfClosing) {
            return {
                type: astNodeTypes$$.JSXOpeningElement,
                name: name,
                selfClosing: selfClosing,
                attributes: attributes
            };
        },

        createJSXClosingElement: function createJSXClosingElement(name) {
            return {
                type: astNodeTypes$$.JSXClosingElement,
                name: name
            };
        },

        createExportSpecifier: function createExportSpecifier(local, exported) {
            return {
                type: astNodeTypes$$.ExportSpecifier,
                exported: exported || local,
                local: local
            };
        },

        createImportDefaultSpecifier: function createImportDefaultSpecifier(local) {
            return {
                type: astNodeTypes$$.ImportDefaultSpecifier,
                local: local
            };
        },

        createImportNamespaceSpecifier: function createImportNamespaceSpecifier(local) {
            return {
                type: astNodeTypes$$.ImportNamespaceSpecifier,
                local: local
            };
        },

        createExportNamedDeclaration: function createExportNamedDeclaration(declaration, specifiers, source) {
            return {
                type: astNodeTypes$$.ExportNamedDeclaration,
                declaration: declaration,
                specifiers: specifiers,
                source: source
            };
        },

        createExportDefaultDeclaration: function createExportDefaultDeclaration(declaration) {
            return {
                type: astNodeTypes$$.ExportDefaultDeclaration,
                declaration: declaration
            };
        },

        createExportAllDeclaration: function createExportAllDeclaration(source) {
            return {
                type: astNodeTypes$$.ExportAllDeclaration,
                source: source
            };
        },

        createImportSpecifier: function createImportSpecifier(local, imported) {
            return {
                type: astNodeTypes$$.ImportSpecifier,
                local: local || imported,
                imported: imported
            };
        },

        createImportDeclaration: function createImportDeclaration(specifiers, source) {
            return {
                type: astNodeTypes$$.ImportDeclaration,
                specifiers: specifiers,
                source: source
            };
        }

    };
    return module.exports;
    })({exports:{}});

    var tokenInfo = (function (module) {
    var exports = module.exports;
    /**
     * @fileoverview Contains token information.
     * @author Nicholas C. Zakas
     * @copyright 2014 Nicholas C. Zakas. All rights reserved.
     * @copyright 2013 Thaddee Tyl <thaddee.tyl@gmail.com>
     * @copyright 2011-2013 Ariya Hidayat <ariya.hidayat@gmail.com>
     *
     * Redistribution and use in source and binary forms, with or without
     * modification, are permitted provided that the following conditions are met:
     *
     * * Redistributions of source code must retain the above copyright
     *   notice, this list of conditions and the following disclaimer.
     * * Redistributions in binary form must reproduce the above copyright
     *   notice, this list of conditions and the following disclaimer in the
     *   documentation and/or other materials provided with the distribution.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
     * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
     * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
     * ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
     * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
     * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
     * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
     * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
     * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
     * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
     */

    "use strict";

    //------------------------------------------------------------------------------
    // Requirements
    //------------------------------------------------------------------------------

    // None!

    //------------------------------------------------------------------------------
    // Private
    //------------------------------------------------------------------------------

    var Token = {
        BooleanLiteral: 1,
        EOF: 2,
        Identifier: 3,
        Keyword: 4,
        NullLiteral: 5,
        NumericLiteral: 6,
        Punctuator: 7,
        StringLiteral: 8,
        RegularExpression: 9,
        Template: 10,
        JSXIdentifier: 11,
        JSXText: 12
    };

    var TokenName = {};
    TokenName[Token.BooleanLiteral] = "Boolean";
    TokenName[Token.EOF] = "<end>";
    TokenName[Token.Identifier] = "Identifier";
    TokenName[Token.Keyword] = "Keyword";
    TokenName[Token.NullLiteral] = "Null";
    TokenName[Token.NumericLiteral] = "Numeric";
    TokenName[Token.Punctuator] = "Punctuator";
    TokenName[Token.StringLiteral] = "String";
    TokenName[Token.RegularExpression] = "RegularExpression";
    TokenName[Token.Template] = "Template";
    TokenName[Token.JSXIdentifier] = "JSXIdentifier";
    TokenName[Token.JSXText] = "JSXText";

    // A function following one of those tokens is an expression.
    var FnExprTokens = ["(", "{", "[", "in", "typeof", "instanceof", "new", "return", "case", "delete", "throw", "void",
    // assignment operators
    "=", "+=", "-=", "*=", "/=", "%=", "<<=", ">>=", ">>>=", "&=", "|=", "^=", ",",
    // binary/unary operators
    "+", "-", "*", "/", "%", "++", "--", "<<", ">>", ">>>", "&", "|", "^", "!", "~", "&&", "||", "?", ":", "===", "==", ">=", "<=", "<", ">", "!=", "!=="];

    //------------------------------------------------------------------------------
    // Public
    //------------------------------------------------------------------------------

    module.exports = {
        Token: Token,
        TokenName: TokenName,
        FnExprTokens: FnExprTokens
    };
    return module.exports;
    })({exports:{}});

    var syntax = (function (module) {
    var exports = module.exports;
    /**
     * @fileoverview Various syntax/pattern checks for parsing.
     * @author Nicholas C. Zakas
     * @copyright 2014 Nicholas C. Zakas. All rights reserved.
     * @copyright 2011-2013 Ariya Hidayat <ariya.hidayat@gmail.com>
     * @copyright 2012-2013 Mathias Bynens <mathias@qiwi.be>
     *
     * Redistribution and use in source and binary forms, with or without
     * modification, are permitted provided that the following conditions are met:
     *
     * * Redistributions of source code must retain the above copyright
     *   notice, this list of conditions and the following disclaimer.
     * * Redistributions in binary form must reproduce the above copyright
     *   notice, this list of conditions and the following disclaimer in the
     *   documentation and/or other materials provided with the distribution.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
     * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
     * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
     * ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
     * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
     * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
     * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
     * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
     * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
     * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
     */

    "use strict";

    //------------------------------------------------------------------------------
    // Requirements
    //------------------------------------------------------------------------------

    // None!

    //------------------------------------------------------------------------------
    // Private
    //------------------------------------------------------------------------------

    // See also tools/generate-identifier-regex.js.
    var Regex = {
        NonAsciiIdentifierStart: new RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]"),
        NonAsciiIdentifierPart: new RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ̀-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҃-҇Ҋ-ԧԱ-Ֆՙա-և֑-ׇֽֿׁׂׅׄא-תװ-ײؐ-ؚؠ-٩ٮ-ۓە-ۜ۟-۪ۨ-ۼۿܐ-݊ݍ-ޱ߀-ߵߺࠀ-࠭ࡀ-࡛ࢠࢢ-ࢬࣤ-ࣾऀ-ॣ०-९ॱ-ॷॹ-ॿঁ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-ৱਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૯ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୯ୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௯ఁ-ఃఅ-ఌఎ-ఐఒ-నప-ళవ-హఽ-ౄె-ైొ-్ౕౖౘౙౠ-ౣ౦-౯ಂಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲംഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൎൗൠ-ൣ൦-൯ൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟෲෳก-ฺเ-๎๐-๙ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟༀ༘༙༠-༩༹༵༷༾-ཇཉ-ཬཱ-྄྆-ྗྙ-ྼ࿆က-၉ၐ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፟ᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-᜔ᜠ-᜴ᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-៓ៗៜ៝០-៩᠋-᠍᠐-᠙ᠠ-ᡷᢀ-ᢪᢰ-ᣵᤀ-ᤜᤠ-ᤫᤰ-᤻᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧙ᨀ-ᨛᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙ᪧᬀ-ᭋ᭐-᭙᭫-᭳ᮀ-᯳ᰀ-᰷᱀-᱉ᱍ-ᱽ᳐-᳔᳒-ᳶᴀ-ᷦ᷼-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‌‍‿⁀⁔ⁱⁿₐ-ₜ⃐-⃥⃜⃡-⃰ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵿-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〯〱-〵〸-〼ぁ-ゖ゙゚ゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘫꙀ-꙯ꙴ-꙽ꙿ-ꚗꚟ-꛱ꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠧꡀ-ꡳꢀ-꣄꣐-꣙꣠-ꣷꣻ꤀-꤭ꤰ-꥓ꥠ-ꥼꦀ-꧀ꧏ-꧙ꨀ-ꨶꩀ-ꩍ꩐-꩙ꩠ-ꩶꩺꩻꪀ-ꫂꫛ-ꫝꫠ-ꫯꫲ-꫶ꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯪ꯬꯭꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ︀-️︠-︦︳︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]"),
        LeadingZeros: new RegExp("^0+(?!$)")
    };

    //------------------------------------------------------------------------------
    // Public
    //------------------------------------------------------------------------------

    module.exports = {

        Regex: Regex,

        isDecimalDigit: function isDecimalDigit(ch) {
            return ch >= 48 && ch <= 57; // 0..9
        },

        isHexDigit: function isHexDigit(ch) {
            return "0123456789abcdefABCDEF".indexOf(ch) >= 0;
        },

        isOctalDigit: function isOctalDigit(ch) {
            return "01234567".indexOf(ch) >= 0;
        },

        // 7.2 White Space

        isWhiteSpace: function isWhiteSpace(ch) {
            return ch === 0x20 || ch === 0x09 || ch === 0x0B || ch === 0x0C || ch === 0xA0 || ch >= 0x1680 && [0x1680, 0x180E, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A, 0x202F, 0x205F, 0x3000, 0xFEFF].indexOf(ch) >= 0;
        },

        // 7.3 Line Terminators

        isLineTerminator: function isLineTerminator(ch) {
            return ch === 0x0A || ch === 0x0D || ch === 0x2028 || ch === 0x2029;
        },

        // 7.6 Identifier Names and Identifiers

        isIdentifierStart: function isIdentifierStart(ch) {
            return ch === 0x24 || ch === 0x5F || // $ (dollar) and _ (underscore)
            ch >= 0x41 && ch <= 0x5A || // A..Z
            ch >= 0x61 && ch <= 0x7A || // a..z
            ch === 0x5C || // \ (backslash)
            ch >= 0x80 && Regex.NonAsciiIdentifierStart.test(String.fromCharCode(ch));
        },

        isIdentifierPart: function isIdentifierPart(ch) {
            return ch === 0x24 || ch === 0x5F || // $ (dollar) and _ (underscore)
            ch >= 0x41 && ch <= 0x5A || // A..Z
            ch >= 0x61 && ch <= 0x7A || // a..z
            ch >= 0x30 && ch <= 0x39 || // 0..9
            ch === 0x5C || // \ (backslash)
            ch >= 0x80 && Regex.NonAsciiIdentifierPart.test(String.fromCharCode(ch));
        },

        // 7.6.1.2 Future Reserved Words

        isFutureReservedWord: function isFutureReservedWord(id) {
            switch (id) {
                case "class":
                case "enum":
                case "export":
                case "extends":
                case "import":
                case "super":
                    return true;
                default:
                    return false;
            }
        },

        isStrictModeReservedWord: function isStrictModeReservedWord(id, ecmaFeatures) {
            switch (id) {
                case "implements":
                case "interface":
                case "package":
                case "private":
                case "protected":
                case "public":
                case "static":
                case "yield":
                case "let":
                    return true;
                case "await":
                    return ecmaFeatures.modules;
                default:
                    return false;
            }
        },

        isRestrictedWord: function isRestrictedWord(id) {
            return id === "eval" || id === "arguments";
        },

        // 7.6.1.1 Keywords

        isKeyword: function isKeyword(id, strict, ecmaFeatures) {

            if (strict && this.isStrictModeReservedWord(id, ecmaFeatures)) {
                return true;
            }

            // "const" is specialized as Keyword in V8.
            // "yield" and "let" are for compatiblity with SpiderMonkey and ES.next.
            // Some others are from future reserved words.

            switch (id.length) {
                case 2:
                    return id === "if" || id === "in" || id === "do";
                case 3:
                    return id === "var" || id === "for" || id === "new" || id === "try" || id === "let";
                case 4:
                    return id === "this" || id === "else" || id === "case" || id === "void" || id === "with" || id === "enum";
                case 5:
                    return id === "while" || id === "break" || id === "catch" || id === "throw" || id === "const" || !ecmaFeatures.generators && id === "yield" || id === "class" || id === "super";
                case 6:
                    return id === "return" || id === "typeof" || id === "delete" || id === "switch" || id === "export" || id === "import";
                case 7:
                    return id === "default" || id === "finally" || id === "extends";
                case 8:
                    return id === "function" || id === "continue" || id === "debugger";
                case 10:
                    return id === "instanceof";
                default:
                    return false;
            }
        },

        isJSXIdentifierStart: function isJSXIdentifierStart(ch) {
            // exclude backslash (\)
            return ch !== 92 && this.isIdentifierStart(ch);
        },

        isJSXIdentifierPart: function isJSXIdentifierPart(ch) {
            // exclude backslash (\) and add hyphen (-)
            return ch !== 92 && (ch === 45 || this.isIdentifierPart(ch));
        }

    };
    return module.exports;
    })({exports:{}});

    var espree = (function (module) {
    var exports = module.exports;
    /*
    Copyright (C) 2015 Fred K. Schott <fkschott@gmail.com>
    Copyright (C) 2013 Ariya Hidayat <ariya.hidayat@gmail.com>
    Copyright (C) 2013 Thaddee Tyl <thaddee.tyl@gmail.com>
    Copyright (C) 2013 Mathias Bynens <mathias@qiwi.be>
    Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>
    Copyright (C) 2012 Mathias Bynens <mathias@qiwi.be>
    Copyright (C) 2012 Joost-Wim Boekesteijn <joost-wim@boekesteijn.nl>
    Copyright (C) 2012 Kris Kowal <kris.kowal@cixar.com>
    Copyright (C) 2012 Yusuke Suzuki <utatane.tea@gmail.com>
    Copyright (C) 2012 Arpad Borsos <arpad.borsos@googlemail.com>
    Copyright (C) 2011 Ariya Hidayat <ariya.hidayat@gmail.com>

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
    DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
    (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
    LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
    ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
    THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */ /*eslint no-undefined:0, no-use-before-define: 0*/"use strict";var syntax$$=syntax,tokenInfo$$=tokenInfo,astNodeTypes$$=astNodeTypes,astNodeFactory$$=astNodeFactory,defaultFeatures=features,Messages=messages,XHTMLEntities=xhtmlEntities,StringMap=stringMap,commentAttachment$$=commentAttachment;var Token=tokenInfo$$.Token,TokenName=tokenInfo$$.TokenName,FnExprTokens=tokenInfo$$.FnExprTokens,Regex=syntax$$.Regex,PropertyKind,source,strict,index,lineNumber,lineStart,length,lookahead,state,extra;PropertyKind = {Data:1,Get:2,Set:4}; // Ensure the condition is true, otherwise throw an error.
    // This is only to have a better contract semantic, i.e. another safety net
    // to catch a logic error. The condition shall be fulfilled in normal case.
    // Do NOT use this to enforce a certain condition on any user input.
    function assert(condition,message){ /* istanbul ignore if */if(!condition){throw new Error("ASSERT: " + message);}} // 7.4 Comments
    function addComment(type,value,start,end,loc){var comment;assert(typeof start === "number","Comment must have valid position"); // Because the way the actual token is scanned, often the comments
    // (if any) are skipped twice during the lexical analysis.
    // Thus, we need to skip adding a comment if the comment array already
    // handled it.
    if(state.lastCommentStart >= start){return;}state.lastCommentStart = start;comment = {type:type,value:value};if(extra.range){comment.range = [start,end];}if(extra.loc){comment.loc = loc;}extra.comments.push(comment);if(extra.attachComment){commentAttachment$$.addComment(comment);}}function skipSingleLineComment(offset){var start,loc,ch,comment;start = index - offset;loc = {start:{line:lineNumber,column:index - lineStart - offset}};while(index < length) {ch = source.charCodeAt(index);++index;if(syntax$$.isLineTerminator(ch)){if(extra.comments){comment = source.slice(start + offset,index - 1);loc.end = {line:lineNumber,column:index - lineStart - 1};addComment("Line",comment,start,index - 1,loc);}if(ch === 13 && source.charCodeAt(index) === 10){++index;}++lineNumber;lineStart = index;return;}}if(extra.comments){comment = source.slice(start + offset,index);loc.end = {line:lineNumber,column:index - lineStart};addComment("Line",comment,start,index,loc);}}function skipMultiLineComment(){var start,loc,ch,comment;if(extra.comments){start = index - 2;loc = {start:{line:lineNumber,column:index - lineStart - 2}};}while(index < length) {ch = source.charCodeAt(index);if(syntax$$.isLineTerminator(ch)){if(ch === 0x0D && source.charCodeAt(index + 1) === 0x0A){++index;}++lineNumber;++index;lineStart = index;if(index >= length){throwError({},Messages.UnexpectedToken,"ILLEGAL");}}else if(ch === 0x2A){ // Block comment ends with "*/".
    if(source.charCodeAt(index + 1) === 0x2F){++index;++index;if(extra.comments){comment = source.slice(start + 2,index - 2);loc.end = {line:lineNumber,column:index - lineStart};addComment("Block",comment,start,index,loc);}return;}++index;}else {++index;}}throwError({},Messages.UnexpectedToken,"ILLEGAL");}function skipComment(){var ch,start;start = index === 0;while(index < length) {ch = source.charCodeAt(index);if(syntax$$.isWhiteSpace(ch)){++index;}else if(syntax$$.isLineTerminator(ch)){++index;if(ch === 0x0D && source.charCodeAt(index) === 0x0A){++index;}++lineNumber;lineStart = index;start = true;}else if(ch === 0x2F){ // U+002F is "/"
    ch = source.charCodeAt(index + 1);if(ch === 0x2F){++index;++index;skipSingleLineComment(2);start = true;}else if(ch === 0x2A){ // U+002A is "*"
    ++index;++index;skipMultiLineComment();}else {break;}}else if(start && ch === 0x2D){ // U+002D is "-"
    // U+003E is ">"
    if(source.charCodeAt(index + 1) === 0x2D && source.charCodeAt(index + 2) === 0x3E){ // "-->" is a single-line comment
    index += 3;skipSingleLineComment(3);}else {break;}}else if(ch === 0x3C){ // U+003C is "<"
    if(source.slice(index + 1,index + 4) === "!--"){++index; // `<`
    ++index; // `!`
    ++index; // `-`
    ++index; // `-`
    skipSingleLineComment(4);}else {break;}}else {break;}}}function scanHexEscape(prefix){var i,len,ch,code=0;len = prefix === "u"?4:2;for(i = 0;i < len;++i) {if(index < length && syntax$$.isHexDigit(source[index])){ch = source[index++];code = code * 16 + "0123456789abcdef".indexOf(ch.toLowerCase());}else {return "";}}return String.fromCharCode(code);} /**
     * Scans an extended unicode code point escape sequence from source. Throws an
     * error if the sequence is empty or if the code point value is too large.
     * @returns {string} The string created by the Unicode escape sequence.
     * @private
     */function scanUnicodeCodePointEscape(){var ch,code,cu1,cu2;ch = source[index];code = 0; // At least one hex digit is required.
    if(ch === "}"){throwError({},Messages.UnexpectedToken,"ILLEGAL");}while(index < length) {ch = source[index++];if(!syntax$$.isHexDigit(ch)){break;}code = code * 16 + "0123456789abcdef".indexOf(ch.toLowerCase());}if(code > 0x10FFFF || ch !== "}"){throwError({},Messages.UnexpectedToken,"ILLEGAL");} // UTF-16 Encoding
    if(code <= 0xFFFF){return String.fromCharCode(code);}cu1 = (code - 0x10000 >> 10) + 0xD800;cu2 = (code - 0x10000 & 1023) + 0xDC00;return String.fromCharCode(cu1,cu2);}function getEscapedIdentifier(){var ch,id;ch = source.charCodeAt(index++);id = String.fromCharCode(ch); // "\u" (U+005C, U+0075) denotes an escaped character.
    if(ch === 0x5C){if(source.charCodeAt(index) !== 0x75){throwError({},Messages.UnexpectedToken,"ILLEGAL");}++index;ch = scanHexEscape("u");if(!ch || ch === "\\" || !syntax$$.isIdentifierStart(ch.charCodeAt(0))){throwError({},Messages.UnexpectedToken,"ILLEGAL");}id = ch;}while(index < length) {ch = source.charCodeAt(index);if(!syntax$$.isIdentifierPart(ch)){break;}++index;id += String.fromCharCode(ch); // "\u" (U+005C, U+0075) denotes an escaped character.
    if(ch === 0x5C){id = id.substr(0,id.length - 1);if(source.charCodeAt(index) !== 0x75){throwError({},Messages.UnexpectedToken,"ILLEGAL");}++index;ch = scanHexEscape("u");if(!ch || ch === "\\" || !syntax$$.isIdentifierPart(ch.charCodeAt(0))){throwError({},Messages.UnexpectedToken,"ILLEGAL");}id += ch;}}return id;}function getIdentifier(){var start,ch;start = index++;while(index < length) {ch = source.charCodeAt(index);if(ch === 0x5C){ // Blackslash (U+005C) marks Unicode escape sequence.
    index = start;return getEscapedIdentifier();}if(syntax$$.isIdentifierPart(ch)){++index;}else {break;}}return source.slice(start,index);}function scanIdentifier(){var start,id,type;start = index; // Backslash (U+005C) starts an escaped character.
    id = source.charCodeAt(index) === 0x5C?getEscapedIdentifier():getIdentifier(); // There is no keyword or literal with only one character.
    // Thus, it must be an identifier.
    if(id.length === 1){type = Token.Identifier;}else if(syntax$$.isKeyword(id,strict,extra.ecmaFeatures)){type = Token.Keyword;}else if(id === "null"){type = Token.NullLiteral;}else if(id === "true" || id === "false"){type = Token.BooleanLiteral;}else {type = Token.Identifier;}return {type:type,value:id,lineNumber:lineNumber,lineStart:lineStart,range:[start,index]};} // 7.7 Punctuators
    function scanPunctuator(){var start=index,code=source.charCodeAt(index),code2,ch1=source[index],ch2,ch3,ch4;switch(code){ // Check for most common single-character punctuators.
    case 40: // ( open bracket
    case 41: // ) close bracket
    case 59: // ; semicolon
    case 44: // , comma
    case 91: // [
    case 93: // ]
    case 58: // :
    case 63: // ?
    case 126: // ~
    ++index;if(extra.tokenize && code === 40){extra.openParenToken = extra.tokens.length;}return {type:Token.Punctuator,value:String.fromCharCode(code),lineNumber:lineNumber,lineStart:lineStart,range:[start,index]};case 123: // { open curly brace
    case 125: // } close curly brace
    ++index;if(extra.tokenize && code === 123){extra.openCurlyToken = extra.tokens.length;} // lookahead2 function can cause tokens to be scanned twice and in doing so
    // would wreck the curly stack by pushing the same token onto the stack twice.
    // curlyLastIndex ensures each token is pushed or popped exactly once
    if(index > state.curlyLastIndex){state.curlyLastIndex = index;if(code === 123){state.curlyStack.push("{");}else {state.curlyStack.pop();}}return {type:Token.Punctuator,value:String.fromCharCode(code),lineNumber:lineNumber,lineStart:lineStart,range:[start,index]};default:code2 = source.charCodeAt(index + 1); // "=" (char #61) marks an assignment or comparison operator.
    if(code2 === 61){switch(code){case 37: // %
    case 38: // &
    case 42: // *:
    case 43: // +
    case 45: // -
    case 47: // /
    case 60: // <
    case 62: // >
    case 94: // ^
    case 124: // |
    index += 2;return {type:Token.Punctuator,value:String.fromCharCode(code) + String.fromCharCode(code2),lineNumber:lineNumber,lineStart:lineStart,range:[start,index]};case 33: // !
    case 61: // =
    index += 2; // !== and ===
    if(source.charCodeAt(index) === 61){++index;}return {type:Token.Punctuator,value:source.slice(start,index),lineNumber:lineNumber,lineStart:lineStart,range:[start,index]};default:break;}}break;} // Peek more characters.
    ch2 = source[index + 1];ch3 = source[index + 2];ch4 = source[index + 3]; // 4-character punctuator: >>>=
    if(ch1 === ">" && ch2 === ">" && ch3 === ">"){if(ch4 === "="){index += 4;return {type:Token.Punctuator,value:">>>=",lineNumber:lineNumber,lineStart:lineStart,range:[start,index]};}} // 3-character punctuators: === !== >>> <<= >>=
    if(ch1 === ">" && ch2 === ">" && ch3 === ">"){index += 3;return {type:Token.Punctuator,value:">>>",lineNumber:lineNumber,lineStart:lineStart,range:[start,index]};}if(ch1 === "<" && ch2 === "<" && ch3 === "="){index += 3;return {type:Token.Punctuator,value:"<<=",lineNumber:lineNumber,lineStart:lineStart,range:[start,index]};}if(ch1 === ">" && ch2 === ">" && ch3 === "="){index += 3;return {type:Token.Punctuator,value:">>=",lineNumber:lineNumber,lineStart:lineStart,range:[start,index]};} // The ... operator (spread, restParams, JSX, etc.)
    if(extra.ecmaFeatures.spread || extra.ecmaFeatures.restParams || extra.ecmaFeatures.experimentalObjectRestSpread || extra.ecmaFeatures.jsx && state.inJSXSpreadAttribute){if(ch1 === "." && ch2 === "." && ch3 === "."){index += 3;return {type:Token.Punctuator,value:"...",lineNumber:lineNumber,lineStart:lineStart,range:[start,index]};}} // Other 2-character punctuators: ++ -- << >> && ||
    if(ch1 === ch2 && "+-<>&|".indexOf(ch1) >= 0){index += 2;return {type:Token.Punctuator,value:ch1 + ch2,lineNumber:lineNumber,lineStart:lineStart,range:[start,index]};} // the => for arrow functions
    if(extra.ecmaFeatures.arrowFunctions){if(ch1 === "=" && ch2 === ">"){index += 2;return {type:Token.Punctuator,value:"=>",lineNumber:lineNumber,lineStart:lineStart,range:[start,index]};}}if("<>=!+-*%&|^/".indexOf(ch1) >= 0){++index;return {type:Token.Punctuator,value:ch1,lineNumber:lineNumber,lineStart:lineStart,range:[start,index]};}if(ch1 === "."){++index;return {type:Token.Punctuator,value:ch1,lineNumber:lineNumber,lineStart:lineStart,range:[start,index]};}throwError({},Messages.UnexpectedToken,"ILLEGAL");} // 7.8.3 Numeric Literals
    function scanHexLiteral(start){var number="";while(index < length) {if(!syntax$$.isHexDigit(source[index])){break;}number += source[index++];}if(number.length === 0){throwError({},Messages.UnexpectedToken,"ILLEGAL");}if(syntax$$.isIdentifierStart(source.charCodeAt(index))){throwError({},Messages.UnexpectedToken,"ILLEGAL");}return {type:Token.NumericLiteral,value:parseInt("0x" + number,16),lineNumber:lineNumber,lineStart:lineStart,range:[start,index]};}function scanBinaryLiteral(start){var ch,number="";while(index < length) {ch = source[index];if(ch !== "0" && ch !== "1"){break;}number += source[index++];}if(number.length === 0){ // only 0b or 0B
    throwError({},Messages.UnexpectedToken,"ILLEGAL");}if(index < length){ch = source.charCodeAt(index); /* istanbul ignore else */if(syntax$$.isIdentifierStart(ch) || syntax$$.isDecimalDigit(ch)){throwError({},Messages.UnexpectedToken,"ILLEGAL");}}return {type:Token.NumericLiteral,value:parseInt(number,2),lineNumber:lineNumber,lineStart:lineStart,range:[start,index]};}function scanOctalLiteral(prefix,start){var number,octal;if(syntax$$.isOctalDigit(prefix)){octal = true;number = "0" + source[index++];}else {octal = false;++index;number = "";}while(index < length) {if(!syntax$$.isOctalDigit(source[index])){break;}number += source[index++];}if(!octal && number.length === 0){ // only 0o or 0O
    throwError({},Messages.UnexpectedToken,"ILLEGAL");}if(syntax$$.isIdentifierStart(source.charCodeAt(index)) || syntax$$.isDecimalDigit(source.charCodeAt(index))){throwError({},Messages.UnexpectedToken,"ILLEGAL");}return {type:Token.NumericLiteral,value:parseInt(number,8),octal:octal,lineNumber:lineNumber,lineStart:lineStart,range:[start,index]};}function scanNumericLiteral(){var number,start,ch;ch = source[index];assert(syntax$$.isDecimalDigit(ch.charCodeAt(0)) || ch === ".","Numeric literal must start with a decimal digit or a decimal point");start = index;number = "";if(ch !== "."){number = source[index++];ch = source[index]; // Hex number starts with "0x".
    // Octal number starts with "0".
    if(number === "0"){if(ch === "x" || ch === "X"){++index;return scanHexLiteral(start);} // Binary number in ES6 starts with '0b'
    if(extra.ecmaFeatures.binaryLiterals){if(ch === "b" || ch === "B"){++index;return scanBinaryLiteral(start);}}if(extra.ecmaFeatures.octalLiterals && (ch === "o" || ch === "O") || syntax$$.isOctalDigit(ch)){return scanOctalLiteral(ch,start);} // decimal number starts with "0" such as "09" is illegal.
    if(ch && syntax$$.isDecimalDigit(ch.charCodeAt(0))){throwError({},Messages.UnexpectedToken,"ILLEGAL");}}while(syntax$$.isDecimalDigit(source.charCodeAt(index))) {number += source[index++];}ch = source[index];}if(ch === "."){number += source[index++];while(syntax$$.isDecimalDigit(source.charCodeAt(index))) {number += source[index++];}ch = source[index];}if(ch === "e" || ch === "E"){number += source[index++];ch = source[index];if(ch === "+" || ch === "-"){number += source[index++];}if(syntax$$.isDecimalDigit(source.charCodeAt(index))){while(syntax$$.isDecimalDigit(source.charCodeAt(index))) {number += source[index++];}}else {throwError({},Messages.UnexpectedToken,"ILLEGAL");}}if(syntax$$.isIdentifierStart(source.charCodeAt(index))){throwError({},Messages.UnexpectedToken,"ILLEGAL");}return {type:Token.NumericLiteral,value:parseFloat(number),lineNumber:lineNumber,lineStart:lineStart,range:[start,index]};} /**
     * Scan a string escape sequence and return its special character.
     * @param {string} ch The starting character of the given sequence.
     * @returns {Object} An object containing the character and a flag
     * if the escape sequence was an octal.
     * @private
     */function scanEscapeSequence(ch){var code,unescaped,restore,escapedCh,octal=false; // An escape sequence cannot be empty
    if(!ch){throwError({},Messages.UnexpectedToken,"ILLEGAL");}if(syntax$$.isLineTerminator(ch.charCodeAt(0))){++lineNumber;if(ch === "\r" && source[index] === "\n"){++index;}lineStart = index;escapedCh = "";}else if(ch === "u" && source[index] === "{"){ // Handle ES6 extended unicode code point escape sequences.
    if(extra.ecmaFeatures.unicodeCodePointEscapes){++index;escapedCh = scanUnicodeCodePointEscape();}else {throwError({},Messages.UnexpectedToken,"ILLEGAL");}}else if(ch === "u" || ch === "x"){ // Handle other unicode and hex codes normally
    restore = index;unescaped = scanHexEscape(ch);if(unescaped){escapedCh = unescaped;}else {index = restore;escapedCh = ch;}}else if(ch === "n"){escapedCh = "\n";}else if(ch === "r"){escapedCh = "\r";}else if(ch === "t"){escapedCh = "\t";}else if(ch === "b"){escapedCh = "\b";}else if(ch === "f"){escapedCh = "\f";}else if(ch === "v"){escapedCh = "\v";}else if(syntax$$.isOctalDigit(ch)){code = "01234567".indexOf(ch); // \0 is not octal escape sequence
    if(code !== 0){octal = true;}if(index < length && syntax$$.isOctalDigit(source[index])){octal = true;code = code * 8 + "01234567".indexOf(source[index++]); // 3 digits are only allowed when string starts with 0, 1, 2, 3
    if("0123".indexOf(ch) >= 0 && index < length && syntax$$.isOctalDigit(source[index])){code = code * 8 + "01234567".indexOf(source[index++]);}}escapedCh = String.fromCharCode(code);}else {escapedCh = ch;}return {ch:escapedCh,octal:octal};}function scanStringLiteral(){var str="",ch,escapedSequence,octal=false,start=index,startLineNumber=lineNumber,startLineStart=lineStart,quote=source[index];assert(quote === "'" || quote === "\"","String literal must starts with a quote");++index;while(index < length) {ch = source[index++];if(syntax$$.isLineTerminator(ch.charCodeAt(0))){break;}else if(ch === quote){quote = "";break;}else if(ch === "\\"){ch = source[index++];escapedSequence = scanEscapeSequence(ch);str += escapedSequence.ch;octal = escapedSequence.octal || octal;}else {str += ch;}}if(quote !== ""){throwError({},Messages.UnexpectedToken,"ILLEGAL");}return {type:Token.StringLiteral,value:str,octal:octal,startLineNumber:startLineNumber,startLineStart:startLineStart,lineNumber:lineNumber,lineStart:lineStart,range:[start,index]};} /**
     * Scan a template string and return a token. This scans both the first and
     * subsequent pieces of a template string and assumes that the first backtick
     * or the closing } have already been scanned.
     * @returns {Token} The template string token.
     * @private
     */function scanTemplate(){var cooked="",ch,escapedSequence,start=index,terminated=false,tail=false,head=source[index] === "`";++index;while(index < length) {ch = source[index++];if(ch === "`"){tail = true;terminated = true;break;}else if(ch === "$"){if(source[index] === "{"){++index;terminated = true;break;}cooked += ch;}else if(ch === "\\"){ch = source[index++];escapedSequence = scanEscapeSequence(ch);if(escapedSequence.octal){throwError({},Messages.TemplateOctalLiteral);}cooked += escapedSequence.ch;}else if(syntax$$.isLineTerminator(ch.charCodeAt(0))){++lineNumber;if(ch === "\r" && source[index] === "\n"){++index;}lineStart = index;cooked += "\n";}else {cooked += ch;}}if(!terminated){throwError({},Messages.UnexpectedToken,"ILLEGAL");}if(index > state.curlyLastIndex){state.curlyLastIndex = index;if(!tail){state.curlyStack.push("template");}if(!head){state.curlyStack.pop();}}return {type:Token.Template,value:{cooked:cooked,raw:source.slice(start + 1,index - (tail?1:2))},head:head,tail:tail,lineNumber:lineNumber,lineStart:lineStart,range:[start,index]};}function testRegExp(pattern,flags){var tmp=pattern,validFlags="gmsi";if(extra.ecmaFeatures.regexYFlag){validFlags += "y";}if(extra.ecmaFeatures.regexUFlag){validFlags += "u";}if(!RegExp("^[" + validFlags + "]*$").test(flags)){throwError({},Messages.InvalidRegExpFlag);}if(flags.indexOf("u") >= 0){ // Replace each astral symbol and every Unicode code point
    // escape sequence with a single ASCII symbol to avoid throwing on
    // regular expressions that are only valid in combination with the
    // `/u` flag.
    // Note: replacing with the ASCII symbol `x` might cause false
    // negatives in unlikely scenarios. For example, `[\u{61}-b]` is a
    // perfectly valid pattern that is equivalent to `[a-b]`, but it
    // would be replaced by `[x-b]` which throws an error.
    tmp = tmp.replace(/\\u\{([0-9a-fA-F]+)\}/g,function($0,$1){if(parseInt($1,16) <= 0x10FFFF){return "x";}throwError({},Messages.InvalidRegExp);}).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"x");} // First, detect invalid regular expressions.
    try{RegExp(tmp);}catch(e) {throwError({},Messages.InvalidRegExp);} // Return a regular expression object for this pattern-flag pair, or
    // `null` in case the current environment doesn't support the flags it
    // uses.
    try{return new RegExp(pattern,flags);}catch(exception) {return null;}}function scanRegExpBody(){var ch,str,classMarker,terminated,body;ch = source[index];assert(ch === "/","Regular expression literal must start with a slash");str = source[index++];classMarker = false;terminated = false;while(index < length) {ch = source[index++];str += ch;if(ch === "\\"){ch = source[index++]; // ECMA-262 7.8.5
    if(syntax$$.isLineTerminator(ch.charCodeAt(0))){throwError({},Messages.UnterminatedRegExp);}str += ch;}else if(syntax$$.isLineTerminator(ch.charCodeAt(0))){throwError({},Messages.UnterminatedRegExp);}else if(classMarker){if(ch === "]"){classMarker = false;}}else {if(ch === "/"){terminated = true;break;}else if(ch === "["){classMarker = true;}}}if(!terminated){throwError({},Messages.UnterminatedRegExp);} // Exclude leading and trailing slash.
    body = str.substr(1,str.length - 2);return {value:body,literal:str};}function scanRegExpFlags(){var ch,str,flags,restore;str = "";flags = "";while(index < length) {ch = source[index];if(!syntax$$.isIdentifierPart(ch.charCodeAt(0))){break;}++index;if(ch === "\\" && index < length){ch = source[index];if(ch === "u"){++index;restore = index;ch = scanHexEscape("u");if(ch){flags += ch;for(str += "\\u";restore < index;++restore) {str += source[restore];}}else {index = restore;flags += "u";str += "\\u";}throwErrorTolerant({},Messages.UnexpectedToken,"ILLEGAL");}else {str += "\\";throwErrorTolerant({},Messages.UnexpectedToken,"ILLEGAL");}}else {flags += ch;str += ch;}}return {value:flags,literal:str};}function scanRegExp(){var start,body,flags,value;lookahead = null;skipComment();start = index;body = scanRegExpBody();flags = scanRegExpFlags();value = testRegExp(body.value,flags.value);if(extra.tokenize){return {type:Token.RegularExpression,value:value,regex:{pattern:body.value,flags:flags.value},lineNumber:lineNumber,lineStart:lineStart,range:[start,index]};}return {literal:body.literal + flags.literal,value:value,regex:{pattern:body.value,flags:flags.value},range:[start,index]};}function collectRegex(){var pos,loc,regex,token;skipComment();pos = index;loc = {start:{line:lineNumber,column:index - lineStart}};regex = scanRegExp();loc.end = {line:lineNumber,column:index - lineStart}; /* istanbul ignore next */if(!extra.tokenize){ // Pop the previous token, which is likely "/" or "/="
    if(extra.tokens.length > 0){token = extra.tokens[extra.tokens.length - 1];if(token.range[0] === pos && token.type === "Punctuator"){if(token.value === "/" || token.value === "/="){extra.tokens.pop();}}}extra.tokens.push({type:"RegularExpression",value:regex.literal,regex:regex.regex,range:[pos,index],loc:loc});}return regex;}function isIdentifierName(token){return token.type === Token.Identifier || token.type === Token.Keyword || token.type === Token.BooleanLiteral || token.type === Token.NullLiteral;}function advanceSlash(){var prevToken,checkToken; // Using the following algorithm:
    // https://github.com/mozilla/sweet.js/wiki/design
    prevToken = extra.tokens[extra.tokens.length - 1];if(!prevToken){ // Nothing before that: it cannot be a division.
    return collectRegex();}if(prevToken.type === "Punctuator"){if(prevToken.value === "]"){return scanPunctuator();}if(prevToken.value === ")"){checkToken = extra.tokens[extra.openParenToken - 1];if(checkToken && checkToken.type === "Keyword" && (checkToken.value === "if" || checkToken.value === "while" || checkToken.value === "for" || checkToken.value === "with")){return collectRegex();}return scanPunctuator();}if(prevToken.value === "}"){ // Dividing a function by anything makes little sense,
    // but we have to check for that.
    if(extra.tokens[extra.openCurlyToken - 3] && extra.tokens[extra.openCurlyToken - 3].type === "Keyword"){ // Anonymous function.
    checkToken = extra.tokens[extra.openCurlyToken - 4];if(!checkToken){return scanPunctuator();}}else if(extra.tokens[extra.openCurlyToken - 4] && extra.tokens[extra.openCurlyToken - 4].type === "Keyword"){ // Named function.
    checkToken = extra.tokens[extra.openCurlyToken - 5];if(!checkToken){return collectRegex();}}else {return scanPunctuator();} // checkToken determines whether the function is
    // a declaration or an expression.
    if(FnExprTokens.indexOf(checkToken.value) >= 0){ // It is an expression.
    return scanPunctuator();} // It is a declaration.
    return collectRegex();}return collectRegex();}if(prevToken.type === "Keyword"){return collectRegex();}return scanPunctuator();}function advance(){var ch,allowJSX=extra.ecmaFeatures.jsx,allowTemplateStrings=extra.ecmaFeatures.templateStrings; /*
         * If JSX isn't allowed or JSX is allowed and we're not inside an JSX child,
         * then skip any comments.
         */if(!allowJSX || !state.inJSXChild){skipComment();}if(index >= length){return {type:Token.EOF,lineNumber:lineNumber,lineStart:lineStart,range:[index,index]};} // if inside an JSX child, then abort regular tokenization
    if(allowJSX && state.inJSXChild){return advanceJSXChild();}ch = source.charCodeAt(index); // Very common: ( and ) and ;
    if(ch === 0x28 || ch === 0x29 || ch === 0x3B){return scanPunctuator();} // String literal starts with single quote (U+0027) or double quote (U+0022).
    if(ch === 0x27 || ch === 0x22){if(allowJSX && state.inJSXTag){return scanJSXStringLiteral();}return scanStringLiteral();}if(allowJSX && state.inJSXTag && syntax$$.isJSXIdentifierStart(ch)){return scanJSXIdentifier();} // Template strings start with backtick (U+0096) or closing curly brace (125) and backtick.
    if(allowTemplateStrings){ // template strings start with backtick (96) or open curly (125) but only if the open
    // curly closes a previously opened curly from a template.
    if(ch === 96 || ch === 125 && state.curlyStack[state.curlyStack.length - 1] === "template"){return scanTemplate();}}if(syntax$$.isIdentifierStart(ch)){return scanIdentifier();} // Dot (.) U+002E can also start a floating-point number, hence the need
    // to check the next character.
    if(ch === 0x2E){if(syntax$$.isDecimalDigit(source.charCodeAt(index + 1))){return scanNumericLiteral();}return scanPunctuator();}if(syntax$$.isDecimalDigit(ch)){return scanNumericLiteral();} // Slash (/) U+002F can also start a regex.
    if(extra.tokenize && ch === 0x2F){return advanceSlash();}return scanPunctuator();}function collectToken(){var loc,token,range,value,entry,allowJSX=extra.ecmaFeatures.jsx; /* istanbul ignore else */if(!allowJSX || !state.inJSXChild){skipComment();}loc = {start:{line:lineNumber,column:index - lineStart}};token = advance();loc.end = {line:lineNumber,column:index - lineStart};if(token.type !== Token.EOF){range = [token.range[0],token.range[1]];value = source.slice(token.range[0],token.range[1]);entry = {type:TokenName[token.type],value:value,range:range,loc:loc};if(token.regex){entry.regex = {pattern:token.regex.pattern,flags:token.regex.flags};}extra.tokens.push(entry);}return token;}function lex(){var token;token = lookahead;index = token.range[1];lineNumber = token.lineNumber;lineStart = token.lineStart;lookahead = typeof extra.tokens !== "undefined"?collectToken():advance();index = token.range[1];lineNumber = token.lineNumber;lineStart = token.lineStart;return token;}function peek(){var pos,line,start;pos = index;line = lineNumber;start = lineStart;lookahead = typeof extra.tokens !== "undefined"?collectToken():advance();index = pos;lineNumber = line;lineStart = start;}function lookahead2(){var adv,pos,line,start,result; // If we are collecting the tokens, don't grab the next one yet.
    /* istanbul ignore next */adv = typeof extra.advance === "function"?extra.advance:advance;pos = index;line = lineNumber;start = lineStart; // Scan for the next immediate token.
    /* istanbul ignore if */if(lookahead === null){lookahead = adv();}index = lookahead.range[1];lineNumber = lookahead.lineNumber;lineStart = lookahead.lineStart; // Grab the token right after.
    result = adv();index = pos;lineNumber = line;lineStart = start;return result;} //------------------------------------------------------------------------------
    // JSX
    //------------------------------------------------------------------------------
    function getQualifiedJSXName(object){if(object.type === astNodeTypes$$.JSXIdentifier){return object.name;}if(object.type === astNodeTypes$$.JSXNamespacedName){return object.namespace.name + ":" + object.name.name;} /* istanbul ignore else */if(object.type === astNodeTypes$$.JSXMemberExpression){return getQualifiedJSXName(object.object) + "." + getQualifiedJSXName(object.property);} /* istanbul ignore next */throwUnexpected(object);}function scanJSXIdentifier(){var ch,start,value="";start = index;while(index < length) {ch = source.charCodeAt(index);if(!syntax$$.isJSXIdentifierPart(ch)){break;}value += source[index++];}return {type:Token.JSXIdentifier,value:value,lineNumber:lineNumber,lineStart:lineStart,range:[start,index]};}function scanJSXEntity(){var ch,str="",start=index,count=0,code;ch = source[index];assert(ch === "&","Entity must start with an ampersand");index++;while(index < length && count++ < 10) {ch = source[index++];if(ch === ";"){break;}str += ch;} // Well-formed entity (ending was found).
    if(ch === ";"){ // Numeric entity.
    if(str[0] === "#"){if(str[1] === "x"){code = +("0" + str.substr(1));}else { // Removing leading zeros in order to avoid treating as octal in old browsers.
    code = +str.substr(1).replace(Regex.LeadingZeros,"");}if(!isNaN(code)){return String.fromCharCode(code);} /* istanbul ignore else */}else if(XHTMLEntities[str]){return XHTMLEntities[str];}} // Treat non-entity sequences as regular text.
    index = start + 1;return "&";}function scanJSXText(stopChars){var ch,str="",start;start = index;while(index < length) {ch = source[index];if(stopChars.indexOf(ch) !== -1){break;}if(ch === "&"){str += scanJSXEntity();}else {index++;if(ch === "\r" && source[index] === "\n"){str += ch;ch = source[index];index++;}if(syntax$$.isLineTerminator(ch.charCodeAt(0))){++lineNumber;lineStart = index;}str += ch;}}return {type:Token.JSXText,value:str,lineNumber:lineNumber,lineStart:lineStart,range:[start,index]};}function scanJSXStringLiteral(){var innerToken,quote,start;quote = source[index];assert(quote === "\"" || quote === "'","String literal must starts with a quote");start = index;++index;innerToken = scanJSXText([quote]);if(quote !== source[index]){throwError({},Messages.UnexpectedToken,"ILLEGAL");}++index;innerToken.range = [start,index];return innerToken;} /*
     * Between JSX opening and closing tags (e.g. <foo>HERE</foo>), anything that
     * is not another JSX tag and is not an expression wrapped by {} is text.
     */function advanceJSXChild(){var ch=source.charCodeAt(index); // { (123) and < (60)
    if(ch !== 123 && ch !== 60){return scanJSXText(["<","{"]);}return scanPunctuator();}function parseJSXIdentifier(){var token,marker=markerCreate();if(lookahead.type !== Token.JSXIdentifier){throwUnexpected(lookahead);}token = lex();return markerApply(marker,astNodeFactory$$.createJSXIdentifier(token.value));}function parseJSXNamespacedName(){var namespace,name,marker=markerCreate();namespace = parseJSXIdentifier();expect(":");name = parseJSXIdentifier();return markerApply(marker,astNodeFactory$$.createJSXNamespacedName(namespace,name));}function parseJSXMemberExpression(){var marker=markerCreate(),expr=parseJSXIdentifier();while(match(".")) {lex();expr = markerApply(marker,astNodeFactory$$.createJSXMemberExpression(expr,parseJSXIdentifier()));}return expr;}function parseJSXElementName(){if(lookahead2().value === ":"){return parseJSXNamespacedName();}if(lookahead2().value === "."){return parseJSXMemberExpression();}return parseJSXIdentifier();}function parseJSXAttributeName(){if(lookahead2().value === ":"){return parseJSXNamespacedName();}return parseJSXIdentifier();}function parseJSXAttributeValue(){var value,marker;if(match("{")){value = parseJSXExpressionContainer();if(value.expression.type === astNodeTypes$$.JSXEmptyExpression){throwError(value,"JSX attributes must only be assigned a non-empty " + "expression");}}else if(match("<")){value = parseJSXElement();}else if(lookahead.type === Token.JSXText){marker = markerCreate();value = markerApply(marker,astNodeFactory$$.createLiteralFromSource(lex(),source));}else {throwError({},Messages.InvalidJSXAttributeValue);}return value;}function parseJSXEmptyExpression(){var marker=markerCreatePreserveWhitespace();while(source.charAt(index) !== "}") {index++;}return markerApply(marker,astNodeFactory$$.createJSXEmptyExpression());}function parseJSXExpressionContainer(){var expression,origInJSXChild,origInJSXTag,marker=markerCreate();origInJSXChild = state.inJSXChild;origInJSXTag = state.inJSXTag;state.inJSXChild = false;state.inJSXTag = false;expect("{");if(match("}")){expression = parseJSXEmptyExpression();}else {expression = parseExpression();}state.inJSXChild = origInJSXChild;state.inJSXTag = origInJSXTag;expect("}");return markerApply(marker,astNodeFactory$$.createJSXExpressionContainer(expression));}function parseJSXSpreadAttribute(){var expression,origInJSXChild,origInJSXTag,marker=markerCreate();origInJSXChild = state.inJSXChild;origInJSXTag = state.inJSXTag;state.inJSXChild = false;state.inJSXTag = false;state.inJSXSpreadAttribute = true;expect("{");expect("...");state.inJSXSpreadAttribute = false;expression = parseAssignmentExpression();state.inJSXChild = origInJSXChild;state.inJSXTag = origInJSXTag;expect("}");return markerApply(marker,astNodeFactory$$.createJSXSpreadAttribute(expression));}function parseJSXAttribute(){var name,marker;if(match("{")){return parseJSXSpreadAttribute();}marker = markerCreate();name = parseJSXAttributeName(); // HTML empty attribute
    if(match("=")){lex();return markerApply(marker,astNodeFactory$$.createJSXAttribute(name,parseJSXAttributeValue()));}return markerApply(marker,astNodeFactory$$.createJSXAttribute(name));}function parseJSXChild(){var token,marker;if(match("{")){token = parseJSXExpressionContainer();}else if(lookahead.type === Token.JSXText){marker = markerCreatePreserveWhitespace();token = markerApply(marker,astNodeFactory$$.createLiteralFromSource(lex(),source));}else {token = parseJSXElement();}return token;}function parseJSXClosingElement(){var name,origInJSXChild,origInJSXTag,marker=markerCreate();origInJSXChild = state.inJSXChild;origInJSXTag = state.inJSXTag;state.inJSXChild = false;state.inJSXTag = true;expect("<");expect("/");name = parseJSXElementName(); // Because advance() (called by lex() called by expect()) expects there
    // to be a valid token after >, it needs to know whether to look for a
    // standard JS token or an JSX text node
    state.inJSXChild = origInJSXChild;state.inJSXTag = origInJSXTag;expect(">");return markerApply(marker,astNodeFactory$$.createJSXClosingElement(name));}function parseJSXOpeningElement(){var name,attributes=[],selfClosing=false,origInJSXChild,origInJSXTag,marker=markerCreate();origInJSXChild = state.inJSXChild;origInJSXTag = state.inJSXTag;state.inJSXChild = false;state.inJSXTag = true;expect("<");name = parseJSXElementName();while(index < length && lookahead.value !== "/" && lookahead.value !== ">") {attributes.push(parseJSXAttribute());}state.inJSXTag = origInJSXTag;if(lookahead.value === "/"){expect("/"); // Because advance() (called by lex() called by expect()) expects
    // there to be a valid token after >, it needs to know whether to
    // look for a standard JS token or an JSX text node
    state.inJSXChild = origInJSXChild;expect(">");selfClosing = true;}else {state.inJSXChild = true;expect(">");}return markerApply(marker,astNodeFactory$$.createJSXOpeningElement(name,attributes,selfClosing));}function parseJSXElement(){var openingElement,closingElement=null,children=[],origInJSXChild,origInJSXTag,marker=markerCreate();origInJSXChild = state.inJSXChild;origInJSXTag = state.inJSXTag;openingElement = parseJSXOpeningElement();if(!openingElement.selfClosing){while(index < length) {state.inJSXChild = false; // Call lookahead2() with inJSXChild = false because </ should not be considered in the child
    if(lookahead.value === "<" && lookahead2().value === "/"){break;}state.inJSXChild = true;children.push(parseJSXChild());}state.inJSXChild = origInJSXChild;state.inJSXTag = origInJSXTag;closingElement = parseJSXClosingElement();if(getQualifiedJSXName(closingElement.name) !== getQualifiedJSXName(openingElement.name)){throwError({},Messages.ExpectedJSXClosingTag,getQualifiedJSXName(openingElement.name));}} /*
         * When (erroneously) writing two adjacent tags like
         *
         *     var x = <div>one</div><div>two</div>;
         *
         * the default error message is a bit incomprehensible. Since it"s
         * rarely (never?) useful to write a less-than sign after an JSX
         * element, we disallow it here in the parser in order to provide a
         * better error message. (In the rare case that the less-than operator
         * was intended, the left tag can be wrapped in parentheses.)
         */if(!origInJSXChild && match("<")){throwError(lookahead,Messages.AdjacentJSXElements);}return markerApply(marker,astNodeFactory$$.createJSXElement(openingElement,closingElement,children));} //------------------------------------------------------------------------------
    // Location markers
    //------------------------------------------------------------------------------
    /**
     * Applies location information to the given node by using the given marker.
     * The marker indicates the point at which the node is said to have to begun
     * in the source code.
     * @param {Object} marker The marker to use for the node.
     * @param {ASTNode} node The AST node to apply location information to.
     * @returns {ASTNode} The node that was passed in.
     * @private
     */function markerApply(marker,node){ // add range information to the node if present
    if(extra.range){node.range = [marker.offset,index];} // add location information the node if present
    if(extra.loc){node.loc = {start:{line:marker.line,column:marker.col},end:{line:lineNumber,column:index - lineStart}}; // Attach extra.source information to the location, if present
    if(extra.source){node.loc.source = extra.source;}} // attach leading and trailing comments if requested
    if(extra.attachComment){commentAttachment$$.processComment(node);}return node;} /**
     * Creates a location marker in the source code. Location markers are used for
     * tracking where tokens and nodes appear in the source code.
     * @returns {Object} A marker object or undefined if the parser doesn't have
     *      any location information.
     * @private
     */function markerCreate(){if(!extra.loc && !extra.range){return undefined;}skipComment();return {offset:index,line:lineNumber,col:index - lineStart};} /**
     * Creates a location marker in the source code. Location markers are used for
     * tracking where tokens and nodes appear in the source code. This method
     * doesn't skip comments or extra whitespace which is important for JSX.
     * @returns {Object} A marker object or undefined if the parser doesn't have
     *      any location information.
     * @private
     */function markerCreatePreserveWhitespace(){if(!extra.loc && !extra.range){return undefined;}return {offset:index,line:lineNumber,col:index - lineStart};} //------------------------------------------------------------------------------
    // Syntax Tree Delegate
    //------------------------------------------------------------------------------
    // Return true if there is a line terminator before the next token.
    function peekLineTerminator(){var pos,line,start,found;pos = index;line = lineNumber;start = lineStart;skipComment();found = lineNumber !== line;index = pos;lineNumber = line;lineStart = start;return found;} // Throw an exception
    function throwError(token,messageFormat){var error,args=Array.prototype.slice.call(arguments,2),msg=messageFormat.replace(/%(\d)/g,function(whole,index){assert(index < args.length,"Message reference must be in range");return args[index];});if(typeof token.lineNumber === "number"){error = new Error("Line " + token.lineNumber + ": " + msg);error.index = token.range[0];error.lineNumber = token.lineNumber;error.column = token.range[0] - token.lineStart + 1;}else {error = new Error("Line " + lineNumber + ": " + msg);error.index = index;error.lineNumber = lineNumber;error.column = index - lineStart + 1;}error.description = msg;throw error;}function throwErrorTolerant(){try{throwError.apply(null,arguments);}catch(e) {if(extra.errors){extra.errors.push(e);}else {throw e;}}} // Throw an exception because of the token.
    function throwUnexpected(token){if(token.type === Token.EOF){throwError(token,Messages.UnexpectedEOS);}if(token.type === Token.NumericLiteral){throwError(token,Messages.UnexpectedNumber);}if(token.type === Token.StringLiteral || token.type === Token.JSXText){throwError(token,Messages.UnexpectedString);}if(token.type === Token.Identifier){throwError(token,Messages.UnexpectedIdentifier);}if(token.type === Token.Keyword){if(syntax$$.isFutureReservedWord(token.value)){throwError(token,Messages.UnexpectedReserved);}else if(strict && syntax$$.isStrictModeReservedWord(token.value,extra.ecmaFeatures)){throwErrorTolerant(token,Messages.StrictReservedWord);return;}throwError(token,Messages.UnexpectedToken,token.value);}if(token.type === Token.Template){throwError(token,Messages.UnexpectedTemplate,token.value.raw);} // BooleanLiteral, NullLiteral, or Punctuator.
    throwError(token,Messages.UnexpectedToken,token.value);} // Expect the next token to match the specified punctuator.
    // If not, an exception will be thrown.
    function expect(value){var token=lex();if(token.type !== Token.Punctuator || token.value !== value){throwUnexpected(token);}} // Expect the next token to match the specified keyword.
    // If not, an exception will be thrown.
    function expectKeyword(keyword){var token=lex();if(token.type !== Token.Keyword || token.value !== keyword){throwUnexpected(token);}} // Return true if the next token matches the specified punctuator.
    function match(value){return lookahead.type === Token.Punctuator && lookahead.value === value;} // Return true if the next token matches the specified keyword
    function matchKeyword(keyword){return lookahead.type === Token.Keyword && lookahead.value === keyword;} // Return true if the next token matches the specified contextual keyword
    // (where an identifier is sometimes a keyword depending on the context)
    function matchContextualKeyword(keyword){return lookahead.type === Token.Identifier && lookahead.value === keyword;} // Return true if the next token is an assignment operator
    function matchAssign(){var op;if(lookahead.type !== Token.Punctuator){return false;}op = lookahead.value;return op === "=" || op === "*=" || op === "/=" || op === "%=" || op === "+=" || op === "-=" || op === "<<=" || op === ">>=" || op === ">>>=" || op === "&=" || op === "^=" || op === "|=";}function consumeSemicolon(){var line; // Catch the very common case first: immediately a semicolon (U+003B).
    if(source.charCodeAt(index) === 0x3B || match(";")){lex();return;}line = lineNumber;skipComment();if(lineNumber !== line){return;}if(lookahead.type !== Token.EOF && !match("}")){throwUnexpected(lookahead);}} // Return true if provided expression is LeftHandSideExpression
    function isLeftHandSide(expr){return expr.type === astNodeTypes$$.Identifier || expr.type === astNodeTypes$$.MemberExpression;} // 11.1.4 Array Initialiser
    function parseArrayInitialiser(){var elements=[],marker=markerCreate(),tmp;expect("[");while(!match("]")) {if(match(",")){lex(); // only get here when you have [a,,] or similar
    elements.push(null);}else {tmp = parseSpreadOrAssignmentExpression();elements.push(tmp);if(!match("]")){expect(","); // handles the common case of comma-separated values
    }}}expect("]");return markerApply(marker,astNodeFactory$$.createArrayExpression(elements));} // 11.1.5 Object Initialiser
    function parsePropertyFunction(paramInfo,options){var previousStrict=strict,previousYieldAllowed=state.yieldAllowed,generator=options?options.generator:false,body;state.yieldAllowed = generator; /*
         * Esprima uses parseConciseBody() here, which is incorrect. Object literal
         * methods must have braces.
         */body = parseFunctionSourceElements();if(strict && paramInfo.firstRestricted){throwErrorTolerant(paramInfo.firstRestricted,Messages.StrictParamName);}if(strict && paramInfo.stricted){throwErrorTolerant(paramInfo.stricted,paramInfo.message);}strict = previousStrict;state.yieldAllowed = previousYieldAllowed;return markerApply(options.marker,astNodeFactory$$.createFunctionExpression(null,paramInfo.params,body,generator,body.type !== astNodeTypes$$.BlockStatement));}function parsePropertyMethodFunction(options){var previousStrict=strict,marker=markerCreate(),params,method;strict = true;params = parseParams();if(params.stricted){throwErrorTolerant(params.stricted,params.message);}method = parsePropertyFunction(params,{generator:options?options.generator:false,marker:marker});strict = previousStrict;return method;}function parseObjectPropertyKey(){var marker=markerCreate(),token=lex(),allowObjectLiteralComputed=extra.ecmaFeatures.objectLiteralComputedProperties,expr,result; // Note: This function is called only from parseObjectProperty(), where
    // EOF and Punctuator tokens are already filtered out.
    switch(token.type){case Token.StringLiteral:case Token.NumericLiteral:if(strict && token.octal){throwErrorTolerant(token,Messages.StrictOctalLiteral);}return markerApply(marker,astNodeFactory$$.createLiteralFromSource(token,source));case Token.Identifier:case Token.BooleanLiteral:case Token.NullLiteral:case Token.Keyword:return markerApply(marker,astNodeFactory$$.createIdentifier(token.value));case Token.Punctuator:if((!state.inObjectLiteral || allowObjectLiteralComputed) && token.value === "["){ // For computed properties we should skip the [ and ], and
    // capture in marker only the assignment expression itself.
    marker = markerCreate();expr = parseAssignmentExpression();result = markerApply(marker,expr);expect("]");return result;} // no default
    }throwUnexpected(token);}function lookaheadPropertyName(){switch(lookahead.type){case Token.Identifier:case Token.StringLiteral:case Token.BooleanLiteral:case Token.NullLiteral:case Token.NumericLiteral:case Token.Keyword:return true;case Token.Punctuator:return lookahead.value === "["; // no default
    }return false;} // This function is to try to parse a MethodDefinition as defined in 14.3. But in the case of object literals,
    // it might be called at a position where there is in fact a short hand identifier pattern or a data property.
    // This can only be determined after we consumed up to the left parentheses.
    // In order to avoid back tracking, it returns `null` if the position is not a MethodDefinition and the caller
    // is responsible to visit other options.
    function tryParseMethodDefinition(token,key,computed,marker){var value,options,methodMarker;if(token.type === Token.Identifier){ // check for `get` and `set`;
    if(token.value === "get" && lookaheadPropertyName()){computed = match("[");key = parseObjectPropertyKey();methodMarker = markerCreate();expect("(");expect(")");value = parsePropertyFunction({params:[],stricted:null,firstRestricted:null,message:null},{marker:methodMarker});return markerApply(marker,astNodeFactory$$.createProperty("get",key,value,false,false,computed));}else if(token.value === "set" && lookaheadPropertyName()){computed = match("[");key = parseObjectPropertyKey();methodMarker = markerCreate();expect("(");options = {params:[],defaultCount:0,stricted:null,firstRestricted:null,paramSet:new StringMap()};if(match(")")){throwErrorTolerant(lookahead,Messages.UnexpectedToken,lookahead.value);}else {parseParam(options);}expect(")");value = parsePropertyFunction(options,{marker:methodMarker});return markerApply(marker,astNodeFactory$$.createProperty("set",key,value,false,false,computed));}}if(match("(")){value = parsePropertyMethodFunction();return markerApply(marker,astNodeFactory$$.createProperty("init",key,value,true,false,computed));} // Not a MethodDefinition.
    return null;} /**
     * Parses Generator Properties
     * @param {ASTNode} key The property key (usually an identifier).
     * @param {Object} marker The marker to use for the node.
     * @returns {ASTNode} The generator property node.
     */function parseGeneratorProperty(key,marker){var computed=lookahead.type === Token.Punctuator && lookahead.value === "[";if(!match("(")){throwUnexpected(lex());}return markerApply(marker,astNodeFactory$$.createProperty("init",key,parsePropertyMethodFunction({generator:true}),true,false,computed));} // TODO(nzakas): Update to match Esprima
    function parseObjectProperty(){var token,key,id,computed,methodMarker,options;var allowComputed=extra.ecmaFeatures.objectLiteralComputedProperties,allowMethod=extra.ecmaFeatures.objectLiteralShorthandMethods,allowShorthand=extra.ecmaFeatures.objectLiteralShorthandProperties,allowGenerators=extra.ecmaFeatures.generators,allowDestructuring=extra.ecmaFeatures.destructuring,allowSpread=extra.ecmaFeatures.experimentalObjectRestSpread,marker=markerCreate();token = lookahead;computed = token.value === "[" && token.type === Token.Punctuator;if(token.type === Token.Identifier || allowComputed && computed){id = parseObjectPropertyKey(); /*
             * Check for getters and setters. Be careful! "get" and "set" are legal
             * method names. It's only a getter or setter if followed by a space.
             */if(token.value === "get" && !(match(":") || match("(") || match(",") || match("}"))){computed = lookahead.value === "[";key = parseObjectPropertyKey();methodMarker = markerCreate();expect("(");expect(")");return markerApply(marker,astNodeFactory$$.createProperty("get",key,parsePropertyFunction({generator:false},{marker:methodMarker}),false,false,computed));}if(token.value === "set" && !(match(":") || match("(") || match(",") || match("}"))){computed = lookahead.value === "[";key = parseObjectPropertyKey();methodMarker = markerCreate();expect("(");options = {params:[],defaultCount:0,stricted:null,firstRestricted:null,paramSet:new StringMap()};if(match(")")){throwErrorTolerant(lookahead,Messages.UnexpectedToken,lookahead.value);}else {parseParam(options);}expect(")");return markerApply(marker,astNodeFactory$$.createProperty("set",key,parsePropertyFunction(options,{marker:methodMarker}),false,false,computed));} // normal property (key:value)
    if(match(":")){lex();return markerApply(marker,astNodeFactory$$.createProperty("init",id,parseAssignmentExpression(),false,false,computed));} // method shorthand (key(){...})
    if(allowMethod && match("(")){return markerApply(marker,astNodeFactory$$.createProperty("init",id,parsePropertyMethodFunction({generator:false}),true,false,computed));} // destructuring defaults (shorthand syntax)
    if(allowDestructuring && match("=")){lex();var value=parseAssignmentExpression();var prop=markerApply(marker,astNodeFactory$$.createAssignmentExpression("=",id,value));prop.type = astNodeTypes$$.AssignmentPattern;var fullProperty=astNodeFactory$$.createProperty("init",id,prop,false,true, // shorthand
    computed);return markerApply(marker,fullProperty);} /*
             * Only other possibility is that this is a shorthand property. Computed
             * properties cannot use shorthand notation, so that's a syntax error.
             * If shorthand properties aren't allow, then this is an automatic
             * syntax error. Destructuring is another case with a similar shorthand syntax.
             */if(computed || !allowShorthand && !allowDestructuring){throwUnexpected(lookahead);} // shorthand property
    return markerApply(marker,astNodeFactory$$.createProperty("init",id,id,false,true,false));} // object spread property
    if(allowSpread && match("...")){lex();return markerApply(marker,astNodeFactory$$.createExperimentalSpreadProperty(parseAssignmentExpression()));} // only possibility in this branch is a shorthand generator
    if(token.type === Token.EOF || token.type === Token.Punctuator){if(!allowGenerators || !match("*") || !allowMethod){throwUnexpected(token);}lex();id = parseObjectPropertyKey();return parseGeneratorProperty(id,marker);} /*
         * If we've made it here, then that means the property name is represented
         * by a string (i.e, { "foo": 2}). The only options here are normal
         * property with a colon or a method.
         */key = parseObjectPropertyKey(); // check for property value
    if(match(":")){lex();return markerApply(marker,astNodeFactory$$.createProperty("init",key,parseAssignmentExpression(),false,false,false));} // check for method
    if(allowMethod && match("(")){return markerApply(marker,astNodeFactory$$.createProperty("init",key,parsePropertyMethodFunction(),true,false,false));} // no other options, this is bad
    throwUnexpected(lex());}function getFieldName(key){var toString=String;if(key.type === astNodeTypes$$.Identifier){return key.name;}return toString(key.value);}function parseObjectInitialiser(){var marker=markerCreate(),allowDuplicates=extra.ecmaFeatures.objectLiteralDuplicateProperties,properties=[],property,name,propertyFn,kind,storedKind,previousInObjectLiteral=state.inObjectLiteral,kindMap=new StringMap();state.inObjectLiteral = true;expect("{");while(!match("}")) {property = parseObjectProperty();if(!property.computed && property.type.indexOf("Experimental") === -1){name = getFieldName(property.key);propertyFn = property.kind === "get"?PropertyKind.Get:PropertyKind.Set;kind = property.kind === "init"?PropertyKind.Data:propertyFn;if(kindMap.has(name)){storedKind = kindMap.get(name);if(storedKind === PropertyKind.Data){if(kind === PropertyKind.Data && name === "__proto__" && allowDuplicates){ // Duplicate '__proto__' literal properties are forbidden in ES 6
    throwErrorTolerant({},Messages.DuplicatePrototypeProperty);}else if(strict && kind === PropertyKind.Data && !allowDuplicates){ // Duplicate literal properties are only forbidden in ES 5 strict mode
    throwErrorTolerant({},Messages.StrictDuplicateProperty);}else if(kind !== PropertyKind.Data){throwErrorTolerant({},Messages.AccessorDataProperty);}}else {if(kind === PropertyKind.Data){throwErrorTolerant({},Messages.AccessorDataProperty);}else if(storedKind & kind){throwErrorTolerant({},Messages.AccessorGetSet);}}kindMap.set(name,storedKind | kind);}else {kindMap.set(name,kind);}}properties.push(property);if(!match("}")){expect(",");}}expect("}");state.inObjectLiteral = previousInObjectLiteral;return markerApply(marker,astNodeFactory$$.createObjectExpression(properties));} /**
     * Parse a template string element and return its ASTNode representation
     * @param {Object} option Parsing & scanning options
     * @param {Object} option.head True if this element is the first in the
     *                               template string, false otherwise.
     * @returns {ASTNode} The template element node with marker info applied
     * @private
     */function parseTemplateElement(option){var marker,token;if(lookahead.type !== Token.Template || option.head && !lookahead.head){throwError({},Messages.UnexpectedToken,"ILLEGAL");}marker = markerCreate();token = lex();return markerApply(marker,astNodeFactory$$.createTemplateElement({raw:token.value.raw,cooked:token.value.cooked},token.tail));} /**
     * Parse a template string literal and return its ASTNode representation
     * @returns {ASTNode} The template literal node with marker info applied
     * @private
     */function parseTemplateLiteral(){var quasi,quasis,expressions,marker=markerCreate();quasi = parseTemplateElement({head:true});quasis = [quasi];expressions = [];while(!quasi.tail) {expressions.push(parseExpression());quasi = parseTemplateElement({head:false});quasis.push(quasi);}return markerApply(marker,astNodeFactory$$.createTemplateLiteral(quasis,expressions));} // 11.1.6 The Grouping Operator
    function parseGroupExpression(){var expr;expect("(");++state.parenthesisCount;expr = parseExpression();expect(")");return expr;} // 11.1 Primary Expressions
    function parsePrimaryExpression(){var type,token,expr,marker,allowJSX=extra.ecmaFeatures.jsx,allowClasses=extra.ecmaFeatures.classes,allowSuper=allowClasses || extra.ecmaFeatures.superInFunctions;if(match("(")){return parseGroupExpression();}if(match("[")){return parseArrayInitialiser();}if(match("{")){return parseObjectInitialiser();}if(allowJSX && match("<")){return parseJSXElement();}type = lookahead.type;marker = markerCreate();if(type === Token.Identifier){expr = astNodeFactory$$.createIdentifier(lex().value);}else if(type === Token.StringLiteral || type === Token.NumericLiteral){if(strict && lookahead.octal){throwErrorTolerant(lookahead,Messages.StrictOctalLiteral);}expr = astNodeFactory$$.createLiteralFromSource(lex(),source);}else if(type === Token.Keyword){if(matchKeyword("function")){return parseFunctionExpression();}if(allowSuper && matchKeyword("super") && state.inFunctionBody){marker = markerCreate();lex();return markerApply(marker,astNodeFactory$$.createSuper());}if(matchKeyword("this")){marker = markerCreate();lex();return markerApply(marker,astNodeFactory$$.createThisExpression());}if(allowClasses && matchKeyword("class")){return parseClassExpression();}throwUnexpected(lex());}else if(type === Token.BooleanLiteral){token = lex();token.value = token.value === "true";expr = astNodeFactory$$.createLiteralFromSource(token,source);}else if(type === Token.NullLiteral){token = lex();token.value = null;expr = astNodeFactory$$.createLiteralFromSource(token,source);}else if(match("/") || match("/=")){if(typeof extra.tokens !== "undefined"){expr = astNodeFactory$$.createLiteralFromSource(collectRegex(),source);}else {expr = astNodeFactory$$.createLiteralFromSource(scanRegExp(),source);}peek();}else if(type === Token.Template){return parseTemplateLiteral();}else {throwUnexpected(lex());}return markerApply(marker,expr);} // 11.2 Left-Hand-Side Expressions
    function parseArguments(){var args=[],arg;expect("(");if(!match(")")){while(index < length) {arg = parseSpreadOrAssignmentExpression();args.push(arg);if(match(")")){break;}expect(",");}}expect(")");return args;}function parseSpreadOrAssignmentExpression(){if(match("...")){var marker=markerCreate();lex();return markerApply(marker,astNodeFactory$$.createSpreadElement(parseAssignmentExpression()));}return parseAssignmentExpression();}function parseNonComputedProperty(){var token,marker=markerCreate();token = lex();if(!isIdentifierName(token)){throwUnexpected(token);}return markerApply(marker,astNodeFactory$$.createIdentifier(token.value));}function parseNonComputedMember(){expect(".");return parseNonComputedProperty();}function parseComputedMember(){var expr;expect("[");expr = parseExpression();expect("]");return expr;}function parseNewExpression(){var callee,args,marker=markerCreate();expectKeyword("new");if(extra.ecmaFeatures.newTarget && match(".")){lex();if(lookahead.type === Token.Identifier && lookahead.value === "target"){if(state.inFunctionBody){lex();return markerApply(marker,astNodeFactory$$.createMetaProperty("new","target"));}}throwUnexpected(lookahead);}callee = parseLeftHandSideExpression();args = match("(")?parseArguments():[];return markerApply(marker,astNodeFactory$$.createNewExpression(callee,args));}function parseLeftHandSideExpressionAllowCall(){var expr,args,previousAllowIn=state.allowIn,marker=markerCreate();state.allowIn = true;expr = matchKeyword("new")?parseNewExpression():parsePrimaryExpression();state.allowIn = previousAllowIn; // only start parsing template literal if the lookahead is a head (beginning with `)
    while(match(".") || match("[") || match("(") || lookahead.type === Token.Template && lookahead.head) {if(match("(")){args = parseArguments();expr = markerApply(marker,astNodeFactory$$.createCallExpression(expr,args));}else if(match("[")){expr = markerApply(marker,astNodeFactory$$.createMemberExpression("[",expr,parseComputedMember()));}else if(match(".")){expr = markerApply(marker,astNodeFactory$$.createMemberExpression(".",expr,parseNonComputedMember()));}else {expr = markerApply(marker,astNodeFactory$$.createTaggedTemplateExpression(expr,parseTemplateLiteral()));}}return expr;}function parseLeftHandSideExpression(){var expr,previousAllowIn=state.allowIn,marker=markerCreate();expr = matchKeyword("new")?parseNewExpression():parsePrimaryExpression();state.allowIn = previousAllowIn; // only start parsing template literal if the lookahead is a head (beginning with `)
    while(match(".") || match("[") || lookahead.type === Token.Template && lookahead.head) {if(match("[")){expr = markerApply(marker,astNodeFactory$$.createMemberExpression("[",expr,parseComputedMember()));}else if(match(".")){expr = markerApply(marker,astNodeFactory$$.createMemberExpression(".",expr,parseNonComputedMember()));}else {expr = markerApply(marker,astNodeFactory$$.createTaggedTemplateExpression(expr,parseTemplateLiteral()));}}return expr;} // 11.3 Postfix Expressions
    function parsePostfixExpression(){var expr,token,marker=markerCreate();expr = parseLeftHandSideExpressionAllowCall();if(lookahead.type === Token.Punctuator){if((match("++") || match("--")) && !peekLineTerminator()){ // 11.3.1, 11.3.2
    if(strict && expr.type === astNodeTypes$$.Identifier && syntax$$.isRestrictedWord(expr.name)){throwErrorTolerant({},Messages.StrictLHSPostfix);}if(!isLeftHandSide(expr)){throwErrorTolerant({},Messages.InvalidLHSInAssignment);}token = lex();expr = markerApply(marker,astNodeFactory$$.createPostfixExpression(token.value,expr));}}return expr;} // 11.4 Unary Operators
    function parseUnaryExpression(){var token,expr,marker;if(lookahead.type !== Token.Punctuator && lookahead.type !== Token.Keyword){expr = parsePostfixExpression();}else if(match("++") || match("--")){marker = markerCreate();token = lex();expr = parseUnaryExpression(); // 11.4.4, 11.4.5
    if(strict && expr.type === astNodeTypes$$.Identifier && syntax$$.isRestrictedWord(expr.name)){throwErrorTolerant({},Messages.StrictLHSPrefix);}if(!isLeftHandSide(expr)){throwErrorTolerant({},Messages.InvalidLHSInAssignment);}expr = astNodeFactory$$.createUnaryExpression(token.value,expr);expr = markerApply(marker,expr);}else if(match("+") || match("-") || match("~") || match("!")){marker = markerCreate();token = lex();expr = parseUnaryExpression();expr = astNodeFactory$$.createUnaryExpression(token.value,expr);expr = markerApply(marker,expr);}else if(matchKeyword("delete") || matchKeyword("void") || matchKeyword("typeof")){marker = markerCreate();token = lex();expr = parseUnaryExpression();expr = astNodeFactory$$.createUnaryExpression(token.value,expr);expr = markerApply(marker,expr);if(strict && expr.operator === "delete" && expr.argument.type === astNodeTypes$$.Identifier){throwErrorTolerant({},Messages.StrictDelete);}}else {expr = parsePostfixExpression();}return expr;}function binaryPrecedence(token,allowIn){var prec=0;if(token.type !== Token.Punctuator && token.type !== Token.Keyword){return 0;}switch(token.value){case "||":prec = 1;break;case "&&":prec = 2;break;case "|":prec = 3;break;case "^":prec = 4;break;case "&":prec = 5;break;case "==":case "!=":case "===":case "!==":prec = 6;break;case "<":case ">":case "<=":case ">=":case "instanceof":prec = 7;break;case "in":prec = allowIn?7:0;break;case "<<":case ">>":case ">>>":prec = 8;break;case "+":case "-":prec = 9;break;case "*":case "/":case "%":prec = 11;break;default:break;}return prec;} // 11.5 Multiplicative Operators
    // 11.6 Additive Operators
    // 11.7 Bitwise Shift Operators
    // 11.8 Relational Operators
    // 11.9 Equality Operators
    // 11.10 Binary Bitwise Operators
    // 11.11 Binary Logical Operators
    function parseBinaryExpression(){var expr,token,prec,previousAllowIn,stack,right,operator,left,i,marker,markers;previousAllowIn = state.allowIn;state.allowIn = true;marker = markerCreate();left = parseUnaryExpression();token = lookahead;prec = binaryPrecedence(token,previousAllowIn);if(prec === 0){return left;}token.prec = prec;lex();markers = [marker,markerCreate()];right = parseUnaryExpression();stack = [left,token,right];while((prec = binaryPrecedence(lookahead,previousAllowIn)) > 0) { // Reduce: make a binary expression from the three topmost entries.
    while(stack.length > 2 && prec <= stack[stack.length - 2].prec) {right = stack.pop();operator = stack.pop().value;left = stack.pop();expr = astNodeFactory$$.createBinaryExpression(operator,left,right);markers.pop();marker = markers.pop();markerApply(marker,expr);stack.push(expr);markers.push(marker);} // Shift.
    token = lex();token.prec = prec;stack.push(token);markers.push(markerCreate());expr = parseUnaryExpression();stack.push(expr);}state.allowIn = previousAllowIn; // Final reduce to clean-up the stack.
    i = stack.length - 1;expr = stack[i];markers.pop();while(i > 1) {expr = astNodeFactory$$.createBinaryExpression(stack[i - 1].value,stack[i - 2],expr);i -= 2;marker = markers.pop();markerApply(marker,expr);}return expr;} // 11.12 Conditional Operator
    function parseConditionalExpression(){var expr,previousAllowIn,consequent,alternate,marker=markerCreate();expr = parseBinaryExpression();if(match("?")){lex();previousAllowIn = state.allowIn;state.allowIn = true;consequent = parseAssignmentExpression();state.allowIn = previousAllowIn;expect(":");alternate = parseAssignmentExpression();expr = astNodeFactory$$.createConditionalExpression(expr,consequent,alternate);markerApply(marker,expr);}return expr;} // [ES6] 14.2 Arrow Function
    function parseConciseBody(){if(match("{")){return parseFunctionSourceElements();}return parseAssignmentExpression();}function reinterpretAsCoverFormalsList(expressions){var i,len,param,params,options,allowRestParams=extra.ecmaFeatures.restParams;params = [];options = {paramSet:new StringMap()};for(i = 0,len = expressions.length;i < len;i += 1) {param = expressions[i];if(param.type === astNodeTypes$$.Identifier){params.push(param);validateParam(options,param,param.name);}else if(param.type === astNodeTypes$$.ObjectExpression || param.type === astNodeTypes$$.ArrayExpression){reinterpretAsDestructuredParameter(options,param);params.push(param);}else if(param.type === astNodeTypes$$.SpreadElement){assert(i === len - 1,"It is guaranteed that SpreadElement is last element by parseExpression");if(param.argument.type !== astNodeTypes$$.Identifier){throwError({},Messages.UnexpectedToken,"[");}if(!allowRestParams){ // can't get correct line/column here :(
    throwError({},Messages.UnexpectedToken,".");}validateParam(options,param.argument,param.argument.name);param.type = astNodeTypes$$.RestElement;params.push(param);}else if(param.type === astNodeTypes$$.RestElement){params.push(param);validateParam(options,param.argument,param.argument.name);}else if(param.type === astNodeTypes$$.AssignmentExpression){ // TODO: Find a less hacky way of doing this
    param.type = astNodeTypes$$.AssignmentPattern;delete param.operator;if(param.right.type === astNodeTypes$$.YieldExpression){if(param.right.argument){throwUnexpected(lookahead);}param.right.type = astNodeTypes$$.Identifier;param.right.name = "yield";delete param.right.argument;delete param.right.delegate;}params.push(param);validateParam(options,param.left,param.left.name);}else {return null;}}if(options.message === Messages.StrictParamDupe){throwError(strict?options.stricted:options.firstRestricted,options.message);}return {params:params,stricted:options.stricted,firstRestricted:options.firstRestricted,message:options.message};}function parseArrowFunctionExpression(options,marker){var previousStrict,body;var arrowStart=lineNumber;expect("=>");previousStrict = strict;if(lineNumber > arrowStart){throwError({},Messages.UnexpectedToken,"=>");}body = parseConciseBody();if(strict && options.firstRestricted){throwError(options.firstRestricted,options.message);}if(strict && options.stricted){throwErrorTolerant(options.stricted,options.message);}strict = previousStrict;return markerApply(marker,astNodeFactory$$.createArrowFunctionExpression(options.params,body,body.type !== astNodeTypes$$.BlockStatement));} // 11.13 Assignment Operators
    // 12.14.5 AssignmentPattern
    function reinterpretAsAssignmentBindingPattern(expr){var i,len,property,element,allowDestructuring=extra.ecmaFeatures.destructuring,allowRest=extra.ecmaFeatures.experimentalObjectRestSpread;if(!allowDestructuring){throwUnexpected(lex());}if(expr.type === astNodeTypes$$.ObjectExpression){expr.type = astNodeTypes$$.ObjectPattern;for(i = 0,len = expr.properties.length;i < len;i += 1) {property = expr.properties[i];if(allowRest && property.type === astNodeTypes$$.ExperimentalSpreadProperty){ // only allow identifiers
    if(property.argument.type !== astNodeTypes$$.Identifier){throwErrorTolerant({},"Invalid object rest.");}property.type = astNodeTypes$$.ExperimentalRestProperty;return;}if(property.kind !== "init"){throwErrorTolerant({},Messages.InvalidLHSInAssignment);}reinterpretAsAssignmentBindingPattern(property.value);}}else if(expr.type === astNodeTypes$$.ArrayExpression){expr.type = astNodeTypes$$.ArrayPattern;for(i = 0,len = expr.elements.length;i < len;i += 1) {element = expr.elements[i]; /* istanbul ignore else */if(element){reinterpretAsAssignmentBindingPattern(element);}}}else if(expr.type === astNodeTypes$$.Identifier){if(syntax$$.isRestrictedWord(expr.name)){throwErrorTolerant({},Messages.InvalidLHSInAssignment);}}else if(expr.type === astNodeTypes$$.SpreadElement){reinterpretAsAssignmentBindingPattern(expr.argument);if(expr.argument.type === astNodeTypes$$.ObjectPattern){throwErrorTolerant({},Messages.ObjectPatternAsSpread);}}else if(expr.type === "AssignmentExpression" && expr.operator === "="){expr.type = astNodeTypes$$.AssignmentPattern;}else { /* istanbul ignore else */if(expr.type !== astNodeTypes$$.MemberExpression && expr.type !== astNodeTypes$$.CallExpression && expr.type !== astNodeTypes$$.NewExpression && expr.type !== astNodeTypes$$.AssignmentPattern){throwErrorTolerant({},Messages.InvalidLHSInAssignment);}}} // 13.2.3 BindingPattern
    function reinterpretAsDestructuredParameter(options,expr){var i,len,property,element,allowDestructuring=extra.ecmaFeatures.destructuring;if(!allowDestructuring){throwUnexpected(lex());}if(expr.type === astNodeTypes$$.ObjectExpression){expr.type = astNodeTypes$$.ObjectPattern;for(i = 0,len = expr.properties.length;i < len;i += 1) {property = expr.properties[i];if(property.kind !== "init"){throwErrorTolerant({},Messages.InvalidLHSInFormalsList);}reinterpretAsDestructuredParameter(options,property.value);}}else if(expr.type === astNodeTypes$$.ArrayExpression){expr.type = astNodeTypes$$.ArrayPattern;for(i = 0,len = expr.elements.length;i < len;i += 1) {element = expr.elements[i];if(element){reinterpretAsDestructuredParameter(options,element);}}}else if(expr.type === astNodeTypes$$.Identifier){validateParam(options,expr,expr.name);}else if(expr.type === astNodeTypes$$.SpreadElement){ // BindingRestElement only allows BindingIdentifier
    if(expr.argument.type !== astNodeTypes$$.Identifier){throwErrorTolerant({},Messages.InvalidLHSInFormalsList);}validateParam(options,expr.argument,expr.argument.name);}else if(expr.type === astNodeTypes$$.AssignmentExpression && expr.operator === "="){expr.type = astNodeTypes$$.AssignmentPattern;}else if(expr.type !== astNodeTypes$$.AssignmentPattern){throwError({},Messages.InvalidLHSInFormalsList);}}function parseAssignmentExpression(){var token,left,right,node,params,marker,startsWithParen=false,oldParenthesisCount=state.parenthesisCount,allowGenerators=extra.ecmaFeatures.generators; // Note that 'yield' is treated as a keyword in strict mode, but a
    // contextual keyword (identifier) in non-strict mode, so we need
    // to use matchKeyword and matchContextualKeyword appropriately.
    if(allowGenerators && (state.yieldAllowed && matchContextualKeyword("yield") || strict && matchKeyword("yield"))){return parseYieldExpression();}marker = markerCreate();if(match("(")){token = lookahead2();if(token.value === ")" && token.type === Token.Punctuator || token.value === "..."){params = parseParams();if(!match("=>")){throwUnexpected(lex());}return parseArrowFunctionExpression(params,marker);}startsWithParen = true;} // revert to the previous lookahead style object
    token = lookahead;node = left = parseConditionalExpression();if(match("=>") && (state.parenthesisCount === oldParenthesisCount || state.parenthesisCount === oldParenthesisCount + 1)){if(node.type === astNodeTypes$$.Identifier){params = reinterpretAsCoverFormalsList([node]);}else if(node.type === astNodeTypes$$.AssignmentExpression || node.type === astNodeTypes$$.ArrayExpression || node.type === astNodeTypes$$.ObjectExpression){if(!startsWithParen){throwUnexpected(lex());}params = reinterpretAsCoverFormalsList([node]);}else if(node.type === astNodeTypes$$.SequenceExpression){params = reinterpretAsCoverFormalsList(node.expressions);}if(params){state.parenthesisCount--;return parseArrowFunctionExpression(params,marker);}}if(matchAssign()){ // 11.13.1
    if(strict && left.type === astNodeTypes$$.Identifier && syntax$$.isRestrictedWord(left.name)){throwErrorTolerant(token,Messages.StrictLHSAssignment);} // ES.next draf 11.13 Runtime Semantics step 1
    if(match("=") && (node.type === astNodeTypes$$.ObjectExpression || node.type === astNodeTypes$$.ArrayExpression)){reinterpretAsAssignmentBindingPattern(node);}else if(!isLeftHandSide(node)){throwErrorTolerant({},Messages.InvalidLHSInAssignment);}token = lex();right = parseAssignmentExpression();node = markerApply(marker,astNodeFactory$$.createAssignmentExpression(token.value,left,right));}return node;} // 11.14 Comma Operator
    function parseExpression(){var marker=markerCreate(),expr=parseAssignmentExpression(),expressions=[expr],sequence,spreadFound;if(match(",")){while(index < length) {if(!match(",")){break;}lex();expr = parseSpreadOrAssignmentExpression();expressions.push(expr);if(expr.type === astNodeTypes$$.SpreadElement){spreadFound = true;if(!match(")")){throwError({},Messages.ElementAfterSpreadElement);}break;}}sequence = markerApply(marker,astNodeFactory$$.createSequenceExpression(expressions));}if(spreadFound && lookahead2().value !== "=>"){throwError({},Messages.IllegalSpread);}return sequence || expr;} // 12.1 Block
    function parseStatementList(){var list=[],statement;while(index < length) {if(match("}")){break;}statement = parseSourceElement();if(typeof statement === "undefined"){break;}list.push(statement);}return list;}function parseBlock(){var block,marker=markerCreate();expect("{");block = parseStatementList();expect("}");return markerApply(marker,astNodeFactory$$.createBlockStatement(block));} // 12.2 Variable Statement
    function parseVariableIdentifier(){var token,marker=markerCreate();token = lex();if(token.type !== Token.Identifier){if(strict && token.type === Token.Keyword && syntax$$.isStrictModeReservedWord(token.value,extra.ecmaFeatures)){throwErrorTolerant(token,Messages.StrictReservedWord);}else {throwUnexpected(token);}}return markerApply(marker,astNodeFactory$$.createIdentifier(token.value));}function parseVariableDeclaration(kind){var id,marker=markerCreate(),init=null;if(match("{")){id = parseObjectInitialiser();reinterpretAsAssignmentBindingPattern(id);}else if(match("[")){id = parseArrayInitialiser();reinterpretAsAssignmentBindingPattern(id);}else { /* istanbul ignore next */id = state.allowKeyword?parseNonComputedProperty():parseVariableIdentifier(); // 12.2.1
    if(strict && syntax$$.isRestrictedWord(id.name)){throwErrorTolerant({},Messages.StrictVarName);}} // TODO: Verify against feature flags
    if(kind === "const"){if(!match("=")){throwError({},Messages.NoUnintializedConst);}expect("=");init = parseAssignmentExpression();}else if(match("=")){lex();init = parseAssignmentExpression();}return markerApply(marker,astNodeFactory$$.createVariableDeclarator(id,init));}function parseVariableDeclarationList(kind){var list=[];do {list.push(parseVariableDeclaration(kind));if(!match(",")){break;}lex();}while(index < length);return list;}function parseVariableStatement(){var declarations;expectKeyword("var");declarations = parseVariableDeclarationList();consumeSemicolon();return astNodeFactory$$.createVariableDeclaration(declarations,"var");} // kind may be `const` or `let`
    // Both are experimental and not in the specification yet.
    // see http://wiki.ecmascript.org/doku.php?id=harmony:const
    // and http://wiki.ecmascript.org/doku.php?id=harmony:let
    function parseConstLetDeclaration(kind){var declarations,marker=markerCreate();expectKeyword(kind);declarations = parseVariableDeclarationList(kind);consumeSemicolon();return markerApply(marker,astNodeFactory$$.createVariableDeclaration(declarations,kind));}function parseRestElement(){var param,marker=markerCreate();lex();if(match("{")){throwError(lookahead,Messages.ObjectPatternAsRestParameter);}param = parseVariableIdentifier();if(match("=")){throwError(lookahead,Messages.DefaultRestParameter);}if(!match(")")){throwError(lookahead,Messages.ParameterAfterRestParameter);}return markerApply(marker,astNodeFactory$$.createRestElement(param));} // 12.3 Empty Statement
    function parseEmptyStatement(){expect(";");return astNodeFactory$$.createEmptyStatement();} // 12.4 Expression Statement
    function parseExpressionStatement(){var expr=parseExpression();consumeSemicolon();return astNodeFactory$$.createExpressionStatement(expr);} // 12.5 If statement
    function parseIfStatement(){var test,consequent,alternate;expectKeyword("if");expect("(");test = parseExpression();expect(")");consequent = parseStatement();if(matchKeyword("else")){lex();alternate = parseStatement();}else {alternate = null;}return astNodeFactory$$.createIfStatement(test,consequent,alternate);} // 12.6 Iteration Statements
    function parseDoWhileStatement(){var body,test,oldInIteration;expectKeyword("do");oldInIteration = state.inIteration;state.inIteration = true;body = parseStatement();state.inIteration = oldInIteration;expectKeyword("while");expect("(");test = parseExpression();expect(")");if(match(";")){lex();}return astNodeFactory$$.createDoWhileStatement(test,body);}function parseWhileStatement(){var test,body,oldInIteration;expectKeyword("while");expect("(");test = parseExpression();expect(")");oldInIteration = state.inIteration;state.inIteration = true;body = parseStatement();state.inIteration = oldInIteration;return astNodeFactory$$.createWhileStatement(test,body);}function parseForVariableDeclaration(){var token,declarations,marker=markerCreate();token = lex();declarations = parseVariableDeclarationList();return markerApply(marker,astNodeFactory$$.createVariableDeclaration(declarations,token.value));}function parseForStatement(opts){var init,test,update,left,right,body,operator,oldInIteration;var allowForOf=extra.ecmaFeatures.forOf,allowBlockBindings=extra.ecmaFeatures.blockBindings;init = test = update = null;expectKeyword("for");expect("(");if(match(";")){lex();}else {if(matchKeyword("var") || allowBlockBindings && (matchKeyword("let") || matchKeyword("const"))){state.allowIn = false;init = parseForVariableDeclaration();state.allowIn = true;if(init.declarations.length === 1){if(matchKeyword("in") || allowForOf && matchContextualKeyword("of")){operator = lookahead; // TODO: is "var" check here really needed? wasn"t in 1.2.2
    if(!((operator.value === "in" || init.kind !== "var") && init.declarations[0].init)){lex();left = init;right = parseExpression();init = null;}}}}else {state.allowIn = false;init = parseExpression();state.allowIn = true;if(init.type === astNodeTypes$$.ArrayExpression){init.type = astNodeTypes$$.ArrayPattern;}if(allowForOf && matchContextualKeyword("of")){operator = lex();left = init;right = parseExpression();init = null;}else if(matchKeyword("in")){ // LeftHandSideExpression
    if(!isLeftHandSide(init)){throwErrorTolerant({},Messages.InvalidLHSInForIn);}operator = lex();left = init;right = parseExpression();init = null;}}if(typeof left === "undefined"){expect(";");}}if(typeof left === "undefined"){if(!match(";")){test = parseExpression();}expect(";");if(!match(")")){update = parseExpression();}}expect(")");oldInIteration = state.inIteration;state.inIteration = true;if(!(opts !== undefined && opts.ignoreBody)){body = parseStatement();}state.inIteration = oldInIteration;if(typeof left === "undefined"){return astNodeFactory$$.createForStatement(init,test,update,body);}if(extra.ecmaFeatures.forOf && operator.value === "of"){return astNodeFactory$$.createForOfStatement(left,right,body);}return astNodeFactory$$.createForInStatement(left,right,body);} // 12.7 The continue statement
    function parseContinueStatement(){var label=null;expectKeyword("continue"); // Optimize the most common form: "continue;".
    if(source.charCodeAt(index) === 0x3B){lex();if(!state.inIteration){throwError({},Messages.IllegalContinue);}return astNodeFactory$$.createContinueStatement(null);}if(peekLineTerminator()){if(!state.inIteration){throwError({},Messages.IllegalContinue);}return astNodeFactory$$.createContinueStatement(null);}if(lookahead.type === Token.Identifier){label = parseVariableIdentifier();if(!state.labelSet.has(label.name)){throwError({},Messages.UnknownLabel,label.name);}}consumeSemicolon();if(label === null && !state.inIteration){throwError({},Messages.IllegalContinue);}return astNodeFactory$$.createContinueStatement(label);} // 12.8 The break statement
    function parseBreakStatement(){var label=null;expectKeyword("break"); // Catch the very common case first: immediately a semicolon (U+003B).
    if(source.charCodeAt(index) === 0x3B){lex();if(!(state.inIteration || state.inSwitch)){throwError({},Messages.IllegalBreak);}return astNodeFactory$$.createBreakStatement(null);}if(peekLineTerminator()){if(!(state.inIteration || state.inSwitch)){throwError({},Messages.IllegalBreak);}return astNodeFactory$$.createBreakStatement(null);}if(lookahead.type === Token.Identifier){label = parseVariableIdentifier();if(!state.labelSet.has(label.name)){throwError({},Messages.UnknownLabel,label.name);}}consumeSemicolon();if(label === null && !(state.inIteration || state.inSwitch)){throwError({},Messages.IllegalBreak);}return astNodeFactory$$.createBreakStatement(label);} // 12.9 The return statement
    function parseReturnStatement(){var argument=null;expectKeyword("return");if(!state.inFunctionBody && !extra.ecmaFeatures.globalReturn){throwErrorTolerant({},Messages.IllegalReturn);} // "return" followed by a space and an identifier is very common.
    if(source.charCodeAt(index) === 0x20){if(syntax$$.isIdentifierStart(source.charCodeAt(index + 1))){argument = parseExpression();consumeSemicolon();return astNodeFactory$$.createReturnStatement(argument);}}if(peekLineTerminator()){return astNodeFactory$$.createReturnStatement(null);}if(!match(";")){if(!match("}") && lookahead.type !== Token.EOF){argument = parseExpression();}}consumeSemicolon();return astNodeFactory$$.createReturnStatement(argument);} // 12.10 The with statement
    function parseWithStatement(){var object,body;if(strict){ // TODO(ikarienator): Should we update the test cases instead?
    skipComment();throwErrorTolerant({},Messages.StrictModeWith);}expectKeyword("with");expect("(");object = parseExpression();expect(")");body = parseStatement();return astNodeFactory$$.createWithStatement(object,body);} // 12.10 The swith statement
    function parseSwitchCase(){var test,consequent=[],statement,marker=markerCreate();if(matchKeyword("default")){lex();test = null;}else {expectKeyword("case");test = parseExpression();}expect(":");while(index < length) {if(match("}") || matchKeyword("default") || matchKeyword("case")){break;}statement = parseSourceElement();if(typeof statement === "undefined"){break;}consequent.push(statement);}return markerApply(marker,astNodeFactory$$.createSwitchCase(test,consequent));}function parseSwitchStatement(){var discriminant,cases,clause,oldInSwitch,defaultFound;expectKeyword("switch");expect("(");discriminant = parseExpression();expect(")");expect("{");cases = [];if(match("}")){lex();return astNodeFactory$$.createSwitchStatement(discriminant,cases);}oldInSwitch = state.inSwitch;state.inSwitch = true;defaultFound = false;while(index < length) {if(match("}")){break;}clause = parseSwitchCase();if(clause.test === null){if(defaultFound){throwError({},Messages.MultipleDefaultsInSwitch);}defaultFound = true;}cases.push(clause);}state.inSwitch = oldInSwitch;expect("}");return astNodeFactory$$.createSwitchStatement(discriminant,cases);} // 12.13 The throw statement
    function parseThrowStatement(){var argument;expectKeyword("throw");if(peekLineTerminator()){throwError({},Messages.NewlineAfterThrow);}argument = parseExpression();consumeSemicolon();return astNodeFactory$$.createThrowStatement(argument);} // 12.14 The try statement
    function parseCatchClause(){var param,body,marker=markerCreate(),allowDestructuring=extra.ecmaFeatures.destructuring,options={paramSet:new StringMap()};expectKeyword("catch");expect("(");if(match(")")){throwUnexpected(lookahead);}if(match("[")){if(!allowDestructuring){throwUnexpected(lookahead);}param = parseArrayInitialiser();reinterpretAsDestructuredParameter(options,param);}else if(match("{")){if(!allowDestructuring){throwUnexpected(lookahead);}param = parseObjectInitialiser();reinterpretAsDestructuredParameter(options,param);}else {param = parseVariableIdentifier();} // 12.14.1
    if(strict && param.name && syntax$$.isRestrictedWord(param.name)){throwErrorTolerant({},Messages.StrictCatchVariable);}expect(")");body = parseBlock();return markerApply(marker,astNodeFactory$$.createCatchClause(param,body));}function parseTryStatement(){var block,handler=null,finalizer=null;expectKeyword("try");block = parseBlock();if(matchKeyword("catch")){handler = parseCatchClause();}if(matchKeyword("finally")){lex();finalizer = parseBlock();}if(!handler && !finalizer){throwError({},Messages.NoCatchOrFinally);}return astNodeFactory$$.createTryStatement(block,handler,finalizer);} // 12.15 The debugger statement
    function parseDebuggerStatement(){expectKeyword("debugger");consumeSemicolon();return astNodeFactory$$.createDebuggerStatement();} // 12 Statements
    function parseStatement(){var type=lookahead.type,expr,labeledBody,marker;if(type === Token.EOF){throwUnexpected(lookahead);}if(type === Token.Punctuator && lookahead.value === "{"){return parseBlock();}marker = markerCreate();if(type === Token.Punctuator){switch(lookahead.value){case ";":return markerApply(marker,parseEmptyStatement());case "{":return parseBlock();case "(":return markerApply(marker,parseExpressionStatement());default:break;}}marker = markerCreate();if(type === Token.Keyword){switch(lookahead.value){case "break":return markerApply(marker,parseBreakStatement());case "continue":return markerApply(marker,parseContinueStatement());case "debugger":return markerApply(marker,parseDebuggerStatement());case "do":return markerApply(marker,parseDoWhileStatement());case "for":return markerApply(marker,parseForStatement());case "function":return markerApply(marker,parseFunctionDeclaration());case "if":return markerApply(marker,parseIfStatement());case "return":return markerApply(marker,parseReturnStatement());case "switch":return markerApply(marker,parseSwitchStatement());case "throw":return markerApply(marker,parseThrowStatement());case "try":return markerApply(marker,parseTryStatement());case "var":return markerApply(marker,parseVariableStatement());case "while":return markerApply(marker,parseWhileStatement());case "with":return markerApply(marker,parseWithStatement());default:break;}}marker = markerCreate();expr = parseExpression(); // 12.12 Labelled Statements
    if(expr.type === astNodeTypes$$.Identifier && match(":")){lex();if(state.labelSet.has(expr.name)){throwError({},Messages.Redeclaration,"Label",expr.name);}state.labelSet.set(expr.name,true);labeledBody = parseStatement();state.labelSet["delete"](expr.name);return markerApply(marker,astNodeFactory$$.createLabeledStatement(expr,labeledBody));}consumeSemicolon();return markerApply(marker,astNodeFactory$$.createExpressionStatement(expr));} // 13 Function Definition
    // function parseConciseBody() {
    //     if (match("{")) {
    //         return parseFunctionSourceElements();
    //     }
    //     return parseAssignmentExpression();
    // }
    function parseFunctionSourceElements(){var sourceElement,sourceElements=[],token,directive,firstRestricted,oldLabelSet,oldInIteration,oldInSwitch,oldInFunctionBody,oldParenthesisCount,marker=markerCreate();expect("{");while(index < length) {if(lookahead.type !== Token.StringLiteral){break;}token = lookahead;sourceElement = parseSourceElement();sourceElements.push(sourceElement);if(sourceElement.expression.type !== astNodeTypes$$.Literal){ // this is not directive
    break;}directive = source.slice(token.range[0] + 1,token.range[1] - 1);if(directive === "use strict"){strict = true;if(firstRestricted){throwErrorTolerant(firstRestricted,Messages.StrictOctalLiteral);}}else {if(!firstRestricted && token.octal){firstRestricted = token;}}}oldLabelSet = state.labelSet;oldInIteration = state.inIteration;oldInSwitch = state.inSwitch;oldInFunctionBody = state.inFunctionBody;oldParenthesisCount = state.parenthesisCount;state.labelSet = new StringMap();state.inIteration = false;state.inSwitch = false;state.inFunctionBody = true;while(index < length) {if(match("}")){break;}sourceElement = parseSourceElement();if(typeof sourceElement === "undefined"){break;}sourceElements.push(sourceElement);}expect("}");state.labelSet = oldLabelSet;state.inIteration = oldInIteration;state.inSwitch = oldInSwitch;state.inFunctionBody = oldInFunctionBody;state.parenthesisCount = oldParenthesisCount;return markerApply(marker,astNodeFactory$$.createBlockStatement(sourceElements));}function validateParam(options,param,name){if(strict){if(syntax$$.isRestrictedWord(name)){options.stricted = param;options.message = Messages.StrictParamName;}if(options.paramSet.has(name)){options.stricted = param;options.message = Messages.StrictParamDupe;}}else if(!options.firstRestricted){if(syntax$$.isRestrictedWord(name)){options.firstRestricted = param;options.message = Messages.StrictParamName;}else if(syntax$$.isStrictModeReservedWord(name,extra.ecmaFeatures)){options.firstRestricted = param;options.message = Messages.StrictReservedWord;}else if(options.paramSet.has(name)){options.firstRestricted = param;options.message = Messages.StrictParamDupe;}}options.paramSet.set(name,true);}function parseParam(options){var token,param,def,allowRestParams=extra.ecmaFeatures.restParams,allowDestructuring=extra.ecmaFeatures.destructuring,allowDefaultParams=extra.ecmaFeatures.defaultParams,marker=markerCreate();token = lookahead;if(token.value === "..."){if(!allowRestParams){throwUnexpected(lookahead);}param = parseRestElement();validateParam(options,param.argument,param.argument.name);options.params.push(param);return false;}if(match("[")){if(!allowDestructuring){throwUnexpected(lookahead);}param = parseArrayInitialiser();reinterpretAsDestructuredParameter(options,param);}else if(match("{")){if(!allowDestructuring){throwUnexpected(lookahead);}param = parseObjectInitialiser();reinterpretAsDestructuredParameter(options,param);}else {param = parseVariableIdentifier();validateParam(options,token,token.value);}if(match("=")){if(allowDefaultParams || allowDestructuring){lex();def = parseAssignmentExpression();++options.defaultCount;}else {throwUnexpected(lookahead);}}if(def){options.params.push(markerApply(marker,astNodeFactory$$.createAssignmentPattern(param,def)));}else {options.params.push(param);}return !match(")");}function parseParams(firstRestricted){var options;options = {params:[],defaultCount:0,firstRestricted:firstRestricted};expect("(");if(!match(")")){options.paramSet = new StringMap();while(index < length) {if(!parseParam(options)){break;}expect(",");}}expect(")");return {params:options.params,stricted:options.stricted,firstRestricted:options.firstRestricted,message:options.message};}function parseFunctionDeclaration(identifierIsOptional){var id=null,body,token,tmp,firstRestricted,message,previousStrict,previousYieldAllowed,generator,marker=markerCreate(),allowGenerators=extra.ecmaFeatures.generators;expectKeyword("function");generator = false;if(allowGenerators && match("*")){lex();generator = true;}if(!identifierIsOptional || !match("(")){token = lookahead;id = parseVariableIdentifier();if(strict){if(syntax$$.isRestrictedWord(token.value)){throwErrorTolerant(token,Messages.StrictFunctionName);}}else {if(syntax$$.isRestrictedWord(token.value)){firstRestricted = token;message = Messages.StrictFunctionName;}else if(syntax$$.isStrictModeReservedWord(token.value,extra.ecmaFeatures)){firstRestricted = token;message = Messages.StrictReservedWord;}}}tmp = parseParams(firstRestricted);firstRestricted = tmp.firstRestricted;if(tmp.message){message = tmp.message;}previousStrict = strict;previousYieldAllowed = state.yieldAllowed;state.yieldAllowed = generator;body = parseFunctionSourceElements();if(strict && firstRestricted){throwError(firstRestricted,message);}if(strict && tmp.stricted){throwErrorTolerant(tmp.stricted,message);}strict = previousStrict;state.yieldAllowed = previousYieldAllowed;return markerApply(marker,astNodeFactory$$.createFunctionDeclaration(id,tmp.params,body,generator,false));}function parseFunctionExpression(){var token,id=null,firstRestricted,message,tmp,body,previousStrict,previousYieldAllowed,generator,marker=markerCreate(),allowGenerators=extra.ecmaFeatures.generators;expectKeyword("function");generator = false;if(allowGenerators && match("*")){lex();generator = true;}if(!match("(")){token = lookahead;id = parseVariableIdentifier();if(strict){if(syntax$$.isRestrictedWord(token.value)){throwErrorTolerant(token,Messages.StrictFunctionName);}}else {if(syntax$$.isRestrictedWord(token.value)){firstRestricted = token;message = Messages.StrictFunctionName;}else if(syntax$$.isStrictModeReservedWord(token.value,extra.ecmaFeatures)){firstRestricted = token;message = Messages.StrictReservedWord;}}}tmp = parseParams(firstRestricted);firstRestricted = tmp.firstRestricted;if(tmp.message){message = tmp.message;}previousStrict = strict;previousYieldAllowed = state.yieldAllowed;state.yieldAllowed = generator;body = parseFunctionSourceElements();if(strict && firstRestricted){throwError(firstRestricted,message);}if(strict && tmp.stricted){throwErrorTolerant(tmp.stricted,message);}strict = previousStrict;state.yieldAllowed = previousYieldAllowed;return markerApply(marker,astNodeFactory$$.createFunctionExpression(id,tmp.params,body,generator,false));}function parseYieldExpression(){var yieldToken,delegateFlag,expr,marker=markerCreate();yieldToken = lex();assert(yieldToken.value === "yield","Called parseYieldExpression with non-yield lookahead.");if(!state.yieldAllowed){throwErrorTolerant({},Messages.IllegalYield);}delegateFlag = false;if(match("*")){lex();delegateFlag = true;}if(peekLineTerminator()){return markerApply(marker,astNodeFactory$$.createYieldExpression(null,delegateFlag));}if(!match(";") && !match(")")){if(!match("}") && lookahead.type !== Token.EOF){expr = parseAssignmentExpression();}}return markerApply(marker,astNodeFactory$$.createYieldExpression(expr,delegateFlag));} // Modules grammar from:
    // people.mozilla.org/~jorendorff/es6-draft.html
    function parseModuleSpecifier(){var marker=markerCreate(),specifier;if(lookahead.type !== Token.StringLiteral){throwError({},Messages.InvalidModuleSpecifier);}specifier = astNodeFactory$$.createLiteralFromSource(lex(),source);return markerApply(marker,specifier);}function parseExportSpecifier(){var exported,local,marker=markerCreate();if(matchKeyword("default")){lex();local = markerApply(marker,astNodeFactory$$.createIdentifier("default")); // export {default} from "something";
    }else {local = parseVariableIdentifier();}if(matchContextualKeyword("as")){lex();exported = parseNonComputedProperty();}return markerApply(marker,astNodeFactory$$.createExportSpecifier(local,exported));}function parseExportNamedDeclaration(){var declaration=null,isExportFromIdentifier,src=null,specifiers=[],marker=markerCreate();expectKeyword("export"); // non-default export
    if(lookahead.type === Token.Keyword){ // covers:
    // export var f = 1;
    switch(lookahead.value){case "let":case "const":case "var":case "class":case "function":declaration = parseSourceElement();return markerApply(marker,astNodeFactory$$.createExportNamedDeclaration(declaration,specifiers,null));default:break;}}expect("{");if(!match("}")){do {isExportFromIdentifier = isExportFromIdentifier || matchKeyword("default");specifiers.push(parseExportSpecifier());}while(match(",") && lex() && !match("}"));}expect("}");if(matchContextualKeyword("from")){ // covering:
    // export {default} from "foo";
    // export {foo} from "foo";
    lex();src = parseModuleSpecifier();consumeSemicolon();}else if(isExportFromIdentifier){ // covering:
    // export {default}; // missing fromClause
    throwError({},lookahead.value?Messages.UnexpectedToken:Messages.MissingFromClause,lookahead.value);}else { // cover
    // export {foo};
    consumeSemicolon();}return markerApply(marker,astNodeFactory$$.createExportNamedDeclaration(declaration,specifiers,src));}function parseExportDefaultDeclaration(){var declaration=null,expression=null,possibleIdentifierToken,allowClasses=extra.ecmaFeatures.classes,marker=markerCreate(); // covers:
    // export default ...
    expectKeyword("export");expectKeyword("default");if(matchKeyword("function") || matchKeyword("class")){possibleIdentifierToken = lookahead2();if(possibleIdentifierToken.type === Token.Identifier){ // covers:
    // export default function foo () {}
    // export default class foo {}
    declaration = parseSourceElement();return markerApply(marker,astNodeFactory$$.createExportDefaultDeclaration(declaration));} // covers:
    // export default function () {}
    // export default class {}
    if(lookahead.value === "function"){declaration = parseFunctionDeclaration(true);return markerApply(marker,astNodeFactory$$.createExportDefaultDeclaration(declaration));}else if(allowClasses && lookahead.value === "class"){declaration = parseClassDeclaration(true);return markerApply(marker,astNodeFactory$$.createExportDefaultDeclaration(declaration));}}if(matchContextualKeyword("from")){throwError({},Messages.UnexpectedToken,lookahead.value);} // covers:
    // export default {};
    // export default [];
    // export default (1 + 2);
    if(match("{")){expression = parseObjectInitialiser();}else if(match("[")){expression = parseArrayInitialiser();}else {expression = parseAssignmentExpression();}consumeSemicolon();return markerApply(marker,astNodeFactory$$.createExportDefaultDeclaration(expression));}function parseExportAllDeclaration(){var src,marker=markerCreate(); // covers:
    // export * from "foo";
    expectKeyword("export");expect("*");if(!matchContextualKeyword("from")){throwError({},lookahead.value?Messages.UnexpectedToken:Messages.MissingFromClause,lookahead.value);}lex();src = parseModuleSpecifier();consumeSemicolon();return markerApply(marker,astNodeFactory$$.createExportAllDeclaration(src));}function parseExportDeclaration(){if(state.inFunctionBody){throwError({},Messages.IllegalExportDeclaration);}var declarationType=lookahead2().value;if(declarationType === "default"){return parseExportDefaultDeclaration();}else if(declarationType === "*"){return parseExportAllDeclaration();}else {return parseExportNamedDeclaration();}}function parseImportSpecifier(){ // import {<foo as bar>} ...;
    var local,imported,marker=markerCreate();imported = parseNonComputedProperty();if(matchContextualKeyword("as")){lex();local = parseVariableIdentifier();}return markerApply(marker,astNodeFactory$$.createImportSpecifier(local,imported));}function parseNamedImports(){var specifiers=[]; // {foo, bar as bas}
    expect("{");if(!match("}")){do {specifiers.push(parseImportSpecifier());}while(match(",") && lex() && !match("}"));}expect("}");return specifiers;}function parseImportDefaultSpecifier(){ // import <foo> ...;
    var local,marker=markerCreate();local = parseNonComputedProperty();return markerApply(marker,astNodeFactory$$.createImportDefaultSpecifier(local));}function parseImportNamespaceSpecifier(){ // import <* as foo> ...;
    var local,marker=markerCreate();expect("*");if(!matchContextualKeyword("as")){throwError({},Messages.NoAsAfterImportNamespace);}lex();local = parseNonComputedProperty();return markerApply(marker,astNodeFactory$$.createImportNamespaceSpecifier(local));}function parseImportDeclaration(){var specifiers,src,marker=markerCreate();if(state.inFunctionBody){throwError({},Messages.IllegalImportDeclaration);}expectKeyword("import");specifiers = [];if(lookahead.type === Token.StringLiteral){ // covers:
    // import "foo";
    src = parseModuleSpecifier();consumeSemicolon();return markerApply(marker,astNodeFactory$$.createImportDeclaration(specifiers,src));}if(!matchKeyword("default") && isIdentifierName(lookahead)){ // covers:
    // import foo
    // import foo, ...
    specifiers.push(parseImportDefaultSpecifier());if(match(",")){lex();}}if(match("*")){ // covers:
    // import foo, * as foo
    // import * as foo
    specifiers.push(parseImportNamespaceSpecifier());}else if(match("{")){ // covers:
    // import foo, {bar}
    // import {bar}
    specifiers = specifiers.concat(parseNamedImports());}if(!matchContextualKeyword("from")){throwError({},lookahead.value?Messages.UnexpectedToken:Messages.MissingFromClause,lookahead.value);}lex();src = parseModuleSpecifier();consumeSemicolon();return markerApply(marker,astNodeFactory$$.createImportDeclaration(specifiers,src));} // 14 Functions and classes
    // 14.1 Functions is defined above (13 in ES5)
    // 14.2 Arrow Functions Definitions is defined in (7.3 assignments)
    // 14.3 Method Definitions
    // 14.3.7
    // 14.5 Class Definitions
    function parseClassBody(){var hasConstructor=false,generator=false,allowGenerators=extra.ecmaFeatures.generators,token,isStatic,body=[],method,computed,key;var existingProps={},topMarker=markerCreate(),marker;existingProps["static"] = new StringMap();existingProps.prototype = new StringMap();expect("{");while(!match("}")) { // extra semicolons are fine
    if(match(";")){lex();continue;}token = lookahead;isStatic = false;generator = match("*");computed = match("[");marker = markerCreate();if(generator){if(!allowGenerators){throwUnexpected(lookahead);}lex();}key = parseObjectPropertyKey(); // static generator methods
    if(key.name === "static" && match("*")){if(!allowGenerators){throwUnexpected(lookahead);}generator = true;lex();}if(key.name === "static" && lookaheadPropertyName()){token = lookahead;isStatic = true;computed = match("[");key = parseObjectPropertyKey();}if(generator){method = parseGeneratorProperty(key,marker);}else {method = tryParseMethodDefinition(token,key,computed,marker,generator);}if(method){method["static"] = isStatic;if(method.kind === "init"){method.kind = "method";}if(!isStatic){if(!method.computed && (method.key.name || method.key.value && method.key.value.toString()) === "constructor"){if(method.kind !== "method" || !method.method || method.value.generator){throwUnexpected(token,Messages.ConstructorSpecialMethod);}if(hasConstructor){throwUnexpected(token,Messages.DuplicateConstructor);}else {hasConstructor = true;}method.kind = "constructor";}}else {if(!method.computed && (method.key.name || method.key.value.toString()) === "prototype"){throwUnexpected(token,Messages.StaticPrototype);}}method.type = astNodeTypes$$.MethodDefinition;delete method.method;delete method.shorthand;body.push(method);}else {throwUnexpected(lookahead);}}lex();return markerApply(topMarker,astNodeFactory$$.createClassBody(body));}function parseClassExpression(){var id=null,superClass=null,marker=markerCreate(),previousStrict=strict,classBody; // classes run in strict mode
    strict = true;expectKeyword("class");if(lookahead.type === Token.Identifier){id = parseVariableIdentifier();}if(matchKeyword("extends")){lex();superClass = parseLeftHandSideExpressionAllowCall();}classBody = parseClassBody();strict = previousStrict;return markerApply(marker,astNodeFactory$$.createClassExpression(id,superClass,classBody));}function parseClassDeclaration(identifierIsOptional){var id=null,superClass=null,marker=markerCreate(),previousStrict=strict,classBody; // classes run in strict mode
    strict = true;expectKeyword("class");if(!identifierIsOptional || lookahead.type === Token.Identifier){id = parseVariableIdentifier();}if(matchKeyword("extends")){lex();superClass = parseLeftHandSideExpressionAllowCall();}classBody = parseClassBody();strict = previousStrict;return markerApply(marker,astNodeFactory$$.createClassDeclaration(id,superClass,classBody));} // 15 Program
    function parseSourceElement(){var allowClasses=extra.ecmaFeatures.classes,allowModules=extra.ecmaFeatures.modules,allowBlockBindings=extra.ecmaFeatures.blockBindings;if(lookahead.type === Token.Keyword){switch(lookahead.value){case "export":if(!allowModules){throwErrorTolerant({},Messages.IllegalExportDeclaration);}return parseExportDeclaration();case "import":if(!allowModules){throwErrorTolerant({},Messages.IllegalImportDeclaration);}return parseImportDeclaration();case "function":return parseFunctionDeclaration();case "class":if(allowClasses){return parseClassDeclaration();}break;case "const":case "let":if(allowBlockBindings){return parseConstLetDeclaration(lookahead.value);} /* falls through */default:return parseStatement();}}if(lookahead.type !== Token.EOF){return parseStatement();}}function parseSourceElements(){var sourceElement,sourceElements=[],token,directive,firstRestricted;while(index < length) {token = lookahead;if(token.type !== Token.StringLiteral){break;}sourceElement = parseSourceElement();sourceElements.push(sourceElement);if(sourceElement.expression.type !== astNodeTypes$$.Literal){ // this is not directive
    break;}directive = source.slice(token.range[0] + 1,token.range[1] - 1);if(directive === "use strict"){strict = true;if(firstRestricted){throwErrorTolerant(firstRestricted,Messages.StrictOctalLiteral);}}else {if(!firstRestricted && token.octal){firstRestricted = token;}}}while(index < length) {sourceElement = parseSourceElement(); /* istanbul ignore if */if(typeof sourceElement === "undefined"){break;}sourceElements.push(sourceElement);}return sourceElements;}function parseProgram(){var body,marker,isModule=!!extra.ecmaFeatures.modules;skipComment();peek();marker = markerCreate();strict = isModule;body = parseSourceElements();return markerApply(marker,astNodeFactory$$.createProgram(body,isModule?"module":"script"));}function filterTokenLocation(){var i,entry,token,tokens=[];for(i = 0;i < extra.tokens.length;++i) {entry = extra.tokens[i];token = {type:entry.type,value:entry.value};if(entry.regex){token.regex = {pattern:entry.regex.pattern,flags:entry.regex.flags};}if(extra.range){token.range = entry.range;}if(extra.loc){token.loc = entry.loc;}tokens.push(token);}extra.tokens = tokens;} //------------------------------------------------------------------------------
    // Tokenizer
    //------------------------------------------------------------------------------
    function tokenize(code,options){var toString,tokens;toString = String;if(typeof code !== "string" && !(code instanceof String)){code = toString(code);}source = code;index = 0;lineNumber = source.length > 0?1:0;lineStart = 0;length = source.length;lookahead = null;state = {allowIn:true,labelSet:{},parenthesisCount:0,inFunctionBody:false,inIteration:false,inSwitch:false,lastCommentStart:-1,yieldAllowed:false,curlyStack:[],curlyLastIndex:0,inJSXSpreadAttribute:false,inJSXChild:false,inJSXTag:false};extra = {ecmaFeatures:defaultFeatures}; // Options matching.
    options = options || {}; // Of course we collect tokens here.
    options.tokens = true;extra.tokens = [];extra.tokenize = true; // The following two fields are necessary to compute the Regex tokens.
    extra.openParenToken = -1;extra.openCurlyToken = -1;extra.range = typeof options.range === "boolean" && options.range;extra.loc = typeof options.loc === "boolean" && options.loc;if(typeof options.comment === "boolean" && options.comment){extra.comments = [];}if(typeof options.tolerant === "boolean" && options.tolerant){extra.errors = [];} // apply parsing flags
    if(options.ecmaFeatures && typeof options.ecmaFeatures === "object"){extra.ecmaFeatures = options.ecmaFeatures;}try{peek();if(lookahead.type === Token.EOF){return extra.tokens;}lex();while(lookahead.type !== Token.EOF) {try{lex();}catch(lexError) {if(extra.errors){extra.errors.push(lexError); // We have to break on the first error
    // to avoid infinite loops.
    break;}else {throw lexError;}}}filterTokenLocation();tokens = extra.tokens;if(typeof extra.comments !== "undefined"){tokens.comments = extra.comments;}if(typeof extra.errors !== "undefined"){tokens.errors = extra.errors;}}catch(e) {throw e;}finally {extra = {};}return tokens;} //------------------------------------------------------------------------------
    // Parser
    //------------------------------------------------------------------------------
    function parse(code,options){var program,toString;toString = String;if(typeof code !== "string" && !(code instanceof String)){code = toString(code);}source = code;index = 0;lineNumber = source.length > 0?1:0;lineStart = 0;length = source.length;lookahead = null;state = {allowIn:true,labelSet:new StringMap(),parenthesisCount:0,inFunctionBody:false,inIteration:false,inSwitch:false,lastCommentStart:-1,yieldAllowed:false,curlyStack:[],curlyLastIndex:0,inJSXSpreadAttribute:false,inJSXChild:false,inJSXTag:false};extra = {ecmaFeatures:Object.create(defaultFeatures)}; // for template strings
    state.curlyStack = [];if(typeof options !== "undefined"){extra.range = typeof options.range === "boolean" && options.range;extra.loc = typeof options.loc === "boolean" && options.loc;extra.attachComment = typeof options.attachComment === "boolean" && options.attachComment;if(extra.loc && options.source !== null && options.source !== undefined){extra.source = toString(options.source);}if(typeof options.tokens === "boolean" && options.tokens){extra.tokens = [];}if(typeof options.comment === "boolean" && options.comment){extra.comments = [];}if(typeof options.tolerant === "boolean" && options.tolerant){extra.errors = [];}if(extra.attachComment){extra.range = true;extra.comments = [];commentAttachment$$.reset();}if(options.sourceType === "module"){extra.ecmaFeatures = {arrowFunctions:true,blockBindings:true,regexUFlag:true,regexYFlag:true,templateStrings:true,binaryLiterals:true,octalLiterals:true,unicodeCodePointEscapes:true,superInFunctions:true,defaultParams:true,restParams:true,forOf:true,objectLiteralComputedProperties:true,objectLiteralShorthandMethods:true,objectLiteralShorthandProperties:true,objectLiteralDuplicateProperties:true,generators:true,destructuring:true,classes:true,modules:true,newTarget:true};} // apply parsing flags after sourceType to allow overriding
    if(options.ecmaFeatures && typeof options.ecmaFeatures === "object"){ // if it's a module, augment the ecmaFeatures
    if(options.sourceType === "module"){Object.keys(options.ecmaFeatures).forEach(function(key){extra.ecmaFeatures[key] = options.ecmaFeatures[key];});}else {extra.ecmaFeatures = options.ecmaFeatures;}}}try{program = parseProgram();if(typeof extra.comments !== "undefined"){program.comments = extra.comments;}if(typeof extra.tokens !== "undefined"){filterTokenLocation();program.tokens = extra.tokens;}if(typeof extra.errors !== "undefined"){program.errors = extra.errors;}}catch(e) {throw e;}finally {extra = {};}return program;} //------------------------------------------------------------------------------
    // Public
    //------------------------------------------------------------------------------
    exports.version = require$$0$2.version;exports.tokenize = tokenize;exports.parse = parse; // Deep copy.
    /* istanbul ignore next */exports.Syntax = (function(){var name,types={};if(typeof Object.create === "function"){types = Object.create(null);}for(name in astNodeTypes$$) {if(astNodeTypes$$.hasOwnProperty(name)){types[name] = astNodeTypes$$[name];}}if(typeof Object.freeze === "function"){Object.freeze(types);}return types;})();
    return module.exports;
    })({exports:{}});

    var parse = espree.parse;

    var PARSE_OPTIONS = {
      loc: true,
      range: true,
      ecmaFeatures: {
        // enable parsing of arrow functions
        arrowFunctions: true,

        // enable parsing of let/const
        blockBindings: true,

        // enable parsing of destructured arrays and objects
        destructuring: true,

        // enable parsing of regular expression y flag
        regexYFlag: true,

        // enable parsing of regular expression u flag
        regexUFlag: true,

        // enable parsing of template strings
        templateStrings: true,

        // enable parsing of binary literals
        binaryLiterals: true,

        // enable parsing of ES6 octal literals
        octalLiterals: true,

        // enable parsing unicode code point escape sequences
        unicodeCodePointEscapes: true,

        // enable parsing of default parameters
        defaultParams: true,

        // enable parsing of rest parameters
        restParams: true,

        // enable parsing of for-of statement
        forOf: true,

        // enable parsing computed object literal properties
        objectLiteralComputedProperties: true,

        // enable parsing of shorthand object literal methods
        objectLiteralShorthandMethods: true,

        // enable parsing of shorthand object literal properties
        objectLiteralShorthandProperties: true,

        // Allow duplicate object literal properties (except '__proto__')
        objectLiteralDuplicateProperties: true,

        // enable parsing of generators/yield
        generators: true,

        // enable parsing spread operator
        spread: true,

        // enable super in functions
        superInFunctions: true,

        // enable parsing classes
        classes: true,

        // enable parsing of new.target
        newTarget: false,

        // enable parsing of modules
        modules: true,

        // enable React JSX parsing
        jsx: true,

        // enable return in global scope
        globalReturn: true,

        // allow experimental object rest/spread
        experimentalObjectRestSpread: true
      }
    };

    var Module = (function () {
      function Module(id, source) {
        babelHelpers.classCallCheck(this, Module);

        this.id = id;
        this.metadata = {};
        this.source = source;
        this.ast = parse(source, PARSE_OPTIONS);
        this.scope = analyze(this.ast);
        this.magicString = new MagicString(source, {
          filename: id
        });

        /**
         * @private
         */
        this.warnings = [];
      }

      babelHelpers.createClass(Module, [{
        key: 'warn',
        value: function warn(node, type, message) {
          this.warnings.push({ node: node, type: type, message: message });
        }
      }, {
        key: 'render',
        value: function render() {
          return {
            code: this.magicString.toString(),
            map: this.magicString.generateMap(),
            warnings: this.warnings,
            metadata: this.metadata
          };
        }
      }]);
      return Module;
    })();

    var index$1 = (function (module) {
    var exports = module.exports;
    'use strict';
    module.exports = /^#!.*/;
    return module.exports;
    })({exports:{}});

    function convert(source) {
      var plugins = arguments.length <= 1 || arguments[1] === undefined ? getDefaultPlugins() : arguments[1];

      var shebangMatch = source.match(index$1);

      if (shebangMatch) {
        source = source.slice(shebangMatch.index + shebangMatch[0].length);
      }

      var module = new Module(null, source);
      var pluginContexts = plugins.map(function (_ref) {
        var begin = _ref.begin;
        return begin && begin(module);
      });

      estraverse.traverse(module.ast, {
        enter: function enter(node, parent) {
          var index = 0;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = plugins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _enter = _step.value.enter;

              if (_enter) {
                var _result = _enter(node, parent, module, pluginContexts[index++]);
                if (_result) {
                  return _result;
                }
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        },

        leave: function leave(node, parent) {
          var index = 0;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = plugins[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _leave = _step2.value.leave;

              if (_leave) {
                var _result2 = _leave(node, parent, module, pluginContexts[index++]);
                if (_result2) {
                  return _result2;
                }
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                _iterator2['return']();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      });

      plugins.forEach(function (_ref2, i) {
        var end = _ref2.end;
        return end && end(module, pluginContexts[i]);
      });

      var result = module.render();

      if (shebangMatch) {
        result.code = shebangMatch[0] + result.code;
      }

      return result;
    }

    function getDefaultPlugins() {
      return [CommonJSPlugin];
    }

    exports.convert = convert;
    exports.getDefaultPlugins = getDefaultPlugins;

}));