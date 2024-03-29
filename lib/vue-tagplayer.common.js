module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "4160":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var forEach = __webpack_require__("17c2");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9366":
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,(function(){return function(e){var t={};function a(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,a),o.l=!0,o.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(r,o,function(t){return e[t]}.bind(null,o));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a(a.s=59)}([function(e,t,a){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=a(8),n=Object.prototype.toString;function l(e){return"[object Array]"===n.call(e)}function i(e){return void 0===e}function s(e){return null!==e&&"object"===r(e)}function d(e){if("[object Object]"!==n.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function p(e){return"[object Function]"===n.call(e)}function A(e,t){if(null!=e)if("object"!==r(e)&&(e=[e]),l(e))for(var a=0,o=e.length;a<o;a++)t.call(null,e[a],a,e);else for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.call(null,e[n],n,e)}e.exports={isArray:l,isArrayBuffer:function(e){return"[object ArrayBuffer]"===n.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:d,isUndefined:i,isDate:function(e){return"[object Date]"===n.call(e)},isFile:function(e){return"[object File]"===n.call(e)},isBlob:function(e){return"[object Blob]"===n.call(e)},isFunction:p,isStream:function(e){return s(e)&&p(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:A,merge:function e(){var t={};function a(a,r){d(t[r])&&d(a)?t[r]=e(t[r],a):d(a)?t[r]=e({},a):l(a)?t[r]=a.slice():t[r]=a}for(var r=0,o=arguments.length;r<o;r++)A(arguments[r],a);return t},extend:function(e,t,a){return A(t,(function(t,r){e[r]=a&&"function"==typeof t?o(t,a):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},function(e,t,a){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,o=!1,n=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(a.push(l.value),!t||a.length!==t);r=!0);}catch(e){o=!0,n=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}e.exports=function(e){var t=r(e,4),a=t[1],o=t[3];if("function"==typeof btoa){var n=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),i="/*# ".concat(l," */"),s=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[a].concat(s).concat([i]).join("\n")}return[a].join("\n")}},function(e,t,a){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a=e(t);return t[2]?"@media ".concat(t[2]," {").concat(a,"}"):a})).join("")},t.i=function(e,a,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var n=0;n<this.length;n++){var l=this[n][0];null!=l&&(o[l]=!0)}for(var i=0;i<e.length;i++){var s=[].concat(e[i]);r&&o[s[0]]||(a&&(s[2]?s[2]="".concat(a," and ").concat(s[2]):s[2]=a),t.push(s))}},t}},function(e,t){function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":a(window))&&(r=window)}e.exports=r},function(e,t,a){var r=a(16);e.exports=function(e){"use strict";var t="",a=(e=e||{}).enableSubtitle,o=e.subtitle,n=e.current,l=e.airplay,i=e.pic,s=r.$escape,d=e.screenshot,p=e.preload,A=e.url;a=o&&"webvtt"===o.type;return t+='\r\n<video\r\n    class="dplayer-video ',n&&(t+="dplayer-video-current"),t+='"\r\n    webkit-playsinline\r\n    ',l&&(t+=' x-webkit-airplay="allow" '),t+="\r\n    playsinline\r\n    ",i&&(t+='poster="',t+=s(i),t+='"'),t+="\r\n    ",(d||a)&&(t+='crossorigin="anonymous"'),t+="\r\n    ",p&&(t+='preload="',t+=s(p),t+='"'),t+="\r\n    ",A&&(t+='src="',t+=s(A),t+='"'),t+="\r\n    >\r\n    ",a&&(t+='\r\n    <track kind="metadata" default src="',t+=s(o.url),t+='"></track>\r\n    '),t+="\r\n</video>"}},function(e,t,a){"use strict";var r=a(1),o=a.n(r),n=a(2),l=a.n(n),i=a(18),s=l()(o.a);s.i(i.a),s.push([e.i,'@-webkit-keyframes my-face{2%{transform:translateY(1.5px) rotate(1.5deg)}4%{transform:translateY(-1.5px) rotate(-.5deg)}6%{transform:translateY(1.5px) rotate(-1.5deg)}8%{transform:translateY(-1.5px) rotate(-1.5deg)}10%{transform:translateY(2.5px) rotate(1.5deg)}12%{transform:translateY(-.5px) rotate(1.5deg)}14%{transform:translateY(-1.5px) rotate(1.5deg)}16%{transform:translateY(-.5px) rotate(-1.5deg)}18%{transform:translateY(.5px) rotate(-1.5deg)}20%{transform:translateY(-1.5px) rotate(2.5deg)}22%{transform:translateY(.5px) rotate(-1.5deg)}24%{transform:translateY(1.5px) rotate(1.5deg)}26%{transform:translateY(.5px) rotate(.5deg)}28%{transform:translateY(.5px) rotate(1.5deg)}30%{transform:translateY(-.5px) rotate(2.5deg)}32%{transform:translateY(1.5px) rotate(-.5deg)}34%{transform:translateY(1.5px) rotate(-.5deg)}36%{transform:translateY(-1.5px) rotate(2.5deg)}38%{transform:translateY(1.5px) rotate(-1.5deg)}40%{transform:translateY(-.5px) rotate(2.5deg)}42%{transform:translateY(2.5px) rotate(-1.5deg)}44%{transform:translateY(1.5px) rotate(.5deg)}46%{transform:translateY(-1.5px) rotate(2.5deg)}48%{transform:translateY(-.5px) rotate(.5deg)}50%{transform:translateY(.5px) rotate(.5deg)}52%{transform:translateY(2.5px) rotate(2.5deg)}54%{transform:translateY(-1.5px) rotate(1.5deg)}56%{transform:translateY(2.5px) rotate(2.5deg)}58%{transform:translateY(.5px) rotate(2.5deg)}60%{transform:translateY(2.5px) rotate(2.5deg)}62%{transform:translateY(-.5px) rotate(2.5deg)}64%{transform:translateY(-.5px) rotate(1.5deg)}66%{transform:translateY(1.5px) rotate(-.5deg)}68%{transform:translateY(-1.5px) rotate(-.5deg)}70%{transform:translateY(1.5px) rotate(.5deg)}72%{transform:translateY(2.5px) rotate(1.5deg)}74%{transform:translateY(-.5px) rotate(.5deg)}76%{transform:translateY(-.5px) rotate(2.5deg)}78%{transform:translateY(-.5px) rotate(1.5deg)}80%{transform:translateY(1.5px) rotate(1.5deg)}82%{transform:translateY(-.5px) rotate(.5deg)}84%{transform:translateY(1.5px) rotate(2.5deg)}86%{transform:translateY(-1.5px) rotate(-1.5deg)}88%{transform:translateY(-.5px) rotate(2.5deg)}90%{transform:translateY(2.5px) rotate(-.5deg)}92%{transform:translateY(.5px) rotate(-.5deg)}94%{transform:translateY(2.5px) rotate(.5deg)}96%{transform:translateY(-.5px) rotate(1.5deg)}98%{transform:translateY(-1.5px) rotate(-.5deg)}0%,to{transform:translate(0) rotate(0deg)}}@keyframes my-face{2%{transform:translateY(1.5px) rotate(1.5deg)}4%{transform:translateY(-1.5px) rotate(-.5deg)}6%{transform:translateY(1.5px) rotate(-1.5deg)}8%{transform:translateY(-1.5px) rotate(-1.5deg)}10%{transform:translateY(2.5px) rotate(1.5deg)}12%{transform:translateY(-.5px) rotate(1.5deg)}14%{transform:translateY(-1.5px) rotate(1.5deg)}16%{transform:translateY(-.5px) rotate(-1.5deg)}18%{transform:translateY(.5px) rotate(-1.5deg)}20%{transform:translateY(-1.5px) rotate(2.5deg)}22%{transform:translateY(.5px) rotate(-1.5deg)}24%{transform:translateY(1.5px) rotate(1.5deg)}26%{transform:translateY(.5px) rotate(.5deg)}28%{transform:translateY(.5px) rotate(1.5deg)}30%{transform:translateY(-.5px) rotate(2.5deg)}32%{transform:translateY(1.5px) rotate(-.5deg)}34%{transform:translateY(1.5px) rotate(-.5deg)}36%{transform:translateY(-1.5px) rotate(2.5deg)}38%{transform:translateY(1.5px) rotate(-1.5deg)}40%{transform:translateY(-.5px) rotate(2.5deg)}42%{transform:translateY(2.5px) rotate(-1.5deg)}44%{transform:translateY(1.5px) rotate(.5deg)}46%{transform:translateY(-1.5px) rotate(2.5deg)}48%{transform:translateY(-.5px) rotate(.5deg)}50%{transform:translateY(.5px) rotate(.5deg)}52%{transform:translateY(2.5px) rotate(2.5deg)}54%{transform:translateY(-1.5px) rotate(1.5deg)}56%{transform:translateY(2.5px) rotate(2.5deg)}58%{transform:translateY(.5px) rotate(2.5deg)}60%{transform:translateY(2.5px) rotate(2.5deg)}62%{transform:translateY(-.5px) rotate(2.5deg)}64%{transform:translateY(-.5px) rotate(1.5deg)}66%{transform:translateY(1.5px) rotate(-.5deg)}68%{transform:translateY(-1.5px) rotate(-.5deg)}70%{transform:translateY(1.5px) rotate(.5deg)}72%{transform:translateY(2.5px) rotate(1.5deg)}74%{transform:translateY(-.5px) rotate(.5deg)}76%{transform:translateY(-.5px) rotate(2.5deg)}78%{transform:translateY(-.5px) rotate(1.5deg)}80%{transform:translateY(1.5px) rotate(1.5deg)}82%{transform:translateY(-.5px) rotate(.5deg)}84%{transform:translateY(1.5px) rotate(2.5deg)}86%{transform:translateY(-1.5px) rotate(-1.5deg)}88%{transform:translateY(-.5px) rotate(2.5deg)}90%{transform:translateY(2.5px) rotate(-.5deg)}92%{transform:translateY(.5px) rotate(-.5deg)}94%{transform:translateY(2.5px) rotate(.5deg)}96%{transform:translateY(-.5px) rotate(1.5deg)}98%{transform:translateY(-1.5px) rotate(-.5deg)}0%,to{transform:translate(0) rotate(0deg)}}.dplayer{position:relative;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:1}.dplayer *{box-sizing:content-box}.dplayer svg{width:100%;height:100%}.dplayer svg circle,.dplayer svg path{fill:#fff}.dplayer:-webkit-full-screen{width:100%;height:100%;background:#000;position:fixed;z-index:100000;left:0;top:0;margin:0;padding:0;transform:translate(0)}.dplayer:-webkit-full-screen .dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move,.dplayer:-webkit-full-screen .dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move{-webkit-animation:danmaku-center 6s linear;animation:danmaku-center 6s linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.dplayer:-webkit-full-screen .dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move{-webkit-animation:danmaku 8s linear;animation:danmaku 8s linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.dplayer.dplayer-live .dplayer-bar-wrap,.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting,.dplayer.dplayer-live .dplayer-setting-loop,.dplayer.dplayer-live .dplayer-setting-speed,.dplayer.dplayer-live .dplayer-time,.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit,.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-tag,.dplayer.dplayer-no-danmaku .dplayer-danmaku{display:none}.dplayer.dplayer-arrow .dplayer-danmaku{font-size:18px}.dplayer.dplayer-arrow .dplayer-icon{margin:0 -3px}.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move{-webkit-animation-play-state:running;animation-play-state:running}@media (min-width:900px){.dplayer.dplayer-playing .dplayer-controller,.dplayer.dplayer-playing .dplayer-controller-mask{opacity:0}.dplayer.dplayer-playing:hover .dplayer-controller,.dplayer.dplayer-playing:hover .dplayer-controller-mask{opacity:1}}.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon{display:block}.dplayer.dplayer-loading .dplayer-danmaku,.dplayer.dplayer-loading .dplayer-danmaku-move,.dplayer.dplayer-paused .dplayer-danmaku,.dplayer.dplayer-paused .dplayer-danmaku-move{-webkit-animation-play-state:paused;animation-play-state:paused}.dplayer.dplayer-hide-controller{cursor:none}.dplayer.dplayer-hide-controller .dplayer-controller,.dplayer.dplayer-hide-controller .dplayer-controller-mask{opacity:0;transform:translateY(100%)}.dplayer.dplayer-show-controller .dplayer-controller,.dplayer.dplayer-show-controller .dplayer-controller-mask{opacity:1}.dplayer.dplayer-fulled{position:fixed;z-index:100000;left:0;top:0;width:100%!important;height:100%!important}.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon,.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume{display:none}.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon{position:static;display:inline-block}.dplayer.dplayer-mobile .dplayer-bar-time,.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play{display:none}.dplayer.dplayer-mobile .dplayer-mobile-play{display:block}.dplayer-web-fullscreen-fix{position:fixed;top:0;left:0;margin:0;padding:0}[data-balloon]:before{display:none}[data-balloon]:after{padding:.3em .7em;background:rgba(17,17,17,.7)}[data-balloon][data-balloon-pos=up]:after{margin-bottom:0}.dplayer-bezel{position:absolute;left:0;right:0;top:0;bottom:0;font-size:22px;color:#fff;pointer-events:none}.dplayer-bezel .dplayer-bezel-icon{position:absolute;top:50%;left:50%;margin:-26px 0 0 -26px;height:52px;width:52px;padding:12px;box-sizing:border-box;background:rgba(0,0,0,.5);border-radius:50%;opacity:0;pointer-events:none}.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition{-webkit-animation:bezel-hide .5s linear;animation:bezel-hide .5s linear}@-webkit-keyframes bezel-hide{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(2)}}@keyframes bezel-hide{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(2)}}.dplayer-bezel .dplayer-danloading{position:absolute;top:50%;margin-top:-7px;width:100%;text-align:center;font-size:14px;line-height:14px;-webkit-animation:my-face 5s ease-in-out infinite;animation:my-face 5s ease-in-out infinite}.dplayer-bezel .diplayer-loading-icon{display:none;position:absolute;top:50%;left:50%;margin:-18px 0 0 -18px;height:36px;width:36px;pointer-events:none}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide{display:none}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot{-webkit-animation:diplayer-loading-dot-fade .8s ease infinite;animation:diplayer-loading-dot-fade .8s ease infinite;opacity:0;transform-origin:4px 4px}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7{-webkit-animation-delay:.7s;animation-delay:.7s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6{-webkit-animation-delay:.6s;animation-delay:.6s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5{-webkit-animation-delay:.5s;animation-delay:.5s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4{-webkit-animation-delay:.4s;animation-delay:.4s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3{-webkit-animation-delay:.3s;animation-delay:.3s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2{-webkit-animation-delay:.2s;animation-delay:.2s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1{-webkit-animation-delay:.1s;animation-delay:.1s}@-webkit-keyframes diplayer-loading-dot-fade{0%{opacity:.7;transform:scale(1.2)}50%{opacity:.25;transform:scale(.9)}to{opacity:.25;transform:scale(.85)}}@keyframes diplayer-loading-dot-fade{0%{opacity:.7;transform:scale(1.2)}50%{opacity:.25;transform:scale(.9)}to{opacity:.25;transform:scale(.85)}}.dplayer-controller-mask{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;height:98px;width:100%}.dplayer-controller,.dplayer-controller-mask{position:absolute;bottom:0;transition:all .3s ease}.dplayer-controller{left:0;right:0;height:41px;padding:0 20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dplayer-controller.dplayer-controller-comment .dplayer-icons{display:none}.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-tag-box{display:block}.dplayer-controller .dplayer-bar-wrap{padding:5px 0;cursor:pointer;position:absolute;bottom:33px;width:calc(100% - 40px);height:3px}.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb{transform:scale(1)}.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight{display:block;width:8px;transform:translateX(-4px);top:4px;height:40%}.dplayer-controller .dplayer-bar-wrap .dplayer-highlight{z-index:12;position:absolute;top:5px;width:6px;height:20%;border-radius:6px;background-color:#fff;text-align:center;transform:translateX(-3px);transition:all .2s ease-in-out}.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text{display:block}.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover~.dplayer-bar-preview,.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover~.dplayer-bar-time{opacity:0}.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text{display:none;position:absolute;left:50%;top:-24px;padding:5px 8px;background-color:rgba(0,0,0,.62);color:#fff;border-radius:4px;font-size:12px;white-space:nowrap;transform:translateX(-50%)}.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview{position:absolute;background:#fff;pointer-events:none;display:none;background-size:16000px 100%}.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas{position:absolute;width:100%;height:100%;z-index:1;pointer-events:none}.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time{position:absolute;left:0;top:-20px;border-radius:4px;padding:5px 7px;background-color:rgba(0,0,0,.62);color:#fff;font-size:12px;text-align:center;opacity:1;transition:opacity .1s ease-in-out;word-wrap:normal;word-break:normal;z-index:2;pointer-events:none}.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden{opacity:0}.dplayer-controller .dplayer-bar-wrap .dplayer-bar{position:relative;height:3px;width:100%;background:hsla(0,0%,100%,.2);cursor:pointer}.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded{background:hsla(0,0%,100%,.4);transition:all .5s ease}.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded,.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played{position:absolute;left:0;top:0;bottom:0;height:3px;will-change:width}.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer;transition:all .3s ease-in-out;transform:scale(0)}.dplayer-controller .dplayer-icons{height:38px;position:absolute;bottom:0}.dplayer-controller .dplayer-icons.dplayer-tag-box{display:none;position:absolute;transition:all .3s ease-in-out;z-index:2;height:38px;bottom:0;left:20px;right:20px;color:#fff}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-icon{padding:7px}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-icon{position:absolute;left:0;top:0}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-send-icon{position:absolute;right:0;top:0}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box{position:absolute;background:rgba(28,28,28,.9);bottom:41px;left:0;box-shadow:0 0 25px rgba(0,0,0,.3);border-radius:4px;padding:10px 10px 16px;font-size:14px;width:204px;transition:all .3s ease-in-out;transform:scale(0)}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box.dplayer-tag-setting-open{transform:scale(1)}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box input[type=radio]{display:none}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box label{cursor:pointer}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box .dplayer-tag-setting-title{font-size:13px;color:#fff;line-height:30px}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box .dplayer-tag-setting-type{font-size:0}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box .dplayer-tag-setting-type .dplayer-tag-setting-title{margin-bottom:6px}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box .dplayer-tag-setting-type label:nth-child(2) span{border-radius:4px 0 0 4px}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box .dplayer-tag-setting-type label:nth-child(4) span{border-radius:0 4px 4px 0}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box .dplayer-tag-setting-type span{width:33%;padding:4px 6px;line-height:16px;display:inline-block;font-size:12px;color:#fff;border:1px solid #fff;margin-right:-1px;box-sizing:border-box;text-align:center;cursor:pointer}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box .dplayer-tag-setting-type input:checked+span{background:#e4e4e6;color:#1c1c1c}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box .dplayer-tag-setting-color{font-size:0}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box .dplayer-tag-setting-color label{font-size:0;padding:6px;display:inline-block}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box .dplayer-tag-setting-color span{width:22px;height:22px;display:inline-block;border-radius:50%;box-sizing:border-box;cursor:pointer}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box .dplayer-tag-setting-color span:hover{-webkit-animation:my-face 5s ease-in-out infinite;animation:my-face 5s ease-in-out infinite}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-input{outline:none;border:none;padding:8px 31px;font-size:14px;line-height:18px;text-align:center;border-radius:4px;background:none;margin:0;height:100%;box-sizing:border-box;width:100%;color:#fff}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-input::-moz-placeholder{color:#fff;opacity:.8}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-input:-ms-input-placeholder{color:#fff;opacity:.8}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-input::placeholder{color:#fff;opacity:.8}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-input::-ms-clear{display:none}.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon{padding:7px}.dplayer-controller .dplayer-icons.dplayer-icons-right{right:20px}.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon{padding:8px}.dplayer-controller .dplayer-icons .dplayer-live-badge,.dplayer-controller .dplayer-icons .dplayer-time{line-height:38px;color:#eee;text-shadow:0 0 2px rgba(0,0,0,.5);vertical-align:middle;font-size:13px;cursor:default}.dplayer-controller .dplayer-icons .dplayer-live-dot{display:inline-block;width:6px;height:6px;vertical-align:4%;margin-right:5px;content:"";border-radius:6px}.dplayer-controller .dplayer-icons .dplayer-icon{width:40px;height:100%;border:none;background-color:transparent;outline:none;cursor:pointer;vertical-align:middle;box-sizing:border-box;display:inline-block}.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content{transition:all .2s ease-in-out;opacity:.8}.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content{opacity:1}.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon{color:#fff;width:auto;line-height:22px;font-size:14px}.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-tag-icon{padding:10px 9px 9px}.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon{padding-top:8.5px}.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon{width:43px}.dplayer-controller .dplayer-icons .dplayer-volume{position:relative;display:inline-block;cursor:pointer;height:100%}.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar{width:45px}.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb{transform:scale(1)}.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar{width:45px}.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb{transform:scale(1)}.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap{display:inline-block;margin:0 10px 0 -5px;vertical-align:middle;height:100%}.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar{position:relative;top:17px;width:0;height:3px;background:#aaa;transition:all .3s ease-in-out}.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner{position:absolute;bottom:0;left:0;height:100%;transition:all .1s ease;will-change:width}.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer;transition:all .3s ease-in-out;transform:scale(0)}.dplayer-controller .dplayer-icons .dplayer-setting,.dplayer-controller .dplayer-icons .dplayer-subtitle-btn{display:inline-block;height:100%}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box{position:absolute;right:0;bottom:50px;transform:scale(0);width:150px;border-radius:2px;background:rgba(28,28,28,.9);padding:7px 0;transition:all .3s ease-in-out;overflow:hidden;z-index:2}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box>div{display:none}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box>div.dplayer-setting-origin-panel{display:block}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open{transform:scale(1)}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow{width:70px;text-align:center}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel{display:none}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel{display:block}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item{height:30px;padding:5px 10px;box-sizing:border-box;cursor:pointer;position:relative}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover{background-color:hsla(0,0%,100%,.1)}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku{padding:5px 0}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label{padding:0 10px;display:inline}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label{display:none}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap{display:inline-block}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label{display:none}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap{display:inline-block}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap{padding:0 10px;box-sizing:border-box;display:none;vertical-align:middle;height:100%;width:100%}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar{position:relative;top:8.5px;width:100%;height:3px;background:#fff;transition:all .3s ease-in-out}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner{position:absolute;bottom:0;left:0;height:100%;transition:all .1s ease;background:#aaa;will-change:width}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer;transition:all .3s ease-in-out;background:#aaa}.dplayer-controller .dplayer-icons .dplayer-full{display:inline-block;height:100%;position:relative}.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon{display:block}.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon{position:absolute;top:-30px;z-index:1;display:none}.dplayer-controller .dplayer-icons .dplayer-quality{position:relative;display:inline-block;height:100%;z-index:2}.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list,.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask{display:block}.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask{display:none;position:absolute;bottom:38px;left:-18px;width:80px;padding-bottom:12px}.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list{display:none;font-size:12px;width:80px;border-radius:2px;background:rgba(28,28,28,.9);padding:5px 0;transition:all .3s ease-in-out;overflow:hidden;color:#fff;text-align:center}.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item{height:25px;box-sizing:border-box;cursor:pointer;line-height:25px}.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover{background-color:hsla(0,0%,100%,.1)}.dplayer-controller .dplayer-icons .dplayer-tag{display:inline-block;height:100%}.dplayer-controller .dplayer-icons .dplayer-label{color:#eee;font-size:13px;display:inline-block;vertical-align:middle;white-space:nowrap}.dplayer-controller .dplayer-icons .dplayer-toggle{width:32px;height:20px;text-align:center;font-size:0;vertical-align:middle;position:absolute;top:5px;right:10px}.dplayer-controller .dplayer-icons .dplayer-toggle input{max-height:0;max-width:0;display:none}.dplayer-controller .dplayer-icons .dplayer-toggle input+label{display:inline-block;position:relative;box-shadow:inset 0 0 0 0 #dfdfdf;border:1px solid #dfdfdf;height:20px;width:32px;border-radius:10px;box-sizing:border-box;cursor:pointer;transition:.2s ease-in-out}.dplayer-controller .dplayer-icons .dplayer-toggle input+label:after,.dplayer-controller .dplayer-icons .dplayer-toggle input+label:before{content:"";position:absolute;display:block;height:18px;width:18px;top:0;left:0;border-radius:15px;transition:.2s ease-in-out}.dplayer-controller .dplayer-icons .dplayer-toggle input+label:after{background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.4)}.dplayer-controller .dplayer-icons .dplayer-toggle input:checked+label{border-color:hsla(0,0%,100%,.5)}.dplayer-controller .dplayer-icons .dplayer-toggle input:checked+label:before{width:30px;background:hsla(0,0%,100%,.5)}.dplayer-controller .dplayer-icons .dplayer-toggle input:checked+label:after{left:12px}.dplayer-mobile-play{display:none;width:50px;height:50px;border:none;background-color:transparent;outline:none;cursor:pointer;box-sizing:border-box;bottom:0;opacity:.8;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.dplayer-danmaku{position:absolute;left:0;right:0;top:0;bottom:0;font-size:22px;color:#fff}.dplayer-danmaku .dplayer-danmaku-item{display:inline-block;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;white-space:nowrap;text-shadow:.5px .5px .5px rgba(0,0,0,.5)}.dplayer-danmaku .dplayer-danmaku-item--demo{position:absolute;visibility:hidden}.dplayer-danmaku .dplayer-danmaku-right{position:absolute;right:0;transform:translateX(100%)}.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move{will-change:transform;-webkit-animation:danmaku 5s linear;animation:danmaku 5s linear;-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes danmaku{0%{transform:translateX(100%)}}@keyframes danmaku{0%{transform:translateX(100%)}}.dplayer-danmaku .dplayer-danmaku-bottom,.dplayer-danmaku .dplayer-danmaku-top{position:absolute;width:100%;text-align:center;visibility:hidden}.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move,.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move{will-change:visibility;-webkit-animation:danmaku-center 4s linear;animation:danmaku-center 4s linear;-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes danmaku-center{0%{visibility:visible}to{visibility:visible}}@keyframes danmaku-center{0%{visibility:visible}to{visibility:visible}}.dplayer-logo{pointer-events:none;position:absolute;left:20px;top:20px;max-width:50px;max-height:50px}.dplayer-logo img{max-width:100%;max-height:100%;background:none}.dplayer-menu{position:absolute;width:170px;border-radius:2px;background:rgba(28,28,28,.85);padding:5px 0;overflow:hidden;z-index:3;display:none}.dplayer-menu.dplayer-menu-show{display:block}.dplayer-menu .dplayer-menu-item{height:30px;box-sizing:border-box;cursor:pointer}.dplayer-menu .dplayer-menu-item:hover{background-color:hsla(0,0%,100%,.1)}.dplayer-menu .dplayer-menu-item a{padding:0 10px;line-height:30px;color:#eee;font-size:13px;display:inline-block;vertical-align:middle;width:100%;box-sizing:border-box;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.dplayer-menu .dplayer-menu-item a:hover{text-decoration:none}.dplayer-notice{opacity:0;position:absolute;bottom:60px;left:20px;font-size:14px;border-radius:2px;background:rgba(28,28,28,.9);padding:7px 20px;transition:all .3s ease-in-out;overflow:hidden;color:#fff;pointer-events:none}.dplayer-subtitle{position:absolute;bottom:40px;width:90%;left:5%;text-align:center;color:#fff;text-shadow:.5px .5px .5px rgba(0,0,0,.5);font-size:20px}.dplayer-subtitle.dplayer-subtitle-hide{display:none}.dplayer-mask{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;display:none}.dplayer-mask.dplayer-mask-show{display:block}.dplayer-video-wrap{position:relative;background:#000;font-size:0;width:100%;height:100%}.dplayer-video-wrap .dplayer-video{width:100%;height:100%;display:none}.dplayer-video-wrap .dplayer-video-current{display:block}.dplayer-video-wrap .dplayer-video-prepare{display:none}.dplayer-info-panel{position:absolute;top:10px;left:10px;width:400px;background:rgba(28,28,28,.8);padding:10px;color:#fff;font-size:12px;border-radius:2px}.dplayer-info-panel-hide{display:none}.dplayer-info-panel .dplayer-info-panel-close{cursor:pointer;position:absolute;right:10px;top:10px}.dplayer-info-panel .dplayer-info-panel-item>span{display:inline-block;vertical-align:middle;line-height:15px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.dplayer-info-panel .dplayer-info-panel-item-title{width:100px;text-align:right;margin-right:10px}.dplayer-info-panel .dplayer-info-panel-item-data{width:260px}',"",{version:3,sources:["webpack://./src/css/index.scss"],names:[],mappings:"AAAwD,2BAA2B,GAAG,0CAA0C,CAAC,GAAG,2CAA2C,CAAC,GAAG,2CAA2C,CAAC,GAAG,4CAA4C,CAAC,IAAI,0CAA0C,CAAC,IAAI,0CAA0C,CAAC,IAAI,2CAA2C,CAAC,IAAI,2CAA2C,CAAC,IAAI,0CAA0C,CAAC,IAAI,2CAA2C,CAAC,IAAI,0CAA0C,CAAC,IAAI,0CAA0C,CAAC,IAAI,wCAAwC,CAAC,IAAI,yCAAyC,CAAC,IAAI,0CAA0C,CAAC,IAAI,0CAA0C,CAAC,IAAI,0CAA0C,CAAC,IAAI,2CAA2C,CAAC,IAAI,2CAA2C,CAAC,IAAI,0CAA0C,CAAC,IAAI,2CAA2C,CAAC,IAAI,yCAAyC,CAAC,IAAI,2CAA2C,CAAC,IAAI,yCAAyC,CAAC,IAAI,wCAAwC,CAAC,IAAI,0CAA0C,CAAC,IAAI,2CAA2C,CAAC,IAAI,0CAA0C,CAAC,IAAI,yCAAyC,CAAC,IAAI,0CAA0C,CAAC,IAAI,0CAA0C,CAAC,IAAI,0CAA0C,CAAC,IAAI,0CAA0C,CAAC,IAAI,2CAA2C,CAAC,IAAI,yCAAyC,CAAC,IAAI,0CAA0C,CAAC,IAAI,yCAAyC,CAAC,IAAI,0CAA0C,CAAC,IAAI,0CAA0C,CAAC,IAAI,0CAA0C,CAAC,IAAI,yCAAyC,CAAC,IAAI,0CAA0C,CAAC,IAAI,4CAA4C,CAAC,IAAI,0CAA0C,CAAC,IAAI,0CAA0C,CAAC,IAAI,yCAAyC,CAAC,IAAI,yCAAyC,CAAC,IAAI,0CAA0C,CAAC,IAAI,2CAA2C,CAAC,MAAM,mCAAmC,CAAC,CAAC,mBAAmB,GAAG,0CAA0C,CAAC,GAAG,2CAA2C,CAAC,GAAG,2CAA2C,CAAC,GAAG,4CAA4C,CAAC,IAAI,0CAA0C,CAAC,IAAI,0CAA0C,CAAC,IAAI,2CAA2C,CAAC,IAAI,2CAA2C,CAAC,IAAI,0CAA0C,CAAC,IAAI,2CAA2C,CAAC,IAAI,0CAA0C,CAAC,IAAI,0CAA0C,CAAC,IAAI,wCAAwC,CAAC,IAAI,yCAAyC,CAAC,IAAI,0CAA0C,CAAC,IAAI,0CAA0C,CAAC,IAAI,0CAA0C,CAAC,IAAI,2CAA2C,CAAC,IAAI,2CAA2C,CAAC,IAAI,0CAA0C,CAAC,IAAI,2CAA2C,CAAC,IAAI,yCAAyC,CAAC,IAAI,2CAA2C,CAAC,IAAI,yCAAyC,CAAC,IAAI,wCAAwC,CAAC,IAAI,0CAA0C,CAAC,IAAI,2CAA2C,CAAC,IAAI,0CAA0C,CAAC,IAAI,yCAAyC,CAAC,IAAI,0CAA0C,CAAC,IAAI,0CAA0C,CAAC,IAAI,0CAA0C,CAAC,IAAI,0CAA0C,CAAC,IAAI,2CAA2C,CAAC,IAAI,yCAAyC,CAAC,IAAI,0CAA0C,CAAC,IAAI,yCAAyC,CAAC,IAAI,0CAA0C,CAAC,IAAI,0CAA0C,CAAC,IAAI,0CAA0C,CAAC,IAAI,yCAAyC,CAAC,IAAI,0CAA0C,CAAC,IAAI,4CAA4C,CAAC,IAAI,0CAA0C,CAAC,IAAI,0CAA0C,CAAC,IAAI,yCAAyC,CAAC,IAAI,yCAAyC,CAAC,IAAI,0CAA0C,CAAC,IAAI,2CAA2C,CAAC,MAAM,mCAAmC,CAAC,CAAC,SAAS,iBAAiB,CAAC,eAAe,CAAC,wBAAwB,CAAC,qBAAqB,CAAC,oBAAoB,CAAC,gBAAgB,CAAC,aAAa,CAAC,WAAW,sBAAsB,CAAC,aAAa,UAAU,CAAC,WAAW,CAAC,sCAAsC,SAAS,CAAC,6BAA6B,UAAU,CAAC,WAAW,CAAC,eAAe,CAAC,cAAc,CAAC,cAAc,CAAC,MAAM,CAAC,KAAK,CAAC,QAAQ,CAAC,SAAS,CAAC,sBAAsB,CAAC,mLAAmL,0CAA0C,CAAC,kCAAkC,CAAC,oCAAoC,CAAC,4BAA4B,CAAC,0FAA0F,mCAAmC,CAAC,2BAA2B,CAAC,oCAAoC,CAAC,4BAA4B,CAAC,qtBAAqtB,YAAY,CAAC,wCAAwC,cAAc,CAAC,qCAAqC,aAAa,CAAC,gEAAgE,oCAAoC,CAAC,4BAA4B,CAAC,yBAAyB,+FAA+F,SAAS,CAAC,2GAA2G,SAAS,CAAC,CAAC,+DAA+D,aAAa,CAAC,gLAAgL,mCAAmC,CAAC,2BAA2B,CAAC,iCAAiC,WAAW,CAAC,+GAA+G,SAAS,CAAC,0BAA0B,CAAC,+GAA+G,SAAS,CAAC,wBAAwB,cAAc,CAAC,cAAc,CAAC,MAAM,CAAC,KAAK,CAAC,oBAAoB,CAAC,qBAAqB,CAAC,0TAA0T,YAAY,CAAC,+FAA+F,eAAe,CAAC,oBAAoB,CAAC,+GAA+G,YAAY,CAAC,6CAA6C,aAAa,CAAC,4BAA4B,cAAc,CAAC,KAAK,CAAC,MAAM,CAAC,QAAQ,CAAC,SAAS,CAAC,sBAAsB,YAAY,CAAC,qBAAqB,iBAAiB,CAAC,4BAA4B,CAAC,0CAA0C,eAAe,CAAC,eAAe,iBAAiB,CAAC,MAAM,CAAC,OAAO,CAAC,KAAK,CAAC,QAAQ,CAAC,cAAc,CAAC,UAAU,CAAC,mBAAmB,CAAC,mCAAmC,iBAAiB,CAAC,OAAO,CAAC,QAAQ,CAAC,sBAAsB,CAAC,WAAW,CAAC,UAAU,CAAC,YAAY,CAAC,qBAAqB,CAAC,yBAAyB,CAAC,iBAAiB,CAAC,SAAS,CAAC,mBAAmB,CAAC,4DAA4D,uCAAuC,CAAC,+BAA+B,CAAC,8BAA8B,GAAG,SAAS,CAAC,kBAAkB,CAAC,GAAG,SAAS,CAAC,kBAAkB,CAAC,CAAC,sBAAsB,GAAG,SAAS,CAAC,kBAAkB,CAAC,GAAG,SAAS,CAAC,kBAAkB,CAAC,CAAC,mCAAmC,iBAAiB,CAAC,OAAO,CAAC,eAAe,CAAC,UAAU,CAAC,iBAAiB,CAAC,cAAc,CAAC,gBAAgB,CAAC,iDAAiD,CAAC,yCAAyC,CAAC,sCAAsC,YAAY,CAAC,iBAAiB,CAAC,OAAO,CAAC,QAAQ,CAAC,sBAAsB,CAAC,WAAW,CAAC,UAAU,CAAC,mBAAmB,CAAC,6DAA6D,YAAY,CAAC,4DAA4D,6DAA6D,CAAC,qDAAqD,CAAC,SAAS,CAAC,wBAAwB,CAAC,mFAAmF,2BAA2B,CAAC,mBAAmB,CAAC,mFAAmF,2BAA2B,CAAC,mBAAmB,CAAC,mFAAmF,2BAA2B,CAAC,mBAAmB,CAAC,mFAAmF,2BAA2B,CAAC,mBAAmB,CAAC,mFAAmF,2BAA2B,CAAC,mBAAmB,CAAC,mFAAmF,2BAA2B,CAAC,mBAAmB,CAAC,mFAAmF,2BAA2B,CAAC,mBAAmB,CAAC,6CAA6C,GAAG,UAAU,CAAC,oBAAoB,CAAC,IAAI,WAAW,CAAC,mBAAmB,CAAC,GAAG,WAAW,CAAC,oBAAoB,CAAC,CAAC,qCAAqC,GAAG,UAAU,CAAC,oBAAoB,CAAC,IAAI,WAAW,CAAC,mBAAmB,CAAC,GAAG,WAAW,CAAC,oBAAoB,CAAC,CAAC,yBAAyB,kSAAkS,CAAC,WAAW,CAAC,UAAU,CAAC,6CAA6C,iBAAiB,CAAC,QAAQ,CAAC,uBAAuB,CAAC,oBAAoB,MAAM,CAAC,OAAO,CAAC,WAAW,CAAC,cAAc,CAAC,wBAAwB,CAAC,qBAAqB,CAAC,oBAAoB,CAAC,gBAAgB,CAAC,8DAA8D,YAAY,CAAC,8EAA8E,aAAa,CAAC,sCAAsC,aAAa,CAAC,cAAc,CAAC,iBAAiB,CAAC,WAAW,CAAC,uBAAuB,CAAC,UAAU,CAAC,wFAAwF,kBAAkB,CAAC,+DAA+D,aAAa,CAAC,SAAS,CAAC,0BAA0B,CAAC,OAAO,CAAC,UAAU,CAAC,yDAAyD,UAAU,CAAC,iBAAiB,CAAC,OAAO,CAAC,SAAS,CAAC,UAAU,CAAC,iBAAiB,CAAC,qBAAqB,CAAC,iBAAiB,CAAC,0BAA0B,CAAC,8BAA8B,CAAC,uFAAuF,aAAa,CAAC,qKAAqK,SAAS,CAAC,iFAAiF,YAAY,CAAC,iBAAiB,CAAC,QAAQ,CAAC,SAAS,CAAC,eAAe,CAAC,gCAAgC,CAAC,UAAU,CAAC,iBAAiB,CAAC,cAAc,CAAC,kBAAkB,CAAC,0BAA0B,CAAC,2DAA2D,iBAAiB,CAAC,eAAe,CAAC,mBAAmB,CAAC,YAAY,CAAC,4BAA4B,CAAC,kEAAkE,iBAAiB,CAAC,UAAU,CAAC,WAAW,CAAC,SAAS,CAAC,mBAAmB,CAAC,wDAAwD,iBAAiB,CAAC,MAAM,CAAC,SAAS,CAAC,iBAAiB,CAAC,eAAe,CAAC,gCAAgC,CAAC,UAAU,CAAC,cAAc,CAAC,iBAAiB,CAAC,SAAS,CAAC,kCAAkC,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,SAAS,CAAC,mBAAmB,CAAC,+DAA+D,SAAS,CAAC,mDAAmD,iBAAiB,CAAC,UAAU,CAAC,UAAU,CAAC,6BAA6B,CAAC,cAAc,CAAC,mEAAmE,6BAA6B,CAAC,uBAAuB,CAAC,sIAAsI,iBAAiB,CAAC,MAAM,CAAC,KAAK,CAAC,QAAQ,CAAC,UAAU,CAAC,iBAAiB,CAAC,kFAAkF,iBAAiB,CAAC,KAAK,CAAC,SAAS,CAAC,eAAe,CAAC,kBAAkB,CAAC,WAAW,CAAC,UAAU,CAAC,iBAAiB,CAAC,cAAc,CAAC,8BAA8B,CAAC,kBAAkB,CAAC,mCAAmC,WAAW,CAAC,iBAAiB,CAAC,QAAQ,CAAC,mDAAmD,YAAY,CAAC,iBAAiB,CAAC,8BAA8B,CAAC,SAAS,CAAC,WAAW,CAAC,QAAQ,CAAC,SAAS,CAAC,UAAU,CAAC,UAAU,CAAC,iEAAiE,WAAW,CAAC,6EAA6E,iBAAiB,CAAC,MAAM,CAAC,KAAK,CAAC,sEAAsE,iBAAiB,CAAC,OAAO,CAAC,KAAK,CAAC,4EAA4E,iBAAiB,CAAC,4BAA4B,CAAC,WAAW,CAAC,MAAM,CAAC,kCAAkC,CAAC,iBAAiB,CAAC,sBAAsB,CAAC,cAAc,CAAC,WAAW,CAAC,8BAA8B,CAAC,kBAAkB,CAAC,qGAAqG,kBAAkB,CAAC,8FAA8F,YAAY,CAAC,kFAAkF,cAAc,CAAC,uGAAuG,cAAc,CAAC,UAAU,CAAC,gBAAgB,CAAC,sGAAsG,WAAW,CAAC,iIAAiI,iBAAiB,CAAC,8HAA8H,yBAAyB,CAAC,8HAA8H,yBAAyB,CAAC,2GAA2G,SAAS,CAAC,eAAe,CAAC,gBAAgB,CAAC,oBAAoB,CAAC,cAAc,CAAC,UAAU,CAAC,qBAAqB,CAAC,iBAAiB,CAAC,qBAAqB,CAAC,iBAAiB,CAAC,cAAc,CAAC,yHAAyH,kBAAkB,CAAC,aAAa,CAAC,uGAAuG,WAAW,CAAC,6GAA6G,WAAW,CAAC,WAAW,CAAC,oBAAoB,CAAC,4GAA4G,UAAU,CAAC,WAAW,CAAC,oBAAoB,CAAC,iBAAiB,CAAC,qBAAqB,CAAC,cAAc,CAAC,kHAAkH,iDAAiD,CAAC,yCAAyC,CAAC,sEAAsE,YAAY,CAAC,WAAW,CAAC,gBAAgB,CAAC,cAAc,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,eAAe,CAAC,QAAQ,CAAC,WAAW,CAAC,qBAAqB,CAAC,UAAU,CAAC,UAAU,CAAC,wFAAwF,UAAU,CAAC,UAAU,CAAC,4FAA4F,UAAU,CAAC,UAAU,CAAC,mFAAmF,UAAU,CAAC,UAAU,CAAC,iFAAiF,YAAY,CAAC,oEAAoE,WAAW,CAAC,uDAAuD,UAAU,CAAC,qEAAqE,WAAW,CAAC,wGAAwG,gBAAgB,CAAC,UAAU,CAAC,kCAAkC,CAAC,qBAAqB,CAAC,cAAc,CAAC,cAAc,CAAC,qDAAqD,oBAAoB,CAAC,SAAS,CAAC,UAAU,CAAC,iBAAiB,CAAC,gBAAgB,CAAC,UAAU,CAAC,iBAAiB,CAAC,iDAAiD,UAAU,CAAC,WAAW,CAAC,WAAW,CAAC,4BAA4B,CAAC,YAAY,CAAC,cAAc,CAAC,qBAAqB,CAAC,qBAAqB,CAAC,oBAAoB,CAAC,uEAAuE,8BAA8B,CAAC,UAAU,CAAC,6EAA6E,SAAS,CAAC,sEAAsE,UAAU,CAAC,UAAU,CAAC,gBAAgB,CAAC,cAAc,CAAC,kEAAkE,oBAAoB,CAAC,sEAAsE,iBAAiB,CAAC,qEAAqE,UAAU,CAAC,mDAAmD,iBAAiB,CAAC,oBAAoB,CAAC,cAAc,CAAC,WAAW,CAAC,sGAAsG,UAAU,CAAC,+IAA+I,kBAAkB,CAAC,sHAAsH,UAAU,CAAC,+JAA+J,kBAAkB,CAAC,4EAA4E,oBAAoB,CAAC,oBAAoB,CAAC,qBAAqB,CAAC,WAAW,CAAC,gGAAgG,iBAAiB,CAAC,QAAQ,CAAC,OAAO,CAAC,UAAU,CAAC,eAAe,CAAC,8BAA8B,CAAC,0HAA0H,iBAAiB,CAAC,QAAQ,CAAC,MAAM,CAAC,WAAW,CAAC,uBAAuB,CAAC,iBAAiB,CAAC,yIAAyI,iBAAiB,CAAC,KAAK,CAAC,SAAS,CAAC,eAAe,CAAC,kBAAkB,CAAC,WAAW,CAAC,UAAU,CAAC,iBAAiB,CAAC,cAAc,CAAC,8BAA8B,CAAC,kBAAkB,CAAC,6GAA6G,oBAAoB,CAAC,WAAW,CAAC,yEAAyE,iBAAiB,CAAC,OAAO,CAAC,WAAW,CAAC,kBAAkB,CAAC,WAAW,CAAC,iBAAiB,CAAC,4BAA4B,CAAC,aAAa,CAAC,8BAA8B,CAAC,eAAe,CAAC,SAAS,CAAC,6EAA6E,YAAY,CAAC,0GAA0G,aAAa,CAAC,kGAAkG,kBAAkB,CAAC,oGAAoG,UAAU,CAAC,iBAAiB,CAAC,iIAAiI,YAAY,CAAC,gIAAgI,aAAa,CAAC,0JAA0J,WAAW,CAAC,gBAAgB,CAAC,qBAAqB,CAAC,cAAc,CAAC,iBAAiB,CAAC,sKAAsK,mCAAmC,CAAC,6EAA6E,aAAa,CAAC,4FAA4F,cAAc,CAAC,cAAc,CAAC,kGAAkG,YAAY,CAAC,6GAA6G,oBAAoB,CAAC,2HAA2H,YAAY,CAAC,sIAAsI,oBAAoB,CAAC,uGAAuG,cAAc,CAAC,qBAAqB,CAAC,YAAY,CAAC,qBAAqB,CAAC,WAAW,CAAC,UAAU,CAAC,4HAA4H,iBAAiB,CAAC,SAAS,CAAC,UAAU,CAAC,UAAU,CAAC,eAAe,CAAC,8BAA8B,CAAC,uJAAuJ,iBAAiB,CAAC,QAAQ,CAAC,MAAM,CAAC,WAAW,CAAC,uBAAuB,CAAC,eAAe,CAAC,iBAAiB,CAAC,sKAAsK,iBAAiB,CAAC,KAAK,CAAC,SAAS,CAAC,eAAe,CAAC,kBAAkB,CAAC,WAAW,CAAC,UAAU,CAAC,iBAAiB,CAAC,cAAc,CAAC,8BAA8B,CAAC,eAAe,CAAC,iDAAiD,oBAAoB,CAAC,WAAW,CAAC,iBAAiB,CAAC,6EAA6E,aAAa,CAAC,uEAAuE,iBAAiB,CAAC,SAAS,CAAC,SAAS,CAAC,YAAY,CAAC,oDAAoD,iBAAiB,CAAC,oBAAoB,CAAC,WAAW,CAAC,SAAS,CAAC,gKAAgK,aAAa,CAAC,0EAA0E,YAAY,CAAC,iBAAiB,CAAC,WAAW,CAAC,UAAU,CAAC,UAAU,CAAC,mBAAmB,CAAC,0EAA0E,YAAY,CAAC,cAAc,CAAC,UAAU,CAAC,iBAAiB,CAAC,4BAA4B,CAAC,aAAa,CAAC,8BAA8B,CAAC,eAAe,CAAC,UAAU,CAAC,iBAAiB,CAAC,0EAA0E,WAAW,CAAC,qBAAqB,CAAC,cAAc,CAAC,gBAAgB,CAAC,gFAAgF,mCAAmC,CAAC,gDAAgD,oBAAoB,CAAC,WAAW,CAAC,kDAAkD,UAAU,CAAC,cAAc,CAAC,oBAAoB,CAAC,qBAAqB,CAAC,kBAAkB,CAAC,mDAAmD,UAAU,CAAC,WAAW,CAAC,iBAAiB,CAAC,WAAW,CAAC,qBAAqB,CAAC,iBAAiB,CAAC,OAAO,CAAC,UAAU,CAAC,yDAAyD,YAAY,CAAC,WAAW,CAAC,YAAY,CAAC,+DAA+D,oBAAoB,CAAC,iBAAiB,CAAC,gCAAgC,CAAC,wBAAwB,CAAC,WAAW,CAAC,UAAU,CAAC,kBAAkB,CAAC,qBAAqB,CAAC,cAAc,CAAC,0BAA0B,CAAC,2IAA2I,UAAU,CAAC,iBAAiB,CAAC,aAAa,CAAC,WAAW,CAAC,UAAU,CAAC,KAAK,CAAC,MAAM,CAAC,kBAAkB,CAAC,0BAA0B,CAAC,qEAAqE,eAAe,CAAC,mCAAmC,CAAC,uEAAuE,+BAA+B,CAAC,8EAA8E,UAAU,CAAC,6BAA6B,CAAC,6EAA6E,SAAS,CAAC,qBAAqB,YAAY,CAAC,UAAU,CAAC,WAAW,CAAC,WAAW,CAAC,4BAA4B,CAAC,YAAY,CAAC,cAAc,CAAC,qBAAqB,CAAC,QAAQ,CAAC,UAAU,CAAC,iBAAiB,CAAC,QAAQ,CAAC,OAAO,CAAC,8BAA8B,CAAC,iBAAiB,iBAAiB,CAAC,MAAM,CAAC,OAAO,CAAC,KAAK,CAAC,QAAQ,CAAC,cAAc,CAAC,UAAU,CAAC,uCAAuC,oBAAoB,CAAC,mBAAmB,CAAC,wBAAwB,CAAC,qBAAqB,CAAC,oBAAoB,CAAC,gBAAgB,CAAC,cAAc,CAAC,kBAAkB,CAAC,yCAAyC,CAAC,6CAA6C,iBAAiB,CAAC,iBAAiB,CAAC,wCAAwC,iBAAiB,CAAC,OAAO,CAAC,0BAA0B,CAAC,6DAA6D,qBAAqB,CAAC,mCAAmC,CAAC,2BAA2B,CAAC,mCAAmC,CAAC,2BAA2B,CAAC,2BAA2B,GAAG,0BAA0B,CAAC,CAAC,mBAAmB,GAAG,0BAA0B,CAAC,CAAC,+EAA+E,iBAAiB,CAAC,UAAU,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,yHAAyH,sBAAsB,CAAC,0CAA0C,CAAC,kCAAkC,CAAC,mCAAmC,CAAC,2BAA2B,CAAC,kCAAkC,GAAG,kBAAkB,CAAC,GAAG,kBAAkB,CAAC,CAAC,0BAA0B,GAAG,kBAAkB,CAAC,GAAG,kBAAkB,CAAC,CAAC,cAAc,mBAAmB,CAAC,iBAAiB,CAAC,SAAS,CAAC,QAAQ,CAAC,cAAc,CAAC,eAAe,CAAC,kBAAkB,cAAc,CAAC,eAAe,CAAC,eAAe,CAAC,cAAc,iBAAiB,CAAC,WAAW,CAAC,iBAAiB,CAAC,6BAA6B,CAAC,aAAa,CAAC,eAAe,CAAC,SAAS,CAAC,YAAY,CAAC,gCAAgC,aAAa,CAAC,iCAAiC,WAAW,CAAC,qBAAqB,CAAC,cAAc,CAAC,uCAAuC,mCAAmC,CAAC,mCAAmC,cAAc,CAAC,gBAAgB,CAAC,UAAU,CAAC,cAAc,CAAC,oBAAoB,CAAC,qBAAqB,CAAC,UAAU,CAAC,qBAAqB,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,eAAe,CAAC,yCAAyC,oBAAoB,CAAC,gBAAgB,SAAS,CAAC,iBAAiB,CAAC,WAAW,CAAC,SAAS,CAAC,cAAc,CAAC,iBAAiB,CAAC,4BAA4B,CAAC,gBAAgB,CAAC,8BAA8B,CAAC,eAAe,CAAC,UAAU,CAAC,mBAAmB,CAAC,kBAAkB,iBAAiB,CAAC,WAAW,CAAC,SAAS,CAAC,OAAO,CAAC,iBAAiB,CAAC,UAAU,CAAC,yCAAyC,CAAC,cAAc,CAAC,wCAAwC,YAAY,CAAC,cAAc,iBAAiB,CAAC,KAAK,CAAC,QAAQ,CAAC,MAAM,CAAC,OAAO,CAAC,SAAS,CAAC,YAAY,CAAC,gCAAgC,aAAa,CAAC,oBAAoB,iBAAiB,CAAC,eAAe,CAAC,WAAW,CAAC,UAAU,CAAC,WAAW,CAAC,mCAAmC,UAAU,CAAC,WAAW,CAAC,YAAY,CAAC,2CAA2C,aAAa,CAAC,2CAA2C,YAAY,CAAC,oBAAoB,iBAAiB,CAAC,QAAQ,CAAC,SAAS,CAAC,WAAW,CAAC,4BAA4B,CAAC,YAAY,CAAC,UAAU,CAAC,cAAc,CAAC,iBAAiB,CAAC,yBAAyB,YAAY,CAAC,8CAA8C,cAAc,CAAC,iBAAiB,CAAC,UAAU,CAAC,QAAQ,CAAC,kDAAkD,oBAAoB,CAAC,qBAAqB,CAAC,gBAAgB,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,eAAe,CAAC,mDAAmD,WAAW,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,kDAAkD,WAAW",sourcesContent:['@import url(../../node_modules/balloon-css/balloon.css);@-webkit-keyframes my-face{2%{transform:translateY(1.5px) rotate(1.5deg)}4%{transform:translateY(-1.5px) rotate(-.5deg)}6%{transform:translateY(1.5px) rotate(-1.5deg)}8%{transform:translateY(-1.5px) rotate(-1.5deg)}10%{transform:translateY(2.5px) rotate(1.5deg)}12%{transform:translateY(-.5px) rotate(1.5deg)}14%{transform:translateY(-1.5px) rotate(1.5deg)}16%{transform:translateY(-.5px) rotate(-1.5deg)}18%{transform:translateY(.5px) rotate(-1.5deg)}20%{transform:translateY(-1.5px) rotate(2.5deg)}22%{transform:translateY(.5px) rotate(-1.5deg)}24%{transform:translateY(1.5px) rotate(1.5deg)}26%{transform:translateY(.5px) rotate(.5deg)}28%{transform:translateY(.5px) rotate(1.5deg)}30%{transform:translateY(-.5px) rotate(2.5deg)}32%{transform:translateY(1.5px) rotate(-.5deg)}34%{transform:translateY(1.5px) rotate(-.5deg)}36%{transform:translateY(-1.5px) rotate(2.5deg)}38%{transform:translateY(1.5px) rotate(-1.5deg)}40%{transform:translateY(-.5px) rotate(2.5deg)}42%{transform:translateY(2.5px) rotate(-1.5deg)}44%{transform:translateY(1.5px) rotate(.5deg)}46%{transform:translateY(-1.5px) rotate(2.5deg)}48%{transform:translateY(-.5px) rotate(.5deg)}50%{transform:translateY(.5px) rotate(.5deg)}52%{transform:translateY(2.5px) rotate(2.5deg)}54%{transform:translateY(-1.5px) rotate(1.5deg)}56%{transform:translateY(2.5px) rotate(2.5deg)}58%{transform:translateY(.5px) rotate(2.5deg)}60%{transform:translateY(2.5px) rotate(2.5deg)}62%{transform:translateY(-.5px) rotate(2.5deg)}64%{transform:translateY(-.5px) rotate(1.5deg)}66%{transform:translateY(1.5px) rotate(-.5deg)}68%{transform:translateY(-1.5px) rotate(-.5deg)}70%{transform:translateY(1.5px) rotate(.5deg)}72%{transform:translateY(2.5px) rotate(1.5deg)}74%{transform:translateY(-.5px) rotate(.5deg)}76%{transform:translateY(-.5px) rotate(2.5deg)}78%{transform:translateY(-.5px) rotate(1.5deg)}80%{transform:translateY(1.5px) rotate(1.5deg)}82%{transform:translateY(-.5px) rotate(.5deg)}84%{transform:translateY(1.5px) rotate(2.5deg)}86%{transform:translateY(-1.5px) rotate(-1.5deg)}88%{transform:translateY(-.5px) rotate(2.5deg)}90%{transform:translateY(2.5px) rotate(-.5deg)}92%{transform:translateY(.5px) rotate(-.5deg)}94%{transform:translateY(2.5px) rotate(.5deg)}96%{transform:translateY(-.5px) rotate(1.5deg)}98%{transform:translateY(-1.5px) rotate(-.5deg)}0%,to{transform:translate(0) rotate(0deg)}}@keyframes my-face{2%{transform:translateY(1.5px) rotate(1.5deg)}4%{transform:translateY(-1.5px) rotate(-.5deg)}6%{transform:translateY(1.5px) rotate(-1.5deg)}8%{transform:translateY(-1.5px) rotate(-1.5deg)}10%{transform:translateY(2.5px) rotate(1.5deg)}12%{transform:translateY(-.5px) rotate(1.5deg)}14%{transform:translateY(-1.5px) rotate(1.5deg)}16%{transform:translateY(-.5px) rotate(-1.5deg)}18%{transform:translateY(.5px) rotate(-1.5deg)}20%{transform:translateY(-1.5px) rotate(2.5deg)}22%{transform:translateY(.5px) rotate(-1.5deg)}24%{transform:translateY(1.5px) rotate(1.5deg)}26%{transform:translateY(.5px) rotate(.5deg)}28%{transform:translateY(.5px) rotate(1.5deg)}30%{transform:translateY(-.5px) rotate(2.5deg)}32%{transform:translateY(1.5px) rotate(-.5deg)}34%{transform:translateY(1.5px) rotate(-.5deg)}36%{transform:translateY(-1.5px) rotate(2.5deg)}38%{transform:translateY(1.5px) rotate(-1.5deg)}40%{transform:translateY(-.5px) rotate(2.5deg)}42%{transform:translateY(2.5px) rotate(-1.5deg)}44%{transform:translateY(1.5px) rotate(.5deg)}46%{transform:translateY(-1.5px) rotate(2.5deg)}48%{transform:translateY(-.5px) rotate(.5deg)}50%{transform:translateY(.5px) rotate(.5deg)}52%{transform:translateY(2.5px) rotate(2.5deg)}54%{transform:translateY(-1.5px) rotate(1.5deg)}56%{transform:translateY(2.5px) rotate(2.5deg)}58%{transform:translateY(.5px) rotate(2.5deg)}60%{transform:translateY(2.5px) rotate(2.5deg)}62%{transform:translateY(-.5px) rotate(2.5deg)}64%{transform:translateY(-.5px) rotate(1.5deg)}66%{transform:translateY(1.5px) rotate(-.5deg)}68%{transform:translateY(-1.5px) rotate(-.5deg)}70%{transform:translateY(1.5px) rotate(.5deg)}72%{transform:translateY(2.5px) rotate(1.5deg)}74%{transform:translateY(-.5px) rotate(.5deg)}76%{transform:translateY(-.5px) rotate(2.5deg)}78%{transform:translateY(-.5px) rotate(1.5deg)}80%{transform:translateY(1.5px) rotate(1.5deg)}82%{transform:translateY(-.5px) rotate(.5deg)}84%{transform:translateY(1.5px) rotate(2.5deg)}86%{transform:translateY(-1.5px) rotate(-1.5deg)}88%{transform:translateY(-.5px) rotate(2.5deg)}90%{transform:translateY(2.5px) rotate(-.5deg)}92%{transform:translateY(.5px) rotate(-.5deg)}94%{transform:translateY(2.5px) rotate(.5deg)}96%{transform:translateY(-.5px) rotate(1.5deg)}98%{transform:translateY(-1.5px) rotate(-.5deg)}0%,to{transform:translate(0) rotate(0deg)}}.dplayer{position:relative;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:1}.dplayer *{box-sizing:content-box}.dplayer svg{width:100%;height:100%}.dplayer svg circle,.dplayer svg path{fill:#fff}.dplayer:-webkit-full-screen{width:100%;height:100%;background:#000;position:fixed;z-index:100000;left:0;top:0;margin:0;padding:0;transform:translate(0)}.dplayer:-webkit-full-screen .dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move,.dplayer:-webkit-full-screen .dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move{-webkit-animation:danmaku-center 6s linear;animation:danmaku-center 6s linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.dplayer:-webkit-full-screen .dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move{-webkit-animation:danmaku 8s linear;animation:danmaku 8s linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.dplayer.dplayer-live .dplayer-bar-wrap,.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting,.dplayer.dplayer-live .dplayer-setting-loop,.dplayer.dplayer-live .dplayer-setting-speed,.dplayer.dplayer-live .dplayer-time,.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit,.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-tag,.dplayer.dplayer-no-danmaku .dplayer-danmaku{display:none}.dplayer.dplayer-arrow .dplayer-danmaku{font-size:18px}.dplayer.dplayer-arrow .dplayer-icon{margin:0 -3px}.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move{-webkit-animation-play-state:running;animation-play-state:running}@media (min-width:900px){.dplayer.dplayer-playing .dplayer-controller,.dplayer.dplayer-playing .dplayer-controller-mask{opacity:0}.dplayer.dplayer-playing:hover .dplayer-controller,.dplayer.dplayer-playing:hover .dplayer-controller-mask{opacity:1}}.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon{display:block}.dplayer.dplayer-loading .dplayer-danmaku,.dplayer.dplayer-loading .dplayer-danmaku-move,.dplayer.dplayer-paused .dplayer-danmaku,.dplayer.dplayer-paused .dplayer-danmaku-move{-webkit-animation-play-state:paused;animation-play-state:paused}.dplayer.dplayer-hide-controller{cursor:none}.dplayer.dplayer-hide-controller .dplayer-controller,.dplayer.dplayer-hide-controller .dplayer-controller-mask{opacity:0;transform:translateY(100%)}.dplayer.dplayer-show-controller .dplayer-controller,.dplayer.dplayer-show-controller .dplayer-controller-mask{opacity:1}.dplayer.dplayer-fulled{position:fixed;z-index:100000;left:0;top:0;width:100%!important;height:100%!important}.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon,.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume{display:none}.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon{position:static;display:inline-block}.dplayer.dplayer-mobile .dplayer-bar-time,.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play{display:none}.dplayer.dplayer-mobile .dplayer-mobile-play{display:block}.dplayer-web-fullscreen-fix{position:fixed;top:0;left:0;margin:0;padding:0}[data-balloon]:before{display:none}[data-balloon]:after{padding:.3em .7em;background:rgba(17,17,17,.7)}[data-balloon][data-balloon-pos=up]:after{margin-bottom:0}.dplayer-bezel{position:absolute;left:0;right:0;top:0;bottom:0;font-size:22px;color:#fff;pointer-events:none}.dplayer-bezel .dplayer-bezel-icon{position:absolute;top:50%;left:50%;margin:-26px 0 0 -26px;height:52px;width:52px;padding:12px;box-sizing:border-box;background:rgba(0,0,0,.5);border-radius:50%;opacity:0;pointer-events:none}.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition{-webkit-animation:bezel-hide .5s linear;animation:bezel-hide .5s linear}@-webkit-keyframes bezel-hide{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(2)}}@keyframes bezel-hide{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(2)}}.dplayer-bezel .dplayer-danloading{position:absolute;top:50%;margin-top:-7px;width:100%;text-align:center;font-size:14px;line-height:14px;-webkit-animation:my-face 5s ease-in-out infinite;animation:my-face 5s ease-in-out infinite}.dplayer-bezel .diplayer-loading-icon{display:none;position:absolute;top:50%;left:50%;margin:-18px 0 0 -18px;height:36px;width:36px;pointer-events:none}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide{display:none}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot{-webkit-animation:diplayer-loading-dot-fade .8s ease infinite;animation:diplayer-loading-dot-fade .8s ease infinite;opacity:0;transform-origin:4px 4px}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7{-webkit-animation-delay:.7s;animation-delay:.7s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6{-webkit-animation-delay:.6s;animation-delay:.6s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5{-webkit-animation-delay:.5s;animation-delay:.5s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4{-webkit-animation-delay:.4s;animation-delay:.4s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3{-webkit-animation-delay:.3s;animation-delay:.3s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2{-webkit-animation-delay:.2s;animation-delay:.2s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1{-webkit-animation-delay:.1s;animation-delay:.1s}@-webkit-keyframes diplayer-loading-dot-fade{0%{opacity:.7;transform:scale(1.2)}50%{opacity:.25;transform:scale(.9)}to{opacity:.25;transform:scale(.85)}}@keyframes diplayer-loading-dot-fade{0%{opacity:.7;transform:scale(1.2)}50%{opacity:.25;transform:scale(.9)}to{opacity:.25;transform:scale(.85)}}.dplayer-controller-mask{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;height:98px;width:100%}.dplayer-controller,.dplayer-controller-mask{position:absolute;bottom:0;transition:all .3s ease}.dplayer-controller{left:0;right:0;height:41px;padding:0 20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dplayer-controller.dplayer-controller-comment .dplayer-icons{display:none}.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-tag-box{display:block}.dplayer-controller .dplayer-bar-wrap{padding:5px 0;cursor:pointer;position:absolute;bottom:33px;width:calc(100% - 40px);height:3px}.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb{transform:scale(1)}.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight{display:block;width:8px;transform:translateX(-4px);top:4px;height:40%}.dplayer-controller .dplayer-bar-wrap .dplayer-highlight{z-index:12;position:absolute;top:5px;width:6px;height:20%;border-radius:6px;background-color:#fff;text-align:center;transform:translateX(-3px);transition:all .2s ease-in-out}.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text{display:block}.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover~.dplayer-bar-preview,.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover~.dplayer-bar-time{opacity:0}.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text{display:none;position:absolute;left:50%;top:-24px;padding:5px 8px;background-color:rgba(0,0,0,.62);color:#fff;border-radius:4px;font-size:12px;white-space:nowrap;transform:translateX(-50%)}.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview{position:absolute;background:#fff;pointer-events:none;display:none;background-size:16000px 100%}.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas{position:absolute;width:100%;height:100%;z-index:1;pointer-events:none}.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time{position:absolute;left:0;top:-20px;border-radius:4px;padding:5px 7px;background-color:rgba(0,0,0,.62);color:#fff;font-size:12px;text-align:center;opacity:1;transition:opacity .1s ease-in-out;word-wrap:normal;word-break:normal;z-index:2;pointer-events:none}.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden{opacity:0}.dplayer-controller .dplayer-bar-wrap .dplayer-bar{position:relative;height:3px;width:100%;background:hsla(0,0%,100%,.2);cursor:pointer}.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded{background:hsla(0,0%,100%,.4);transition:all .5s ease}.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded,.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played{position:absolute;left:0;top:0;bottom:0;height:3px;will-change:width}.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer;transition:all .3s ease-in-out;transform:scale(0)}.dplayer-controller .dplayer-icons{height:38px;position:absolute;bottom:0}.dplayer-controller .dplayer-icons.dplayer-tag-box{display:none;position:absolute;transition:all .3s ease-in-out;z-index:2;height:38px;bottom:0;left:20px;right:20px;color:#fff}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-icon{padding:7px}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-icon{position:absolute;left:0;top:0}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-send-icon{position:absolute;right:0;top:0}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box{position:absolute;background:rgba(28,28,28,.9);bottom:41px;left:0;box-shadow:0 0 25px rgba(0,0,0,.3);border-radius:4px;padding:10px 10px 16px;font-size:14px;width:204px;transition:all .3s ease-in-out;transform:scale(0)}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box.dplayer-tag-setting-open{transform:scale(1)}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box input[type=radio]{display:none}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box label{cursor:pointer}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box .dplayer-tag-setting-title{font-size:13px;color:#fff;line-height:30px}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box .dplayer-tag-setting-type{font-size:0}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box .dplayer-tag-setting-type .dplayer-tag-setting-title{margin-bottom:6px}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box .dplayer-tag-setting-type label:nth-child(2) span{border-radius:4px 0 0 4px}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box .dplayer-tag-setting-type label:nth-child(4) span{border-radius:0 4px 4px 0}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box .dplayer-tag-setting-type span{width:33%;padding:4px 6px;line-height:16px;display:inline-block;font-size:12px;color:#fff;border:1px solid #fff;margin-right:-1px;box-sizing:border-box;text-align:center;cursor:pointer}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box .dplayer-tag-setting-type input:checked+span{background:#e4e4e6;color:#1c1c1c}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box .dplayer-tag-setting-color{font-size:0}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box .dplayer-tag-setting-color label{font-size:0;padding:6px;display:inline-block}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box .dplayer-tag-setting-color span{width:22px;height:22px;display:inline-block;border-radius:50%;box-sizing:border-box;cursor:pointer}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-setting-box .dplayer-tag-setting-color span:hover{-webkit-animation:my-face 5s ease-in-out infinite;animation:my-face 5s ease-in-out infinite}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-input{outline:none;border:none;padding:8px 31px;font-size:14px;line-height:18px;text-align:center;border-radius:4px;background:none;margin:0;height:100%;box-sizing:border-box;width:100%;color:#fff}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-input::-moz-placeholder{color:#fff;opacity:.8}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-input:-ms-input-placeholder{color:#fff;opacity:.8}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-input::placeholder{color:#fff;opacity:.8}.dplayer-controller .dplayer-icons.dplayer-tag-box .dplayer-tag-input::-ms-clear{display:none}.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon{padding:7px}.dplayer-controller .dplayer-icons.dplayer-icons-right{right:20px}.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon{padding:8px}.dplayer-controller .dplayer-icons .dplayer-live-badge,.dplayer-controller .dplayer-icons .dplayer-time{line-height:38px;color:#eee;text-shadow:0 0 2px rgba(0,0,0,.5);vertical-align:middle;font-size:13px;cursor:default}.dplayer-controller .dplayer-icons .dplayer-live-dot{display:inline-block;width:6px;height:6px;vertical-align:4%;margin-right:5px;content:"";border-radius:6px}.dplayer-controller .dplayer-icons .dplayer-icon{width:40px;height:100%;border:none;background-color:transparent;outline:none;cursor:pointer;vertical-align:middle;box-sizing:border-box;display:inline-block}.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content{transition:all .2s ease-in-out;opacity:.8}.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content{opacity:1}.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon{color:#fff;width:auto;line-height:22px;font-size:14px}.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-tag-icon{padding:10px 9px 9px}.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon{padding-top:8.5px}.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon{width:43px}.dplayer-controller .dplayer-icons .dplayer-volume{position:relative;display:inline-block;cursor:pointer;height:100%}.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar{width:45px}.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb{transform:scale(1)}.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar{width:45px}.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb{transform:scale(1)}.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap{display:inline-block;margin:0 10px 0 -5px;vertical-align:middle;height:100%}.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar{position:relative;top:17px;width:0;height:3px;background:#aaa;transition:all .3s ease-in-out}.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner{position:absolute;bottom:0;left:0;height:100%;transition:all .1s ease;will-change:width}.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer;transition:all .3s ease-in-out;transform:scale(0)}.dplayer-controller .dplayer-icons .dplayer-setting,.dplayer-controller .dplayer-icons .dplayer-subtitle-btn{display:inline-block;height:100%}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box{position:absolute;right:0;bottom:50px;transform:scale(0);width:150px;border-radius:2px;background:rgba(28,28,28,.9);padding:7px 0;transition:all .3s ease-in-out;overflow:hidden;z-index:2}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box>div{display:none}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box>div.dplayer-setting-origin-panel{display:block}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open{transform:scale(1)}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow{width:70px;text-align:center}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel{display:none}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel{display:block}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item{height:30px;padding:5px 10px;box-sizing:border-box;cursor:pointer;position:relative}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover{background-color:hsla(0,0%,100%,.1)}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku{padding:5px 0}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label{padding:0 10px;display:inline}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label{display:none}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap{display:inline-block}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label{display:none}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap{display:inline-block}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap{padding:0 10px;box-sizing:border-box;display:none;vertical-align:middle;height:100%;width:100%}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar{position:relative;top:8.5px;width:100%;height:3px;background:#fff;transition:all .3s ease-in-out}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner{position:absolute;bottom:0;left:0;height:100%;transition:all .1s ease;background:#aaa;will-change:width}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer;transition:all .3s ease-in-out;background:#aaa}.dplayer-controller .dplayer-icons .dplayer-full{display:inline-block;height:100%;position:relative}.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon{display:block}.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon{position:absolute;top:-30px;z-index:1;display:none}.dplayer-controller .dplayer-icons .dplayer-quality{position:relative;display:inline-block;height:100%;z-index:2}.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list,.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask{display:block}.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask{display:none;position:absolute;bottom:38px;left:-18px;width:80px;padding-bottom:12px}.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list{display:none;font-size:12px;width:80px;border-radius:2px;background:rgba(28,28,28,.9);padding:5px 0;transition:all .3s ease-in-out;overflow:hidden;color:#fff;text-align:center}.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item{height:25px;box-sizing:border-box;cursor:pointer;line-height:25px}.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover{background-color:hsla(0,0%,100%,.1)}.dplayer-controller .dplayer-icons .dplayer-tag{display:inline-block;height:100%}.dplayer-controller .dplayer-icons .dplayer-label{color:#eee;font-size:13px;display:inline-block;vertical-align:middle;white-space:nowrap}.dplayer-controller .dplayer-icons .dplayer-toggle{width:32px;height:20px;text-align:center;font-size:0;vertical-align:middle;position:absolute;top:5px;right:10px}.dplayer-controller .dplayer-icons .dplayer-toggle input{max-height:0;max-width:0;display:none}.dplayer-controller .dplayer-icons .dplayer-toggle input+label{display:inline-block;position:relative;box-shadow:inset 0 0 0 0 #dfdfdf;border:1px solid #dfdfdf;height:20px;width:32px;border-radius:10px;box-sizing:border-box;cursor:pointer;transition:.2s ease-in-out}.dplayer-controller .dplayer-icons .dplayer-toggle input+label:after,.dplayer-controller .dplayer-icons .dplayer-toggle input+label:before{content:"";position:absolute;display:block;height:18px;width:18px;top:0;left:0;border-radius:15px;transition:.2s ease-in-out}.dplayer-controller .dplayer-icons .dplayer-toggle input+label:after{background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.4)}.dplayer-controller .dplayer-icons .dplayer-toggle input:checked+label{border-color:hsla(0,0%,100%,.5)}.dplayer-controller .dplayer-icons .dplayer-toggle input:checked+label:before{width:30px;background:hsla(0,0%,100%,.5)}.dplayer-controller .dplayer-icons .dplayer-toggle input:checked+label:after{left:12px}.dplayer-mobile-play{display:none;width:50px;height:50px;border:none;background-color:transparent;outline:none;cursor:pointer;box-sizing:border-box;bottom:0;opacity:.8;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.dplayer-danmaku{position:absolute;left:0;right:0;top:0;bottom:0;font-size:22px;color:#fff}.dplayer-danmaku .dplayer-danmaku-item{display:inline-block;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;white-space:nowrap;text-shadow:.5px .5px .5px rgba(0,0,0,.5)}.dplayer-danmaku .dplayer-danmaku-item--demo{position:absolute;visibility:hidden}.dplayer-danmaku .dplayer-danmaku-right{position:absolute;right:0;transform:translateX(100%)}.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move{will-change:transform;-webkit-animation:danmaku 5s linear;animation:danmaku 5s linear;-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes danmaku{0%{transform:translateX(100%)}}@keyframes danmaku{0%{transform:translateX(100%)}}.dplayer-danmaku .dplayer-danmaku-bottom,.dplayer-danmaku .dplayer-danmaku-top{position:absolute;width:100%;text-align:center;visibility:hidden}.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move,.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move{will-change:visibility;-webkit-animation:danmaku-center 4s linear;animation:danmaku-center 4s linear;-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes danmaku-center{0%{visibility:visible}to{visibility:visible}}@keyframes danmaku-center{0%{visibility:visible}to{visibility:visible}}.dplayer-logo{pointer-events:none;position:absolute;left:20px;top:20px;max-width:50px;max-height:50px}.dplayer-logo img{max-width:100%;max-height:100%;background:none}.dplayer-menu{position:absolute;width:170px;border-radius:2px;background:rgba(28,28,28,.85);padding:5px 0;overflow:hidden;z-index:3;display:none}.dplayer-menu.dplayer-menu-show{display:block}.dplayer-menu .dplayer-menu-item{height:30px;box-sizing:border-box;cursor:pointer}.dplayer-menu .dplayer-menu-item:hover{background-color:hsla(0,0%,100%,.1)}.dplayer-menu .dplayer-menu-item a{padding:0 10px;line-height:30px;color:#eee;font-size:13px;display:inline-block;vertical-align:middle;width:100%;box-sizing:border-box;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.dplayer-menu .dplayer-menu-item a:hover{text-decoration:none}.dplayer-notice{opacity:0;position:absolute;bottom:60px;left:20px;font-size:14px;border-radius:2px;background:rgba(28,28,28,.9);padding:7px 20px;transition:all .3s ease-in-out;overflow:hidden;color:#fff;pointer-events:none}.dplayer-subtitle{position:absolute;bottom:40px;width:90%;left:5%;text-align:center;color:#fff;text-shadow:.5px .5px .5px rgba(0,0,0,.5);font-size:20px}.dplayer-subtitle.dplayer-subtitle-hide{display:none}.dplayer-mask{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;display:none}.dplayer-mask.dplayer-mask-show{display:block}.dplayer-video-wrap{position:relative;background:#000;font-size:0;width:100%;height:100%}.dplayer-video-wrap .dplayer-video{width:100%;height:100%;display:none}.dplayer-video-wrap .dplayer-video-current{display:block}.dplayer-video-wrap .dplayer-video-prepare{display:none}.dplayer-info-panel{position:absolute;top:10px;left:10px;width:400px;background:rgba(28,28,28,.8);padding:10px;color:#fff;font-size:12px;border-radius:2px}.dplayer-info-panel-hide{display:none}.dplayer-info-panel .dplayer-info-panel-close{cursor:pointer;position:absolute;right:10px;top:10px}.dplayer-info-panel .dplayer-info-panel-item>span{display:inline-block;vertical-align:middle;line-height:15px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.dplayer-info-panel .dplayer-info-panel-item-title{width:100px;text-align:right;margin-right:10px}.dplayer-info-panel .dplayer-info-panel-item-data{width:260px}'],sourceRoot:""}]),t.a=s},function(e,t,a){e.exports=a(42)},function(e,t){var a,r,o=e.exports={};function n(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function i(e){if(a===setTimeout)return setTimeout(e,0);if((a===n||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:n}catch(e){a=n}try{r="function"==typeof clearTimeout?clearTimeout:l}catch(e){r=l}}();var s,d=[],p=!1,A=-1;function c(){p&&s&&(p=!1,s.length?d=s.concat(d):A=-1,d.length&&y())}function y(){if(!p){var e=i(c);p=!0;for(var t=d.length;t;){for(s=d,d=[];++A<t;)s&&s[A].run();A=-1,t=d.length}s=null,p=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===l||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function u(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];d.push(new u(e,t)),1!==d.length||p||i(y)},u.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,a){"use strict";e.exports=function(e,t){return function(){for(var a=new Array(arguments.length),r=0;r<a.length;r++)a[r]=arguments[r];return e.apply(t,a)}}},function(e,t,a){"use strict";var r=a(0);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,a){if(!t)return e;var n;if(a)n=a(t);else if(r.isURLSearchParams(t))n=t.toString();else{var l=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),l.push(o(t)+"="+o(e))})))})),n=l.join("&")}if(n){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}},function(e,t,a){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,a){"use strict";(function(t){var r=a(0),o=a(47),n={"Content-Type":"application/x-www-form-urlencoded"};function l(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i,s={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(i=a(12)),i),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(l(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(l(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){s.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){s.headers[e]=r.merge(n)})),e.exports=s}).call(this,a(7))},function(e,t,a){"use strict";var r=a(0),o=a(48),n=a(50),l=a(9),i=a(51),s=a(54),d=a(55),p=a(13);e.exports=function(e){return new Promise((function(t,a){var A=e.data,c=e.headers;r.isFormData(A)&&delete c["Content-Type"];var y=new XMLHttpRequest;if(e.auth){var u=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";c.Authorization="Basic "+btoa(u+":"+h)}var f=i(e.baseURL,e.url);if(y.open(e.method.toUpperCase(),l(f,e.params,e.paramsSerializer),!0),y.timeout=e.timeout,y.onreadystatechange=function(){if(y&&4===y.readyState&&(0!==y.status||y.responseURL&&0===y.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in y?s(y.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?y.response:y.responseText,status:y.status,statusText:y.statusText,headers:r,config:e,request:y};o(t,a,n),y=null}},y.onabort=function(){y&&(a(p("Request aborted",e,"ECONNABORTED",y)),y=null)},y.onerror=function(){a(p("Network Error",e,null,y)),y=null},y.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),a(p(t,e,"ECONNABORTED",y)),y=null},r.isStandardBrowserEnv()){var m=(e.withCredentials||d(f))&&e.xsrfCookieName?n.read(e.xsrfCookieName):void 0;m&&(c[e.xsrfHeaderName]=m)}if("setRequestHeader"in y&&r.forEach(c,(function(e,t){void 0===A&&"content-type"===t.toLowerCase()?delete c[t]:y.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(y.withCredentials=!!e.withCredentials),e.responseType)try{y.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&y.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&y.upload&&y.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){y&&(y.abort(),a(e),y=null)})),A||(A=null),y.send(A)}))}},function(e,t,a){"use strict";var r=a(49);e.exports=function(e,t,a,o,n){var l=new Error(e);return r(l,t,a,o,n)}},function(e,t,a){"use strict";var r=a(0);e.exports=function(e,t){t=t||{};var a={},o=["url","method","data"],n=["headers","auth","proxy","params"],l=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function s(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function d(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(a[o]=s(void 0,e[o])):a[o]=s(e[o],t[o])}r.forEach(o,(function(e){r.isUndefined(t[e])||(a[e]=s(void 0,t[e]))})),r.forEach(n,d),r.forEach(l,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(a[o]=s(void 0,e[o])):a[o]=s(void 0,t[o])})),r.forEach(i,(function(r){r in t?a[r]=s(e[r],t[r]):r in e&&(a[r]=s(void 0,e[r]))}));var p=o.concat(n).concat(l).concat(i),A=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===p.indexOf(e)}));return r.forEach(A,d),a}},function(e,t,a){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,a){"use strict";e.exports=a(58)},function(e,t,a){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},n=function(){var e={};return function(t){if(void 0===e[t]){var a=document.querySelector(t);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}e[t]=a}return e[t]}}(),l=[];function i(e){for(var t=-1,a=0;a<l.length;a++)if(l[a].identifier===e){t=a;break}return t}function s(e,t){for(var a={},r=[],o=0;o<e.length;o++){var n=e[o],s=t.base?n[0]+t.base:n[0],d=a[s]||0,p="".concat(s," ").concat(d);a[s]=d+1;var A=i(p),c={css:n[1],media:n[2],sourceMap:n[3]};-1!==A?(l[A].references++,l[A].updater(c)):l.push({identifier:p,updater:f(c,t),references:1}),r.push(p)}return r}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=a.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var l=n(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}return t}var p,A=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function c(e,t,a,r){var o=a?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=A(t,o);else{var n=document.createTextNode(o),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(n,l[t]):e.appendChild(n)}}function y(e,t,a){var r=a.css,o=a.media,n=a.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),n&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var u=null,h=0;function f(e,t){var a,r,o;if(t.singleton){var n=h++;a=u||(u=d(t)),r=c.bind(null,a,n,!1),o=c.bind(null,a,n,!0)}else a=d(t),r=y.bind(null,a,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var a=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<a.length;r++){var o=i(a[r]);l[o].references--}for(var n=s(e,t),d=0;d<a.length;d++){var p=i(a[d]);0===l[p].references&&(l[p].updater(),l.splice(p,1))}a=n}}}},function(e,t,a){"use strict";var r=a(1),o=a.n(r),n=a(2),l=a.n(n)()(o.a);l.push([e.i,':root{--balloon-border-radius:2px;--balloon-color:rgba(16,16,16,0.95);--balloon-text-color:#fff;--balloon-font-size:12px;--balloon-move:4px}button[aria-label][data-balloon-pos]{overflow:visible}[aria-label][data-balloon-pos]{position:relative;cursor:pointer}[aria-label][data-balloon-pos]:after{text-indent:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:400;font-style:normal;text-shadow:none;font-size:var(--balloon-font-size);background:var(--balloon-color);border-radius:2px;color:var(--balloon-text-color);border-radius:var(--balloon-border-radius);content:attr(aria-label);padding:.5em 1em;white-space:nowrap}[aria-label][data-balloon-pos]:after,[aria-label][data-balloon-pos]:before{opacity:0;pointer-events:none;transition:all .18s ease-out .18s;position:absolute;z-index:10}[aria-label][data-balloon-pos]:before{width:0;height:0;border:5px solid transparent;border-top:5px solid var(--balloon-color);content:""}[aria-label][data-balloon-pos]:hover:after,[aria-label][data-balloon-pos]:hover:before,[aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after,[aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before,[aria-label][data-balloon-pos][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-visible]:before{opacity:1;pointer-events:none}[aria-label][data-balloon-pos].font-awesome:after{font-family:FontAwesome,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}[aria-label][data-balloon-pos][data-balloon-break]:after{white-space:pre}[aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after{white-space:pre-line;word-break:break-word}[aria-label][data-balloon-pos][data-balloon-blunt]:after,[aria-label][data-balloon-pos][data-balloon-blunt]:before{transition:none}[aria-label][data-balloon-pos][data-balloon-pos=down]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=down]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=down][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos=down][data-balloon-visible]:before,[aria-label][data-balloon-pos][data-balloon-pos=up]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=up]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=up][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos=up][data-balloon-visible]:before{transform:translate(-50%)}[aria-label][data-balloon-pos][data-balloon-pos*=-left]:after{left:0}[aria-label][data-balloon-pos][data-balloon-pos*=-left]:before{left:5px}[aria-label][data-balloon-pos][data-balloon-pos*=-right]:after{right:0}[aria-label][data-balloon-pos][data-balloon-pos*=-right]:before{right:5px}[aria-label][data-balloon-pos][data-balloon-po*=-left]:hover:after,[aria-label][data-balloon-pos][data-balloon-po*=-left]:hover:before,[aria-label][data-balloon-pos][data-balloon-po*=-left][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-po*=-left][data-balloon-visible]:before,[aria-label][data-balloon-pos][data-balloon-pos*=-right]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos*=-right]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos*=-right][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos*=-right][data-balloon-visible]:before{transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos^=up]:after,[aria-label][data-balloon-pos][data-balloon-pos^=up]:before{bottom:100%;transform-origin:top;transform:translateY(var(--balloon-move))}[aria-label][data-balloon-pos][data-balloon-pos^=up]:after{margin-bottom:10px}[aria-label][data-balloon-pos][data-balloon-pos=up]:after,[aria-label][data-balloon-pos][data-balloon-pos=up]:before{left:50%;transform:translate(-50%,var(--balloon-move))}[aria-label][data-balloon-pos][data-balloon-pos^=down]:after,[aria-label][data-balloon-pos][data-balloon-pos^=down]:before{top:100%;transform:translateY(calc(var(--balloon-move)*-1))}[aria-label][data-balloon-pos][data-balloon-pos^=down]:after{margin-top:10px}[aria-label][data-balloon-pos][data-balloon-pos^=down]:before{width:0;height:0;border:5px solid transparent;border-bottom:5px solid var(--balloon-color)}[aria-label][data-balloon-pos][data-balloon-pos=down]:after,[aria-label][data-balloon-pos][data-balloon-pos=down]:before{left:50%;transform:translate(-50%,calc(var(--balloon-move)*-1))}[aria-label][data-balloon-pos][data-balloon-pos=left]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=left]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=left][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos=left][data-balloon-visible]:before,[aria-label][data-balloon-pos][data-balloon-pos=right]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=right]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=right][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos=right][data-balloon-visible]:before{transform:translateY(-50%)}[aria-label][data-balloon-pos][data-balloon-pos=left]:after,[aria-label][data-balloon-pos][data-balloon-pos=left]:before{right:100%;top:50%;transform:translate(var(--balloon-move),-50%)}[aria-label][data-balloon-pos][data-balloon-pos=left]:after{margin-right:10px}[aria-label][data-balloon-pos][data-balloon-pos=left]:before{width:0;height:0;border:5px solid transparent;border-left:5px solid var(--balloon-color)}[aria-label][data-balloon-pos][data-balloon-pos=right]:after,[aria-label][data-balloon-pos][data-balloon-pos=right]:before{left:100%;top:50%;transform:translate(calc(var(--balloon-move)*-1),-50%)}[aria-label][data-balloon-pos][data-balloon-pos=right]:after{margin-left:10px}[aria-label][data-balloon-pos][data-balloon-pos=right]:before{width:0;height:0;border:5px solid transparent;border-right:5px solid var(--balloon-color)}[aria-label][data-balloon-pos][data-balloon-length]:after{white-space:normal}[aria-label][data-balloon-pos][data-balloon-length=small]:after{width:80px}[aria-label][data-balloon-pos][data-balloon-length=medium]:after{width:150px}[aria-label][data-balloon-pos][data-balloon-length=large]:after{width:260px}[aria-label][data-balloon-pos][data-balloon-length=xlarge]:after{width:380px}@media screen and (max-width:768px){[aria-label][data-balloon-pos][data-balloon-length=xlarge]:after{width:90vw}}[aria-label][data-balloon-pos][data-balloon-length=fit]:after{width:100%}',"",{version:3,sources:["webpack://./node_modules/balloon-css/balloon.css"],names:[],mappings:"AAAA,MAAM,2BAA2B,CAAC,mCAAmC,CAAC,yBAAyB,CAAC,wBAAwB,CAAC,kBAAkB,CAAC,qCAAqC,gBAAgB,CAAC,+BAA+B,iBAAiB,CAAC,cAAc,CAAC,qCAAqC,aAAa,CAAC,wHAAwH,CAAC,eAAe,CAAC,iBAAiB,CAAC,gBAAgB,CAAC,kCAAkC,CAAC,+BAA+B,CAAC,iBAAiB,CAAC,+BAA+B,CAAC,0CAA0C,CAAC,wBAAwB,CAAC,gBAAgB,CAAC,kBAAkB,CAAC,2EAA2E,SAAS,CAAC,mBAAmB,CAAC,iCAAiC,CAAC,iBAAiB,CAAC,UAAU,CAAC,sCAAsC,OAAO,CAAC,QAAQ,CAAC,4BAA4B,CAAC,yCAAyC,CAAC,UAAU,CAAC,6VAA6V,SAAS,CAAC,mBAAmB,CAAC,kDAAkD,oIAAoI,CAAC,yDAAyD,eAAe,CAAC,8EAA8E,oBAAoB,CAAC,qBAAqB,CAAC,mHAAmH,eAAe,CAAC,4kBAA4kB,yBAAyB,CAAC,8DAA8D,MAAM,CAAC,+DAA+D,QAAQ,CAAC,+DAA+D,OAAO,CAAC,gEAAgE,SAAS,CAAC,omBAAomB,sBAAsB,CAAC,uHAAuH,WAAW,CAAC,oBAAoB,CAAC,yCAAyC,CAAC,2DAA2D,kBAAkB,CAAC,qHAAqH,QAAQ,CAAC,6CAA6C,CAAC,2HAA2H,QAAQ,CAAC,kDAAkD,CAAC,6DAA6D,eAAe,CAAC,8DAA8D,OAAO,CAAC,QAAQ,CAAC,4BAA4B,CAAC,4CAA4C,CAAC,yHAAyH,QAAQ,CAAC,sDAAsD,CAAC,wlBAAwlB,0BAA0B,CAAC,yHAAyH,UAAU,CAAC,OAAO,CAAC,6CAA6C,CAAC,4DAA4D,iBAAiB,CAAC,6DAA6D,OAAO,CAAC,QAAQ,CAAC,4BAA4B,CAAC,0CAA0C,CAAC,2HAA2H,SAAS,CAAC,OAAO,CAAC,sDAAsD,CAAC,6DAA6D,gBAAgB,CAAC,8DAA8D,OAAO,CAAC,QAAQ,CAAC,4BAA4B,CAAC,2CAA2C,CAAC,0DAA0D,kBAAkB,CAAC,gEAAgE,UAAU,CAAC,iEAAiE,WAAW,CAAC,gEAAgE,WAAW,CAAC,iEAAiE,WAAW,CAAC,oCAAoC,iEAAiE,UAAU,CAAC,CAAC,8DAA8D,UAAU",sourcesContent:[':root{--balloon-border-radius:2px;--balloon-color:rgba(16,16,16,0.95);--balloon-text-color:#fff;--balloon-font-size:12px;--balloon-move:4px}button[aria-label][data-balloon-pos]{overflow:visible}[aria-label][data-balloon-pos]{position:relative;cursor:pointer}[aria-label][data-balloon-pos]:after{text-indent:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:400;font-style:normal;text-shadow:none;font-size:var(--balloon-font-size);background:var(--balloon-color);border-radius:2px;color:var(--balloon-text-color);border-radius:var(--balloon-border-radius);content:attr(aria-label);padding:.5em 1em;white-space:nowrap}[aria-label][data-balloon-pos]:after,[aria-label][data-balloon-pos]:before{opacity:0;pointer-events:none;transition:all .18s ease-out .18s;position:absolute;z-index:10}[aria-label][data-balloon-pos]:before{width:0;height:0;border:5px solid transparent;border-top:5px solid var(--balloon-color);content:""}[aria-label][data-balloon-pos]:hover:after,[aria-label][data-balloon-pos]:hover:before,[aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after,[aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before,[aria-label][data-balloon-pos][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-visible]:before{opacity:1;pointer-events:none}[aria-label][data-balloon-pos].font-awesome:after{font-family:FontAwesome,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}[aria-label][data-balloon-pos][data-balloon-break]:after{white-space:pre}[aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after{white-space:pre-line;word-break:break-word}[aria-label][data-balloon-pos][data-balloon-blunt]:after,[aria-label][data-balloon-pos][data-balloon-blunt]:before{transition:none}[aria-label][data-balloon-pos][data-balloon-pos=down]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=down]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=down][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos=down][data-balloon-visible]:before,[aria-label][data-balloon-pos][data-balloon-pos=up]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=up]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=up][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos=up][data-balloon-visible]:before{transform:translate(-50%)}[aria-label][data-balloon-pos][data-balloon-pos*=-left]:after{left:0}[aria-label][data-balloon-pos][data-balloon-pos*=-left]:before{left:5px}[aria-label][data-balloon-pos][data-balloon-pos*=-right]:after{right:0}[aria-label][data-balloon-pos][data-balloon-pos*=-right]:before{right:5px}[aria-label][data-balloon-pos][data-balloon-po*=-left]:hover:after,[aria-label][data-balloon-pos][data-balloon-po*=-left]:hover:before,[aria-label][data-balloon-pos][data-balloon-po*=-left][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-po*=-left][data-balloon-visible]:before,[aria-label][data-balloon-pos][data-balloon-pos*=-right]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos*=-right]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos*=-right][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos*=-right][data-balloon-visible]:before{transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos^=up]:after,[aria-label][data-balloon-pos][data-balloon-pos^=up]:before{bottom:100%;transform-origin:top;transform:translateY(var(--balloon-move))}[aria-label][data-balloon-pos][data-balloon-pos^=up]:after{margin-bottom:10px}[aria-label][data-balloon-pos][data-balloon-pos=up]:after,[aria-label][data-balloon-pos][data-balloon-pos=up]:before{left:50%;transform:translate(-50%,var(--balloon-move))}[aria-label][data-balloon-pos][data-balloon-pos^=down]:after,[aria-label][data-balloon-pos][data-balloon-pos^=down]:before{top:100%;transform:translateY(calc(var(--balloon-move)*-1))}[aria-label][data-balloon-pos][data-balloon-pos^=down]:after{margin-top:10px}[aria-label][data-balloon-pos][data-balloon-pos^=down]:before{width:0;height:0;border:5px solid transparent;border-bottom:5px solid var(--balloon-color)}[aria-label][data-balloon-pos][data-balloon-pos=down]:after,[aria-label][data-balloon-pos][data-balloon-pos=down]:before{left:50%;transform:translate(-50%,calc(var(--balloon-move)*-1))}[aria-label][data-balloon-pos][data-balloon-pos=left]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=left]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=left][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos=left][data-balloon-visible]:before,[aria-label][data-balloon-pos][data-balloon-pos=right]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=right]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=right][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos=right][data-balloon-visible]:before{transform:translateY(-50%)}[aria-label][data-balloon-pos][data-balloon-pos=left]:after,[aria-label][data-balloon-pos][data-balloon-pos=left]:before{right:100%;top:50%;transform:translate(var(--balloon-move),-50%)}[aria-label][data-balloon-pos][data-balloon-pos=left]:after{margin-right:10px}[aria-label][data-balloon-pos][data-balloon-pos=left]:before{width:0;height:0;border:5px solid transparent;border-left:5px solid var(--balloon-color)}[aria-label][data-balloon-pos][data-balloon-pos=right]:after,[aria-label][data-balloon-pos][data-balloon-pos=right]:before{left:100%;top:50%;transform:translate(calc(var(--balloon-move)*-1),-50%)}[aria-label][data-balloon-pos][data-balloon-pos=right]:after{margin-left:10px}[aria-label][data-balloon-pos][data-balloon-pos=right]:before{width:0;height:0;border:5px solid transparent;border-right:5px solid var(--balloon-color)}[aria-label][data-balloon-pos][data-balloon-length]:after{white-space:normal}[aria-label][data-balloon-pos][data-balloon-length=small]:after{width:80px}[aria-label][data-balloon-pos][data-balloon-length=medium]:after{width:150px}[aria-label][data-balloon-pos][data-balloon-length=large]:after{width:260px}[aria-label][data-balloon-pos][data-balloon-length=xlarge]:after{width:380px}@media screen and (max-width:768px){[aria-label][data-balloon-pos][data-balloon-length=xlarge]:after{width:90vw}}[aria-label][data-balloon-pos][data-balloon-length=fit]:after{width:100%}'],sourceRoot:""}]),t.a=l},function(e,t,a){"use strict";(function(e){var r=a(20),o=a(21);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=setTimeout;function i(e){return Boolean(e&&void 0!==e.length)}function s(){}function d(e){if(!(this instanceof d))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],h(e,this)}function p(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,d._immediateFn((function(){var a=1===e._state?t.onFulfilled:t.onRejected;if(null!==a){var r;try{r=a(e._value)}catch(e){return void c(t.promise,e)}A(t.promise,r)}else(1===e._state?A:c)(t.promise,e._value)}))):e._deferreds.push(t)}function A(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"===n(t)||"function"==typeof t)){var a=t.then;if(t instanceof d)return e._state=3,e._value=t,void y(e);if("function"==typeof a)return void h((r=a,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,y(e)}catch(t){c(e,t)}var r,o}function c(e,t){e._state=2,e._value=t,y(e)}function y(e){2===e._state&&0===e._deferreds.length&&d._immediateFn((function(){e._handled||d._unhandledRejectionFn(e._value)}));for(var t=0,a=e._deferreds.length;t<a;t++)p(e,e._deferreds[t]);e._deferreds=null}function u(e,t,a){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=a}function h(e,t){var a=!1;try{e((function(e){a||(a=!0,A(t,e))}),(function(e){a||(a=!0,c(t,e))}))}catch(e){if(a)return;a=!0,c(t,e)}}d.prototype.catch=function(e){return this.then(null,e)},d.prototype.then=function(e,t){var a=new this.constructor(s);return p(this,new u(e,t,a)),a},d.prototype.finally=r.a,d.all=function(e){return new d((function(t,a){if(!i(e))return a(new TypeError("Promise.all accepts an array"));var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function l(e,i){try{if(i&&("object"===n(i)||"function"==typeof i)){var s=i.then;if("function"==typeof s)return void s.call(i,(function(t){l(e,t)}),a)}r[e]=i,0==--o&&t(r)}catch(e){a(e)}}for(var s=0;s<r.length;s++)l(s,r[s])}))},d.allSettled=o.a,d.resolve=function(e){return e&&"object"===n(e)&&e.constructor===d?e:new d((function(t){t(e)}))},d.reject=function(e){return new d((function(t,a){a(e)}))},d.race=function(e){return new d((function(t,a){if(!i(e))return a(new TypeError("Promise.race accepts an array"));for(var r=0,o=e.length;r<o;r++)d.resolve(e[r]).then(t,a)}))},d._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){l(e,0)},d._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.a=d}).call(this,a(40).setImmediate)},function(e,t,a){"use strict";t.a=function(e){var t=this.constructor;return this.then((function(a){return t.resolve(e()).then((function(){return a}))}),(function(a){return t.resolve(e()).then((function(){return t.reject(a)}))}))}},function(e,t,a){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.a=function(e){return new this((function(t,a){if(!e||void 0===e.length)return a(new TypeError(r(e)+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);var n=o.length;function l(e,a){if(a&&("object"===r(a)||"function"==typeof a)){var i=a.then;if("function"==typeof i)return void i.call(a,(function(t){l(e,t)}),(function(a){o[e]={status:"rejected",reason:a},0==--n&&t(o)}))}o[e]={status:"fulfilled",value:a},0==--n&&t(o)}for(var i=0;i<o.length;i++)l(i,o[i])}))}},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},function(e,t){e.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},function(e,t){e.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},function(e,t,a){var r=a(16);e.exports=function(e){"use strict";var t="",o=function(e){return t+=e},n=(e=e||{}).video,l=e.options,i=r.$escape,s=e.tran,d=e.icons,p=r.$each;e.$value,e.$index;return t+='<div class="dplayer-mask"></div>\r\n<div class="dplayer-video-wrap">\r\n    ',o(a(4)(n)),t+="\r\n    ",l.logo&&(t+='\r\n    <div class="dplayer-logo">\r\n        <img src="',t+=i(l.logo),t+='">\r\n    </div>\r\n    '),t+='\r\n    \x3c!--<div class="dplayer-danmaku"',l.danmaku&&l.danmaku.bottm&&(t+=' style="margin-bottom:',t+=i(l.danmaku.bottm),t+='"'),t+='>\r\n        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>\r\n    </div>--\x3e\r\n    <div class="dplayer-subtitle"></div>\r\n    <div class="dplayer-bezel">\r\n        <span class="dplayer-bezel-icon"></span>\r\n        \x3c!--',l.danmaku&&(t+='\r\n        <span class="dplayer-danloading">',t+=i(s("Danmaku is loading")),t+="</span>\r\n        "),t+='--\x3e\r\n        <span class="diplayer-loading-icon">',t+=d.loading,t+='</span>\r\n    </div>\r\n</div>\r\n<div class="dplayer-controller-mask"></div>\r\n<div class="dplayer-controller">\r\n    <div class="dplayer-icons dplayer-tag-box">\r\n        <input class="dplayer-tag-input" type="text" placeholder="',t+=i(s("Input tag, hit Enter")),t+='" maxlength="30">\r\n        <button class="dplayer-icon dplayer-send-icon" data-balloon="',t+=i(s("Send")),t+='" data-balloon-pos="up">\r\n            <span class="dplayer-icon-content">',t+=d.send,t+='</span>\r\n        </button>\r\n    </div>\r\n    <div class="dplayer-icons dplayer-icons-left">\r\n        <button class="dplayer-icon dplayer-play-icon">\r\n            <span class="dplayer-icon-content">',t+=d.play,t+='</span>\r\n        </button>\r\n        <div class="dplayer-volume">\r\n            <button class="dplayer-icon dplayer-volume-icon">\r\n                <span class="dplayer-icon-content">',t+=d.volumeDown,t+='</span>\r\n            </button>\r\n            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">\r\n                <div class="dplayer-volume-bar">\r\n                    <div class="dplayer-volume-bar-inner" style="background: ',t+=i(l.theme),t+=';">\r\n                        <span class="dplayer-thumb" style="background: ',t+=i(l.theme),t+='"></span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <span class="dplayer-time">\r\n            <span class="dplayer-ptime">0:00</span> /\r\n            <span class="dplayer-dtime">0:00</span>\r\n        </span>\r\n        ',l.live&&(t+='\r\n        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: ',t+=i(l.theme),t+=';"></span>',t+=i(s("Live")),t+="</span>\r\n        "),t+='\r\n    </div>\r\n    <div class="dplayer-icons dplayer-icons-right">\r\n        ',l.video.quality&&(t+='\r\n        <div class="dplayer-quality">\r\n            <button class="dplayer-icon dplayer-quality-icon">',t+=i(l.video.quality[l.video.defaultQuality].name),t+='</button>\r\n            <div class="dplayer-quality-mask">\r\n                <div class="dplayer-quality-list">\r\n                ',p(l.video.quality,(function(e,a){t+='\r\n                    <div class="dplayer-quality-item" data-index="',t+=i(a),t+='">',t+=i(e.name),t+="</div>\r\n                "})),t+="\r\n                </div>\r\n            </div>\r\n        </div>\r\n        "),t+="\r\n        ",l.screenshot&&(t+='\r\n        <div class="dplayer-icon dplayer-camera-icon" data-balloon="',t+=i(s("Screenshot")),t+='" data-balloon-pos="up">\r\n            <span class="dplayer-icon-content">',t+=d.camera,t+="</span>\r\n        </div>\r\n        "),t+="\r\n        ",l.airplay&&(t+='\r\n        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="',t+=i(s("AirPlay")),t+='" data-balloon-pos="up">\r\n            <span class="dplayer-icon-content">',t+=d.airplay,t+="</span>\r\n        </div>\r\n        "),t+="\r\n        ",l.sendTag&&(t+='\r\n        <div class="dplayer-tag">\r\n            <button class="dplayer-icon dplayer-tag-icon" data-balloon="',t+=i(s("Add tag")),t+='" data-balloon-pos="up">\r\n                <span class="dplayer-icon-content">',t+=d.comment,t+="</span>\r\n            </button>\r\n        </div>\r\n        "),t+="\r\n        ",l.subtitle&&(t+='\r\n        <div class="dplayer-subtitle-btn">\r\n            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="',t+=i(s("Hide subtitle")),t+='" data-balloon-pos="up">\r\n                <span class="dplayer-icon-content">',t+=d.subtitle,t+="</span>\r\n            </button>\r\n        </div>\r\n        "),t+='\r\n        <div class="dplayer-setting">\r\n            <button class="dplayer-icon dplayer-setting-icon" data-balloon="',t+=i(s("Setting")),t+='" data-balloon-pos="up">\r\n                <span class="dplayer-icon-content">',t+=d.setting,t+='</span>\r\n            </button>\r\n            <div class="dplayer-setting-box">\r\n                <div class="dplayer-setting-origin-panel">\r\n                    <div class="dplayer-setting-item dplayer-setting-speed">\r\n                        <span class="dplayer-label">',t+=i(s("Speed")),t+='</span>\r\n                        <div class="dplayer-toggle">',t+=d.right,t+='</div>\r\n                    </div>\r\n                    <div class="dplayer-setting-item dplayer-setting-loop">\r\n                        <span class="dplayer-label">',t+=i(s("Loop")),t+='</span>\r\n                        <div class="dplayer-toggle">\r\n                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">\r\n                            <label for="dplayer-toggle"></label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class="dplayer-setting-speed-panel">\r\n                    ',p(l.playbackSpeed,(function(e,a){t+='\r\n                        <div class="dplayer-setting-speed-item" data-speed="',t+=i(e),t+='">\r\n                            <span class="dplayer-label">',t+=i(1===e?s("Normal"):e),t+="</span>\r\n                        </div>\r\n                    "})),t+='\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="dplayer-full">\r\n            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="',t+=i(s("Web full screen")),t+='" data-balloon-pos="up">\r\n                <span class="dplayer-icon-content">',t+=d.fullWeb,t+='</span>\r\n            </button>\r\n            <button class="dplayer-icon dplayer-full-icon" data-balloon="',t+=i(s("Full screen")),t+='" data-balloon-pos="up">\r\n                <span class="dplayer-icon-content">',t+=d.full,t+='</span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class="dplayer-bar-wrap">\r\n        <div class="dplayer-bar-time hidden">00:00</div>\r\n        <div class="dplayer-bar-preview"></div>\r\n        <div class="dplayer-bar">\r\n            <div class="dplayer-loaded" style="width: 0;"></div>\r\n            <div class="dplayer-played" style="width: 0; background: ',t+=i(l.theme),t+='">\r\n                <span class="dplayer-thumb" style="background: ',t+=i(l.theme),t+='"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="dplayer-info-panel dplayer-info-panel-hide">\r\n    <div class="dplayer-info-panel-close">[x]</div>\r\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">\r\n        <span class="dplayer-info-panel-item-title">Player version</span>\r\n        <span class="dplayer-info-panel-item-data"></span>\r\n    </div>\r\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">\r\n        <span class="dplayer-info-panel-item-title">Player FPS</span>\r\n        <span class="dplayer-info-panel-item-data"></span>\r\n    </div>\r\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">\r\n        <span class="dplayer-info-panel-item-title">Video type</span>\r\n        <span class="dplayer-info-panel-item-data"></span>\r\n    </div>\r\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">\r\n        <span class="dplayer-info-panel-item-title">Video url</span>\r\n        <span class="dplayer-info-panel-item-data"></span>\r\n    </div>\r\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">\r\n        <span class="dplayer-info-panel-item-title">Video resolution</span>\r\n        <span class="dplayer-info-panel-item-data"></span>\r\n    </div>\r\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">\r\n        <span class="dplayer-info-panel-item-title">Video duration</span>\r\n        <span class="dplayer-info-panel-item-data"></span>\r\n    </div>\r\n</div>\r\n<div class="dplayer-menu">\r\n    ',p(l.contextmenu,(function(e,a){t+='\r\n        <div class="dplayer-menu-item">\r\n            <a',e.link&&(t+=' target="_blank"'),t+=' href="',t+=i(e.link||"javascript:void(0);"),t+='">',t+=i(s(e.text)),t+="</a>\r\n        </div>\r\n    "})),t+='\r\n</div>\r\n<div class="dplayer-notice"></div>\r\n<button class="dplayer-mobile-play">\r\n    ',t+=d.play,t+="\r\n</button>"}},function(e,t,a){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function n(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new n(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new n(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},n.prototype.unref=n.prototype.ref=function(){},n.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},a(41),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,a(3))},function(e,t,a){(function(e,t){!function(e,a){"use strict";if(!e.setImmediate){var r,o,n,l,i,s=1,d={},p=!1,A=e.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(e);c=c&&c.setTimeout?c:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){u(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,a=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=a,t}}()?e.MessageChannel?((n=new MessageChannel).port1.onmessage=function(e){u(e.data)},r=function(e){n.port2.postMessage(e)}):A&&"onreadystatechange"in A.createElement("script")?(o=A.documentElement,r=function(e){var t=A.createElement("script");t.onreadystatechange=function(){u(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(e){setTimeout(u,0,e)}:(l="setImmediate$"+Math.random()+"$",i=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(l)&&u(+t.data.slice(l.length))},e.addEventListener?e.addEventListener("message",i,!1):e.attachEvent("onmessage",i),r=function(t){e.postMessage(l+t,"*")}),c.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),a=0;a<t.length;a++)t[a]=arguments[a+1];var o={callback:e,args:t};return d[s]=o,r(s),s++},c.clearImmediate=y}function y(e){delete d[e]}function u(e){if(p)setTimeout(u,0,e);else{var t=d[e];if(t){p=!0;try{!function(e){var t=e.callback,a=e.args;switch(a.length){case 0:t();break;case 1:t(a[0]);break;case 2:t(a[0],a[1]);break;case 3:t(a[0],a[1],a[2]);break;default:t.apply(void 0,a)}}(t)}finally{y(e),p=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,a(3),a(7))},function(e,t,a){"use strict";var r=a(0),o=a(8),n=a(43),l=a(14);function i(e){var t=new n(e),a=o(n.prototype.request,t);return r.extend(a,n.prototype,t),r.extend(a,t),a}var s=i(a(11));s.Axios=n,s.create=function(e){return i(l(s.defaults,e))},s.Cancel=a(15),s.CancelToken=a(56),s.isCancel=a(10),s.all=function(e){return Promise.all(e)},s.spread=a(57),e.exports=s,e.exports.default=s},function(e,t,a){"use strict";var r=a(0),o=a(9),n=a(44),l=a(45),i=a(14);function s(e){this.defaults=e,this.interceptors={request:new n,response:new n}}s.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=i(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[l,void 0],a=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)a=a.then(t.shift(),t.shift());return a},s.prototype.getUri=function(e){return e=i(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){s.prototype[e]=function(t,a){return this.request(i(a||{},{method:e,url:t,data:(a||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){s.prototype[e]=function(t,a,r){return this.request(i(r||{},{method:e,url:t,data:a}))}})),e.exports=s},function(e,t,a){"use strict";var r=a(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},function(e,t,a){"use strict";var r=a(0),o=a(46),n=a(10),l=a(11);function i(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return i(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||l.adapter)(e).then((function(t){return i(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return n(t)||(i(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,a){"use strict";var r=a(0);e.exports=function(e,t,a){return r.forEach(a,(function(a){e=a(e,t)})),e}},function(e,t,a){"use strict";var r=a(0);e.exports=function(e,t){r.forEach(e,(function(a,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=a,delete e[r])}))}},function(e,t,a){"use strict";var r=a(13);e.exports=function(e,t,a){var o=a.config.validateStatus;a.status&&o&&!o(a.status)?t(r("Request failed with status code "+a.status,a.config,null,a.request,a)):e(a)}},function(e,t,a){"use strict";e.exports=function(e,t,a,r,o){return e.config=t,a&&(e.code=a),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,a){"use strict";var r=a(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,a,o,n,l){var i=[];i.push(e+"="+encodeURIComponent(t)),r.isNumber(a)&&i.push("expires="+new Date(a).toGMTString()),r.isString(o)&&i.push("path="+o),r.isString(n)&&i.push("domain="+n),!0===l&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,a){"use strict";var r=a(52),o=a(53);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},function(e,t,a){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,a){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,a){"use strict";var r=a(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,a,n,l={};return e?(r.forEach(e.split("\n"),(function(e){if(n=e.indexOf(":"),t=r.trim(e.substr(0,n)).toLowerCase(),a=r.trim(e.substr(n+1)),t){if(l[t]&&o.indexOf(t)>=0)return;l[t]="set-cookie"===t?(l[t]?l[t]:[]).concat([a]):l[t]?l[t]+", "+a:a}})),l):l}},function(e,t,a){"use strict";var r=a(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a");function o(e){var r=e;return t&&(a.setAttribute("href",r),r=a.href),a.setAttribute("href",r),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:"/"===a.pathname.charAt(0)?a.pathname:"/"+a.pathname}}return e=o(window.location.href),function(t){var a=r.isString(t)?o(t):t;return a.protocol===e.protocol&&a.host===e.host}}():function(){return!0}},function(e,t,a){"use strict";var r=a(15);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var a=this;e((function(e){a.reason||(a.reason=new r(e),t(a.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},function(e,t,a){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,a){"use strict";(function(t){var a="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},r=Object.create(a),o=/["&'<>]/;r.$escape=function(e){return function(e){var t=""+e,a=o.exec(t);if(!a)return e;var r="",n=void 0,l=void 0,i=void 0;for(n=a.index,l=0;n<t.length;n++){switch(t.charCodeAt(n)){case 34:i="&#34;";break;case 38:i="&#38;";break;case 39:i="&#39;";break;case 60:i="&#60;";break;case 62:i="&#62;";break;default:continue}l!==n&&(r+=t.substring(l,n)),l=n+1,r+=i}return l!==n?r+t.substring(l,n):r}(function e(t){"string"!=typeof t&&(t=null==t?"":"function"==typeof t?e(t.call(t)):JSON.stringify(t));return t}(e))},r.$each=function(e,t){if(Array.isArray(e))for(var a=0,r=e.length;a<r;a++)t(e[a],a);else for(var o in e)t(e[o],o)},e.exports=r}).call(this,a(3))},function(e,t,a){"use strict";a.r(t);var r=a(17),o=a.n(r),n=a(5),l={insert:"head",singleton:!1},i=(o()(n.a,l),n.a.locals,a(19)),s=/mobile/i.test(window.navigator.userAgent),d={secondToTime:function(e){if(0===(e=e||0)||e===1/0||"NaN"===e.toString())return"00:00";var t=Math.floor(e/3600),a=Math.floor((e-3600*t)/60),r=Math.floor(e-3600*t-60*a);return(t>0?[t,a,r]:[a,r]).map((function(e){return e<10?"0"+e:""+e})).join(":")},getElementViewLeft:function(e){var t=e.offsetLeft,a=e.offsetParent,r=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;null!==a&&a!==e;)t+=a.offsetLeft,a=a.offsetParent;else for(;null!==a;)t+=a.offsetLeft,a=a.offsetParent;return t-r},getBoundingClientRectViewLeft:function(e){var t=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(e.getBoundingClientRect){if("number"!=typeof this.getBoundingClientRectViewLeft.offset){var a=document.createElement("div");a.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(a),this.getBoundingClientRectViewLeft.offset=-a.getBoundingClientRect().top-t,document.body.removeChild(a),a=null}var r=e.getBoundingClientRect(),o=this.getBoundingClientRectViewLeft.offset;return r.left+o}return this.getElementViewLeft(e)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(e){var t=e.left,a=void 0===t?0:t,r=e.top,o=void 0===r?0:r;this.isFirefox?(document.documentElement.scrollLeft=a,document.documentElement.scrollTop=o):window.scrollTo(a,o)},isMobile:s,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),storage:{set:function(e,t){localStorage.setItem(e,t)},get:function(e){return localStorage.getItem(e)}},nameMap:{dragStart:s?"touchstart":"mousedown",dragMove:s?"touchmove":"mousemove",dragEnd:s?"touchend":"mouseup"},color2Number:function(e){return"#"===e[0]&&(e=e.substr(1)),3===e.length&&(e="".concat(e[0]).concat(e[0]).concat(e[1]).concat(e[1]).concat(e[2]).concat(e[2])),parseInt(e,16)+0&16777215},number2Color:function(e){return"#"+("00000"+e.toString(16)).slice(-6)},number2Type:function(e){switch(e){case 0:return"right";case 1:return"top";case 2:return"bottom";default:return"right"}}},p=a(6),A=a.n(p),c={send:function(e){A.a.post(e.url,e.data).then((function(t){var a=t.data;a&&0===a.code?e.success&&e.success(a):e.error&&e.error(a&&a.msg)})).catch((function(t){console.error(t),e.error&&e.error()}))},read:function(e){A.a.get(e.url).then((function(t){var a=t.data;a&&0===a.code?e.success&&e.success(a.data.map((function(e){return{time:e[0],type:e[1],color:e[2],author:e[3],text:e[4]}}))):e.error&&e.error(a&&a.msg)})).catch((function(t){console.error(t),e.error&&e.error()}))}};var y={"zh-cn":{"Danmaku is loading":"弹幕加载中",Top:"顶部",Bottom:"底部",Rolling:"滚动","Input danmaku, hit Enter":"输入弹幕，回车发送","About author":"关于作者","DPlayer feedback":"播放器意见反馈","About DPlayer":"关于 DPlayer 播放器",Loop:"循环播放",Speed:"速度","Opacity for danmaku":"弹幕透明度",Normal:"正常","Please input danmaku content!":"要输入弹幕内容啊喂！","Set danmaku color":"设置弹幕颜色","Set danmaku type":"设置弹幕类型","Show danmaku":"显示弹幕","Video load failed":"视频加载失败","Danmaku load failed":"弹幕加载失败","Danmaku send failed":"弹幕发送失败","Switching to":"正在切换至","Switched to":"已经切换至",quality:"画质",FF:"快进",REW:"快退","Unlimited danmaku":"海量弹幕","Send danmaku":"发送弹幕",Setting:"设置","Full screen":"全屏","Web full screen":"页面全屏",Send:"发送",Screenshot:"截图",AirPlay:"无线投屏",s:"秒","Show subtitle":"显示字幕","Hide subtitle":"隐藏字幕",Volume:"音量",Live:"直播","Video info":"视频统计信息"},"zh-tw":{"Danmaku is loading":"彈幕載入中",Top:"頂部",Bottom:"底部",Rolling:"滾動","Input danmaku, hit Enter":"輸入彈幕，Enter 發送","About author":"關於作者","DPlayer feedback":"播放器意見回饋","About DPlayer":"關於 DPlayer 播放器",Loop:"循環播放",Speed:"速度","Opacity for danmaku":"彈幕透明度",Normal:"正常","Please input danmaku content!":"請輸入彈幕內容啊！","Set danmaku color":"設定彈幕顏色","Set danmaku type":"設定彈幕類型","Show danmaku":"顯示彈幕","Video load failed":"影片載入失敗","Danmaku load failed":"彈幕載入失敗","Danmaku send failed":"彈幕發送失敗","Switching to":"正在切換至","Switched to":"已經切換至",quality:"畫質",FF:"快進",REW:"快退","Unlimited danmaku":"巨量彈幕","Send danmaku":"發送彈幕",Setting:"設定","Full screen":"全螢幕","Web full screen":"頁面全螢幕",Send:"發送",Screenshot:"截圖",AirPlay:"無線投屏",s:"秒","Show subtitle":"顯示字幕","Hide subtitle":"隱藏字幕",Volume:"音量",Live:"直播","Video info":"影片統計訊息"}},u=function(e){var t=this;this.lang=e,this.tran=function(e){return y[t.lang]&&y[t.lang][e]?y[t.lang][e]:e}},h=a(22),f=a.n(h),m=a(23),C=a.n(m),b=a(24),g=a.n(b),v=a(25),x=a.n(v),w=a(26),B=a.n(w),k=a(27),S=a.n(k),E=a(28),I=a.n(E),q=a(29),Y=a.n(q),T=a(30),z=a.n(T),U=a(31),L=a.n(U),M=a(32),W=a.n(M),O=a(33),F=a.n(O),D=a(34),R=a.n(D),j=a(35),P=a.n(j),H=a(36),_=a.n(H),G=a(37),Q=a.n(G),N=a(38),V=a.n(N),K={play:f.a,pause:C.a,volumeUp:g.a,volumeDown:x.a,volumeOff:B.a,full:S.a,fullWeb:I.a,setting:Y.a,right:z.a,comment:L.a,commentOff:W.a,send:F.a,pallette:R.a,camera:P.a,subtitle:Q.a,loading:V.a,airplay:_.a},X=a(39),J=a.n(X);function $(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Z=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t.container,this.options=t.options,this.index=t.index,this.tran=t.tran,this.init()}var t,a,r;return t=e,(a=[{key:"init",value:function(){this.container.innerHTML=J()({options:this.options,index:this.index,tran:this.tran,icons:K,mobile:d.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:this.options.airplay,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-tag-input"),this.tagButton=this.container.querySelector(".dplayer-tag-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-tag-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-tag-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-tag-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-tag-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.notice=this.container.querySelector(".dplayer-notice"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data")}}])&&$(t.prototype,a),r&&$(t,r),e}();function ee(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var te=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change","add_tags"]}var t,a,r;return t=e,(a=[{key:"on",value:function(e,t,a){this.type(e)&&"function"==typeof t&&(this.events[e]||(this.events[e]=[]),this.events[e].push({cb:t,once:!!a}))}},{key:"trigger",value:function(e,t){if(this.events[e]&&this.events[e].length)for(var a=0;a<this.events[e].length;a++){var r=this.events[e][a];r.cb(t),r.once&&(this.events[e][a]=null,this.events[e].splice(a,1))}}},{key:"type",value:function(e){return-1!==this.playerEvents.indexOf(e)?"player":-1!==this.videoEvents.indexOf(e)?"video":(console.error("Unknown event name: ".concat(e)),null)}}])&&ee(t.prototype,a),r&&ee(t,r),e}();function ae(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var re=function(){function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.player=t,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",(function(){a.player.resize()})),this.player.events.on("webfullscreen_cancel",(function(){a.player.resize(),d.setScrollPosition(a.lastScrollPosition)}));var r=function(){a.player.resize(),a.isFullScreen("browser")?a.player.events.trigger("fullscreen"):(d.setScrollPosition(a.lastScrollPosition),a.player.events.trigger("fullscreen_cancel"))},o=function(){var e=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;e&&e!==a.player.container||(a.player.resize(),e?a.player.events.trigger("fullscreen"):(d.setScrollPosition(a.lastScrollPosition),a.player.events.trigger("fullscreen_cancel")))};/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",o),document.addEventListener("fullscreenchange",o)):(this.player.container.addEventListener("fullscreenchange",r),this.player.container.addEventListener("webkitfullscreenchange",r),document.addEventListener("msfullscreenchange",o),document.addEventListener("MSFullscreenChange",o))}var t,a,r;return t=e,(a=[{key:"isFullScreen",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"browser";switch(e){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"browser",t="browser"===e?"web":"browser",a=this.isFullScreen(t);switch(a||(this.lastScrollPosition=d.getScrollPosition()),e){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}a&&this.cancel(t)}},{key:"cancel",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"browser";switch(e){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"browser";this.isFullScreen(e)?this.cancel(e):this.request(e)}}])&&ae(t.prototype,a),r&&ae(t,r),e}();function oe(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ne=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:t.options.hasOwnProperty("volume")?t.options.volume:.7,unlimited:(t.options.danmaku&&t.options.danmaku.unlimited?1:0)||0,subtitle:1},this.data={},this.init()}var t,a,r;return t=e,(a=[{key:"init",value:function(){for(var e in this.storageName){var t=this.storageName[e];this.data[e]=parseFloat(d.storage.get(t)||this.default[e])}}},{key:"get",value:function(e){return this.data[e]}},{key:"set",value:function(e,t){this.data[e]=t,d.storage.set(this.storageName[e],t)}}])&&oe(t.prototype,a),r&&oe(t,r),e}();function le(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ie=function(){function e(t,a,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t,this.video=a,this.options=r,this.events=o,this.init()}var t,a,r;return t=e,(a=[{key:"init",value:function(){var e=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var t=this.video.textTracks[0];t.oncuechange=function(){var a=t.activeCues[0];if(e.container.innerHTML="",a){var r=document.createElement("div");r.appendChild(a.getCueAsHTML());var o=r.innerHTML.split(/\r?\n/).map((function(e){return"<p>".concat(e,"</p>")})).join("");e.container.innerHTML=o}e.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}])&&le(t.prototype,a),r&&le(t,r),e}();function se(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var de=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.elements={},this.elements.volume=t.volumeBar,this.elements.played=t.playedBar,this.elements.loaded=t.loadedBar}var t,a,r;return t=e,(a=[{key:"set",value:function(e,t,a){t=Math.max(t,0),t=Math.min(t,1),this.elements[e].style[a]=100*t+"%"}},{key:"get",value:function(e){return parseFloat(this.elements[e].style.width)/100}}])&&se(t.prototype,a),r&&se(t,r),e}();function pe(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Ae=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.player=t,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},this.types=["loading","info","fps"],this.init()}var t,a,r;return t=e,(a=[{key:"init",value:function(){var e=this;this.types.map((function(t){return"fps"!==t&&e["init".concat(t,"Checker")](),t}))}},{key:"initloadingChecker",value:function(){var e=this,t=0,a=0,r=!1;this.loadingChecker=setInterval((function(){e.enableloadingChecker&&(a=e.player.video.currentTime,r||a!==t||e.player.video.paused||(e.player.container.classList.add("dplayer-loading"),r=!0),r&&a>t&&!e.player.video.paused&&(e.player.container.classList.remove("dplayer-loading"),r=!1),t=a)}),100)}},{key:"initfpsChecker",value:function(){var e=this;window.requestAnimationFrame((function(){if(e.enablefpsChecker)if(e.initfpsChecker(),e.fpsStart){e.fpsIndex++;var t=new Date;t-e.fpsStart>1e3&&(e.player.infoPanel.fps(e.fpsIndex/(t-e.fpsStart)*1e3),e.fpsStart=new Date,e.fpsIndex=0)}else e.fpsStart=new Date,e.fpsIndex=0;else e.fpsStart=0,e.fpsIndex=0}))}},{key:"initinfoChecker",value:function(){var e=this;this.infoChecker=setInterval((function(){e.enableinfoChecker&&e.player.infoPanel.update()}),1e3)}},{key:"enable",value:function(e){this["enable".concat(e,"Checker")]=!0,"fps"===e&&this.initfpsChecker()}},{key:"disable",value:function(e){this["enable".concat(e,"Checker")]=!1}},{key:"destroy",value:function(){var e=this;this.types.map((function(t){return e["enable".concat(t,"Checker")]=!1,e["".concat(t,"Checker")]&&clearInterval(e["".concat(t,"Checker")]),t}))}}])&&pe(t.prototype,a),r&&pe(t,r),e}();function ce(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ye=function(){function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t,this.container.addEventListener("animationend",(function(){a.container.classList.remove("dplayer-bezel-transition")}))}var t,a,r;return t=e,(a=[{key:"switch",value:function(e){this.container.innerHTML=e,this.container.classList.add("dplayer-bezel-transition")}}])&&ce(t.prototype,a),r&&ce(t,r),e}();function ue(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var he=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t.container,this.barWidth=t.barWidth,this.container.style.backgroundImage="url('".concat(t.url,"')"),this.events=t.events}var t,a,r;return t=e,(a=[{key:"resize",value:function(e,t,a){this.container.style.width="".concat(e,"px"),this.container.style.height="".concat(t,"px"),this.container.style.top="".concat(2-t,"px"),this.barWidth=a}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(e){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(e/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(e-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&ue(t.prototype,a),r&&ue(t,r),e}();function fe(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var me=function(){function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.player=t,this.autoHideTimer=0,d.isMobile||(this.player.container.addEventListener("mousemove",(function(){a.setAutoHide()})),this.player.container.addEventListener("click",(function(){a.setAutoHide()})),this.player.on("play",(function(){a.setAutoHide()})),this.player.on("pause",(function(){a.setAutoHide()}))),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),d.isMobile||this.initVolumeButton()}var t,a,r;return t=e,(a=[{key:"initPlayButton",value:function(){var e=this;this.player.template.playButton.addEventListener("click",(function(){e.player.toggle()})),this.player.template.mobilePlayButton.addEventListener("click",(function(){e.player.toggle()})),d.isMobile?(this.player.template.videoWrap.addEventListener("click",(function(){e.toggle()})),this.player.template.controllerMask.addEventListener("click",(function(){e.toggle()}))):(this.player.template.videoWrap.addEventListener("click",(function(){e.player.toggle()})),this.player.template.controllerMask.addEventListener("click",(function(){e.player.toggle()})))}},{key:"initHighlights",value:function(){var e=this;this.player.on("durationchange",(function(){e.setHighlights()}))}},{key:"setHighlights",value:function(){var e=this;if(1!==this.player.video.duration&&this.player.video.duration!==1/0&&this.player.options.highlight){var t=document.querySelectorAll(".dplayer-highlight");[].slice.call(t,0).forEach((function(t){e.player.template.playedBarWrap.removeChild(t)}));for(var a=0;a<this.player.options.highlight.length;a++)if(this.player.options.highlight[a].text&&this.player.options.highlight[a].time){var r=document.createElement("div");r.classList.add("dplayer-highlight"),r.style.left=this.player.options.highlight[a].time/this.player.video.duration*100+"%",r.innerHTML='<span class="dplayer-highlight-text">'+this.player.options.highlight[a].text+"</span>",this.player.template.playedBarWrap.insertBefore(r,this.player.template.playedBarTime)}}}},{key:"initThumbnails",value:function(){var e=this;this.player.options.video.thumbnails&&(this.thumbnails=new he({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",(function(){e.thumbnails.resize(160,e.player.video.videoHeight/e.player.video.videoWidth*160,e.player.template.barWrap.offsetWidth)})))}},{key:"initPlayedBar",value:function(){var e=this,t=function(t){var a=((t.clientX||t.changedTouches[0].clientX)-d.getBoundingClientRectViewLeft(e.player.template.playedBarWrap))/e.player.template.playedBarWrap.clientWidth;a=Math.max(a,0),a=Math.min(a,1),e.player.bar.set("played",a,"width"),e.player.template.ptime.innerHTML=d.secondToTime(a*e.player.video.duration)},a=function a(r){document.removeEventListener(d.nameMap.dragEnd,a),document.removeEventListener(d.nameMap.dragMove,t);var o=((r.clientX||r.changedTouches[0].clientX)-d.getBoundingClientRectViewLeft(e.player.template.playedBarWrap))/e.player.template.playedBarWrap.clientWidth;o=Math.max(o,0),o=Math.min(o,1),e.player.bar.set("played",o,"width"),e.player.seek(e.player.bar.get("played")*e.player.video.duration),e.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(d.nameMap.dragStart,(function(){e.player.timer.disable("progress"),document.addEventListener(d.nameMap.dragMove,t),document.addEventListener(d.nameMap.dragEnd,a)})),this.player.template.playedBarWrap.addEventListener(d.nameMap.dragMove,(function(t){if(e.player.video.duration){var a=e.player.template.playedBarWrap.getBoundingClientRect().left,r=(t.clientX||t.changedTouches[0].clientX)-a;if(r<0||r>e.player.template.playedBarWrap.offsetWidth)return;var o=e.player.video.duration*(r/e.player.template.playedBarWrap.offsetWidth);d.isMobile&&e.thumbnails&&e.thumbnails.show(),e.thumbnails&&e.thumbnails.move(r),e.player.template.playedBarTime.style.left="".concat(r-(o>=3600?25:20),"px"),e.player.template.playedBarTime.innerText=d.secondToTime(o),e.player.template.playedBarTime.classList.remove("hidden")}})),this.player.template.playedBarWrap.addEventListener(d.nameMap.dragEnd,(function(){d.isMobile&&e.thumbnails&&e.thumbnails.hide()})),d.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",(function(){e.player.video.duration&&(e.thumbnails&&e.thumbnails.show(),e.player.template.playedBarTime.classList.remove("hidden"))})),this.player.template.playedBarWrap.addEventListener("mouseleave",(function(){e.player.video.duration&&(e.thumbnails&&e.thumbnails.hide(),e.player.template.playedBarTime.classList.add("hidden"))})))}},{key:"initFullButton",value:function(){var e=this;this.player.template.browserFullButton.addEventListener("click",(function(){e.player.fullScreen.toggle("browser")})),this.player.template.webFullButton.addEventListener("click",(function(){e.player.fullScreen.toggle("web")}))}},{key:"initVolumeButton",value:function(){var e=this,t=function(t){var a=t||window.event,r=((a.clientX||a.changedTouches[0].clientX)-d.getBoundingClientRectViewLeft(e.player.template.volumeBarWrap)-5.5)/35;e.player.volume(r)},a=function a(){document.removeEventListener(d.nameMap.dragEnd,a),document.removeEventListener(d.nameMap.dragMove,t),e.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",(function(t){var a=t||window.event,r=((a.clientX||a.changedTouches[0].clientX)-d.getBoundingClientRectViewLeft(e.player.template.volumeBarWrap)-5.5)/35;e.player.volume(r)})),this.player.template.volumeBarWrapWrap.addEventListener(d.nameMap.dragStart,(function(){document.addEventListener(d.nameMap.dragMove,t),document.addEventListener(d.nameMap.dragEnd,a),e.player.template.volumeButton.classList.add("dplayer-volume-active")})),this.player.template.volumeButtonIcon.addEventListener("click",(function(){e.player.video.muted?(e.player.video.muted=!1,e.player.switchVolumeIcon(),e.player.bar.set("volume",e.player.volume(),"width")):(e.player.video.muted=!0,e.player.template.volumeIcon.innerHTML=K.volumeOff,e.player.bar.set("volume",0,"width"))}))}},{key:"initQualityButton",value:function(){var e=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",(function(t){t.target.classList.contains("dplayer-quality-item")&&e.player.switchQuality(t.target.dataset.index)}))}},{key:"initScreenshotButton",value:function(){var e=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",(function(){var t,a=document.createElement("canvas");a.width=e.player.video.videoWidth,a.height=e.player.video.videoHeight,a.getContext("2d").drawImage(e.player.video,0,0,a.width,a.height),a.toBlob((function(e){t=URL.createObjectURL(e);var a=document.createElement("a");a.href=t,a.download="DPlayer.png",a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(t)})),e.player.events.trigger("screenshot",t)}))}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",function(e){switch(e.availability){case"available":this.template.airplayButton.disable=!1;break;default:this.template.airplayButton.disable=!0}this.template.airplayButton.addEventListener("click",function(){this.video.webkitShowPlaybackTargetPicker()}.bind(this))}.bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initSubtitleButton",value:function(){var e=this;this.player.options.subtitle&&(this.player.events.on("subtitle_show",(function(){e.player.template.subtitleButton.dataset.balloon=e.player.tran("Hide subtitle"),e.player.template.subtitleButtonInner.style.opacity="",e.player.user.set("subtitle",1)})),this.player.events.on("subtitle_hide",(function(){e.player.template.subtitleButton.dataset.balloon=e.player.tran("Show subtitle"),e.player.template.subtitleButtonInner.style.opacity="0.4",e.player.user.set("subtitle",0)})),this.player.template.subtitleButton.addEventListener("click",(function(){e.player.subtitle.toggle()})))}},{key:"setAutoHide",value:function(){var e=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout((function(){!e.player.video.played.length||e.player.paused||e.disableAutoHide||e.hide()}),3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){clearTimeout(this.autoHideTimer)}}])&&fe(t.prototype,a),r&&fe(t,r),e}();function Ce(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var be=function(){function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.player=t,this.player.template.mask.addEventListener("click",(function(){a.hide()})),this.player.template.settingButton.addEventListener("click",(function(){a.show()})),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",(function(){a.player.template.loopToggle.checked=!a.player.template.loopToggle.checked,a.player.template.loopToggle.checked?a.loop=!0:a.loop=!1,a.hide()})),this.player.template.speed.addEventListener("click",(function(){a.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),a.player.template.settingBox.classList.add("dplayer-setting-box-speed")}));for(var r=function(e){a.player.template.speedItem[e].addEventListener("click",(function(){a.player.speed(a.player.template.speedItem[e].dataset.speed),a.hide()}))},o=0;o<this.player.template.speedItem.length;o++)r(o)}var t,a,r;return t=e,(a=[{key:"hide",value:function(){var e=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout((function(){e.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),e.player.template.settingBox.classList.remove("dplayer-setting-box-speed")}),300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&Ce(t.prototype,a),r&&Ce(t,r),e}();var ge=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t.options.hotkey&&document.addEventListener("keydown",(function(e){if(t.focus){var a=document.activeElement.tagName.toUpperCase(),r=document.activeElement.getAttribute("contenteditable");if("INPUT"!==a&&"TEXTAREA"!==a&&""!==r&&"true"!==r){var o,n=e||window.event;switch(n.keyCode){case 32:n.preventDefault(),t.toggle();break;case 37:if(n.preventDefault(),t.options.live)break;t.seek(t.video.currentTime-5),t.controller.setAutoHide();break;case 39:if(n.preventDefault(),t.options.live)break;t.seek(t.video.currentTime+5),t.controller.setAutoHide();break;case 38:n.preventDefault(),o=t.volume()+.1,t.volume(o);break;case 40:n.preventDefault(),o=t.volume()-.1,t.volume(o)}}}})),document.addEventListener("keydown",(function(e){switch((e||window.event).keyCode){case 27:t.fullScreen.isFullScreen("web")&&t.fullScreen.cancel("web")}}))};function ve(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var xe=function(){function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t.template.infoPanel,this.template=t.template,this.video=t.video,this.player=t,this.template.infoPanelClose.addEventListener("click",(function(){a.hide()}))}var t,a,r;return t=e,(a=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.0.12"," ").concat("347dbcc"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(e){this.template.infoFPS.innerHTML="".concat(e.toFixed(1))}}])&&ve(t.prototype,a),r&&ve(t,r),e}(),we=a(4),Be=a.n(we);function ke(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Se=function(){function e(t,a){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.player=t,this.player.template.mask.addEventListener("click",(function(){r.hide()})),this.player.template.tagButton.addEventListener("click",(function(){r.show()})),this.player.template.commentInput.addEventListener("keydown",(function(e){13===(e||window.event).keyCode&&r.send()})),this.player.template.commentSendButton.addEventListener("click",(function(){r.send()})),this.sendTag=a}var t,a,r;return t=e,(a=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1}},{key:"send",value:function(){var e=this;if(this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")){var t={time:this.player.video.currentTime,value:this.player.template.commentInput.value};this.sendTag(t).then((function(){e.player.events.trigger("add_tags",t),e.player.template.commentInput.value="",e.hide()}))}else this.player.notice(this.player.tran("Please input tag content!"))}}])&&ke(t.prototype,a),r&&ke(t,r),e}(),Ee={ERROR:"hlsError"},Ie={NETWORK_ERROR:"networkError",MEDIA_ERROR:"mediaError",KEY_SYSTEM_ERROR:"keySystemError",MUX_ERROR:"muxError",OTHER_ERROR:"otherError"};function qe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Ye(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Te(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ze=0,Ue=[],Le=function(){function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=function(e){var t={container:e.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:c,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}}};for(var a in t)t.hasOwnProperty(a)&&!e.hasOwnProperty(a)&&(e[a]=t[a]);return e.video&&!e.video.type&&(e.video.type="auto"),e.subtitle&&(!e.subtitle.type&&(e.subtitle.type="webvtt"),!e.subtitle.fontSize&&(e.subtitle.fontSize="20px"),!e.subtitle.bottom&&(e.subtitle.bottom="40px"),!e.subtitle.color&&(e.subtitle.color="#fff")),e.video.quality&&(e.video.url=e.video.quality[e.video.defaultQuality].url),e.lang&&(e.lang=e.lang.toLowerCase()),e}(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?qe(Object(a),!0).forEach((function(t){Ye(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):qe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({preload:"webtorrent"===t.video.type?"none":"metadata"},t)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new u(this.options.lang).tran,this.events=new te,this.user=new ne(this),this.container=this.options.container,this.container.classList.add("dplayer"),d.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.template=new Z({container:this.container,options:this.options,index:ze,tran:this.tran}),this.video=this.template.video,this.bar=new de(this.template),this.bezel=new ye(this.template.bezel),this.fullScreen=new re(this),this.controller=new me(this),this.options.sendTag&&(this.tag=new Se(this,this.options.sendTag)),this.setting=new be(this),this.plugins={},document.addEventListener("click",(function(){a.focus=!1}),!0),this.container.addEventListener("click",(function(){a.focus=!0}),!0),this.paused=!0,this.timer=new Ae(this),this.hotkey=new ge(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new xe(this),this.options.autoplay&&this.play(),ze++,Ue.push(this),this.switchTimer=null}var t,a,r;return t=e,r=[{key:"version",get:function(){return"1.0.12"}}],(a=[{key:"seek",value:function(e){e=Math.max(e,0),this.video.duration&&(e=Math.min(e,this.video.duration)),this.video.currentTime<e?this.notice("".concat(this.tran("FF")," ").concat((e-this.video.currentTime).toFixed(0)," ").concat(this.tran("s"))):this.video.currentTime>e&&this.notice("".concat(this.tran("REW")," ").concat((this.video.currentTime-e).toFixed(0)," ").concat(this.tran("s"))),this.video.currentTime=e,this.bar.set("played",e/this.video.duration,"width"),this.template.ptime.innerHTML=d.secondToTime(e)}},{key:"play",value:function(e){var t=this;if(this.paused=!1,this.video.paused&&!d.isMobile&&this.bezel.switch(K.play),this.template.playButton.innerHTML=K.pause,this.template.mobilePlayButton.innerHTML=K.pause,e||i.a.resolve(this.video.play()).catch((function(e){console.log(e),t.pause()})).then((function(){})),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.options.mutex)for(var a=0;a<Ue.length;a++)this!==Ue[a]&&Ue[a].pause()}},{key:"pause",value:function(e){console.log("pause"),this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||d.isMobile||this.bezel.switch(K.pause),this.template.playButton.innerHTML=K.play,this.template.mobilePlayButton.innerHTML=K.play,e||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused")}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=K.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=K.volumeDown:this.template.volumeIcon.innerHTML=K.volumeOff}},{key:"volume",value:function(e,t,a){if(e=parseFloat(e),!isNaN(e)){e=Math.max(e,0),e=Math.min(e,1),this.bar.set("volume",e,"width");var r="".concat((100*e).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=r,t||this.user.set("volume",e),a||this.notice("".concat(this.tran("Volume")," ").concat((100*e).toFixed(0),"%")),this.video.volume=e,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(e,t,a){this.events.on(e,t,a)}},{key:"switchVideo",value:function(e){var t=this;this.pause(),this.openSwitchTimer(),this.initMSE(this.video,e.type||"auto",e.url),this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.clearNotice(),this.on("durationchange",(function(){return t.checkSwitchTimer()}),!0),this.on("loadedmetadata",(function(){t.video.poster=e.pic?e.pic:""}),!0),this.on("canplay",(function(){t.video.currentTime=0}),!0)}},{key:"openSwitchTimer",value:function(){var e=this;this.switchTimer=setTimeout((function(){e.container.classList.add("dplayer-loading"),e.switchTimer=null}),500)}},{key:"checkSwitchTimer",value:function(){this.switchTimer?(clearTimeout(this.switchTimer),this.switchTimer=null):this.container.classList.remove("dplayer-loading")}},{key:"clearSwitchTimer",value:function(){this.switchTimer&&(clearTimeout(this.switchTimer),this.switchTimer=null)}},{key:"initMSE",value:function(e,t,a){var r=this;if(this.type=t,this.options.video.customType&&this.options.video.customType[t])"[object Function]"===Object.prototype.toString.call(this.options.video.customType[t])?this.options.video.customType[t](this.video,this):console.error("Illegal customType: ".concat(t));else switch("auto"===this.type&&(/m3u8(#|\?|$)/i.exec(e.src)?this.type="hls":/.flv(#|\?|$)/i.exec(e.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(e.src)?this.type="dash":this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){this.plugins.hls&&(console.log("switch hls videos."),this.plugins.hls.destroy(),this.plugins.hls=null);var o=this.options.pluginOptions.hls,n=new window.Hls(o);this.plugins.hls=n,n.loadSource(a||e.src),n.attachMedia(e),n.on(Ee.ERROR,(function(e,t){if(console.log("hlserror:",t),t.fatal)switch(t.type){case Ie.NETWORK_ERROR:r.pause(),console.log("fatal network error encountered, try to recover"),n.startLoad(),r.play();break;case Ie.MEDIA_ERROR:console.log("fatal media error encountered, try to recover"),r.pause(),n.recoverMediaError(),r.play();break;default:n.destroy()}else t.type===Ie.MEDIA_ERROR&&"bufferFullError"===t.details&&d.isFirefox&&(console.log("hlserror","bufferFullError"),r.pause(),n.recoverMediaError(),r.play(),console.log("play again."))})),this.events.on("destroy",(function(){n.destroy(),delete r.plugins.hls}))}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var l=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:a||e.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=l,l.attachMediaElement(e),l.load(),this.events.on("destroy",(function(){l.unload(),l.detachMediaElement(),l.destroy(),delete r.plugins.flvjs}))}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var i=window.dashjs.MediaPlayer().create().initialize(e,a||e.src,!1),s=this.options.pluginOptions.dash;i.updateSettings(s),this.plugins.dash=i,this.events.on("destroy",(function(){window.dashjs.MediaPlayer().reset(),delete r.plugins.dash}))}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var p=this.options.pluginOptions.webtorrent,A=new window.WebTorrent(p);this.plugins.webtorrent=A;var c=a||e.src;e.src="",e.preload="metadata",e.addEventListener("durationchange",(function(){return r.container.classList.remove("dplayer-loading")}),{once:!0}),A.add(c,(function(e){e.files.find((function(e){return e.name.endsWith(".mp4")})).renderTo(r.video,{autoplay:r.options.autoplay,controls:!1})})),this.events.on("destroy",(function(){A.remove(c),A.destroy(),delete r.plugins.webtorrent}))}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(e,t){var a=this;this.initMSE(e,t),this.on("durationchange",(function(){1!==e.duration&&e.duration!==1/0&&(a.template.dtime.innerHTML=d.secondToTime(e.duration))})),this.on("progress",(function(){var t=e.buffered.length?e.buffered.end(e.buffered.length-1)/e.duration:0;a.bar.set("loaded",t,"width")})),this.on("error",(function(){a.video.error&&a.tran&&a.notice&&"webtorrent"!==a.type&&a.notice(a.tran("Video load failed"),-1)})),this.on("ended",(function(){a.bar.set("played",1,"width"),a.setting.loop?(a.seek(0),a.play()):a.pause()})),this.on("play",(function(){a.paused&&a.play(!0)})),this.on("pause",(function(){a.paused||a.pause(!0)})),this.on("timeupdate",(function(){a.bar.set("played",a.video.currentTime/a.video.duration,"width");var e=d.secondToTime(a.video.currentTime);a.template.ptime.innerHTML!==e&&(a.template.ptime.innerHTML=e)}));for(var r=function(t){e.addEventListener(a.events.videoEvents[t],(function(){a.events.trigger(a.events.videoEvents[t])}))},o=0;o<this.events.videoEvents.length;o++)r(o);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new ie(this.template.subtitle,this.video,this.options.subtitle,this.events),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(e){var t=this;if(e="string"==typeof e?parseInt(e):e,this.qualityIndex!==e&&!this.switchingQuality){this.qualityIndex=e,this.switchingQuality=!0,this.quality=this.options.video.quality[e],this.template.qualityButton.innerHTML=this.quality.name;var a=this.video.paused;this.video.pause();var r=Be()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),o=(new DOMParser).parseFromString(r,"text/html").body.firstChild;this.template.videoWrap.insertBefore(o,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=o,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("Switching to")," ").concat(this.quality.name," ").concat(this.tran("quality")),-1),this.events.trigger("quality_start",this.quality),this.on("canplay",(function(){if(t.prevVideo){if(t.video.currentTime!==t.prevVideo.currentTime)return void t.seek(t.prevVideo.currentTime);t.template.videoWrap.removeChild(t.prevVideo),t.video.classList.add("dplayer-video-current"),a||t.video.play(),t.prevVideo=null,t.notice("".concat(t.tran("Switched to")," ").concat(t.quality.name," ").concat(t.tran("quality"))),t.switchingQuality=!1,t.events.trigger("quality_end")}}))}}},{key:"notice",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.8;this.template.notice.style.transitionDuration="0.3s",this.template.notice.innerHTML=e,this.template.notice.style.opacity=r,this.noticeTime&&clearTimeout(this.noticeTime),this.events.trigger("notice_show",e),a>0&&(this.noticeTime=setTimeout((function(){t.template.notice.style.opacity=0,t.events.trigger("notice_hide")}),a))}},{key:"clearNotice",value:function(){this.template.notice.style.transitionDuration="0s",this.template.notice.style.opacity=0,this.template.notice.innerHTML="",this.noticeTime&&clearTimeout(this.noticeTime),this.events.trigger("notice_hide")}},{key:"resize",value:function(){this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(e){this.video.playbackRate=e}},{key:"destroy",value:function(){Ue.splice(Ue.indexOf(this),1),this.pause(),this.controller.destroy(),this.timer.destroy(),"normal"===this.type&&(this.video.src=""),this.container.innerHTML="",this.clearSwitchTimer(),this.events.trigger("destroy")}},{key:"setHighlight",value:function(e){this.options.highlight=e,this.controller.setHighlights()}}])&&Te(t.prototype,a),r&&Te(t,r),e}();console.log("\n".concat(" %c DPlayer v","1.0.12"," ").concat("347dbcc"," %c http://dplayer.js.org ","\n","\n"),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");t.default=Le}]).default}));
//# sourceMappingURL=TagPlayer.min.js.map

/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var ownKeys = __webpack_require__("56ef");
var toIndexedObject = __webpack_require__("fc6a");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var createProperty = __webpack_require__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e439":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
var DESCRIPTORS = __webpack_require__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b3484de-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/vue-tagplayer.vue?vue&type=template&id=ac1ecfdc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"tagplayer"})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/vue-tagplayer.vue?vue&type=template&id=ac1ecfdc&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("dbb4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js









function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/tagplayer/dist/TagPlayer.min.js
var TagPlayer_min = __webpack_require__("9366");
var TagPlayer_min_default = /*#__PURE__*/__webpack_require__.n(TagPlayer_min);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/vue-tagplayer.vue?vue&type=script&lang=js&



//
//
//
//

var events = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "mozaudioavailable", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting", "screenshot", "thumbnails_show", "thumbnails_hide", "notice_show", "notice_hide", "quality_start", "quality_end", "destroy", "resize", "fullscreen", "fullscreen_cancel", "subtitle_show", "subtitle_hide", "subtitle_change", "add_tags"];
/* harmony default export */ var vue_tagplayervue_type_script_lang_js_ = ({
  name: "vue-tagplayer",
  props: {
    options: Object,
    initTagPlayer: Function
  },
  data: function data() {
    return {
      tp: null
    };
  },
  mounted: function mounted() {
    console.log("mounted video.");
    var tp = this.tp = new TagPlayer_min_default.a(_objectSpread2(_objectSpread2({}, this.options), {}, {
      container: this.$refs.tagplayer
    }));
    this.initTagPlayer(tp);
    this.registerEvent(tp);
  },
  destroyed: function destroyed() {
    console.log("destroy video.");
    this.tp && this.tp.destroy();
  },
  methods: {
    registerEvent: function registerEvent(player) {
      var _this = this;

      events.forEach(function (event) {
        player.on(event, function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _this.$emit.apply(_this, [event].concat(args));
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./src/lib/vue-tagplayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_vue_tagplayervue_type_script_lang_js_ = (vue_tagplayervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/lib/vue-tagplayer.vue





/* normalize component */

var component = normalizeComponent(
  lib_vue_tagplayervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_tagplayer = (component.exports);
// CONCATENATED MODULE: ./src/lib/index.js


var tagplayer = {
  install: function install(Vue) {
    Vue.component(vue_tagplayer.name, vue_tagplayer);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(tagplayer);
}

/* harmony default export */ var lib = (tagplayer);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (lib);



/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });
//# sourceMappingURL=vue-tagplayer.common.js.map