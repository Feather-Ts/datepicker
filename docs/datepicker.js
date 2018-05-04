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

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    /* feather-ts v2.0.83 */
    var getType = {}.toString;
    var compose = function (fns) { return function (res) {
        if (fns.length === 1) {
            return fns[0](res);
        }
        return fns.reduce(function (p, c) { return c(p); }, res);
    }; };
    var isFunction = function (functionToCheck) {
        return functionToCheck && getType.call(functionToCheck) === '[object Function]';
    };
    var isDef = function (x) { return typeof x !== 'undefined'; };
    var isUndef = function (x) { return !isDef(x); };

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

    var extendStatics$1 = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    function __extends$1(d, b) {
        extendStatics$1(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    var pathCallbacks = new WeakMap();
    var isObject = function (obj) {
        return (obj !== null && typeof (obj) === 'object' && Object.prototype.toString.call(obj) === '[object Object]');
    };
    var deepValue = function (obj, path) {
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
    var merge = function (a, b) {
        if (a === void 0) { a = {}; }
        for (var _i = 0, _a = Object.keys(b); _i < _a.length; _i++) {
            var k = _a[_i];
            var ak = a[k], bk = b[k];
            if (Array.isArray(ak)) {
                ak.push.apply(ak, bk);
            }
            else if (isObject(ak)) {
                merge(ak, bk);
            }
            else {
                a[k] = bk;
            }
        }
        return a;
    };
    var ensure = function (map, obj, defaultValue) {
        var lookup = map.get(obj);
        if (!lookup) {
            map.set(obj, lookup = defaultValue);
        }
        else if (Array.isArray(lookup) && Array.isArray(defaultValue)) {
            lookup.push.apply(lookup, defaultValue);
        }
        else if (isObject(lookup)) {
            merge(lookup, defaultValue);
        }
        return lookup;
    };
    var propertyCallbacks = new WeakMap();
    var addPropertyListener = function (obj, property, callback) {
        var val = obj[property];
        var observed = propertyCallbacks.has(obj) && propertyCallbacks.get(obj)[property];
        ensure(propertyCallbacks, obj, (_a = {}, _a[property] = [callback], _a));
        if (!observed) {
            Object.defineProperty(obj, property, {
                get: function () { return val; },
                set: function (newVal) {
                    val = newVal;
                    for (var _i = 0, _a = propertyCallbacks.get(obj)[property]; _i < _a.length; _i++) {
                        var c = _a[_i];
                        c(property);
                    }
                    return val;
                }
            });
        }
        var _a;
    };
    var createObjectPropertyListener = function (obj, pathStr, callback) {
        var path = pathStr.split('.'), property = path.pop(), root = deepValue(obj, path.join('.')), handler = function () {
            for (var _i = 0, _a = pathCallbacks.get(obj)[pathStr]; _i < _a.length; _i++) {
                var cb = _a[_i];
                cb();
            }
        };
        ensure(pathCallbacks, obj, (_a = {}, _a[pathStr] = [callback], _a));
        addPropertyListener(root, property, handler);
        var _a;
    };

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
    function allTextNodes(node) {
        var a = [], walk = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
        var n;
        while (n = walk.nextNode()) {
            a.push(n);
        }
        return a;
    }

    var cleanUpQueue = new WeakMap();
    var registerCleanUp = function (node, task) { return ensure(cleanUpQueue, node, [task]); };
    var cleanUp = function (node) { return setTimeout(function () {
        for (var _i = 0, _a = allChildNodes(node); _i < _a.length; _i++) {
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

    var observers = new WeakMap();
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
            var indices = range(0, arr.length - 1), args = cmp ? [
                arr.map(function (e, i) { return i; })
                    .sort(function (a, b) { return cmp(arr[a], arr[b]); })
                    .map(function (e) { return indices[e]; })
            ] : indices, res = old.call(arr, cmp);
            notify(arr, 'sort', args);
            return res;
        };
    }
    var range = function (start, end) {
        var len = end - start + 1, arr = new Array(len);
        for (var i = 0, l = arr.length; i < l; i++) {
            arr[i] = i + start;
        }
        return arr;
    };
    // essentially we can reduce array modifying functions to two implementations: sort and splice
    var observeArray = function (arr, listener) {
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
                        if (isDef(node)) {
                            cleanUp(node);
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
                    patch[i] = isUndef(filter) || filter(arr[i], i);
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
        registerCleanUp(el, function () { return observers.delete(arr); });
        return listener;
    }

    var computedProps = new WeakMap();
    var createComputedListener = function (widget, info, updateDom) {
        var proto = Object.getPrototypeOf(widget);
        if (!computedProps.has(proto) || !computedProps.get(proto)[info.path()]) {
            throw Error('Bound functions must be decorated with @Computed(...paths: string[])');
        }
        computedProps.get(proto)[info.path()].forEach(function (prop) {
            return createObjectPropertyListener(widget, prop, function () { return updateDom(); });
        });
    };
    var decapitalize = function (str) { return str.charAt(0).toLowerCase() + str.substr(1); };
    var camelCaseFromHyphens = function (str) {
        return str.replace(/\b-([a-z])/g, function (all, char) { return char.toUpperCase(); });
    };

    var ConstructRegistry = {};
    var start = function (root) {
        if (root === void 0) { root = document.documentElement; }
        var createdWidgets = [];
        Object.keys(ConstructRegistry).forEach(function (selector) {
            Array.from(root.querySelectorAll(selector)).forEach(function (node) {
                var widget = new (Function.prototype.bind.apply(ConstructRegistry[selector]));
                runConstructorQueue(widget, node);
                createdWidgets.push(widget);
            });
        });
        return createdWidgets;
    };
    var Construct = function (conf) { return function (proto) {
        ConstructRegistry[conf.selector] = proto;
        addToConstructorQueue(proto, function (widget, node) {
            if (conf.singleton === true) {
                var name_1 = decapitalize(widget.constructor.name);
                registerCleanUp(node, function () {
                });
            }
            widget.init(node);
        });
    }; };
    var queue = new WeakMap();
    var renderQueue = new WeakMap();
    var addToConstructorQueue = function (constructor, func) {
        ensure(queue, constructor, [func]);
    };
    var addToRenderQueue = function (constructor, func) {
        ensure(renderQueue, constructor, [func]);
    };
    var runConstructorQueue = function (widget, node) {
        var widgetQueue = queue.get(Object.getPrototypeOf(widget).constructor) || [];
        for (var i = 0, n = widgetQueue.length; i < n; i++) { // for performance
            widgetQueue[i].call(widget, widget, node);
        }
    };
    var runAfterRenderQueue = function (widget, nodes) {
        var widgetQueue = renderQueue.get(Object.getPrototypeOf(widget).constructor) || [];
        for (var i = 0, n = widgetQueue.length; i < n; i++) { // for performance use for-loops
            for (var m = 0, l = nodes.length; m < l; m++) {
                widgetQueue[i].call(widget, widget, nodes[m]);
            }
        }
    };

    var Scope;
    (function (Scope) {
        Scope[Scope["Direct"] = 0] = "Direct";
        Scope[Scope["Delegate"] = 1] = "Delegate";
        Scope[Scope["UntilMatch"] = 2] = "UntilMatch";
    })(Scope || (Scope = {}));
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
            if (conf.scope === Scope.Direct && isDef(conf.selector)) {
                node = node.querySelector(conf.selector);
            }
            var handler = createHandler(event, conf, widget, node, conf.scope === Scope.Direct || isUndef(conf.selector));
            node.addEventListener(event, handler, conf.options);
            registerCleanUp(node, function () { return node.removeEventListener(event, handler); });
        });
    }; };
    var On = function (conf) { return function (proto, method) {
        var finalConf = __assign$1({}, conf, { method: method, event: conf.event || method, scope: Scope.Delegate });
        addToConstructorQueue(proto.constructor, attachEvents(finalConf));
    }; };
    var ResponseError = /** @class */ (function (_super) {
        __extends$1(ResponseError, _super);
        function ResponseError(message, response) {
            var _this = _super.call(this, message) || this;
            _this.response = response;
            return _this;
        }
        return ResponseError;
    }(Error));
    var historyAPI = (window.history && window.history.pushState) && document.querySelector('[routing="hash"]') === null;

    var DEFAULT_TEMPLATE_NAME = '__default__';
    var parsedTemplates = new WeakMap();
    var SINGLE_CURLIES = /{(.*?)}/;
    var CURLIES = /{{(.*?)}}/;
    var ALL_CURLIES = /{{(.+?)}}/g;
    var selfClosingTags = /(<([^<>\s]+)(\s+[^<>\s'"=]+(=[\w\d]+|="[^"]*"|='[^']*'|={{?[^}]*?}?})?)*)\s*\/>/gmi;
    var openTags = '$1></$2>';
    var TemplateTokenType;
    (function (TemplateTokenType) {
        TemplateTokenType[TemplateTokenType["CLASS"] = 0] = "CLASS";
        TemplateTokenType[TemplateTokenType["PROPERTY"] = 1] = "PROPERTY";
        TemplateTokenType[TemplateTokenType["ATTRIBUTE"] = 2] = "ATTRIBUTE";
        TemplateTokenType[TemplateTokenType["TEMPLATE"] = 3] = "TEMPLATE";
        TemplateTokenType[TemplateTokenType["TEXT"] = 4] = "TEXT";
        TemplateTokenType[TemplateTokenType["TAG"] = 5] = "TAG";
    })(TemplateTokenType || (TemplateTokenType = {}));
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
    var breakApartTextNodes = function (root) {
        var textNodes = allTextNodes(root);
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
    var getFragment = function (html) {
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
            return new ParsedTemplate(doc, allChildNodes(doc), this.infos);
        };
        return ParsedTemplate;
    }());
    var getTemplate = function (widget, name) {
        if (name === void 0) { name = DEFAULT_TEMPLATE_NAME; }
        var proto = Object.getPrototypeOf(widget);
        var templates = parsedTemplates.get(proto);
        if (isUndef(templates) || isUndef(templates[name])) {
            throw Error("No template found for name " + name + " in " + widget.constructor.name);
        }
        return templates[name].clone();
    };
    var parseTemplate = function (templateStr) {
        var source = templateStr.replace(selfClosingTags, openTags), frag = breakApartTextNodes(getFragment(source)), allNodes = allChildNodes(frag), hookMap = {}; // we need to remember case sensitive hooks, b/c attributes turn lowercase
        var m;
        while (m = ALL_CURLIES.exec(templateStr)) {
            hookMap[m[1].toLowerCase()] = m[1];
        }
        return new ParsedTemplate(frag, allNodes, parseHooks(allNodes, hookMap));
    };
    var parseHooks = function (nodes, hookMap) {
        if (hookMap === void 0) { hookMap = {}; }
        var hooks = [];
        var selectors = Object.keys(ConstructRegistry);
        var match;
        var _loop_1 = function (pos, n) {
            var node = nodes[pos];
            if (node.nodeType === Node.TEXT_NODE) {
                var text = node.textContent, match_1 = CURLIES.exec(text);
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
                            if (match = cls.match(CURLIES)) {
                                node.classList.remove(match[0]);
                                var token = new TemplateTokenInfo(pos, TemplateTokenType.CLASS);
                                token.setCurly(match[1]);
                                hooks.push(token);
                            }
                        }
                    }
                    else if (match = attributeName.match(CURLIES)) {
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
                            if (match = attribute.value.match(CURLIES)) {
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
                            if (match = value.match(CURLIES)) {
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
    var Template = function (name) {
        if (name === void 0) { name = DEFAULT_TEMPLATE_NAME; }
        return function (proto, method) {
            var templateStr = proto[method].call(proto);
            var template = parseTemplate(templateStr);
            ensure(parsedTemplates, proto, (_a = {}, _a[name] = template, _a));
            var _a;
        };
    };

    var TransformerRegistry = {};

    var TemplateNode = function (selector) { return function (proto, property) {
        addToRenderQueue(proto.constructor, function (widget, node) {
            widget[property] = node.querySelector(selector);
        });
    }; };

    var inArray = new WeakMap();
    var injectArray = function (widget, array) {
        var proto = Object.getPrototypeOf(widget);
        if (inArray.has(proto)) {
            widget[inArray.get(proto)] = array;
        }
    };

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
        if (info.type === TemplateTokenType.TEXT) {
            node.textContent = isDef(value) ? value : '';
        }
        else if (info.type === TemplateTokenType.CLASS) {
            !!oldValue && node.classList.remove(("" + oldValue).replace(/\s+/g, '-'));
            !!value && node.classList.add(("" + value).replace(/\s+/g, '-'));
        }
        else if (info.type === TemplateTokenType.ATTRIBUTE || info.type === TemplateTokenType.PROPERTY) {
            var attributeName = info.attribute || info.path();
            if (/checked|value|selectedIndex/i.test(attributeName)) {
                node[attributeName] = value;
            }
            else if (isUndef(value) || value === false) {
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
            if (info.type === TemplateTokenType.TAG) {
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
        var subWidget = new (Function.prototype.bind.apply(ConstructRegistry[rootInfo.selector]));
        ensure(subWidgets, widget, [subWidget]);
        var attributes = Array.prototype.slice.call(node.attributes);
        var _loop_1 = function (attribute, i, n) {
            attribute = attributes[i];
            var match = attribute.value.match(CURLIES);
            var subProp = camelCaseFromHyphens(attribute.name);
            if (match) {
                var prop_1 = match[1];
                var value = deepValue(widget, prop_1);
                if (isFunction(value)) {
                    subWidget[subProp] = value.bind(widget);
                }
                else {
                    if (~prop_1.indexOf(':')) {
                        throw Error("Cannot use transformer for " + prop_1);
                    }
                    var updateVal_1 = function () {
                        subWidget[subProp] = deepValue(widget, prop_1);
                        return updateVal_1;
                    };
                    addPropertyListener(widget, prop_1, updateVal_1());
                }
                node.removeAttribute(attribute.name);
            }
            else if (match = attribute.value.match(SINGLE_CURLIES)) {
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
        runConstructorQueue(subWidget, node);
    };
    var ARRAY_TAG = Symbol('array_tag');
    var FILTERED_ARRAY_TAG = Symbol('filtered_array_tag');
    var getInfoValue = function (widget, info, transformMap) {
        var path = info.path(), transformer = transformMap[info.curly()];
        var v = deepValue(widget, path);
        if (info.type === TemplateTokenType.PROPERTY && Array.isArray(v)) {
            return isFunction(transformer(v)) ? FILTERED_ARRAY_TAG : ARRAY_TAG;
        }
        else {
            v = isFunction(v) ? v.call(widget) : v;
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
        var listener = domArrayListener(array, parentNode, update, function (item) {
            injectArray(item, array);
            var template = getTemplate(item, templateName()), node = template.nodes[1];
            runConstructorQueue(item, node);
            connectTemplate(item, node, template, parentNode);
            return node;
        }, transformer);
        observeArray(array, listener);
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
        return template.infos.find(function (i) { return i.position === position && i.type === TemplateTokenType.PROPERTY; });
    };
    var addTemplateAttributeHook = function (widget, node, info, transformMap) {
        var value = getInfoValue(widget, info, transformMap);
        if (isDef(value)) {
            var updateTemplateNode_1 = function () {
                var value = getInfoValue(widget, info, transformMap);
                render(widget, node, value);
                return updateTemplateNode_1;
            };
            addPropertyListener(widget, info.path(), updateTemplateNode_1());
        }
        else {
            render(widget, node, info.curly());
        }
        node.removeAttribute('template');
    };
    var bindTemplateInfos = function (template, widget, updateTemplate, transformMap) {
        var bound = [];
        var infos = template.infos;
        var _loop_2 = function (info, i, n) {
            info = infos[i];
            var path = info.path();
            var value = deepValue(widget, info.path());
            var node = template.nodes[info.position];
            if (info.type === TemplateTokenType.TAG) {
                bindWidget(widget, info, node);
            }
            else if (info.type === TemplateTokenType.PROPERTY) {
                if (Array.isArray(value)) {
                    // check for dynamic template attribute
                    var templateInfo_1 = findTemplateInfoInNode(template, info.position);
                    var attributeValue_1 = node.getAttribute('template') || undefined;
                    var templateName = void 0;
                    if (isDef(templateInfo_1) && CURLIES.test(attributeValue_1)) {
                        templateName = function () { return getInfoValue(widget, templateInfo_1, transformMap); };
                        addPropertyListener(widget, templateInfo_1.path(), function () {
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
            else if (isFunction(value)) {
                createComputedListener(widget, info, updateTemplate);
            }
            else if (info.type === TemplateTokenType.TEMPLATE) {
                var propInfo = findPropertyInfoInNode(template, info.position);
                if (isUndef(propInfo) || !Array.isArray(deepValue(widget, propInfo.path()))) {
                    addTemplateAttributeHook(widget, node, info, transformMap);
                }
            }
            else if (!bound.includes(path) && !Array.isArray(value)) {
                bound.push(path);
                createObjectPropertyListener(widget, path, function () { return updateTemplate(); });
            }
            out_info_1 = info;
        };
        var out_info_1;
        for (var info = void 0, i = 0, n = infos.length; i < n; i++) {
            _loop_2(info, i, n);
            info = out_info_1;
        }
    };
    var connectTemplate = function (widget, el, template, parentNode) {
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
        return compose(transformers.map(function (m) {
            var transformer = (widget[m] || TransformerRegistry[m]);
            if (isUndef(transformer)) {
                throw Error("No transformer found for " + m + ". Implement function on " + widget.constructor.name + " or annotate a method with @Transformer()");
            }
            return transformer.bind(widget);
        }));
    };
    var render = function (widget, el, name) {
        var children = allChildNodes(el);
        for (var node = void 0, i = 1, n = children.length; i < n; i++) { // first element is 'el' itself
            node = children[i];
            if (node.parentNode === el) {
                el.removeChild(node);
            }
            cleanUp(node);
        }
        var template = getTemplate(widget, name);
        connectTemplate(widget, el, template);
        el.appendChild(template.doc);
        runAfterRenderQueue(widget, Array.from(el.children));
    };
    var findWidgets = function (widget, type) {
        return subWidgets.get(widget).filter(function (t) { return Object.getPrototypeOf(t) === type.prototype; });
    };
    var findWidget = function (widget, type) {
        return findWidgets(widget, type)[0];
    };
    var mutedWidget = new WeakMap();
    var Batch = function () { return function (proto, method) {
        addToConstructorQueue(proto.constructor, function (widget, el) {
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

    /* feather-ts/ui-common v1.0.79 */

    var FormWidget = /** @class */ (function () {
        function FormWidget() {
            var _this = this;
            this.init = function (el) { return render(_this, el); };
        }
        return FormWidget;
    }());

    var hasPointers = 'onpointerdown' in document.documentElement;
    var supportsOnlyTouch = /android|iphone|webos|ipad|ipod|blackberry/i.test(navigator.userAgent);
    var addEventListeners = function (types, node, listener, options) {
        types.forEach(function (type) { return node.addEventListener(type, listener, options); });
    };
    var removeEventListeners = function (types, node, listener) {
        types.forEach(function (type) { return node.removeEventListener(type, listener); });
    };
    var click = hasPointers ? 'pointerdown' : 'touchstart';
    var documentClick = function (el, func) {
        var doc = document.documentElement;
        var handler = function (ev) {
            if (!el.contains(ev.target)) {
                doc.removeEventListener(click, handler);
                func();
            }
        };
        doc.addEventListener(click, handler, { passive: false, capture: false });
    };

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
    var eventSet = hasPointers ? PointerEvents : (supportsOnlyTouch ? OnlyTouch : NoPointerEvents);
    var Phase;
    (function (Phase) {
        Phase[Phase["start"] = 0] = "start";
        Phase[Phase["move"] = 1] = "move";
        Phase[Phase["end"] = 2] = "end";
    })(Phase || (Phase = {}));
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
        addEventListeners(eventSet.start, node, handler);
        registerCleanUp(node, function () { return removeEventListeners(eventSet.start, node, handler); });
    };
    var PanX = function (conf) {
        if (conf === void 0) { conf = {}; }
        return function (proto, method) {
            addToConstructorQueue(proto.constructor, function (widget, node) {
                initPanX(widget, method, conf, node);
            });
        };
    };

    function __decorate$2(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

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
                case Phase.start:
                    cls.add('drag');
                    break;
                case Phase.move:
                    el.style.transform = "translateX(" + -this.currentSlide * 100 + "%) translateX(" + detail.diffX + "px)";
                    break;
                case Phase.end:
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
        __decorate$2([
            PanX()
        ], SnapScroll.prototype, "panX1", null);
        __decorate$2([
            On({})
        ], SnapScroll.prototype, "transitionend", null);
        SnapScroll = __decorate$2([
            Construct({ selector: '.snap-scroll' })
        ], SnapScroll);
        return SnapScroll;
    }());

    var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

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
        var start$$1 = precedingDay(new Date(d.getFullYear(), d.getMonth(), 1), Weekday.Monday);
        return range(0, 41).map(function (day) { return dayOffset(start$$1, day); });
    };

    function styleInject$1(css, ref) {
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

    var css$1 = "date-picker {\r\n    max-width: 200px;\r\n    display: block;\r\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n    date-picker .icon.icon {\r\n        cursor: pointer;\r\n        pointer-events: initial !important;\r\n        color: #fff;\r\n    }\r\n\r\n    date-picker .head {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        margin-top: -4px;\r\n        padding-bottom: 4px;\r\n    }\r\n\r\n    date-picker .head div {\r\n            -webkit-box-flex: 1;\r\n                -ms-flex: auto;\r\n                    flex: auto;\r\n            text-align: center;\r\n        }\r\n\r\n    date-picker .head span {\r\n            -webkit-box-flex: 0;\r\n                -ms-flex: 0 0 27px;\r\n                    flex: 0 0 27px;\r\n            text-align: center;\r\n            cursor: pointer;\r\n        }\r\n\r\n    date-picker .head span .icon.icon {\r\n                height: 16px;\r\n                height: 1rem;\r\n                width: 16px;\r\n                width: 1rem;\r\n                position: relative;\r\n                color: black;\r\n            }\r\n\r\n    date-picker .dropdown {\r\n        width: 27px;\r\n        -webkit-user-select: none;\r\n           -moz-user-select: none;\r\n            -ms-user-select: none;\r\n                user-select: none;\r\n    }\r\n\r\n    date-picker .dropdown-menu {\r\n        width: 198px;\r\n    }\r\n\r\n    date-picker .dropdown-content {\r\n        background-color: whitesmoke;\r\n        padding-bottom: 0;\r\n    }\r\n\r\n    date-picker .viewport {\r\n        border-radius: 4px;\r\n        padding-bottom: 8px;\r\n        padding-bottom: .5rem;\r\n        position: relative;\r\n    }\r\n\r\n    date-picker .month {\r\n        font-size: 12px;\r\n        font-size: .75rem;\r\n    }\r\n\r\n    date-picker .month ul {\r\n            display: -webkit-box;\r\n            display: -ms-flexbox;\r\n            display: flex;\r\n            -ms-flex-wrap: wrap;\r\n                flex-wrap: wrap;\r\n            width: 100%;\r\n        }\r\n\r\n    date-picker .month ul.weekdays {\r\n                background-color: whitesmoke;\r\n                color: #a4a4a4;\r\n            }\r\n\r\n    date-picker .month ul li {\r\n                -webkit-box-flex: 0;\r\n                    -ms-flex: 0 0 14.28571%;\r\n                        flex: 0 0 14.28571%;\r\n                display: block;\r\n                text-align: center;\r\n                line-height: 24px;\r\n                line-height: 1.5rem;\r\n            }\r\n\r\n    date-picker .month ul li.today {\r\n                    background-color: #cc415d !important;\r\n                    color: white !important;\r\n                }\r\n\r\n    date-picker .month ul.dates {\r\n                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n                cursor: pointer;\r\n                background-color: white;\r\n            }\r\n\r\n    date-picker .months:not(.drag) .dates > li:hover {\r\n        background-color: #d8e7f1;\r\n    }\r\n";
    styleInject$1(css$1);

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
            Template('date')
        ], Day.prototype, "dateMarkup", null);
        __decorate([
            Template('weekday')
        ], Day.prototype, "weekDayMarkup", null);
        __decorate([
            Template('month')
        ], Day.prototype, "monthMarkup", null);
        __decorate([
            Template('year')
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
            Template()
        ], Month.prototype, "markup", null);
        return Month;
    }());

    var css$2 = "month-selector,\nyear-selector {\n    position: absolute;\n    z-index: 1;\n    background-color: white;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    -webkit-transition: all .3s ease-out;\n    transition: all .3s ease-out;\n}\n\n    month-selector.off, year-selector.off {\n        -webkit-transform: translateY(-100%);\n                transform: translateY(-100%);\n    }\n\n    month-selector > ul, year-selector > ul {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        -ms-flex-line-pack: stretch;\n            align-content: stretch;\n        cursor: pointer;\n    }\n\n    month-selector > ul > li, year-selector > ul > li {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                    justify-content: center;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            -webkit-box-flex: 0;\n                -ms-flex: none;\n                    flex: none;\n            width: 33.3333%;\n        }\n\n    month-selector > ul > li:hover, year-selector > ul > li:hover {\n                background-color: #d8e7f1;\n            }\n";
    styleInject$1(css$2);

    var YearSelector = /** @class */ (function () {
        function YearSelector() {
            var _this = this;
            this.years = [];
            this.init = function (el) {
                render(_this, el);
            };
            this.format = function (date) { return fecha_1(date, 'MMM'); };
        }
        YearSelector.prototype.createYears = function (date) {
            (_a = this.years).splice.apply(_a, [0, 12].concat(range(-7, 4)
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
            Template()
        ], YearSelector.prototype, "markup", null);
        YearSelector = __decorate([
            Construct({ selector: 'year-selector' })
        ], YearSelector);
        return YearSelector;
    }());

    var MonthSelector = /** @class */ (function () {
        function MonthSelector() {
            var _this = this;
            this.init = function (el) {
                _this.months = range(0, 11).map(function (i) { return new Day(new Date(2017, i, 1)); });
                render(_this, el);
            };
            this.format = function (date) { return fecha_1(date, 'MMM'); };
        }
        MonthSelector.prototype.markup = function () {
            return "<ul class=\"year-months\" template=\"month\" {{months}}/>";
        };
        __decorate([
            Template()
        ], MonthSelector.prototype, "markup", null);
        MonthSelector = __decorate([
            Construct({ selector: 'month-selector' })
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
                render(_this, el);
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
                documentClick(this.element, function () { return _this.close(); });
            }
            else {
                this.close();
            }
        };
        DatePicker.prototype.close = function () {
            this.showDropDown = false;
            this.monthSelectorVisible = false;
            this.yearSelectorVisible = false;
            findWidget(this, SnapScroll).abort(1);
        };
        DatePicker.prototype.nextMonth = function () {
            if (this.yearSelectorVisible) {
                findWidget(this, YearSelector).next();
            }
            else if (this.monthSelectorVisible) {
                this.goTo(yearOffset(this.currentMonth, 1));
            }
            else {
                findWidget(this, SnapScroll).next();
            }
        };
        DatePicker.prototype.prevMonth = function () {
            if (this.yearSelectorVisible) {
                findWidget(this, YearSelector).prev();
            }
            else if (this.monthSelectorVisible) {
                this.goTo(yearOffset(this.currentMonth, -1));
            }
            else {
                findWidget(this, SnapScroll).prev();
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
                findWidget(this, YearSelector).createYears(this.currentMonth);
            }
            this.yearSelectorVisible = !this.yearSelectorVisible;
        };
        DatePicker.prototype.monthClicked = function (ev, li) {
            var date = fecha_2(li.getAttribute('date'), 'DD/MM/YYYY');
            date.setFullYear(this.currentMonth.getFullYear());
            this.goTo(date);
            this.monthSelectorVisible = false;
            findWidget(this, SnapScroll).reset(1);
        };
        DatePicker.prototype.yearClicked = function (ev, li) {
            var date = fecha_2(li.getAttribute('date'), 'DD/MM/YYYY');
            date.setMonth(this.currentMonth.getMonth());
            this.goTo(date);
            this.yearSelectorVisible = false;
            findWidget(this, SnapScroll).reset(1);
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
            findWidget(this, SnapScroll).reset(1);
        };
        DatePicker.prototype.markup = function () {
            return "\n        <div class=\"field has-addons\">\n            <div class=\"control\">\n                <input type=\"text\" class=\"input {{size}}\" value=\"{{config.initialValue:format}}\">\n            </div>\n            <div class=\"control dropdown is-right {{showDropDown:toActive}}\">\n                <div class=\"dropdown-trigger\">\n                    <button type=\"submit\" class=\"button {{size}} is-info icon\">\n                        <i class=\"far fa-calendar\"/>\n                    </button>\n                </div>\n                <div class=\"dropdown-menu\" id=\"dropdown-menu\" role=\"menu\">\n                    <div class=\"dropdown-content\">\n                        <div class=\"head\">\n                            <span class=\"prev-month\">\n                                <span class=\"icon\">\n                                    <i class=\"fas fa-chevron-left\"/>\n                                </span>\n                            </span>\n                            <div>\n                                <span class=\"month-selector\">{{currentMonth:justMonth}}</span>\n                                <span class=\"year-selector\">{{currentMonth:justYear}}</span>\n                            </div>\n                            <span class=\"next-month\">\n                                <span class=\"icon\">\n                                    <i class=\"fas fa-chevron-right\"/>\n                                </span>\n                            </span>\n                        </div>\n                        <div class=\"viewport\">\n                            <month-selector class=\"{{monthSelectorVisible:onOff}}\"/>\n                            <year-selector class=\"{{yearSelectorVisible:onOff}}\" current-year=\"{{currentMonth}}\" />\n                            <ul class=\"months snap-scroll\"\n                                current-slide={1}\n                                slide-changed=\"{{slideChanged}}\"\n                                {{months}}/>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        ";
        };
        __decorate([
            TemplateNode('input.input')
        ], DatePicker.prototype, "input", void 0);
        __decorate([
            On({ selector: '.button' })
        ], DatePicker.prototype, "click", null);
        __decorate([
            On({ event: 'click', selector: '.next-month' })
        ], DatePicker.prototype, "nextMonth", null);
        __decorate([
            On({ event: 'click', selector: '.prev-month' })
        ], DatePicker.prototype, "prevMonth", null);
        __decorate([
            On({ event: 'tap', scope: Scope.UntilMatch, selector: '.dates > li' })
        ], DatePicker.prototype, "dayClicked", null);
        __decorate([
            On({ event: 'click', selector: '.month-selector' })
        ], DatePicker.prototype, "openMonthSelector", null);
        __decorate([
            On({ event: 'click', selector: '.year-selector' })
        ], DatePicker.prototype, "openYearSelector", null);
        __decorate([
            On({ event: 'click', selector: '.year-months > li' })
        ], DatePicker.prototype, "monthClicked", null);
        __decorate([
            On({ event: 'click', selector: '.years > li' })
        ], DatePicker.prototype, "yearClicked", null);
        __decorate([
            Batch()
        ], DatePicker.prototype, "goTo", null);
        __decorate([
            Template()
        ], DatePicker.prototype, "markup", null);
        DatePicker = __decorate([
            Construct({ selector: 'date-picker' })
        ], DatePicker);
        return DatePicker;
    }(FormWidget));

    var css$3 = "body {\n    padding: 40px;\n    min-height: 100vh;\n}\n";
    styleInject$1(css$3);

    var Showcase = /** @class */ (function () {
        function Showcase() {
            var _this = this;
            this.datePickerConfig = {
                changed: function (date) { return console.log(date); },
                dateFormat: 'DD.MM.YYYY',
                initialValue: new Date()
            };
            this.init = function (el) { return render(_this, el); };
        }
        Showcase.prototype.markup = function () {
            return "<date-picker class=\"control has-icons-right\" config=\"{{datePickerConfig}}\"/>";
        };
        __decorate([
            Template()
        ], Showcase.prototype, "markup", null);
        Showcase = __decorate([
            Construct({ selector: 'body' })
        ], Showcase);
        return Showcase;
    }());
    start();

    exports.Showcase = Showcase;

    return exports;

}({}));
//# sourceMappingURL=datepicker.js.map
