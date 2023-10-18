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
/******/ 	__webpack_require__.p = "assets/scripts/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/MyPlace.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/MyPlace.js":
/*!************************!*\
  !*** ./src/MyPlace.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/Map */ \"./src/UI/Map.js\");\n\nclass LoadedPlace {\n  constructor(coordinates, address) {\n    new _UI_Map__WEBPACK_IMPORTED_MODULE_0__[\"Map\"](coordinates);\n    const headerTitleEl = document.querySelector('header h1');\n    headerTitleEl.textContent = address;\n  }\n}\n\n/*\r\n\r\nNow after this, we can instantiate this LoadedPlace class\r\nand we have to parse some data from the URL,\r\nso we'll call \"new LoadedPlace\" and I'll need to forward \"coordinates\" an \"address\"\r\nand that is part of the URL and needs to be parsed.\r\n\r\nFor that, there is a built-in URL constructor function or class, however you want to call it\r\n=> new URL()\r\n\r\n*/\n\nconst url = new URL(location.href);\n// \"location.href\" is the current location\n// new URL() creates an object with options for us to get information out of that URL\nconst queryParams = url.searchParams;\n// So this will be our dynamic options here, so the thing after the question mark basically,\n// stored as key-value pairs in queryParams now, thanks to searchParams\nconst coords = {\n  lat: parseFloat(queryParams.get('lat')),\n  // converted into a number by adding a + or parseFloat()\n  lng: +queryParams.get('lng') // converted into a number by adding a + or parseFloat()\n};\n\nconst address = queryParams.get('address');\nnew LoadedPlace(coords, address);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTXlQbGFjZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9NeVBsYWNlLmpzPzVmM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwIH0gZnJvbSAnLi9VSS9NYXAnO1xyXG5cclxuY2xhc3MgTG9hZGVkUGxhY2Uge1xyXG4gIGNvbnN0cnVjdG9yKGNvb3JkaW5hdGVzLCBhZGRyZXNzKSB7XHJcbiAgICBuZXcgTWFwKGNvb3JkaW5hdGVzKTtcclxuICAgIGNvbnN0IGhlYWRlclRpdGxlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgaDEnKTtcclxuICAgIGhlYWRlclRpdGxlRWwudGV4dENvbnRlbnQgPSBhZGRyZXNzO1xyXG4gIH1cclxufVxyXG5cclxuLypcclxuXHJcbk5vdyBhZnRlciB0aGlzLCB3ZSBjYW4gaW5zdGFudGlhdGUgdGhpcyBMb2FkZWRQbGFjZSBjbGFzc1xyXG5hbmQgd2UgaGF2ZSB0byBwYXJzZSBzb21lIGRhdGEgZnJvbSB0aGUgVVJMLFxyXG5zbyB3ZSdsbCBjYWxsIFwibmV3IExvYWRlZFBsYWNlXCIgYW5kIEknbGwgbmVlZCB0byBmb3J3YXJkIFwiY29vcmRpbmF0ZXNcIiBhbiBcImFkZHJlc3NcIlxyXG5hbmQgdGhhdCBpcyBwYXJ0IG9mIHRoZSBVUkwgYW5kIG5lZWRzIHRvIGJlIHBhcnNlZC5cclxuXHJcbkZvciB0aGF0LCB0aGVyZSBpcyBhIGJ1aWx0LWluIFVSTCBjb25zdHJ1Y3RvciBmdW5jdGlvbiBvciBjbGFzcywgaG93ZXZlciB5b3Ugd2FudCB0byBjYWxsIGl0XHJcbj0+IG5ldyBVUkwoKVxyXG5cclxuKi9cclxuXHJcbmNvbnN0IHVybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XHJcbi8vIFwibG9jYXRpb24uaHJlZlwiIGlzIHRoZSBjdXJyZW50IGxvY2F0aW9uXHJcbi8vIG5ldyBVUkwoKSBjcmVhdGVzIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMgZm9yIHVzIHRvIGdldCBpbmZvcm1hdGlvbiBvdXQgb2YgdGhhdCBVUkxcclxuY29uc3QgcXVlcnlQYXJhbXMgPSB1cmwuc2VhcmNoUGFyYW1zO1xyXG4vLyBTbyB0aGlzIHdpbGwgYmUgb3VyIGR5bmFtaWMgb3B0aW9ucyBoZXJlLCBzbyB0aGUgdGhpbmcgYWZ0ZXIgdGhlIHF1ZXN0aW9uIG1hcmsgYmFzaWNhbGx5LFxyXG4vLyBzdG9yZWQgYXMga2V5LXZhbHVlIHBhaXJzIGluIHF1ZXJ5UGFyYW1zIG5vdywgdGhhbmtzIHRvIHNlYXJjaFBhcmFtc1xyXG5jb25zdCBjb29yZHMgPSB7XHJcbiAgbGF0OiBwYXJzZUZsb2F0KHF1ZXJ5UGFyYW1zLmdldCgnbGF0JykpLCAvLyBjb252ZXJ0ZWQgaW50byBhIG51bWJlciBieSBhZGRpbmcgYSArIG9yIHBhcnNlRmxvYXQoKVxyXG4gIGxuZzogK3F1ZXJ5UGFyYW1zLmdldCgnbG5nJykgLy8gY29udmVydGVkIGludG8gYSBudW1iZXIgYnkgYWRkaW5nIGEgKyBvciBwYXJzZUZsb2F0KClcclxufTtcclxuY29uc3QgYWRkcmVzcyA9IHF1ZXJ5UGFyYW1zLmdldCgnYWRkcmVzcycpO1xyXG5uZXcgTG9hZGVkUGxhY2UoY29vcmRzLCBhZGRyZXNzKTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/MyPlace.js\n");

/***/ }),

/***/ "./src/UI/Map.js":
/*!***********************!*\
  !*** ./src/UI/Map.js ***!
  \***********************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Map\", function() { return Map; });\nclass Map {\n  constructor(coords) {\n    // this.coordinates = coords;\n    this.render(coords);\n  }\n  render(coordinates) {\n    if (!google) {\n      alert('Could not load maps library - please try again later!');\n      return;\n    }\n    const map = new google.maps.Map(document.getElementById('map'), {\n      center: coordinates,\n      zoom: 16\n    });\n    new google.maps.Marker({\n      position: coordinates,\n      map: map\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVUkvTWFwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL1VJL01hcC5qcz9iNTc5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNYXAge1xyXG4gIGNvbnN0cnVjdG9yKGNvb3Jkcykge1xyXG4gICAgLy8gdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkcztcclxuICAgIHRoaXMucmVuZGVyKGNvb3Jkcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY29vcmRpbmF0ZXMpIHtcclxuICAgIGlmICghZ29vZ2xlKSB7XHJcbiAgICAgIGFsZXJ0KCdDb3VsZCBub3QgbG9hZCBtYXBzIGxpYnJhcnkgLSBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyIScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgICAgY2VudGVyOiBjb29yZGluYXRlcyxcclxuICAgICAgem9vbTogMTZcclxuICAgIH0pO1xyXG5cclxuICAgIG5ldyBnb29nbGUubWFwcy5NYXJrZXIoeyBwb3NpdGlvbjogY29vcmRpbmF0ZXMsIG1hcDogbWFwIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/UI/Map.js\n");

/***/ })

/******/ });