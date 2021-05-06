this["imgSlider"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./imgSlider.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../icons/nextButton.svg":
/*!*******************************!*\
  !*** ../icons/nextButton.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 444.819 444.819\" style=\"enable-background:new 0 0 444.819 444.819;\" xml:space=\"preserve\"><g><path d=\"M352.025,196.712L165.884,10.848C159.029,3.615,150.469,0,140.187,0c-10.282,0-18.842,3.619-25.697,10.848L92.792,32.264 c-7.044,7.043-10.566,15.604-10.566,25.692c0,9.897,3.521,18.56,10.566,25.981l138.753,138.473L92.786,361.168 c-7.042,7.043-10.564,15.604-10.564,25.693c0,9.896,3.521,18.562,10.564,25.98l21.7,21.413 c7.043,7.043,15.612,10.564,25.697,10.564c10.089,0,18.656-3.521,25.697-10.564l186.145-185.864 c7.046-7.423,10.571-16.084,10.571-25.981C362.597,212.321,359.071,203.755,352.025,196.712z\"></path></g></svg>"

/***/ }),

/***/ "../icons/pauseButton.svg":
/*!********************************!*\
  !*** ../icons/pauseButton.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 45.975 45.975\" style=\"enable-background:new 0 0 45.975 45.975;\" xml:space=\"preserve\"><g><g><path d=\"M13.987,0c-2.762,0-5,2.239-5,5v35.975c0,2.763,2.238,5,5,5s5-2.238,5-5V5C18.987,2.238,16.75,0,13.987,0z\"></path><path d=\"M31.987,0c-2.762,0-5,2.239-5,5v35.975c0,2.762,2.238,5,5,5s5-2.238,5-5V5C36.987,2.239,34.749,0,31.987,0z\"></path></g></g></svg>"

/***/ }),

/***/ "../icons/playButton.svg":
/*!*******************************!*\
  !*** ../icons/playButton.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 163.861 163.861\" style=\"enable-background:new 0 0 163.861 163.861;\" xml:space=\"preserve\"><g><path d=\"M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275 c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z\"></path></g></svg>"

/***/ }),

/***/ "../icons/previousButton.svg":
/*!***********************************!*\
  !*** ../icons/previousButton.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 444.531 444.531\" style=\"enable-background:new 0 0 444.531 444.531;\" xml:space=\"preserve\"><g><path d=\"M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835 l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425 c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564 s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978 L213.13,222.409z\"></path></g></svg>"

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!./style.css":
/*!********************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slider {\r\n    overflow: hidden;\r\n    position: relative;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    max-width: 500px;\r\n    cursor: grab;\r\n}\r\n\r\n.slides-collection {\r\n    display: flex;\r\n    align-self: normal;\r\n    transition: transform 0.5s ease-in-out;\r\n}\r\n\r\n.single-slide {\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    user-select: none;\r\n}\r\n\r\n.slide-image {\r\n    display: inline-block;\r\n    height: auto;\r\n    max-width: 100%;\r\n}\r\n\r\n.slider-button {\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 35px;\r\n    height: 35px;\r\n    color: black;\r\n    background: white;\r\n    border-radius: 50%;\r\n    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);\r\n    text-decoration: none;\r\n    transition: transform 0.2s ease-in-out;\r\n}\r\n\r\n.slider-button:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.slider-button svg {\r\n    width: 15px;\r\n    transition: transform 0.2s ease-in-out;\r\n}\r\n\r\n.previous-button {\r\n    left: 0;\r\n}\r\n\r\n.next-button {\r\n    right: 0;\r\n}\r\n\r\n.playpause-button {\r\n    display: none;\r\n}\r\n\r\n.pausedState {\r\n    position: absolute;\r\n    transform: scale(0);\r\n}", "",{"version":3,"sources":["style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,sCAAsC;AAC1C;;AAEA;IACI,cAAc;IACd,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,2CAA2C;IAC3C,qBAAqB;IACrB,sCAAsC;AAC1C;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,sCAAsC;AAC1C;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB","file":"style.css","sourcesContent":[".slider {\r\n    overflow: hidden;\r\n    position: relative;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    max-width: 500px;\r\n    cursor: grab;\r\n}\r\n\r\n.slides-collection {\r\n    display: flex;\r\n    align-self: normal;\r\n    transition: transform 0.5s ease-in-out;\r\n}\r\n\r\n.single-slide {\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    user-select: none;\r\n}\r\n\r\n.slide-image {\r\n    display: inline-block;\r\n    height: auto;\r\n    max-width: 100%;\r\n}\r\n\r\n.slider-button {\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 35px;\r\n    height: 35px;\r\n    color: black;\r\n    background: white;\r\n    border-radius: 50%;\r\n    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);\r\n    text-decoration: none;\r\n    transition: transform 0.2s ease-in-out;\r\n}\r\n\r\n.slider-button:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.slider-button svg {\r\n    width: 15px;\r\n    transition: transform 0.2s ease-in-out;\r\n}\r\n\r\n.previous-button {\r\n    left: 0;\r\n}\r\n\r\n.next-button {\r\n    right: 0;\r\n}\r\n\r\n.playpause-button {\r\n    display: none;\r\n}\r\n\r\n.pausedState {\r\n    position: absolute;\r\n    transform: scale(0);\r\n}"]}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"slider": "slider",
	"slides-collection": "slides-collection",
	"slidesCollection": "slides-collection",
	"single-slide": "single-slide",
	"singleSlide": "single-slide",
	"slide-image": "slide-image",
	"slideImage": "slide-image",
	"slider-button": "slider-button",
	"sliderButton": "slider-button",
	"previous-button": "previous-button",
	"previousButton": "previous-button",
	"next-button": "next-button",
	"nextButton": "next-button",
	"playpause-button": "playpause-button",
	"playpauseButton": "playpause-button",
	"pausedState": "pausedState"
};
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./imgSlider.js":
/*!**********************!*\
  !*** ./imgSlider.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sliderLayout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliderLayout.js */ "./sliderLayout.js");
/* harmony import */ var _sliderPosition_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sliderPosition.js */ "./sliderPosition.js");
/* harmony import */ var _sliderPosition_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sliderPosition_js__WEBPACK_IMPORTED_MODULE_1__);


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function imgSlider(sliderId, _ref) {
  var _ref$autoplayEnabled = _ref.autoplayEnabled,
      autoplayEnabled = _ref$autoplayEnabled === void 0 ? false : _ref$autoplayEnabled,
      _ref$autoplayInterval = _ref.autoplayInterval,
      autoplayInterval = _ref$autoplayInterval === void 0 ? 5000 : _ref$autoplayInterval,
      _ref$buttonsVisible = _ref.buttonsVisible,
      buttonsVisible = _ref$buttonsVisible === void 0 ? true : _ref$buttonsVisible,
      _ref$maxWidth = _ref.maxWidth,
      maxWidth = _ref$maxWidth === void 0 ? '500px' : _ref$maxWidth,
      _ref$maxHeight = _ref.maxHeight,
      maxHeight = _ref$maxHeight === void 0 ? '500px' : _ref$maxHeight;

  if (document.getElementById(sliderId) === null) {
    console.log("Element with id=\"".concat(sliderId, "\" not found."));
    return;
  }

  Object(_sliderLayout_js__WEBPACK_IMPORTED_MODULE_0__["default"])(sliderId);

  var slider = document.getElementById(sliderId),
      slidesCollection = slider.getElementsByClassName('slides-collection')[0],
      singleSlides = slider.getElementsByClassName('single-slide'),
      playpauseButton = slider.getElementsByClassName('playpause-button')[0],
      transformStep = 100,
      slidesArray = _toConsumableArray(singleSlides).map(function (item, position) {
    return {
      item: item,
      position: position,
      transform: 0
    };
  }),
      slideDirection = {
    next: 'next',
    previous: 'previous'
  },
      position = new _sliderPosition_js__WEBPACK_IMPORTED_MODULE_1___default.a(slidesArray);

  var transformValue = 0,
      sliderTimerId,
      isSlideInTransition = false;
  slider.style.maxWidth = maxWidth;
  slider.style.maxHeight = maxHeight;

  if (slidesArray.length === 0) {
    console.log("Element ".concat(sliderId, " doesn't contain any slides."));
    return;
  } else {
    if (slidesArray.length === 1) {
      var copy = singleSlides[0].cloneNode(true);
      singleSlides[0].after(copy);
      slidesArray.push({
        item: copy,
        position: 1,
        transform: 0
      });
    }
  }

  function switchSlide(direction) {
    var nextSlide = 0;

    if (direction === slideDirection.next) {
      position.nextCurrentPosition();

      if (position.currentPosition > position.getMaxSlidePosition()) {
        nextSlide = position.getMinSlideIndex();
        slidesArray[nextSlide].position = position.getMaxSlidePosition() + 1;
        slidesArray[nextSlide].transform += slidesArray.length * 100;
        slidesArray[nextSlide].item.style.transform = "translateX(".concat(slidesArray[nextSlide].transform, "%)");
      }

      transformValue -= transformStep;
    } else {
      position.prevCurrentPosition();

      if (position.currentPosition < position.getMinSlidePosition()) {
        nextSlide = position.getMaxSlideIndex();
        slidesArray[nextSlide].position = position.getMinSlidePosition() - 1;
        slidesArray[nextSlide].transform -= slidesArray.length * 100;
        slidesArray[nextSlide].item.style.transform = "translateX(".concat(slidesArray[nextSlide].transform, "%)");
      }

      transformValue += transformStep;
    }

    slidesCollection.style.transitionDuration = '0.5s';
    slidesCollection.style.transform = "translateX(".concat(transformValue, "%)");
  }

  function addEventListeners() {
    slidesCollection.addEventListener('transitionstart', function () {
      isSlideInTransition = true;
    });
    slidesCollection.addEventListener('transitionend', function () {
      isSlideInTransition = false;

      if (Math.abs(position.currentPosition) === slidesArray.length) {
        position.clearCurrentPosition();
        transformValue = 0;
        slidesCollection.style.transitionDuration = '0s';
        slidesCollection.style.transform = '';
        slidesArray.forEach(function (slide, i) {
          slide.position = i;
          slide.transform = 0;
          slide.item.style = '';
        });
      }
    });
    slider.getElementsByClassName('next-button')[0].addEventListener('click', function (e) {
      e.preventDefault();

      if (!isSlideInTransition) {
        switchSlide(slideDirection.next);
      }

      resetAutoplayTimer();
    });
    slider.getElementsByClassName('previous-button')[0].addEventListener('click', function (e) {
      e.preventDefault();

      if (!isSlideInTransition) {
        switchSlide(slideDirection.previous);
      }

      resetAutoplayTimer();
    });
    playpauseButton.addEventListener('click', function (e) {
      e.preventDefault();

      if (playpauseButton.firstChild.classList.contains('pausedState')) {
        playpauseButton.firstChild.classList.remove('pausedState');
        playpauseButton.lastChild.style.display = 'none';
        playSlider();
      } else {
        playpauseButton.firstChild.classList.add('pausedState');
        playpauseButton.lastChild.style.display = 'flex';
        pauseSlider();
      }
    });
    var startX = 0,
        isMousedownOnSlider = false;

    function switchSlideByEvent(endX) {
      var shift = endX - startX;

      if (shift > 10) {
        switchSlide(slideDirection.previous);
      } else if (shift < -10) {
        switchSlide(slideDirection.next);
      }

      resetAutoplayTimer();
    }

    slider.addEventListener('touchstart', function (e) {
      startX = e.changedTouches[0].clientX;
      resetAutoplayTimer();
    });
    slider.addEventListener('touchend', function (e) {
      switchSlideByEvent(e.changedTouches[0].clientX);
    });
    slider.addEventListener('mousedown', function (e) {
      isMousedownOnSlider = true;
      startX = e.clientX;
      resetAutoplayTimer();
    });
    slider.addEventListener('mouseup', function (e) {
      isMousedownOnSlider = false;
      switchSlideByEvent(e.clientX);
    });
    slider.addEventListener('mouseleave', function (e) {
      if (isMousedownOnSlider) {
        isMousedownOnSlider = false;
        switchSlideByEvent(e.clientX);
      }
    });

    if (buttonsVisible) {
      slider.addEventListener('mouseenter', function () {
        playpauseButton.style.display = 'flex';
      });
      slider.addEventListener('mouseleave', function () {
        playpauseButton.style.display = 'none';
      });
    } else {
      var sliderButtons = slider.getElementsByClassName('slider-button');
      sliderButtons.forEach(function (button) {
        button.style.display = 'none';
      });
    }
  }

  addEventListeners();

  function resetAutoplayTimer() {
    if (!autoplayEnabled) {
      return;
    }

    autoplayStop();
    sliderTimerId = setInterval(function () {
      switchSlide(slideDirection.next);
    }, autoplayInterval);
  }

  function autoplayStart() {
    if (!autoplayEnabled) {
      playpauseButton.firstChild.classList.add('pausedState');
      return;
    }

    playpauseButton.lastChild.style.display = 'none';
    resetAutoplayTimer();
  }

  function autoplayStop() {
    clearInterval(sliderTimerId);
  }

  autoplayStart();

  function playSlider() {
    autoplayEnabled = true;
    autoplayStart();
  }

  function pauseSlider() {
    autoplayEnabled = false;
    autoplayStop();
  }

  return {
    play: playSlider,
    pause: pauseSlider
  };
}

/* harmony default export */ __webpack_exports__["default"] = (imgSlider);

/***/ }),

/***/ "./sliderLayout.js":
/*!*************************!*\
  !*** ./sliderLayout.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_nextButton_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/nextButton.svg */ "../icons/nextButton.svg");
/* harmony import */ var _icons_nextButton_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_icons_nextButton_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_previousButton_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/previousButton.svg */ "../icons/previousButton.svg");
/* harmony import */ var _icons_previousButton_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_icons_previousButton_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_pauseButton_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/pauseButton.svg */ "../icons/pauseButton.svg");
/* harmony import */ var _icons_pauseButton_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_icons_pauseButton_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_playButton_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/playButton.svg */ "../icons/playButton.svg");
/* harmony import */ var _icons_playButton_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_icons_playButton_svg__WEBPACK_IMPORTED_MODULE_4__);








function createSliderLayout(sliderId) {
  var sliderContainer = document.getElementById(sliderId),
      imgElements = Array.prototype.slice.call(sliderContainer.children);

  if (imgElements.length === 0) {
    return;
  }

  var slidesCollection = document.createElement('div');
  slidesCollection.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.slidesCollection);
  imgElements.forEach(function (element) {
    if (element.tagName === 'IMG') {
      element.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.slideImage);
      element.setAttribute('draggable', 'false');
      var singleSlideContainer = document.createElement('div');
      singleSlideContainer.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.singleSlide);
      singleSlideContainer.appendChild(element);
      slidesCollection.appendChild(singleSlideContainer);
    } else {
      element.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.singleSlide);
      slidesCollection.appendChild(element);
    }
  });
  sliderContainer.appendChild(slidesCollection);
  sliderContainer.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.slider);
  var nextButton = document.createElement('a');
  nextButton.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.nextButton);
  nextButton.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.sliderButton);
  nextButton.innerHTML = _icons_nextButton_svg__WEBPACK_IMPORTED_MODULE_1___default.a;
  nextButton.href = '#';
  var previousButton = document.createElement('a');
  previousButton.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.previousButton);
  previousButton.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.sliderButton);
  previousButton.innerHTML = _icons_previousButton_svg__WEBPACK_IMPORTED_MODULE_2___default.a;
  previousButton.href = '#';
  var playpauseButton = document.createElement('a');
  playpauseButton.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.playpauseButton);
  playpauseButton.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.sliderButton);
  playpauseButton.innerHTML = _icons_pauseButton_svg__WEBPACK_IMPORTED_MODULE_3___default.a + _icons_playButton_svg__WEBPACK_IMPORTED_MODULE_4___default.a;
  playpauseButton.href = '#';
  sliderContainer.appendChild(previousButton);
  sliderContainer.appendChild(nextButton);
  sliderContainer.appendChild(playpauseButton);
}

/* harmony default export */ __webpack_exports__["default"] = (createSliderLayout);

/***/ }),

/***/ "./sliderPosition.js":
/*!***************************!*\
  !*** ./sliderPosition.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SliderPosition = function SliderPosition(slidesArray) {
  _classCallCheck(this, SliderPosition);

  this.currentPosition = 0;

  this.clearCurrentPosition = function () {
    this.currentPosition = 0;
  };

  this.nextCurrentPosition = function () {
    this.currentPosition++;
  };

  this.prevCurrentPosition = function () {
    this.currentPosition--;
  };

  this.getMinSlideIndex = function () {
    var minSlide = slidesArray.reduce(function (previous, current) {
      return previous.position < current.position ? previous : current;
    });
    return slidesArray.indexOf(minSlide);
  };

  this.getMaxSlideIndex = function () {
    var maxSlide = slidesArray.reduce(function (previous, current) {
      return previous.position > current.position ? previous : current;
    });
    return slidesArray.indexOf(maxSlide);
  };

  this.getMinSlidePosition = function () {
    return slidesArray[this.getMinSlideIndex()].position;
  };

  this.getMaxSlidePosition = function () {
    return slidesArray[this.getMaxSlideIndex()].position;
  };
};

module.exports = SliderPosition;

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css */ "../node_modules/css-loader/dist/cjs.js?!./style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWdTbGlkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4uL2ljb25zL25leHRCdXR0b24uc3ZnIiwid2VicGFjazovL2ltZ1NsaWRlci8uLi9pY29ucy9wYXVzZUJ1dHRvbi5zdmciLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4uL2ljb25zL3BsYXlCdXR0b24uc3ZnIiwid2VicGFjazovL2ltZ1NsaWRlci8uLi9pY29ucy9wcmV2aW91c0J1dHRvbi5zdmciLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4vc3R5bGUuY3NzIiwid2VicGFjazovL2ltZ1NsaWRlci8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2ltZ1NsaWRlci8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4vaW1nU2xpZGVyLmpzIiwid2VicGFjazovL2ltZ1NsaWRlci8uL3NsaWRlckxheW91dC5qcyIsIndlYnBhY2s6Ly9pbWdTbGlkZXIvLi9zbGlkZXJQb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly9pbWdTbGlkZXIvLi9zdHlsZS5jc3M/NTNlNyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwidXNlU291cmNlTWFwIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwiY29uY2F0Iiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWFRdWVyeSIsImRlZHVwZSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJsZW5ndGgiLCJpZCIsIl9pIiwicHVzaCIsImNzc01hcHBpbmciLCJidG9hIiwic291cmNlTWFwcGluZyIsInRvQ29tbWVudCIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsInNvdXJjZU1hcCIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJpbWdTbGlkZXIiLCJzbGlkZXJJZCIsImF1dG9wbGF5RW5hYmxlZCIsImF1dG9wbGF5SW50ZXJ2YWwiLCJidXR0b25zVmlzaWJsZSIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVTbGlkZXJMYXlvdXQiLCJzbGlkZXIiLCJzbGlkZXNDb2xsZWN0aW9uIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNpbmdsZVNsaWRlcyIsInBsYXlwYXVzZUJ1dHRvbiIsInRyYW5zZm9ybVN0ZXAiLCJzbGlkZXNBcnJheSIsInBvc2l0aW9uIiwidHJhbnNmb3JtIiwic2xpZGVEaXJlY3Rpb24iLCJuZXh0IiwicHJldmlvdXMiLCJTbGlkZXJQb3NpdGlvbiIsInRyYW5zZm9ybVZhbHVlIiwic2xpZGVyVGltZXJJZCIsImlzU2xpZGVJblRyYW5zaXRpb24iLCJzdHlsZSIsImNvcHkiLCJjbG9uZU5vZGUiLCJhZnRlciIsInN3aXRjaFNsaWRlIiwiZGlyZWN0aW9uIiwibmV4dFNsaWRlIiwibmV4dEN1cnJlbnRQb3NpdGlvbiIsImN1cnJlbnRQb3NpdGlvbiIsImdldE1heFNsaWRlUG9zaXRpb24iLCJnZXRNaW5TbGlkZUluZGV4IiwicHJldkN1cnJlbnRQb3NpdGlvbiIsImdldE1pblNsaWRlUG9zaXRpb24iLCJnZXRNYXhTbGlkZUluZGV4IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiTWF0aCIsImFicyIsImNsZWFyQ3VycmVudFBvc2l0aW9uIiwiZm9yRWFjaCIsInNsaWRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzZXRBdXRvcGxheVRpbWVyIiwiZmlyc3RDaGlsZCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwibGFzdENoaWxkIiwiZGlzcGxheSIsInBsYXlTbGlkZXIiLCJhZGQiLCJwYXVzZVNsaWRlciIsInN0YXJ0WCIsImlzTW91c2Vkb3duT25TbGlkZXIiLCJzd2l0Y2hTbGlkZUJ5RXZlbnQiLCJlbmRYIiwic2hpZnQiLCJjaGFuZ2VkVG91Y2hlcyIsImNsaWVudFgiLCJzbGlkZXJCdXR0b25zIiwiYnV0dG9uIiwiYXV0b3BsYXlTdG9wIiwic2V0SW50ZXJ2YWwiLCJhdXRvcGxheVN0YXJ0IiwiY2xlYXJJbnRlcnZhbCIsInBsYXkiLCJwYXVzZSIsInNsaWRlckNvbnRhaW5lciIsImltZ0VsZW1lbnRzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZXMiLCJlbGVtZW50IiwidGFnTmFtZSIsInNsaWRlSW1hZ2UiLCJzZXRBdHRyaWJ1dGUiLCJzaW5nbGVTbGlkZUNvbnRhaW5lciIsInNpbmdsZVNsaWRlIiwiYXBwZW5kQ2hpbGQiLCJuZXh0QnV0dG9uIiwic2xpZGVyQnV0dG9uIiwiaW5uZXJIVE1MIiwibmV4dEJ1dHRvbkljb24iLCJocmVmIiwicHJldmlvdXNCdXR0b24iLCJwcmV2aW91c0J1dHRvbkljb24iLCJwYXVzZUJ1dHRvbkljb24iLCJwbGF5QnV0dG9uSWNvbiIsIm1pblNsaWRlIiwicmVkdWNlIiwiY3VycmVudCIsImluZGV4T2YiLCJtYXhTbGlkZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSw2T0FBNk8sMGlCOzs7Ozs7Ozs7OztBQ0E3Tyx5T0FBeU8sb1M7Ozs7Ozs7Ozs7O0FDQXpPLDZPQUE2Tyw0Tjs7Ozs7Ozs7Ozs7QUNBN08sNk9BQTZPLGtnQjs7Ozs7Ozs7Ozs7O0FDQTdPO0FBQUE7QUFBQTtBQUFBO0FBQ3lGO0FBQ3pGLDhCQUE4QixtRkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxZQUFZLHlCQUF5QiwyQkFBMkIscUJBQXFCLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLHlCQUF5QixxQkFBcUIsS0FBSyw0QkFBNEIsc0JBQXNCLDJCQUEyQiwrQ0FBK0MsS0FBSyx1QkFBdUIsdUJBQXVCLHdCQUF3QixzQkFBc0IsNEJBQTRCLGdDQUFnQywwQkFBMEIsS0FBSyxzQkFBc0IsOEJBQThCLHFCQUFxQix3QkFBd0IsS0FBSyx3QkFBd0IsMkJBQTJCLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLG9CQUFvQixxQkFBcUIscUJBQXFCLDBCQUEwQiwyQkFBMkIsb0RBQW9ELDhCQUE4QiwrQ0FBK0MsS0FBSyw4QkFBOEIsOEJBQThCLEtBQUssNEJBQTRCLG9CQUFvQiwrQ0FBK0MsS0FBSywwQkFBMEIsZ0JBQWdCLEtBQUssc0JBQXNCLGlCQUFpQixLQUFLLDJCQUEyQixzQkFBc0IsS0FBSyxzQkFBc0IsMkJBQTJCLDRCQUE0QixLQUFLLE9BQU8sZ0VBQWdFLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLHNEQUFzRCx5QkFBeUIsMkJBQTJCLHFCQUFxQixzQkFBc0IsZ0NBQWdDLDRCQUE0Qix5QkFBeUIscUJBQXFCLEtBQUssNEJBQTRCLHNCQUFzQiwyQkFBMkIsK0NBQStDLEtBQUssdUJBQXVCLHVCQUF1Qix3QkFBd0Isc0JBQXNCLDRCQUE0QixnQ0FBZ0MsMEJBQTBCLEtBQUssc0JBQXNCLDhCQUE4QixxQkFBcUIsd0JBQXdCLEtBQUssd0JBQXdCLDJCQUEyQixzQkFBc0IsNEJBQTRCLGdDQUFnQyxvQkFBb0IscUJBQXFCLHFCQUFxQiwwQkFBMEIsMkJBQTJCLG9EQUFvRCw4QkFBOEIsK0NBQStDLEtBQUssOEJBQThCLDhCQUE4QixLQUFLLDRCQUE0QixvQkFBb0IsK0NBQStDLEtBQUssMEJBQTBCLGdCQUFnQixLQUFLLHNCQUFzQixpQkFBaUIsS0FBSywyQkFBMkIsc0JBQXNCLEtBQUssc0JBQXNCLDJCQUEyQiw0QkFBNEIsS0FBSyxHQUFHO0FBQzU5RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLHNGQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7O0FDeEIxQjtBQUViOzs7O0FBSUE7QUFDQTs7QUFDQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLFlBQVYsRUFBd0I7QUFDdkMsTUFBSUMsSUFBSSxHQUFHLEVBQVgsQ0FEdUMsQ0FDeEI7O0FBRWZBLE1BQUksQ0FBQ0MsUUFBTCxHQUFnQixTQUFTQSxRQUFULEdBQW9CO0FBQ2xDLFdBQU8sS0FBS0MsR0FBTCxDQUFTLFVBQVVDLElBQVYsRUFBZ0I7QUFDOUIsVUFBSUMsT0FBTyxHQUFHQyxzQkFBc0IsQ0FBQ0YsSUFBRCxFQUFPSixZQUFQLENBQXBDOztBQUVBLFVBQUlJLElBQUksQ0FBQyxDQUFELENBQVIsRUFBYTtBQUNYLGVBQU8sVUFBVUcsTUFBVixDQUFpQkgsSUFBSSxDQUFDLENBQUQsQ0FBckIsRUFBMEIsSUFBMUIsRUFBZ0NHLE1BQWhDLENBQXVDRixPQUF2QyxFQUFnRCxHQUFoRCxDQUFQO0FBQ0Q7O0FBRUQsYUFBT0EsT0FBUDtBQUNELEtBUk0sRUFRSkcsSUFSSSxDQVFDLEVBUkQsQ0FBUDtBQVNELEdBVkQsQ0FIdUMsQ0FhcEM7QUFDSDs7O0FBR0FQLE1BQUksQ0FBQ1EsQ0FBTCxHQUFTLFVBQVVDLE9BQVYsRUFBbUJDLFVBQW5CLEVBQStCQyxNQUEvQixFQUF1QztBQUM5QyxRQUFJLE9BQU9GLE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7QUFDL0I7QUFDQUEsYUFBTyxHQUFHLENBQUMsQ0FBQyxJQUFELEVBQU9BLE9BQVAsRUFBZ0IsRUFBaEIsQ0FBRCxDQUFWO0FBQ0Q7O0FBRUQsUUFBSUcsc0JBQXNCLEdBQUcsRUFBN0I7O0FBRUEsUUFBSUQsTUFBSixFQUFZO0FBQ1YsV0FBSyxJQUFJSCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtLLE1BQXpCLEVBQWlDTCxDQUFDLEVBQWxDLEVBQXNDO0FBQ3BDO0FBQ0EsWUFBSU0sRUFBRSxHQUFHLEtBQUtOLENBQUwsRUFBUSxDQUFSLENBQVQ7O0FBRUEsWUFBSU0sRUFBRSxJQUFJLElBQVYsRUFBZ0I7QUFDZEYsZ0NBQXNCLENBQUNFLEVBQUQsQ0FBdEIsR0FBNkIsSUFBN0I7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsU0FBSyxJQUFJQyxFQUFFLEdBQUcsQ0FBZCxFQUFpQkEsRUFBRSxHQUFHTixPQUFPLENBQUNJLE1BQTlCLEVBQXNDRSxFQUFFLEVBQXhDLEVBQTRDO0FBQzFDLFVBQUlaLElBQUksR0FBRyxHQUFHRyxNQUFILENBQVVHLE9BQU8sQ0FBQ00sRUFBRCxDQUFqQixDQUFYOztBQUVBLFVBQUlKLE1BQU0sSUFBSUMsc0JBQXNCLENBQUNULElBQUksQ0FBQyxDQUFELENBQUwsQ0FBcEMsRUFBK0M7QUFDN0M7QUFDQTtBQUNEOztBQUVELFVBQUlPLFVBQUosRUFBZ0I7QUFDZCxZQUFJLENBQUNQLElBQUksQ0FBQyxDQUFELENBQVQsRUFBYztBQUNaQSxjQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVPLFVBQVY7QUFDRCxTQUZELE1BRU87QUFDTFAsY0FBSSxDQUFDLENBQUQsQ0FBSixHQUFVLEdBQUdHLE1BQUgsQ0FBVUksVUFBVixFQUFzQixPQUF0QixFQUErQkosTUFBL0IsQ0FBc0NILElBQUksQ0FBQyxDQUFELENBQTFDLENBQVY7QUFDRDtBQUNGOztBQUVESCxVQUFJLENBQUNnQixJQUFMLENBQVViLElBQVY7QUFDRDtBQUNGLEdBckNEOztBQXVDQSxTQUFPSCxJQUFQO0FBQ0QsQ0F6REQ7O0FBMkRBLFNBQVNLLHNCQUFULENBQWdDRixJQUFoQyxFQUFzQ0osWUFBdEMsRUFBb0Q7QUFDbEQsTUFBSUssT0FBTyxHQUFHRCxJQUFJLENBQUMsQ0FBRCxDQUFKLElBQVcsRUFBekIsQ0FEa0QsQ0FDckI7O0FBRTdCLE1BQUljLFVBQVUsR0FBR2QsSUFBSSxDQUFDLENBQUQsQ0FBckI7O0FBRUEsTUFBSSxDQUFDYyxVQUFMLEVBQWlCO0FBQ2YsV0FBT2IsT0FBUDtBQUNEOztBQUVELE1BQUlMLFlBQVksSUFBSSxPQUFPbUIsSUFBUCxLQUFnQixVQUFwQyxFQUFnRDtBQUM5QyxRQUFJQyxhQUFhLEdBQUdDLFNBQVMsQ0FBQ0gsVUFBRCxDQUE3QjtBQUNBLFFBQUlJLFVBQVUsR0FBR0osVUFBVSxDQUFDSyxPQUFYLENBQW1CcEIsR0FBbkIsQ0FBdUIsVUFBVXFCLE1BQVYsRUFBa0I7QUFDeEQsYUFBTyxpQkFBaUJqQixNQUFqQixDQUF3QlcsVUFBVSxDQUFDTyxVQUFYLElBQXlCLEVBQWpELEVBQXFEbEIsTUFBckQsQ0FBNERpQixNQUE1RCxFQUFvRSxLQUFwRSxDQUFQO0FBQ0QsS0FGZ0IsQ0FBakI7QUFHQSxXQUFPLENBQUNuQixPQUFELEVBQVVFLE1BQVYsQ0FBaUJlLFVBQWpCLEVBQTZCZixNQUE3QixDQUFvQyxDQUFDYSxhQUFELENBQXBDLEVBQXFEWixJQUFyRCxDQUEwRCxJQUExRCxDQUFQO0FBQ0Q7O0FBRUQsU0FBTyxDQUFDSCxPQUFELEVBQVVHLElBQVYsQ0FBZSxJQUFmLENBQVA7QUFDRCxDLENBQUM7OztBQUdGLFNBQVNhLFNBQVQsQ0FBbUJLLFNBQW5CLEVBQThCO0FBQzVCO0FBQ0EsTUFBSUMsTUFBTSxHQUFHUixJQUFJLENBQUNTLFFBQVEsQ0FBQ0Msa0JBQWtCLENBQUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTCxTQUFmLENBQUQsQ0FBbkIsQ0FBVCxDQUFqQjtBQUNBLE1BQUlNLElBQUksR0FBRywrREFBK0R6QixNQUEvRCxDQUFzRW9CLE1BQXRFLENBQVg7QUFDQSxTQUFPLE9BQU9wQixNQUFQLENBQWN5QixJQUFkLEVBQW9CLEtBQXBCLENBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUM3Rlk7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLFNBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUM1UUE7QUFBQTtBQUFBO0FBQUE7QUFBYTs7Ozs7Ozs7Ozs7Ozs7QUFDYjtBQUNBOztBQUVBLFNBQVNDLFNBQVQsQ0FDSUMsUUFESixRQVNFO0FBQUEsa0NBTk1DLGVBTU47QUFBQSxNQU5NQSxlQU1OLHFDQU53QixLQU14QjtBQUFBLG1DQUxNQyxnQkFLTjtBQUFBLE1BTE1BLGdCQUtOLHNDQUx5QixJQUt6QjtBQUFBLGlDQUpNQyxjQUlOO0FBQUEsTUFKTUEsY0FJTixvQ0FKdUIsSUFJdkI7QUFBQSwyQkFITUMsUUFHTjtBQUFBLE1BSE1BLFFBR04sOEJBSGlCLE9BR2pCO0FBQUEsNEJBRk1DLFNBRU47QUFBQSxNQUZNQSxTQUVOLCtCQUZrQixPQUVsQjs7QUFDRSxNQUFJQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JQLFFBQXhCLE1BQXNDLElBQTFDLEVBQWdEO0FBQzVDUSxXQUFPLENBQUNDLEdBQVIsNkJBQWdDVCxRQUFoQztBQUNBO0FBQ0g7O0FBQ0RVLGtFQUFrQixDQUFDVixRQUFELENBQWxCOztBQUVBLE1BQU1XLE1BQU0sR0FBR0wsUUFBUSxDQUFDQyxjQUFULENBQXdCUCxRQUF4QixDQUFmO0FBQUEsTUFDSVksZ0JBQWdCLEdBQUdELE1BQU0sQ0FBQ0Usc0JBQVAsQ0FBOEIsbUJBQTlCLEVBQW1ELENBQW5ELENBRHZCO0FBQUEsTUFFSUMsWUFBWSxHQUFHSCxNQUFNLENBQUNFLHNCQUFQLENBQThCLGNBQTlCLENBRm5CO0FBQUEsTUFHSUUsZUFBZSxHQUFHSixNQUFNLENBQUNFLHNCQUFQLENBQThCLGtCQUE5QixFQUFrRCxDQUFsRCxDQUh0QjtBQUFBLE1BSUlHLGFBQWEsR0FBRyxHQUpwQjtBQUFBLE1BS0lDLFdBQVcsR0FBRyxtQkFBSUgsWUFBSixFQUFrQjdDLEdBQWxCLENBQXNCLFVBQUNDLElBQUQsRUFBT2dELFFBQVA7QUFBQSxXQUFxQjtBQUFFaEQsVUFBSSxFQUFKQSxJQUFGO0FBQVFnRCxjQUFRLEVBQVJBLFFBQVI7QUFBa0JDLGVBQVMsRUFBRTtBQUE3QixLQUFyQjtBQUFBLEdBQXRCLENBTGxCO0FBQUEsTUFNSUMsY0FBYyxHQUFHO0FBQUVDLFFBQUksRUFBRSxNQUFSO0FBQWdCQyxZQUFRLEVBQUU7QUFBMUIsR0FOckI7QUFBQSxNQU9JSixRQUFRLEdBQUcsSUFBSUsseURBQUosQ0FBbUJOLFdBQW5CLENBUGY7O0FBU0EsTUFBSU8sY0FBYyxHQUFHLENBQXJCO0FBQUEsTUFDSUMsYUFESjtBQUFBLE1BRUlDLG1CQUFtQixHQUFHLEtBRjFCO0FBSUFmLFFBQU0sQ0FBQ2dCLEtBQVAsQ0FBYXZCLFFBQWIsR0FBd0JBLFFBQXhCO0FBQ0FPLFFBQU0sQ0FBQ2dCLEtBQVAsQ0FBYXRCLFNBQWIsR0FBeUJBLFNBQXpCOztBQUVBLE1BQUlZLFdBQVcsQ0FBQ3JDLE1BQVosS0FBdUIsQ0FBM0IsRUFBOEI7QUFDMUI0QixXQUFPLENBQUNDLEdBQVIsbUJBQXVCVCxRQUF2QjtBQUNBO0FBQ0gsR0FIRCxNQUdPO0FBQ0gsUUFBSWlCLFdBQVcsQ0FBQ3JDLE1BQVosS0FBdUIsQ0FBM0IsRUFBOEI7QUFDMUIsVUFBTWdELElBQUksR0FBR2QsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQmUsU0FBaEIsQ0FBMEIsSUFBMUIsQ0FBYjtBQUNBZixrQkFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQmdCLEtBQWhCLENBQXNCRixJQUF0QjtBQUNBWCxpQkFBVyxDQUFDbEMsSUFBWixDQUFpQjtBQUFFYixZQUFJLEVBQUUwRCxJQUFSO0FBQWNWLGdCQUFRLEVBQUUsQ0FBeEI7QUFBMkJDLGlCQUFTLEVBQUU7QUFBdEMsT0FBakI7QUFDSDtBQUNKOztBQUVELFdBQVNZLFdBQVQsQ0FBc0JDLFNBQXRCLEVBQWlDO0FBQzdCLFFBQUlDLFNBQVMsR0FBRyxDQUFoQjs7QUFDQSxRQUFJRCxTQUFTLEtBQUtaLGNBQWMsQ0FBQ0MsSUFBakMsRUFBdUM7QUFDbkNILGNBQVEsQ0FBQ2dCLG1CQUFUOztBQUNBLFVBQUloQixRQUFRLENBQUNpQixlQUFULEdBQTJCakIsUUFBUSxDQUFDa0IsbUJBQVQsRUFBL0IsRUFBK0Q7QUFDM0RILGlCQUFTLEdBQUdmLFFBQVEsQ0FBQ21CLGdCQUFULEVBQVo7QUFDQXBCLG1CQUFXLENBQUNnQixTQUFELENBQVgsQ0FBdUJmLFFBQXZCLEdBQWtDQSxRQUFRLENBQUNrQixtQkFBVCxLQUFpQyxDQUFuRTtBQUNBbkIsbUJBQVcsQ0FBQ2dCLFNBQUQsQ0FBWCxDQUF1QmQsU0FBdkIsSUFBb0NGLFdBQVcsQ0FBQ3JDLE1BQVosR0FBcUIsR0FBekQ7QUFDQXFDLG1CQUFXLENBQUNnQixTQUFELENBQVgsQ0FBdUIvRCxJQUF2QixDQUE0QnlELEtBQTVCLENBQWtDUixTQUFsQyx3QkFBNERGLFdBQVcsQ0FBQ2dCLFNBQUQsQ0FBWCxDQUF1QmQsU0FBbkY7QUFDSDs7QUFDREssb0JBQWMsSUFBSVIsYUFBbEI7QUFDSCxLQVRELE1BU087QUFDSEUsY0FBUSxDQUFDb0IsbUJBQVQ7O0FBQ0EsVUFBSXBCLFFBQVEsQ0FBQ2lCLGVBQVQsR0FBMkJqQixRQUFRLENBQUNxQixtQkFBVCxFQUEvQixFQUErRDtBQUMzRE4saUJBQVMsR0FBR2YsUUFBUSxDQUFDc0IsZ0JBQVQsRUFBWjtBQUNBdkIsbUJBQVcsQ0FBQ2dCLFNBQUQsQ0FBWCxDQUF1QmYsUUFBdkIsR0FBa0NBLFFBQVEsQ0FBQ3FCLG1CQUFULEtBQWlDLENBQW5FO0FBQ0F0QixtQkFBVyxDQUFDZ0IsU0FBRCxDQUFYLENBQXVCZCxTQUF2QixJQUFvQ0YsV0FBVyxDQUFDckMsTUFBWixHQUFxQixHQUF6RDtBQUNBcUMsbUJBQVcsQ0FBQ2dCLFNBQUQsQ0FBWCxDQUF1Qi9ELElBQXZCLENBQTRCeUQsS0FBNUIsQ0FBa0NSLFNBQWxDLHdCQUE0REYsV0FBVyxDQUFDZ0IsU0FBRCxDQUFYLENBQXVCZCxTQUFuRjtBQUNIOztBQUNESyxvQkFBYyxJQUFJUixhQUFsQjtBQUNIOztBQUVESixvQkFBZ0IsQ0FBQ2UsS0FBakIsQ0FBdUJjLGtCQUF2QixHQUE0QyxNQUE1QztBQUNBN0Isb0JBQWdCLENBQUNlLEtBQWpCLENBQXVCUixTQUF2Qix3QkFBaURLLGNBQWpEO0FBQ0g7O0FBRUQsV0FBU2tCLGlCQUFULEdBQThCO0FBQzFCOUIsb0JBQWdCLENBQUMrQixnQkFBakIsQ0FBa0MsaUJBQWxDLEVBQXFELFlBQVk7QUFDN0RqQix5QkFBbUIsR0FBRyxJQUF0QjtBQUNILEtBRkQ7QUFHQWQsb0JBQWdCLENBQUMrQixnQkFBakIsQ0FBa0MsZUFBbEMsRUFBbUQsWUFBWTtBQUMzRGpCLHlCQUFtQixHQUFHLEtBQXRCOztBQUVBLFVBQUlrQixJQUFJLENBQUNDLEdBQUwsQ0FBUzNCLFFBQVEsQ0FBQ2lCLGVBQWxCLE1BQXVDbEIsV0FBVyxDQUFDckMsTUFBdkQsRUFBK0Q7QUFDM0RzQyxnQkFBUSxDQUFDNEIsb0JBQVQ7QUFDQXRCLHNCQUFjLEdBQUcsQ0FBakI7QUFDQVosd0JBQWdCLENBQUNlLEtBQWpCLENBQXVCYyxrQkFBdkIsR0FBNEMsSUFBNUM7QUFDQTdCLHdCQUFnQixDQUFDZSxLQUFqQixDQUF1QlIsU0FBdkIsR0FBbUMsRUFBbkM7QUFDQUYsbUJBQVcsQ0FBQzhCLE9BQVosQ0FBb0IsVUFBVUMsS0FBVixFQUFpQnpFLENBQWpCLEVBQW9CO0FBQ3BDeUUsZUFBSyxDQUFDOUIsUUFBTixHQUFpQjNDLENBQWpCO0FBQ0F5RSxlQUFLLENBQUM3QixTQUFOLEdBQWtCLENBQWxCO0FBQ0E2QixlQUFLLENBQUM5RSxJQUFOLENBQVd5RCxLQUFYLEdBQW1CLEVBQW5CO0FBQ0gsU0FKRDtBQUtIO0FBQ0osS0FkRDtBQWdCQWhCLFVBQU0sQ0FBQ0Usc0JBQVAsQ0FBOEIsYUFBOUIsRUFBNkMsQ0FBN0MsRUFBZ0Q4QixnQkFBaEQsQ0FBaUUsT0FBakUsRUFBMEUsVUFBVU0sQ0FBVixFQUFhO0FBQ25GQSxPQUFDLENBQUNDLGNBQUY7O0FBQ0EsVUFBSSxDQUFDeEIsbUJBQUwsRUFBMEI7QUFDdEJLLG1CQUFXLENBQUNYLGNBQWMsQ0FBQ0MsSUFBaEIsQ0FBWDtBQUNIOztBQUNEOEIsd0JBQWtCO0FBQ3JCLEtBTkQ7QUFRQXhDLFVBQU0sQ0FBQ0Usc0JBQVAsQ0FBOEIsaUJBQTlCLEVBQWlELENBQWpELEVBQW9EOEIsZ0JBQXBELENBQXFFLE9BQXJFLEVBQThFLFVBQVVNLENBQVYsRUFBYTtBQUN2RkEsT0FBQyxDQUFDQyxjQUFGOztBQUNBLFVBQUksQ0FBQ3hCLG1CQUFMLEVBQTBCO0FBQ3RCSyxtQkFBVyxDQUFDWCxjQUFjLENBQUNFLFFBQWhCLENBQVg7QUFDSDs7QUFDRDZCLHdCQUFrQjtBQUNyQixLQU5EO0FBUUFwQyxtQkFBZSxDQUFDNEIsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLFVBQVVNLENBQVYsRUFBYTtBQUNuREEsT0FBQyxDQUFDQyxjQUFGOztBQUNBLFVBQUluQyxlQUFlLENBQUNxQyxVQUFoQixDQUEyQkMsU0FBM0IsQ0FBcUNDLFFBQXJDLENBQThDLGFBQTlDLENBQUosRUFBa0U7QUFDOUR2Qyx1QkFBZSxDQUFDcUMsVUFBaEIsQ0FBMkJDLFNBQTNCLENBQXFDRSxNQUFyQyxDQUE0QyxhQUE1QztBQUNBeEMsdUJBQWUsQ0FBQ3lDLFNBQWhCLENBQTBCN0IsS0FBMUIsQ0FBZ0M4QixPQUFoQyxHQUEwQyxNQUExQztBQUNBQyxrQkFBVTtBQUNiLE9BSkQsTUFJTztBQUNIM0MsdUJBQWUsQ0FBQ3FDLFVBQWhCLENBQTJCQyxTQUEzQixDQUFxQ00sR0FBckMsQ0FBeUMsYUFBekM7QUFDQTVDLHVCQUFlLENBQUN5QyxTQUFoQixDQUEwQjdCLEtBQTFCLENBQWdDOEIsT0FBaEMsR0FBMEMsTUFBMUM7QUFDQUcsbUJBQVc7QUFDZDtBQUNKLEtBWEQ7QUFhQSxRQUFJQyxNQUFNLEdBQUcsQ0FBYjtBQUFBLFFBQ0lDLG1CQUFtQixHQUFHLEtBRDFCOztBQUVBLGFBQVNDLGtCQUFULENBQTZCQyxJQUE3QixFQUFtQztBQUMvQixVQUFNQyxLQUFLLEdBQUdELElBQUksR0FBR0gsTUFBckI7O0FBQ0EsVUFBSUksS0FBSyxHQUFHLEVBQVosRUFBZ0I7QUFDWmxDLG1CQUFXLENBQUNYLGNBQWMsQ0FBQ0UsUUFBaEIsQ0FBWDtBQUNILE9BRkQsTUFFTyxJQUFJMkMsS0FBSyxHQUFHLENBQUMsRUFBYixFQUFpQjtBQUNwQmxDLG1CQUFXLENBQUNYLGNBQWMsQ0FBQ0MsSUFBaEIsQ0FBWDtBQUNIOztBQUNEOEIsd0JBQWtCO0FBQ3JCOztBQUNEeEMsVUFBTSxDQUFDZ0MsZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0MsVUFBVU0sQ0FBVixFQUFhO0FBQy9DWSxZQUFNLEdBQUdaLENBQUMsQ0FBQ2lCLGNBQUYsQ0FBaUIsQ0FBakIsRUFBb0JDLE9BQTdCO0FBQ0FoQix3QkFBa0I7QUFDckIsS0FIRDtBQUlBeEMsVUFBTSxDQUFDZ0MsZ0JBQVAsQ0FBd0IsVUFBeEIsRUFBb0MsVUFBVU0sQ0FBVixFQUFhO0FBQzdDYyx3QkFBa0IsQ0FBQ2QsQ0FBQyxDQUFDaUIsY0FBRixDQUFpQixDQUFqQixFQUFvQkMsT0FBckIsQ0FBbEI7QUFDSCxLQUZEO0FBSUF4RCxVQUFNLENBQUNnQyxnQkFBUCxDQUF3QixXQUF4QixFQUFxQyxVQUFVTSxDQUFWLEVBQWE7QUFDOUNhLHlCQUFtQixHQUFHLElBQXRCO0FBQ0FELFlBQU0sR0FBR1osQ0FBQyxDQUFDa0IsT0FBWDtBQUNBaEIsd0JBQWtCO0FBQ3JCLEtBSkQ7QUFLQXhDLFVBQU0sQ0FBQ2dDLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQVVNLENBQVYsRUFBYTtBQUM1Q2EseUJBQW1CLEdBQUcsS0FBdEI7QUFDQUMsd0JBQWtCLENBQUNkLENBQUMsQ0FBQ2tCLE9BQUgsQ0FBbEI7QUFDSCxLQUhEO0FBSUF4RCxVQUFNLENBQUNnQyxnQkFBUCxDQUF3QixZQUF4QixFQUFzQyxVQUFVTSxDQUFWLEVBQWE7QUFDL0MsVUFBSWEsbUJBQUosRUFBeUI7QUFDckJBLDJCQUFtQixHQUFHLEtBQXRCO0FBQ0FDLDBCQUFrQixDQUFDZCxDQUFDLENBQUNrQixPQUFILENBQWxCO0FBQ0g7QUFDSixLQUxEOztBQU9BLFFBQUloRSxjQUFKLEVBQW9CO0FBQ2hCUSxZQUFNLENBQUNnQyxnQkFBUCxDQUF3QixZQUF4QixFQUFzQyxZQUFZO0FBQzlDNUIsdUJBQWUsQ0FBQ1ksS0FBaEIsQ0FBc0I4QixPQUF0QixHQUFnQyxNQUFoQztBQUNILE9BRkQ7QUFHQTlDLFlBQU0sQ0FBQ2dDLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDLFlBQVk7QUFDOUM1Qix1QkFBZSxDQUFDWSxLQUFoQixDQUFzQjhCLE9BQXRCLEdBQWdDLE1BQWhDO0FBQ0gsT0FGRDtBQUdILEtBUEQsTUFPTztBQUNILFVBQU1XLGFBQWEsR0FBR3pELE1BQU0sQ0FBQ0Usc0JBQVAsQ0FBOEIsZUFBOUIsQ0FBdEI7QUFDQXVELG1CQUFhLENBQUNyQixPQUFkLENBQXNCLFVBQVVzQixNQUFWLEVBQWtCO0FBQ3BDQSxjQUFNLENBQUMxQyxLQUFQLENBQWE4QixPQUFiLEdBQXVCLE1BQXZCO0FBQ0gsT0FGRDtBQUdIO0FBQ0o7O0FBRURmLG1CQUFpQjs7QUFFakIsV0FBU1Msa0JBQVQsR0FBK0I7QUFDM0IsUUFBSSxDQUFDbEQsZUFBTCxFQUFzQjtBQUNsQjtBQUNIOztBQUVEcUUsZ0JBQVk7QUFDWjdDLGlCQUFhLEdBQUc4QyxXQUFXLENBQUMsWUFBWTtBQUNwQ3hDLGlCQUFXLENBQUNYLGNBQWMsQ0FBQ0MsSUFBaEIsQ0FBWDtBQUNILEtBRjBCLEVBRXhCbkIsZ0JBRndCLENBQTNCO0FBR0g7O0FBRUQsV0FBU3NFLGFBQVQsR0FBMEI7QUFDdEIsUUFBSSxDQUFDdkUsZUFBTCxFQUFzQjtBQUNsQmMscUJBQWUsQ0FBQ3FDLFVBQWhCLENBQTJCQyxTQUEzQixDQUFxQ00sR0FBckMsQ0FBeUMsYUFBekM7QUFDQTtBQUNIOztBQUNENUMsbUJBQWUsQ0FBQ3lDLFNBQWhCLENBQTBCN0IsS0FBMUIsQ0FBZ0M4QixPQUFoQyxHQUEwQyxNQUExQztBQUVBTixzQkFBa0I7QUFDckI7O0FBRUQsV0FBU21CLFlBQVQsR0FBeUI7QUFDckJHLGlCQUFhLENBQUNoRCxhQUFELENBQWI7QUFDSDs7QUFFRCtDLGVBQWE7O0FBRWIsV0FBU2QsVUFBVCxHQUF1QjtBQUNuQnpELG1CQUFlLEdBQUcsSUFBbEI7QUFDQXVFLGlCQUFhO0FBQ2hCOztBQUNELFdBQVNaLFdBQVQsR0FBd0I7QUFDcEIzRCxtQkFBZSxHQUFHLEtBQWxCO0FBQ0FxRSxnQkFBWTtBQUNmOztBQUVELFNBQU87QUFDSEksUUFBSSxFQUFFaEIsVUFESDtBQUVIaUIsU0FBSyxFQUFFZjtBQUZKLEdBQVA7QUFJSDs7QUFFYzdELHdFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3hOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWE7O0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTVyxrQkFBVCxDQUE2QlYsUUFBN0IsRUFBdUM7QUFDbkMsTUFBTTRFLGVBQWUsR0FBR3RFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QlAsUUFBeEIsQ0FBeEI7QUFBQSxNQUNJNkUsV0FBVyxHQUFHQyxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQyxJQUF0QixDQUEyQkwsZUFBZSxDQUFDTSxRQUEzQyxDQURsQjs7QUFHQSxNQUFJTCxXQUFXLENBQUNqRyxNQUFaLEtBQXVCLENBQTNCLEVBQThCO0FBQzFCO0FBQ0g7O0FBRUQsTUFBTWdDLGdCQUFnQixHQUFHTixRQUFRLENBQUM2RSxhQUFULENBQXVCLEtBQXZCLENBQXpCO0FBQ0F2RSxrQkFBZ0IsQ0FBQ3lDLFNBQWpCLENBQTJCTSxHQUEzQixDQUErQnlCLGlEQUFNLENBQUN4RSxnQkFBdEM7QUFFQWlFLGFBQVcsQ0FBQzlCLE9BQVosQ0FBb0IsVUFBVXNDLE9BQVYsRUFBbUI7QUFDbkMsUUFBSUEsT0FBTyxDQUFDQyxPQUFSLEtBQW9CLEtBQXhCLEVBQStCO0FBQzNCRCxhQUFPLENBQUNoQyxTQUFSLENBQWtCTSxHQUFsQixDQUFzQnlCLGlEQUFNLENBQUNHLFVBQTdCO0FBQ0FGLGFBQU8sQ0FBQ0csWUFBUixDQUFxQixXQUFyQixFQUFrQyxPQUFsQztBQUVBLFVBQU1DLG9CQUFvQixHQUFHbkYsUUFBUSxDQUFDNkUsYUFBVCxDQUF1QixLQUF2QixDQUE3QjtBQUNBTSwwQkFBb0IsQ0FBQ3BDLFNBQXJCLENBQStCTSxHQUEvQixDQUFtQ3lCLGlEQUFNLENBQUNNLFdBQTFDO0FBQ0FELDBCQUFvQixDQUFDRSxXQUFyQixDQUFpQ04sT0FBakM7QUFFQXpFLHNCQUFnQixDQUFDK0UsV0FBakIsQ0FBNkJGLG9CQUE3QjtBQUNILEtBVEQsTUFTTztBQUNISixhQUFPLENBQUNoQyxTQUFSLENBQWtCTSxHQUFsQixDQUFzQnlCLGlEQUFNLENBQUNNLFdBQTdCO0FBRUE5RSxzQkFBZ0IsQ0FBQytFLFdBQWpCLENBQTZCTixPQUE3QjtBQUNIO0FBQ0osR0FmRDtBQWlCQVQsaUJBQWUsQ0FBQ2UsV0FBaEIsQ0FBNEIvRSxnQkFBNUI7QUFDQWdFLGlCQUFlLENBQUN2QixTQUFoQixDQUEwQk0sR0FBMUIsQ0FBOEJ5QixpREFBTSxDQUFDekUsTUFBckM7QUFFQSxNQUFNaUYsVUFBVSxHQUFHdEYsUUFBUSxDQUFDNkUsYUFBVCxDQUF1QixHQUF2QixDQUFuQjtBQUNBUyxZQUFVLENBQUN2QyxTQUFYLENBQXFCTSxHQUFyQixDQUF5QnlCLGlEQUFNLENBQUNRLFVBQWhDO0FBQ0FBLFlBQVUsQ0FBQ3ZDLFNBQVgsQ0FBcUJNLEdBQXJCLENBQXlCeUIsaURBQU0sQ0FBQ1MsWUFBaEM7QUFDQUQsWUFBVSxDQUFDRSxTQUFYLEdBQXVCQyw0REFBdkI7QUFDQUgsWUFBVSxDQUFDSSxJQUFYLEdBQWtCLEdBQWxCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHM0YsUUFBUSxDQUFDNkUsYUFBVCxDQUF1QixHQUF2QixDQUF2QjtBQUNBYyxnQkFBYyxDQUFDNUMsU0FBZixDQUF5Qk0sR0FBekIsQ0FBNkJ5QixpREFBTSxDQUFDYSxjQUFwQztBQUNBQSxnQkFBYyxDQUFDNUMsU0FBZixDQUF5Qk0sR0FBekIsQ0FBNkJ5QixpREFBTSxDQUFDUyxZQUFwQztBQUNBSSxnQkFBYyxDQUFDSCxTQUFmLEdBQTJCSSxnRUFBM0I7QUFDQUQsZ0JBQWMsQ0FBQ0QsSUFBZixHQUFzQixHQUF0QjtBQUNBLE1BQU1qRixlQUFlLEdBQUdULFFBQVEsQ0FBQzZFLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBeEI7QUFDQXBFLGlCQUFlLENBQUNzQyxTQUFoQixDQUEwQk0sR0FBMUIsQ0FBOEJ5QixpREFBTSxDQUFDckUsZUFBckM7QUFDQUEsaUJBQWUsQ0FBQ3NDLFNBQWhCLENBQTBCTSxHQUExQixDQUE4QnlCLGlEQUFNLENBQUNTLFlBQXJDO0FBQ0E5RSxpQkFBZSxDQUFDK0UsU0FBaEIsR0FBNEJLLDZEQUFlLEdBQUdDLDREQUE5QztBQUNBckYsaUJBQWUsQ0FBQ2lGLElBQWhCLEdBQXVCLEdBQXZCO0FBRUFwQixpQkFBZSxDQUFDZSxXQUFoQixDQUE0Qk0sY0FBNUI7QUFDQXJCLGlCQUFlLENBQUNlLFdBQWhCLENBQTRCQyxVQUE1QjtBQUNBaEIsaUJBQWUsQ0FBQ2UsV0FBaEIsQ0FBNEI1RSxlQUE1QjtBQUNIOztBQUVjTCxpRkFBZixFOzs7Ozs7Ozs7Ozs7QUMzRGE7Ozs7SUFFUGEsYyxHQUNGLHdCQUFhTixXQUFiLEVBQTBCO0FBQUE7O0FBQ3RCLE9BQUtrQixlQUFMLEdBQXVCLENBQXZCOztBQUNBLE9BQUtXLG9CQUFMLEdBQTRCLFlBQVk7QUFDcEMsU0FBS1gsZUFBTCxHQUF1QixDQUF2QjtBQUNILEdBRkQ7O0FBR0EsT0FBS0QsbUJBQUwsR0FBMkIsWUFBWTtBQUNuQyxTQUFLQyxlQUFMO0FBQ0gsR0FGRDs7QUFHQSxPQUFLRyxtQkFBTCxHQUEyQixZQUFZO0FBQ25DLFNBQUtILGVBQUw7QUFDSCxHQUZEOztBQUdBLE9BQUtFLGdCQUFMLEdBQXdCLFlBQVk7QUFDaEMsUUFBTWdFLFFBQVEsR0FBR3BGLFdBQVcsQ0FBQ3FGLE1BQVosQ0FBbUIsVUFBVWhGLFFBQVYsRUFBb0JpRixPQUFwQixFQUE2QjtBQUM3RCxhQUFPakYsUUFBUSxDQUFDSixRQUFULEdBQW9CcUYsT0FBTyxDQUFDckYsUUFBNUIsR0FBdUNJLFFBQXZDLEdBQWtEaUYsT0FBekQ7QUFDSCxLQUZnQixDQUFqQjtBQUdBLFdBQU90RixXQUFXLENBQUN1RixPQUFaLENBQW9CSCxRQUFwQixDQUFQO0FBQ0gsR0FMRDs7QUFNQSxPQUFLN0QsZ0JBQUwsR0FBd0IsWUFBWTtBQUNoQyxRQUFNaUUsUUFBUSxHQUFHeEYsV0FBVyxDQUFDcUYsTUFBWixDQUFtQixVQUFVaEYsUUFBVixFQUFvQmlGLE9BQXBCLEVBQTZCO0FBQzdELGFBQU9qRixRQUFRLENBQUNKLFFBQVQsR0FBb0JxRixPQUFPLENBQUNyRixRQUE1QixHQUF1Q0ksUUFBdkMsR0FBa0RpRixPQUF6RDtBQUNILEtBRmdCLENBQWpCO0FBR0EsV0FBT3RGLFdBQVcsQ0FBQ3VGLE9BQVosQ0FBb0JDLFFBQXBCLENBQVA7QUFDSCxHQUxEOztBQU1BLE9BQUtsRSxtQkFBTCxHQUEyQixZQUFZO0FBQ25DLFdBQU90QixXQUFXLENBQUMsS0FBS29CLGdCQUFMLEVBQUQsQ0FBWCxDQUFxQ25CLFFBQTVDO0FBQ0gsR0FGRDs7QUFHQSxPQUFLa0IsbUJBQUwsR0FBMkIsWUFBWTtBQUNuQyxXQUFPbkIsV0FBVyxDQUFDLEtBQUt1QixnQkFBTCxFQUFELENBQVgsQ0FBcUN0QixRQUE1QztBQUNILEdBRkQ7QUFHSCxDOztBQUdMdEQsTUFBTSxDQUFDQyxPQUFQLEdBQWlCMEQsY0FBakIsQzs7Ozs7Ozs7Ozs7QUNuQ0EsVUFBVSxtQkFBTyxDQUFDLG9KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQywwSEFBZ0U7O0FBRWxHOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6ImltZ1NsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW1nU2xpZGVyLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiQ2FwYV8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDQ0NC44MTkgNDQ0LjgxOVxcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDQ0LjgxOSA0NDQuODE5O1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+PGc+PHBhdGggZD1cXFwiTTM1Mi4wMjUsMTk2LjcxMkwxNjUuODg0LDEwLjg0OEMxNTkuMDI5LDMuNjE1LDE1MC40NjksMCwxNDAuMTg3LDBjLTEwLjI4MiwwLTE4Ljg0MiwzLjYxOS0yNS42OTcsMTAuODQ4TDkyLjc5MiwzMi4yNjQgYy03LjA0NCw3LjA0My0xMC41NjYsMTUuNjA0LTEwLjU2NiwyNS42OTJjMCw5Ljg5NywzLjUyMSwxOC41NiwxMC41NjYsMjUuOTgxbDEzOC43NTMsMTM4LjQ3M0w5Mi43ODYsMzYxLjE2OCBjLTcuMDQyLDcuMDQzLTEwLjU2NCwxNS42MDQtMTAuNTY0LDI1LjY5M2MwLDkuODk2LDMuNTIxLDE4LjU2MiwxMC41NjQsMjUuOThsMjEuNywyMS40MTMgYzcuMDQzLDcuMDQzLDE1LjYxMiwxMC41NjQsMjUuNjk3LDEwLjU2NGMxMC4wODksMCwxOC42NTYtMy41MjEsMjUuNjk3LTEwLjU2NGwxODYuMTQ1LTE4NS44NjQgYzcuMDQ2LTcuNDIzLDEwLjU3MS0xNi4wODQsMTAuNTcxLTI1Ljk4MUMzNjIuNTk3LDIxMi4zMjEsMzU5LjA3MSwyMDMuNzU1LDM1Mi4wMjUsMTk2LjcxMnpcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJDYXBhXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgNDUuOTc1IDQ1Ljk3NVxcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDUuOTc1IDQ1Ljk3NTtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxnPjxnPjxwYXRoIGQ9XFxcIk0xMy45ODcsMGMtMi43NjIsMC01LDIuMjM5LTUsNXYzNS45NzVjMCwyLjc2MywyLjIzOCw1LDUsNXM1LTIuMjM4LDUtNVY1QzE4Ljk4NywyLjIzOCwxNi43NSwwLDEzLjk4NywwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0zMS45ODcsMGMtMi43NjIsMC01LDIuMjM5LTUsNXYzNS45NzVjMCwyLjc2MiwyLjIzOCw1LDUsNXM1LTIuMjM4LDUtNVY1QzM2Ljk4NywyLjIzOSwzNC43NDksMCwzMS45ODcsMHpcXFwiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiQ2FwYV8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDE2My44NjEgMTYzLjg2MVxcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTYzLjg2MSAxNjMuODYxO1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+PGc+PHBhdGggZD1cXFwiTTM0Ljg1NywzLjYxM0MyMC4wODQtNC44NjEsOC4xMDcsMi4wODEsOC4xMDcsMTkuMTA2djEyNS42MzdjMCwxNy4wNDIsMTEuOTc3LDIzLjk3NSwyNi43NSwxNS41MDlMMTQ0LjY3LDk3LjI3NSBjMTQuNzc4LTguNDc3LDE0Ljc3OC0yMi4yMTEsMC0zMC42ODZMMzQuODU3LDMuNjEzelxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkNhcGFfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCA0NDQuNTMxIDQ0NC41MzFcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ0NC41MzEgNDQ0LjUzMTtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxnPjxwYXRoIGQ9XFxcIk0yMTMuMTMsMjIyLjQwOUwzNTEuODgsODMuNjUzYzcuMDUtNy4wNDMsMTAuNTY3LTE1LjY1NywxMC41NjctMjUuODQxYzAtMTAuMTgzLTMuNTE4LTE4Ljc5My0xMC41NjctMjUuODM1IGwtMjEuNDA5LTIxLjQxNkMzMjMuNDMyLDMuNTIxLDMxNC44MTcsMCwzMDQuNjM3LDBzLTE4Ljc5MSwzLjUyMS0yNS44NDEsMTAuNTYxTDkyLjY0OSwxOTYuNDI1IGMtNy4wNDQsNy4wNDMtMTAuNTY2LDE1LjY1Ni0xMC41NjYsMjUuODQxczMuNTIxLDE4Ljc5MSwxMC41NjYsMjUuODM3bDE4Ni4xNDYsMTg1Ljg2NGM3LjA1LDcuMDQzLDE1LjY2LDEwLjU2NCwyNS44NDEsMTAuNTY0IHMxOC43OTUtMy41MjEsMjUuODM0LTEwLjU2NGwyMS40MDktMjEuNDEyYzcuMDUtNy4wMzksMTAuNTY3LTE1LjYwNCwxMC41NjctMjUuNjk3YzAtMTAuMDg1LTMuNTE4LTE4Ljc0Ni0xMC41NjctMjUuOTc4IEwyMTMuMTMsMjIyLjQwOXpcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2xpZGVyIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICBjdXJzb3I6IGdyYWI7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXMtY29sbGVjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLXNlbGY6IG5vcm1hbDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5zaW5nbGUtc2xpZGUge1xcclxcbiAgICBmbGV4OiAwIDAgMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZS1pbWFnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItYnV0dG9uIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDM1cHg7XFxyXFxuICAgIGhlaWdodDogMzVweDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1idXR0b24gc3ZnIHtcXHJcXG4gICAgd2lkdGg6IDE1cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJldmlvdXMtYnV0dG9uIHtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5leHQtYnV0dG9uIHtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5wbGF5cGF1c2UtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhdXNlZFN0YXRlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJzdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwyQ0FBMkM7SUFDM0MscUJBQXFCO0lBQ3JCLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QlwiLFwiZmlsZVwiOlwic3R5bGUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zbGlkZXIge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICAgIGN1cnNvcjogZ3JhYjtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlcy1jb2xsZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24tc2VsZjogbm9ybWFsO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpbmdsZS1zbGlkZSB7XFxyXFxuICAgIGZsZXg6IDAgMCAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlLWltYWdlIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1idXR0b24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMzVweDtcXHJcXG4gICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWJ1dHRvbiBzdmcge1xcclxcbiAgICB3aWR0aDogMTVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5wcmV2aW91cy1idXR0b24ge1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV4dC1idXR0b24ge1xcclxcbiAgICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXlwYXVzZS1idXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGF1c2VkU3RhdGUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxufVwiXX1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJzbGlkZXJcIjogXCJzbGlkZXJcIixcblx0XCJzbGlkZXMtY29sbGVjdGlvblwiOiBcInNsaWRlcy1jb2xsZWN0aW9uXCIsXG5cdFwic2xpZGVzQ29sbGVjdGlvblwiOiBcInNsaWRlcy1jb2xsZWN0aW9uXCIsXG5cdFwic2luZ2xlLXNsaWRlXCI6IFwic2luZ2xlLXNsaWRlXCIsXG5cdFwic2luZ2xlU2xpZGVcIjogXCJzaW5nbGUtc2xpZGVcIixcblx0XCJzbGlkZS1pbWFnZVwiOiBcInNsaWRlLWltYWdlXCIsXG5cdFwic2xpZGVJbWFnZVwiOiBcInNsaWRlLWltYWdlXCIsXG5cdFwic2xpZGVyLWJ1dHRvblwiOiBcInNsaWRlci1idXR0b25cIixcblx0XCJzbGlkZXJCdXR0b25cIjogXCJzbGlkZXItYnV0dG9uXCIsXG5cdFwicHJldmlvdXMtYnV0dG9uXCI6IFwicHJldmlvdXMtYnV0dG9uXCIsXG5cdFwicHJldmlvdXNCdXR0b25cIjogXCJwcmV2aW91cy1idXR0b25cIixcblx0XCJuZXh0LWJ1dHRvblwiOiBcIm5leHQtYnV0dG9uXCIsXG5cdFwibmV4dEJ1dHRvblwiOiBcIm5leHQtYnV0dG9uXCIsXG5cdFwicGxheXBhdXNlLWJ1dHRvblwiOiBcInBsYXlwYXVzZS1idXR0b25cIixcblx0XCJwbGF5cGF1c2VCdXR0b25cIjogXCJwbGF5cGF1c2UtYnV0dG9uXCIsXG5cdFwicGF1c2VkU3RhdGVcIjogXCJwYXVzZWRTdGF0ZVwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBjcmVhdGVTbGlkZXJMYXlvdXQgZnJvbSAnLi9zbGlkZXJMYXlvdXQuanMnO1xyXG5pbXBvcnQgU2xpZGVyUG9zaXRpb24gZnJvbSAnLi9zbGlkZXJQb3NpdGlvbi5qcyc7XHJcblxyXG5mdW5jdGlvbiBpbWdTbGlkZXIgKFxyXG4gICAgc2xpZGVySWQsXHJcbiAgICB7XHJcbiAgICAgICAgYXV0b3BsYXlFbmFibGVkID0gZmFsc2UsXHJcbiAgICAgICAgYXV0b3BsYXlJbnRlcnZhbCA9IDUwMDAsXHJcbiAgICAgICAgYnV0dG9uc1Zpc2libGUgPSB0cnVlLFxyXG4gICAgICAgIG1heFdpZHRoID0gJzUwMHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQgPSAnNTAwcHgnLFxyXG4gICAgfSxcclxuKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2xpZGVySWQpID09PSBudWxsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEVsZW1lbnQgd2l0aCBpZD1cIiR7c2xpZGVySWR9XCIgbm90IGZvdW5kLmApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNyZWF0ZVNsaWRlckxheW91dChzbGlkZXJJZCk7XHJcblxyXG4gICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2xpZGVySWQpLFxyXG4gICAgICAgIHNsaWRlc0NvbGxlY3Rpb24gPSBzbGlkZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2xpZGVzLWNvbGxlY3Rpb24nKVswXSxcclxuICAgICAgICBzaW5nbGVTbGlkZXMgPSBzbGlkZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2luZ2xlLXNsaWRlJyksXHJcbiAgICAgICAgcGxheXBhdXNlQnV0dG9uID0gc2xpZGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BsYXlwYXVzZS1idXR0b24nKVswXSxcclxuICAgICAgICB0cmFuc2Zvcm1TdGVwID0gMTAwLFxyXG4gICAgICAgIHNsaWRlc0FycmF5ID0gWy4uLnNpbmdsZVNsaWRlc10ubWFwKChpdGVtLCBwb3NpdGlvbikgPT4gKHsgaXRlbSwgcG9zaXRpb24sIHRyYW5zZm9ybTogMCB9KSksXHJcbiAgICAgICAgc2xpZGVEaXJlY3Rpb24gPSB7IG5leHQ6ICduZXh0JywgcHJldmlvdXM6ICdwcmV2aW91cycgfSxcclxuICAgICAgICBwb3NpdGlvbiA9IG5ldyBTbGlkZXJQb3NpdGlvbihzbGlkZXNBcnJheSk7XHJcblxyXG4gICAgbGV0IHRyYW5zZm9ybVZhbHVlID0gMCxcclxuICAgICAgICBzbGlkZXJUaW1lcklkLFxyXG4gICAgICAgIGlzU2xpZGVJblRyYW5zaXRpb24gPSBmYWxzZTtcclxuXHJcbiAgICBzbGlkZXIuc3R5bGUubWF4V2lkdGggPSBtYXhXaWR0aDtcclxuICAgIHNsaWRlci5zdHlsZS5tYXhIZWlnaHQgPSBtYXhIZWlnaHQ7XHJcblxyXG4gICAgaWYgKHNsaWRlc0FycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBFbGVtZW50ICR7c2xpZGVySWR9IGRvZXNuJ3QgY29udGFpbiBhbnkgc2xpZGVzLmApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHNsaWRlc0FycmF5Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb3B5ID0gc2luZ2xlU2xpZGVzWzBdLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgc2luZ2xlU2xpZGVzWzBdLmFmdGVyKGNvcHkpO1xyXG4gICAgICAgICAgICBzbGlkZXNBcnJheS5wdXNoKHsgaXRlbTogY29weSwgcG9zaXRpb246IDEsIHRyYW5zZm9ybTogMCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3dpdGNoU2xpZGUgKGRpcmVjdGlvbikge1xyXG4gICAgICAgIGxldCBuZXh0U2xpZGUgPSAwO1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IHNsaWRlRGlyZWN0aW9uLm5leHQpIHtcclxuICAgICAgICAgICAgcG9zaXRpb24ubmV4dEN1cnJlbnRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAocG9zaXRpb24uY3VycmVudFBvc2l0aW9uID4gcG9zaXRpb24uZ2V0TWF4U2xpZGVQb3NpdGlvbigpKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUgPSBwb3NpdGlvbi5nZXRNaW5TbGlkZUluZGV4KCk7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNBcnJheVtuZXh0U2xpZGVdLnBvc2l0aW9uID0gcG9zaXRpb24uZ2V0TWF4U2xpZGVQb3NpdGlvbigpICsgMTtcclxuICAgICAgICAgICAgICAgIHNsaWRlc0FycmF5W25leHRTbGlkZV0udHJhbnNmb3JtICs9IHNsaWRlc0FycmF5Lmxlbmd0aCAqIDEwMDtcclxuICAgICAgICAgICAgICAgIHNsaWRlc0FycmF5W25leHRTbGlkZV0uaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3NsaWRlc0FycmF5W25leHRTbGlkZV0udHJhbnNmb3JtfSUpYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1WYWx1ZSAtPSB0cmFuc2Zvcm1TdGVwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnByZXZDdXJyZW50UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uLmN1cnJlbnRQb3NpdGlvbiA8IHBvc2l0aW9uLmdldE1pblNsaWRlUG9zaXRpb24oKSkge1xyXG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlID0gcG9zaXRpb24uZ2V0TWF4U2xpZGVJbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzQXJyYXlbbmV4dFNsaWRlXS5wb3NpdGlvbiA9IHBvc2l0aW9uLmdldE1pblNsaWRlUG9zaXRpb24oKSAtIDE7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNBcnJheVtuZXh0U2xpZGVdLnRyYW5zZm9ybSAtPSBzbGlkZXNBcnJheS5sZW5ndGggKiAxMDA7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNBcnJheVtuZXh0U2xpZGVdLml0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtzbGlkZXNBcnJheVtuZXh0U2xpZGVdLnRyYW5zZm9ybX0lKWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJhbnNmb3JtVmFsdWUgKz0gdHJhbnNmb3JtU3RlcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNsaWRlc0NvbGxlY3Rpb24uc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzAuNXMnO1xyXG4gICAgICAgIHNsaWRlc0NvbGxlY3Rpb24uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0cmFuc2Zvcm1WYWx1ZX0lKWA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIHNsaWRlc0NvbGxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbnN0YXJ0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpc1NsaWRlSW5UcmFuc2l0aW9uID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlzU2xpZGVJblRyYW5zaXRpb24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhwb3NpdGlvbi5jdXJyZW50UG9zaXRpb24pID09PSBzbGlkZXNBcnJheS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uLmNsZWFyQ3VycmVudFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1WYWx1ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwcyc7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoc2xpZGUsIGkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZS5wb3NpdGlvbiA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGUudHJhbnNmb3JtID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZS5pdGVtLnN0eWxlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzbGlkZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmV4dC1idXR0b24nKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKCFpc1NsaWRlSW5UcmFuc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2hTbGlkZShzbGlkZURpcmVjdGlvbi5uZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNldEF1dG9wbGF5VGltZXIoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2xpZGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ByZXZpb3VzLWJ1dHRvbicpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAoIWlzU2xpZGVJblRyYW5zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaFNsaWRlKHNsaWRlRGlyZWN0aW9uLnByZXZpb3VzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNldEF1dG9wbGF5VGltZXIoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcGxheXBhdXNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAocGxheXBhdXNlQnV0dG9uLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYXVzZWRTdGF0ZScpKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5cGF1c2VCdXR0b24uZmlyc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdwYXVzZWRTdGF0ZScpO1xyXG4gICAgICAgICAgICAgICAgcGxheXBhdXNlQnV0dG9uLmxhc3RDaGlsZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgcGxheVNsaWRlcigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGxheXBhdXNlQnV0dG9uLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgncGF1c2VkU3RhdGUnKTtcclxuICAgICAgICAgICAgICAgIHBsYXlwYXVzZUJ1dHRvbi5sYXN0Q2hpbGQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICAgICAgICAgIHBhdXNlU2xpZGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0WCA9IDAsXHJcbiAgICAgICAgICAgIGlzTW91c2Vkb3duT25TbGlkZXIgPSBmYWxzZTtcclxuICAgICAgICBmdW5jdGlvbiBzd2l0Y2hTbGlkZUJ5RXZlbnQgKGVuZFgpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2hpZnQgPSBlbmRYIC0gc3RhcnRYO1xyXG4gICAgICAgICAgICBpZiAoc2hpZnQgPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoU2xpZGUoc2xpZGVEaXJlY3Rpb24ucHJldmlvdXMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaWZ0IDwgLTEwKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2hTbGlkZShzbGlkZURpcmVjdGlvbi5uZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNldEF1dG9wbGF5VGltZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBzdGFydFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgICAgICAgIHJlc2V0QXV0b3BsYXlUaW1lcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaFNsaWRlQnlFdmVudChlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaXNNb3VzZWRvd25PblNsaWRlciA9IHRydWU7XHJcbiAgICAgICAgICAgIHN0YXJ0WCA9IGUuY2xpZW50WDtcclxuICAgICAgICAgICAgcmVzZXRBdXRvcGxheVRpbWVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpc01vdXNlZG93bk9uU2xpZGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHN3aXRjaFNsaWRlQnlFdmVudChlLmNsaWVudFgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKGlzTW91c2Vkb3duT25TbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGlzTW91c2Vkb3duT25TbGlkZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaFNsaWRlQnlFdmVudChlLmNsaWVudFgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChidXR0b25zVmlzaWJsZSkge1xyXG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHBsYXlwYXVzZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5cGF1c2VCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgc2xpZGVyQnV0dG9ucyA9IHNsaWRlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzbGlkZXItYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHNsaWRlckJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRBdXRvcGxheVRpbWVyICgpIHtcclxuICAgICAgICBpZiAoIWF1dG9wbGF5RW5hYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhdXRvcGxheVN0b3AoKTtcclxuICAgICAgICBzbGlkZXJUaW1lcklkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzd2l0Y2hTbGlkZShzbGlkZURpcmVjdGlvbi5uZXh0KTtcclxuICAgICAgICB9LCBhdXRvcGxheUludGVydmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhdXRvcGxheVN0YXJ0ICgpIHtcclxuICAgICAgICBpZiAoIWF1dG9wbGF5RW5hYmxlZCkge1xyXG4gICAgICAgICAgICBwbGF5cGF1c2VCdXR0b24uZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdwYXVzZWRTdGF0ZScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBsYXlwYXVzZUJ1dHRvbi5sYXN0Q2hpbGQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICAgICAgcmVzZXRBdXRvcGxheVRpbWVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXV0b3BsYXlTdG9wICgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHNsaWRlclRpbWVySWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGF1dG9wbGF5U3RhcnQoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBwbGF5U2xpZGVyICgpIHtcclxuICAgICAgICBhdXRvcGxheUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGF1dG9wbGF5U3RhcnQoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHBhdXNlU2xpZGVyICgpIHtcclxuICAgICAgICBhdXRvcGxheUVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBhdXRvcGxheVN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBsYXk6IHBsYXlTbGlkZXIsXHJcbiAgICAgICAgcGF1c2U6IHBhdXNlU2xpZGVyLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW1nU2xpZGVyO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgbmV4dEJ1dHRvbkljb24gZnJvbSAnLi4vaWNvbnMvbmV4dEJ1dHRvbi5zdmcnO1xyXG5pbXBvcnQgcHJldmlvdXNCdXR0b25JY29uIGZyb20gJy4uL2ljb25zL3ByZXZpb3VzQnV0dG9uLnN2Zyc7XHJcbmltcG9ydCBwYXVzZUJ1dHRvbkljb24gZnJvbSAnLi4vaWNvbnMvcGF1c2VCdXR0b24uc3ZnJztcclxuaW1wb3J0IHBsYXlCdXR0b25JY29uIGZyb20gJy4uL2ljb25zL3BsYXlCdXR0b24uc3ZnJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNsaWRlckxheW91dCAoc2xpZGVySWQpIHtcclxuICAgIGNvbnN0IHNsaWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNsaWRlcklkKSxcclxuICAgICAgICBpbWdFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHNsaWRlckNvbnRhaW5lci5jaGlsZHJlbik7XHJcblxyXG4gICAgaWYgKGltZ0VsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzbGlkZXNDb2xsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzbGlkZXNDb2xsZWN0aW9uLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNsaWRlc0NvbGxlY3Rpb24pO1xyXG5cclxuICAgIGltZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAnSU1HJykge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNsaWRlSW1hZ2UpO1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzaW5nbGVTbGlkZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBzaW5nbGVTbGlkZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zaW5nbGVTbGlkZSk7XHJcbiAgICAgICAgICAgIHNpbmdsZVNsaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgc2xpZGVzQ29sbGVjdGlvbi5hcHBlbmRDaGlsZChzaW5nbGVTbGlkZUNvbnRhaW5lcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zaW5nbGVTbGlkZSk7XHJcblxyXG4gICAgICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHNsaWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzbGlkZXNDb2xsZWN0aW9uKTtcclxuICAgIHNsaWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZXIpO1xyXG5cclxuICAgIGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdC5hZGQoc3R5bGVzLm5leHRCdXR0b24pO1xyXG4gICAgbmV4dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZXJCdXR0b24pO1xyXG4gICAgbmV4dEJ1dHRvbi5pbm5lckhUTUwgPSBuZXh0QnV0dG9uSWNvbjtcclxuICAgIG5leHRCdXR0b24uaHJlZiA9ICcjJztcclxuICAgIGNvbnN0IHByZXZpb3VzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgcHJldmlvdXNCdXR0b24uY2xhc3NMaXN0LmFkZChzdHlsZXMucHJldmlvdXNCdXR0b24pO1xyXG4gICAgcHJldmlvdXNCdXR0b24uY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVyQnV0dG9uKTtcclxuICAgIHByZXZpb3VzQnV0dG9uLmlubmVySFRNTCA9IHByZXZpb3VzQnV0dG9uSWNvbjtcclxuICAgIHByZXZpb3VzQnV0dG9uLmhyZWYgPSAnIyc7XHJcbiAgICBjb25zdCBwbGF5cGF1c2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBwbGF5cGF1c2VCdXR0b24uY2xhc3NMaXN0LmFkZChzdHlsZXMucGxheXBhdXNlQnV0dG9uKTtcclxuICAgIHBsYXlwYXVzZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZXJCdXR0b24pO1xyXG4gICAgcGxheXBhdXNlQnV0dG9uLmlubmVySFRNTCA9IHBhdXNlQnV0dG9uSWNvbiArIHBsYXlCdXR0b25JY29uO1xyXG4gICAgcGxheXBhdXNlQnV0dG9uLmhyZWYgPSAnIyc7XHJcblxyXG4gICAgc2xpZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHByZXZpb3VzQnV0dG9uKTtcclxuICAgIHNsaWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXh0QnV0dG9uKTtcclxuICAgIHNsaWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5cGF1c2VCdXR0b24pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTbGlkZXJMYXlvdXQ7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIFNsaWRlclBvc2l0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yIChzbGlkZXNBcnJheSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uID0gMDtcclxuICAgICAgICB0aGlzLmNsZWFyQ3VycmVudFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm5leHRDdXJyZW50UG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uKys7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnByZXZDdXJyZW50UG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uLS07XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldE1pblNsaWRlSW5kZXggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pblNsaWRlID0gc2xpZGVzQXJyYXkucmVkdWNlKGZ1bmN0aW9uIChwcmV2aW91cywgY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzLnBvc2l0aW9uIDwgY3VycmVudC5wb3NpdGlvbiA/IHByZXZpb3VzIDogY3VycmVudDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzbGlkZXNBcnJheS5pbmRleE9mKG1pblNsaWRlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2V0TWF4U2xpZGVJbmRleCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgbWF4U2xpZGUgPSBzbGlkZXNBcnJheS5yZWR1Y2UoZnVuY3Rpb24gKHByZXZpb3VzLCBjdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldmlvdXMucG9zaXRpb24gPiBjdXJyZW50LnBvc2l0aW9uID8gcHJldmlvdXMgOiBjdXJyZW50O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHNsaWRlc0FycmF5LmluZGV4T2YobWF4U2xpZGUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRNaW5TbGlkZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2xpZGVzQXJyYXlbdGhpcy5nZXRNaW5TbGlkZUluZGV4KCldLnBvc2l0aW9uO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRNYXhTbGlkZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2xpZGVzQXJyYXlbdGhpcy5nZXRNYXhTbGlkZUluZGV4KCldLnBvc2l0aW9uO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2xpZGVyUG9zaXRpb247XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9