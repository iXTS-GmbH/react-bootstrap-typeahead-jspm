/* */ 
"format cjs";
(function(Buffer, process) {
  (function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
      module.exports = factory(require('react'), require('react-dom'));
    else if (typeof define === 'function' && define.amd)
      define(["react", "react-dom"], factory);
    else if (typeof exports === 'object')
      exports["ReactBootstrapTypeahead"] = factory(require('react'), require('react-dom'));
    else
      root["ReactBootstrapTypeahead"] = factory(root["React"], root["ReactDOM"]);
  })(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_9__) {
    return (function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
          Object.defineProperty(exports, name, {
            configurable: false,
            enumerable: true,
            get: getter
          });
        }
      };
      __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function getDefault() {
          return module['default'];
        } : function getModuleExports() {
          return module;
        };
        __webpack_require__.d(getter, 'a', getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "";
      return __webpack_require__(__webpack_require__.s = 86);
    })([(function(module, exports) {
      module.exports = __WEBPACK_EXTERNAL_MODULE_0__;
    }), (function(module, exports, __webpack_require__) {
      (function(process) {
        if (process.env.NODE_ENV !== 'production') {
          var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element')) || 0xeac7;
          var isValidElement = function(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          };
          var throwOnDirectAccess = true;
          module.exports = __webpack_require__(94)(isValidElement, throwOnDirectAccess);
        } else {
          module.exports = __webpack_require__(97)();
        }
      }.call(exports, __webpack_require__(4)));
    }), (function(module, exports) {
      var isArray = Array.isArray;
      module.exports = isArray;
    }), (function(module, exports, __webpack_require__) {
      var freeGlobal = __webpack_require__(48);
      var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function('return this')();
      module.exports = root;
    }), (function(module, exports) {
      var process = module.exports = {};
      var cachedSetTimeout;
      var cachedClearTimeout;
      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }
      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }
      (function() {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      }());
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          return setTimeout(fun, 0);
        }
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          return clearTimeout(marker);
        }
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;
      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }
      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }
      process.nextTick = function(fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function() {
        this.fun.apply(null, this.array);
      };
      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = '';
      process.versions = {};
      function noop() {}
      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;
      process.listeners = function(name) {
        return [];
      };
      process.binding = function(name) {
        throw new Error('process.binding is not supported');
      };
      process.cwd = function() {
        return '/';
      };
      process.chdir = function(dir) {
        throw new Error('process.chdir is not supported');
      };
      process.umask = function() {
        return 0;
      };
    }), (function(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
      (function() {
        'use strict';
        var hasOwn = {}.hasOwnProperty;
        function classNames() {
          var classes = [];
          for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            if (!arg)
              continue;
            var argType = typeof arg;
            if (argType === 'string' || argType === 'number') {
              classes.push(arg);
            } else if (Array.isArray(arg)) {
              classes.push(classNames.apply(null, arg));
            } else if (argType === 'object') {
              for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                  classes.push(key);
                }
              }
            }
          }
          return classes.join(' ');
        }
        if (typeof module !== 'undefined' && module.exports) {
          module.exports = classNames;
        } else if (true) {
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return classNames;
          }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {
          window.classNames = classNames;
        }
      }());
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.warn = exports.stripDiacritics = exports.scrollIntoViewIfNeeded = exports.preventInputBlur = exports.pluralize = exports.getTruncatedOptions = exports.getOptionLabel = exports.getMenuItemId = exports.getMatchBounds = exports.getInputText = exports.getHintText = exports.getDisplayName = exports.getAccessibilityStatus = exports.defaultFilterBy = exports.addCustomOption = undefined;
      var _addCustomOption2 = __webpack_require__(162);
      var _addCustomOption3 = _interopRequireDefault(_addCustomOption2);
      var _defaultFilterBy2 = __webpack_require__(167);
      var _defaultFilterBy3 = _interopRequireDefault(_defaultFilterBy2);
      var _getAccessibilityStatus2 = __webpack_require__(191);
      var _getAccessibilityStatus3 = _interopRequireDefault(_getAccessibilityStatus2);
      var _getDisplayName2 = __webpack_require__(192);
      var _getDisplayName3 = _interopRequireDefault(_getDisplayName2);
      var _getHintText2 = __webpack_require__(193);
      var _getHintText3 = _interopRequireDefault(_getHintText2);
      var _getInputText2 = __webpack_require__(195);
      var _getInputText3 = _interopRequireDefault(_getInputText2);
      var _getMatchBounds2 = __webpack_require__(75);
      var _getMatchBounds3 = _interopRequireDefault(_getMatchBounds2);
      var _getMenuItemId2 = __webpack_require__(196);
      var _getMenuItemId3 = _interopRequireDefault(_getMenuItemId2);
      var _getOptionLabel2 = __webpack_require__(23);
      var _getOptionLabel3 = _interopRequireDefault(_getOptionLabel2);
      var _getTruncatedOptions2 = __webpack_require__(197);
      var _getTruncatedOptions3 = _interopRequireDefault(_getTruncatedOptions2);
      var _pluralize2 = __webpack_require__(198);
      var _pluralize3 = _interopRequireDefault(_pluralize2);
      var _preventInputBlur2 = __webpack_require__(199);
      var _preventInputBlur3 = _interopRequireDefault(_preventInputBlur2);
      var _scrollIntoViewIfNeeded2 = __webpack_require__(200);
      var _scrollIntoViewIfNeeded3 = _interopRequireDefault(_scrollIntoViewIfNeeded2);
      var _stripDiacritics2 = __webpack_require__(41);
      var _stripDiacritics3 = _interopRequireDefault(_stripDiacritics2);
      var _warn2 = __webpack_require__(10);
      var _warn3 = _interopRequireDefault(_warn2);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      exports.addCustomOption = _addCustomOption3.default;
      exports.defaultFilterBy = _defaultFilterBy3.default;
      exports.getAccessibilityStatus = _getAccessibilityStatus3.default;
      exports.getDisplayName = _getDisplayName3.default;
      exports.getHintText = _getHintText3.default;
      exports.getInputText = _getInputText3.default;
      exports.getMatchBounds = _getMatchBounds3.default;
      exports.getMenuItemId = _getMenuItemId3.default;
      exports.getOptionLabel = _getOptionLabel3.default;
      exports.getTruncatedOptions = _getTruncatedOptions3.default;
      exports.pluralize = _pluralize3.default;
      exports.preventInputBlur = _preventInputBlur3.default;
      exports.scrollIntoViewIfNeeded = _scrollIntoViewIfNeeded3.default;
      exports.stripDiacritics = _stripDiacritics3.default;
      exports.warn = _warn3.default;
    }), (function(module, exports) {
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == 'object' || type == 'function');
      }
      module.exports = isObject;
    }), (function(module, exports) {
      function isObjectLike(value) {
        return value != null && typeof value == 'object';
      }
      module.exports = isObjectLike;
    }), (function(module, exports) {
      module.exports = __WEBPACK_EXTERNAL_MODULE_9__;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.default = warn;
      exports._resetWarned = _resetWarned;
      var _warning = __webpack_require__(74);
      var _warning2 = _interopRequireDefault(_warning);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      var warned = {};
      function warn(falseToWarn, message) {
        if (!falseToWarn && message.indexOf('deprecated') !== -1) {
          if (warned[message]) {
            return;
          }
          warned[message] = true;
        }
        message = '[react-bootstrap-typeahead] ' + message;
        for (var _len = arguments.length,
            args = Array(_len > 2 ? _len - 2 : 0),
            _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }
        _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
      }
      function _resetWarned() {
        warned = {};
      }
    }), (function(module, exports, __webpack_require__) {
      var Symbol = __webpack_require__(13),
          getRawTag = __webpack_require__(92),
          objectToString = __webpack_require__(93);
      var nullTag = '[object Null]',
          undefinedTag = '[object Undefined]';
      var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
      function baseGetTag(value) {
        if (value == null) {
          return value === undefined ? undefinedTag : nullTag;
        }
        return (symToStringTag && symToStringTag in Object(value)) ? getRawTag(value) : objectToString(value);
      }
      module.exports = baseGetTag;
    }), (function(module, exports, __webpack_require__) {
      var baseIsNative = __webpack_require__(110),
          getValue = __webpack_require__(113);
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : undefined;
      }
      module.exports = getNative;
    }), (function(module, exports, __webpack_require__) {
      var root = __webpack_require__(3);
      var Symbol = root.Symbol;
      module.exports = Symbol;
    }), (function(module, exports, __webpack_require__) {
      var isSymbol = __webpack_require__(16);
      var INFINITY = 1 / 0;
      function toKey(value) {
        if (typeof value == 'string' || isSymbol(value)) {
          return value;
        }
        var result = (value + '');
        return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
      }
      module.exports = toKey;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      module.exports = {
        BACKSPACE: 8,
        TAB: 9,
        RETURN: 13,
        ESC: 27,
        SPACE: 32,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
      };
    }), (function(module, exports, __webpack_require__) {
      var baseGetTag = __webpack_require__(11),
          isObjectLike = __webpack_require__(8);
      var symbolTag = '[object Symbol]';
      function isSymbol(value) {
        return typeof value == 'symbol' || (isObjectLike(value) && baseGetTag(value) == symbolTag);
      }
      module.exports = isSymbol;
    }), (function(module, exports, __webpack_require__) {
      var listCacheClear = __webpack_require__(100),
          listCacheDelete = __webpack_require__(101),
          listCacheGet = __webpack_require__(102),
          listCacheHas = __webpack_require__(103),
          listCacheSet = __webpack_require__(104);
      function ListCache(entries) {
        var index = -1,
            length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype['delete'] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      module.exports = ListCache;
    }), (function(module, exports, __webpack_require__) {
      var eq = __webpack_require__(19);
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      module.exports = assocIndexOf;
    }), (function(module, exports) {
      function eq(value, other) {
        return value === other || (value !== value && other !== other);
      }
      module.exports = eq;
    }), (function(module, exports, __webpack_require__) {
      var getNative = __webpack_require__(12);
      var nativeCreate = getNative(Object, 'create');
      module.exports = nativeCreate;
    }), (function(module, exports, __webpack_require__) {
      var isKeyable = __webpack_require__(122);
      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
      }
      module.exports = getMapData;
    }), (function(module, exports) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == 'number' || (type != 'symbol' && reIsUint.test(value))) && (value > -1 && value % 1 == 0 && value < length);
      }
      module.exports = isIndex;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      (function(process) {
        Object.defineProperty(exports, "__esModule", {value: true});
        var _invariant = __webpack_require__(67);
        var _invariant2 = _interopRequireDefault(_invariant);
        var _isPlainObject = __webpack_require__(69);
        var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        function getOptionLabel(option, labelKey) {
          var optionLabel = void 0;
          if (typeof option === 'string') {
            optionLabel = option;
          }
          if (typeof labelKey === 'function') {
            optionLabel = labelKey(option);
          } else if (typeof labelKey === 'string' && (0, _isPlainObject2.default)(option)) {
            optionLabel = option[labelKey];
          }
          !(typeof optionLabel === 'string') ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'One or more options does not have a valid label string. Check the ' + '`labelKey` prop to ensure that it matches the correct option key and ' + 'provides a string for filtering and display.') : (0, _invariant2.default)(false) : void 0;
          return optionLabel;
        }
        exports.default = getOptionLabel;
      }.call(exports, __webpack_require__(4)));
    }), (function(module, exports, __webpack_require__) {
      var isArray = __webpack_require__(2),
          isKey = __webpack_require__(40),
          stringToPath = __webpack_require__(176),
          toString = __webpack_require__(68);
      function castPath(value, object) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      module.exports = castPath;
    }), (function(module, exports) {
      function head(array) {
        return (array && array.length) ? array[0] : undefined;
      }
      module.exports = head;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      function makeEmptyFunction(arg) {
        return function() {
          return arg;
        };
      }
      var emptyFunction = function emptyFunction() {};
      emptyFunction.thatReturns = makeEmptyFunction;
      emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
      emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
      emptyFunction.thatReturnsNull = makeEmptyFunction(null);
      emptyFunction.thatReturnsThis = function() {
        return this;
      };
      emptyFunction.thatReturnsArgument = function(arg) {
        return arg;
      };
      module.exports = emptyFunction;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      (function(process) {
        var validateFormat = function validateFormat(format) {};
        if (process.env.NODE_ENV !== 'production') {
          validateFormat = function validateFormat(format) {
            if (format === undefined) {
              throw new Error('invariant requires an error message argument');
            }
          };
        }
        function invariant(condition, format, a, b, c, d, e, f) {
          validateFormat(format);
          if (!condition) {
            var error;
            if (format === undefined) {
              error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
            } else {
              var args = [a, b, c, d, e, f];
              var argIndex = 0;
              error = new Error(format.replace(/%s/g, function() {
                return args[argIndex++];
              }));
              error.name = 'Invariant Violation';
            }
            error.framesToPop = 1;
            throw error;
          }
        }
        module.exports = invariant;
      }.call(exports, __webpack_require__(4)));
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
      module.exports = ReactPropTypesSecret;
    }), (function(module, exports, __webpack_require__) {
      var baseIsEqual = __webpack_require__(30);
      function isEqual(value, other) {
        return baseIsEqual(value, other);
      }
      module.exports = isEqual;
    }), (function(module, exports, __webpack_require__) {
      var baseIsEqualDeep = __webpack_require__(99),
          isObjectLike = __webpack_require__(8);
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      module.exports = baseIsEqual;
    }), (function(module, exports, __webpack_require__) {
      var getNative = __webpack_require__(12),
          root = __webpack_require__(3);
      var Map = getNative(root, 'Map');
      module.exports = Map;
    }), (function(module, exports, __webpack_require__) {
      var baseGetTag = __webpack_require__(11),
          isObject = __webpack_require__(7);
      var asyncTag = '[object AsyncFunction]',
          funcTag = '[object Function]',
          genTag = '[object GeneratorFunction]',
          proxyTag = '[object Proxy]';
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      module.exports = isFunction;
    }), (function(module, exports, __webpack_require__) {
      var mapCacheClear = __webpack_require__(114),
          mapCacheDelete = __webpack_require__(121),
          mapCacheGet = __webpack_require__(123),
          mapCacheHas = __webpack_require__(124),
          mapCacheSet = __webpack_require__(125);
      function MapCache(entries) {
        var index = -1,
            length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype['delete'] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      module.exports = MapCache;
    }), (function(module, exports, __webpack_require__) {
      var arrayLikeKeys = __webpack_require__(140),
          baseKeys = __webpack_require__(147),
          isArrayLike = __webpack_require__(37);
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      module.exports = keys;
    }), (function(module, exports, __webpack_require__) {
      var baseIsArguments = __webpack_require__(142),
          isObjectLike = __webpack_require__(8);
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
      };
      module.exports = isArguments;
    }), (function(module, exports) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      function isLength(value) {
        return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      module.exports = isLength;
    }), (function(module, exports, __webpack_require__) {
      var isFunction = __webpack_require__(32),
          isLength = __webpack_require__(36);
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      module.exports = isArrayLike;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      var _react = __webpack_require__(0);
      var _react2 = _interopRequireDefault(_react);
      var _createChainableTypeChecker = __webpack_require__(155);
      var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
        if (_react2.default.isValidElement(propValue)) {
          return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement. You can usually obtain a ReactComponent or DOMElement ' + 'from a ReactElement by attaching a ref to it.');
        }
        if ((propType !== 'object' || typeof propValue.render !== 'function') && propValue.nodeType !== 1) {
          return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement.');
        }
        return null;
      }
      exports.default = (0, _createChainableTypeChecker2.default)(validate);
      module.exports = exports['default'];
    }), (function(module, exports, __webpack_require__) {
      var castPath = __webpack_require__(24),
          toKey = __webpack_require__(14);
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0,
            length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return (index && index == length) ? object : undefined;
      }
      module.exports = baseGet;
    }), (function(module, exports, __webpack_require__) {
      var isArray = __webpack_require__(2),
          isSymbol = __webpack_require__(16);
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          reIsPlainProp = /^\w*$/;
      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || (object != null && value in Object(object));
      }
      module.exports = isKey;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.default = stripDiacritics;
      var map = [{
        'base': 'A',
        'letters': 'A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F'
      }, {
        'base': 'AA',
        'letters': '\uA732'
      }, {
        'base': 'AE',
        'letters': '\xC6\u01FC\u01E2'
      }, {
        'base': 'AO',
        'letters': '\uA734'
      }, {
        'base': 'AU',
        'letters': '\uA736'
      }, {
        'base': 'AV',
        'letters': '\uA738\uA73A'
      }, {
        'base': 'AY',
        'letters': '\uA73C'
      }, {
        'base': 'B',
        'letters': 'B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181'
      }, {
        'base': 'C',
        'letters': 'C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E'
      }, {
        'base': 'D',
        'letters': 'D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\xD0'
      }, {
        'base': 'DZ',
        'letters': '\u01F1\u01C4'
      }, {
        'base': 'Dz',
        'letters': '\u01F2\u01C5'
      }, {
        'base': 'E',
        'letters': 'E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E'
      }, {
        'base': 'F',
        'letters': 'F\u24BB\uFF26\u1E1E\u0191\uA77B'
      }, {
        'base': 'G',
        'letters': 'G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E'
      }, {
        'base': 'H',
        'letters': 'H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D'
      }, {
        'base': 'I',
        'letters': 'I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197'
      }, {
        'base': 'J',
        'letters': 'J\u24BF\uFF2A\u0134\u0248'
      }, {
        'base': 'K',
        'letters': 'K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2'
      }, {
        'base': 'L',
        'letters': 'L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780'
      }, {
        'base': 'LJ',
        'letters': '\u01C7'
      }, {
        'base': 'Lj',
        'letters': '\u01C8'
      }, {
        'base': 'M',
        'letters': 'M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C'
      }, {
        'base': 'N',
        'letters': 'N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4'
      }, {
        'base': 'NJ',
        'letters': '\u01CA'
      }, {
        'base': 'Nj',
        'letters': '\u01CB'
      }, {
        'base': 'O',
        'letters': 'O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C'
      }, {
        'base': 'OI',
        'letters': '\u01A2'
      }, {
        'base': 'OO',
        'letters': '\uA74E'
      }, {
        'base': 'OU',
        'letters': '\u0222'
      }, {
        'base': 'OE',
        'letters': '\x8C\u0152'
      }, {
        'base': 'oe',
        'letters': '\x9C\u0153'
      }, {
        'base': 'P',
        'letters': 'P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754'
      }, {
        'base': 'Q',
        'letters': 'Q\u24C6\uFF31\uA756\uA758\u024A'
      }, {
        'base': 'R',
        'letters': 'R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782'
      }, {
        'base': 'S',
        'letters': 'S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784'
      }, {
        'base': 'T',
        'letters': 'T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786'
      }, {
        'base': 'TZ',
        'letters': '\uA728'
      }, {
        'base': 'U',
        'letters': 'U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244'
      }, {
        'base': 'V',
        'letters': 'V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245'
      }, {
        'base': 'VY',
        'letters': '\uA760'
      }, {
        'base': 'W',
        'letters': 'W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72'
      }, {
        'base': 'X',
        'letters': 'X\u24CD\uFF38\u1E8A\u1E8C'
      }, {
        'base': 'Y',
        'letters': 'Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE'
      }, {
        'base': 'Z',
        'letters': 'Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762'
      }, {
        'base': 'a',
        'letters': 'a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250'
      }, {
        'base': 'aa',
        'letters': '\uA733'
      }, {
        'base': 'ae',
        'letters': '\xE6\u01FD\u01E3'
      }, {
        'base': 'ao',
        'letters': '\uA735'
      }, {
        'base': 'au',
        'letters': '\uA737'
      }, {
        'base': 'av',
        'letters': '\uA739\uA73B'
      }, {
        'base': 'ay',
        'letters': '\uA73D'
      }, {
        'base': 'b',
        'letters': 'b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253'
      }, {
        'base': 'c',
        'letters': 'c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184'
      }, {
        'base': 'd',
        'letters': 'd\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A'
      }, {
        'base': 'dz',
        'letters': '\u01F3\u01C6'
      }, {
        'base': 'e',
        'letters': 'e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD'
      }, {
        'base': 'f',
        'letters': 'f\u24D5\uFF46\u1E1F\u0192\uA77C'
      }, {
        'base': 'g',
        'letters': 'g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F'
      }, {
        'base': 'h',
        'letters': 'h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265'
      }, {
        'base': 'hv',
        'letters': '\u0195'
      }, {
        'base': 'i',
        'letters': 'i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131'
      }, {
        'base': 'j',
        'letters': 'j\u24D9\uFF4A\u0135\u01F0\u0249'
      }, {
        'base': 'k',
        'letters': 'k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3'
      }, {
        'base': 'l',
        'letters': 'l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747'
      }, {
        'base': 'lj',
        'letters': '\u01C9'
      }, {
        'base': 'm',
        'letters': 'm\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F'
      }, {
        'base': 'n',
        'letters': 'n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5'
      }, {
        'base': 'nj',
        'letters': '\u01CC'
      }, {
        'base': 'o',
        'letters': 'o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275'
      }, {
        'base': 'oi',
        'letters': '\u01A3'
      }, {
        'base': 'ou',
        'letters': '\u0223'
      }, {
        'base': 'oo',
        'letters': '\uA74F'
      }, {
        'base': 'p',
        'letters': 'p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755'
      }, {
        'base': 'q',
        'letters': 'q\u24E0\uFF51\u024B\uA757\uA759'
      }, {
        'base': 'r',
        'letters': 'r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783'
      }, {
        'base': 's',
        'letters': 's\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B'
      }, {
        'base': 't',
        'letters': 't\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787'
      }, {
        'base': 'tz',
        'letters': '\uA729'
      }, {
        'base': 'u',
        'letters': 'u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289'
      }, {
        'base': 'v',
        'letters': 'v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C'
      }, {
        'base': 'vy',
        'letters': '\uA761'
      }, {
        'base': 'w',
        'letters': 'w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73'
      }, {
        'base': 'x',
        'letters': 'x\u24E7\uFF58\u1E8B\u1E8D'
      }, {
        'base': 'y',
        'letters': 'y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF'
      }, {
        'base': 'z',
        'letters': 'z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763'
      }];
      var diacriticsMap = {};
      for (var ii = 0; ii < map.length; ii++) {
        var letters = map[ii].letters;
        for (var jj = 0; jj < letters.length; jj++) {
          diacriticsMap[letters[jj]] = map[ii].base;
        }
      }
      function stripDiacritics(str) {
        return str.replace(/[\u0300-\u036F]/g, '').replace(/[^\u0000-\u007E]/g, function(a) {
          return diacriticsMap[a] || a;
        });
      }
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.BaseMenuItem = undefined;
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _classnames = __webpack_require__(5);
      var _classnames2 = _interopRequireDefault(_classnames);
      var _noop = __webpack_require__(43);
      var _noop2 = _interopRequireDefault(_noop);
      var _react = __webpack_require__(0);
      var _react2 = _interopRequireDefault(_react);
      var _menuItemContainer = __webpack_require__(81);
      var _menuItemContainer2 = _interopRequireDefault(_menuItemContainer);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj) {
          if (keys.indexOf(i) >= 0)
            continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i))
            continue;
          target[i] = obj[i];
        }
        return target;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var BaseMenuItem = function(_React$Component) {
        _inherits(BaseMenuItem, _React$Component);
        function BaseMenuItem() {
          var _ref;
          var _temp,
              _this,
              _ret;
          _classCallCheck(this, BaseMenuItem);
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BaseMenuItem.__proto__ || Object.getPrototypeOf(BaseMenuItem)).call.apply(_ref, [this].concat(args))), _this), _this._handleClick = function(e) {
            var _this$props = _this.props,
                disabled = _this$props.disabled,
                onClick = _this$props.onClick;
            e.preventDefault();
            !disabled && onClick(e);
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }
        _createClass(BaseMenuItem, [{
          key: 'render',
          value: function render() {
            var _props = this.props,
                active = _props.active,
                children = _props.children,
                className = _props.className,
                disabled = _props.disabled,
                onClick = _props.onClick,
                onMouseDown = _props.onMouseDown,
                props = _objectWithoutProperties(_props, ['active', 'children', 'className', 'disabled', 'onClick', 'onMouseDown']);
            var conditionalClassNames = {
              'active': active,
              'disabled': disabled
            };
            return (_react2.default.createElement('li', _extends({}, props, {className: (0, _classnames2.default)(conditionalClassNames, className)}), _react2.default.createElement('a', {
              className: (0, _classnames2.default)('dropdown-item', conditionalClassNames),
              href: '#',
              onClick: this._handleClick,
              onMouseDown: onMouseDown
            }, children)));
          }
        }]);
        return BaseMenuItem;
      }(_react2.default.Component);
      BaseMenuItem.defaultProps = {onClick: _noop2.default};
      exports.BaseMenuItem = BaseMenuItem;
      exports.default = (0, _menuItemContainer2.default)(BaseMenuItem);
    }), (function(module, exports) {
      function noop() {}
      module.exports = noop;
    }), (function(module, exports, __webpack_require__) {
      var baseCreate = __webpack_require__(83),
          baseLodash = __webpack_require__(45);
      function LodashWrapper(value, chainAll) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
        this.__index__ = 0;
        this.__values__ = undefined;
      }
      LodashWrapper.prototype = baseCreate(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
      module.exports = LodashWrapper;
    }), (function(module, exports) {
      function baseLodash() {}
      module.exports = baseLodash;
    }), (function(module, exports, __webpack_require__) {
      var baseCreate = __webpack_require__(83),
          baseLodash = __webpack_require__(45);
      var MAX_ARRAY_LENGTH = 4294967295;
      function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = MAX_ARRAY_LENGTH;
        this.__views__ = [];
      }
      LazyWrapper.prototype = baseCreate(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      module.exports = LazyWrapper;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _debounce = __webpack_require__(88);
      var _debounce2 = _interopRequireDefault(_debounce);
      var _propTypes = __webpack_require__(1);
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _react = __webpack_require__(0);
      var _react2 = _interopRequireDefault(_react);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj) {
          if (keys.indexOf(i) >= 0)
            continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i))
            continue;
          target[i] = obj[i];
        }
        return target;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var DEFAULT_DELAY_MS = 200;
      var asyncContainer = function asyncContainer(Typeahead) {
        var Container = function(_React$Component) {
          _inherits(Container, _React$Component);
          function Container() {
            var _ref;
            var _temp,
                _this,
                _ret;
            _classCallCheck(this, Container);
            for (var _len = arguments.length,
                args = Array(_len),
                _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Container.__proto__ || Object.getPrototypeOf(Container)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
              hasSelection: false,
              query: ''
            }, _this._getEmptyLabel = function() {
              var _this$props = _this.props,
                  emptyLabel = _this$props.emptyLabel,
                  isLoading = _this$props.isLoading,
                  multiple = _this$props.multiple,
                  promptText = _this$props.promptText,
                  searchText = _this$props.searchText,
                  useCache = _this$props.useCache;
              var _this$state = _this.state,
                  hasSelection = _this$state.hasSelection,
                  query = _this$state.query;
              if (!query.length || !multiple && hasSelection) {
                return promptText;
              }
              if (isLoading || useCache && !_this._cache[query]) {
                return searchText;
              }
              return emptyLabel;
            }, _this._handleChange = function(selected) {
              _this.setState({hasSelection: !!selected.length}, function() {
                _this.props.onChange && _this.props.onChange(selected);
              });
            }, _this._handleInputChange = function(query) {
              _this.props.onInputChange && _this.props.onInputChange(query);
              _this._handleSearchDebounced(query);
            }, _this._handleSearch = function(initialQuery) {
              var _this$props2 = _this.props,
                  caseSensitive = _this$props2.caseSensitive,
                  minLength = _this$props2.minLength,
                  multiple = _this$props2.multiple,
                  onSearch = _this$props2.onSearch,
                  useCache = _this$props2.useCache;
              var query = initialQuery.trim();
              if (!caseSensitive) {
                query = query.toLowerCase();
              }
              _this.setState({query: query});
              if (!query || minLength && query.length < minLength) {
                return;
              }
              if (useCache && _this._cache[query]) {
                return;
              }
              if (!multiple && _this.state.hasSelection) {
                return;
              }
              onSearch(query);
            }, _temp), _possibleConstructorReturn(_this, _ret);
          }
          _createClass(Container, [{
            key: 'componentWillMount',
            value: function componentWillMount() {
              this._cache = {};
              this._handleSearchDebounced = (0, _debounce2.default)(this._handleSearch, this.props.delay);
            }
          }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
              var options = nextProps.options,
                  useCache = nextProps.useCache;
              if (!this.props.isLoading) {
                return;
              }
              if (useCache) {
                this._cache[this.state.query] = options;
              }
            }
          }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
              this._cache = {};
              this._handleSearchDebounced.cancel();
            }
          }, {
            key: 'render',
            value: function render() {
              var _this2 = this;
              var _props = this.props,
                  allowNew = _props.allowNew,
                  options = _props.options,
                  useCache = _props.useCache,
                  props = _objectWithoutProperties(_props, ['allowNew', 'options', 'useCache']);
              var cachedQuery = this._cache[this.state.query];
              var emptyLabel = this._getEmptyLabel();
              var shouldAllowNew = allowNew && emptyLabel === props.emptyLabel;
              return _react2.default.createElement(Typeahead, _extends({}, props, {
                allowNew: shouldAllowNew,
                emptyLabel: emptyLabel,
                onChange: this._handleChange,
                onInputChange: this._handleInputChange,
                options: useCache && cachedQuery ? cachedQuery : options,
                ref: function ref(instance) {
                  return _this2._instance = instance;
                }
              }));
            }
          }, {
            key: 'getInstance',
            value: function getInstance() {
              return this._instance.getInstance();
            }
          }]);
          return Container;
        }(_react2.default.Component);
        Container.propTypes = {
          delay: _propTypes2.default.number,
          isLoading: _propTypes2.default.bool.isRequired,
          onSearch: _propTypes2.default.func.isRequired,
          options: _propTypes2.default.array,
          promptText: _propTypes2.default.node,
          searchText: _propTypes2.default.node,
          useCache: _propTypes2.default.bool
        };
        Container.defaultProps = {
          delay: DEFAULT_DELAY_MS,
          minLength: 2,
          options: [],
          promptText: 'Type to search...',
          searchText: 'Searching...',
          useCache: true
        };
        return Container;
      };
      exports.default = asyncContainer;
    }), (function(module, exports, __webpack_require__) {
      (function(global) {
        var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
        module.exports = freeGlobal;
      }.call(exports, __webpack_require__(90)));
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      (function(process) {
        var emptyFunction = __webpack_require__(26);
        var warning = emptyFunction;
        if (process.env.NODE_ENV !== 'production') {
          var printWarning = function printWarning(format) {
            for (var _len = arguments.length,
                args = Array(_len > 1 ? _len - 1 : 0),
                _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            var argIndex = 0;
            var message = 'Warning: ' + format.replace(/%s/g, function() {
              return args[argIndex++];
            });
            if (typeof console !== 'undefined') {
              console.error(message);
            }
            try {
              throw new Error(message);
            } catch (x) {}
          };
          warning = function warning(condition, format) {
            if (format === undefined) {
              throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
            }
            if (format.indexOf('Failed Composite propType: ') === 0) {
              return;
            }
            if (!condition) {
              for (var _len2 = arguments.length,
                  args = Array(_len2 > 2 ? _len2 - 2 : 0),
                  _key2 = 2; _key2 < _len2; _key2++) {
                args[_key2 - 2] = arguments[_key2];
              }
              printWarning.apply(undefined, [format].concat(args));
            }
          };
        }
        module.exports = warning;
      }.call(exports, __webpack_require__(4)));
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _classnames = __webpack_require__(5);
      var _classnames2 = _interopRequireDefault(_classnames);
      var _propTypes = __webpack_require__(1);
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _react = __webpack_require__(0);
      var _react2 = _interopRequireDefault(_react);
      var _Overlay = __webpack_require__(98);
      var _Overlay2 = _interopRequireDefault(_Overlay);
      var _TypeaheadInput = __webpack_require__(158);
      var _TypeaheadInput2 = _interopRequireDefault(_TypeaheadInput);
      var _TypeaheadMenu = __webpack_require__(76);
      var _TypeaheadMenu2 = _interopRequireDefault(_TypeaheadMenu);
      var _typeaheadContainer = __webpack_require__(226);
      var _typeaheadContainer2 = _interopRequireDefault(_typeaheadContainer);
      var _utils = __webpack_require__(6);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var Typeahead = function(_React$Component) {
        _inherits(Typeahead, _React$Component);
        function Typeahead() {
          _classCallCheck(this, Typeahead);
          return _possibleConstructorReturn(this, (Typeahead.__proto__ || Object.getPrototypeOf(Typeahead)).apply(this, arguments));
        }
        _createClass(Typeahead, [{
          key: 'render',
          value: function render() {
            var _props = this.props,
                align = _props.align,
                bodyContainer = _props.bodyContainer,
                className = _props.className,
                dropup = _props.dropup,
                emptyLabel = _props.emptyLabel,
                inputRef = _props.inputRef,
                isMenuShown = _props.isMenuShown,
                labelKey = _props.labelKey,
                maxHeight = _props.maxHeight,
                menuId = _props.menuId,
                newSelectionPrefix = _props.newSelectionPrefix,
                onInputChange = _props.onInputChange,
                onMenuHide = _props.onMenuHide,
                onMenuShow = _props.onMenuShow,
                onPaginate = _props.onPaginate,
                onSelectionAdd = _props.onSelectionAdd,
                onSelectionRemove = _props.onSelectionRemove,
                paginate = _props.paginate,
                paginationText = _props.paginationText,
                renderMenu = _props.renderMenu,
                renderMenuItemChildren = _props.renderMenuItemChildren,
                results = _props.results,
                text = _props.text;
            var menuProps = {
              align: align,
              dropup: dropup,
              emptyLabel: emptyLabel,
              id: menuId,
              labelKey: labelKey,
              maxHeight: maxHeight,
              newSelectionPrefix: newSelectionPrefix,
              onPaginate: onPaginate,
              paginate: paginate,
              paginationText: paginationText,
              renderMenuItemChildren: renderMenuItemChildren,
              text: text
            };
            return _react2.default.createElement('div', {
              className: (0, _classnames2.default)('rbt', 'open', 'clearfix', {'dropup': dropup}, className),
              style: {position: 'relative'},
              tabIndex: -1
            }, _react2.default.createElement(_TypeaheadInput2.default, _extends({}, this.props, {
              onAdd: onSelectionAdd,
              onChange: onInputChange,
              onRemove: onSelectionRemove,
              options: results,
              ref: inputRef
            })), _react2.default.createElement(_Overlay2.default, {
              align: align,
              className: className,
              container: bodyContainer ? document.body : this,
              dropup: dropup,
              onMenuHide: onMenuHide,
              onMenuShow: onMenuShow,
              show: isMenuShown,
              target: this
            }, renderMenu(results, menuProps)), _react2.default.createElement('div', {
              'aria-atomic': true,
              'aria-live': 'polite',
              className: 'sr-only rbt-sr-status',
              role: 'status'
            }, (0, _utils.getAccessibilityStatus)(this.props)));
          }
        }]);
        return Typeahead;
      }(_react2.default.Component);
      Typeahead.propTypes = {renderMenu: _propTypes2.default.func};
      Typeahead.defaultProps = {renderMenu: function renderMenu(results, menuProps) {
          return _react2.default.createElement(_TypeaheadMenu2.default, _extends({}, menuProps, {options: results}));
        }};
      exports.default = (0, _typeaheadContainer2.default)(Typeahead);
    }), (function(module, exports, __webpack_require__) {
      var ListCache = __webpack_require__(17),
          stackClear = __webpack_require__(105),
          stackDelete = __webpack_require__(106),
          stackGet = __webpack_require__(107),
          stackHas = __webpack_require__(108),
          stackSet = __webpack_require__(109);
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype['delete'] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      module.exports = Stack;
    }), (function(module, exports) {
      var funcProto = Function.prototype;
      var funcToString = funcProto.toString;
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {}
          try {
            return (func + '');
          } catch (e) {}
        }
        return '';
      }
      module.exports = toSource;
    }), (function(module, exports, __webpack_require__) {
      var SetCache = __webpack_require__(126),
          arraySome = __webpack_require__(54),
          cacheHas = __webpack_require__(129);
      var COMPARE_PARTIAL_FLAG = 1,
          COMPARE_UNORDERED_FLAG = 2;
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
            arrLength = array.length,
            othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var stacked = stack.get(array);
        if (stacked && stack.get(other)) {
          return stacked == other;
        }
        var index = -1,
            result = true,
            seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;
        stack.set(array, other);
        stack.set(other, array);
        while (++index < arrLength) {
          var arrValue = array[index],
              othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
          }
          if (compared !== undefined) {
            if (compared) {
              continue;
            }
            result = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
          }
        }
        stack['delete'](array);
        stack['delete'](other);
        return result;
      }
      module.exports = equalArrays;
    }), (function(module, exports) {
      function arraySome(array, predicate) {
        var index = -1,
            length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      module.exports = arraySome;
    }), (function(module, exports) {
      function arrayPush(array, values) {
        var index = -1,
            length = values.length,
            offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      module.exports = arrayPush;
    }), (function(module, exports, __webpack_require__) {
      (function(module) {
        var root = __webpack_require__(3),
            stubFalse = __webpack_require__(143);
        var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
        var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
        var moduleExports = freeModule && freeModule.exports === freeExports;
        var Buffer = moduleExports ? root.Buffer : undefined;
        var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
        var isBuffer = nativeIsBuffer || stubFalse;
        module.exports = isBuffer;
      }.call(exports, __webpack_require__(57)(module)));
    }), (function(module, exports) {
      module.exports = function(module) {
        if (!module.webpackPolyfill) {
          module.deprecate = function() {};
          module.paths = [];
          if (!module.children)
            module.children = [];
          Object.defineProperty(module, "loaded", {
            enumerable: true,
            get: function() {
              return module.l;
            }
          });
          Object.defineProperty(module, "id", {
            enumerable: true,
            get: function() {
              return module.i;
            }
          });
          module.webpackPolyfill = 1;
        }
        return module;
      };
    }), (function(module, exports, __webpack_require__) {
      var baseIsTypedArray = __webpack_require__(144),
          baseUnary = __webpack_require__(145),
          nodeUtil = __webpack_require__(146);
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      module.exports = isTypedArray;
    }), (function(module, exports) {
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      module.exports = overArg;
    }), (function(module, exports, __webpack_require__) {
      var getNative = __webpack_require__(12),
          root = __webpack_require__(3);
      var WeakMap = getNative(root, 'WeakMap');
      module.exports = WeakMap;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      exports.__esModule = true;
      exports.default = getContainer;
      var _reactDom = __webpack_require__(9);
      var _reactDom2 = _interopRequireDefault(_reactDom);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function getContainer(container, defaultContainer) {
        container = typeof container === 'function' ? container() : container;
        return _reactDom2.default.findDOMNode(container) || defaultContainer;
      }
      module.exports = exports['default'];
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      exports.__esModule = true;
      exports.default = function(componentOrElement) {
        return (0, _ownerDocument2.default)(_reactDom2.default.findDOMNode(componentOrElement));
      };
      var _reactDom = __webpack_require__(9);
      var _reactDom2 = _interopRequireDefault(_reactDom);
      var _ownerDocument = __webpack_require__(156);
      var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      module.exports = exports['default'];
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _classnames = __webpack_require__(5);
      var _classnames2 = _interopRequireDefault(_classnames);
      var _react = __webpack_require__(0);
      var _react2 = _interopRequireDefault(_react);
      var _propTypes = __webpack_require__(1);
      var _propTypes2 = _interopRequireDefault(_propTypes);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj) {
          if (keys.indexOf(i) >= 0)
            continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i))
            continue;
          target[i] = obj[i];
        }
        return target;
      }
      var ClearButton = function ClearButton(_ref) {
        var bsSize = _ref.bsSize,
            className = _ref.className,
            label = _ref.label,
            _onClick = _ref.onClick,
            props = _objectWithoutProperties(_ref, ['bsSize', 'className', 'label', 'onClick']);
        return _react2.default.createElement('button', _extends({}, props, {
          'aria-label': label,
          className: (0, _classnames2.default)('close', 'rbt-close', {'rbt-close-lg': bsSize === 'large' || bsSize === 'lg'}, className),
          onClick: function onClick(e) {
            e.stopPropagation();
            _onClick(e);
          },
          type: 'button'
        }), _react2.default.createElement('span', {'aria-hidden': 'true'}, '\xD7'), _react2.default.createElement('span', {className: 'sr-only'}, label));
      };
      ClearButton.propTypes = {
        bsSize: _propTypes2.default.oneOf(['large', 'lg', 'small', 'sm']),
        label: _propTypes2.default.string,
        onClick: _propTypes2.default.func.isRequired
      };
      ClearButton.defaultProps = {label: 'Clear'};
      exports.default = ClearButton;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _classnames = __webpack_require__(5);
      var _classnames2 = _interopRequireDefault(_classnames);
      var _react = __webpack_require__(0);
      var _react2 = _interopRequireDefault(_react);
      var _propTypes = __webpack_require__(1);
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _ClearButton = __webpack_require__(63);
      var _ClearButton2 = _interopRequireDefault(_ClearButton);
      var _tokenContainer = __webpack_require__(65);
      var _tokenContainer2 = _interopRequireDefault(_tokenContainer);
      var _keyCode = __webpack_require__(15);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj) {
          if (keys.indexOf(i) >= 0)
            continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i))
            continue;
          target[i] = obj[i];
        }
        return target;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var Token = function(_React$Component) {
        _inherits(Token, _React$Component);
        function Token() {
          var _ref;
          var _temp,
              _this,
              _ret;
          _classCallCheck(this, Token);
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Token.__proto__ || Object.getPrototypeOf(Token)).call.apply(_ref, [this].concat(args))), _this), _this._renderRemoveableToken = function() {
            var _this$props = _this.props,
                active = _this$props.active,
                children = _this$props.children,
                className = _this$props.className,
                onRemove = _this$props.onRemove,
                props = _objectWithoutProperties(_this$props, ['active', 'children', 'className', 'onRemove']);
            return _react2.default.createElement('div', _extends({}, props, {className: (0, _classnames2.default)('rbt-token', 'rbt-token-removeable', {'rbt-token-active': active}, className)}), children, _react2.default.createElement(_ClearButton2.default, {
              className: 'rbt-token-remove-button',
              label: 'Remove',
              onClick: onRemove,
              onKeyDown: _this._handleRemoveButtonKeydown,
              tabIndex: -1
            }));
          }, _this._renderToken = function() {
            var _this$props2 = _this.props,
                children = _this$props2.children,
                className = _this$props2.className,
                disabled = _this$props2.disabled,
                href = _this$props2.href;
            var classnames = (0, _classnames2.default)('rbt-token', {'rbt-token-disabled': disabled}, className);
            if (href) {
              return _react2.default.createElement('a', {
                className: classnames,
                href: href
              }, children);
            }
            return _react2.default.createElement('div', {className: classnames}, children);
          }, _this._handleRemoveButtonKeydown = function(e) {
            switch (e.keyCode) {
              case _keyCode.RETURN:
                _this.props.onRemove();
                break;
            }
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }
        _createClass(Token, [{
          key: 'render',
          value: function render() {
            return this.props.onRemove && !this.props.disabled ? this._renderRemoveableToken() : this._renderToken();
          }
        }]);
        return Token;
      }(_react2.default.Component);
      Token.propTypes = {
        active: _propTypes2.default.bool,
        onRemove: _propTypes2.default.func,
        tabIndex: _propTypes2.default.number
      };
      Token.defaultProps = {
        active: false,
        tabIndex: 0
      };
      exports.default = (0, _tokenContainer2.default)(Token);
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _react = __webpack_require__(0);
      var _react2 = _interopRequireDefault(_react);
      var _reactOnclickoutside = __webpack_require__(66);
      var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);
      var _utils = __webpack_require__(6);
      var _keyCode = __webpack_require__(15);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj) {
          if (keys.indexOf(i) >= 0)
            continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i))
            continue;
          target[i] = obj[i];
        }
        return target;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var tokenContainer = function tokenContainer(Component) {
        var WrappedComponent = function(_React$Component) {
          _inherits(WrappedComponent, _React$Component);
          function WrappedComponent() {
            var _ref;
            var _temp,
                _this,
                _ret;
            _classCallCheck(this, WrappedComponent);
            for (var _len = arguments.length,
                args = Array(_len),
                _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WrappedComponent.__proto__ || Object.getPrototypeOf(WrappedComponent)).call.apply(_ref, [this].concat(args))), _this), _this.displayName = 'tokenContainer(' + (0, _utils.getDisplayName)(Component) + ')', _this.state = {active: false}, _this._handleBlur = function(e) {
              _this.setState({active: false});
            }, _this._handleKeyDown = function(e) {
              switch (e.keyCode) {
                case _keyCode.BACKSPACE:
                  if (_this.state.active) {
                    e.preventDefault();
                    _this.props.onRemove();
                  }
                  break;
              }
            }, _this.handleClickOutside = function(e) {
              _this._handleBlur();
            }, _this._handleActive = function(e) {
              e.stopPropagation();
              _this.setState({active: true});
            }, _temp), _possibleConstructorReturn(_this, _ret);
          }
          _createClass(WrappedComponent, [{
            key: 'render',
            value: function render() {
              var _props = this.props,
                  disableOnClickOutside = _props.disableOnClickOutside,
                  enableOnClickOutside = _props.enableOnClickOutside,
                  eventTypes = _props.eventTypes,
                  outsideClickIgnoreClass = _props.outsideClickIgnoreClass,
                  preventDefault = _props.preventDefault,
                  stopPropagation = _props.stopPropagation,
                  tokenProps = _objectWithoutProperties(_props, ['disableOnClickOutside', 'enableOnClickOutside', 'eventTypes', 'outsideClickIgnoreClass', 'preventDefault', 'stopPropagation']);
              return _react2.default.createElement(Component, _extends({}, tokenProps, this.state, {
                onBlur: this._handleBlur,
                onClick: this._handleActive,
                onFocus: this._handleActive,
                onKeyDown: this._handleKeyDown
              }));
            }
          }]);
          return WrappedComponent;
        }(_react2.default.Component);
        return (0, _reactOnclickoutside2.default)(WrappedComponent);
      };
      exports.default = tokenContainer;
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_require__.d(__webpack_exports__, "IGNORE_CLASS_NAME", function() {
        return IGNORE_CLASS_NAME;
      });
      var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
      var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
      var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(9);
      var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
      }
      function _objectWithoutProperties(source, excluded) {
        if (source == null)
          return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key,
            i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          target[key] = source[key];
        }
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0)
              continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key))
              continue;
            target[key] = source[key];
          }
        }
        return target;
      }
      function isNodeFound(current, componentNode, ignoreClass) {
        if (current === componentNode) {
          return true;
        }
        if (current.correspondingElement) {
          return current.correspondingElement.classList.contains(ignoreClass);
        }
        return current.classList.contains(ignoreClass);
      }
      function findHighest(current, componentNode, ignoreClass) {
        if (current === componentNode) {
          return true;
        }
        while (current.parentNode) {
          if (isNodeFound(current, componentNode, ignoreClass)) {
            return true;
          }
          current = current.parentNode;
        }
        return current;
      }
      function clickedScrollbar(evt) {
        return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;
      }
      var testPassiveEventSupport = function testPassiveEventSupport() {
        if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') {
          return;
        }
        var passive = false;
        var options = Object.defineProperty({}, 'passive', {get: function get() {
            passive = true;
          }});
        var noop = function noop() {};
        window.addEventListener('testPassiveEventSupport', noop, options);
        window.removeEventListener('testPassiveEventSupport', noop, options);
        return passive;
      };
      function autoInc(seed) {
        if (seed === void 0) {
          seed = 0;
        }
        return function() {
          return ++seed;
        };
      }
      var uid = autoInc();
      var passiveEventSupport;
      var handlersMap = {};
      var enabledInstances = {};
      var touchEvents = ['touchstart', 'touchmove'];
      var IGNORE_CLASS_NAME = 'ignore-react-onclickoutside';
      function getEventHandlerOptions(instance, eventName) {
        var handlerOptions = null;
        var isTouchEvent = touchEvents.indexOf(eventName) !== -1;
        if (isTouchEvent && passiveEventSupport) {
          handlerOptions = {passive: !instance.props.preventDefault};
        }
        return handlerOptions;
      }
      function onClickOutsideHOC(WrappedComponent, config) {
        var _class,
            _temp;
        return _temp = _class = function(_Component) {
          _inheritsLoose(onClickOutside, _Component);
          function onClickOutside(props) {
            var _this;
            _this = _Component.call(this, props) || this;
            _this.__outsideClickHandler = function(event) {
              if (typeof _this.__clickOutsideHandlerProp === 'function') {
                _this.__clickOutsideHandlerProp(event);
                return;
              }
              var instance = _this.getInstance();
              if (typeof instance.props.handleClickOutside === 'function') {
                instance.props.handleClickOutside(event);
                return;
              }
              if (typeof instance.handleClickOutside === 'function') {
                instance.handleClickOutside(event);
                return;
              }
              throw new Error('WrappedComponent lacks a handleClickOutside(event) function for processing outside click events.');
            };
            _this.enableOnClickOutside = function() {
              if (typeof document === 'undefined' || enabledInstances[_this._uid]) {
                return;
              }
              if (typeof passiveEventSupport === 'undefined') {
                passiveEventSupport = testPassiveEventSupport();
              }
              enabledInstances[_this._uid] = true;
              var events = _this.props.eventTypes;
              if (!events.forEach) {
                events = [events];
              }
              handlersMap[_this._uid] = function(event) {
                if (_this.props.disableOnClickOutside)
                  return;
                if (_this.componentNode === null)
                  return;
                if (_this.props.preventDefault) {
                  event.preventDefault();
                }
                if (_this.props.stopPropagation) {
                  event.stopPropagation();
                }
                if (_this.props.excludeScrollbar && clickedScrollbar(event))
                  return;
                var current = event.target;
                if (findHighest(current, _this.componentNode, _this.props.outsideClickIgnoreClass) !== document) {
                  return;
                }
                _this.__outsideClickHandler(event);
              };
              events.forEach(function(eventName) {
                document.addEventListener(eventName, handlersMap[_this._uid], getEventHandlerOptions(_this, eventName));
              });
            };
            _this.disableOnClickOutside = function() {
              delete enabledInstances[_this._uid];
              var fn = handlersMap[_this._uid];
              if (fn && typeof document !== 'undefined') {
                var events = _this.props.eventTypes;
                if (!events.forEach) {
                  events = [events];
                }
                events.forEach(function(eventName) {
                  return document.removeEventListener(eventName, fn, getEventHandlerOptions(_this, eventName));
                });
                delete handlersMap[_this._uid];
              }
            };
            _this.getRef = function(ref) {
              return _this.instanceRef = ref;
            };
            _this._uid = uid();
            return _this;
          }
          var _proto = onClickOutside.prototype;
          _proto.getInstance = function getInstance() {
            if (!WrappedComponent.prototype.isReactComponent) {
              return this;
            }
            var ref = this.instanceRef;
            return ref.getInstance ? ref.getInstance() : ref;
          };
          _proto.componentDidMount = function componentDidMount() {
            if (typeof document === 'undefined' || !document.createElement) {
              return;
            }
            var instance = this.getInstance();
            if (config && typeof config.handleClickOutside === 'function') {
              this.__clickOutsideHandlerProp = config.handleClickOutside(instance);
              if (typeof this.__clickOutsideHandlerProp !== 'function') {
                throw new Error('WrappedComponent lacks a function for processing outside click events specified by the handleClickOutside config option.');
              }
            }
            this.componentNode = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.getInstance());
            this.enableOnClickOutside();
          };
          _proto.componentDidUpdate = function componentDidUpdate() {
            this.componentNode = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.getInstance());
          };
          _proto.componentWillUnmount = function componentWillUnmount() {
            this.disableOnClickOutside();
          };
          _proto.render = function render() {
            var _props = this.props,
                excludeScrollbar = _props.excludeScrollbar,
                props = _objectWithoutProperties(_props, ["excludeScrollbar"]);
            if (WrappedComponent.prototype.isReactComponent) {
              props.ref = this.getRef;
            } else {
              props.wrappedRef = this.getRef;
            }
            props.disableOnClickOutside = this.disableOnClickOutside;
            props.enableOnClickOutside = this.enableOnClickOutside;
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(WrappedComponent, props);
          };
          return onClickOutside;
        }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), _class.displayName = "OnClickOutside(" + (WrappedComponent.displayName || WrappedComponent.name || 'Component') + ")", _class.defaultProps = {
          eventTypes: ['mousedown', 'touchstart'],
          excludeScrollbar: config && config.excludeScrollbar || false,
          outsideClickIgnoreClass: IGNORE_CLASS_NAME,
          preventDefault: false,
          stopPropagation: false
        }, _class.getClass = function() {
          return WrappedComponent.getClass ? WrappedComponent.getClass() : WrappedComponent;
        }, _temp;
      }
      __webpack_exports__["default"] = (onClickOutsideHOC);
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      (function(process) {
        var invariant = function(condition, format, a, b, c, d, e, f) {
          if (process.env.NODE_ENV !== 'production') {
            if (format === undefined) {
              throw new Error('invariant requires an error message argument');
            }
          }
          if (!condition) {
            var error;
            if (format === undefined) {
              error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
            } else {
              var args = [a, b, c, d, e, f];
              var argIndex = 0;
              error = new Error(format.replace(/%s/g, function() {
                return args[argIndex++];
              }));
              error.name = 'Invariant Violation';
            }
            error.framesToPop = 1;
            throw error;
          }
        };
        module.exports = invariant;
      }.call(exports, __webpack_require__(4)));
    }), (function(module, exports, __webpack_require__) {
      var baseToString = __webpack_require__(164);
      function toString(value) {
        return value == null ? '' : baseToString(value);
      }
      module.exports = toString;
    }), (function(module, exports, __webpack_require__) {
      var baseGetTag = __webpack_require__(11),
          getPrototype = __webpack_require__(166),
          isObjectLike = __webpack_require__(8);
      var objectTag = '[object Object]';
      var funcProto = Function.prototype,
          objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var objectCtorString = funcToString.call(Object);
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
        return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      module.exports = isPlainObject;
    }), (function(module, exports, __webpack_require__) {
      var isObject = __webpack_require__(7);
      function isStrictComparable(value) {
        return value === value && !isObject(value);
      }
      module.exports = isStrictComparable;
    }), (function(module, exports) {
      function matchesStrictComparable(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== undefined || (key in Object(object)));
        };
      }
      module.exports = matchesStrictComparable;
    }), (function(module, exports, __webpack_require__) {
      var baseHasIn = __webpack_require__(179),
          hasPath = __webpack_require__(180);
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      module.exports = hasIn;
    }), (function(module, exports) {
      function identity(value) {
        return value;
      }
      module.exports = identity;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      (function(process) {
        var warning = function() {};
        if (process.env.NODE_ENV !== 'production') {
          warning = function(condition, format, args) {
            var len = arguments.length;
            args = new Array(len > 2 ? len - 2 : 0);
            for (var key = 2; key < len; key++) {
              args[key - 2] = arguments[key];
            }
            if (format === undefined) {
              throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
            }
            if (format.length < 10 || (/^[s\W]*$/).test(format)) {
              throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
            }
            if (!condition) {
              var argIndex = 0;
              var message = 'Warning: ' + format.replace(/%s/g, function() {
                return args[argIndex++];
              });
              if (typeof console !== 'undefined') {
                console.error(message);
              }
              try {
                throw new Error(message);
              } catch (x) {}
            }
          };
        }
        module.exports = warning;
      }.call(exports, __webpack_require__(4)));
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.default = getMatchBounds;
      var _escapeStringRegexp = __webpack_require__(194);
      var _escapeStringRegexp2 = _interopRequireDefault(_escapeStringRegexp);
      var _stripDiacritics = __webpack_require__(41);
      var _stripDiacritics2 = _interopRequireDefault(_stripDiacritics);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      var CASE_INSENSITIVE = 'i';
      var COMBINING_MARKS = /[\u0300-\u036F]/;
      function getMatchBounds(subject, search) {
        search = new RegExp((0, _escapeStringRegexp2.default)((0, _stripDiacritics2.default)(search)), CASE_INSENSITIVE);
        var matches = search.exec((0, _stripDiacritics2.default)(subject));
        if (!matches) {
          return null;
        }
        var start = matches.index;
        var matchLength = matches[0].length;
        if (COMBINING_MARKS.test(subject)) {
          for (var ii = 0; ii <= start; ii++) {
            if (COMBINING_MARKS.test(subject[ii])) {
              start++;
            }
          }
          for (var _ii = start; _ii <= start + matchLength; _ii++) {
            if (COMBINING_MARKS.test(subject[_ii])) {
              matchLength++;
            }
          }
        }
        return {
          end: start + matchLength,
          start: start
        };
      }
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _pick = __webpack_require__(202);
      var _pick2 = _interopRequireDefault(_pick);
      var _react = __webpack_require__(0);
      var _react2 = _interopRequireDefault(_react);
      var _propTypes = __webpack_require__(1);
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _Highlighter = __webpack_require__(79);
      var _Highlighter2 = _interopRequireDefault(_Highlighter);
      var _Menu = __webpack_require__(80);
      var _Menu2 = _interopRequireDefault(_Menu);
      var _MenuItem = __webpack_require__(42);
      var _MenuItem2 = _interopRequireDefault(_MenuItem);
      var _utils = __webpack_require__(6);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var TypeaheadMenu = function(_React$Component) {
        _inherits(TypeaheadMenu, _React$Component);
        function TypeaheadMenu() {
          var _ref;
          var _temp,
              _this,
              _ret;
          _classCallCheck(this, TypeaheadMenu);
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TypeaheadMenu.__proto__ || Object.getPrototypeOf(TypeaheadMenu)).call.apply(_ref, [this].concat(args))), _this), _this._renderMenuItem = function(option, idx) {
            var _this$props = _this.props,
                labelKey = _this$props.labelKey,
                newSelectionPrefix = _this$props.newSelectionPrefix,
                renderMenuItemChildren = _this$props.renderMenuItemChildren,
                text = _this$props.text;
            var menuItemProps = {
              disabled: option.disabled,
              key: idx,
              label: (0, _utils.getOptionLabel)(option, labelKey),
              option: option,
              position: idx
            };
            if (option.customOption) {
              return _react2.default.createElement(_MenuItem2.default, _extends({}, menuItemProps, {
                className: 'rbt-menu-custom-option',
                label: newSelectionPrefix + option[labelKey]
              }), newSelectionPrefix, _react2.default.createElement(_Highlighter2.default, {search: text}, option[labelKey]));
            }
            return _react2.default.createElement(_MenuItem2.default, menuItemProps, renderMenuItemChildren(option, _this.props, idx));
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }
        _createClass(TypeaheadMenu, [{
          key: 'render',
          value: function render() {
            var menuProps = (0, _pick2.default)(this.props, ['align', 'className', 'dropup', 'emptyLabel', 'id', 'maxHeight', 'onPaginate', 'paginate', 'paginationText', 'style']);
            return _react2.default.createElement(_Menu2.default, menuProps, this.props.options.map(this._renderMenuItem));
          }
        }]);
        return TypeaheadMenu;
      }(_react2.default.Component);
      TypeaheadMenu.propTypes = {
        newSelectionPrefix: _propTypes2.default.string,
        renderMenuItemChildren: _propTypes2.default.func
      };
      TypeaheadMenu.defaultProps = {
        newSelectionPrefix: 'New selection: ',
        renderMenuItemChildren: function renderMenuItemChildren(option, props, idx) {
          return _react2.default.createElement(_Highlighter2.default, {search: props.text}, (0, _utils.getOptionLabel)(option, props.labelKey));
        }
      };
      exports.default = TypeaheadMenu;
    }), (function(module, exports, __webpack_require__) {
      var getNative = __webpack_require__(12);
      var defineProperty = (function() {
        try {
          var func = getNative(Object, 'defineProperty');
          func({}, '', {});
          return func;
        } catch (e) {}
      }());
      module.exports = defineProperty;
    }), (function(module, exports, __webpack_require__) {
      var flatten = __webpack_require__(208),
          overRest = __webpack_require__(211),
          setToString = __webpack_require__(213);
      function flatRest(func) {
        return setToString(overRest(func, undefined, flatten), func + '');
      }
      module.exports = flatRest;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _propTypes = __webpack_require__(1);
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _react = __webpack_require__(0);
      var _react2 = _interopRequireDefault(_react);
      var _utils = __webpack_require__(6);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var Highlighter = function(_React$Component) {
        _inherits(Highlighter, _React$Component);
        function Highlighter() {
          var _ref;
          var _temp,
              _this,
              _ret;
          _classCallCheck(this, Highlighter);
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Highlighter.__proto__ || Object.getPrototypeOf(Highlighter)).call.apply(_ref, [this].concat(args))), _this), _this._count = 0, _temp), _possibleConstructorReturn(_this, _ret);
        }
        _createClass(Highlighter, [{
          key: 'render',
          value: function render() {
            var children = this.props.search ? this._renderHighlightedChildren() : this.props.children;
            return _react2.default.createElement('span', null, children);
          }
        }, {
          key: '_renderHighlightedChildren',
          value: function _renderHighlightedChildren() {
            var children = [];
            var remaining = this.props.children;
            while (remaining) {
              var bounds = (0, _utils.getMatchBounds)(remaining, this.props.search);
              if (!bounds) {
                this._count++;
                children.push(_react2.default.createElement('span', {key: this._count}, remaining));
                return children;
              }
              var nonMatch = remaining.slice(0, bounds.start);
              if (nonMatch) {
                this._count++;
                children.push(_react2.default.createElement('span', {key: this._count}, nonMatch));
              }
              var match = remaining.slice(bounds.start, bounds.end);
              if (match) {
                this._count++;
                children.push(_react2.default.createElement('mark', {
                  className: 'rbt-highlight-text',
                  key: this._count
                }, match));
              }
              remaining = remaining.slice(bounds.end);
            }
            return children;
          }
        }]);
        return Highlighter;
      }(_react2.default.Component);
      Highlighter.propTypes = {
        children: _propTypes2.default.string.isRequired,
        search: _propTypes2.default.string.isRequired
      };
      exports.default = Highlighter;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _classnames = __webpack_require__(5);
      var _classnames2 = _interopRequireDefault(_classnames);
      var _react = __webpack_require__(0);
      var _react2 = _interopRequireDefault(_react);
      var _propTypes = __webpack_require__(1);
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _isRequiredForA11y = __webpack_require__(217);
      var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);
      var _MenuItem = __webpack_require__(42);
      var _propTypes3 = __webpack_require__(82);
      var _utils = __webpack_require__(6);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      function getMaxHeightValue(maxHeight) {
        return typeof maxHeight === 'number' ? maxHeight + 'px' : maxHeight;
      }
      function maxHeightType(props, propName, componentName) {
        (0, _utils.warn)(typeof props.maxHeight === 'string', 'Number values are deprecated for the `maxHeight` prop and support ' + 'will be removed in the next major version. Pass a valid string ' + 'value (eg: \'300px\', \'25%\', \'50vh\') instead.');
      }
      var BaseMenu = function BaseMenu(props) {
        return _react2.default.createElement('ul', _extends({}, props, {className: (0, _classnames2.default)('dropdown-menu', props.className)}), props.children);
      };
      var Menu = function(_React$Component) {
        _inherits(Menu, _React$Component);
        function Menu() {
          var _ref;
          var _temp,
              _this,
              _ret;
          _classCallCheck(this, Menu);
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.displayName = 'Menu', _temp), _possibleConstructorReturn(_this, _ret);
        }
        _createClass(Menu, [{
          key: 'render',
          value: function render() {
            var _props = this.props,
                align = _props.align,
                children = _props.children,
                className = _props.className,
                emptyLabel = _props.emptyLabel,
                id = _props.id,
                maxHeight = _props.maxHeight,
                style = _props.style;
            var contents = _react.Children.count(children) === 0 ? _react2.default.createElement(_MenuItem.BaseMenuItem, {disabled: true}, emptyLabel) : children;
            return _react2.default.createElement(BaseMenu, {
              className: (0, _classnames2.default)('rbt-menu', {
                'dropdown-menu-justify': align === 'justify',
                'dropdown-menu-right': align === 'right'
              }, className),
              id: id,
              role: 'listbox',
              style: _extends({}, style, {
                display: 'block',
                maxHeight: getMaxHeightValue(maxHeight),
                overflow: 'auto'
              })
            }, contents, this._renderPaginationMenuItem());
          }
        }, {
          key: '_renderPaginationMenuItem',
          value: function _renderPaginationMenuItem() {
            var _props2 = this.props,
                children = _props2.children,
                onPaginate = _props2.onPaginate,
                paginate = _props2.paginate,
                paginationText = _props2.paginationText;
            if (paginate && _react.Children.count(children)) {
              return [_react2.default.createElement('li', {
                className: 'divider',
                key: 'pagination-item-divider',
                role: 'separator'
              }), _react2.default.createElement(_MenuItem.BaseMenuItem, {
                className: 'rbt-menu-paginator',
                key: 'pagination-item',
                onClick: onPaginate
              }, paginationText)];
            }
          }
        }]);
        return Menu;
      }(_react2.default.Component);
      Menu.propTypes = {
        align: _propTypes2.default.oneOf(['justify', 'left', 'right']),
        id: (0, _isRequiredForA11y2.default)(_propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])),
        maxHeight: (0, _propTypes3.checkPropType)(_propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]), maxHeightType),
        paginationText: _propTypes2.default.string
      };
      Menu.defaultProps = {
        align: 'justify',
        maxHeight: '300px',
        paginate: true,
        paginationText: 'Display additional results...'
      };
      exports.default = Menu;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _react = __webpack_require__(0);
      var _react2 = _interopRequireDefault(_react);
      var _propTypes = __webpack_require__(1);
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _reactDom = __webpack_require__(9);
      var _utils = __webpack_require__(6);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj) {
          if (keys.indexOf(i) >= 0)
            continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i))
            continue;
          target[i] = obj[i];
        }
        return target;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var menuItemContainer = function menuItemContainer(Component) {
        var WrappedMenuItem = function(_React$Component) {
          _inherits(WrappedMenuItem, _React$Component);
          function WrappedMenuItem() {
            var _ref;
            var _temp,
                _this,
                _ret;
            _classCallCheck(this, WrappedMenuItem);
            for (var _len = arguments.length,
                args = Array(_len),
                _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WrappedMenuItem.__proto__ || Object.getPrototypeOf(WrappedMenuItem)).call.apply(_ref, [this].concat(args))), _this), _this._handleClick = function(e) {
              var _this$props = _this.props,
                  option = _this$props.option,
                  onClick = _this$props.onClick;
              _this.context.onMenuItemClick(option);
              onClick && onClick(e);
            }, _this._updateInitialItem = function(props) {
              var option = props.option,
                  position = props.position;
              if (position === 0) {
                _this.context.onInitialItemChange(option);
              }
            }, _temp), _possibleConstructorReturn(_this, _ret);
          }
          _createClass(WrappedMenuItem, [{
            key: 'componentWillMount',
            value: function componentWillMount() {
              this._updateInitialItem(this.props);
            }
          }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps, nextContext) {
              var currentlyActive = this.context.activeIndex === this.props.position;
              var option = nextProps.option,
                  position = nextProps.position;
              var activeIndex = nextContext.activeIndex,
                  onActiveItemChange = nextContext.onActiveItemChange;
              if (position == null) {
                return;
              }
              if (activeIndex === position) {
                (0, _utils.scrollIntoViewIfNeeded)((0, _reactDom.findDOMNode)(this));
                !currentlyActive && onActiveItemChange(option);
              }
              this._updateInitialItem(nextProps);
            }
          }, {
            key: 'render',
            value: function render() {
              var _context = this.context,
                  activeIndex = _context.activeIndex,
                  isOnlyResult = _context.isOnlyResult;
              var _props = this.props,
                  label = _props.label,
                  option = _props.option,
                  position = _props.position,
                  props = _objectWithoutProperties(_props, ['label', 'option', 'position']);
              var active = isOnlyResult || activeIndex === position;
              return _react2.default.createElement(Component, _extends({}, props, {
                active: active,
                'aria-label': label,
                'aria-selected': active,
                id: (0, _utils.getMenuItemId)(position),
                onClick: this._handleClick,
                onMouseDown: _utils.preventInputBlur,
                role: 'option'
              }));
            }
          }]);
          return WrappedMenuItem;
        }(_react2.default.Component);
        WrappedMenuItem.displayName = 'menuItemContainer(' + (0, _utils.getDisplayName)(Component) + ')';
        WrappedMenuItem.propTypes = {
          option: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]).isRequired,
          position: _propTypes2.default.number
        };
        WrappedMenuItem.contextTypes = {
          activeIndex: _propTypes2.default.number.isRequired,
          isOnlyResult: _propTypes2.default.bool.isRequired,
          onActiveItemChange: _propTypes2.default.func.isRequired,
          onInitialItemChange: _propTypes2.default.func.isRequired,
          onMenuItemClick: _propTypes2.default.func.isRequired
        };
        return WrappedMenuItem;
      };
      exports.default = menuItemContainer;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.optionType = exports.labelKeyType = exports.inputPropsType = exports.ignoreDiacriticsType = exports.highlightOnlyResultType = exports.defaultInputValueType = exports.checkPropType = exports.caseSensitiveType = undefined;
      var _caseSensitiveType2 = __webpack_require__(218);
      var _caseSensitiveType3 = _interopRequireDefault(_caseSensitiveType2);
      var _checkPropType2 = __webpack_require__(219);
      var _checkPropType3 = _interopRequireDefault(_checkPropType2);
      var _defaultInputValueType2 = __webpack_require__(220);
      var _defaultInputValueType3 = _interopRequireDefault(_defaultInputValueType2);
      var _highlightOnlyResultType2 = __webpack_require__(221);
      var _highlightOnlyResultType3 = _interopRequireDefault(_highlightOnlyResultType2);
      var _ignoreDiacriticsType2 = __webpack_require__(222);
      var _ignoreDiacriticsType3 = _interopRequireDefault(_ignoreDiacriticsType2);
      var _inputPropsType2 = __webpack_require__(223);
      var _inputPropsType3 = _interopRequireDefault(_inputPropsType2);
      var _labelKeyType2 = __webpack_require__(224);
      var _labelKeyType3 = _interopRequireDefault(_labelKeyType2);
      var _optionType2 = __webpack_require__(225);
      var _optionType3 = _interopRequireDefault(_optionType2);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      exports.caseSensitiveType = _caseSensitiveType3.default;
      exports.checkPropType = _checkPropType3.default;
      exports.defaultInputValueType = _defaultInputValueType3.default;
      exports.highlightOnlyResultType = _highlightOnlyResultType3.default;
      exports.ignoreDiacriticsType = _ignoreDiacriticsType3.default;
      exports.inputPropsType = _inputPropsType3.default;
      exports.labelKeyType = _labelKeyType3.default;
      exports.optionType = _optionType3.default;
    }), (function(module, exports, __webpack_require__) {
      var isObject = __webpack_require__(7);
      var objectCreate = Object.create;
      var baseCreate = (function() {
        function object() {}
        return function(proto) {
          if (!isObject(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result = new object;
          object.prototype = undefined;
          return result;
        };
      }());
      module.exports = baseCreate;
    }), (function(module, exports, __webpack_require__) {
      var metaMap = __webpack_require__(229),
          noop = __webpack_require__(43);
      var getData = !metaMap ? noop : function(func) {
        return metaMap.get(func);
      };
      module.exports = getData;
    }), (function(module, exports, __webpack_require__) {
      var realNames = __webpack_require__(230);
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function getFuncName(func) {
        var result = (func.name + ''),
            array = realNames[result],
            length = hasOwnProperty.call(realNames, result) ? array.length : 0;
        while (length--) {
          var data = array[length],
              otherFunc = data.func;
          if (otherFunc == null || otherFunc == func) {
            return data.name;
          }
        }
        return result;
      }
      module.exports = getFuncName;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.tokenContainer = exports.menuItemContainer = exports.asyncContainer = exports.TypeaheadMenu = exports.Typeahead = exports.Token = exports.MenuItem = exports.Menu = exports.Highlighter = exports.AsyncTypeahead = undefined;
      var _AsyncTypeahead2 = __webpack_require__(87);
      var _AsyncTypeahead3 = _interopRequireDefault(_AsyncTypeahead2);
      var _Highlighter2 = __webpack_require__(79);
      var _Highlighter3 = _interopRequireDefault(_Highlighter2);
      var _Menu2 = __webpack_require__(80);
      var _Menu3 = _interopRequireDefault(_Menu2);
      var _MenuItem2 = __webpack_require__(42);
      var _MenuItem3 = _interopRequireDefault(_MenuItem2);
      var _Token2 = __webpack_require__(64);
      var _Token3 = _interopRequireDefault(_Token2);
      var _Typeahead2 = __webpack_require__(50);
      var _Typeahead3 = _interopRequireDefault(_Typeahead2);
      var _TypeaheadMenu2 = __webpack_require__(76);
      var _TypeaheadMenu3 = _interopRequireDefault(_TypeaheadMenu2);
      var _asyncContainer2 = __webpack_require__(47);
      var _asyncContainer3 = _interopRequireDefault(_asyncContainer2);
      var _menuItemContainer2 = __webpack_require__(81);
      var _menuItemContainer3 = _interopRequireDefault(_menuItemContainer2);
      var _tokenContainer2 = __webpack_require__(65);
      var _tokenContainer3 = _interopRequireDefault(_tokenContainer2);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      exports.AsyncTypeahead = _AsyncTypeahead3.default;
      exports.Highlighter = _Highlighter3.default;
      exports.Menu = _Menu3.default;
      exports.MenuItem = _MenuItem3.default;
      exports.Token = _Token3.default;
      exports.Typeahead = _Typeahead3.default;
      exports.TypeaheadMenu = _TypeaheadMenu3.default;
      exports.asyncContainer = _asyncContainer3.default;
      exports.menuItemContainer = _menuItemContainer3.default;
      exports.tokenContainer = _tokenContainer3.default;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var _asyncContainer = __webpack_require__(47);
      var _asyncContainer2 = _interopRequireDefault(_asyncContainer);
      var _Typeahead = __webpack_require__(50);
      var _Typeahead2 = _interopRequireDefault(_Typeahead);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      exports.default = (0, _asyncContainer2.default)(_Typeahead2.default);
    }), (function(module, exports, __webpack_require__) {
      var isObject = __webpack_require__(7),
          now = __webpack_require__(89),
          toNumber = __webpack_require__(91);
      var FUNC_ERROR_TEXT = 'Expected a function';
      var nativeMax = Math.max,
          nativeMin = Math.min;
      function debounce(func, wait, options) {
        var lastArgs,
            lastThis,
            maxWait,
            result,
            timerId,
            lastCallTime,
            lastInvokeTime = 0,
            leading = false,
            maxing = false,
            trailing = true;
        if (typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = 'maxWait' in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = 'trailing' in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs,
              thisArg = lastThis;
          lastArgs = lastThis = undefined;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime,
              timeSinceLastInvoke = time - lastInvokeTime,
              timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime,
              timeSinceLastInvoke = time - lastInvokeTime;
          return (lastCallTime === undefined || (timeSinceLastCall >= wait) || (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = undefined;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = undefined;
          return result;
        }
        function cancel() {
          if (timerId !== undefined) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = undefined;
        }
        function flush() {
          return timerId === undefined ? result : trailingEdge(now());
        }
        function debounced() {
          var time = now(),
              isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === undefined) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      module.exports = debounce;
    }), (function(module, exports, __webpack_require__) {
      var root = __webpack_require__(3);
      var now = function() {
        return root.Date.now();
      };
      module.exports = now;
    }), (function(module, exports) {
      var g;
      g = (function() {
        return this;
      })();
      try {
        g = g || Function("return this")() || (1, eval)("this");
      } catch (e) {
        if (typeof window === "object")
          g = window;
      }
      module.exports = g;
    }), (function(module, exports, __webpack_require__) {
      var isObject = __webpack_require__(7),
          isSymbol = __webpack_require__(16);
      var NAN = 0 / 0;
      var reTrim = /^\s+|\s+$/g;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      function toNumber(value) {
        if (typeof value == 'number') {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
          value = isObject(other) ? (other + '') : other;
        }
        if (typeof value != 'string') {
          return value === 0 ? value : +value;
        }
        value = value.replace(reTrim, '');
        var isBinary = reIsBinary.test(value);
        return (isBinary || reIsOctal.test(value)) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : (reIsBadHex.test(value) ? NAN : +value);
      }
      module.exports = toNumber;
    }), (function(module, exports, __webpack_require__) {
      var Symbol = __webpack_require__(13);
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag),
            tag = value[symToStringTag];
        try {
          value[symToStringTag] = undefined;
          var unmasked = true;
        } catch (e) {}
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      module.exports = getRawTag;
    }), (function(module, exports) {
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      module.exports = objectToString;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      (function(process) {
        var emptyFunction = __webpack_require__(26);
        var invariant = __webpack_require__(27);
        var warning = __webpack_require__(49);
        var assign = __webpack_require__(95);
        var ReactPropTypesSecret = __webpack_require__(28);
        var checkPropTypes = __webpack_require__(96);
        module.exports = function(isValidElement, throwOnDirectAccess) {
          var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = '@@iterator';
          function getIteratorFn(maybeIterable) {
            var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
            if (typeof iteratorFn === 'function') {
              return iteratorFn;
            }
          }
          var ANONYMOUS = '<<anonymous>>';
          var ReactPropTypes = {
            array: createPrimitiveTypeChecker('array'),
            bool: createPrimitiveTypeChecker('boolean'),
            func: createPrimitiveTypeChecker('function'),
            number: createPrimitiveTypeChecker('number'),
            object: createPrimitiveTypeChecker('object'),
            string: createPrimitiveTypeChecker('string'),
            symbol: createPrimitiveTypeChecker('symbol'),
            any: createAnyTypeChecker(),
            arrayOf: createArrayOfTypeChecker,
            element: createElementTypeChecker(),
            instanceOf: createInstanceTypeChecker,
            node: createNodeChecker(),
            objectOf: createObjectOfTypeChecker,
            oneOf: createEnumTypeChecker,
            oneOfType: createUnionTypeChecker,
            shape: createShapeTypeChecker,
            exact: createStrictShapeTypeChecker
          };
          function is(x, y) {
            if (x === y) {
              return x !== 0 || 1 / x === 1 / y;
            } else {
              return x !== x && y !== y;
            }
          }
          function PropTypeError(message) {
            this.message = message;
            this.stack = '';
          }
          PropTypeError.prototype = Error.prototype;
          function createChainableTypeChecker(validate) {
            if (process.env.NODE_ENV !== 'production') {
              var manualPropTypeCallCache = {};
              var manualPropTypeWarningCount = 0;
            }
            function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
              componentName = componentName || ANONYMOUS;
              propFullName = propFullName || propName;
              if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                  invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
                  var cacheKey = componentName + ':' + propName;
                  if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                    warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
                    manualPropTypeCallCache[cacheKey] = true;
                    manualPropTypeWarningCount++;
                  }
                }
              }
              if (props[propName] == null) {
                if (isRequired) {
                  if (props[propName] === null) {
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                  }
                  return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
              } else {
                return validate(props, propName, componentName, location, propFullName);
              }
            }
            var chainedCheckType = checkType.bind(null, false);
            chainedCheckType.isRequired = checkType.bind(null, true);
            return chainedCheckType;
          }
          function createPrimitiveTypeChecker(expectedType) {
            function validate(props, propName, componentName, location, propFullName, secret) {
              var propValue = props[propName];
              var propType = getPropType(propValue);
              if (propType !== expectedType) {
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }
          function createAnyTypeChecker() {
            return createChainableTypeChecker(emptyFunction.thatReturnsNull);
          }
          function createArrayOfTypeChecker(typeChecker) {
            function validate(props, propName, componentName, location, propFullName) {
              if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
              }
              var propValue = props[propName];
              if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
              }
              for (var i = 0; i < propValue.length; i++) {
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (error instanceof Error) {
                  return error;
                }
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }
          function createElementTypeChecker() {
            function validate(props, propName, componentName, location, propFullName) {
              var propValue = props[propName];
              if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }
          function createInstanceTypeChecker(expectedClass) {
            function validate(props, propName, componentName, location, propFullName) {
              if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }
          function createEnumTypeChecker(expectedValues) {
            if (!Array.isArray(expectedValues)) {
              process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
              return emptyFunction.thatReturnsNull;
            }
            function validate(props, propName, componentName, location, propFullName) {
              var propValue = props[propName];
              for (var i = 0; i < expectedValues.length; i++) {
                if (is(propValue, expectedValues[i])) {
                  return null;
                }
              }
              var valuesString = JSON.stringify(expectedValues);
              return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
            }
            return createChainableTypeChecker(validate);
          }
          function createObjectOfTypeChecker(typeChecker) {
            function validate(props, propName, componentName, location, propFullName) {
              if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
              }
              var propValue = props[propName];
              var propType = getPropType(propValue);
              if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
              }
              for (var key in propValue) {
                if (propValue.hasOwnProperty(key)) {
                  var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                  if (error instanceof Error) {
                    return error;
                  }
                }
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }
          function createUnionTypeChecker(arrayOfTypeCheckers) {
            if (!Array.isArray(arrayOfTypeCheckers)) {
              process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
              return emptyFunction.thatReturnsNull;
            }
            for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
              var checker = arrayOfTypeCheckers[i];
              if (typeof checker !== 'function') {
                warning(false, 'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received %s at index %s.', getPostfixForTypeWarning(checker), i);
                return emptyFunction.thatReturnsNull;
              }
            }
            function validate(props, propName, componentName, location, propFullName) {
              for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                var checker = arrayOfTypeCheckers[i];
                if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
                  return null;
                }
              }
              return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
            }
            return createChainableTypeChecker(validate);
          }
          function createNodeChecker() {
            function validate(props, propName, componentName, location, propFullName) {
              if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }
          function createShapeTypeChecker(shapeTypes) {
            function validate(props, propName, componentName, location, propFullName) {
              var propValue = props[propName];
              var propType = getPropType(propValue);
              if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
              }
              for (var key in shapeTypes) {
                var checker = shapeTypes[key];
                if (!checker) {
                  continue;
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                  return error;
                }
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }
          function createStrictShapeTypeChecker(shapeTypes) {
            function validate(props, propName, componentName, location, propFullName) {
              var propValue = props[propName];
              var propType = getPropType(propValue);
              if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
              }
              var allKeys = assign({}, props[propName], shapeTypes);
              for (var key in allKeys) {
                var checker = shapeTypes[key];
                if (!checker) {
                  return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                  return error;
                }
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }
          function isNode(propValue) {
            switch (typeof propValue) {
              case 'number':
              case 'string':
              case 'undefined':
                return true;
              case 'boolean':
                return !propValue;
              case 'object':
                if (Array.isArray(propValue)) {
                  return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                  return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                  var iterator = iteratorFn.call(propValue);
                  var step;
                  if (iteratorFn !== propValue.entries) {
                    while (!(step = iterator.next()).done) {
                      if (!isNode(step.value)) {
                        return false;
                      }
                    }
                  } else {
                    while (!(step = iterator.next()).done) {
                      var entry = step.value;
                      if (entry) {
                        if (!isNode(entry[1])) {
                          return false;
                        }
                      }
                    }
                  }
                } else {
                  return false;
                }
                return true;
              default:
                return false;
            }
          }
          function isSymbol(propType, propValue) {
            if (propType === 'symbol') {
              return true;
            }
            if (propValue['@@toStringTag'] === 'Symbol') {
              return true;
            }
            if (typeof Symbol === 'function' && propValue instanceof Symbol) {
              return true;
            }
            return false;
          }
          function getPropType(propValue) {
            var propType = typeof propValue;
            if (Array.isArray(propValue)) {
              return 'array';
            }
            if (propValue instanceof RegExp) {
              return 'object';
            }
            if (isSymbol(propType, propValue)) {
              return 'symbol';
            }
            return propType;
          }
          function getPreciseType(propValue) {
            if (typeof propValue === 'undefined' || propValue === null) {
              return '' + propValue;
            }
            var propType = getPropType(propValue);
            if (propType === 'object') {
              if (propValue instanceof Date) {
                return 'date';
              } else if (propValue instanceof RegExp) {
                return 'regexp';
              }
            }
            return propType;
          }
          function getPostfixForTypeWarning(value) {
            var type = getPreciseType(value);
            switch (type) {
              case 'array':
              case 'object':
                return 'an ' + type;
              case 'boolean':
              case 'date':
              case 'regexp':
                return 'a ' + type;
              default:
                return type;
            }
          }
          function getClassName(propValue) {
            if (!propValue.constructor || !propValue.constructor.name) {
              return ANONYMOUS;
            }
            return propValue.constructor.name;
          }
          ReactPropTypes.checkPropTypes = checkPropTypes;
          ReactPropTypes.PropTypes = ReactPropTypes;
          return ReactPropTypes;
        };
      }.call(exports, __webpack_require__(4)));
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function toObject(val) {
        if (val === null || val === undefined) {
          throw new TypeError('Object.assign cannot be called with null or undefined');
        }
        return Object(val);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }
          var test1 = new String('abc');
          test1[5] = 'de';
          if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
          }
          var test2 = {};
          for (var i = 0; i < 10; i++) {
            test2['_' + String.fromCharCode(i)] = i;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
          });
          if (order2.join('') !== '0123456789') {
            return false;
          }
          var test3 = {};
          'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
            return false;
          }
          return true;
        } catch (err) {
          return false;
        }
      }
      module.exports = shouldUseNative() ? Object.assign : function(target, source) {
        var from;
        var to = toObject(target);
        var symbols;
        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);
          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }
        return to;
      };
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      (function(process) {
        if (process.env.NODE_ENV !== 'production') {
          var invariant = __webpack_require__(27);
          var warning = __webpack_require__(49);
          var ReactPropTypesSecret = __webpack_require__(28);
          var loggedTypeFailures = {};
        }
        function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
          if (process.env.NODE_ENV !== 'production') {
            for (var typeSpecName in typeSpecs) {
              if (typeSpecs.hasOwnProperty(typeSpecName)) {
                var error;
                try {
                  invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
                  error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                  error = ex;
                }
                warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
                if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                  loggedTypeFailures[error.message] = true;
                  var stack = getStack ? getStack() : '';
                  warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
                }
              }
            }
          }
        }
        module.exports = checkPropTypes;
      }.call(exports, __webpack_require__(4)));
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      var emptyFunction = __webpack_require__(26);
      var invariant = __webpack_require__(27);
      var ReactPropTypesSecret = __webpack_require__(28);
      module.exports = function() {
        function shim(props, propName, componentName, location, propFullName, secret) {
          if (secret === ReactPropTypesSecret) {
            return;
          }
          invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
        }
        ;
        shim.isRequired = shim;
        function getShim() {
          return shim;
        }
        ;
        var ReactPropTypes = {
          array: shim,
          bool: shim,
          func: shim,
          number: shim,
          object: shim,
          string: shim,
          symbol: shim,
          any: shim,
          arrayOf: getShim,
          element: shim,
          instanceOf: getShim,
          node: shim,
          objectOf: getShim,
          oneOf: getShim,
          oneOfType: getShim,
          shape: getShim,
          exact: getShim
        };
        ReactPropTypes.checkPropTypes = emptyFunction;
        ReactPropTypes.PropTypes = ReactPropTypes;
        return ReactPropTypes;
      };
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _classnames = __webpack_require__(5);
      var _classnames2 = _interopRequireDefault(_classnames);
      var _isEqual = __webpack_require__(29);
      var _isEqual2 = _interopRequireDefault(_isEqual);
      var _react = __webpack_require__(0);
      var _react2 = _interopRequireDefault(_react);
      var _propTypes = __webpack_require__(1);
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _reactDom = __webpack_require__(9);
      var _Portal = __webpack_require__(154);
      var _Portal2 = _interopRequireDefault(_Portal);
      var _componentOrElement = __webpack_require__(38);
      var _componentOrElement2 = _interopRequireDefault(_componentOrElement);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0,
              arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        } else {
          return Array.from(arr);
        }
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var BODY_CLASS = 'rbt-body-container';
      var DROPUP_SPACING = -4;
      var IGNORE_CLICK_OUTSIDE = 'ignore-react-onclickoutside';
      function isBody(container) {
        return container === document.body;
      }
      var Overlay = function(_React$Component) {
        _inherits(Overlay, _React$Component);
        function Overlay() {
          var _ref;
          var _temp,
              _this,
              _ret;
          _classCallCheck(this, Overlay);
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call.apply(_ref, [this].concat(args))), _this), _this.displayName = 'Overlay', _this.state = {
            left: 0,
            right: 0,
            top: 0
          }, _this._update = function() {
            var _container$classList;
            var _this$props = _this.props,
                className = _this$props.className,
                container = _this$props.container,
                show = _this$props.show;
            if (!(show && isBody(container) && _this._mounted)) {
              return;
            }
            container.classList.add(BODY_CLASS);
            !!className && (_container$classList = container.classList).add.apply(_container$classList, _toConsumableArray(className.split(' ')));
            _this._updatePosition();
          }, _this._updatePosition = function() {
            var _this$props2 = _this.props,
                align = _this$props2.align,
                dropup = _this$props2.dropup,
                target = _this$props2.target;
            var menuNode = (0, _reactDom.findDOMNode)(_this._menu);
            var targetNode = (0, _reactDom.findDOMNode)(target);
            if (menuNode && targetNode) {
              var _window = window,
                  innerWidth = _window.innerWidth,
                  pageYOffset = _window.pageYOffset;
              var _targetNode$getBoundi = targetNode.getBoundingClientRect(),
                  bottom = _targetNode$getBoundi.bottom,
                  left = _targetNode$getBoundi.left,
                  top = _targetNode$getBoundi.top,
                  width = _targetNode$getBoundi.width;
              var newState = {
                left: align === 'right' ? 'auto' : left,
                right: align === 'left' ? 'auto' : innerWidth - left - width,
                top: dropup ? pageYOffset - menuNode.offsetHeight + top + DROPUP_SPACING : pageYOffset + bottom
              };
              if (!(0, _isEqual2.default)(_this.state, newState)) {
                _this.setState(newState);
              }
            }
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }
        _createClass(Overlay, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
            this._mounted = true;
            this._update();
            this._updateThrottled = requestAnimationFrame.bind(null, this._update);
            window.addEventListener('resize', this._updateThrottled);
            window.addEventListener('scroll', this._updateThrottled, true);
          }
        }, {
          key: 'componentWillReceiveProps',
          value: function componentWillReceiveProps(nextProps) {
            var onMenuHide = nextProps.onMenuHide,
                onMenuShow = nextProps.onMenuShow,
                show = nextProps.show;
            if (this.props.show && !show) {
              onMenuHide();
            }
            if (!this.props.show && show) {
              onMenuShow();
            }
            var _props = this.props,
                className = _props.className,
                container = _props.container;
            if (isBody(container) && !isBody(nextProps.container)) {
              var _container$classList2;
              container.classList.remove(BODY_CLASS);
              !!className && (_container$classList2 = container.classList).remove.apply(_container$classList2, _toConsumableArray(className.split(' ')));
            }
            this._updateThrottled();
          }
        }, {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            this._mounted = false;
            window.removeEventListener('resize', this._updateThrottled);
            window.removeEventListener('scroll', this._updateThrottled);
          }
        }, {
          key: 'render',
          value: function render() {
            var _this2 = this;
            var _props2 = this.props,
                children = _props2.children,
                container = _props2.container,
                show = _props2.show;
            if (!(show && _react.Children.count(children))) {
              return null;
            }
            var child = _react.Children.only(children);
            if (!isBody(container)) {
              return child;
            }
            child = (0, _react.cloneElement)(child, _extends({}, child.props, {
              className: (0, _classnames2.default)(child.props.className, IGNORE_CLICK_OUTSIDE),
              ref: function ref(menu) {
                return _this2._menu = menu;
              },
              style: this.state
            }));
            return _react2.default.createElement(_Portal2.default, {
              container: container,
              ref: function ref(portal) {
                return _this2._portal = portal;
              }
            }, child);
          }
        }]);
        return Overlay;
      }(_react2.default.Component);
      Overlay.propTypes = {
        children: _propTypes2.default.element,
        container: _componentOrElement2.default.isRequired,
        onMenuHide: _propTypes2.default.func.isRequired,
        onMenuShow: _propTypes2.default.func.isRequired,
        show: _propTypes2.default.bool,
        target: _componentOrElement2.default.isRequired
      };
      Overlay.defaultProps = {show: false};
      exports.default = Overlay;
    }), (function(module, exports, __webpack_require__) {
      var Stack = __webpack_require__(51),
          equalArrays = __webpack_require__(53),
          equalByTag = __webpack_require__(130),
          equalObjects = __webpack_require__(134),
          getTag = __webpack_require__(150),
          isArray = __webpack_require__(2),
          isBuffer = __webpack_require__(56),
          isTypedArray = __webpack_require__(58);
      var COMPARE_PARTIAL_FLAG = 1;
      var argsTag = '[object Arguments]',
          arrayTag = '[object Array]',
          objectTag = '[object Object]';
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray(object),
            othIsArr = isArray(other),
            objTag = objIsArr ? arrayTag : getTag(object),
            othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag,
            othIsObj = othTag == objectTag,
            isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack);
          return (objIsArr || isTypedArray(object)) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
              othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object,
                othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack);
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack);
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      module.exports = baseIsEqualDeep;
    }), (function(module, exports) {
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      module.exports = listCacheClear;
    }), (function(module, exports, __webpack_require__) {
      var assocIndexOf = __webpack_require__(18);
      var arrayProto = Array.prototype;
      var splice = arrayProto.splice;
      function listCacheDelete(key) {
        var data = this.__data__,
            index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      module.exports = listCacheDelete;
    }), (function(module, exports, __webpack_require__) {
      var assocIndexOf = __webpack_require__(18);
      function listCacheGet(key) {
        var data = this.__data__,
            index = assocIndexOf(data, key);
        return index < 0 ? undefined : data[index][1];
      }
      module.exports = listCacheGet;
    }), (function(module, exports, __webpack_require__) {
      var assocIndexOf = __webpack_require__(18);
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      module.exports = listCacheHas;
    }), (function(module, exports, __webpack_require__) {
      var assocIndexOf = __webpack_require__(18);
      function listCacheSet(key, value) {
        var data = this.__data__,
            index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      module.exports = listCacheSet;
    }), (function(module, exports, __webpack_require__) {
      var ListCache = __webpack_require__(17);
      function stackClear() {
        this.__data__ = new ListCache;
        this.size = 0;
      }
      module.exports = stackClear;
    }), (function(module, exports) {
      function stackDelete(key) {
        var data = this.__data__,
            result = data['delete'](key);
        this.size = data.size;
        return result;
      }
      module.exports = stackDelete;
    }), (function(module, exports) {
      function stackGet(key) {
        return this.__data__.get(key);
      }
      module.exports = stackGet;
    }), (function(module, exports) {
      function stackHas(key) {
        return this.__data__.has(key);
      }
      module.exports = stackHas;
    }), (function(module, exports, __webpack_require__) {
      var ListCache = __webpack_require__(17),
          Map = __webpack_require__(31),
          MapCache = __webpack_require__(33);
      var LARGE_ARRAY_SIZE = 200;
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      module.exports = stackSet;
    }), (function(module, exports, __webpack_require__) {
      var isFunction = __webpack_require__(32),
          isMasked = __webpack_require__(111),
          isObject = __webpack_require__(7),
          toSource = __webpack_require__(52);
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var funcProto = Function.prototype,
          objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      module.exports = baseIsNative;
    }), (function(module, exports, __webpack_require__) {
      var coreJsData = __webpack_require__(112);
      var maskSrcKey = (function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
        return uid ? ('Symbol(src)_1.' + uid) : '';
      }());
      function isMasked(func) {
        return !!maskSrcKey && (maskSrcKey in func);
      }
      module.exports = isMasked;
    }), (function(module, exports, __webpack_require__) {
      var root = __webpack_require__(3);
      var coreJsData = root['__core-js_shared__'];
      module.exports = coreJsData;
    }), (function(module, exports) {
      function getValue(object, key) {
        return object == null ? undefined : object[key];
      }
      module.exports = getValue;
    }), (function(module, exports, __webpack_require__) {
      var Hash = __webpack_require__(115),
          ListCache = __webpack_require__(17),
          Map = __webpack_require__(31);
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          'hash': new Hash,
          'map': new (Map || ListCache),
          'string': new Hash
        };
      }
      module.exports = mapCacheClear;
    }), (function(module, exports, __webpack_require__) {
      var hashClear = __webpack_require__(116),
          hashDelete = __webpack_require__(117),
          hashGet = __webpack_require__(118),
          hashHas = __webpack_require__(119),
          hashSet = __webpack_require__(120);
      function Hash(entries) {
        var index = -1,
            length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype['delete'] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      module.exports = Hash;
    }), (function(module, exports, __webpack_require__) {
      var nativeCreate = __webpack_require__(20);
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      module.exports = hashClear;
    }), (function(module, exports) {
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = hashDelete;
    }), (function(module, exports, __webpack_require__) {
      var nativeCreate = __webpack_require__(20);
      var HASH_UNDEFINED = '__lodash_hash_undefined__';
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? undefined : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : undefined;
      }
      module.exports = hashGet;
    }), (function(module, exports, __webpack_require__) {
      var nativeCreate = __webpack_require__(20);
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
      }
      module.exports = hashHas;
    }), (function(module, exports, __webpack_require__) {
      var nativeCreate = __webpack_require__(20);
      var HASH_UNDEFINED = '__lodash_hash_undefined__';
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
        return this;
      }
      module.exports = hashSet;
    }), (function(module, exports, __webpack_require__) {
      var getMapData = __webpack_require__(21);
      function mapCacheDelete(key) {
        var result = getMapData(this, key)['delete'](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = mapCacheDelete;
    }), (function(module, exports) {
      function isKeyable(value) {
        var type = typeof value;
        return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean') ? (value !== '__proto__') : (value === null);
      }
      module.exports = isKeyable;
    }), (function(module, exports, __webpack_require__) {
      var getMapData = __webpack_require__(21);
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      module.exports = mapCacheGet;
    }), (function(module, exports, __webpack_require__) {
      var getMapData = __webpack_require__(21);
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      module.exports = mapCacheHas;
    }), (function(module, exports, __webpack_require__) {
      var getMapData = __webpack_require__(21);
      function mapCacheSet(key, value) {
        var data = getMapData(this, key),
            size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
      module.exports = mapCacheSet;
    }), (function(module, exports, __webpack_require__) {
      var MapCache = __webpack_require__(33),
          setCacheAdd = __webpack_require__(127),
          setCacheHas = __webpack_require__(128);
      function SetCache(values) {
        var index = -1,
            length = values == null ? 0 : values.length;
        this.__data__ = new MapCache;
        while (++index < length) {
          this.add(values[index]);
        }
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      module.exports = SetCache;
    }), (function(module, exports) {
      var HASH_UNDEFINED = '__lodash_hash_undefined__';
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      module.exports = setCacheAdd;
    }), (function(module, exports) {
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      module.exports = setCacheHas;
    }), (function(module, exports) {
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      module.exports = cacheHas;
    }), (function(module, exports, __webpack_require__) {
      var Symbol = __webpack_require__(13),
          Uint8Array = __webpack_require__(131),
          eq = __webpack_require__(19),
          equalArrays = __webpack_require__(53),
          mapToArray = __webpack_require__(132),
          setToArray = __webpack_require__(133);
      var COMPARE_PARTIAL_FLAG = 1,
          COMPARE_UNORDERED_FLAG = 2;
      var boolTag = '[object Boolean]',
          dateTag = '[object Date]',
          errorTag = '[object Error]',
          mapTag = '[object Map]',
          numberTag = '[object Number]',
          regexpTag = '[object RegExp]',
          setTag = '[object Set]',
          stringTag = '[object String]',
          symbolTag = '[object Symbol]';
      var arrayBufferTag = '[object ArrayBuffer]',
          dataViewTag = '[object DataView]';
      var symbolProto = Symbol ? Symbol.prototype : undefined,
          symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if ((object.byteLength != other.byteLength) || (object.byteOffset != other.byteOffset)) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if ((object.byteLength != other.byteLength) || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == (other + '');
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack['delete'](object);
            return result;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      module.exports = equalByTag;
    }), (function(module, exports, __webpack_require__) {
      var root = __webpack_require__(3);
      var Uint8Array = root.Uint8Array;
      module.exports = Uint8Array;
    }), (function(module, exports) {
      function mapToArray(map) {
        var index = -1,
            result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      module.exports = mapToArray;
    }), (function(module, exports) {
      function setToArray(set) {
        var index = -1,
            result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      module.exports = setToArray;
    }), (function(module, exports, __webpack_require__) {
      var getAllKeys = __webpack_require__(135);
      var COMPARE_PARTIAL_FLAG = 1;
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
            objProps = getAllKeys(object),
            objLength = objProps.length,
            othProps = getAllKeys(other),
            othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
          }
        }
        var stacked = stack.get(object);
        if (stacked && stack.get(other)) {
          return stacked == other;
        }
        var result = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key],
              othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === undefined ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack)) : compared)) {
            result = false;
            break;
          }
          skipCtor || (skipCtor = key == 'constructor');
        }
        if (result && !skipCtor) {
          var objCtor = object.constructor,
              othCtor = other.constructor;
          if (objCtor != othCtor && ('constructor' in object && 'constructor' in other) && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
            result = false;
          }
        }
        stack['delete'](object);
        stack['delete'](other);
        return result;
      }
      module.exports = equalObjects;
    }), (function(module, exports, __webpack_require__) {
      var baseGetAllKeys = __webpack_require__(136),
          getSymbols = __webpack_require__(137),
          keys = __webpack_require__(34);
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      module.exports = getAllKeys;
    }), (function(module, exports, __webpack_require__) {
      var arrayPush = __webpack_require__(55),
          isArray = __webpack_require__(2);
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
      }
      module.exports = baseGetAllKeys;
    }), (function(module, exports, __webpack_require__) {
      var arrayFilter = __webpack_require__(138),
          stubArray = __webpack_require__(139);
      var objectProto = Object.prototype;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      module.exports = getSymbols;
    }), (function(module, exports) {
      function arrayFilter(array, predicate) {
        var index = -1,
            length = array == null ? 0 : array.length,
            resIndex = 0,
            result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      module.exports = arrayFilter;
    }), (function(module, exports) {
      function stubArray() {
        return [];
      }
      module.exports = stubArray;
    }), (function(module, exports, __webpack_require__) {
      var baseTimes = __webpack_require__(141),
          isArguments = __webpack_require__(35),
          isArray = __webpack_require__(2),
          isBuffer = __webpack_require__(56),
          isIndex = __webpack_require__(22),
          isTypedArray = __webpack_require__(58);
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value),
            isArg = !isArr && isArguments(value),
            isBuff = !isArr && !isArg && isBuffer(value),
            isType = !isArr && !isArg && !isBuff && isTypedArray(value),
            skipIndexes = isArr || isArg || isBuff || isType,
            result = skipIndexes ? baseTimes(value.length, String) : [],
            length = result.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || (isBuff && (key == 'offset' || key == 'parent')) || (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) || isIndex(key, length)))) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = arrayLikeKeys;
    }), (function(module, exports) {
      function baseTimes(n, iteratee) {
        var index = -1,
            result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      module.exports = baseTimes;
    }), (function(module, exports, __webpack_require__) {
      var baseGetTag = __webpack_require__(11),
          isObjectLike = __webpack_require__(8);
      var argsTag = '[object Arguments]';
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      module.exports = baseIsArguments;
    }), (function(module, exports) {
      function stubFalse() {
        return false;
      }
      module.exports = stubFalse;
    }), (function(module, exports, __webpack_require__) {
      var baseGetTag = __webpack_require__(11),
          isLength = __webpack_require__(36),
          isObjectLike = __webpack_require__(8);
      var argsTag = '[object Arguments]',
          arrayTag = '[object Array]',
          boolTag = '[object Boolean]',
          dateTag = '[object Date]',
          errorTag = '[object Error]',
          funcTag = '[object Function]',
          mapTag = '[object Map]',
          numberTag = '[object Number]',
          objectTag = '[object Object]',
          regexpTag = '[object RegExp]',
          setTag = '[object Set]',
          stringTag = '[object String]',
          weakMapTag = '[object WeakMap]';
      var arrayBufferTag = '[object ArrayBuffer]',
          dataViewTag = '[object DataView]',
          float32Tag = '[object Float32Array]',
          float64Tag = '[object Float64Array]',
          int8Tag = '[object Int8Array]',
          int16Tag = '[object Int16Array]',
          int32Tag = '[object Int32Array]',
          uint8Tag = '[object Uint8Array]',
          uint8ClampedTag = '[object Uint8ClampedArray]',
          uint16Tag = '[object Uint16Array]',
          uint32Tag = '[object Uint32Array]';
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      module.exports = baseIsTypedArray;
    }), (function(module, exports) {
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      module.exports = baseUnary;
    }), (function(module, exports, __webpack_require__) {
      (function(module) {
        var freeGlobal = __webpack_require__(48);
        var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
        var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
        var moduleExports = freeModule && freeModule.exports === freeExports;
        var freeProcess = moduleExports && freeGlobal.process;
        var nodeUtil = (function() {
          try {
            return freeProcess && freeProcess.binding && freeProcess.binding('util');
          } catch (e) {}
        }());
        module.exports = nodeUtil;
      }.call(exports, __webpack_require__(57)(module)));
    }), (function(module, exports, __webpack_require__) {
      var isPrototype = __webpack_require__(148),
          nativeKeys = __webpack_require__(149);
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
          if (hasOwnProperty.call(object, key) && key != 'constructor') {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeys;
    }), (function(module, exports) {
      var objectProto = Object.prototype;
      function isPrototype(value) {
        var Ctor = value && value.constructor,
            proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
        return value === proto;
      }
      module.exports = isPrototype;
    }), (function(module, exports, __webpack_require__) {
      var overArg = __webpack_require__(59);
      var nativeKeys = overArg(Object.keys, Object);
      module.exports = nativeKeys;
    }), (function(module, exports, __webpack_require__) {
      var DataView = __webpack_require__(151),
          Map = __webpack_require__(31),
          Promise = __webpack_require__(152),
          Set = __webpack_require__(153),
          WeakMap = __webpack_require__(60),
          baseGetTag = __webpack_require__(11),
          toSource = __webpack_require__(52);
      var mapTag = '[object Map]',
          objectTag = '[object Object]',
          promiseTag = '[object Promise]',
          setTag = '[object Set]',
          weakMapTag = '[object WeakMap]';
      var dataViewTag = '[object DataView]';
      var dataViewCtorString = toSource(DataView),
          mapCtorString = toSource(Map),
          promiseCtorString = toSource(Promise),
          setCtorString = toSource(Set),
          weakMapCtorString = toSource(WeakMap);
      var getTag = baseGetTag;
      if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) || (Map && getTag(new Map) != mapTag) || (Promise && getTag(Promise.resolve()) != promiseTag) || (Set && getTag(new Set) != setTag) || (WeakMap && getTag(new WeakMap) != weakMapTag)) {
        getTag = function(value) {
          var result = baseGetTag(value),
              Ctor = result == objectTag ? value.constructor : undefined,
              ctorString = Ctor ? toSource(Ctor) : '';
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result;
        };
      }
      module.exports = getTag;
    }), (function(module, exports, __webpack_require__) {
      var getNative = __webpack_require__(12),
          root = __webpack_require__(3);
      var DataView = getNative(root, 'DataView');
      module.exports = DataView;
    }), (function(module, exports, __webpack_require__) {
      var getNative = __webpack_require__(12),
          root = __webpack_require__(3);
      var Promise = getNative(root, 'Promise');
      module.exports = Promise;
    }), (function(module, exports, __webpack_require__) {
      var getNative = __webpack_require__(12),
          root = __webpack_require__(3);
      var Set = getNative(root, 'Set');
      module.exports = Set;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      exports.__esModule = true;
      var _propTypes = __webpack_require__(1);
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _componentOrElement = __webpack_require__(38);
      var _componentOrElement2 = _interopRequireDefault(_componentOrElement);
      var _react = __webpack_require__(0);
      var _react2 = _interopRequireDefault(_react);
      var _reactDom = __webpack_require__(9);
      var _reactDom2 = _interopRequireDefault(_reactDom);
      var _getContainer = __webpack_require__(61);
      var _getContainer2 = _interopRequireDefault(_getContainer);
      var _ownerDocument = __webpack_require__(62);
      var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
      var _LegacyPortal = __webpack_require__(157);
      var _LegacyPortal2 = _interopRequireDefault(_LegacyPortal);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var Portal = function(_React$Component) {
        _inherits(Portal, _React$Component);
        function Portal() {
          var _temp,
              _this,
              _ret;
          _classCallCheck(this, Portal);
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.setContainer = function() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props;
            _this._portalContainerNode = (0, _getContainer2.default)(props.container, (0, _ownerDocument2.default)(_this).body);
          }, _this.getMountNode = function() {
            return _this._portalContainerNode;
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }
        Portal.prototype.componentDidMount = function componentDidMount() {
          this.setContainer();
          this.forceUpdate(this.props.onRendered);
        };
        Portal.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
          if (nextProps.container !== this.props.container) {
            this.setContainer(nextProps);
          }
        };
        Portal.prototype.componentWillUnmount = function componentWillUnmount() {
          this._portalContainerNode = null;
        };
        Portal.prototype.render = function render() {
          return this.props.children && this._portalContainerNode ? _reactDom2.default.createPortal(this.props.children, this._portalContainerNode) : null;
        };
        return Portal;
      }(_react2.default.Component);
      Portal.displayName = 'Portal';
      Portal.propTypes = {
        container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),
        onRendered: _propTypes2.default.func
      };
      exports.default = _reactDom2.default.createPortal ? Portal : _LegacyPortal2.default;
      module.exports = exports['default'];
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.default = createChainableTypeChecker;
      function createChainableTypeChecker(validate) {
        function checkType(isRequired, props, propName, componentName, location, propFullName) {
          var componentNameSafe = componentName || '<<anonymous>>';
          var propFullNameSafe = propFullName || propName;
          if (props[propName] == null) {
            if (isRequired) {
              return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
            }
            return null;
          }
          for (var _len = arguments.length,
              args = Array(_len > 6 ? _len - 6 : 0),
              _key = 6; _key < _len; _key++) {
            args[_key - 6] = arguments[_key];
          }
          return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      module.exports = exports['default'];
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.default = ownerDocument;
      function ownerDocument(node) {
        return node && node.ownerDocument || document;
      }
      module.exports = exports["default"];
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      exports.__esModule = true;
      var _propTypes = __webpack_require__(1);
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _componentOrElement = __webpack_require__(38);
      var _componentOrElement2 = _interopRequireDefault(_componentOrElement);
      var _react = __webpack_require__(0);
      var _react2 = _interopRequireDefault(_react);
      var _reactDom = __webpack_require__(9);
      var _reactDom2 = _interopRequireDefault(_reactDom);
      var _getContainer = __webpack_require__(61);
      var _getContainer2 = _interopRequireDefault(_getContainer);
      var _ownerDocument = __webpack_require__(62);
      var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var Portal = function(_React$Component) {
        _inherits(Portal, _React$Component);
        function Portal() {
          var _temp,
              _this,
              _ret;
          _classCallCheck(this, Portal);
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._mountOverlayTarget = function() {
            if (!_this._overlayTarget) {
              _this._overlayTarget = document.createElement('div');
              _this._portalContainerNode = (0, _getContainer2.default)(_this.props.container, (0, _ownerDocument2.default)(_this).body);
              _this._portalContainerNode.appendChild(_this._overlayTarget);
            }
          }, _this._unmountOverlayTarget = function() {
            if (_this._overlayTarget) {
              _this._portalContainerNode.removeChild(_this._overlayTarget);
              _this._overlayTarget = null;
            }
            _this._portalContainerNode = null;
          }, _this._renderOverlay = function() {
            var overlay = !_this.props.children ? null : _react2.default.Children.only(_this.props.children);
            if (overlay !== null) {
              _this._mountOverlayTarget();
              var initialRender = !_this._overlayInstance;
              _this._overlayInstance = _reactDom2.default.unstable_renderSubtreeIntoContainer(_this, overlay, _this._overlayTarget, function() {
                if (initialRender && _this.props.onRendered) {
                  _this.props.onRendered();
                }
              });
            } else {
              _this._unrenderOverlay();
              _this._unmountOverlayTarget();
            }
          }, _this._unrenderOverlay = function() {
            if (_this._overlayTarget) {
              _reactDom2.default.unmountComponentAtNode(_this._overlayTarget);
              _this._overlayInstance = null;
            }
          }, _this.getMountNode = function() {
            return _this._overlayTarget;
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }
        Portal.prototype.componentDidMount = function componentDidMount() {
          this._isMounted = true;
          this._renderOverlay();
        };
        Portal.prototype.componentDidUpdate = function componentDidUpdate() {
          this._renderOverlay();
        };
        Portal.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
          if (this._overlayTarget && nextProps.container !== this.props.container) {
            this._portalContainerNode.removeChild(this._overlayTarget);
            this._portalContainerNode = (0, _getContainer2.default)(nextProps.container, (0, _ownerDocument2.default)(this).body);
            this._portalContainerNode.appendChild(this._overlayTarget);
          }
        };
        Portal.prototype.componentWillUnmount = function componentWillUnmount() {
          this._isMounted = false;
          this._unrenderOverlay();
          this._unmountOverlayTarget();
        };
        Portal.prototype.render = function render() {
          return null;
        };
        return Portal;
      }(_react2.default.Component);
      Portal.displayName = 'Portal';
      Portal.propTypes = {
        container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),
        onRendered: _propTypes2.default.func
      };
      exports.default = Portal;
      module.exports = exports['default'];
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _classnames = __webpack_require__(5);
      var _classnames2 = _interopRequireDefault(_classnames);
      var _propTypes = __webpack_require__(1);
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _react = __webpack_require__(0);
      var _react2 = _interopRequireDefault(_react);
      var _ClearButton = __webpack_require__(63);
      var _ClearButton2 = _interopRequireDefault(_ClearButton);
      var _Loader = __webpack_require__(159);
      var _Loader2 = _interopRequireDefault(_Loader);
      var _HintedInput = __webpack_require__(160);
      var _HintedInput2 = _interopRequireDefault(_HintedInput);
      var _Token = __webpack_require__(64);
      var _Token2 = _interopRequireDefault(_Token);
      var _utils = __webpack_require__(6);
      var _typeaheadInputContainer = __webpack_require__(201);
      var _typeaheadInputContainer2 = _interopRequireDefault(_typeaheadInputContainer);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var TypeaheadInput = function(_React$Component) {
        _inherits(TypeaheadInput, _React$Component);
        function TypeaheadInput() {
          var _ref;
          var _temp,
              _this,
              _ret;
          _classCallCheck(this, TypeaheadInput);
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TypeaheadInput.__proto__ || Object.getPrototypeOf(TypeaheadInput)).call.apply(_ref, [this].concat(args))), _this), _this._renderToken = function(option, idx) {
            var _this$props = _this.props,
                disabled = _this$props.disabled,
                inputProps = _this$props.inputProps,
                labelKey = _this$props.labelKey,
                onRemove = _this$props.onRemove,
                renderToken = _this$props.renderToken;
            var onRemoveWrapped = function onRemoveWrapped() {
              return onRemove(option);
            };
            if (typeof renderToken === 'function') {
              return renderToken(option, onRemoveWrapped, idx);
            }
            return _react2.default.createElement(_Token2.default, {
              disabled: disabled,
              key: idx,
              onRemove: onRemoveWrapped,
              tabIndex: inputProps.tabIndex
            }, (0, _utils.getOptionLabel)(option, labelKey));
          }, _this._renderAux = function() {
            var _this$props2 = _this.props,
                bsSize = _this$props2.bsSize,
                clearButton = _this$props2.clearButton,
                disabled = _this$props2.disabled,
                isLoading = _this$props2.isLoading,
                onClear = _this$props2.onClear,
                selected = _this$props2.selected;
            if (isLoading) {
              return _react2.default.createElement('div', {className: 'rbt-aux'}, _react2.default.createElement(_Loader2.default, {bsSize: bsSize}));
            }
            if (clearButton && !disabled && selected.length) {
              return _react2.default.createElement('div', {className: 'rbt-aux'}, _react2.default.createElement(_ClearButton2.default, {
                bsSize: bsSize,
                onClick: onClear,
                onFocus: function onFocus(e) {
                  e.stopPropagation();
                },
                onMouseDown: _utils.preventInputBlur
              }));
            }
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }
        _createClass(TypeaheadInput, [{
          key: 'render',
          value: function render() {
            var _props = this.props,
                bsSize = _props.bsSize,
                disabled = _props.disabled,
                hintText = _props.hintText,
                inputRef = _props.inputRef,
                isFocused = _props.isFocused,
                multiple = _props.multiple,
                name = _props.name,
                onBlur = _props.onBlur,
                onChange = _props.onChange,
                onContainerClickOrFocus = _props.onContainerClickOrFocus,
                onFocus = _props.onFocus,
                onKeyDown = _props.onKeyDown,
                placeholder = _props.placeholder,
                selected = _props.selected,
                value = _props.value;
            var inputProps = _extends({}, this.props.inputProps, {
              disabled: disabled,
              hintText: hintText,
              inputRef: inputRef,
              multiple: multiple,
              name: name || this.props.inputProps.name,
              onBlur: onBlur,
              onChange: onChange,
              onClick: onFocus,
              onFocus: onFocus,
              onKeyDown: onKeyDown,
              placeholder: placeholder,
              value: value
            });
            return (_react2.default.createElement('div', {
              className: (0, _classnames2.default)('rbt-input', 'form-control', {
                'focus': isFocused,
                'input-lg form-control-lg': bsSize === 'large' || bsSize === 'lg',
                'input-sm form-control-sm': bsSize === 'small' || bsSize === 'sm',
                'rbt-input-multi': multiple
              }),
              disabled: disabled,
              onClick: onContainerClickOrFocus,
              onFocus: onContainerClickOrFocus,
              tabIndex: -1
            }, _react2.default.createElement('div', {className: 'rbt-input-wrapper'}, multiple && selected.map(this._renderToken), _react2.default.createElement(_HintedInput2.default, inputProps)), this._renderAux()));
          }
        }]);
        return TypeaheadInput;
      }(_react2.default.Component);
      TypeaheadInput.propTypes = {renderToken: _propTypes2.default.func};
      exports.default = (0, _typeaheadInputContainer2.default)(TypeaheadInput);
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var _classnames = __webpack_require__(5);
      var _classnames2 = _interopRequireDefault(_classnames);
      var _react = __webpack_require__(0);
      var _react2 = _interopRequireDefault(_react);
      var _propTypes = __webpack_require__(1);
      var _propTypes2 = _interopRequireDefault(_propTypes);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      var Loader = function Loader(_ref) {
        var bsSize = _ref.bsSize;
        return _react2.default.createElement('div', {className: (0, _classnames2.default)('rbt-loader', {
            'rbt-loader-lg': bsSize === 'large' || bsSize === 'lg',
            'rbt-loader-sm': bsSize === 'small' || bsSize === 'sm'
          })});
      };
      Loader.propTypes = {bsSize: _propTypes2.default.oneOf(['large', 'lg', 'small', 'sm'])};
      exports.default = Loader;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _classnames = __webpack_require__(5);
      var _classnames2 = _interopRequireDefault(_classnames);
      var _propTypes = __webpack_require__(1);
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _react = __webpack_require__(0);
      var _react2 = _interopRequireDefault(_react);
      var _AutosizeInput = __webpack_require__(161);
      var _AutosizeInput2 = _interopRequireDefault(_AutosizeInput);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj) {
          if (keys.indexOf(i) >= 0)
            continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i))
            continue;
          target[i] = obj[i];
        }
        return target;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var STYLES = {
        backgroundColor: 'transparent',
        border: 0,
        boxShadow: 'none',
        cursor: 'inherit',
        outline: 'none',
        padding: 0
      };
      var StandardInput = function(_React$Component) {
        _inherits(StandardInput, _React$Component);
        function StandardInput() {
          var _ref;
          var _temp,
              _this,
              _ret;
          _classCallCheck(this, StandardInput);
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StandardInput.__proto__ || Object.getPrototypeOf(StandardInput)).call.apply(_ref, [this].concat(args))), _this), _this.getInput = function() {
            return _this._input;
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }
        _createClass(StandardInput, [{
          key: 'render',
          value: function render() {
            var _this2 = this;
            var _props = this.props,
                inputClassName = _props.inputClassName,
                inputStyle = _props.inputStyle,
                otherProps = _objectWithoutProperties(_props, ['inputClassName', 'inputStyle']);
            return _react2.default.createElement('input', _extends({}, otherProps, {
              className: inputClassName,
              ref: function ref(input) {
                return _this2._input = input;
              },
              style: _extends({}, STYLES, inputStyle, {width: '100%'})
            }));
          }
        }]);
        return StandardInput;
      }(_react2.default.Component);
      var HintedInput = function(_React$Component2) {
        _inherits(HintedInput, _React$Component2);
        function HintedInput() {
          var _ref2;
          var _temp2,
              _this3,
              _ret2;
          _classCallCheck(this, HintedInput);
          for (var _len2 = arguments.length,
              args = Array(_len2),
              _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref2 = HintedInput.__proto__ || Object.getPrototypeOf(HintedInput)).call.apply(_ref2, [this].concat(args))), _this3), _this3._renderInput = function() {
            var _this3$props = _this3.props,
                className = _this3$props.className,
                hintText = _this3$props.hintText,
                inputRef = _this3$props.inputRef,
                multiple = _this3$props.multiple,
                props = _objectWithoutProperties(_this3$props, ['className', 'hintText', 'inputRef', 'multiple']);
            var InputComponent = multiple ? _AutosizeInput2.default : StandardInput;
            return _react2.default.createElement(InputComponent, _extends({}, props, {
              inputClassName: (0, _classnames2.default)('rbt-input-main', className),
              inputStyle: STYLES,
              ref: inputRef,
              style: {
                position: 'relative',
                zIndex: 1
              }
            }));
          }, _this3._renderHint = function() {
            var _this3$props2 = _this3.props,
                hintText = _this3$props2.hintText,
                multiple = _this3$props2.multiple;
            return multiple ? null : _react2.default.createElement(_AutosizeInput2.default, {
              'aria-hidden': true,
              inputClassName: 'rbt-input-hint',
              inputStyle: _extends({}, STYLES, {color: 'rgba(0, 0, 0, 0.35)'}),
              style: {
                bottom: 0,
                display: 'block',
                pointerEvents: 'none',
                position: 'absolute',
                top: 0,
                zIndex: 0
              },
              tabIndex: -1,
              value: hintText
            });
          }, _temp2), _possibleConstructorReturn(_this3, _ret2);
        }
        _createClass(HintedInput, [{
          key: 'render',
          value: function render() {
            return _react2.default.createElement('div', {style: {
                display: this.props.multiple ? 'inline-block' : 'block',
                position: 'relative'
              }}, this._renderInput(), this._renderHint());
          }
        }]);
        return HintedInput;
      }(_react2.default.Component);
      HintedInput.propTypes = {type: _propTypes2.default.string};
      HintedInput.defaultProps = {type: 'text'};
      exports.default = HintedInput;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _propTypes = __webpack_require__(1);
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _react = __webpack_require__(0);
      var _react2 = _interopRequireDefault(_react);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var SIZER_STYLE = {
        height: 0,
        left: 0,
        overflow: 'scroll',
        position: 'absolute',
        top: 0,
        visibility: 'hidden',
        whiteSpace: 'pre'
      };
      var INPUT_PROPS_BLACKLIST = ['inputClassName', 'inputRef', 'inputStyle'];
      var MIN_WIDTH = 1;
      var cleanInputProps = function cleanInputProps(inputProps) {
        INPUT_PROPS_BLACKLIST.forEach(function(field) {
          return delete inputProps[field];
        });
        return inputProps;
      };
      var copyStyles = function copyStyles(styles, node) {
        node.style.fontSize = styles.fontSize;
        node.style.fontFamily = styles.fontFamily;
        node.style.fontWeight = styles.fontWeight;
        node.style.fontStyle = styles.fontStyle;
        node.style.letterSpacing = styles.letterSpacing;
        node.style.textTransform = styles.textTransform;
      };
      var AutosizeInput = function(_React$Component) {
        _inherits(AutosizeInput, _React$Component);
        function AutosizeInput() {
          var _ref;
          var _temp,
              _this,
              _ret;
          _classCallCheck(this, AutosizeInput);
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {inputWidth: MIN_WIDTH}, _this._getInputRef = function(el) {
            _this._input = el;
            if (typeof _this.props.inputRef === 'function') {
              _this.props.inputRef(el);
            }
          }, _this._copyInputStyles = function() {
            var inputStyles = _this._input && window.getComputedStyle && window.getComputedStyle(_this._input);
            if (!inputStyles) {
              return;
            }
            copyStyles(inputStyles, _this._sizer);
            if (_this._placeHolderSizer) {
              copyStyles(inputStyles, _this._placeHolderSizer);
            }
          }, _this._updateInputWidth = function() {
            if (!_this._sizer || _this._sizer.scrollWidth === undefined) {
              return;
            }
            _this._copyInputStyles();
            var placeholderWidth = _this._placeHolderSizer && _this._placeHolderSizer.scrollWidth || MIN_WIDTH;
            var inputWidth = Math.max(_this._sizer.scrollWidth, placeholderWidth);
            if (inputWidth !== _this.state.inputWidth) {
              _this.setState({inputWidth: inputWidth});
            }
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }
        _createClass(AutosizeInput, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
            this._updateInputWidth();
          }
        }, {
          key: 'componentDidUpdate',
          value: function componentDidUpdate(prevProps, prevState) {
            this._updateInputWidth();
          }
        }, {
          key: 'render',
          value: function render() {
            var _this2 = this;
            var _props = this.props,
                className = _props.className,
                defaultValue = _props.defaultValue,
                placeholder = _props.placeholder,
                value = _props.value;
            var wrapperStyle = _extends({}, this.props.style);
            if (!wrapperStyle.display) {
              wrapperStyle.display = 'inline-block';
            }
            var inputProps = cleanInputProps(_extends({}, this.props, {
              className: this.props.inputClassName,
              style: _extends({}, this.props.inputStyle, {
                boxSizing: 'content-box',
                width: this.state.inputWidth + 'px'
              })
            }));
            return _react2.default.createElement('div', {
              className: className,
              style: wrapperStyle
            }, _react2.default.createElement('input', _extends({}, inputProps, {ref: this._getInputRef})), _react2.default.createElement('div', {
              ref: function ref(el) {
                return _this2._sizer = el;
              },
              style: SIZER_STYLE
            }, defaultValue || value || ''), placeholder ? _react2.default.createElement('div', {
              ref: function ref(el) {
                return _this2._placeHolderSizer = el;
              },
              style: SIZER_STYLE
            }, placeholder) : null);
          }
        }, {
          key: 'getInput',
          value: function getInput() {
            return this._input;
          }
        }]);
        return AutosizeInput;
      }(_react2.default.Component);
      AutosizeInput.propTypes = {
        inputClassName: _propTypes2.default.string,
        inputRef: _propTypes2.default.func,
        inputStyle: _propTypes2.default.object
      };
      exports.default = AutosizeInput;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      (function(process) {
        Object.defineProperty(exports, "__esModule", {value: true});
        var _invariant = __webpack_require__(67);
        var _invariant2 = _interopRequireDefault(_invariant);
        var _uniqueId = __webpack_require__(163);
        var _uniqueId2 = _interopRequireDefault(_uniqueId);
        var _getOptionLabel = __webpack_require__(23);
        var _getOptionLabel2 = _interopRequireDefault(_getOptionLabel);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0,
                arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          } else {
            return Array.from(arr);
          }
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function addCustomOption(results, text, labelKey) {
          var exactMatchFound = results.some(function(o) {
            return (0, _getOptionLabel2.default)(o, labelKey) === text;
          });
          if (!text.trim() || exactMatchFound) {
            return results;
          }
          !(typeof labelKey === 'string') ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '`labelKey` must be a string when creating new options.') : (0, _invariant2.default)(false) : void 0;
          var customOption = _defineProperty({
            customOption: true,
            id: (0, _uniqueId2.default)('new-id-')
          }, labelKey, text);
          return [].concat(_toConsumableArray(results), [customOption]);
        }
        exports.default = addCustomOption;
      }.call(exports, __webpack_require__(4)));
    }), (function(module, exports, __webpack_require__) {
      var toString = __webpack_require__(68);
      var idCounter = 0;
      function uniqueId(prefix) {
        var id = ++idCounter;
        return toString(prefix) + id;
      }
      module.exports = uniqueId;
    }), (function(module, exports, __webpack_require__) {
      var Symbol = __webpack_require__(13),
          arrayMap = __webpack_require__(165),
          isArray = __webpack_require__(2),
          isSymbol = __webpack_require__(16);
      var INFINITY = 1 / 0;
      var symbolProto = Symbol ? Symbol.prototype : undefined,
          symbolToString = symbolProto ? symbolProto.toString : undefined;
      function baseToString(value) {
        if (typeof value == 'string') {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + '';
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : '';
        }
        var result = (value + '');
        return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
      }
      module.exports = baseToString;
    }), (function(module, exports) {
      function arrayMap(array, iteratee) {
        var index = -1,
            length = array == null ? 0 : array.length,
            result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      module.exports = arrayMap;
    }), (function(module, exports, __webpack_require__) {
      var overArg = __webpack_require__(59);
      var getPrototype = overArg(Object.getPrototypeOf, Object);
      module.exports = getPrototype;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.default = defaultFilterBy;
      var _isEqual = __webpack_require__(29);
      var _isEqual2 = _interopRequireDefault(_isEqual);
      var _isFunction = __webpack_require__(32);
      var _isFunction2 = _interopRequireDefault(_isFunction);
      var _isString = __webpack_require__(168);
      var _isString2 = _interopRequireDefault(_isString);
      var _some = __webpack_require__(169);
      var _some2 = _interopRequireDefault(_some);
      var _stripDiacritics = __webpack_require__(41);
      var _stripDiacritics2 = _interopRequireDefault(_stripDiacritics);
      var _warn = __webpack_require__(10);
      var _warn2 = _interopRequireDefault(_warn);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function isMatch(input, string, props) {
        if (!props.caseSensitive) {
          input = input.toLowerCase();
          string = string.toLowerCase();
        }
        if (props.ignoreDiacritics) {
          input = (0, _stripDiacritics2.default)(input);
          string = (0, _stripDiacritics2.default)(string);
        }
        return string.indexOf(input) !== -1;
      }
      function defaultFilterBy(option, state, props) {
        var selected = state.selected,
            text = state.text;
        var filterBy = props.filterBy,
            labelKey = props.labelKey,
            multiple = props.multiple;
        if (multiple && selected.some(function(o) {
          return (0, _isEqual2.default)(o, option);
        })) {
          return false;
        }
        var fields = filterBy.slice();
        if ((0, _isFunction2.default)(labelKey) && isMatch(text, labelKey(option), props)) {
          return true;
        }
        if ((0, _isString2.default)(labelKey)) {
          if (fields.indexOf(labelKey) === -1) {
            fields.unshift(labelKey);
          }
        }
        if ((0, _isString2.default)(option)) {
          (0, _warn2.default)(fields.length <= 1, 'You cannot filter by properties when `option` is a string.');
          return isMatch(text, option, props);
        }
        return (0, _some2.default)(fields, function(field) {
          var value = option[field];
          if (!(0, _isString2.default)(value)) {
            (0, _warn2.default)(false, 'Fields passed to `filterBy` should have string values. Value will ' + 'be converted to a string; results may be unexpected.');
            value = value + '';
          }
          return isMatch(text, value, props);
        });
      }
    }), (function(module, exports, __webpack_require__) {
      var baseGetTag = __webpack_require__(11),
          isArray = __webpack_require__(2),
          isObjectLike = __webpack_require__(8);
      var stringTag = '[object String]';
      function isString(value) {
        return typeof value == 'string' || (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
      }
      module.exports = isString;
    }), (function(module, exports, __webpack_require__) {
      var arraySome = __webpack_require__(54),
          baseIteratee = __webpack_require__(170),
          baseSome = __webpack_require__(184),
          isArray = __webpack_require__(2),
          isIterateeCall = __webpack_require__(190);
      function some(collection, predicate, guard) {
        var func = isArray(collection) ? arraySome : baseSome;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined;
        }
        return func(collection, baseIteratee(predicate, 3));
      }
      module.exports = some;
    }), (function(module, exports, __webpack_require__) {
      var baseMatches = __webpack_require__(171),
          baseMatchesProperty = __webpack_require__(174),
          identity = __webpack_require__(73),
          isArray = __webpack_require__(2),
          property = __webpack_require__(181);
      function baseIteratee(value) {
        if (typeof value == 'function') {
          return value;
        }
        if (value == null) {
          return identity;
        }
        if (typeof value == 'object') {
          return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      module.exports = baseIteratee;
    }), (function(module, exports, __webpack_require__) {
      var baseIsMatch = __webpack_require__(172),
          getMatchData = __webpack_require__(173),
          matchesStrictComparable = __webpack_require__(71);
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source || baseIsMatch(object, source, matchData);
        };
      }
      module.exports = baseMatches;
    }), (function(module, exports, __webpack_require__) {
      var Stack = __webpack_require__(51),
          baseIsEqual = __webpack_require__(30);
      var COMPARE_PARTIAL_FLAG = 1,
          COMPARE_UNORDERED_FLAG = 2;
      function baseIsMatch(object, source, matchData, customizer) {
        var index = matchData.length,
            length = index,
            noCustomizer = !customizer;
        if (object == null) {
          return !length;
        }
        object = Object(object);
        while (index--) {
          var data = matchData[index];
          if ((noCustomizer && data[2]) ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index < length) {
          data = matchData[index];
          var key = data[0],
              objValue = object[key],
              srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === undefined && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack;
            if (customizer) {
              var result = customizer(objValue, srcValue, key, object, source, stack);
            }
            if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
              return false;
            }
          }
        }
        return true;
      }
      module.exports = baseIsMatch;
    }), (function(module, exports, __webpack_require__) {
      var isStrictComparable = __webpack_require__(70),
          keys = __webpack_require__(34);
      function getMatchData(object) {
        var result = keys(object),
            length = result.length;
        while (length--) {
          var key = result[length],
              value = object[key];
          result[length] = [key, value, isStrictComparable(value)];
        }
        return result;
      }
      module.exports = getMatchData;
    }), (function(module, exports, __webpack_require__) {
      var baseIsEqual = __webpack_require__(30),
          get = __webpack_require__(175),
          hasIn = __webpack_require__(72),
          isKey = __webpack_require__(40),
          isStrictComparable = __webpack_require__(70),
          matchesStrictComparable = __webpack_require__(71),
          toKey = __webpack_require__(14);
      var COMPARE_PARTIAL_FLAG = 1,
          COMPARE_UNORDERED_FLAG = 2;
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object) {
          var objValue = get(object, path);
          return (objValue === undefined && objValue === srcValue) ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      module.exports = baseMatchesProperty;
    }), (function(module, exports, __webpack_require__) {
      var baseGet = __webpack_require__(39);
      function get(object, path, defaultValue) {
        var result = object == null ? undefined : baseGet(object, path);
        return result === undefined ? defaultValue : result;
      }
      module.exports = get;
    }), (function(module, exports, __webpack_require__) {
      var memoizeCapped = __webpack_require__(177);
      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = memoizeCapped(function(string) {
        var result = [];
        if (string.charCodeAt(0) === 46) {
          result.push('');
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
        });
        return result;
      });
      module.exports = stringToPath;
    }), (function(module, exports, __webpack_require__) {
      var memoize = __webpack_require__(178);
      var MAX_MEMOIZE_SIZE = 500;
      function memoizeCapped(func) {
        var result = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result.cache;
        return result;
      }
      module.exports = memoizeCapped;
    }), (function(module, exports, __webpack_require__) {
      var MapCache = __webpack_require__(33);
      var FUNC_ERROR_TEXT = 'Expected a function';
      function memoize(func, resolver) {
        if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments,
              key = resolver ? resolver.apply(this, args) : args[0],
              cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result = func.apply(this, args);
          memoized.cache = cache.set(key, result) || cache;
          return result;
        };
        memoized.cache = new (memoize.Cache || MapCache);
        return memoized;
      }
      memoize.Cache = MapCache;
      module.exports = memoize;
    }), (function(module, exports) {
      function baseHasIn(object, key) {
        return object != null && key in Object(object);
      }
      module.exports = baseHasIn;
    }), (function(module, exports, __webpack_require__) {
      var castPath = __webpack_require__(24),
          isArguments = __webpack_require__(35),
          isArray = __webpack_require__(2),
          isIndex = __webpack_require__(22),
          isLength = __webpack_require__(36),
          toKey = __webpack_require__(14);
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index = -1,
            length = path.length,
            result = false;
        while (++index < length) {
          var key = toKey(path[index]);
          if (!(result = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result || ++index != length) {
          return result;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
      }
      module.exports = hasPath;
    }), (function(module, exports, __webpack_require__) {
      var baseProperty = __webpack_require__(182),
          basePropertyDeep = __webpack_require__(183),
          isKey = __webpack_require__(40),
          toKey = __webpack_require__(14);
      function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      module.exports = property;
    }), (function(module, exports) {
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined : object[key];
        };
      }
      module.exports = baseProperty;
    }), (function(module, exports, __webpack_require__) {
      var baseGet = __webpack_require__(39);
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      module.exports = basePropertyDeep;
    }), (function(module, exports, __webpack_require__) {
      var baseEach = __webpack_require__(185);
      function baseSome(collection, predicate) {
        var result;
        baseEach(collection, function(value, index, collection) {
          result = predicate(value, index, collection);
          return !result;
        });
        return !!result;
      }
      module.exports = baseSome;
    }), (function(module, exports, __webpack_require__) {
      var baseForOwn = __webpack_require__(186),
          createBaseEach = __webpack_require__(189);
      var baseEach = createBaseEach(baseForOwn);
      module.exports = baseEach;
    }), (function(module, exports, __webpack_require__) {
      var baseFor = __webpack_require__(187),
          keys = __webpack_require__(34);
      function baseForOwn(object, iteratee) {
        return object && baseFor(object, iteratee, keys);
      }
      module.exports = baseForOwn;
    }), (function(module, exports, __webpack_require__) {
      var createBaseFor = __webpack_require__(188);
      var baseFor = createBaseFor();
      module.exports = baseFor;
    }), (function(module, exports) {
      function createBaseFor(fromRight) {
        return function(object, iteratee, keysFunc) {
          var index = -1,
              iterable = Object(object),
              props = keysFunc(object),
              length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      module.exports = createBaseFor;
    }), (function(module, exports, __webpack_require__) {
      var isArrayLike = __webpack_require__(37);
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike(collection)) {
            return eachFunc(collection, iteratee);
          }
          var length = collection.length,
              index = fromRight ? length : -1,
              iterable = Object(collection);
          while ((fromRight ? index-- : ++index < length)) {
            if (iteratee(iterable[index], index, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      module.exports = createBaseEach;
    }), (function(module, exports, __webpack_require__) {
      var eq = __webpack_require__(19),
          isArrayLike = __webpack_require__(37),
          isIndex = __webpack_require__(22),
          isObject = __webpack_require__(7);
      function isIterateeCall(value, index, object) {
        if (!isObject(object)) {
          return false;
        }
        var type = typeof index;
        if (type == 'number' ? (isArrayLike(object) && isIndex(index, object.length)) : (type == 'string' && index in object)) {
          return eq(object[index], value);
        }
        return false;
      }
      module.exports = isIterateeCall;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      function getAccessibilityStatus(props) {
        var a11yNumResults = props.a11yNumResults,
            a11yNumSelected = props.a11yNumSelected,
            emptyLabel = props.emptyLabel,
            isMenuShown = props.isMenuShown,
            results = props.results,
            selected = props.selected;
        if (!isMenuShown) {
          return a11yNumSelected(selected);
        }
        if (results.length === 0) {
          return emptyLabel;
        }
        return a11yNumResults(results);
      }
      exports.default = getAccessibilityStatus;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.default = getDisplayName;
      function getDisplayName(WrappedComponent) {
        return WrappedComponent.displayName || WrappedComponent.name || 'Component';
      }
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var _getMatchBounds = __webpack_require__(75);
      var _getMatchBounds2 = _interopRequireDefault(_getMatchBounds);
      var _getOptionLabel = __webpack_require__(23);
      var _getOptionLabel2 = _interopRequireDefault(_getOptionLabel);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function getHintText(_ref) {
        var activeItem = _ref.activeItem,
            initialItem = _ref.initialItem,
            isMenuShown = _ref.isMenuShown,
            labelKey = _ref.labelKey,
            minLength = _ref.minLength,
            selected = _ref.selected,
            text = _ref.text;
        if (!text || text.length < minLength || !isMenuShown || !initialItem || initialItem.customOption || activeItem || !!selected.length) {
          return '';
        }
        var initialItemStr = (0, _getOptionLabel2.default)(initialItem, labelKey);
        var bounds = (0, _getMatchBounds2.default)(initialItemStr.toLowerCase(), text.toLowerCase());
        if (!(bounds && bounds.start === 0)) {
          return '';
        }
        return text + initialItemStr.slice(bounds.end, initialItemStr.length);
      }
      exports.default = getHintText;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
      module.exports = function(str) {
        if (typeof str !== 'string') {
          throw new TypeError('Expected a string');
        }
        return str.replace(matchOperatorsRe, '\\$&');
      };
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var _head = __webpack_require__(25);
      var _head2 = _interopRequireDefault(_head);
      var _getOptionLabel = __webpack_require__(23);
      var _getOptionLabel2 = _interopRequireDefault(_getOptionLabel);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function getInputText(_ref) {
        var activeItem = _ref.activeItem,
            labelKey = _ref.labelKey,
            multiple = _ref.multiple,
            selected = _ref.selected,
            text = _ref.text;
        if (multiple) {
          return text;
        }
        if (activeItem) {
          return (0, _getOptionLabel2.default)(activeItem, labelKey);
        }
        var selectedItem = !!selected.length && (0, _head2.default)(selected);
        if (selectedItem) {
          return (0, _getOptionLabel2.default)(selectedItem, labelKey);
        }
        return text;
      }
      exports.default = getInputText;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.default = getMenuItemId;
      function getMenuItemId(position) {
        return "rbt-menu-item-" + position;
      }
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      function getTruncatedOptions(options, maxResults) {
        if (!maxResults || maxResults >= options.length) {
          return options;
        }
        return options.slice(0, maxResults);
      }
      exports.default = getTruncatedOptions;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.default = pluralize;
      function pluralize(text, count, plural) {
        plural = plural || text + "s";
        return count === 1 ? "1 " + text : count + " " + plural;
      }
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.default = preventInputBlur;
      function preventInputBlur(e) {
        e.preventDefault();
      }
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      function scrollIntoViewIfNeeded(node) {
        if (Element.prototype.scrollIntoViewIfNeeded) {
          node.scrollIntoViewIfNeeded();
          return;
        }
        var rect = node.getBoundingClientRect();
        var parent = node.parentNode;
        var parentRect = parent.getBoundingClientRect();
        var parentComputedStyle = window.getComputedStyle(parent, null);
        var parentBorderTopWidth = parseInt(parentComputedStyle.getPropertyValue('border-top-width'));
        if (rect.top < parentRect.top || rect.bottom > parentRect.bottom) {
          parent.scrollTop = node.offsetTop - parent.offsetTop - parent.clientHeight / 2 - parentBorderTopWidth + node.clientHeight / 2;
        }
      }
      exports.default = scrollIntoViewIfNeeded;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _head = __webpack_require__(25);
      var _head2 = _interopRequireDefault(_head);
      var _react = __webpack_require__(0);
      var _react2 = _interopRequireDefault(_react);
      var _reactDom = __webpack_require__(9);
      var _utils = __webpack_require__(6);
      var _keyCode = __webpack_require__(15);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      function typeaheadInputContainer(Input) {
        var WrappedInput = function(_React$Component) {
          _inherits(WrappedInput, _React$Component);
          function WrappedInput() {
            var _ref;
            var _temp,
                _this,
                _ret;
            _classCallCheck(this, WrappedInput);
            for (var _len = arguments.length,
                args = Array(_len),
                _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WrappedInput.__proto__ || Object.getPrototypeOf(WrappedInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {isFocused: false}, _this._handleBlur = function(e) {
              _this.props.onBlur(e);
              _this.setState({isFocused: false});
            }, _this._handleChange = function(e) {
              var _this$props = _this.props,
                  multiple = _this$props.multiple,
                  onChange = _this$props.onChange,
                  onRemove = _this$props.onRemove,
                  selected = _this$props.selected;
              if (!multiple) {
                !!selected.length && onRemove((0, _head2.default)(selected));
              }
              onChange(e.target.value);
            }, _this._handleFocus = function(e) {
              _this.props.onFocus(e);
              _this.setState({isFocused: true});
            }, _this._handleContainerClickOrFocus = function(e) {
              if (_this.props.disabled) {
                e.target.blur();
                return;
              }
              var inputNode = _this.getInputNode();
              if (e.target !== inputNode) {
                inputNode.selectionStart = inputNode.value.length;
              }
              inputNode.focus();
            }, _this._handleKeyDown = function(e) {
              var _this$props2 = _this.props,
                  activeItem = _this$props2.activeItem,
                  initialItem = _this$props2.initialItem,
                  multiple = _this$props2.multiple,
                  onAdd = _this$props2.onAdd,
                  selected = _this$props2.selected,
                  selectHintOnEnter = _this$props2.selectHintOnEnter;
              var value = (0, _utils.getInputText)(_this.props);
              switch (e.keyCode) {
                case _keyCode.BACKSPACE:
                  if (!multiple) {
                    break;
                  }
                  var inputContainer = (0, _reactDom.findDOMNode)(_this._input);
                  if (inputContainer && inputContainer.contains(document.activeElement) && !value) {
                    var sibling = inputContainer.parentElement.previousSibling;
                    sibling && sibling.focus();
                    e.preventDefault();
                  }
                  break;
                case _keyCode.RETURN:
                case _keyCode.RIGHT:
                case _keyCode.TAB:
                  if (multiple) {
                    break;
                  }
                  var hintText = (0, _utils.getHintText)(_this.props);
                  var selectionStart = e.target.selectionStart;
                  if ((hintText || activeItem) && !selected.length && !(e.keyCode === _keyCode.RIGHT && selectionStart !== value.length) && !(e.keyCode === _keyCode.RETURN && !selectHintOnEnter)) {
                    e.preventDefault();
                    var selectedOption = hintText ? initialItem : activeItem;
                    onAdd && onAdd(selectedOption);
                  }
                  break;
              }
              _this.props.onKeyDown(e);
            }, _temp), _possibleConstructorReturn(_this, _ret);
          }
          _createClass(WrappedInput, [{
            key: 'render',
            value: function render() {
              var _this2 = this;
              var _props = this.props,
                  activeIndex = _props.activeIndex,
                  isMenuShown = _props.isMenuShown,
                  menuId = _props.menuId,
                  multiple = _props.multiple,
                  placeholder = _props.placeholder,
                  selected = _props.selected;
              var inputProps = _extends({}, this.props.inputProps, {
                'aria-activedescendant': activeIndex >= 0 ? (0, _utils.getMenuItemId)(activeIndex) : '',
                'aria-autocomplete': multiple ? 'list' : 'both',
                'aria-expanded': isMenuShown,
                'aria-haspopup': 'listbox',
                'aria-owns': menuId,
                autoComplete: 'off',
                role: multiple ? '' : 'combobox'
              });
              return _react2.default.createElement(Input, _extends({}, this.props, this.state, {
                hintText: (0, _utils.getHintText)(this.props),
                inputProps: inputProps,
                inputRef: function inputRef(input) {
                  return _this2._input = input;
                },
                onBlur: this._handleBlur,
                onChange: this._handleChange,
                onContainerClickOrFocus: this._handleContainerClickOrFocus,
                onFocus: this._handleFocus,
                onKeyDown: this._handleKeyDown,
                placeholder: selected.length ? null : placeholder,
                value: (0, _utils.getInputText)(this.props)
              }));
            }
          }, {
            key: 'getInputNode',
            value: function getInputNode() {
              return this._input.getInput();
            }
          }]);
          return WrappedInput;
        }(_react2.default.Component);
        return WrappedInput;
      }
      exports.default = typeaheadInputContainer;
    }), (function(module, exports, __webpack_require__) {
      var basePick = __webpack_require__(203),
          flatRest = __webpack_require__(78);
      var pick = flatRest(function(object, paths) {
        return object == null ? {} : basePick(object, paths);
      });
      module.exports = pick;
    }), (function(module, exports, __webpack_require__) {
      var basePickBy = __webpack_require__(204),
          hasIn = __webpack_require__(72);
      function basePick(object, paths) {
        return basePickBy(object, paths, function(value, path) {
          return hasIn(object, path);
        });
      }
      module.exports = basePick;
    }), (function(module, exports, __webpack_require__) {
      var baseGet = __webpack_require__(39),
          baseSet = __webpack_require__(205),
          castPath = __webpack_require__(24);
      function basePickBy(object, paths, predicate) {
        var index = -1,
            length = paths.length,
            result = {};
        while (++index < length) {
          var path = paths[index],
              value = baseGet(object, path);
          if (predicate(value, path)) {
            baseSet(result, castPath(path, object), value);
          }
        }
        return result;
      }
      module.exports = basePickBy;
    }), (function(module, exports, __webpack_require__) {
      var assignValue = __webpack_require__(206),
          castPath = __webpack_require__(24),
          isIndex = __webpack_require__(22),
          isObject = __webpack_require__(7),
          toKey = __webpack_require__(14);
      function baseSet(object, path, value, customizer) {
        if (!isObject(object)) {
          return object;
        }
        path = castPath(path, object);
        var index = -1,
            length = path.length,
            lastIndex = length - 1,
            nested = object;
        while (nested != null && ++index < length) {
          var key = toKey(path[index]),
              newValue = value;
          if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined;
            if (newValue === undefined) {
              newValue = isObject(objValue) ? objValue : (isIndex(path[index + 1]) ? [] : {});
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      module.exports = baseSet;
    }), (function(module, exports, __webpack_require__) {
      var baseAssignValue = __webpack_require__(207),
          eq = __webpack_require__(19);
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || (value === undefined && !(key in object))) {
          baseAssignValue(object, key, value);
        }
      }
      module.exports = assignValue;
    }), (function(module, exports, __webpack_require__) {
      var defineProperty = __webpack_require__(77);
      function baseAssignValue(object, key, value) {
        if (key == '__proto__' && defineProperty) {
          defineProperty(object, key, {
            'configurable': true,
            'enumerable': true,
            'value': value,
            'writable': true
          });
        } else {
          object[key] = value;
        }
      }
      module.exports = baseAssignValue;
    }), (function(module, exports, __webpack_require__) {
      var baseFlatten = __webpack_require__(209);
      function flatten(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, 1) : [];
      }
      module.exports = flatten;
    }), (function(module, exports, __webpack_require__) {
      var arrayPush = __webpack_require__(55),
          isFlattenable = __webpack_require__(210);
      function baseFlatten(array, depth, predicate, isStrict, result) {
        var index = -1,
            length = array.length;
        predicate || (predicate = isFlattenable);
        result || (result = []);
        while (++index < length) {
          var value = array[index];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten(value, depth - 1, predicate, isStrict, result);
            } else {
              arrayPush(result, value);
            }
          } else if (!isStrict) {
            result[result.length] = value;
          }
        }
        return result;
      }
      module.exports = baseFlatten;
    }), (function(module, exports, __webpack_require__) {
      var Symbol = __webpack_require__(13),
          isArguments = __webpack_require__(35),
          isArray = __webpack_require__(2);
      var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;
      function isFlattenable(value) {
        return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      module.exports = isFlattenable;
    }), (function(module, exports, __webpack_require__) {
      var apply = __webpack_require__(212);
      var nativeMax = Math.max;
      function overRest(func, start, transform) {
        start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
        return function() {
          var args = arguments,
              index = -1,
              length = nativeMax(args.length - start, 0),
              array = Array(length);
          while (++index < length) {
            array[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform(array);
          return apply(func, this, otherArgs);
        };
      }
      module.exports = overRest;
    }), (function(module, exports) {
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      module.exports = apply;
    }), (function(module, exports, __webpack_require__) {
      var baseSetToString = __webpack_require__(214),
          shortOut = __webpack_require__(216);
      var setToString = shortOut(baseSetToString);
      module.exports = setToString;
    }), (function(module, exports, __webpack_require__) {
      var constant = __webpack_require__(215),
          defineProperty = __webpack_require__(77),
          identity = __webpack_require__(73);
      var baseSetToString = !defineProperty ? identity : function(func, string) {
        return defineProperty(func, 'toString', {
          'configurable': true,
          'enumerable': false,
          'value': constant(string),
          'writable': true
        });
      };
      module.exports = baseSetToString;
    }), (function(module, exports) {
      function constant(value) {
        return function() {
          return value;
        };
      }
      module.exports = constant;
    }), (function(module, exports) {
      var HOT_COUNT = 800,
          HOT_SPAN = 16;
      var nativeNow = Date.now;
      function shortOut(func) {
        var count = 0,
            lastCalled = 0;
        return function() {
          var stamp = nativeNow(),
              remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(undefined, arguments);
        };
      }
      module.exports = shortOut;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.default = isRequiredForA11y;
      function isRequiredForA11y(validator) {
        return function validate(props, propName, componentName, location, propFullName) {
          var componentNameSafe = componentName || '<<anonymous>>';
          var propFullNameSafe = propFullName || propName;
          if (props[propName] == null) {
            return new Error('The ' + location + ' `' + propFullNameSafe + '` is required to make ' + ('`' + componentNameSafe + '` accessible for users of assistive ') + 'technologies such as screen readers.');
          }
          for (var _len = arguments.length,
              args = Array(_len > 5 ? _len - 5 : 0),
              _key = 5; _key < _len; _key++) {
            args[_key - 5] = arguments[_key];
          }
          return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
        };
      }
      module.exports = exports['default'];
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.default = caseSensitiveType;
      var _warn = __webpack_require__(10);
      var _warn2 = _interopRequireDefault(_warn);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function caseSensitiveType(props, propName, componentName) {
        var caseSensitive = props.caseSensitive,
            filterBy = props.filterBy;
        (0, _warn2.default)(!caseSensitive || typeof filterBy !== 'function', 'Your `filterBy` function will override the `caseSensitive` prop.');
      }
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.default = checkPropType;
      var _propTypes = __webpack_require__(1);
      var _propTypes2 = _interopRequireDefault(_propTypes);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function checkPropType(validator, callback) {
        return function(props, propName, componentName) {
          _propTypes2.default.checkPropTypes(_defineProperty({}, propName, validator), props, 'prop', componentName);
          typeof callback === 'function' && callback(props, propName, componentName);
        };
      }
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.default = defaultInputValueType;
      var _warn = __webpack_require__(10);
      var _warn2 = _interopRequireDefault(_warn);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function defaultInputValueType(props, propName, componentName) {
        var defaultInputValue = props.defaultInputValue,
            defaultSelected = props.defaultSelected,
            multiple = props.multiple,
            selected = props.selected;
        var name = defaultSelected.length ? 'defaultSelected' : 'selected';
        (0, _warn2.default)(!(!multiple && defaultInputValue && (defaultSelected.length || selected && selected.length)), '`defaultInputValue` will be overridden by the value from `' + name + '`.');
      }
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.default = highlightOnlyResultType;
      var _warn = __webpack_require__(10);
      var _warn2 = _interopRequireDefault(_warn);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function highlightOnlyResultType(props, propName, componentName) {
        var allowNew = props.allowNew,
            highlightOnlyResult = props.highlightOnlyResult;
        (0, _warn2.default)(!(highlightOnlyResult && allowNew), '`highlightOnlyResult` will not work with `allowNew`.');
      }
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.default = ignoreDiacriticsType;
      var _warn = __webpack_require__(10);
      var _warn2 = _interopRequireDefault(_warn);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function ignoreDiacriticsType(props, propName, componentName) {
        var filterBy = props.filterBy,
            ignoreDiacritics = props.ignoreDiacritics;
        (0, _warn2.default)(ignoreDiacritics || typeof filterBy !== 'function', 'Your `filterBy` function will override the `ignoreDiacritics` prop.');
      }
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.default = inputPropsType;
      var _isPlainObject = __webpack_require__(69);
      var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
      var _warn = __webpack_require__(10);
      var _warn2 = _interopRequireDefault(_warn);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      var BLACKLIST = [{
        alt: 'onBlur',
        prop: 'onBlur'
      }, {
        alt: 'onInputChange',
        prop: 'onChange'
      }, {
        alt: 'onFocus',
        prop: 'onFocus'
      }, {
        alt: 'onKeyDown',
        prop: 'onKeyDown'
      }];
      function inputPropsType(props, propName, componentName) {
        var inputProps = props.inputProps;
        if (!(inputProps && (0, _isPlainObject2.default)(inputProps))) {
          return;
        }
        BLACKLIST.forEach(function(_ref) {
          var alt = _ref.alt,
              prop = _ref.prop;
          var msg = alt ? ' Use the top-level `' + alt + '` prop instead.' : null;
          (0, _warn2.default)(!inputProps.hasOwnProperty(prop), 'The `' + prop + '` property of `inputProps` will be ignored.' + msg);
        });
      }
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.default = labelKeyType;
      var _warn = __webpack_require__(10);
      var _warn2 = _interopRequireDefault(_warn);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function labelKeyType(props, propName, componentName) {
        var allowNew = props.allowNew,
            labelKey = props.labelKey;
        (0, _warn2.default)(!(typeof labelKey === 'function' && allowNew), '`labelKey` must be a string when `allowNew={true}`.');
      }
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var _propTypes = __webpack_require__(1);
      var _propTypes2 = _interopRequireDefault(_propTypes);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      exports.default = _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.object.isRequired), _propTypes2.default.arrayOf(_propTypes2.default.string.isRequired)]);
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _flowRight = __webpack_require__(227);
      var _flowRight2 = _interopRequireDefault(_flowRight);
      var _head = __webpack_require__(25);
      var _head2 = _interopRequireDefault(_head);
      var _isEqual = __webpack_require__(29);
      var _isEqual2 = _interopRequireDefault(_isEqual);
      var _noop = __webpack_require__(43);
      var _noop2 = _interopRequireDefault(_noop);
      var _propTypes = __webpack_require__(1);
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _reactOnclickoutside = __webpack_require__(66);
      var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);
      var _react = __webpack_require__(0);
      var _react2 = _interopRequireDefault(_react);
      var _deprecated = __webpack_require__(235);
      var _deprecated2 = _interopRequireDefault(_deprecated);
      var _highlightOnlyResultContainer = __webpack_require__(236);
      var _highlightOnlyResultContainer2 = _interopRequireDefault(_highlightOnlyResultContainer);
      var _typeaheadInnerContainer = __webpack_require__(237);
      var _typeaheadInnerContainer2 = _interopRequireDefault(_typeaheadInnerContainer);
      var _propTypes3 = __webpack_require__(82);
      var _utils = __webpack_require__(6);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      function genId() {
        var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        return prefix + Math.random().toString(36).substr(2, 12);
      }
      function getInitialState(props) {
        var defaultInputValue = props.defaultInputValue,
            defaultSelected = props.defaultSelected,
            maxResults = props.maxResults,
            multiple = props.multiple;
        var selected = props.selected ? props.selected.slice() : defaultSelected.slice();
        var text = defaultInputValue;
        if (!multiple && selected.length) {
          text = (0, _utils.getOptionLabel)((0, _head2.default)(selected), props.labelKey);
          if (selected.length > 1) {
            selected = selected.slice(0, 1);
          }
        }
        return {
          activeIndex: -1,
          activeItem: null,
          initialItem: null,
          selected: selected,
          showMenu: false,
          shownResults: maxResults,
          text: text
        };
      }
      function typeaheadContainer(Typeahead) {
        Typeahead = (0, _flowRight2.default)(_highlightOnlyResultContainer2.default, _typeaheadInnerContainer2.default)(Typeahead);
        var WrappedTypeahead = function(_React$Component) {
          _inherits(WrappedTypeahead, _React$Component);
          function WrappedTypeahead(props) {
            _classCallCheck(this, WrappedTypeahead);
            var _this = _possibleConstructorReturn(this, (WrappedTypeahead.__proto__ || Object.getPrototypeOf(WrappedTypeahead)).call(this, props));
            _this.blur = function() {
              _this._getInputNode().blur();
              _this._hideMenu();
            };
            _this.clear = function() {
              _this.setState(getInitialState(_this.props));
              _this._updateSelected([]);
              _this._updateText('');
            };
            _this.focus = function() {
              _this._getInputNode().focus();
            };
            _this._getInputNode = function() {
              return _this._input.getInputNode();
            };
            _this._handleActiveIndexChange = function(activeIndex) {
              _this.setState({activeIndex: activeIndex});
            };
            _this._handleActiveItemChange = function(activeItem) {
              _this.setState({activeItem: activeItem});
            };
            _this._handleFocus = function(e) {
              _this.props.onFocus(e);
              _this.setState({showMenu: true});
            };
            _this._handleInitialItemChange = function(initialItem) {
              var labelKey = _this.props.labelKey;
              var currentItem = _this.state.initialItem;
              if ((0, _isEqual2.default)(initialItem, currentItem) || currentItem && initialItem && initialItem.customOption && initialItem[labelKey] === currentItem[labelKey]) {
                return;
              }
              _this.setState({initialItem: initialItem});
            };
            _this._handleInputChange = function(text) {
              var _getInitialState = getInitialState(_this.props),
                  activeIndex = _getInitialState.activeIndex,
                  activeItem = _getInitialState.activeItem;
              _this.setState({
                activeIndex: activeIndex,
                activeItem: activeItem,
                showMenu: true
              });
              _this._updateText(text);
            };
            _this._handlePaginate = function(e) {
              var _this$props = _this.props,
                  maxResults = _this$props.maxResults,
                  onPaginate = _this$props.onPaginate;
              onPaginate(e);
              _this.setState({shownResults: _this.state.shownResults + maxResults});
            };
            _this._handleSelectionAdd = function(selection) {
              var _this$props2 = _this.props,
                  multiple = _this$props2.multiple,
                  labelKey = _this$props2.labelKey;
              var selected = void 0;
              var text = void 0;
              if (multiple) {
                selected = _this.state.selected.concat(selection);
                text = '';
              } else {
                selected = [selection];
                text = (0, _utils.getOptionLabel)(selection, labelKey);
              }
              _this._hideMenu();
              _this._updateText(text);
              _this._updateSelected(selected);
              _this.setState({initialItem: selection});
            };
            _this._handleSelectionRemove = function(selection) {
              var selected = _this.state.selected.filter(function(option) {
                return !(0, _isEqual2.default)(option, selection);
              });
              _this.focus();
              _this._hideMenu();
              _this._updateSelected(selected);
            };
            _this.handleClickOutside = function(e) {
              _this.state.showMenu && _this._hideMenu();
            };
            _this._hideMenu = function() {
              var _getInitialState2 = getInitialState(_this.props),
                  activeIndex = _getInitialState2.activeIndex,
                  activeItem = _getInitialState2.activeItem,
                  showMenu = _getInitialState2.showMenu,
                  shownResults = _getInitialState2.shownResults;
              _this.setState({
                activeIndex: activeIndex,
                activeItem: activeItem,
                showMenu: showMenu,
                shownResults: shownResults
              });
            };
            _this._showMenu = function() {
              _this.setState({showMenu: true});
            };
            _this._updateSelected = function(selected) {
              _this.setState({selected: selected});
              _this.props.onChange(selected);
            };
            _this._updateText = function(text) {
              _this.setState({text: text});
              _this.props.onInputChange(text);
            };
            _this.state = getInitialState(props);
            return _this;
          }
          _createClass(WrappedTypeahead, [{
            key: 'getChildContext',
            value: function getChildContext() {
              return {
                activeIndex: this.state.activeIndex,
                onActiveItemChange: this._handleActiveItemChange,
                onInitialItemChange: this._handleInitialItemChange,
                onMenuItemClick: this._handleSelectionAdd
              };
            }
          }, {
            key: 'componentWillMount',
            value: function componentWillMount() {
              this._menuId = genId('rbt-menu-');
            }
          }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
              this.props.autoFocus && this.focus();
            }
          }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
              var inputValue = this._getInputNode().value;
              var labelKey = nextProps.labelKey,
                  multiple = nextProps.multiple,
                  selected = nextProps.selected;
              if (selected && !(0, _isEqual2.default)(selected, this.props.selected)) {
                this._updateSelected(selected);
                if (multiple) {
                  return;
                }
                var text = void 0;
                if (selected.length) {
                  text = (0, _utils.getOptionLabel)((0, _head2.default)(selected), labelKey);
                } else if (this.state.text !== inputValue) {
                  text = inputValue;
                } else {
                  text = '';
                }
                this._updateText(text);
              }
              var newSelected = selected || this.state.selected;
              if (!multiple && newSelected.length > 1) {
                newSelected = newSelected.slice(0, 1);
                this._updateSelected(newSelected);
                this._updateText((0, _utils.getOptionLabel)((0, _head2.default)(newSelected), labelKey));
                return;
              }
              if (multiple !== this.props.multiple) {
                this._updateText('');
              }
            }
          }, {
            key: 'render',
            value: function render() {
              var _this2 = this;
              var _props = this.props,
                  allowNew = _props.allowNew,
                  emptyLabel = _props.emptyLabel,
                  filterBy = _props.filterBy,
                  labelKey = _props.labelKey,
                  minLength = _props.minLength,
                  options = _props.options,
                  paginate = _props.paginate;
              var _state = this.state,
                  shownResults = _state.shownResults,
                  showMenu = _state.showMenu,
                  text = _state.text;
              var results = [];
              if (text.length >= minLength) {
                var callback = Array.isArray(filterBy) ? function(option) {
                  return (0, _utils.defaultFilterBy)(option, _this2.state, _this2.props);
                } : function(option) {
                  return filterBy(option, text);
                };
                results = options.filter(callback);
              }
              var shouldPaginate = paginate && results.length > shownResults;
              results = (0, _utils.getTruncatedOptions)(results, shownResults);
              if (allowNew) {
                results = (0, _utils.addCustomOption)(results, text, labelKey);
              }
              var isMenuShown = !!(text.length >= minLength && showMenu && (results.length || emptyLabel));
              return _react2.default.createElement(Typeahead, _extends({}, this.props, this.state, {
                inputRef: function inputRef(input) {
                  return _this2._input = input;
                },
                isMenuShown: isMenuShown,
                menuId: this.props.menuId || this._menuId,
                onActiveIndexChange: this._handleActiveIndexChange,
                onActiveItemChange: this._handleActiveItemChange,
                onClear: this.clear,
                onFocus: this._handleFocus,
                onHide: this._hideMenu,
                onInitialItemChange: this._handleInitialItemChange,
                onInputChange: this._handleInputChange,
                onPaginate: this._handlePaginate,
                onSelectionAdd: this._handleSelectionAdd,
                onSelectionRemove: this._handleSelectionRemove,
                onShow: this._showMenu,
                paginate: shouldPaginate,
                results: results
              }));
            }
          }]);
          return WrappedTypeahead;
        }(_react2.default.Component);
        WrappedTypeahead.displayName = 'Typeahead';
        WrappedTypeahead.propTypes = {
          a11yNumResults: _propTypes2.default.func,
          a11yNumSelected: _propTypes2.default.func,
          allowNew: _propTypes2.default.bool,
          autoFocus: _propTypes2.default.bool,
          bodyContainer: _propTypes2.default.bool,
          caseSensitive: (0, _propTypes3.checkPropType)(_propTypes2.default.bool, _propTypes3.caseSensitiveType),
          clearButton: _propTypes2.default.bool,
          defaultInputValue: (0, _propTypes3.checkPropType)(_propTypes2.default.string, _propTypes3.defaultInputValueType),
          defaultSelected: _propTypes3.optionType,
          disabled: _propTypes2.default.bool,
          dropup: _propTypes2.default.bool,
          emptyLabel: _propTypes2.default.node,
          filterBy: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string.isRequired), _propTypes2.default.func]),
          highlightOnlyResult: (0, _propTypes3.checkPropType)(_propTypes2.default.bool, _propTypes3.highlightOnlyResultType),
          ignoreDiacritics: (0, _propTypes3.checkPropType)(_propTypes2.default.bool, _propTypes3.ignoreDiacriticsType),
          inputProps: (0, _propTypes3.checkPropType)(_propTypes2.default.object, _propTypes3.inputPropsType),
          isLoading: _propTypes2.default.bool,
          labelKey: (0, _propTypes3.checkPropType)(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]), _propTypes3.labelKeyType),
          maxResults: _propTypes2.default.number,
          menuId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
          minLength: _propTypes2.default.number,
          multiple: _propTypes2.default.bool,
          name: (0, _deprecated2.default)(_propTypes2.default.string, 'Use `inputProps` instead'),
          onBlur: _propTypes2.default.func,
          onChange: _propTypes2.default.func,
          onFocus: _propTypes2.default.func,
          onInputChange: _propTypes2.default.func,
          onKeyDown: _propTypes2.default.func,
          onMenuHide: _propTypes2.default.func,
          onMenuShow: _propTypes2.default.func,
          onPaginate: _propTypes2.default.func,
          options: _propTypes3.optionType.isRequired,
          paginate: _propTypes2.default.bool,
          placeholder: _propTypes2.default.string,
          renderMenu: _propTypes2.default.func,
          selected: _propTypes3.optionType,
          selectHintOnEnter: _propTypes2.default.bool,
          submitFormOnEnter: _propTypes2.default.bool
        };
        WrappedTypeahead.defaultProps = {
          a11yNumResults: function a11yNumResults(results) {
            var resultString = (0, _utils.pluralize)('result', results.length);
            return resultString + '. Use up and down arrow keys to navigate.';
          },
          a11yNumSelected: function a11yNumSelected(selected) {
            return (0, _utils.pluralize)('selection', selected.length);
          },
          allowNew: false,
          autoFocus: false,
          bodyContainer: false,
          caseSensitive: false,
          clearButton: false,
          defaultInputValue: '',
          defaultSelected: [],
          disabled: false,
          dropup: false,
          emptyLabel: 'No matches found.',
          filterBy: [],
          highlightOnlyResult: false,
          ignoreDiacritics: true,
          inputProps: {},
          isLoading: false,
          labelKey: 'label',
          maxResults: 100,
          minLength: 0,
          multiple: false,
          onBlur: _noop2.default,
          onChange: _noop2.default,
          onFocus: _noop2.default,
          onInputChange: _noop2.default,
          onKeyDown: _noop2.default,
          onMenuHide: _noop2.default,
          onMenuShow: _noop2.default,
          onPaginate: _noop2.default,
          paginate: true,
          placeholder: '',
          selectHintOnEnter: false,
          submitFormOnEnter: false
        };
        WrappedTypeahead.childContextTypes = {
          activeIndex: _propTypes2.default.number.isRequired,
          onActiveItemChange: _propTypes2.default.func.isRequired,
          onInitialItemChange: _propTypes2.default.func.isRequired,
          onMenuItemClick: _propTypes2.default.func.isRequired
        };
        return (0, _reactOnclickoutside2.default)(WrappedTypeahead);
      }
      exports.default = typeaheadContainer;
    }), (function(module, exports, __webpack_require__) {
      var createFlow = __webpack_require__(228);
      var flowRight = createFlow(true);
      module.exports = flowRight;
    }), (function(module, exports, __webpack_require__) {
      var LodashWrapper = __webpack_require__(44),
          flatRest = __webpack_require__(78),
          getData = __webpack_require__(84),
          getFuncName = __webpack_require__(85),
          isArray = __webpack_require__(2),
          isLaziable = __webpack_require__(231);
      var FUNC_ERROR_TEXT = 'Expected a function';
      var WRAP_CURRY_FLAG = 8,
          WRAP_PARTIAL_FLAG = 32,
          WRAP_ARY_FLAG = 128,
          WRAP_REARG_FLAG = 256;
      function createFlow(fromRight) {
        return flatRest(function(funcs) {
          var length = funcs.length,
              index = length,
              prereq = LodashWrapper.prototype.thru;
          if (fromRight) {
            funcs.reverse();
          }
          while (index--) {
            var func = funcs[index];
            if (typeof func != 'function') {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
              var wrapper = new LodashWrapper([], true);
            }
          }
          index = wrapper ? index : length;
          while (++index < length) {
            func = funcs[index];
            var funcName = getFuncName(func),
                data = funcName == 'wrapper' ? getData(func) : undefined;
            if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
              wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            } else {
              wrapper = (func.length == 1 && isLaziable(func)) ? wrapper[funcName]() : wrapper.thru(func);
            }
          }
          return function() {
            var args = arguments,
                value = args[0];
            if (wrapper && args.length == 1 && isArray(value)) {
              return wrapper.plant(value).value();
            }
            var index = 0,
                result = length ? funcs[index].apply(this, args) : value;
            while (++index < length) {
              result = funcs[index].call(this, result);
            }
            return result;
          };
        });
      }
      module.exports = createFlow;
    }), (function(module, exports, __webpack_require__) {
      var WeakMap = __webpack_require__(60);
      var metaMap = WeakMap && new WeakMap;
      module.exports = metaMap;
    }), (function(module, exports) {
      var realNames = {};
      module.exports = realNames;
    }), (function(module, exports, __webpack_require__) {
      var LazyWrapper = __webpack_require__(46),
          getData = __webpack_require__(84),
          getFuncName = __webpack_require__(85),
          lodash = __webpack_require__(232);
      function isLaziable(func) {
        var funcName = getFuncName(func),
            other = lodash[funcName];
        if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
          return false;
        }
        if (func === other) {
          return true;
        }
        var data = getData(other);
        return !!data && func === data[0];
      }
      module.exports = isLaziable;
    }), (function(module, exports, __webpack_require__) {
      var LazyWrapper = __webpack_require__(46),
          LodashWrapper = __webpack_require__(44),
          baseLodash = __webpack_require__(45),
          isArray = __webpack_require__(2),
          isObjectLike = __webpack_require__(8),
          wrapperClone = __webpack_require__(233);
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function lodash(value) {
        if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
          if (value instanceof LodashWrapper) {
            return value;
          }
          if (hasOwnProperty.call(value, '__wrapped__')) {
            return wrapperClone(value);
          }
        }
        return new LodashWrapper(value);
      }
      lodash.prototype = baseLodash.prototype;
      lodash.prototype.constructor = lodash;
      module.exports = lodash;
    }), (function(module, exports, __webpack_require__) {
      var LazyWrapper = __webpack_require__(46),
          LodashWrapper = __webpack_require__(44),
          copyArray = __webpack_require__(234);
      function wrapperClone(wrapper) {
        if (wrapper instanceof LazyWrapper) {
          return wrapper.clone();
        }
        var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result.__actions__ = copyArray(wrapper.__actions__);
        result.__index__ = wrapper.__index__;
        result.__values__ = wrapper.__values__;
        return result;
      }
      module.exports = wrapperClone;
    }), (function(module, exports) {
      function copyArray(source, array) {
        var index = -1,
            length = source.length;
        array || (array = Array(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
      module.exports = copyArray;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.default = deprecated;
      var _warning = __webpack_require__(74);
      var _warning2 = _interopRequireDefault(_warning);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      var warned = {};
      function deprecated(validator, reason) {
        return function validate(props, propName, componentName, location, propFullName) {
          var componentNameSafe = componentName || '<<anonymous>>';
          var propFullNameSafe = propFullName || propName;
          if (props[propName] != null) {
            var messageKey = componentName + '.' + propName;
            (0, _warning2.default)(warned[messageKey], 'The ' + location + ' `' + propFullNameSafe + '` of ' + ('`' + componentNameSafe + '` is deprecated. ' + reason + '.'));
            warned[messageKey] = true;
          }
          for (var _len = arguments.length,
              args = Array(_len > 5 ? _len - 5 : 0),
              _key = 5; _key < _len; _key++) {
            args[_key - 5] = arguments[_key];
          }
          return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
        };
      }
      function _resetWarned() {
        warned = {};
      }
      deprecated._resetWarned = _resetWarned;
      module.exports = exports['default'];
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _head = __webpack_require__(25);
      var _head2 = _interopRequireDefault(_head);
      var _propTypes = __webpack_require__(1);
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _react = __webpack_require__(0);
      var _react2 = _interopRequireDefault(_react);
      var _keyCode = __webpack_require__(15);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      function highlightOnlyResultContainer(Typeahead) {
        var WrappedTypeahead = function(_React$Component) {
          _inherits(WrappedTypeahead, _React$Component);
          function WrappedTypeahead() {
            var _ref;
            var _temp,
                _this,
                _ret;
            _classCallCheck(this, WrappedTypeahead);
            for (var _len = arguments.length,
                args = Array(_len),
                _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WrappedTypeahead.__proto__ || Object.getPrototypeOf(WrappedTypeahead)).call.apply(_ref, [this].concat(args))), _this), _this.state = {isOnlyResult: false}, _this._handleKeyDown = function(e) {
              var _this$props = _this.props,
                  initialItem = _this$props.initialItem,
                  onKeyDown = _this$props.onKeyDown,
                  onSelectionAdd = _this$props.onSelectionAdd;
              switch (e.keyCode) {
                case _keyCode.RETURN:
                  if (_this.state.isOnlyResult) {
                    onSelectionAdd(initialItem);
                  }
                  break;
              }
              onKeyDown(e);
            }, _temp), _possibleConstructorReturn(_this, _ret);
          }
          _createClass(WrappedTypeahead, [{
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
              var allowNew = nextProps.allowNew,
                  highlightOnlyResult = nextProps.highlightOnlyResult,
                  results = nextProps.results;
              if (!highlightOnlyResult || allowNew) {
                return;
              }
              if (results.length !== this.props.results.length) {
                this.setState({isOnlyResult: results.length === 1 && !(0, _head2.default)(results).disabled});
              }
            }
          }, {
            key: 'getChildContext',
            value: function getChildContext() {
              return {isOnlyResult: this.state.isOnlyResult};
            }
          }, {
            key: 'render',
            value: function render() {
              return _react2.default.createElement(Typeahead, _extends({}, this.props, {onKeyDown: this._handleKeyDown}));
            }
          }]);
          return WrappedTypeahead;
        }(_react2.default.Component);
        WrappedTypeahead.childContextTypes = {isOnlyResult: _propTypes2.default.bool.isRequired};
        return WrappedTypeahead;
      }
      exports.default = highlightOnlyResultContainer;
    }), (function(module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _react = __webpack_require__(0);
      var _react2 = _interopRequireDefault(_react);
      var _keyCode = __webpack_require__(15);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      function typeaheadInnerContainer(Typeahead) {
        var WrappedTypeahead = function(_React$Component) {
          _inherits(WrappedTypeahead, _React$Component);
          function WrappedTypeahead() {
            var _ref;
            var _temp,
                _this,
                _ret;
            _classCallCheck(this, WrappedTypeahead);
            for (var _len = arguments.length,
                args = Array(_len),
                _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WrappedTypeahead.__proto__ || Object.getPrototypeOf(WrappedTypeahead)).call.apply(_ref, [this].concat(args))), _this), _this._handleKeyDown = function(e) {
              var _this$props = _this.props,
                  activeItem = _this$props.activeItem,
                  isMenuShown = _this$props.isMenuShown,
                  onActiveIndexChange = _this$props.onActiveIndexChange,
                  onActiveItemChange = _this$props.onActiveItemChange,
                  onHide = _this$props.onHide,
                  onKeyDown = _this$props.onKeyDown,
                  onSelectionAdd = _this$props.onSelectionAdd,
                  onShow = _this$props.onShow,
                  results = _this$props.results,
                  submitFormOnEnter = _this$props.submitFormOnEnter;
              switch (e.keyCode) {
                case _keyCode.UP:
                case _keyCode.DOWN:
                  if (!isMenuShown) {
                    onShow();
                    break;
                  }
                  var activeIndex = _this.props.activeIndex;
                  e.preventDefault();
                  activeIndex += e.keyCode === _keyCode.UP ? -1 : 1;
                  while (results[activeIndex] && results[activeIndex].disabled) {
                    activeIndex += e.keyCode === _keyCode.UP ? -1 : 1;
                  }
                  if (activeIndex === results.length) {
                    activeIndex = -1;
                  } else if (activeIndex === -2) {
                    activeIndex = results.length - 1;
                  }
                  onActiveIndexChange(activeIndex);
                  if (activeIndex === -1) {
                    onActiveItemChange(null);
                  }
                  break;
                case _keyCode.ESC:
                case _keyCode.TAB:
                  e.keyCode === _keyCode.ESC && e.preventDefault();
                  onHide();
                  break;
                case _keyCode.RETURN:
                  if (!isMenuShown) {
                    break;
                  }
                  if (!submitFormOnEnter || activeItem) {
                    e.preventDefault();
                  }
                  if (activeItem) {
                    onSelectionAdd(activeItem);
                    break;
                  }
                  break;
              }
              onKeyDown(e);
            }, _temp), _possibleConstructorReturn(_this, _ret);
          }
          _createClass(WrappedTypeahead, [{
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
              var allowNew = nextProps.allowNew,
                  onInitialItemChange = nextProps.onInitialItemChange,
                  results = nextProps.results;
              if (!(allowNew || results.length)) {
                onInitialItemChange(null);
              }
            }
          }, {
            key: 'render',
            value: function render() {
              return _react2.default.createElement(Typeahead, _extends({}, this.props, {onKeyDown: this._handleKeyDown}));
            }
          }]);
          return WrappedTypeahead;
        }(_react2.default.Component);
        return WrappedTypeahead;
      }
      exports.default = typeaheadInnerContainer;
    })]);
  });
})(require('buffer').Buffer, require('process'));
