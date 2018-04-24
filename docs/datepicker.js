/* feather-ts/datepicker v1.0.37 */
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
    var lastCall = new WeakMap();
    var throttles = new WeakMap();
    exports.throttle = function (func, time) {
        var now = +new Date();
        var lastCallTime = (lastCall.get(func) || 0);
        if (now - time >= lastCallTime) {
            func();
            lastCall.set(func, now);
        }
        else {
            clearTimeout(throttles.get(func));
            throttles.set(func, setTimeout(function () {
                lastCall.set(func, now);
                func();
            }));
        }
    };
    exports.isDef = function (x) { return typeof x !== 'undefined'; };
    exports.isUndef = function (x) { return !exports.isDef(x); };

    });

    var functions$1 = unwrapExports(functions);
    var functions_1 = functions.compose;
    var functions_2 = functions.isFunction;
    var functions_3 = functions.throttle;
    var functions_4 = functions.isDef;
    var functions_5 = functions.isUndef;

    var functions$2 = /*#__PURE__*/Object.freeze({
        default: functions$1,
        __moduleExports: functions,
        compose: functions_1,
        isFunction: functions_2,
        throttle: functions_3,
        isDef: functions_4,
        isUndef: functions_5
    });

    var functions_1$1 = ( functions$2 && functions$1 ) || functions$2;

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
        return path ? path.split('.').reduce(function (p, c) { return (p && functions_1$1.isDef(p[c])) ? p[c] : undefined; }, obj) : obj;
    };
    exports.merge = function (a, b) {
        if (a === void 0) { a = {}; }
        Object.keys(b).forEach(function (k) {
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
        });
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
                    exports.propertyCallbacks.get(obj)[property].forEach(function (c) { return c(property); });
                    return val;
                }
            });
        }
        var _a;
    };
    exports.createObjectPropertyListener = function (obj, pathStr, callback) {
        var path = pathStr.split('.'), property = path.pop(), root = exports.deepValue(obj, path.join('.')), handler = function () {
            exports.pathCallbacks.get(obj)[pathStr].forEach(function (cb) { return cb(); });
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

    var require$$3 = ( dom$2 && dom$1 ) || dom$2;

    var cleanup = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });


    var cleanUpQueue = new WeakMap();
    exports.registerCleanUp = function (node, task) { return objects_1$1.ensure(cleanUpQueue, node, [task]); };
    exports.cleanUp = function (node) { return setTimeout(function () {
        return require$$3.allChildNodes(node).forEach(function (node) {
            if (cleanUpQueue.has(node)) {
                cleanUpQueue.get(node).forEach(function (task) { return task(); });
                cleanUpQueue.delete(node);
            }
        });
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
    exports.addToConstructorQueue = function (constructor, func) {
        objects_1$1.ensure(queue, constructor, [func]);
    };
    exports.runConstructorQueue = function (widget, node) {
        var widgetQueue = queue.get(Object.getPrototypeOf(widget).constructor) || [];
        widgetQueue.forEach(function (m) { return m.call(widget, widget, node); });
    };

    });

    unwrapExports(construct);
    var construct_1 = construct.ConstructRegistry;
    var construct_2 = construct.Singletons;
    var construct_3 = construct.start;
    var construct_4 = construct.Construct;
    var construct_5 = construct.addToConstructorQueue;
    var construct_6 = construct.runConstructorQueue;

    var template = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });




    var DEFAULT_TEMPLATE_NAME = '__default__';
    exports.parsedTemplates = new WeakMap();
    exports.SINGLE_CURLIES = /{(.*?)}/;
    exports.CURLIES = /{{(.*?)}}/;
    var ALL_CURLIES = /{{[^:]*:(.*?)}}/g;
    exports.selfClosingTags = /(<([^<>\s]+)(\s+[^<>\s'"=]+(=[\w\d]+|="[^"]*"|='[^']*'|={{?[^}]*?}?})?)*)\s*\/>/gmi;
    exports.openTags = '$1></$2>';
    var TemplateTokenType;
    (function (TemplateTokenType) {
        TemplateTokenType[TemplateTokenType["CLASS"] = 0] = "CLASS";
        TemplateTokenType[TemplateTokenType["PROPERTY"] = 1] = "PROPERTY";
        TemplateTokenType[TemplateTokenType["ATTRIBUTE"] = 2] = "ATTRIBUTE";
        TemplateTokenType[TemplateTokenType["TEXT"] = 3] = "TEXT";
        TemplateTokenType[TemplateTokenType["TAG"] = 4] = "TAG";
    })(TemplateTokenType = exports.TemplateTokenType || (exports.TemplateTokenType = {}));
    var TemplateTokenInfo = /** @class */ (function () {
        function TemplateTokenInfo(position, type) {
            this.position = position;
            this.type = type;
        }
        TemplateTokenInfo.prototype.setCurly = function (value, hookMap) {
            this._curly = value;
            var tokens = value.split(':');
            this._path = tokens.shift();
            this._transformers = tokens.map(function (m) { return hookMap[m.toLowerCase()] || m; });
        };
        TemplateTokenInfo.prototype.curly = function () {
            return this._curly;
        };
        TemplateTokenInfo.prototype.path = function () {
            return this._path;
        };
        TemplateTokenInfo.prototype.property = function () {
            return this._path[this._path.length - 1];
        };
        TemplateTokenInfo.prototype.transformers = function () {
            return this._transformers;
        };
        TemplateTokenInfo.prototype.arrayTransformer = function () {
            if (this._transformers.length > 1) {
                throw Error('Array filter transformer can have only one method');
            }
            return this.transformers()[0] || 'arrayidentity';
        };
        return TemplateTokenInfo;
    }());
    exports.TemplateTokenInfo = TemplateTokenInfo;
    var breakApartTextNodes = function (root) {
        require$$3.allTextNodes(root).forEach(function (node) {
            var split = node.textContent.split(/({{.*?}})/mg);
            if (split.length > 1) {
                var parent_1 = node.parentNode, frag_1 = document.createDocumentFragment();
                split.forEach(function (text) {
                    if (text !== '') {
                        frag_1.appendChild(document.createTextNode(text));
                    }
                });
                parent_1.replaceChild(frag_1, node);
            }
        });
        return root;
    };
    exports.getFragment = function (html) { return document.createRange().createContextualFragment(html); };
    var ParsedTemplate = /** @class */ (function () {
        function ParsedTemplate(doc, nodes, infos) {
            this.doc = doc;
            this.infos = infos;
            this.nodes = nodes;
        }
        ParsedTemplate.prototype.clone = function () {
            var doc = this.doc.cloneNode(true);
            return new ParsedTemplate(doc, require$$3.allChildNodes(doc), this.infos);
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
        var source = templateStr.replace(exports.selfClosingTags, exports.openTags), frag = breakApartTextNodes(exports.getFragment(source)), allNodes = require$$3.allChildNodes(frag), hookMap = {}; // we need to remember case sensitive hooks, b/c attributes turn lowercase
        var m;
        while (m = ALL_CURLIES.exec(templateStr)) {
            hookMap[m[1].toLowerCase()] = m[1];
        }
        return new ParsedTemplate(frag, allNodes, exports.parseHooks(allNodes, hookMap));
    };
    exports.parseHooks = function (nodes, hookMap) {
        if (hookMap === void 0) { hookMap = {}; }
        var hooks = [];
        var selectors = Object.keys(construct.ConstructRegistry);
        var match;
        nodes.forEach(function (node, pos) {
            if (node.nodeType === Node.TEXT_NODE) {
                var text = node.textContent, match_1 = exports.CURLIES.exec(text);
                // <div id="2">some text {{myProperty}}</div>
                if (match_1 !== null) {
                    var token = new TemplateTokenInfo(pos, TemplateTokenType.TEXT);
                    token.setCurly(match_1[1], hookMap);
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
                                token.setCurly(match[1], hookMap);
                                hooks.push(token);
                            }
                        }
                    }
                    else if (match = attributeName.match(exports.CURLIES)) {
                        // <div id="2" {{myProperty}}>
                        node.removeAttribute(match[0]);
                        var token = new TemplateTokenInfo(pos, TemplateTokenType.PROPERTY);
                        token.setCurly(match[1], hookMap);
                        hooks.push(token);
                    }
                    else if (!inSubWidget) {
                        // <div id="2" myProperty="{{myProperty}}">
                        var value = attribute.value;
                        if (match = value.match(exports.CURLIES)) {
                            node.removeAttribute(attributeName);
                            var token = new TemplateTokenInfo(pos, TemplateTokenType.ATTRIBUTE);
                            token.setCurly(match[1], hookMap);
                            token.attribute = attributeName;
                            hooks.push(token);
                        }
                    }
                }
            }
        });
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

    unwrapExports(template);
    var template_1 = template.parsedTemplates;
    var template_2 = template.SINGLE_CURLIES;
    var template_3 = template.CURLIES;
    var template_4 = template.selfClosingTags;
    var template_5 = template.openTags;
    var template_6 = template.TemplateTokenType;
    var template_7 = template.TemplateTokenInfo;
    var template_8 = template.getFragment;
    var template_9 = template.ParsedTemplate;
    var template_10 = template.getTemplate;
    var template_11 = template.parseTemplate;
    var template_12 = template.parseHooks;
    var template_13 = template.Template;

    var transformer = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });

    exports.TransformerRegistry = {
        arrayidentity: function () { return function () { return true; }; }
    };
    exports.Transformer = function () { return function (proto, method) {
        construct.addToConstructorQueue(proto.constructor, function (widget) {
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
    function domArrayListener(arr, el, filter, changeHappened, onItemAdded) {
        var firstChild = el.firstElementChild; // usually null, lists that share a parent with other nodes are prepended.
        var nodeVisible = [];
        var elementMap = new WeakMap();
        var templateName = el.getAttribute('template') || undefined; // getAttribute returns null
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
                changeHappened();
            },
            splice: function (index, deleteCount, added, deleted) {
                if (deleted === void 0) { deleted = []; }
                var patch = Array.from(nodeVisible);
                nodeVisible.splice.apply(nodeVisible, [index, deleteCount].concat(added.map(function () { return false; })));
                if (deleteCount) {
                    deleted.forEach(function (del) {
                        var node = elementMap.get(del);
                        if (node.parentElement === el) {
                            el.removeChild(node);
                        }
                        elementMap.delete(del);
                        cleanup_1$1.cleanUp(node);
                    });
                }
                if (added.length) {
                    for (var _i = 0, added_1 = added; _i < added_1.length; _i++) {
                        var item = added_1[_i];
                        if (!elementMap.has(item)) {
                            elementMap.set(item, onItemAdded(item, templateName));
                        }
                    }
                }
                patch.splice.apply(patch, [index, deleteCount].concat(added.map(function () { return true; })));
                var change = false;
                for (var i = 0, n = arr.length; i < n; i++) {
                    patch[i] = filter(arr[i], i);
                    if (patch[i] && !nodeVisible[i]) {
                        var nextVisible = nodeVisible.indexOf(true, i), refNode = ~nextVisible ? elementMap.get(arr[nextVisible]) : firstChild;
                        el.insertBefore(elementMap.get(arr[i]), refNode);
                        change = true;
                    }
                    else if (!patch[i] && nodeVisible[i]) {
                        el.removeChild(elementMap.get(arr[i]));
                        change = true;
                    }
                }
                if (deleteCount || added.length || change) {
                    changeHappened();
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

    var templateNode = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });


    var TemplateNodes = new WeakMap();
    exports.TemplateNode = function (selector) { return function (proto, property) {
        objects_1$1.ensure(TemplateNodes, proto, [{ selector: selector, property: property }]);
    }; };
    exports.injectTemplateNodes = function (widget, nodes) {
        var proto = Object.getPrototypeOf(widget);
        var bindings = TemplateNodes.get(proto);
        if (functions_1$1.isDef(bindings)) {
            bindings.forEach(function (b) {
                widget[b.property] = nodes.reduce(function (p, c) { return p || c.querySelector(b.selector); }, null);
            });
        }
    };

    });

    unwrapExports(templateNode);
    var templateNode_1 = templateNode.TemplateNode;
    var templateNode_2 = templateNode.injectTemplateNodes;

    var require$$12 = ( transformer$2 && transformer$1 ) || transformer$2;

    var arrays_1$1 = ( arrays$2 && arrays$1 ) || arrays$2;

    var require$$4 = ( computed$2 && computed$1 ) || computed$2;

    var bind = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });



    var functions_2 = functions_1$1;








    var subWidgets = new WeakMap();
    /*
     * This will fail for nested arrays when filtered elements are taken out of DOM,
     * however keeping track of the widget tree will make the framework way too complex.
     * For most use cases this will suffice and usually UI triggers changes from and to
     * visible elements. Dispatch code in connectTemplate method.
     */
    var UPDATE_KEY = '__update__';
    var Update = function () { return new CustomEvent(UPDATE_KEY, { bubbles: true, cancelable: false }); };
    var updateDomValue = function (template$$1, info, value, oldValue) {
        var node = template$$1.nodes[info.position];
        if (info.type === template.TemplateTokenType.TEXT) {
            node.textContent = functions_1$1.isDef(value) ? value : '';
        }
        else if (info.type === template.TemplateTokenType.CLASS) {
            functions_1$1.isDef(oldValue) && node.classList.remove(oldValue) ||
                functions_1$1.isDef(value) && node.classList.add(value);
        }
        else if (info.type === template.TemplateTokenType.ATTRIBUTE || info.type === template.TemplateTokenType.PROPERTY) {
            var attributeName = info.attribute || info.property();
            if (/checked|value/i.test(attributeName)) {
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
    var updateDom = function (widget, template$$1, transformMap, oldValueMap) {
        var domChanged = false;
        var valueMap = getCurrentValueMap(widget, template$$1, transformMap);
        for (var i = 0, n = template$$1.infos.length; i < n; i++) {
            var info = template$$1.infos[i];
            if (info.type === template.TemplateTokenType.TAG) {
                continue;
            }
            var oldValue = oldValueMap[i], value = valueMap[i];
            if (info.type === template.TemplateTokenType.PROPERTY && (Array.isArray(value) || value instanceof FilteredArray)) { // ignore arrays
                continue;
            }
            if (oldValue !== value) {
                domChanged = true;
                oldValueMap[i] = updateDomValue(template$$1, info, value, oldValue);
            }
        }
        return {
            change: domChanged,
            valueMap: oldValueMap
        };
    };
    var bindWidget = function (widget, rootInfo, node) {
        var subWidget = new (Function.prototype.bind.apply(construct.ConstructRegistry[rootInfo.selector]));
        objects_1$1.ensure(subWidgets, widget, [subWidget]);
        Array.from(node.attributes).forEach(function (attribute) {
            var match = attribute.value.match(template.CURLIES);
            var subProp = strings_1$1.camelCaseFromHyphens(attribute.name);
            if (match) {
                var value = objects_1$1.deepValue(widget, subProp);
                if (functions_2.isFunction(value)) {
                    subWidget[subProp] = value.bind(widget);
                }
                else {
                    var prop_1 = match[1];
                    if (~prop_1.indexOf(':')) {
                        throw Error("Cannot use transformer for " + prop_1);
                    }
                    var updateVal_1 = function () {
                        subWidget[subProp] = objects_1$1.deepValue(widget, prop_1);
                        return updateVal_1;
                    };
                    objects_1$1.createObjectPropertyListener(widget, prop_1, updateVal_1());
                }
                node.removeAttribute(attribute.name);
            }
            else if (match = attribute.value.match(template.SINGLE_CURLIES)) {
                subWidget[subProp] = new Function("return " + match[1])();
                node.removeAttribute(attribute.name);
            }
            else {
                subWidget[subProp] = attribute.value;
            }
        });
        construct.runConstructorQueue(subWidget, node);
    };
    var FilteredArray = /** @class */ (function () {
        function FilteredArray() {
        }
        return FilteredArray;
    }()); // flag class for update check
    var getCurrentValueMap = function (widget, template$$1, transformMap) {
        var map = [];
        var _loop_1 = function (i, n) {
            var info = template$$1.infos[i], path = info.path(), tempValue = [objects_1$1.deepValue(widget, path)], transformer = transformMap[info.curly()];
            if (Array.isArray(tempValue[0]) && functions_2.isFunction(transformer(tempValue[0]))) {
                map[i] = new FilteredArray();
            }
            else {
                map[i] = tempValue
                    .map(function (v) { return functions_2.isFunction(v) ? v() : v; })
                    .map(function (v) { return transformer ? transformer(v) : v; })[0];
            }
        };
        for (var i = 0, n = template$$1.infos.length; i < n; i++) {
            _loop_1(i, n);
        }
        return map;
    };
    var bindArray = function (array, widget, info, template$$1, changeHappened) {
        var method = info.arrayTransformer(), transformer = (widget[method] || require$$12.TransformerRegistry[method]).bind(widget);
        var listener = arrays_1$1.domArrayListener(array, template$$1.nodes[info.position], transformer(), changeHappened, function (item, templateName) {
            var template$$1 = template.getTemplate(item, templateName), node = template$$1.nodes[1];
            construct.runConstructorQueue(item, node);
            exports.connectTemplate(item, node, template$$1, template$$1.nodes[info.position]);
            return node;
        });
        arrays_1$1.observeArray(array, listener);
        return listener;
    };
    var getTransformMap = function (widget, template$$1) {
        return template$$1.infos.reduce(function (p, c) {
            if (c.transformers()) {
                p[c.curly()] = transformFactory(widget, c.transformers());
            }
            return p;
        }, {});
    };
    var tagCmp = function (a, b) {
        return (a.type === template.TemplateTokenType.TAG ? 1 : -1) - (b.type === template.TemplateTokenType.TAG ? 1 : -1);
    };
    var bindTemplateInfos = function (template$$1, widget, updateTemplate, arrayListeners) {
        var bound = [];
        var infos = template$$1.infos.sort(tagCmp);
        for (var _i = 0, infos_1 = infos; _i < infos_1.length; _i++) {
            var info = infos_1[_i];
            var path = info.path();
            var value = objects_1$1.deepValue(widget, info.path());
            if (info.type === template.TemplateTokenType.TAG) {
                bindWidget(widget, info, template$$1.nodes[info.position]);
            }
            else if (info.type === template.TemplateTokenType.PROPERTY) {
                if (Array.isArray(value)) {
                    arrayListeners.push(bindArray(value, widget, info, template$$1, function () { return updateTemplate(false); }));
                }
            }
            else if (functions_2.isFunction(value)) {
                require$$4.createComputedListener(widget, info, updateTemplate);
            }
            else if (!bound.includes(path) && !Array.isArray(value)) {
                bound.push(path);
                objects_1$1.createObjectPropertyListener(widget, path, function () { return updateTemplate(); });
            }
        }
    };
    exports.connectTemplate = function (widget, el, template$$1, parentNode) {
        var transformMap = getTransformMap(widget, template$$1), arrayListeners = [];
        var res = updateDom(widget, template$$1, transformMap, []);
        var updateTemplate = function (array) {
            if (array === void 0) { array = true; }
            res = updateDom(widget, template$$1, transformMap, res.valueMap);
            if (res.change) {
                parentNode.dispatchEvent(Update()); // let's inform parent widgets
            }
            if (array) {
                arrayListeners.forEach(function (l) { return l.splice(0, 0, [], []); });
            }
        };
        el.addEventListener(UPDATE_KEY, function () { return functions_1$1.throttle(updateTemplate, 80); });
        bindTemplateInfos(template$$1, widget, updateTemplate, arrayListeners);
        templateNode.injectTemplateNodes(widget, template$$1.nodes);
    };
    var transformFactory = function (widget, transformers) {
        return functions_1$1.compose(transformers.map(function (m) {
            var transformer = (widget[m] || require$$12.TransformerRegistry[m]);
            if (functions_1$1.isUndef(transformer)) {
                throw Error("No transformer found for " + m + ". Implement function on " + widget.constructor.name + " or annotate a method with @Transformer()");
            }
            return transformer.bind(widget);
        }));
    };
    exports.render = function (widget, el, name) {
        require$$3.allChildNodes(el)
            .filter(function (del) { return del !== el; })
            .forEach(cleanup_1$1.cleanUp);
        el.innerHTML = '';
        var template$$1 = template.getTemplate(widget, name);
        exports.connectTemplate(widget, el, template$$1, el.parentNode);
        el.appendChild(template$$1.doc);
    };
    exports.findWidgets = function (widget, type) {
        return subWidgets.get(widget).filter(function (t) { return Object.getPrototypeOf(t) === type.prototype; });
    };
    exports.findWidget = function (widget, type) {
        return exports.findWidgets(widget, type)[0];
    };

    });

    unwrapExports(bind);
    var bind_1 = bind.connectTemplate;
    var bind_2 = bind.render;
    var bind_3 = bind.findWidgets;
    var bind_4 = bind.findWidget;

    var util = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.documentClick = function (el, func) {
        var doc = document.documentElement;
        var handler = function (ev) {
            if (!el.contains(ev.target)) {
                doc.removeEventListener('pointerdown', handler);
                func();
            }
        };
        doc.addEventListener('pointerdown', handler);
    };

    });

    unwrapExports(util);
    var util_1 = util.documentClick;

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
            if (Scope.Direct && functions_1$1.isDef(conf.selector)) {
                node = node.querySelector(conf.selector);
            }
            var handler = createHandler(event, conf, widget, node, conf.scope === Scope.Direct || functions_1$1.isUndef(conf.selector));
            node.addEventListener(event, handler, conf.options);
            cleanup_1$1.registerCleanUp(node, function () { return node.removeEventListener(event, handler); });
        });
    }; };
    exports.On = function (conf) { return function (proto, method) {
        var finalConf = __assign({}, conf, { method: method, event: conf.event || method, scope: Scope.Delegate });
        construct.addToConstructorQueue(proto.constructor, attachEvents(finalConf));
    }; };

    });

    unwrapExports(event);
    var event_1 = event.Scope;
    var event_2 = event.On;

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
            console.error(response);
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
        construct.addToConstructorQueue(proto.constructor, function (widget) {
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
                    var proto = Object.getPrototypeOf(widget);
                    if (fetchErrors.has(proto)) {
                        var errFunc = fetchErrors.get(proto)[status];
                        if (errFunc) {
                            errFunc.call(widget, error);
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

    });

    var fetch$1 = unwrapExports(fetch_1);
    var fetch_2 = fetch_1.Get;
    var fetch_3 = fetch_1.Post;
    var fetch_4 = fetch_1.Delete;
    var fetch_5 = fetch_1.Put;

    var fetch$2 = /*#__PURE__*/Object.freeze({
        default: fetch$1,
        __moduleExports: fetch_1,
        Get: fetch_2,
        Post: fetch_3,
        Delete: fetch_4,
        Put: fetch_5
    });

    var localStorage = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });




    var localStorageProperties = new WeakMap();
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
    var storeArray = function (key, arr, proto) {
        var props = storableProperties.get(proto);
        if (functions_1$1.isUndef(props)) {
            throw Error('@LocalStorage array items must have at least one @Storable() property');
        }
        var value = arr.map(function (i) { return objects_1$1.getSubset(props, i); });
        setTimeout(function () { return store(key, value); }, 80);
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
    var handler = function (arrayType) { return function (widget) {
        var props = localStorageProperties.get(Object.getPrototypeOf(widget));
        if (props) {
            props.forEach(function (prop) {
                var storeKey = widgetId(widget) + '.' + prop;
                var value = widget[prop];
                if (Array.isArray(value)) {
                    var type_1 = functions_1$1.isDef(arrayType) ? arrayType() : undefined;
                    if (functions_1$1.isUndef(type_1)) {
                        throw Error('Stored arrays need an arrayType argument');
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
            });
        }
    }; };
    exports.LocalStorage = function (arrayType) { return function (proto, property) {
        objects_1$1.ensure(localStorageProperties, proto, [property]);
        construct.addToConstructorQueue(proto.constructor, handler(arrayType));
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
        construct.addToConstructorQueue(proto.constructor, function (widget, node) {
            var handler = function (mq) {
                if (mq.matches) {
                    proto[method].call(widget, node);
                }
                return handler;
            };
            var mediaQueryList = window.matchMedia(query);
            mediaQueryList.addListener(handler(mediaQueryList));
            cleanup_1$1.registerCleanUp(node, function () { return mediaQueryList.removeListener(handler); });
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
        construct.addToConstructorQueue(proto.constructor, function (widget, node) {
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
        construct.addToConstructorQueue(proto.constructor, function (widget) {
            var singleton = construct.Singletons[property];
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

    var feather = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });

















    var functions_1 = functions_1$1;
    exports.isDef = functions_1.isDef;
    exports.isUndef = functions_1.isUndef;
    exports.isFunction = functions_1.isFunction;
    exports.compose = functions_1.compose;
    exports.throttle = functions_1.throttle;
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
    var dom_1 = require$$3;
    exports.allChildNodes = dom_1.allChildNodes;
    exports.allTextNodes = dom_1.allTextNodes;
    var computed_1 = require$$4;
    exports.Computed = computed_1.Computed;
    var construct_1 = construct;
    exports.start = construct_1.start;
    exports.addToConstructorQueue = construct_1.addToConstructorQueue;
    exports.Construct = construct_1.Construct;
    var event_1 = event;
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
    var transformer_1 = require$$12;
    exports.Transformer = transformer_1.Transformer;
    var inject_1 = require$$13;
    exports.Inject = inject_1.Inject;
    var template_1 = template;
    exports.Template = template_1.Template;
    var template_node_1 = templateNode;
    exports.TemplateNode = template_node_1.TemplateNode;
    var bind_1 = bind;
    exports.findWidget = bind_1.findWidget;
    exports.findWidgets = bind_1.findWidgets;
    exports.render = bind_1.render;
    var cleanup_1 = cleanup_1$1;
    exports.registerCleanUp = cleanup_1.registerCleanUp;

    });

    var feather$1 = unwrapExports(feather);
    var feather_1 = feather.isDef;
    var feather_2 = feather.isUndef;
    var feather_3 = feather.isFunction;
    var feather_4 = feather.compose;
    var feather_5 = feather.throttle;
    var feather_6 = feather.observeArray;
    var feather_7 = feather.range;
    var feather_8 = feather.removeFromArray;
    var feather_9 = feather.ensure;
    var feather_10 = feather.addPropertyListener;
    var feather_11 = feather.deepValue;
    var feather_12 = feather.getSubset;
    var feather_13 = feather.isObject;
    var feather_14 = feather.merge;
    var feather_15 = feather.allChildNodes;
    var feather_16 = feather.allTextNodes;
    var feather_17 = feather.Computed;
    var feather_18 = feather.start;
    var feather_19 = feather.addToConstructorQueue;
    var feather_20 = feather.Construct;
    var feather_21 = feather.On;
    var feather_22 = feather.Scope;
    var feather_23 = feather.Delete;
    var feather_24 = feather.Get;
    var feather_25 = feather.Post;
    var feather_26 = feather.Put;
    var feather_27 = feather.Storable;
    var feather_28 = feather.LocalStorage;
    var feather_29 = feather.MediaQuery;
    var feather_30 = feather.navigate;
    var feather_31 = feather.runRoutes;
    var feather_32 = feather.Transformer;
    var feather_33 = feather.Inject;
    var feather_34 = feather.Template;
    var feather_35 = feather.TemplateNode;
    var feather_36 = feather.findWidget;
    var feather_37 = feather.findWidgets;
    var feather_38 = feather.render;
    var feather_39 = feather.registerCleanUp;

    var feather$2 = /*#__PURE__*/Object.freeze({
        default: feather$1,
        __moduleExports: feather,
        isDef: feather_1,
        isUndef: feather_2,
        isFunction: feather_3,
        compose: feather_4,
        throttle: feather_5,
        observeArray: feather_6,
        range: feather_7,
        removeFromArray: feather_8,
        ensure: feather_9,
        addPropertyListener: feather_10,
        deepValue: feather_11,
        getSubset: feather_12,
        isObject: feather_13,
        merge: feather_14,
        allChildNodes: feather_15,
        allTextNodes: feather_16,
        Computed: feather_17,
        start: feather_18,
        addToConstructorQueue: feather_19,
        Construct: feather_20,
        On: feather_21,
        Scope: feather_22,
        Delete: feather_23,
        Get: feather_24,
        Post: feather_25,
        Put: feather_26,
        Storable: feather_27,
        LocalStorage: feather_28,
        MediaQuery: feather_29,
        navigate: feather_30,
        runRoutes: feather_31,
        Transformer: feather_32,
        Inject: feather_33,
        Template: feather_34,
        TemplateNode: feather_35,
        findWidget: feather_36,
        findWidgets: feather_37,
        render: feather_38,
        registerCleanUp: feather_39
    });

    var feather_ts_1 = ( feather$2 && feather$1 ) || feather$2;

    var panX = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });

    var hasPointers = ('onpointerup' in document.documentElement);
    var PointerEvents = {
        start: ['pointerdown'],
        move: ['pointermove'],
        end: ['pointerup']
    };
    var NoPointerEvents = {
        start: ['touchstart', 'mousedown'],
        move: ['touchmove', 'mousemove'],
        end: ['touchend', 'mouseup']
    };
    var eventSet = hasPointers ? PointerEvents : NoPointerEvents;
    var addEventListeners = function (types, node, listener, options) {
        types.forEach(function (type) { return node.addEventListener(type, listener, options); });
    };
    var removeEventListeners = function (types, node, listener) {
        types.forEach(function (type) { return node.removeEventListener(type, listener); });
    };
    var Phase;
    (function (Phase) {
        Phase[Phase["start"] = 0] = "start";
        Phase[Phase["move"] = 1] = "move";
        Phase[Phase["end"] = 2] = "end";
    })(Phase = exports.Phase || (exports.Phase = {}));
    var getPanXEvent = function (ev, phase, extra) {
        if (extra === void 0) { extra = {}; }
        var x = ev.clientX || (ev.touches && ev.touches.length ? ev.touches[0].pageX : ev.changedTouches[0].pageX);
        var y = ev.clientY || (ev.touches && ev.touches.length ? ev.touches[0].pageY : ev.changedTouches[0].pageY);
        return new CustomEvent('pan-x', {
            bubbles: true,
            cancelable: true,
            detail: {
                x: x,
                y: y,
                phase: phase,
                diffX: x - extra.startX,
                diffY: y - extra.startY,
                diffTime: +new Date() - extra.startTime
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
        addEventListeners(eventSet.start, node, handler);
        feather_ts_1.registerCleanUp(node, function () { return removeEventListeners(eventSet.start, node, handler); });
    };
    exports.PanX = function (conf) {
        if (conf === void 0) { conf = {}; }
        return function (proto, method) {
            feather_ts_1.addToConstructorQueue(proto.constructor, function (widget, node) {
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
        SnapScroll.prototype.transitionend = function (ev) {
            this.element.classList.remove('animate');
            this.slideChanged(this.currentSlide);
        };
        tslib_es6.__decorate([
            pan_x_1.PanX()
        ], SnapScroll.prototype, "panX1", null);
        tslib_es6.__decorate([
            feather_ts_1.On({})
        ], SnapScroll.prototype, "transitionend", null);
        SnapScroll = tslib_es6.__decorate([
            feather_ts_1.Construct({ selector: '.snap-scroll' })
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

    var css$1 = "date-picker {\r\n    max-width: 200px;\r\n    display: block;\r\n}\r\n\r\n    date-picker .icon.icon {\r\n        cursor: pointer;\r\n        pointer-events: initial !important;\r\n        color: #fff;\r\n    }\r\n\r\n    date-picker .head {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        margin-top: -4px;\r\n        padding-bottom: 4px;\r\n    }\r\n\r\n    date-picker .head div {\r\n            -webkit-box-flex: 1;\r\n                -ms-flex: auto;\r\n                    flex: auto;\r\n            text-align: center;\r\n        }\r\n\r\n    date-picker .head span {\r\n            -webkit-box-flex: 0;\r\n                -ms-flex: 0 0 27px;\r\n                    flex: 0 0 27px;\r\n            text-align: center;\r\n            cursor: pointer;\r\n        }\r\n\r\n    date-picker .head span .icon.icon {\r\n                height: 16px;\r\n                height: 1rem;\r\n                width: 16px;\r\n                width: 1rem;\r\n                position: relative;\r\n                color: black;\r\n            }\r\n\r\n    date-picker .dropdown {\r\n        width: 27px;\r\n        -webkit-user-select: none;\r\n           -moz-user-select: none;\r\n            -ms-user-select: none;\r\n                user-select: none;\r\n    }\r\n\r\n    date-picker .dropdown-menu {\r\n        width: 198px;\r\n    }\r\n\r\n    date-picker .dropdown-content {\r\n        background-color: whitesmoke;\r\n        padding-bottom: 0;\r\n    }\r\n\r\n    date-picker .viewport {\r\n        border-radius: 4px;\r\n        padding-bottom: 8px;\r\n        padding-bottom: .5rem;\r\n        position: relative;\r\n    }\r\n\r\n    date-picker .month {\r\n        font-size: 12px;\r\n        font-size: .75rem;\r\n    }\r\n\r\n    date-picker .month ul {\r\n            display: -webkit-box;\r\n            display: -ms-flexbox;\r\n            display: flex;\r\n            -ms-flex-wrap: wrap;\r\n                flex-wrap: wrap;\r\n            width: 100%;\r\n        }\r\n\r\n    date-picker .month ul.weekdays {\r\n                background-color: whitesmoke;\r\n                color: #a4a4a4;\r\n            }\r\n\r\n    date-picker .month ul li {\r\n                -webkit-box-flex: 0;\r\n                    -ms-flex: 0 0 14.28571%;\r\n                        flex: 0 0 14.28571%;\r\n                display: block;\r\n                text-align: center;\r\n                line-height: 24px;\r\n                line-height: 1.5rem;\r\n            }\r\n\r\n    date-picker .month ul li.today {\r\n                    background-color: #cc415d !important;\r\n                    color: white !important;\r\n                }\r\n\r\n    date-picker .month ul.dates {\r\n                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n                cursor: pointer;\r\n                background-color: white;\r\n            }\r\n\r\n    date-picker .months:not(.drag) .dates > li:hover {\r\n        background-color: #d8e7f1;\r\n    }\r\n";
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
            template_13('date')
        ], Day.prototype, "dateMarkup", null);
        __decorate([
            template_13('weekday')
        ], Day.prototype, "weekDayMarkup", null);
        __decorate([
            template_13('month')
        ], Day.prototype, "monthMarkup", null);
        __decorate([
            template_13('year')
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
            template_13()
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
            template_13()
        ], YearSelector.prototype, "markup", null);
        YearSelector = __decorate([
            construct_4({ selector: 'year-selector' })
        ], YearSelector);
        return YearSelector;
    }());

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
            template_13()
        ], MonthSelector.prototype, "markup", null);
        MonthSelector = __decorate([
            construct_4({ selector: 'month-selector' })
        ], MonthSelector);
        return MonthSelector;
    }());

    var formWidget = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });

    var FormWidget = /** @class */ (function () {
        function FormWidget() {
            var _this = this;
            this.init = function (el) { return feather_ts_1.render(_this, el); };
        }
        return FormWidget;
    }());
    exports.FormWidget = FormWidget;

    });

    unwrapExports(formWidget);
    var formWidget_1 = formWidget.FormWidget;

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
                util_1(this.element, function () { return _this.close(); });
            }
            else {
                this.close();
            }
        };
        DatePicker.prototype.close = function () {
            this.showDropDown = false;
            this.monthSelectorVisible = false;
            this.yearSelectorVisible = false;
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
            template_13()
        ], DatePicker.prototype, "markup", null);
        DatePicker = __decorate([
            construct_4({ selector: 'date-picker' })
        ], DatePicker);
        return DatePicker;
    }(formWidget_1));

    var css$3 = "body {\n    padding: 40px\n}\n";
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
            template_13()
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
