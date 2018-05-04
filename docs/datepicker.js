/* feather-ts/datepicker v1.0.49 */
var datepicker = (function (exports) {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator];
        return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    }
    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var tslib_es6 = /*#__PURE__*/Object.freeze({
        __extends: __extends,
        __assign: __assign,
        __rest: __rest,
        __decorate: __decorate,
        __param: __param,
        __metadata: __metadata,
        __awaiter: __awaiter,
        __generator: __generator,
        __exportStar: __exportStar,
        __values: __values,
        __read: __read,
        __spread: __spread,
        __await: __await,
        __asyncGenerator: __asyncGenerator,
        __asyncDelegator: __asyncDelegator,
        __asyncValues: __asyncValues,
        __makeTemplateObject: __makeTemplateObject,
        __importStar: __importStar,
        __importDefault: __importDefault
    });

    var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var objects = createCommonjsModule(function (module, exports) {
    var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pathCallbacks = new WeakMap();
    exports.getSubset = function (keys, obj) {
        return keys.reduce(function (a, c) {
            return (__assign({}, a, (_a = {}, _a[c] = obj[c], _a)));
            var _a;
        }, {});
    };
    exports.isObject = function (obj) {
        return (obj !== null && typeof (obj) === 'object' && Object.prototype.toString.call(obj) === '[object Object]');
    };
    exports.deepValue = function (obj, path) {
        if (!path) {
            return obj;
        }
        var paths = path.split('.');
        var current = obj, i, n;
        for (i = 0, n = paths.length; i < n; ++i) {
            if (current[paths[i]] === undefined) {
                return undefined;
            }
            else {
                current = current[paths[i]];
            }
        }
        return current;
    };
    exports.merge = function (a, b) {
        if (a === void 0) { a = {}; }
        for (var _i = 0, _a = Object.keys(b); _i < _a.length; _i++) {
            var k = _a[_i];
            var ak = a[k], bk = b[k];
            if (Array.isArray(ak)) {
                ak.push.apply(ak, bk);
            }
            else if (exports.isObject(ak)) {
                exports.merge(ak, bk);
            }
            else {
                a[k] = bk;
            }
        }
        return a;
    };
    exports.ensure = function (map, obj, defaultValue) {
        var lookup = map.get(obj);
        if (!lookup) {
            map.set(obj, lookup = defaultValue);
        }
        else if (Array.isArray(lookup) && Array.isArray(defaultValue)) {
            lookup.push.apply(lookup, defaultValue);
        }
        else if (exports.isObject(lookup)) {
            exports.merge(lookup, defaultValue);
        }
        return lookup;
    };
    exports.propertyCallbacks = new WeakMap();
    exports.addPropertyListener = function (obj, property, callback) {
        var val = obj[property];
        var observed = exports.propertyCallbacks.has(obj) && exports.propertyCallbacks.get(obj)[property];
        exports.ensure(exports.propertyCallbacks, obj, (_a = {}, _a[property] = [callback], _a));
        if (!observed) {
            Object.defineProperty(obj, property, {
                get: function () { return val; },
                set: function (newVal) {
                    val = newVal;
                    for (var _i = 0, _a = exports.propertyCallbacks.get(obj)[property]; _i < _a.length; _i++) {
                        var c = _a[_i];
                        c(property);
                    }
                    return val;
                }
            });
        }
        var _a;
    };
    exports.createObjectPropertyListener = function (obj, pathStr, callback) {
        var path = pathStr.split('.'), property = path.pop(), root = exports.deepValue(obj, path.join('.')), handler = function () {
            for (var _i = 0, _a = exports.pathCallbacks.get(obj)[pathStr]; _i < _a.length; _i++) {
                var cb = _a[_i];
                cb();
            }
        };
        exports.ensure(exports.pathCallbacks, obj, (_a = {}, _a[pathStr] = [callback], _a));
        exports.addPropertyListener(root, property, handler);
        var _a;
    };

    });

    var objects$1 = unwrapExports(objects);
    var objects_1 = objects.pathCallbacks;
    var objects_2 = objects.getSubset;
    var objects_3 = objects.isObject;
    var objects_4 = objects.deepValue;
    var objects_5 = objects.merge;
    var objects_6 = objects.ensure;
    var objects_7 = objects.propertyCallbacks;
    var objects_8 = objects.addPropertyListener;
    var objects_9 = objects.createObjectPropertyListener;

    var objects$2 = /*#__PURE__*/Object.freeze({
        default: objects$1,
        __moduleExports: objects,
        pathCallbacks: objects_1,
        getSubset: objects_2,
        isObject: objects_3,
        deepValue: objects_4,
        merge: objects_5,
        ensure: objects_6,
        propertyCallbacks: objects_7,
        addPropertyListener: objects_8,
        createObjectPropertyListener: objects_9
    });

    var dom = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    function allChildNodes(node) {
        var walker = document.createTreeWalker(node, NodeFilter.SHOW_ALL, null, false), nodes = [];
        var currentNode;
        do {
            currentNode = walker.currentNode;
            if (currentNode.nodeType !== Node.TEXT_NODE || currentNode.textContent.trim()) {
                nodes.push(currentNode);
            }
        } while (walker.nextNode());
        return nodes;
    }
    exports.allChildNodes = allChildNodes;
    function allTextNodes(node) {
        var a = [], walk = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
        var n;
        while (n = walk.nextNode()) {
            a.push(n);
        }
        return a;
    }
    exports.allTextNodes = allTextNodes;

    });

    var dom$1 = unwrapExports(dom);
    var dom_1 = dom.allChildNodes;
    var dom_2 = dom.allTextNodes;

    var dom$2 = /*#__PURE__*/Object.freeze({
        default: dom$1,
        __moduleExports: dom,
        allChildNodes: dom_1,
        allTextNodes: dom_2
    });

    var objects_1$1 = ( objects$2 && objects$1 ) || objects$2;

    var dom_1$1 = ( dom$2 && dom$1 ) || dom$2;

    var cleanup = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });


    var cleanUpQueue = new WeakMap();
    exports.registerCleanUp = function (node, task) { return objects_1$1.ensure(cleanUpQueue, node, [task]); };
    exports.cleanUp = function (node) { return setTimeout(function () {
        for (var _i = 0, _a = dom_1$1.allChildNodes(node); _i < _a.length; _i++) {
            var n = _a[_i];
            if (cleanUpQueue.has(n)) {
                for (var _b = 0, _c = cleanUpQueue.get(n); _b < _c.length; _b++) {
                    var task = _c[_b];
                    task();
                }
                cleanUpQueue.delete(n);
            }
        }
    }, 80); };

    });

    var cleanup$1 = unwrapExports(cleanup);
    var cleanup_1 = cleanup.registerCleanUp;
    var cleanup_2 = cleanup.cleanUp;

    var cleanup$2 = /*#__PURE__*/Object.freeze({
        default: cleanup$1,
        __moduleExports: cleanup,
        registerCleanUp: cleanup_1,
        cleanUp: cleanup_2
    });

    var strings = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });

    function format(str, obj) {
        return str.replace(/{{.*?}}/g, function (m) {
            return objects_1$1.deepValue(obj, m.substring(2, m.length - 2));
        });
    }
    exports.format = format;
    function namedRegexMatch(text, regex, matchNames) {
        var matches = regex.exec(text);
        if (!matches) {
            return;
        }
        return matches.reduce(function (result, match, index) {
            if (index > 0) {
                result[matchNames[index - 1]] = match;
            }
            return result;
        }, {});
    }
    exports.namedRegexMatch = namedRegexMatch;
    exports.decapitalize = function (str) { return str.charAt(0).toLowerCase() + str.substr(1); };
    exports.camelCaseFromHyphens = function (str) {
        return str.replace(/\b-([a-z])/g, function (all, char) { return char.toUpperCase(); });
    };

    });

    var strings$1 = unwrapExports(strings);
    var strings_1 = strings.format;
    var strings_2 = strings.namedRegexMatch;
    var strings_3 = strings.decapitalize;
    var strings_4 = strings.camelCaseFromHyphens;

    var strings$2 = /*#__PURE__*/Object.freeze({
        default: strings$1,
        __moduleExports: strings,
        format: strings_1,
        namedRegexMatch: strings_2,
        decapitalize: strings_3,
        camelCaseFromHyphens: strings_4
    });

    var cleanup_1$1 = ( cleanup$2 && cleanup$1 ) || cleanup$2;

    var strings_1$1 = ( strings$2 && strings$1 ) || strings$2;

    var construct = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });



    exports.ConstructRegistry = {};
    exports.Singletons = {};
    exports.start = function (root) {
        if (root === void 0) { root = document.documentElement; }
        var createdWidgets = [];
        Object.keys(exports.ConstructRegistry).forEach(function (selector) {
            Array.from(root.querySelectorAll(selector)).forEach(function (node) {
                var widget = new (Function.prototype.bind.apply(exports.ConstructRegistry[selector]));
                exports.runConstructorQueue(widget, node);
                createdWidgets.push(widget);
            });
        });
        return createdWidgets;
    };
    exports.Construct = function (conf) { return function (proto) {
        exports.ConstructRegistry[conf.selector] = proto;
        exports.addToConstructorQueue(proto, function (widget, node) {
            if (conf.singleton === true) {
                var name_1 = strings_1$1.decapitalize(widget.constructor.name);
                exports.Singletons[name_1] = widget;
                cleanup_1$1.registerCleanUp(node, function () {
                    delete exports.Singletons[name_1];
                });
            }
            widget.init(node);
        });
    }; };
    var queue = new WeakMap();
    var renderQueue = new WeakMap();
    exports.addToConstructorQueue = function (constructor, func) {
        objects_1$1.ensure(queue, constructor, [func]);
    };
    exports.addToRenderQueue = function (constructor, func) {
        objects_1$1.ensure(renderQueue, constructor, [func]);
    };
    exports.runConstructorQueue = function (widget, node) {
        var widgetQueue = queue.get(Object.getPrototypeOf(widget).constructor) || [];
        for (var i = 0, n = widgetQueue.length; i < n; i++) { // for performance
            widgetQueue[i].call(widget, widget, node);
        }
    };
    exports.runAfterRenderQueue = function (widget, nodes) {
        var widgetQueue = renderQueue.get(Object.getPrototypeOf(widget).constructor) || [];
        for (var i = 0, n = widgetQueue.length; i < n; i++) { // for performance use for-loops
            for (var m = 0, l = nodes.length; m < l; m++) {
                widgetQueue[i].call(widget, widget, nodes[m]);
            }
        }
    };

    });

    var construct$1 = unwrapExports(construct);
    var construct_1 = construct.ConstructRegistry;
    var construct_2 = construct.Singletons;
    var construct_3 = construct.start;
    var construct_4 = construct.Construct;
    var construct_5 = construct.addToConstructorQueue;
    var construct_6 = construct.addToRenderQueue;
    var construct_7 = construct.runConstructorQueue;
    var construct_8 = construct.runAfterRenderQueue;

    var construct$2 = /*#__PURE__*/Object.freeze({
        default: construct$1,
        __moduleExports: construct,
        ConstructRegistry: construct_1,
        Singletons: construct_2,
        start: construct_3,
        Construct: construct_4,
        addToConstructorQueue: construct_5,
        addToRenderQueue: construct_6,
        runConstructorQueue: construct_7,
        runAfterRenderQueue: construct_8
    });

    var functions = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var getType = {}.toString;
    exports.compose = function (fns) { return function (res) {
        if (fns.length === 1) {
            return fns[0](res);
        }
        return fns.reduce(function (p, c) { return c(p); }, res);
    }; };
    exports.isFunction = function (functionToCheck) {
        return functionToCheck && getType.call(functionToCheck) === '[object Function]';
    };
    exports.isDef = function (x) { return typeof x !== 'undefined'; };
    exports.isUndef = function (x) { return !exports.isDef(x); };

    });

    var functions$1 = unwrapExports(functions);
    var functions_1 = functions.compose;
    var functions_2 = functions.isFunction;
    var functions_3 = functions.isDef;
    var functions_4 = functions.isUndef;

    var functions$2 = /*#__PURE__*/Object.freeze({
        default: functions$1,
        __moduleExports: functions,
        compose: functions_1,
        isFunction: functions_2,
        isDef: functions_3,
        isUndef: functions_4
    });

    var construct_1$1 = ( construct$2 && construct$1 ) || construct$2;

    var functions_1$1 = ( functions$2 && functions$1 ) || functions$2;

    var template = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });




    var DEFAULT_TEMPLATE_NAME = '__default__';
    exports.parsedTemplates = new WeakMap();
    exports.SINGLE_CURLIES = /{(.*?)}/;
    exports.CURLIES = /{{(.*?)}}/;
    var ALL_CURLIES = /{{(.+?)}}/g;
    exports.selfClosingTags = /(<([^<>\s]+)(\s+[^<>\s'"=]+(=[\w\d]+|="[^"]*"|='[^']*'|={{?[^}]*?}?})?)*)\s*\/>/gmi;
    exports.openTags = '$1></$2>';
    var TemplateTokenType;
    (function (TemplateTokenType) {
        TemplateTokenType[TemplateTokenType["CLASS"] = 0] = "CLASS";
        TemplateTokenType[TemplateTokenType["PROPERTY"] = 1] = "PROPERTY";
        TemplateTokenType[TemplateTokenType["ATTRIBUTE"] = 2] = "ATTRIBUTE";
        TemplateTokenType[TemplateTokenType["TEMPLATE"] = 3] = "TEMPLATE";
        TemplateTokenType[TemplateTokenType["TEXT"] = 4] = "TEXT";
        TemplateTokenType[TemplateTokenType["TAG"] = 5] = "TAG";
    })(TemplateTokenType = exports.TemplateTokenType || (exports.TemplateTokenType = {}));
    var TemplateTokenInfo = /** @class */ (function () {
        function TemplateTokenInfo(position, type) {
            this.position = position;
            this.type = type;
        }
        TemplateTokenInfo.prototype.setCurly = function (value) {
            this._curly = value;
            var tokens = value.split(':');
            this._path = tokens.shift();
            this._transformers = tokens;
        };
        TemplateTokenInfo.prototype.curly = function () {
            return this._curly;
        };
        TemplateTokenInfo.prototype.path = function () {
            return this._path;
        };
        TemplateTokenInfo.prototype.transformers = function () {
            return this._transformers;
        };
        TemplateTokenInfo.prototype.arrayTransformer = function () {
            if (this._transformers.length > 1) {
                throw Error('Array filter transformer can have only one method');
            }
            return this.transformers()[0];
        };
        return TemplateTokenInfo;
    }());
    exports.TemplateTokenInfo = TemplateTokenInfo;
    exports.breakApartTextNodes = function (root) {
        var textNodes = dom_1$1.allTextNodes(root);
        for (var i = 0, n = textNodes.length; i < n; i++) {
            var node = textNodes[i];
            var split = node.textContent.split(/({{.*?}})/mg);
            if (split.length > 1) {
                var parent_1 = node.parentNode, frag = document.createDocumentFragment();
                for (var _i = 0, split_1 = split; _i < split_1.length; _i++) {
                    var text = split_1[_i];
                    if (text !== '') {
                        frag.appendChild(document.createTextNode(text));
                    }
                }
                parent_1.replaceChild(frag, node);
            }
        }
        return root;
    };
    var templateTag = document.createElement('template');
    exports.getFragment = function (html) {
        templateTag.innerHTML = html;
        return document.importNode(templateTag.content, true);
    };
    var ParsedTemplate = /** @class */ (function () {
        function ParsedTemplate(doc, nodes, infos) {
            this.doc = doc;
            this.infos = infos;
            this.nodes = nodes;
        }
        ParsedTemplate.prototype.clone = function () {
            var doc = this.doc.cloneNode(true);
            return new ParsedTemplate(doc, dom_1$1.allChildNodes(doc), this.infos);
        };
        return ParsedTemplate;
    }());
    exports.ParsedTemplate = ParsedTemplate;
    exports.getTemplate = function (widget, name) {
        if (name === void 0) { name = DEFAULT_TEMPLATE_NAME; }
        var proto = Object.getPrototypeOf(widget);
        var templates = exports.parsedTemplates.get(proto);
        if (functions_1$1.isUndef(templates) || functions_1$1.isUndef(templates[name])) {
            throw Error("No template found for name " + name + " in " + widget.constructor.name);
        }
        return templates[name].clone();
    };
    exports.parseTemplate = function (templateStr) {
        var source = templateStr.replace(exports.selfClosingTags, exports.openTags), frag = exports.breakApartTextNodes(exports.getFragment(source)), allNodes = dom_1$1.allChildNodes(frag), hookMap = {}; // we need to remember case sensitive hooks, b/c attributes turn lowercase
        var m;
        while (m = ALL_CURLIES.exec(templateStr)) {
            hookMap[m[1].toLowerCase()] = m[1];
        }
        return new ParsedTemplate(frag, allNodes, exports.parseHooks(allNodes, hookMap));
    };
    exports.parseHooks = function (nodes, hookMap) {
        if (hookMap === void 0) { hookMap = {}; }
        var hooks = [];
        var selectors = Object.keys(construct_1$1.ConstructRegistry);
        var match;
        var _loop_1 = function (pos, n) {
            var node = nodes[pos];
            if (node.nodeType === Node.TEXT_NODE) {
                var text = node.textContent, match_1 = exports.CURLIES.exec(text);
                // <div id="2">some text {{myProperty}}</div>
                if (match_1 !== null) {
                    var token = new TemplateTokenInfo(pos, TemplateTokenType.TEXT);
                    token.setCurly(match_1[1]);
                    hooks.push(token);
                }
            }
            else if (node.nodeType === Node.ELEMENT_NODE) {
                var matchingSelectors = selectors.filter(function (s) { return node.matches(s); });
                var inSubWidget = matchingSelectors.length;
                if (inSubWidget) {
                    for (var _i = 0, matchingSelectors_1 = matchingSelectors; _i < matchingSelectors_1.length; _i++) {
                        var selector = matchingSelectors_1[_i];
                        var token = new TemplateTokenInfo(pos, TemplateTokenType.TAG);
                        token.selector = selector;
                        hooks.push(token);
                    }
                }
                for (var _a = 0, _b = Array.from(node.attributes); _a < _b.length; _a++) {
                    var attribute = _b[_a];
                    var attributeName = attribute.nodeName;
                    if (attributeName === 'class') {
                        // <div id="2" class="red {{myClass}} blue">
                        var classes = Array.from(node.classList);
                        for (var _c = 0, classes_1 = classes; _c < classes_1.length; _c++) {
                            var cls = classes_1[_c];
                            if (match = cls.match(exports.CURLIES)) {
                                node.classList.remove(match[0]);
                                var token = new TemplateTokenInfo(pos, TemplateTokenType.CLASS);
                                token.setCurly(match[1]);
                                hooks.push(token);
                            }
                        }
                    }
                    else if (match = attributeName.match(exports.CURLIES)) {
                        // <div id="2" {{myProperty}}>
                        node.removeAttribute(match[0]);
                        var token = new TemplateTokenInfo(pos, TemplateTokenType.PROPERTY);
                        token.setCurly(hookMap[match[1]]);
                        hooks.push(token);
                    }
                    else if (!inSubWidget) {
                        if (attributeName === 'template') {
                            var token = new TemplateTokenInfo(pos, TemplateTokenType.TEMPLATE);
                            token.attribute = attributeName;
                            if (match = attribute.value.match(exports.CURLIES)) {
                                token.setCurly(match[1]);
                            }
                            else {
                                token.setCurly(attribute.value);
                            }
                            hooks.push(token);
                        }
                        else {
                            // <div id="2" myProperty="{{myProperty}}">
                            var value = attribute.value;
                            if (match = value.match(exports.CURLIES)) {
                                node.removeAttribute(attributeName);
                                var token = new TemplateTokenInfo(pos, TemplateTokenType.ATTRIBUTE);
                                token.setCurly(match[1]);
                                token.attribute = attributeName;
                                hooks.push(token);
                            }
                        }
                    }
                }
            }
        };
        for (var pos = 0, n = nodes.length; pos < n; pos++) {
            _loop_1(pos, n);
        }
        return hooks;
    };
    exports.Template = function (name) {
        if (name === void 0) { name = DEFAULT_TEMPLATE_NAME; }
        return function (proto, method) {
            var templateStr = proto[method].call(proto);
            var template = exports.parseTemplate(templateStr);
            objects_1$1.ensure(exports.parsedTemplates, proto, (_a = {}, _a[name] = template, _a));
            var _a;
        };
    };

    });

    var template$1 = unwrapExports(template);
    var template_1 = template.parsedTemplates;
    var template_2 = template.SINGLE_CURLIES;
    var template_3 = template.CURLIES;
    var template_4 = template.selfClosingTags;
    var template_5 = template.openTags;
    var template_6 = template.TemplateTokenType;
    var template_7 = template.TemplateTokenInfo;
    var template_8 = template.breakApartTextNodes;
    var template_9 = template.getFragment;
    var template_10 = template.ParsedTemplate;
    var template_11 = template.getTemplate;
    var template_12 = template.parseTemplate;
    var template_13 = template.parseHooks;
    var template_14 = template.Template;

    var template$2 = /*#__PURE__*/Object.freeze({
        default: template$1,
        __moduleExports: template,
        parsedTemplates: template_1,
        SINGLE_CURLIES: template_2,
        CURLIES: template_3,
        selfClosingTags: template_4,
        openTags: template_5,
        TemplateTokenType: template_6,
        TemplateTokenInfo: template_7,
        breakApartTextNodes: template_8,
        getFragment: template_9,
        ParsedTemplate: template_10,
        getTemplate: template_11,
        parseTemplate: template_12,
        parseHooks: template_13,
        Template: template_14
    });

    var transformer = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });

    exports.TransformerRegistry = {};
    exports.Transformer = function () { return function (proto, method) {
        construct_1$1.addToConstructorQueue(proto.constructor, function (widget) {
            exports.TransformerRegistry[method] = widget[method].bind(widget);
        });
    }; };

    });

    var transformer$1 = unwrapExports(transformer);
    var transformer_1 = transformer.TransformerRegistry;
    var transformer_2 = transformer.Transformer;

    var transformer$2 = /*#__PURE__*/Object.freeze({
        default: transformer$1,
        __moduleExports: transformer,
        TransformerRegistry: transformer_1,
        Transformer: transformer_2
    });

    var arrays = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });


    var observers = new WeakMap();
    function removeFromArray(arr, elements) {
        if (!arr || arr.length === 0) {
            return;
        }
        var deleteCount = 0, total = elements.length;
        for (var i = arr.length; i--;) {
            if (~elements.indexOf(arr[i])) {
                deleteCount++; // optimize removal of consecutive elements
            }
            else if (deleteCount) {
                arr.splice(i + 1, deleteCount);
                if ((total -= deleteCount) === 0) { // if we removed all already, break early
                    deleteCount = 0;
                    break;
                }
                deleteCount = 0;
            }
        }
        if (deleteCount) {
            arr.splice(0, deleteCount);
        }
        return arr;
    }
    exports.removeFromArray = removeFromArray;
    var notify = function (arr, method, args) {
        var listeners = observers.get(arr);
        for (var _i = 0, listeners_1 = listeners; _i < listeners_1.length; _i++) {
            var listener = listeners_1[_i];
            listener[method].apply(arr, args);
        }
    };
    function duckPunchSplice(arr) {
        var old = arr.splice;
        // add docs that removing and re-adding elements to the same array kills event listeners
        arr.splice = function (index, deleteCount) {
            var addedItems = [].slice.call(arguments, 2), deletedItems = old.apply(arr, arguments);
            notify(arr, 'splice', [index, deleteCount, addedItems, deletedItems]);
            return deletedItems;
        };
    }
    function duckPunchSort(arr) {
        var old = arr.sort;
        arr.sort = function (cmp) {
            // sort is a special case, we need to inform listeners how sorting has changed the array
            var indices = exports.range(0, arr.length - 1), args = cmp ? [
                arr.map(function (e, i) { return i; })
                    .sort(function (a, b) { return cmp(arr[a], arr[b]); })
                    .map(function (e) { return indices[e]; })
            ] : indices, res = old.call(arr, cmp);
            notify(arr, 'sort', args);
            return res;
        };
    }
    exports.range = function (start, end) {
        var len = end - start + 1, arr = new Array(len);
        for (var i = 0, l = arr.length; i < l; i++) {
            arr[i] = i + start;
        }
        return arr;
    };
    // essentially we can reduce array modifying functions to two implementations: sort and splice
    exports.observeArray = function (arr, listener) {
        // replace this in the future with es6 proxies
        var listeners = observers.get(arr);
        if (!listeners) {
            observers.set(arr, [listener]);
            arr.pop = function () {
                return arr.splice(arr.length - 1, 1)[0];
            };
            arr.push = function () {
                var items = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    items[_i] = arguments[_i];
                }
                arr.splice.apply(arr, [arr.length, 0].concat(items));
                return arr.length;
            };
            arr.fill = function () {
                throw Error('observed arrays cannot be filled. items must be unique, use Array.splice instead!');
            };
            arr.reverse = function () {
                var ref = arr.slice();
                arr.sort(function (a, b) { return ref.indexOf(b) - ref.indexOf(a); });
                return arr;
            };
            arr.shift = function () {
                return arr.splice(0, 1)[0];
            };
            arr.unshift = function () {
                var items = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    items[_i] = arguments[_i];
                }
                arr.splice.apply(arr, [0, 0].concat(items));
                return arr.length;
            };
            duckPunchSplice(arr);
            duckPunchSort(arr);
        }
        else {
            listeners.push(listener);
        }
    };
    function domArrayListener(arr, el, update, onItemAdded, filter) {
        var nodeVisible = [];
        var elementMap = new WeakMap();
        var listener = {
            sort: function (indices) {
                var copy = [];
                for (var i = 0; i < indices.length; i++) {
                    if (nodeVisible[indices[i]]) {
                        el.appendChild(elementMap.get(arr[i]));
                    }
                    copy[i] = nodeVisible[indices[i]];
                }
                nodeVisible = copy;
            },
            splice: function (index, deleteCount, added, deleted) {
                if (deleted === void 0) { deleted = []; }
                var patch = Array.from(nodeVisible), patchHelper = [index, deleteCount].concat(added.map(function () { return false; }));
                nodeVisible.splice.apply(nodeVisible, patchHelper);
                if (deleteCount) {
                    for (var del = void 0, d = 0; d < deleteCount; d++) {
                        del = deleted[d];
                        var node = elementMap.get(del);
                        if (node && node.parentElement === el) {
                            el.removeChild(node);
                        }
                        if (functions_1$1.isDef(node)) {
                            cleanup_1$1.cleanUp(node);
                        }
                        elementMap.delete(del);
                    }
                }
                if (added.length) {
                    for (var item = void 0, a = 0, n = added.length; a < n; a++) {
                        item = added[a];
                        elementMap.set(item, onItemAdded(item));
                    }
                }
                if (deleteCount || added.length) {
                    update(true);
                }
                patch.splice.apply(patch, patchHelper);
                for (var i = 0, n = arr.length; i < n; i++) {
                    patch[i] = functions_1$1.isUndef(filter) || filter(arr[i], i);
                    var itemNode = elementMap.get(arr[i]);
                    if (patch[i] && !nodeVisible[i]) {
                        var nextVisible = nodeVisible.indexOf(true, i), refNode = ~nextVisible ? elementMap.get(arr[nextVisible]) : undefined;
                        el.insertBefore(itemNode, refNode);
                    }
                    else if (!patch[i] && nodeVisible[i] && itemNode.parentNode === el) {
                        el.removeChild(itemNode);
                    }
                }
                nodeVisible = patch;
            }
        };
        listener.splice(0, 0, arr, []);
        cleanup_1$1.registerCleanUp(el, function () { return observers.delete(arr); });
        return listener;
    }
    exports.domArrayListener = domArrayListener;

    });

    var arrays$1 = unwrapExports(arrays);
    var arrays_1 = arrays.removeFromArray;
    var arrays_2 = arrays.range;
    var arrays_3 = arrays.observeArray;
    var arrays_4 = arrays.domArrayListener;

    var arrays$2 = /*#__PURE__*/Object.freeze({
        default: arrays$1,
        __moduleExports: arrays,
        removeFromArray: arrays_1,
        range: arrays_2,
        observeArray: arrays_3,
        domArrayListener: arrays_4
    });

    var computed = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });

    var computedProps = new WeakMap();
    exports.createComputedListener = function (widget, info, updateDom) {
        var proto = Object.getPrototypeOf(widget);
        if (!computedProps.has(proto) || !computedProps.get(proto)[info.path()]) {
            throw Error('Bound functions must be decorated with @Computed(...paths: string[])');
        }
        computedProps.get(proto)[info.path()].forEach(function (prop) {
            return objects_1$1.createObjectPropertyListener(widget, prop, function () { return updateDom(); });
        });
    };
    exports.Computed = function () {
        var paths = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            paths[_i] = arguments[_i];
        }
        return function (proto, method) {
            objects_1$1.ensure(computedProps, proto, (_a = {}, _a[method] = paths, _a));
            var _a;
        };
    };

    });

    var computed$1 = unwrapExports(computed);
    var computed_1 = computed.createComputedListener;
    var computed_2 = computed.Computed;

    var computed$2 = /*#__PURE__*/Object.freeze({
        default: computed$1,
        __moduleExports: computed,
        createComputedListener: computed_1,
        Computed: computed_2
    });

    var inArray_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });

    var inArray = new WeakMap();
    exports.InArray = function () { return function (proto, property) {
        objects_1$1.ensure(inArray, proto, property);
    }; };
    exports.injectArray = function (widget, array) {
        var proto = Object.getPrototypeOf(widget);
        if (inArray.has(proto)) {
            widget[inArray.get(proto)] = array;
        }
    };

    });

    var inArray = unwrapExports(inArray_1);
    var inArray_2 = inArray_1.InArray;
    var inArray_3 = inArray_1.injectArray;

    var inArray$1 = /*#__PURE__*/Object.freeze({
        default: inArray,
        __moduleExports: inArray_1,
        InArray: inArray_2,
        injectArray: inArray_3
    });

    var template_1$1 = ( template$2 && template$1 ) || template$2;

    var transformer_1$1 = ( transformer$2 && transformer$1 ) || transformer$2;

    var arrays_1$1 = ( arrays$2 && arrays$1 ) || arrays$2;

    var computed_1$1 = ( computed$2 && computed$1 ) || computed$2;

    var in_array_1 = ( inArray$1 && inArray ) || inArray$1;

    var bind = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });











    var subWidgets = new WeakMap();
    /*
     * This will fail for nested arrays when filtered elements are taken out of DOM,
     * however keeping track of the widget tree will make the framework way too complex.
     * For most use cases this will suffice and usually UI triggers changes from and to
     * visible elements. Dispatch code in connectTemplate method.
     */
    var UPDATE_KEY = '__update__';
    var Update = function () { return new CustomEvent(UPDATE_KEY, { bubbles: true, cancelable: false, scoped: false }); };
    var updateDomValue = function (node, info, value, oldValue) {
        if (info.type === template_1$1.TemplateTokenType.TEXT) {
            node.textContent = functions_1$1.isDef(value) ? value : '';
        }
        else if (info.type === template_1$1.TemplateTokenType.CLASS) {
            !!oldValue && node.classList.remove(("" + oldValue).replace(/\s+/g, '-'));
            !!value && node.classList.add(("" + value).replace(/\s+/g, '-'));
        }
        else if (info.type === template_1$1.TemplateTokenType.ATTRIBUTE || info.type === template_1$1.TemplateTokenType.PROPERTY) {
            var attributeName = info.attribute || info.path();
            if (/checked|value|selectedIndex/i.test(attributeName)) {
                node[attributeName] = value;
            }
            else if (functions_1$1.isUndef(value) || value === false) {
                node.removeAttribute(attributeName);
            }
            else {
                var attrValue = value === true ? '' : value;
                node.setAttribute(attributeName, attrValue);
            }
        }
        return value;
    };
    var updateDom = function (widget, template, transformMap, oldValueMap, noArray) {
        if (noArray === void 0) { noArray = false; }
        var domChanged = false;
        var valueMap = getCurrentValueMap(widget, template, transformMap);
        for (var info = void 0, i = 0, n = template.infos.length; i < n; i++) {
            info = template.infos[i];
            if (info.type === template_1$1.TemplateTokenType.TAG) {
                continue;
            }
            var value = valueMap[i];
            if (value === ARRAY_TAG) { // ignore array bindings
                continue;
            }
            if (value === FILTERED_ARRAY_TAG) { // filter other arrays
                if (!noArray) {
                    widget[info.path()].splice(0, 0);
                }
                continue;
            }
            var oldValue = oldValueMap[i];
            if (oldValue !== value) {
                domChanged = true;
                oldValueMap[i] = updateDomValue(template.nodes[info.position], info, value, oldValue);
            }
        }
        return {
            change: domChanged,
            valueMap: oldValueMap
        };
    };
    var bindWidget = function (widget, rootInfo, node) {
        var subWidget = new (Function.prototype.bind.apply(construct_1$1.ConstructRegistry[rootInfo.selector]));
        objects_1$1.ensure(subWidgets, widget, [subWidget]);
        var attributes = Array.prototype.slice.call(node.attributes);
        var _loop_1 = function (attribute, i, n) {
            attribute = attributes[i];
            var match = attribute.value.match(template_1$1.CURLIES);
            var subProp = strings_1$1.camelCaseFromHyphens(attribute.name);
            if (match) {
                var prop_1 = match[1];
                var value = objects_1$1.deepValue(widget, prop_1);
                if (functions_1$1.isFunction(value)) {
                    subWidget[subProp] = value.bind(widget);
                }
                else {
                    if (~prop_1.indexOf(':')) {
                        throw Error("Cannot use transformer for " + prop_1);
                    }
                    var updateVal_1 = function () {
                        subWidget[subProp] = objects_1$1.deepValue(widget, prop_1);
                        return updateVal_1;
                    };
                    objects_1$1.addPropertyListener(widget, prop_1, updateVal_1());
                }
                node.removeAttribute(attribute.name);
            }
            else if (match = attribute.value.match(template_1$1.SINGLE_CURLIES)) {
                subWidget[subProp] = new Function("return " + match[1])();
                node.removeAttribute(attribute.name);
            }
            else {
                subWidget[subProp] = attribute.value;
            }
            out_attribute_1 = attribute;
        };
        var out_attribute_1;
        for (var attribute = void 0, i = 0, n = attributes.length; i < n; i++) {
            _loop_1(attribute, i, n);
            attribute = out_attribute_1;
        }
        construct_1$1.runConstructorQueue(subWidget, node);
    };
    var ARRAY_TAG = Symbol('array_tag');
    var FILTERED_ARRAY_TAG = Symbol('filtered_array_tag');
    var getInfoValue = function (widget, info, transformMap) {
        var path = info.path(), transformer = transformMap[info.curly()];
        var v = objects_1$1.deepValue(widget, path);
        if (info.type === template_1$1.TemplateTokenType.PROPERTY && Array.isArray(v)) {
            return functions_1$1.isFunction(transformer(v)) ? FILTERED_ARRAY_TAG : ARRAY_TAG;
        }
        else {
            v = functions_1$1.isFunction(v) ? v.call(widget) : v;
            v = transformer ? transformer(v) : v;
            return v;
        }
    };
    var getCurrentValueMap = function (widget, template, transformMap) {
        var map = [];
        for (var i = 0, n = template.infos.length; i < n; i++) {
            map[i] = getInfoValue(widget, template.infos[i], transformMap);
        }
        return map;
    };
    var bindArray = function (array, parentNode, widget, info, templateName, update) {
        var transformer = info.arrayTransformer() ? transformFactory(widget, info.transformers())() : undefined;
        var listener = arrays_1$1.domArrayListener(array, parentNode, update, function (item) {
            in_array_1.injectArray(item, array);
            var template = template_1$1.getTemplate(item, templateName()), node = template.nodes[1];
            construct_1$1.runConstructorQueue(item, node);
            exports.connectTemplate(item, node, template, parentNode);
            return node;
        }, transformer);
        arrays_1$1.observeArray(array, listener);
        return listener;
    };
    var getTransformMap = function (widget, template) {
        var map = {};
        for (var info = void 0, i = 0, n = template.infos.length; i < n; i++) {
            info = template.infos[i];
            var transformers = info.transformers();
            if (transformers) {
                map[info.curly()] = transformFactory(widget, transformers);
            }
        }
        return map;
    };
    var findTemplateInfoInNode = function (template, position) {
        return template.infos.find(function (i) { return i.position === position && i.attribute === 'template'; });
    };
    var findPropertyInfoInNode = function (template, position) {
        return template.infos.find(function (i) { return i.position === position && i.type === template_1$1.TemplateTokenType.PROPERTY; });
    };
    var addTemplateAttributeHook = function (widget, node, info, transformMap) {
        var value = getInfoValue(widget, info, transformMap);
        if (functions_1$1.isDef(value)) {
            var updateTemplateNode_1 = function () {
                var value = getInfoValue(widget, info, transformMap);
                exports.render(widget, node, value);
                return updateTemplateNode_1;
            };
            objects_1$1.addPropertyListener(widget, info.path(), updateTemplateNode_1());
        }
        else {
            exports.render(widget, node, info.curly());
        }
        node.removeAttribute('template');
    };
    var bindTemplateInfos = function (template, widget, updateTemplate, transformMap) {
        var bound = [];
        var infos = template.infos;
        var _loop_2 = function (info, i, n) {
            info = infos[i];
            var path = info.path();
            var value = objects_1$1.deepValue(widget, info.path());
            var node = template.nodes[info.position];
            if (info.type === template_1$1.TemplateTokenType.TAG) {
                bindWidget(widget, info, node);
            }
            else if (info.type === template_1$1.TemplateTokenType.PROPERTY) {
                if (Array.isArray(value)) {
                    // check for dynamic template attribute
                    var templateInfo_1 = findTemplateInfoInNode(template, info.position);
                    var attributeValue_1 = node.getAttribute('template') || undefined;
                    var templateName = void 0;
                    if (functions_1$1.isDef(templateInfo_1) && template_1$1.CURLIES.test(attributeValue_1)) {
                        templateName = function () { return getInfoValue(widget, templateInfo_1, transformMap); };
                        objects_1$1.addPropertyListener(widget, templateInfo_1.path(), function () {
                            // this is expensive, should only run for particular listeners
                            value.splice.apply(value, [0, value.length].concat(value));
                        });
                    }
                    else {
                        templateName = function () { return attributeValue_1; };
                    }
                    bindArray(value, node, widget, info, templateName, updateTemplate);
                    node.removeAttribute('template');
                }
            }
            else if (functions_1$1.isFunction(value)) {
                computed_1$1.createComputedListener(widget, info, updateTemplate);
            }
            else if (info.type === template_1$1.TemplateTokenType.TEMPLATE) {
                var propInfo = findPropertyInfoInNode(template, info.position);
                if (functions_1$1.isUndef(propInfo) || !Array.isArray(objects_1$1.deepValue(widget, propInfo.path()))) {
                    addTemplateAttributeHook(widget, node, info, transformMap);
                }
            }
            else if (!bound.includes(path) && !Array.isArray(value)) {
                bound.push(path);
                objects_1$1.createObjectPropertyListener(widget, path, function () { return updateTemplate(); });
            }
            out_info_1 = info;
        };
        var out_info_1;
        for (var info = void 0, i = 0, n = infos.length; i < n; i++) {
            _loop_2(info, i, n);
            info = out_info_1;
        }
    };
    exports.connectTemplate = function (widget, el, template, parentNode) {
        if (parentNode === void 0) { parentNode = el.parentNode; }
        var transformMap = getTransformMap(widget, template);
        var res = updateDom(widget, template, transformMap, []);
        var updateTemplate = function (noArray) {
            if (noArray === void 0) { noArray = false; }
            if (!mutedWidget.has(widget)) {
                res = updateDom(widget, template, transformMap, res.valueMap, noArray);
                if (res.change) {
                    parentNode.dispatchEvent(Update()); // let's inform parent widgets
                }
            }
        };
        el.addEventListener(UPDATE_KEY, function () { return updateTemplate(); }, { passive: true, capture: false });
        bindTemplateInfos(template, widget, updateTemplate, transformMap);
    };
    var transformFactory = function (widget, transformers) {
        return functions_1$1.compose(transformers.map(function (m) {
            var transformer = (widget[m] || transformer_1$1.TransformerRegistry[m]);
            if (functions_1$1.isUndef(transformer)) {
                throw Error("No transformer found for " + m + ". Implement function on " + widget.constructor.name + " or annotate a method with @Transformer()");
            }
            return transformer.bind(widget);
        }));
    };
    exports.render = function (widget, el, name) {
        var children = dom_1$1.allChildNodes(el);
        for (var node = void 0, i = 1, n = children.length; i < n; i++) { // first element is 'el' itself
            node = children[i];
            if (node.parentNode === el) {
                el.removeChild(node);
            }
            cleanup_1$1.cleanUp(node);
        }
        var template = template_1$1.getTemplate(widget, name);
        exports.connectTemplate(widget, el, template);
        el.appendChild(template.doc);
        construct_1$1.runAfterRenderQueue(widget, Array.from(el.children));
    };
    exports.findWidgets = function (widget, type) {
        return subWidgets.get(widget).filter(function (t) { return Object.getPrototypeOf(t) === type.prototype; });
    };
    exports.findWidget = function (widget, type) {
        return exports.findWidgets(widget, type)[0];
    };
    var mutedWidget = new WeakMap();
    exports.Batch = function () { return function (proto, method) {
        construct_1$1.addToConstructorQueue(proto.constructor, function (widget, el) {
            var old = widget[method];
            Object.defineProperty(widget, method, {
                value: function () {
                    mutedWidget.set(widget, true);
                    old.apply(widget, arguments);
                    mutedWidget.delete(widget);
                    el.dispatchEvent(Update());
                }
            });
        });
    }; };

    });

    var bind$1 = unwrapExports(bind);
    var bind_1 = bind.connectTemplate;
    var bind_2 = bind.render;
    var bind_3 = bind.findWidgets;
    var bind_4 = bind.findWidget;
    var bind_5 = bind.Batch;

    var bind$2 = /*#__PURE__*/Object.freeze({
        default: bind$1,
        __moduleExports: bind,
        connectTemplate: bind_1,
        render: bind_2,
        findWidgets: bind_3,
        findWidget: bind_4,
        Batch: bind_5
    });

    var event = createCommonjsModule(function (module, exports) {
    var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });



    var Scope;
    (function (Scope) {
        Scope[Scope["Direct"] = 0] = "Direct";
        Scope[Scope["Delegate"] = 1] = "Delegate";
        Scope[Scope["UntilMatch"] = 2] = "UntilMatch";
    })(Scope = exports.Scope || (exports.Scope = {}));
    function preventDefault(conf, ev) {
        if (conf.preventDefault === true) {
            ev.preventDefault();
        }
    }
    var createHandler = function (event, conf, widget, node, direct) {
        return function (ev) {
            if (direct) {
                preventDefault(conf, ev);
                widget[conf.method].call(widget, ev, node);
            }
            else {
                var el = ev.target;
                do {
                    if (el.nodeType === Node.ELEMENT_NODE && el.matches(conf.selector)) {
                        preventDefault(conf, ev);
                        return widget[conf.method].call(widget, ev, el);
                    }
                    if (el === node && conf.scope !== Scope.UntilMatch) {
                        break;
                    }
                } while (el = el.parentElement);
            }
        };
    };
    var attachEvents = function (conf) { return function (widget, node) {
        var events = Array.isArray(conf.event) ? conf.event : [conf.event];
        events.forEach(function (event) {
            if (conf.scope === Scope.Direct && functions_1$1.isDef(conf.selector)) {
                node = node.querySelector(conf.selector);
            }
            var handler = createHandler(event, conf, widget, node, conf.scope === Scope.Direct || functions_1$1.isUndef(conf.selector));
            node.addEventListener(event, handler, conf.options);
            cleanup_1$1.registerCleanUp(node, function () { return node.removeEventListener(event, handler); });
        });
    }; };
    exports.On = function (conf) { return function (proto, method) {
        var finalConf = __assign({}, conf, { method: method, event: conf.event || method, scope: Scope.Delegate });
        construct_1$1.addToConstructorQueue(proto.constructor, attachEvents(finalConf));
    }; };

    });

    var event$1 = unwrapExports(event);
    var event_1 = event.Scope;
    var event_2 = event.On;

    var event$2 = /*#__PURE__*/Object.freeze({
        default: event$1,
        __moduleExports: event,
        Scope: event_1,
        On: event_2
    });

    var util = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hasPointers = 'onpointerdown' in document.documentElement;
    exports.supportsOnlyTouch = /android|iphone|webos|ipad|ipod|blackberry/i.test(navigator.userAgent);
    exports.addEventListeners = function (types, node, listener, options) {
        types.forEach(function (type) { return node.addEventListener(type, listener, options); });
    };
    exports.removeEventListeners = function (types, node, listener) {
        types.forEach(function (type) { return node.removeEventListener(type, listener); });
    };
    var click = exports.hasPointers ? 'pointerdown' : 'touchstart';
    exports.documentClick = function (el, func) {
        var doc = document.documentElement;
        var handler = function (ev) {
            if (!el.contains(ev.target)) {
                doc.removeEventListener(click, handler);
                func();
            }
        };
        doc.addEventListener(click, handler, { passive: false, capture: false });
    };

    });

    var util$1 = unwrapExports(util);
    var util_1 = util.hasPointers;
    var util_2 = util.supportsOnlyTouch;
    var util_3 = util.addEventListeners;
    var util_4 = util.removeEventListeners;
    var util_5 = util.documentClick;

    var util$2 = /*#__PURE__*/Object.freeze({
        default: util$1,
        __moduleExports: util,
        hasPointers: util_1,
        supportsOnlyTouch: util_2,
        addEventListeners: util_3,
        removeEventListeners: util_4,
        documentClick: util_5
    });

    var util_1$1 = ( util$2 && util$1 ) || util$2;

    var panX = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });



    var PointerEvents = {
        start: ['pointerdown'],
        move: ['pointermove'],
        end: ['pointerup']
    };
    var OnlyTouch = {
        start: ['touchstart'],
        move: ['touchmove'],
        end: ['touchend']
    };
    var NoPointerEvents = {
        start: ['touchstart', 'mousedown'],
        move: ['touchmove', 'mousemove'],
        end: ['touchend', 'mouseup']
    };
    var eventSet = util_1$1.hasPointers ? PointerEvents : (util_1$1.supportsOnlyTouch ? OnlyTouch : NoPointerEvents);
    var Phase;
    (function (Phase) {
        Phase[Phase["start"] = 0] = "start";
        Phase[Phase["move"] = 1] = "move";
        Phase[Phase["end"] = 2] = "end";
    })(Phase = exports.Phase || (exports.Phase = {}));
    var getPanXEvent = function (ev, phase, extra) {
        if (extra === void 0) { extra = {}; }
        var x = ev.clientX || (ev.touches && ev.touches.length ?
            ev.touches[0].pageX : ev.changedTouches[0].pageX);
        var y = ev.clientY || (ev.touches && ev.touches.length ?
            ev.touches[0].pageY : ev.changedTouches[0].pageY);
        return new CustomEvent('pan-x', {
            bubbles: true,
            cancelable: true,
            detail: {
                x: x,
                y: y,
                phase: phase,
                diffX: x - extra.startX,
                diffY: y - extra.startY,
                diffTime: +new Date() - extra.startTime,
                target: ev.target
            }
        });
    };
    var doc = document.documentElement;
    var distance = function (s) {
        return Math.sqrt(s.detail.diffX * s.detail.diffX + s.detail.diffY * s.detail.diffY);
    };
    var initPanX = function (widget, method, conf, node) {
        if (conf.selector) {
            node = node.querySelector(conf.selector);
        }
        var handler = function (sev) {
            var time = +new Date(), isMouse = /mouse/.test(sev.type);
            if (sev.which === 3) {
                return;
            }
            var setIndex = isMouse ? 1 : 0;
            // - - - start - - - //
            sev.preventDefault();
            var startEvent = getPanXEvent(sev, Phase.start);
            var extra = {
                startTime: time,
                startX: startEvent.detail.x,
                startY: startEvent.detail.y
            };
            // - - - move - - - //
            widget[method](startEvent);
            var moveListener = function (mev) {
                var moveEvent = getPanXEvent(mev, Phase.move, extra);
                if (distance(moveEvent) > 5) {
                    mev.preventDefault();
                    widget[method](moveEvent);
                }
            };
            doc.addEventListener(eventSet.move[setIndex], moveListener);
            // - - - end - - - //
            var endListener = function (eev) {
                var endEvent = getPanXEvent(eev, Phase.end, extra);
                if (distance(endEvent) < 5) {
                    eev.target.dispatchEvent(new CustomEvent('tap', { bubbles: true, cancelable: true }));
                }
                widget[method](endEvent);
                doc.removeEventListener(eventSet.move[setIndex], moveListener);
                doc.removeEventListener(eventSet.end[setIndex], endListener);
            };
            doc.addEventListener(eventSet.end[setIndex], endListener);
        };
        util_1$1.addEventListeners(eventSet.start, node, handler);
        cleanup_1$1.registerCleanUp(node, function () { return util_1$1.removeEventListeners(eventSet.start, node, handler); });
    };
    exports.PanX = function (conf) {
        if (conf === void 0) { conf = {}; }
        return function (proto, method) {
            construct_1$1.addToConstructorQueue(proto.constructor, function (widget, node) {
                initPanX(widget, method, conf, node);
            });
        };
    };

    });

    var panX$1 = unwrapExports(panX);
    var panX_1 = panX.Phase;
    var panX_2 = panX.PanX;

    var panX$2 = /*#__PURE__*/Object.freeze({
        default: panX$1,
        __moduleExports: panX,
        Phase: panX_1,
        PanX: panX_2
    });

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') { return; }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var css = ".viewport {\n    overflow: hidden;\n    width: 100%;\n    -ms-touch-action: none !important;\n        touch-action: none !important;\n}\n\n.snap-scroll {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    will-change: transform;\n    width: 100%;\n}\n\n.snap-scroll > * {\n        display: block;\n        -webkit-box-flex: 0;\n            -ms-flex: none;\n                flex: none;\n        width: 100%;\n    }\n\n.snap-scroll.animate {\n        -webkit-transition: all .3s ease-out;\n        transition: all .3s ease-out;\n    }\n\n";
    styleInject(css);

    var event_1$1 = ( event$2 && event$1 ) || event$2;

    var pan_x_1 = ( panX$2 && panX$1 ) || panX$2;

    var snapScroll$1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });





    var SnapScroll = /** @class */ (function () {
        function SnapScroll() {
            var _this = this;
            this.init = function (el) {
                _this.element = el;
                _this.applyCurrentSlide();
            };
        }
        SnapScroll.prototype.applyCurrentSlide = function () {
            this.element.style.transform = "translateX(" + -this.currentSlide * 100 + "%)";
        };
        SnapScroll.prototype.next = function () {
            this.go(this.currentSlide + 1, true);
        };
        SnapScroll.prototype.prev = function () {
            this.go(this.currentSlide - 1, true);
        };
        SnapScroll.prototype.reset = function (slide) {
            this.go(slide, false);
        };
        SnapScroll.prototype.go = function (slide, animate) {
            if (animate) {
                var cls = this.element.classList;
                if (cls.contains('animate')) {
                    return;
                }
                cls.add('animate');
            }
            this.currentSlide = slide;
            this.applyCurrentSlide();
        };
        SnapScroll.prototype.panX1 = function (ev) {
            var el = this.element, detail = ev.detail, cls = el.classList;
            if (cls.contains('animate')) {
                return;
            }
            switch (detail.phase) {
                case pan_x_1.Phase.start:
                    cls.add('drag');
                    break;
                case pan_x_1.Phase.move:
                    el.style.transform = "translateX(" + -this.currentSlide * 100 + "%) translateX(" + detail.diffX + "px)";
                    break;
                case pan_x_1.Phase.end:
                    cls.remove('drag');
                    var diffX = Math.abs(detail.diffX);
                    if (diffX !== 0) {
                        cls.add('animate');
                        if ((detail.diffTime < 150 && diffX > 10) || (diffX > el.getBoundingClientRect().width / 2)) {
                            this.currentSlide += detail.diffX < 0 ? 1 : -1;
                        }
                        this.applyCurrentSlide();
                    }
                    break;
            }
        };
        SnapScroll.prototype.abort = function (slide) {
            this.element.classList.remove('animate');
            this.go(slide, false);
        };
        SnapScroll.prototype.transitionend = function (ev) {
            this.element.classList.remove('animate');
            this.slideChanged(this.currentSlide);
        };
        tslib_es6.__decorate([
            pan_x_1.PanX()
        ], SnapScroll.prototype, "panX1", null);
        tslib_es6.__decorate([
            event_1$1.On({})
        ], SnapScroll.prototype, "transitionend", null);
        SnapScroll = tslib_es6.__decorate([
            construct_1$1.Construct({ selector: '.snap-scroll' })
        ], SnapScroll);
        return SnapScroll;
    }());
    exports.SnapScroll = SnapScroll;

    });

    unwrapExports(snapScroll$1);
    var snapScroll_1 = snapScroll$1.SnapScroll;

    var fecha = createCommonjsModule(function (module) {
    (function (main) {

      /**
       * Parse or format dates
       * @class fecha
       */
      var fecha = {};
      var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
      var twoDigits = /\d\d?/;
      var threeDigits = /\d{3}/;
      var fourDigits = /\d{4}/;
      var word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
      var literal = /\[([^]*?)\]/gm;
      var noop = function () {
      };

      function shorten(arr, sLen) {
        var newArr = [];
        for (var i = 0, len = arr.length; i < len; i++) {
          newArr.push(arr[i].substr(0, sLen));
        }
        return newArr;
      }

      function monthUpdate(arrName) {
        return function (d, v, i18n) {
          var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());
          if (~index) {
            d.month = index;
          }
        };
      }

      function pad(val, len) {
        val = String(val);
        len = len || 2;
        while (val.length < len) {
          val = '0' + val;
        }
        return val;
      }

      var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var monthNamesShort = shorten(monthNames, 3);
      var dayNamesShort = shorten(dayNames, 3);
      fecha.i18n = {
        dayNamesShort: dayNamesShort,
        dayNames: dayNames,
        monthNamesShort: monthNamesShort,
        monthNames: monthNames,
        amPm: ['am', 'pm'],
        DoFn: function DoFn(D) {
          return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
        }
      };

      var formatFlags = {
        D: function(dateObj) {
          return dateObj.getDate();
        },
        DD: function(dateObj) {
          return pad(dateObj.getDate());
        },
        Do: function(dateObj, i18n) {
          return i18n.DoFn(dateObj.getDate());
        },
        d: function(dateObj) {
          return dateObj.getDay();
        },
        dd: function(dateObj) {
          return pad(dateObj.getDay());
        },
        ddd: function(dateObj, i18n) {
          return i18n.dayNamesShort[dateObj.getDay()];
        },
        dddd: function(dateObj, i18n) {
          return i18n.dayNames[dateObj.getDay()];
        },
        M: function(dateObj) {
          return dateObj.getMonth() + 1;
        },
        MM: function(dateObj) {
          return pad(dateObj.getMonth() + 1);
        },
        MMM: function(dateObj, i18n) {
          return i18n.monthNamesShort[dateObj.getMonth()];
        },
        MMMM: function(dateObj, i18n) {
          return i18n.monthNames[dateObj.getMonth()];
        },
        YY: function(dateObj) {
          return String(dateObj.getFullYear()).substr(2);
        },
        YYYY: function(dateObj) {
          return pad(dateObj.getFullYear(), 4);
        },
        h: function(dateObj) {
          return dateObj.getHours() % 12 || 12;
        },
        hh: function(dateObj) {
          return pad(dateObj.getHours() % 12 || 12);
        },
        H: function(dateObj) {
          return dateObj.getHours();
        },
        HH: function(dateObj) {
          return pad(dateObj.getHours());
        },
        m: function(dateObj) {
          return dateObj.getMinutes();
        },
        mm: function(dateObj) {
          return pad(dateObj.getMinutes());
        },
        s: function(dateObj) {
          return dateObj.getSeconds();
        },
        ss: function(dateObj) {
          return pad(dateObj.getSeconds());
        },
        S: function(dateObj) {
          return Math.round(dateObj.getMilliseconds() / 100);
        },
        SS: function(dateObj) {
          return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
        },
        SSS: function(dateObj) {
          return pad(dateObj.getMilliseconds(), 3);
        },
        a: function(dateObj, i18n) {
          return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
        },
        A: function(dateObj, i18n) {
          return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
        },
        ZZ: function(dateObj) {
          var o = dateObj.getTimezoneOffset();
          return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
        }
      };

      var parseFlags = {
        D: [twoDigits, function (d, v) {
          d.day = v;
        }],
        Do: [new RegExp(twoDigits.source + word.source), function (d, v) {
          d.day = parseInt(v, 10);
        }],
        M: [twoDigits, function (d, v) {
          d.month = v - 1;
        }],
        YY: [twoDigits, function (d, v) {
          var da = new Date(), cent = +('' + da.getFullYear()).substr(0, 2);
          d.year = '' + (v > 68 ? cent - 1 : cent) + v;
        }],
        h: [twoDigits, function (d, v) {
          d.hour = v;
        }],
        m: [twoDigits, function (d, v) {
          d.minute = v;
        }],
        s: [twoDigits, function (d, v) {
          d.second = v;
        }],
        YYYY: [fourDigits, function (d, v) {
          d.year = v;
        }],
        S: [/\d/, function (d, v) {
          d.millisecond = v * 100;
        }],
        SS: [/\d{2}/, function (d, v) {
          d.millisecond = v * 10;
        }],
        SSS: [threeDigits, function (d, v) {
          d.millisecond = v;
        }],
        d: [twoDigits, noop],
        ddd: [word, noop],
        MMM: [word, monthUpdate('monthNamesShort')],
        MMMM: [word, monthUpdate('monthNames')],
        a: [word, function (d, v, i18n) {
          var val = v.toLowerCase();
          if (val === i18n.amPm[0]) {
            d.isPm = false;
          } else if (val === i18n.amPm[1]) {
            d.isPm = true;
          }
        }],
        ZZ: [/([\+\-]\d\d:?\d\d|Z)/, function (d, v) {
          if (v === 'Z') v = '+00:00';
          var parts = (v + '').match(/([\+\-]|\d\d)/gi), minutes;

          if (parts) {
            minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
            d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
          }
        }]
      };
      parseFlags.dd = parseFlags.d;
      parseFlags.dddd = parseFlags.ddd;
      parseFlags.DD = parseFlags.D;
      parseFlags.mm = parseFlags.m;
      parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
      parseFlags.MM = parseFlags.M;
      parseFlags.ss = parseFlags.s;
      parseFlags.A = parseFlags.a;


      // Some common format strings
      fecha.masks = {
        default: 'ddd MMM DD YYYY HH:mm:ss',
        shortDate: 'M/D/YY',
        mediumDate: 'MMM D, YYYY',
        longDate: 'MMMM D, YYYY',
        fullDate: 'dddd, MMMM D, YYYY',
        shortTime: 'HH:mm',
        mediumTime: 'HH:mm:ss',
        longTime: 'HH:mm:ss.SSS'
      };

      /***
       * Format a date
       * @method format
       * @param {Date|number} dateObj
       * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
       */
      fecha.format = function (dateObj, mask, i18nSettings) {
        var i18n = i18nSettings || fecha.i18n;

        if (typeof dateObj === 'number') {
          dateObj = new Date(dateObj);
        }

        if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
          throw new Error('Invalid Date in fecha.format');
        }

        mask = fecha.masks[mask] || mask || fecha.masks['default'];

        var literals = [];

        // Make literals inactive by replacing them with ??
        mask = mask.replace(literal, function($0, $1) {
          literals.push($1);
          return '??';
        });
        // Apply formatting rules
        mask = mask.replace(token, function ($0) {
          return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
        });
        // Inline literal values back into the formatted value
        return mask.replace(/\?\?/g, function() {
          return literals.shift();
        });
      };

      /**
       * Parse a date string into an object, changes - into /
       * @method parse
       * @param {string} dateStr Date string
       * @param {string} format Date parse format
       * @returns {Date|boolean}
       */
      fecha.parse = function (dateStr, format, i18nSettings) {
        var i18n = i18nSettings || fecha.i18n;

        if (typeof format !== 'string') {
          throw new Error('Invalid format in fecha.parse');
        }

        format = fecha.masks[format] || format;

        // Avoid regular expression denial of service, fail early for really long strings
        // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
        if (dateStr.length > 1000) {
          return false;
        }

        var isValid = true;
        var dateInfo = {};
        format.replace(token, function ($0) {
          if (parseFlags[$0]) {
            var info = parseFlags[$0];
            var index = dateStr.search(info[0]);
            if (!~index) {
              isValid = false;
            } else {
              dateStr.replace(info[0], function (result) {
                info[1](dateInfo, result, i18n);
                dateStr = dateStr.substr(index + result.length);
                return result;
              });
            }
          }

          return parseFlags[$0] ? '' : $0.slice(1, $0.length - 1);
        });

        if (!isValid) {
          return false;
        }

        var today = new Date();
        if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
          dateInfo.hour = +dateInfo.hour + 12;
        } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
          dateInfo.hour = 0;
        }

        var date;
        if (dateInfo.timezoneOffset != null) {
          dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
          date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1,
            dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
        } else {
          date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1,
            dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
        }
        return date;
      };

      /* istanbul ignore next */
      if (module.exports) {
        module.exports = fecha;
      } else if (typeof undefined === 'function' && undefined.amd) {
        undefined(function () {
          return fecha;
        });
      } else {
        main.fecha = fecha;
      }
    })(commonjsGlobal);
    });
    var fecha_1 = fecha.format;
    var fecha_2 = fecha.parse;

    var dayOffset = function (date, offset) {
        return new Date(+date + (offset * 24 * 60 * 60 * 1000));
    };
    var monthOffset = function (date, offset) {
        var d = new Date(+date);
        d.setMonth(d.getMonth() + offset);
        return d;
    };
    var yearOffset = function (date, offset) {
        var d = new Date(+date);
        d.setFullYear(d.getFullYear() + offset);
        return d;
    };
    var Weekday;
    (function (Weekday) {
        Weekday[Weekday["Sunday"] = 0] = "Sunday";
        Weekday[Weekday["Monday"] = 1] = "Monday";
        Weekday[Weekday["Tuesday"] = 2] = "Tuesday";
        Weekday[Weekday["Wednesday"] = 3] = "Wednesday";
        Weekday[Weekday["Thursday"] = 4] = "Thursday";
        Weekday[Weekday["Friday"] = 5] = "Friday";
        Weekday[Weekday["Saturday"] = 6] = "Saturday";
    })(Weekday || (Weekday = {}));
    var isToday = function (d) {
        var td = new Date();
        return td.getDate() === d.getDate() && td.getMonth() === d.getMonth() && td.getFullYear() === d.getFullYear();
    };
    var precedingDay = function (date, weekday) {
        var d = new Date(+date);
        d.setDate(d.getDate() - (d.getDay() + (7 - weekday)) % 7);
        return d;
    };
    var getRenderableMonth = function (d) {
        var start = precedingDay(new Date(d.getFullYear(), d.getMonth(), 1), Weekday.Monday);
        return arrays_2(0, 41).map(function (day) { return dayOffset(start, day); });
    };

    var css$1 = "date-picker {\r\n    max-width: 200px;\r\n    display: block;\r\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n    date-picker .icon.icon {\r\n        cursor: pointer;\r\n        pointer-events: initial !important;\r\n        color: #fff;\r\n    }\r\n\r\n    date-picker .head {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        margin-top: -4px;\r\n        padding-bottom: 4px;\r\n    }\r\n\r\n    date-picker .head div {\r\n            -webkit-box-flex: 1;\r\n                -ms-flex: auto;\r\n                    flex: auto;\r\n            text-align: center;\r\n        }\r\n\r\n    date-picker .head span {\r\n            -webkit-box-flex: 0;\r\n                -ms-flex: 0 0 27px;\r\n                    flex: 0 0 27px;\r\n            text-align: center;\r\n            cursor: pointer;\r\n        }\r\n\r\n    date-picker .head span .icon.icon {\r\n                height: 16px;\r\n                height: 1rem;\r\n                width: 16px;\r\n                width: 1rem;\r\n                position: relative;\r\n                color: black;\r\n            }\r\n\r\n    date-picker .dropdown {\r\n        width: 27px;\r\n        -webkit-user-select: none;\r\n           -moz-user-select: none;\r\n            -ms-user-select: none;\r\n                user-select: none;\r\n    }\r\n\r\n    date-picker .dropdown-menu {\r\n        width: 198px;\r\n    }\r\n\r\n    date-picker .dropdown-content {\r\n        background-color: whitesmoke;\r\n        padding-bottom: 0;\r\n    }\r\n\r\n    date-picker .viewport {\r\n        border-radius: 4px;\r\n        padding-bottom: 8px;\r\n        padding-bottom: .5rem;\r\n        position: relative;\r\n    }\r\n\r\n    date-picker .month {\r\n        font-size: 12px;\r\n        font-size: .75rem;\r\n    }\r\n\r\n    date-picker .month ul {\r\n            display: -webkit-box;\r\n            display: -ms-flexbox;\r\n            display: flex;\r\n            -ms-flex-wrap: wrap;\r\n                flex-wrap: wrap;\r\n            width: 100%;\r\n        }\r\n\r\n    date-picker .month ul.weekdays {\r\n                background-color: whitesmoke;\r\n                color: #a4a4a4;\r\n            }\r\n\r\n    date-picker .month ul li {\r\n                -webkit-box-flex: 0;\r\n                    -ms-flex: 0 0 14.28571%;\r\n                        flex: 0 0 14.28571%;\r\n                display: block;\r\n                text-align: center;\r\n                line-height: 24px;\r\n                line-height: 1.5rem;\r\n            }\r\n\r\n    date-picker .month ul li.today {\r\n                    background-color: #cc415d !important;\r\n                    color: white !important;\r\n                }\r\n\r\n    date-picker .month ul.dates {\r\n                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n                cursor: pointer;\r\n                background-color: white;\r\n            }\r\n\r\n    date-picker .months:not(.drag) .dates > li:hover {\r\n        background-color: #d8e7f1;\r\n    }\r\n";
    styleInject(css$1);

    var Day = /** @class */ (function () {
        function Day(date) {
            this.parsable = function (date) { return fecha_1(date, 'DD/MM/YYYY'); };
            this.asDate = function (date) { return fecha_1(date, 'D'); };
            this.asWeekDay = function (date) { return fecha_1(date, 'ddd').substr(0, 2); };
            this.asMonth = function (date) { return fecha_1(date, 'MMM'); };
            this.asYear = function (date) { return fecha_1(date, 'YYYY'); };
            this.isToday = function (date) { return isToday(date) ? 'today' : undefined; };
            this.date = date;
        }
        Day.prototype.dateMarkup = function () {
            return "<li date=\"{{date:parsable}}\" class=\"{{date:isToday}}\">{{date:asDate}}</li>";
        };
        Day.prototype.weekDayMarkup = function () {
            return "<li>{{date:asWeekDay}}</li>";
        };
        Day.prototype.monthMarkup = function () {
            return "<li date=\"{{date:parsable}}\">{{date:asMonth}}</li>";
        };
        Day.prototype.yearMarkup = function () {
            return "<li date=\"{{date:parsable}}\">{{date:asYear}}</li>";
        };
        __decorate([
            template_14('date')
        ], Day.prototype, "dateMarkup", null);
        __decorate([
            template_14('weekday')
        ], Day.prototype, "weekDayMarkup", null);
        __decorate([
            template_14('month')
        ], Day.prototype, "monthMarkup", null);
        __decorate([
            template_14('year')
        ], Day.prototype, "yearMarkup", null);
        return Day;
    }());

    var Month = /** @class */ (function () {
        function Month(date) {
            this.firstWeek = function () { return function (day, idx) { return idx < 7; }; };
            this.days = getRenderableMonth(date).map(function (d) { return new Day(d); });
            this.date = date;
        }
        Month.prototype.markup = function () {
            return "\n        <li class=\"month\">\n            <ul class=\"weekdays\" template=\"weekday\" {{days:firstWeek}} />\n            <ul class=\"dates\"  template=\"date\" {{days}} />\n        </li>\n        ";
        };
        __decorate([
            template_14()
        ], Month.prototype, "markup", null);
        return Month;
    }());

    var css$2 = "month-selector,\nyear-selector {\n    position: absolute;\n    z-index: 1;\n    background-color: white;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    -webkit-transition: all .3s ease-out;\n    transition: all .3s ease-out;\n}\n\n    month-selector.off, year-selector.off {\n        -webkit-transform: translateY(-100%);\n                transform: translateY(-100%);\n    }\n\n    month-selector > ul, year-selector > ul {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        -ms-flex-line-pack: stretch;\n            align-content: stretch;\n        cursor: pointer;\n    }\n\n    month-selector > ul > li, year-selector > ul > li {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                    justify-content: center;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            -webkit-box-flex: 0;\n                -ms-flex: none;\n                    flex: none;\n            width: 33.3333%;\n        }\n\n    month-selector > ul > li:hover, year-selector > ul > li:hover {\n                background-color: #d8e7f1;\n            }\n";
    styleInject(css$2);

    var YearSelector = /** @class */ (function () {
        function YearSelector() {
            var _this = this;
            this.years = [];
            this.init = function (el) {
                bind_2(_this, el);
            };
            this.format = function (date) { return fecha_1(date, 'MMM'); };
        }
        YearSelector.prototype.createYears = function (date) {
            (_a = this.years).splice.apply(_a, [0, 12].concat(arrays_2(-7, 4)
                .map(function (i) { return new Day(new Date(date.getFullYear() + i, 1, 1)); })));
            var _a;
        };
        YearSelector.prototype.next = function () {
            this.currentYear = yearOffset(this.currentYear, 12);
            this.createYears(this.currentYear);
        };
        YearSelector.prototype.prev = function () {
            this.currentYear = yearOffset(this.currentYear, -12);
            this.createYears(this.currentYear);
        };
        YearSelector.prototype.markup = function () {
            return "<ul class=\"years\" template=\"year\" {{years}}/>";
        };
        __decorate([
            template_14()
        ], YearSelector.prototype, "markup", null);
        YearSelector = __decorate([
            construct_4({ selector: 'year-selector' })
        ], YearSelector);
        return YearSelector;
    }());

    var templateNode = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });

    exports.TemplateNode = function (selector) { return function (proto, property) {
        construct_1$1.addToRenderQueue(proto.constructor, function (widget, node) {
            widget[property] = node.querySelector(selector);
        });
    }; };

    });

    var templateNode$1 = unwrapExports(templateNode);
    var templateNode_1 = templateNode.TemplateNode;

    var templateNode$2 = /*#__PURE__*/Object.freeze({
        default: templateNode$1,
        __moduleExports: templateNode,
        TemplateNode: templateNode_1
    });

    var bind_1$1 = ( bind$2 && bind$1 ) || bind$2;

    var formWidget = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });

    var FormWidget = /** @class */ (function () {
        function FormWidget() {
            var _this = this;
            this.init = function (el) { return bind_1$1.render(_this, el); };
        }
        return FormWidget;
    }());
    exports.FormWidget = FormWidget;

    });

    unwrapExports(formWidget);
    var formWidget_1 = formWidget.FormWidget;

    var fetch_1 = createCommonjsModule(function (module, exports) {
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });




    var fetchErrors = new WeakMap();
    var defaultProcessor = function (res) { return res.json(); };
    var handleErrors = function (response) {
        if (!response.ok) {
            throw new ResponseError(response.statusText, response);
        }
        return response;
    };
    var ResponseError = /** @class */ (function (_super) {
        __extends(ResponseError, _super);
        function ResponseError(message, response) {
            var _this = _super.call(this, message) || this;
            _this.response = response;
            return _this;
        }
        return ResponseError;
    }(Error));
    var execFetch = function (url, conf, processor) {
        if (processor === void 0) { processor = defaultProcessor; }
        return fetch(url, conf)
            .then(handleErrors)
            .then(processor);
    };
    var Xhr = function (fetchMethod) { return function (conf) { return function (proto, method) {
        construct_1$1.addToConstructorQueue(proto.constructor, function (widget) {
            var oldMethod = proto[method];
            widget[method] = function (body) {
                var payload = [body]
                    .filter(functions_1$1.isDef)
                    .map(function (body) { return typeof body === 'string' ? body : JSON.stringify(body); });
                var finalConf = Object
                    .keys(conf)
                    .reduce(function (p, c) {
                    return (p[c] = functions_1$1.isFunction(p[c]) ? p[c].call(widget) : p[c]) && p;
                }, __assign({}, conf, { url: strings_1$1.format(conf.url, widget), body: payload[0], method: fetchMethod }));
                return execFetch(finalConf.url, finalConf, finalConf.processor)
                    .then(function (res) {
                    oldMethod.apply(widget, payload.concat([res]));
                    return res;
                }) // if await should not be used
                    .catch(function (error) {
                    if (fetchErrors.has(proto)) {
                        var errFunc = fetchErrors.get(proto)["" + error.response.status];
                        if (errFunc) {
                            widget[errFunc].call(widget, error);
                        }
                    }
                });
            };
        });
    }; }; };
    exports.Get = Xhr('GET');
    exports.Post = Xhr('POST');
    exports.Delete = Xhr('DELETE');
    exports.Put = Xhr('PUT');
    exports.FetchError = function (status) { return function (proto, method) {
        objects_1$1.ensure(fetchErrors, proto, (_a = {}, _a["" + status] = method, _a));
        var _a;
    }; };

    });

    var fetch$1 = unwrapExports(fetch_1);
    var fetch_2 = fetch_1.Get;
    var fetch_3 = fetch_1.Post;
    var fetch_4 = fetch_1.Delete;
    var fetch_5 = fetch_1.Put;
    var fetch_6 = fetch_1.FetchError;

    var fetch$2 = /*#__PURE__*/Object.freeze({
        default: fetch$1,
        __moduleExports: fetch_1,
        Get: fetch_2,
        Post: fetch_3,
        Delete: fetch_4,
        Put: fetch_5,
        FetchError: fetch_6
    });

    var localStorage = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });




    var storableProperties = new WeakMap();
    var widgetId = function (widget) {
        var id = widget.id || widget.name || widget.title || widget.constructor.name;
        return functions_1$1.isFunction(id) ? id() : id;
    };
    var store = function (key, value) {
        window.localStorage.setItem(key, JSON.stringify({ value: value }));
    };
    var load = function (key) {
        var json = window.localStorage.getItem(key);
        if (json) {
            return JSON.parse(json).value;
        }
    };
    var loadArray = function (key, proto) {
        var props = storableProperties.get(proto);
        var arr = load(key);
        if (!arr || functions_1$1.isUndef(props)) {
            return;
        }
        return arr.map(function (i) {
            return props.reduce(function (p, c) {
                p[c] = i[c];
                return p;
            }, new (Function.prototype.bind.apply(proto)));
        });
    };
    var storeQueue = new WeakMap();
    var storeArray = function (key, arr, proto) {
        if (storeQueue.has(arr)) {
            clearTimeout(storeQueue.get(arr));
        }
        storeQueue.set(arr, setTimeout(function () {
            var props = storableProperties.get(proto);
            if (functions_1$1.isUndef(props)) {
                throw Error('@LocalStorage array items must have at least one @Storable() property');
            }
            var value = arr.map(function (i) { return objects_1$1.getSubset(props, i); });
            store(key, value);
        }, 80));
    };
    var storeListener = function (arr, callback) {
        var listener = {
            sort: callback,
            splice: function (i, d, a) {
                if (a.length) {
                    a.forEach(function (item) {
                        var proto = Object.getPrototypeOf(item), props = storableProperties.get(proto.constructor);
                        props.forEach(function (prop) {
                            objects_1$1.addPropertyListener(item, prop, callback);
                        });
                    });
                }
                if (a.length || d > 0) {
                    callback();
                }
            }
        };
        arrays_1$1.observeArray(arr, listener);
        listener.splice(0, 0, arr);
    };
    var handler = function (prop, arrayType) { return function (widget) {
        var storeKey = widgetId(widget) + '.' + prop;
        var value = widget[prop];
        if (Array.isArray(value)) {
            var type_1 = functions_1$1.isDef(arrayType) ? arrayType() : undefined;
            if (functions_1$1.isUndef(type_1)) {
                throw Error("Stored array '" + prop + "' needs an arrayType factory argument");
            }
            try {
                var tryValue = loadArray(storeKey, type_1);
                if (functions_1$1.isDef(tryValue)) {
                    value = widget[prop] = tryValue;
                }
            }
            catch (e) {
                console.warn('LocalStorage loading failed...ignoring');
                // format changed or something else failed
            }
            storeListener(value, function () {
                storeArray(storeKey, value, type_1);
            });
        }
        else {
            var tryValue = load(storeKey);
            if (functions_1$1.isDef(tryValue)) {
                widget[prop] = tryValue;
            }
            objects_1$1.addPropertyListener(widget, prop, function () {
                store(storeKey, widget[prop]);
            });
        }
    }; };
    exports.LocalStorage = function (arrayType) { return function (proto, property) {
        construct_1$1.addToConstructorQueue(proto.constructor, handler(property, arrayType));
    }; };
    exports.Storable = function () { return function (proto, property) {
        objects_1$1.ensure(storableProperties, proto.constructor, [property]);
    }; };

    });

    var localStorage$1 = unwrapExports(localStorage);
    var localStorage_1 = localStorage.LocalStorage;
    var localStorage_2 = localStorage.Storable;

    var localStorage$2 = /*#__PURE__*/Object.freeze({
        default: localStorage$1,
        __moduleExports: localStorage,
        LocalStorage: localStorage_1,
        Storable: localStorage_2
    });

    var mediaQuery = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });


    exports.MediaQuery = function (query) { return function (proto, method) {
        var mediaQueryHandler = function (widget, node) { return function (mq) {
            if (mq.matches) {
                widget[method].call(widget, node);
            }
        }; };
        construct_1$1.addToConstructorQueue(proto.constructor, function (widget, node) {
            var mediaQueryList = window.matchMedia(query);
            var handler = mediaQueryHandler(widget, node);
            mediaQueryList.addListener(handler);
            cleanup_1$1.registerCleanUp(node, function () { return mediaQueryList.removeListener(handler); });
            handler(mediaQueryList);
        });
    }; };

    });

    var mediaQuery$1 = unwrapExports(mediaQuery);
    var mediaQuery_1 = mediaQuery.MediaQuery;

    var mediaQuery$2 = /*#__PURE__*/Object.freeze({
        default: mediaQuery$1,
        __moduleExports: mediaQuery,
        MediaQuery: mediaQuery_1
    });

    var router = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });



    exports.routeListeners = {};
    var namedRx = /[:*]\w+/gi;
    var historyAPI = (window.history && window.history.pushState) && document.querySelector('[routing="hash"]') === null;
    var rules = [
        [/:\w+/gi, '([\\w\\d-]+)'],
        [/\*\w+/gi, '(.+)']
    ];
    // supports :param and *param and optional parts ()
    var namedMatch = function (pattern, input) {
        var names = pattern.match(namedRx);
        if (names && names.length) {
            names = names.map(function (str) { return str.substr(1); });
            var repl = rules.reduce(function (p, c) { return p.replace(c[0], c[1]); }, pattern), finalR = new RegExp('^' + repl + '$', 'gi');
            return strings_1$1.namedRegexMatch(input, finalR, names);
        }
        else {
            if (new RegExp('^' + pattern + '$', 'gi').exec(input)) {
                return {};
            }
        }
    };
    var getCurrentRoute = function () {
        var path = location.pathname;
        if (!historyAPI) {
            if (path !== '/') {
                location.replace('/#' + path);
            }
            else {
                path = !location.hash ? '/' : location.hash.replace(/^#/, '');
            }
        }
        return path;
    };
    var notifyListeners = function (route) {
        Object.values(exports.routeListeners).forEach(function (handlers) {
            return handlers.forEach(function (rh) {
                var matchedParams = namedMatch(rh.route, route);
                if (matchedParams) {
                    rh.callback(matchedParams);
                }
            });
        });
    };
    exports.navigate = function (path) {
        if (historyAPI) {
            history.pushState(null, '', path);
            notifyListeners(getCurrentRoute());
        }
        else {
            location.hash = path;
        }
    };
    exports.runRoutes = function () {
        if (!window['blockRouting']) {
            notifyListeners(getCurrentRoute());
        }
        window.addEventListener(historyAPI ? 'popstate' : 'hashchange', function () { return notifyListeners(getCurrentRoute()); }, false);
    };
    exports.Route = function (route) { return function (proto, method) {
        construct_1$1.addToConstructorQueue(proto.constructor, function (widget, node) {
            if (!exports.routeListeners[route]) {
                exports.routeListeners[route] = [];
            }
            var handler = { route: route, callback: widget[method].bind(widget) };
            exports.routeListeners[route].push(handler);
            cleanup_1$1.registerCleanUp(node, function () { return exports.routeListeners[route].splice(exports.routeListeners[route].indexOf(handler), 1); });
        });
    }; };

    });

    var router$1 = unwrapExports(router);
    var router_1 = router.routeListeners;
    var router_2 = router.navigate;
    var router_3 = router.runRoutes;
    var router_4 = router.Route;

    var router$2 = /*#__PURE__*/Object.freeze({
        default: router$1,
        __moduleExports: router,
        routeListeners: router_1,
        navigate: router_2,
        runRoutes: router_3,
        Route: router_4
    });

    var inject = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });


    exports.Inject = function () { return function (proto, property) {
        construct_1$1.addToConstructorQueue(proto.constructor, function (widget) {
            var singleton = construct_1$1.Singletons[property];
            if (functions_1$1.isDef(singleton)) {
                widget[property] = singleton;
            }
        });
    }; };

    });

    var inject$1 = unwrapExports(inject);
    var inject_1 = inject.Inject;

    var inject$2 = /*#__PURE__*/Object.freeze({
        default: inject$1,
        __moduleExports: inject,
        Inject: inject_1
    });

    var require$$7 = ( fetch$2 && fetch$1 ) || fetch$2;

    var require$$8 = ( localStorage$2 && localStorage$1 ) || localStorage$2;

    var require$$9 = ( mediaQuery$2 && mediaQuery$1 ) || mediaQuery$2;

    var require$$10 = ( router$2 && router$1 ) || router$2;

    var require$$13 = ( inject$2 && inject$1 ) || inject$2;

    var require$$14 = ( templateNode$2 && templateNode$1 ) || templateNode$2;

    var feather = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });

















    var functions_1 = functions_1$1;
    exports.isDef = functions_1.isDef;
    exports.isUndef = functions_1.isUndef;
    exports.isFunction = functions_1.isFunction;
    exports.compose = functions_1.compose;
    var arrays_1 = arrays_1$1;
    exports.observeArray = arrays_1.observeArray;
    exports.range = arrays_1.range;
    exports.removeFromArray = arrays_1.removeFromArray;
    var objects_1 = objects_1$1;
    exports.ensure = objects_1.ensure;
    exports.addPropertyListener = objects_1.addPropertyListener;
    exports.deepValue = objects_1.deepValue;
    exports.getSubset = objects_1.getSubset;
    exports.isObject = objects_1.isObject;
    exports.merge = objects_1.merge;
    var dom_1 = dom_1$1;
    exports.allChildNodes = dom_1.allChildNodes;
    exports.allTextNodes = dom_1.allTextNodes;
    var computed_1 = computed_1$1;
    exports.Computed = computed_1.Computed;
    var construct_1 = construct_1$1;
    exports.start = construct_1.start;
    exports.addToConstructorQueue = construct_1.addToConstructorQueue;
    exports.Construct = construct_1.Construct;
    var event_1 = event_1$1;
    exports.On = event_1.On;
    exports.Scope = event_1.Scope;
    var fetch_1 = require$$7;
    exports.Delete = fetch_1.Delete;
    exports.Get = fetch_1.Get;
    exports.Post = fetch_1.Post;
    exports.Put = fetch_1.Put;
    var local_storage_1 = require$$8;
    exports.Storable = local_storage_1.Storable;
    exports.LocalStorage = local_storage_1.LocalStorage;
    var media_query_1 = require$$9;
    exports.MediaQuery = media_query_1.MediaQuery;
    var router_1 = require$$10;
    exports.navigate = router_1.navigate;
    exports.runRoutes = router_1.runRoutes;
    var transformer_1 = transformer_1$1;
    exports.Transformer = transformer_1.Transformer;
    var inject_1 = require$$13;
    exports.Inject = inject_1.Inject;
    var template_1 = template_1$1;
    exports.Template = template_1.Template;
    var template_node_1 = require$$14;
    exports.TemplateNode = template_node_1.TemplateNode;
    var bind_1 = bind_1$1;
    exports.findWidget = bind_1.findWidget;
    exports.findWidgets = bind_1.findWidgets;
    exports.render = bind_1.render;
    exports.Batch = bind_1.Batch;
    var cleanup_1 = cleanup_1$1;
    exports.registerCleanUp = cleanup_1.registerCleanUp;

    });

    unwrapExports(feather);
    var feather_1 = feather.isDef;
    var feather_2 = feather.isUndef;
    var feather_3 = feather.isFunction;
    var feather_4 = feather.compose;
    var feather_5 = feather.observeArray;
    var feather_6 = feather.range;
    var feather_7 = feather.removeFromArray;
    var feather_8 = feather.ensure;
    var feather_9 = feather.addPropertyListener;
    var feather_10 = feather.deepValue;
    var feather_11 = feather.getSubset;
    var feather_12 = feather.isObject;
    var feather_13 = feather.merge;
    var feather_14 = feather.allChildNodes;
    var feather_15 = feather.allTextNodes;
    var feather_16 = feather.Computed;
    var feather_17 = feather.start;
    var feather_18 = feather.addToConstructorQueue;
    var feather_19 = feather.Construct;
    var feather_20 = feather.On;
    var feather_21 = feather.Scope;
    var feather_22 = feather.Delete;
    var feather_23 = feather.Get;
    var feather_24 = feather.Post;
    var feather_25 = feather.Put;
    var feather_26 = feather.Storable;
    var feather_27 = feather.LocalStorage;
    var feather_28 = feather.MediaQuery;
    var feather_29 = feather.navigate;
    var feather_30 = feather.runRoutes;
    var feather_31 = feather.Transformer;
    var feather_32 = feather.Inject;
    var feather_33 = feather.Template;
    var feather_34 = feather.TemplateNode;
    var feather_35 = feather.findWidget;
    var feather_36 = feather.findWidgets;
    var feather_37 = feather.render;
    var feather_38 = feather.Batch;
    var feather_39 = feather.registerCleanUp;

    var MonthSelector = /** @class */ (function () {
        function MonthSelector() {
            var _this = this;
            this.init = function (el) {
                _this.months = arrays_2(0, 11).map(function (i) { return new Day(new Date(2017, i, 1)); });
                bind_2(_this, el);
            };
            this.format = function (date) { return fecha_1(date, 'MMM'); };
        }
        MonthSelector.prototype.markup = function () {
            return "<ul class=\"year-months\" template=\"month\" {{months}}/>";
        };
        __decorate([
            template_14()
        ], MonthSelector.prototype, "markup", null);
        MonthSelector = __decorate([
            construct_4({ selector: 'month-selector' })
        ], MonthSelector);
        return MonthSelector;
    }());

    var DatePicker = /** @class */ (function (_super) {
        __extends(DatePicker, _super);
        function DatePicker() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.showDropDown = false;
            _this.size = 'is-small';
            _this.months = [];
            _this.monthSelectorVisible = false;
            _this.yearSelectorVisible = false;
            _this.init = function (el) {
                _this.element = el;
                var now = _this.config.initialValue;
                _this.currentMonth = now;
                _this.goTo(now);
                bind_2(_this, el);
            };
            _this.onOff = function (flag) { return flag ? 'on' : 'off'; };
            _this.justMonth = function (date) { return fecha_1(date, 'MMMM'); };
            _this.justYear = function (date) { return fecha_1(date, 'YYYY'); };
            _this.format = function (date) { return fecha_1(date, _this.config.dateFormat); };
            _this.toActive = function (show) { return show ? 'is-active' : undefined; };
            return _this;
        }
        DatePicker.prototype.click = function () {
            var _this = this;
            if (!this.showDropDown) {
                this.showDropDown = true;
                util_5(this.element, function () { return _this.close(); });
            }
            else {
                this.close();
            }
        };
        DatePicker.prototype.close = function () {
            this.showDropDown = false;
            this.monthSelectorVisible = false;
            this.yearSelectorVisible = false;
            bind_4(this, snapScroll_1).abort(1);
        };
        DatePicker.prototype.nextMonth = function () {
            if (this.yearSelectorVisible) {
                bind_4(this, YearSelector).next();
            }
            else if (this.monthSelectorVisible) {
                this.goTo(yearOffset(this.currentMonth, 1));
            }
            else {
                bind_4(this, snapScroll_1).next();
            }
        };
        DatePicker.prototype.prevMonth = function () {
            if (this.yearSelectorVisible) {
                bind_4(this, YearSelector).prev();
            }
            else if (this.monthSelectorVisible) {
                this.goTo(yearOffset(this.currentMonth, -1));
            }
            else {
                bind_4(this, snapScroll_1).prev();
            }
        };
        DatePicker.prototype.dayClicked = function (ev, li) {
            var date = fecha_2(li.getAttribute('date'), 'DD/MM/YYYY');
            this.select(date);
        };
        DatePicker.prototype.openMonthSelector = function () {
            this.yearSelectorVisible = false;
            this.monthSelectorVisible = !this.monthSelectorVisible;
        };
        DatePicker.prototype.openYearSelector = function () {
            this.monthSelectorVisible = false;
            if (!this.yearSelectorVisible) {
                bind_4(this, YearSelector).createYears(this.currentMonth);
            }
            this.yearSelectorVisible = !this.yearSelectorVisible;
        };
        DatePicker.prototype.monthClicked = function (ev, li) {
            var date = fecha_2(li.getAttribute('date'), 'DD/MM/YYYY');
            date.setFullYear(this.currentMonth.getFullYear());
            this.goTo(date);
            this.monthSelectorVisible = false;
            bind_4(this, snapScroll_1).reset(1);
        };
        DatePicker.prototype.yearClicked = function (ev, li) {
            var date = fecha_2(li.getAttribute('date'), 'DD/MM/YYYY');
            date.setMonth(this.currentMonth.getMonth());
            this.goTo(date);
            this.yearSelectorVisible = false;
            bind_4(this, snapScroll_1).reset(1);
        };
        DatePicker.prototype.goTo = function (date) {
            this.months.splice(0, this.months.length, new Month(monthOffset(date, -1)), new Month(date), new Month(monthOffset(date, 1)));
            this.currentMonth = date;
        };
        DatePicker.prototype.select = function (date) {
            this.input.value = fecha_1(date, this.config.dateFormat);
            this.config.changed(date);
        };
        DatePicker.prototype.slideChanged = function (slide) {
            this.currentMonth = this.months[slide].date;
            if (slide === 0) {
                this.months.unshift(new Month(monthOffset(this.currentMonth, -1)));
                this.months.pop();
            }
            if (slide === 2) {
                this.months.push(new Month(monthOffset(this.currentMonth, 1)));
                this.months.shift();
            }
            bind_4(this, snapScroll_1).reset(1);
        };
        DatePicker.prototype.markup = function () {
            return "\n        <div class=\"field has-addons\">\n            <div class=\"control\">\n                <input type=\"text\" class=\"input {{size}}\" value=\"{{config.initialValue:format}}\">\n            </div>\n            <div class=\"control dropdown is-right {{showDropDown:toActive}}\">\n                <div class=\"dropdown-trigger\">\n                    <button type=\"submit\" class=\"button {{size}} is-info icon\">\n                        <i class=\"far fa-calendar\"/>\n                    </button>\n                </div>\n                <div class=\"dropdown-menu\" id=\"dropdown-menu\" role=\"menu\">\n                    <div class=\"dropdown-content\">\n                        <div class=\"head\">\n                            <span class=\"prev-month\">\n                                <span class=\"icon\">\n                                    <i class=\"fas fa-chevron-left\"/>\n                                </span>\n                            </span>\n                            <div>\n                                <span class=\"month-selector\">{{currentMonth:justMonth}}</span>\n                                <span class=\"year-selector\">{{currentMonth:justYear}}</span>\n                            </div>\n                            <span class=\"next-month\">\n                                <span class=\"icon\">\n                                    <i class=\"fas fa-chevron-right\"/>\n                                </span>\n                            </span>\n                        </div>\n                        <div class=\"viewport\">\n                            <month-selector class=\"{{monthSelectorVisible:onOff}}\"/>\n                            <year-selector class=\"{{yearSelectorVisible:onOff}}\" current-year=\"{{currentMonth}}\" />\n                            <ul class=\"months snap-scroll\"\n                                current-slide={1}\n                                slide-changed=\"{{slideChanged}}\"\n                                {{months}}/>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        ";
        };
        __decorate([
            templateNode_1('input.input')
        ], DatePicker.prototype, "input", void 0);
        __decorate([
            event_2({ selector: '.button' })
        ], DatePicker.prototype, "click", null);
        __decorate([
            event_2({ event: 'click', selector: '.next-month' })
        ], DatePicker.prototype, "nextMonth", null);
        __decorate([
            event_2({ event: 'click', selector: '.prev-month' })
        ], DatePicker.prototype, "prevMonth", null);
        __decorate([
            event_2({ event: 'tap', scope: event_1.UntilMatch, selector: '.dates > li' })
        ], DatePicker.prototype, "dayClicked", null);
        __decorate([
            event_2({ event: 'click', selector: '.month-selector' })
        ], DatePicker.prototype, "openMonthSelector", null);
        __decorate([
            event_2({ event: 'click', selector: '.year-selector' })
        ], DatePicker.prototype, "openYearSelector", null);
        __decorate([
            event_2({ event: 'click', selector: '.year-months > li' })
        ], DatePicker.prototype, "monthClicked", null);
        __decorate([
            event_2({ event: 'click', selector: '.years > li' })
        ], DatePicker.prototype, "yearClicked", null);
        __decorate([
            feather_38()
        ], DatePicker.prototype, "goTo", null);
        __decorate([
            template_14()
        ], DatePicker.prototype, "markup", null);
        DatePicker = __decorate([
            construct_4({ selector: 'date-picker' })
        ], DatePicker);
        return DatePicker;
    }(formWidget_1));

    var css$3 = "body {\n    padding: 40px;\n    min-height: 100vh;\n}\n";
    styleInject(css$3);

    var Showcase = /** @class */ (function () {
        function Showcase() {
            var _this = this;
            this.datePickerConfig = {
                changed: function (date) { return console.log(date); },
                dateFormat: 'DD.MM.YYYY',
                initialValue: new Date()
            };
            this.init = function (el) { return bind_2(_this, el); };
        }
        Showcase.prototype.markup = function () {
            return "<date-picker class=\"control has-icons-right\" config=\"{{datePickerConfig}}\"/>";
        };
        __decorate([
            template_14()
        ], Showcase.prototype, "markup", null);
        Showcase = __decorate([
            construct_4({ selector: 'body' })
        ], Showcase);
        return Showcase;
    }());
    construct_3();

    exports.Showcase = Showcase;

    return exports;

}({}));
//# sourceMappingURL=datepicker.js.map
