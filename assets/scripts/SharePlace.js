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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/SharePlace.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/SharePlace.js":
/*!***************************!*\
  !*** ./src/SharePlace.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/Modal */ \"./src/UI/Modal.js\");\n/* harmony import */ var _UI_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/Map */ \"./src/UI/Map.js\");\n/* harmony import */ var _Utility_Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utility/Location */ \"./src/Utility/Location.js\");\n\n\n\nclass PlaceFinder {\n  constructor() {\n    const addressForm = document.querySelector('form');\n    const locateUserBtn = document.getElementById('locate-btn');\n    this.shareBtn = document.getElementById('share-btn');\n    locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));\n    this.shareBtn.addEventListener('click', this.sharePlaceHandler);\n    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));\n  }\n  sharePlaceHandler() {\n    const sharedLinkInputElement = document.getElementById('share-link');\n    if (!navigator.clipboard) {\n      sharedLinkInputElement.select();\n      return;\n    }\n    navigator.clipboard.writeText(sharedLinkInputElement.value).then(() => {\n      alert('Copied into clipboard!');\n    }).catch(err => {\n      console.log(err);\n      sharedLinkInputElement.select();\n    });\n  }\n  selectPlace(coordinates, address) {\n    // accepts both arguments now\n    if (this.map) {\n      this.map.render(coordinates);\n    } else {\n      this.map = new _UI_Map__WEBPACK_IMPORTED_MODULE_1__[\"Map\"](coordinates);\n    }\n\n    // we want to create a sharable link and output it in my-place/index.html\n    this.shareBtn.disabled = false; // we enable the button which is disabled initially in index.html\n    const sharedLinkInputElement = document.getElementById('share-link');\n    sharedLinkInputElement.value = `${location.origin}/my-place?address=${encodeURI(address)}&lat=${coordinates.lat}&lng=${coordinates.lng}`;\n  }\n  locateUserHandler() {\n    if (!navigator.geolocation) {\n      alert('Location feature is not available in your browser - please use a more modern browser or manually enter an address.');\n      return;\n    }\n    const modal = new _UI_Modal__WEBPACK_IMPORTED_MODULE_0__[\"Modal\"]('loading-modal-content', 'Loading location - please wait!');\n    modal.show();\n    navigator.geolocation.getCurrentPosition(async successResult => {\n      const coordinates = {\n        lat: successResult.coords.latitude + Math.random() * 50,\n        // to not display my current position\n        lng: successResult.coords.longitude + Math.random() * 50 // to not display my current position\n      };\n\n      const address = await Object(_Utility_Location__WEBPACK_IMPORTED_MODULE_2__[\"getAddressFromCoords\"])(coordinates); // we get the address now\n      modal.hide();\n      this.selectPlace(coordinates, address); // now we forward the address here\n    }, error => {\n      modal.hide();\n      alert('Could not locate you unfortunately. Please enter an address manually!');\n    });\n  }\n  async findAddressHandler(event) {\n    event.preventDefault();\n    const address = event.target.querySelector('input').value;\n    if (!address || address.trim().length === 0) {\n      alert('Invalid address entered - please try again!');\n      return;\n    }\n    const modal = new _UI_Modal__WEBPACK_IMPORTED_MODULE_0__[\"Modal\"]('loading-modal-content', 'Loading location - please wait!');\n    modal.show();\n\n    /* \r\n    \r\n    Next, we need to make sure that we reach out to Google's servers because they do have an API for us \r\n    which we can use to translate the entered address (which could be something like a street name) into coordinates\r\n    (see Utility/Location.js) This should be a file which holds utility methods for getting coordinates for an address for example\r\n      */\n\n    try {\n      const coordinates = await Object(_Utility_Location__WEBPACK_IMPORTED_MODULE_2__[\"getCoordsFromAddress\"])(address); // we get the coordinates\n      this.selectPlace(coordinates, address); // we forward the coordinates and address in exactly the same format we would get them if we auto locate the user\n    } catch (err) {\n      alert(err.message); // this will display the error message set in Location.js\n    } // because it might fail though\n    modal.hide();\n  }\n}\nconst placeFinder = new PlaceFinder();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2hhcmVQbGFjZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9TaGFyZVBsYWNlLmpzP2Q1YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuL1VJL01vZGFsJztcclxuaW1wb3J0IHsgTWFwIH0gZnJvbSAnLi9VSS9NYXAnO1xyXG5pbXBvcnQgeyBnZXRDb29yZHNGcm9tQWRkcmVzcywgZ2V0QWRkcmVzc0Zyb21Db29yZHMgfSBmcm9tICcuL1V0aWxpdHkvTG9jYXRpb24nO1xyXG5cclxuY2xhc3MgUGxhY2VGaW5kZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgY29uc3QgYWRkcmVzc0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgICBjb25zdCBsb2NhdGVVc2VyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0ZS1idG4nKTtcclxuICAgIHRoaXMuc2hhcmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hhcmUtYnRuJyk7XHJcblxyXG4gICAgbG9jYXRlVXNlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubG9jYXRlVXNlckhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLnNoYXJlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaGFyZVBsYWNlSGFuZGxlcik7XHJcbiAgICBhZGRyZXNzRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmZpbmRBZGRyZXNzSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIHNoYXJlUGxhY2VIYW5kbGVyKCkge1xyXG4gICAgY29uc3Qgc2hhcmVkTGlua0lucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGFyZS1saW5rJyk7XHJcbiAgICBpZiAoIW5hdmlnYXRvci5jbGlwYm9hcmQpIHtcclxuICAgICAgc2hhcmVkTGlua0lucHV0RWxlbWVudC5zZWxlY3QoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmRcclxuICAgICAgLndyaXRlVGV4dChzaGFyZWRMaW5rSW5wdXRFbGVtZW50LnZhbHVlKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoJ0NvcGllZCBpbnRvIGNsaXBib2FyZCEnKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBzaGFyZWRMaW5rSW5wdXRFbGVtZW50LnNlbGVjdCgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFBsYWNlKGNvb3JkaW5hdGVzLCBhZGRyZXNzKSB7XHJcbiAgICAvLyBhY2NlcHRzIGJvdGggYXJndW1lbnRzIG5vd1xyXG4gICAgaWYgKHRoaXMubWFwKSB7XHJcbiAgICAgIHRoaXMubWFwLnJlbmRlcihjb29yZGluYXRlcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1hcCA9IG5ldyBNYXAoY29vcmRpbmF0ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHdlIHdhbnQgdG8gY3JlYXRlIGEgc2hhcmFibGUgbGluayBhbmQgb3V0cHV0IGl0IGluIG15LXBsYWNlL2luZGV4Lmh0bWxcclxuICAgIHRoaXMuc2hhcmVCdG4uZGlzYWJsZWQgPSBmYWxzZTsgLy8gd2UgZW5hYmxlIHRoZSBidXR0b24gd2hpY2ggaXMgZGlzYWJsZWQgaW5pdGlhbGx5IGluIGluZGV4Lmh0bWxcclxuICAgIGNvbnN0IHNoYXJlZExpbmtJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hhcmUtbGluaycpO1xyXG4gICAgc2hhcmVkTGlua0lucHV0RWxlbWVudC52YWx1ZSA9IGAke1xyXG4gICAgICBsb2NhdGlvbi5vcmlnaW5cclxuICAgIH0vbXktcGxhY2U/YWRkcmVzcz0ke2VuY29kZVVSSShhZGRyZXNzKX0mbGF0PSR7Y29vcmRpbmF0ZXMubGF0fSZsbmc9JHtcclxuICAgICAgY29vcmRpbmF0ZXMubG5nXHJcbiAgICB9YDtcclxuICB9XHJcblxyXG4gIGxvY2F0ZVVzZXJIYW5kbGVyKCkge1xyXG4gICAgaWYgKCFuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcclxuICAgICAgYWxlcnQoXHJcbiAgICAgICAgJ0xvY2F0aW9uIGZlYXR1cmUgaXMgbm90IGF2YWlsYWJsZSBpbiB5b3VyIGJyb3dzZXIgLSBwbGVhc2UgdXNlIGEgbW9yZSBtb2Rlcm4gYnJvd3NlciBvciBtYW51YWxseSBlbnRlciBhbiBhZGRyZXNzLidcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoXHJcbiAgICAgICdsb2FkaW5nLW1vZGFsLWNvbnRlbnQnLFxyXG4gICAgICAnTG9hZGluZyBsb2NhdGlvbiAtIHBsZWFzZSB3YWl0ISdcclxuICAgICk7XHJcbiAgICBtb2RhbC5zaG93KCk7XHJcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxyXG4gICAgICBhc3luYyBzdWNjZXNzUmVzdWx0ID0+IHtcclxuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IHtcclxuICAgICAgICAgIGxhdDogc3VjY2Vzc1Jlc3VsdC5jb29yZHMubGF0aXR1ZGUgKyBNYXRoLnJhbmRvbSgpICogNTAsIC8vIHRvIG5vdCBkaXNwbGF5IG15IGN1cnJlbnQgcG9zaXRpb25cclxuICAgICAgICAgIGxuZzogc3VjY2Vzc1Jlc3VsdC5jb29yZHMubG9uZ2l0dWRlICsgTWF0aC5yYW5kb20oKSAqIDUwIC8vIHRvIG5vdCBkaXNwbGF5IG15IGN1cnJlbnQgcG9zaXRpb25cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgZ2V0QWRkcmVzc0Zyb21Db29yZHMoY29vcmRpbmF0ZXMpOyAvLyB3ZSBnZXQgdGhlIGFkZHJlc3Mgbm93XHJcbiAgICAgICAgbW9kYWwuaGlkZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdFBsYWNlKGNvb3JkaW5hdGVzLCBhZGRyZXNzKTsgLy8gbm93IHdlIGZvcndhcmQgdGhlIGFkZHJlc3MgaGVyZVxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgbW9kYWwuaGlkZSgpO1xyXG4gICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgJ0NvdWxkIG5vdCBsb2NhdGUgeW91IHVuZm9ydHVuYXRlbHkuIFBsZWFzZSBlbnRlciBhbiBhZGRyZXNzIG1hbnVhbGx5ISdcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZmluZEFkZHJlc3NIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgYWRkcmVzcyA9IGV2ZW50LnRhcmdldC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlO1xyXG4gICAgaWYgKCFhZGRyZXNzIHx8IGFkZHJlc3MudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBhbGVydCgnSW52YWxpZCBhZGRyZXNzIGVudGVyZWQgLSBwbGVhc2UgdHJ5IGFnYWluIScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbChcclxuICAgICAgJ2xvYWRpbmctbW9kYWwtY29udGVudCcsXHJcbiAgICAgICdMb2FkaW5nIGxvY2F0aW9uIC0gcGxlYXNlIHdhaXQhJ1xyXG4gICAgKTtcclxuICAgIG1vZGFsLnNob3coKTtcclxuXHJcbiAgICAvKiBcclxuICAgIFxyXG4gICAgTmV4dCwgd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhhdCB3ZSByZWFjaCBvdXQgdG8gR29vZ2xlJ3Mgc2VydmVycyBiZWNhdXNlIHRoZXkgZG8gaGF2ZSBhbiBBUEkgZm9yIHVzIFxyXG4gICAgd2hpY2ggd2UgY2FuIHVzZSB0byB0cmFuc2xhdGUgdGhlIGVudGVyZWQgYWRkcmVzcyAod2hpY2ggY291bGQgYmUgc29tZXRoaW5nIGxpa2UgYSBzdHJlZXQgbmFtZSkgaW50byBjb29yZGluYXRlc1xyXG4gICAgKHNlZSBVdGlsaXR5L0xvY2F0aW9uLmpzKSBUaGlzIHNob3VsZCBiZSBhIGZpbGUgd2hpY2ggaG9sZHMgdXRpbGl0eSBtZXRob2RzIGZvciBnZXR0aW5nIGNvb3JkaW5hdGVzIGZvciBhbiBhZGRyZXNzIGZvciBleGFtcGxlXHJcblxyXG4gICAgKi9cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IGF3YWl0IGdldENvb3Jkc0Zyb21BZGRyZXNzKGFkZHJlc3MpOyAvLyB3ZSBnZXQgdGhlIGNvb3JkaW5hdGVzXHJcbiAgICAgIHRoaXMuc2VsZWN0UGxhY2UoY29vcmRpbmF0ZXMsIGFkZHJlc3MpOyAvLyB3ZSBmb3J3YXJkIHRoZSBjb29yZGluYXRlcyBhbmQgYWRkcmVzcyBpbiBleGFjdGx5IHRoZSBzYW1lIGZvcm1hdCB3ZSB3b3VsZCBnZXQgdGhlbSBpZiB3ZSBhdXRvIGxvY2F0ZSB0aGUgdXNlclxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKTsgLy8gdGhpcyB3aWxsIGRpc3BsYXkgdGhlIGVycm9yIG1lc3NhZ2Ugc2V0IGluIExvY2F0aW9uLmpzXHJcbiAgICB9IC8vIGJlY2F1c2UgaXQgbWlnaHQgZmFpbCB0aG91Z2hcclxuICAgIG1vZGFsLmhpZGUoKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHBsYWNlRmluZGVyID0gbmV3IFBsYWNlRmluZGVyKCk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/SharePlace.js\n");

/***/ }),

/***/ "./src/UI/Map.js":
/*!***********************!*\
  !*** ./src/UI/Map.js ***!
  \***********************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Map\", function() { return Map; });\nclass Map {\n  constructor(coords) {\n    // this.coordinates = coords;\n    this.render(coords);\n  }\n  render(coordinates) {\n    if (!google) {\n      alert('Could not load maps library - please try again later!');\n      return;\n    }\n    const map = new google.maps.Map(document.getElementById('map'), {\n      center: coordinates,\n      zoom: 16\n    });\n    new google.maps.Marker({\n      position: coordinates,\n      map: map\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVUkvTWFwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL1VJL01hcC5qcz9iNTc5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNYXAge1xyXG4gIGNvbnN0cnVjdG9yKGNvb3Jkcykge1xyXG4gICAgLy8gdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkcztcclxuICAgIHRoaXMucmVuZGVyKGNvb3Jkcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY29vcmRpbmF0ZXMpIHtcclxuICAgIGlmICghZ29vZ2xlKSB7XHJcbiAgICAgIGFsZXJ0KCdDb3VsZCBub3QgbG9hZCBtYXBzIGxpYnJhcnkgLSBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyIScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgICAgY2VudGVyOiBjb29yZGluYXRlcyxcclxuICAgICAgem9vbTogMTZcclxuICAgIH0pO1xyXG5cclxuICAgIG5ldyBnb29nbGUubWFwcy5NYXJrZXIoeyBwb3NpdGlvbjogY29vcmRpbmF0ZXMsIG1hcDogbWFwIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/UI/Map.js\n");

/***/ }),

/***/ "./src/UI/Modal.js":
/*!*************************!*\
  !*** ./src/UI/Modal.js ***!
  \*************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Modal\", function() { return Modal; });\nclass Modal {\n  constructor(contentId, fallbackText) {\n    this.fallbackText = fallbackText;\n    this.contentTemplateEl = document.getElementById(contentId);\n    this.modalTemplateEl = document.getElementById('modal-template');\n  }\n  show() {\n    if ('content' in document.createElement('template')) {\n      const modalElements = document.importNode(this.modalTemplateEl.content, true);\n      this.modalElement = modalElements.querySelector('.modal');\n      this.backdropElement = modalElements.querySelector('.backdrop');\n      const contentElement = document.importNode(this.contentTemplateEl.content, true);\n      this.modalElement.appendChild(contentElement);\n      document.body.insertAdjacentElement('afterbegin', this.modalElement);\n      document.body.insertAdjacentElement('afterbegin', this.backdropElement);\n    } else {\n      // fallback code\n      alert(this.fallbackText);\n    }\n  }\n  hide() {\n    if (this.modalElement) {\n      document.body.removeChild(this.modalElement); // this.modalElement.remove()\n      document.body.removeChild(this.backdropElement);\n      this.modalElement = null;\n      this.backdropElement = null;\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVUkvTW9kYWwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvVUkvTW9kYWwuanM/MjcwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTW9kYWwge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRlbnRJZCwgZmFsbGJhY2tUZXh0KSB7XHJcbiAgICB0aGlzLmZhbGxiYWNrVGV4dCA9IGZhbGxiYWNrVGV4dDtcclxuICAgIHRoaXMuY29udGVudFRlbXBsYXRlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250ZW50SWQpO1xyXG4gICAgdGhpcy5tb2RhbFRlbXBsYXRlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtdGVtcGxhdGUnKTtcclxuICB9XHJcbiAgc2hvdygpIHtcclxuICAgIGlmICgnY29udGVudCcgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKSkge1xyXG4gICAgICBjb25zdCBtb2RhbEVsZW1lbnRzID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShcclxuICAgICAgICB0aGlzLm1vZGFsVGVtcGxhdGVFbC5jb250ZW50LFxyXG4gICAgICAgIHRydWVcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5tb2RhbEVsZW1lbnQgPSBtb2RhbEVsZW1lbnRzLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG4gICAgICB0aGlzLmJhY2tkcm9wRWxlbWVudCA9IG1vZGFsRWxlbWVudHMucXVlcnlTZWxlY3RvcignLmJhY2tkcm9wJyk7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShcclxuICAgICAgICB0aGlzLmNvbnRlbnRUZW1wbGF0ZUVsLmNvbnRlbnQsXHJcbiAgICAgICAgdHJ1ZVxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5tb2RhbEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudEVsZW1lbnQpO1xyXG5cclxuICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCB0aGlzLm1vZGFsRWxlbWVudCk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgdGhpcy5iYWNrZHJvcEVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gZmFsbGJhY2sgY29kZVxyXG4gICAgICBhbGVydCh0aGlzLmZhbGxiYWNrVGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaWRlKCkge1xyXG4gICAgaWYgKHRoaXMubW9kYWxFbGVtZW50KSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5tb2RhbEVsZW1lbnQpOyAvLyB0aGlzLm1vZGFsRWxlbWVudC5yZW1vdmUoKVxyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuYmFja2Ryb3BFbGVtZW50KTtcclxuICAgICAgdGhpcy5tb2RhbEVsZW1lbnQgPSBudWxsO1xyXG4gICAgICB0aGlzLmJhY2tkcm9wRWxlbWVudCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/UI/Modal.js\n");

/***/ }),

/***/ "./src/Utility/Location.js":
/*!*********************************!*\
  !*** ./src/Utility/Location.js ***!
  \*********************************/
/*! exports provided: getAddressFromCoords, getCoordsFromAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAddressFromCoords\", function() { return getAddressFromCoords; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCoordsFromAddress\", function() { return getCoordsFromAddress; });\nconst GOOGLE_API_KEY = 'YOUR_API_KEY';\nasync function getAddressFromCoords(coords) {\n  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${GOOGLE_API_KEY}`);\n  if (!response.ok) {\n    throw new Error('Failed to fetch address. Please try again!');\n  }\n  const data = await response.json(); // extracts the response data\n  if (data.error_message) {\n    throw new Error(data.error_message);\n  } // it could also fail without using an error status code, so without making it to the if (!response.ok) {} (it's a Google specific thing)\n\n  // console.log(data);\n  const address = data.results[0].formatted_address;\n  return address; // since we're using async/await, this is in the end what this invisibly created promise will resolve to\n}\n\nasync function getCoordsFromAddress(address) {\n  const urlAddress = encodeURI(address); // translated into a URL-friendly encoding: we get a URL-friendly string back\n  // we could use axios here or then() and catch() as well\n  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${GOOGLE_API_KEY}`);\n  if (!response.ok) {\n    throw new Error('Failed to fetch coordinates. Please try again!');\n  }\n  const data = await response.json(); // extracts the response data\n  if (data.error_message) {\n    throw new Error(data.error_message);\n  } // it could also fail without using an error status code, so without making it to the if (!response.ok) {} (it's a Google specific thing)\n\n  // console.log(data);\n  const coordinates = data.results[0].geometry.location;\n  return coordinates;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXRpbGl0eS9Mb2NhdGlvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9VdGlsaXR5L0xvY2F0aW9uLmpzPzQyZGUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR09PR0xFX0FQSV9LRVkgPSAnWU9VUl9BUElfS0VZJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBZGRyZXNzRnJvbUNvb3Jkcyhjb29yZHMpIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/bGF0bG5nPSR7Y29vcmRzLmxhdH0sJHtjb29yZHMubG5nfSZrZXk9JHtHT09HTEVfQVBJX0tFWX1gXHJcbiAgKTtcclxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBhZGRyZXNzLiBQbGVhc2UgdHJ5IGFnYWluIScpO1xyXG4gIH1cclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyAvLyBleHRyYWN0cyB0aGUgcmVzcG9uc2UgZGF0YVxyXG4gIGlmIChkYXRhLmVycm9yX21lc3NhZ2UpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihkYXRhLmVycm9yX21lc3NhZ2UpO1xyXG4gIH0gLy8gaXQgY291bGQgYWxzbyBmYWlsIHdpdGhvdXQgdXNpbmcgYW4gZXJyb3Igc3RhdHVzIGNvZGUsIHNvIHdpdGhvdXQgbWFraW5nIGl0IHRvIHRoZSBpZiAoIXJlc3BvbnNlLm9rKSB7fSAoaXQncyBhIEdvb2dsZSBzcGVjaWZpYyB0aGluZylcclxuXHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgY29uc3QgYWRkcmVzcyA9IGRhdGEucmVzdWx0c1swXS5mb3JtYXR0ZWRfYWRkcmVzcztcclxuICByZXR1cm4gYWRkcmVzczsgLy8gc2luY2Ugd2UncmUgdXNpbmcgYXN5bmMvYXdhaXQsIHRoaXMgaXMgaW4gdGhlIGVuZCB3aGF0IHRoaXMgaW52aXNpYmx5IGNyZWF0ZWQgcHJvbWlzZSB3aWxsIHJlc29sdmUgdG9cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvb3Jkc0Zyb21BZGRyZXNzKGFkZHJlc3MpIHtcclxuICBjb25zdCB1cmxBZGRyZXNzID0gZW5jb2RlVVJJKGFkZHJlc3MpOyAvLyB0cmFuc2xhdGVkIGludG8gYSBVUkwtZnJpZW5kbHkgZW5jb2Rpbmc6IHdlIGdldCBhIFVSTC1mcmllbmRseSBzdHJpbmcgYmFja1xyXG4gIC8vIHdlIGNvdWxkIHVzZSBheGlvcyBoZXJlIG9yIHRoZW4oKSBhbmQgY2F0Y2goKSBhcyB3ZWxsXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2FkZHJlc3M9JHt1cmxBZGRyZXNzfSZrZXk9JHtHT09HTEVfQVBJX0tFWX1gXHJcbiAgKTtcclxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBjb29yZGluYXRlcy4gUGxlYXNlIHRyeSBhZ2FpbiEnKTtcclxuICB9XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgLy8gZXh0cmFjdHMgdGhlIHJlc3BvbnNlIGRhdGFcclxuICBpZiAoZGF0YS5lcnJvcl9tZXNzYWdlKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5lcnJvcl9tZXNzYWdlKTtcclxuICB9IC8vIGl0IGNvdWxkIGFsc28gZmFpbCB3aXRob3V0IHVzaW5nIGFuIGVycm9yIHN0YXR1cyBjb2RlLCBzbyB3aXRob3V0IG1ha2luZyBpdCB0byB0aGUgaWYgKCFyZXNwb25zZS5vaykge30gKGl0J3MgYSBHb29nbGUgc3BlY2lmaWMgdGhpbmcpXHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gZGF0YS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uO1xyXG4gIHJldHVybiBjb29yZGluYXRlcztcclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Utility/Location.js\n");

/***/ })

/******/ });