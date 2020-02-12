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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/avenir.css":
/*!******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/avenir.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/font//Avenir-Medium.woff2 */ \"./assets/font/Avenir-Medium.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../assets/font/Avenir-Medium.woff */ \"./assets/font/Avenir-Medium.woff\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../assets/font/Avenir-Medium.ttf */ \"./assets/font/Avenir-Medium.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../assets/font/Avenir-Roman.woff2 */ \"./assets/font/Avenir-Roman.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../assets/font/Avenir-Roman.woff */ \"./assets/font/Avenir-Roman.woff\");\nvar ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../assets/font/Avenir-Roman.ttf */ \"./assets/font/Avenir-Roman.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ../assets/font/Avenir-Heavy.woff2 */ \"./assets/font/Avenir-Heavy.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! ../assets/font/Avenir-Heavy.woff */ \"./assets/font/Avenir-Heavy.woff\");\nvar ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(/*! ../assets/font/Avenir-Heavy.ttf */ \"./assets/font/Avenir-Heavy.ttf\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);\n// Module\nexports.push([module.i, \"@font-face {\\r\\n    font-family: 'Avenir';\\r\\n    src: local('Avenir Medium'), local('Avenir-Medium'),\\r\\n        url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('woff2'),\\r\\n        url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('woff'),\\r\\n        url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('truetype');\\r\\n    font-weight: 500;\\r\\n    font-style: normal;\\r\\n    }\\r\\n    @font-face {\\r\\n        font-family: 'Avenir';\\r\\n        src: local('Avenir Roman'), local('Avenir-Roman'),\\r\\n            url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format('woff2'),\\r\\n            url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") format('woff'),\\r\\n            url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \") format('truetype');\\r\\n        font-weight: 400;\\r\\n        font-style: normal;\\r\\n      }\\r\\n      @font-face {\\r\\n        font-family: 'Avenir';\\r\\n        src: local('Avenir Heavy'), local('Avenir-Heavy'),\\r\\n            url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \") format('woff2'),\\r\\n            url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \") format('woff'),\\r\\n            url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \") format('truetype');\\r\\n        font-weight: 900;\\r\\n        font-style: normal;\\r\\n      }\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/avenir.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/reset.css":
/*!*****************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/reset.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"html, body, div, span, applet, object, iframe,\\r\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\r\\na, abbr, acronym, address, big, cite, code,\\r\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\r\\nsmall, strike, strong, sub, sup, tt, var,\\r\\nb, u, i, center,\\r\\ndl, dt, dd, ol, ul, li,\\r\\nfieldset, form, label, legend,\\r\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\r\\narticle, aside, canvas, details, embed, \\r\\nfigure, figcaption, footer, header, hgroup, \\r\\nmenu, nav, output, ruby, section, summary,\\r\\ntime, mark, audio, video {\\r\\n\\tmargin: 0;\\r\\n\\tpadding: 0;\\r\\n\\tborder: 0;\\r\\n\\tfont-size: 100%;\\r\\n\\tfont: inherit;\\r\\n\\tvertical-align: baseline;\\r\\n}\\r\\n/* HTML5 display-role reset for older browsers */\\r\\narticle, aside, details, figcaption, figure, \\r\\nfooter, header, hgroup, menu, nav, section {\\r\\n\\tdisplay: block;\\r\\n}\\r\\nbody {\\r\\n\\tline-height: 1;\\r\\n}\\r\\nol, ul {\\r\\n\\tlist-style: none;\\r\\n}\\r\\nblockquote, q {\\r\\n\\tquotes: none;\\r\\n}\\r\\nblockquote:before, blockquote:after,\\r\\nq:before, q:after {\\r\\n\\tcontent: '';\\r\\n\\tcontent: none;\\r\\n}\\r\\ntable {\\r\\n\\tborder-collapse: collapse;\\r\\n\\tborder-spacing: 0;\\r\\n}\\r\\na {\\r\\n\\ttext-decoration: none;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/reset.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/style.css":
/*!*****************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/reset.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./avenir.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/avenir.css\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/img/logo.svg */ \"./assets/img/logo.svg\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../assets/img/main-pic.jpg */ \"./assets/img/main-pic.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../assets/img/about-us-pic.jpg */ \"./assets/img/about-us-pic.jpg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\n// Module\nexports.push([module.i, \"@charset \\\"UTF-8\\\";\\r\\n\\r\\n\\r\\n:root {\\r\\n    --gradient: linear-gradient(90deg, #F27931 0%, #F27931 0.01%, #F2A135 110.55%);\\r\\n    --font: #2B3D5C;\\r\\n    --orange: #F27931;\\r\\n  }\\r\\n.orange{\\r\\n    color:  #F27931;\\r\\n}\\r\\nbody{\\r\\n    font-family: \\\"Avenir\\\" sans-serif;\\r\\n}\\r\\na{\\r\\n    color: var(--font);\\r\\n    /* margin: 9px 0 -15px 0; */\\r\\n    display: block;\\r\\n    font-weight: 800;\\r\\n    font-size: 14px;\\r\\n    line-height: 24px;\\r\\n}\\r\\nh2{\\r\\n    font-family: 'Avenir';\\r\\n    font-style: normal;\\r\\n    font-weight: bold;\\r\\n    font-size: 32px;\\r\\n    line-height: 44px;\\r\\n    text-align: center;\\r\\n    color: var(--font);  \\r\\n    margin-bottom: 40px;\\r\\n    font-weight: 500;\\r\\n}\\r\\nbutton{\\r\\n    font-family: \\\"Avenir\\\";\\r\\n    font-size: 14px;\\r\\n    /* width: 138px; */\\r\\n    height: 32px;\\r\\n    padding: 0 20px;\\r\\n    border-radius: 4px;\\r\\n    border: none;\\r\\n    color: white;\\r\\n    outline: none;\\r\\n    cursor: pointer;\\r\\n    background: var(--gradient);\\r\\n    font-weight: 500;\\r\\n\\r\\n}\\r\\n.container{\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    margin: auto;\\r\\n}\\r\\n.wr{\\r\\n    max-width: 1440px;\\r\\n    height: 100%;\\r\\n    padding: 60px;\\r\\n    margin: auto;\\r\\n}\\r\\n.header{\\r\\n    /* position: relative; */\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n}\\r\\n.header-logo{\\r\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat;\\r\\n    height: 25px;\\r\\n    width: 92px;\\r\\n    background-size: 74px;\\r\\n    /* position: absolute; */\\r\\n    left: 80px;\\r\\n    top: 26px;\\r\\n    display: inline-block;\\r\\n}\\r\\n.header-menu{\\r\\n    /* height: 84px; */\\r\\n    font-family: \\\"Avenir\\\";\\r\\n    font-size: 14px;\\r\\n    /* position: absolute; */\\r\\n    /* right: 40px; */\\r\\n    /* display: flex; */\\r\\n    /* align-items: center; */\\r\\n    float: right;\\r\\n    font-weight: 500;\\r\\n\\r\\n}\\r\\n.header-menu-items{\\r\\n    width: 340px;\\r\\n    margin-right: 40px;\\r\\n    display: flex;\\r\\n    list-style: none;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n.header-menu-item{\\r\\n    cursor: pointer;\\r\\n    position: relative;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.header-menu-item:focus-within{\\r\\n    font-weight: bold;\\r\\n}\\r\\n.header-menu-item:focus-within::before{\\r\\n    content: \\\"\\\";\\r\\n    display: block;\\r\\n    position: absolute;\\r\\n    bottom: 45px;\\r\\n    height: 4px;\\r\\n    width: 100%;\\r\\n    background: var(--gradient);\\r\\n}\\r\\n.header-title{\\r\\n    font-family: 'Avenir', serif;\\r\\n    font-size: 46px;\\r\\n    font-weight: bold;\\r\\n    color: var(--orange);\\r\\n    text-align: center;\\r\\n    font-weight: 500;\\r\\n\\r\\n}\\r\\n.header-main{\\r\\n    margin-top: 84px;\\r\\n    padding: 176px 0;\\r\\n    width: 100%;\\r\\n    background: rgba(43, 61, 92, 0.8) url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat;\\r\\n    background-blend-mode: overlay;\\r\\n    background-size: cover;\\r\\n    background-position: center;\\r\\n    max-height: 576px;\\r\\n\\r\\n}\\r\\n.header-description{\\r\\n    font-family: \\\"Avenir\\\";\\r\\n    font-style: normal;\\r\\n    font-weight: 500;\\r\\n    font-size: 24px;\\r\\n    line-height: 32px;\\r\\n    margin: 50px 0;\\r\\n    text-align: center;\\r\\n    color: #FFFFFF;\\r\\n    font-weight: 500;\\r\\n\\r\\n}\\r\\n#calc-button{\\r\\n    margin: 0 auto;\\r\\n    display: flex;\\r\\n}\\r\\n.about-us{\\r\\n    padding: 120px 0;\\r\\n}\\r\\n.key-items{\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-around;\\r\\n    flex-wrap: wrap;\\r\\n    margin-bottom: 120px;\\r\\n    \\r\\n}\\r\\n.key-item{\\r\\n    padding: 35px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n\\r\\n}\\r\\n.key-item-heading{\\r\\n    margin-top: 30px;\\r\\n    margin-bottom: 10px;\\r\\n    font-family: \\\"Avenir\\\";\\r\\n    font-style: normal;\\r\\n    font-weight: 800;\\r\\n    font-size: 24px;\\r\\n    line-height: 32px;\\r\\n    color: var(--font);\\r\\n    font-weight: 800;\\r\\n\\r\\n}\\r\\n.key-item-text{\\r\\n    font-family: \\\"Avenir\\\";\\r\\n    line-height: 21px;\\r\\n    font-style: normal;\\r\\n    font-weight: 500;\\r\\n    font-size: 16px;\\r\\n    text-align: center;\\r\\n    color: #58657D;\\r\\n    max-width: 230px;\\r\\n}\\r\\n.about-us-wr{\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    flex-wrap: wrap-reverse;\\r\\n}\\r\\n.about-us-image{\\r\\n    /* display: inline-block; */\\r\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") no-repeat;\\r\\n    background-size:  cover;\\r\\n    min-width: 400px;\\r\\n    height: 100%;\\r\\n    width: 50%;\\r\\n    min-height: 316px;\\r\\n    border-radius: 8px;\\r\\n}\\r\\n.about-us-main{\\r\\n    width: 50%;\\r\\n    min-width: 300px;\\r\\n    box-sizing: border-box;\\r\\n    padding-left: 40px;\\r\\n}\\r\\n.about-us-main p {\\r\\n    font-family: \\\"Avenir\\\";\\r\\n    color: var(--font);\\r\\n    line-height: 23px;\\r\\n}\\r\\n.about-us-heading{\\r\\n    font-family: \\\"Avenir\\\";\\r\\n    font-style: normal;\\r\\n    font-weight: 500;\\r\\n    font-size: 24px;\\r\\n    line-height: 32px;\\r\\n    letter-spacing: -1px;\\r\\n    margin-bottom: 20px;\\r\\n    color: var(--font);\\r\\n}\\r\\n.calculator{\\r\\n    padding: 40px;\\r\\n    height: 800px;\\r\\n    background: #F8FCFE;\\r\\n}\\r\\n.calc-form{\\r\\n    font-family: \\\"Avenir\\\";\\r\\n    width: 740px;\\r\\n    padding: 40px;\\r\\n    background: white;  \\r\\n    font-weight: 500;\\r\\n\\r\\n}\\r\\n.calc-item-heading{\\r\\n    font-size: 24px;\\r\\n    color: var(--orange);\\r\\n}\\r\\n.service-wr{\\r\\n    font-family: \\\"Avenir\\\";\\r\\n    max-width: 632px;\\r\\n    min-height: 304px;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    margin: auto;\\r\\n    box-sizing: border-box;\\r\\n    margin-bottom: 60px;\\r\\n}\\r\\n.table{\\r\\n\\r\\n    width:50%;\\r\\n    box-sizing: border-box;\\r\\n    display: inline-block\\r\\n}\\r\\n.table-heading{\\r\\n    background: #041E30;\\r\\n    height: 64px;\\r\\n    padding: 0px 32px;\\r\\n    font-size: 16px;\\r\\n    line-height: 64px;\\r\\n    color: white;\\r\\n}\\r\\n.table-item{\\r\\n    list-style-type: disc; \\r\\n    padding: 0 28px;\\r\\n    list-style-position: inside;\\r\\n    height: 48px;\\r\\n    color: var(--orange);\\r\\n    line-height: 48px;\\r\\n    font-size: 28px;\\r\\n    border: 1px solid #E6E8EA;\\r\\n    border-bottom: none;\\r\\n    \\r\\n}\\r\\n.table-item:last-child{\\r\\n    border-bottom: 1px solid #E6E8EA;\\r\\n}\\r\\n.table-text{\\r\\n\\r\\nfont-size: 14px;\\r\\n\\r\\ncolor: var(--font);\\r\\n\\r\\n/* margin-top: 23px; */\\r\\n\\r\\nposition: relative;\\r\\n\\r\\ntop: -3px;\\r\\n\\r\\nleft: -14px;\\r\\n}\\r\\n.table-right>li{\\r\\n    border-left:none;\\r\\n\\r\\n}\\r\\n.table-right{\\r\\n    float: right;\\r\\n\\r\\n}\\r\\n.table-right>li:nth-child(n+4){\\r\\n    list-style: none;\\r\\n}\\r\\n.office{\\r\\n    background: rgba(79, 170, 233, 0.04);\\r\\n    height: 700px;\\r\\n}\\r\\n.reviews{\\r\\n    height: 600px;\\r\\n}\\r\\n.contact-form{\\r\\n    width: 50%;\\r\\n    min-width: 400px;\\r\\n    display: inline-block;\\r\\n}\\r\\n.contact-form-heading{\\r\\n    font-family: \\\"Avenir\\\";\\r\\n    font-weight: 600;\\r\\n    font-size: 24px;\\r\\n    color: var(--font);\\r\\n    margin-bottom: 16px;\\r\\n}\\r\\n.contact-form-input{\\r\\n    width: 100%;\\r\\n    height: 40px;\\r\\n    line-height: 40px;\\r\\n    border: 1px solid #E6E8EA;\\r\\n    box-sizing: border-box;\\r\\n    border-radius: 2px;\\r\\n    margin-bottom: 32px;\\r\\n    padding: 15px;\\r\\n}\\r\\n.contact-form-input-longer{\\r\\n    min-height: 120px;\\r\\n    padding: 0 15px 78px 15px;\\r\\n}\\r\\n.contact-form-input::placeholder{\\r\\n    font-size: 14px;\\r\\n    color: #58657D;\\r\\n    vertical-align: top;\\r\\n\\r\\n\\r\\n}\\r\\n.contact-form-button{\\r\\n    display: flex;\\r\\n    margin: 0 auto;\\r\\n    margin-top: -20px;\\r\\n}\\r\\n/* плавное изменение прозрачности  placeholder-а при фокусе */\\r\\n.contact-form-input::-webkit-input-placeholder       {opacity: 1; transition: opacity 0.3s ease;}\\r\\n.contact-form-input::-moz-placeholder                {opacity: 1; transition: opacity 0.3s ease;}\\r\\n.contact-form-input:-moz-placeholder                 {opacity: 1; transition: opacity 0.3s ease;}\\r\\n.contact-form-input:-ms-input-placeholder            {opacity: 1; transition: opacity 0.3s ease;}\\r\\n.contact-form-input:focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.3s ease;}\\r\\n.contact-form-input:focus::-moz-placeholder          {opacity: 0; transition: opacity 0.3s ease;}\\r\\n.contact-form-input:focus:-moz-placeholder           {opacity: 0; transition: opacity 0.3s ease;}\\r\\n.contact-form-input:focus:-ms-input-placeholder      {opacity: 0; transition: opacity 0.3s ease;}\\r\\n.contacts-all-wr{\\r\\n    display: flex;\\r\\n    /* flex-wrap: wrap; */\\r\\n    justify-content: baseline;\\r\\n    align-items: flex-end;\\r\\n}\\r\\n.contact-wr{\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    flex-direction: row;\\r\\n    justify-content: center;\\r\\n    flex-wrap: wrap;\\r\\n    \\r\\n}\\r\\n.contact-cards-wr{\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    flex-direction: row;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n.contact-card{\\r\\n    font-family: \\\"Avenir\\\";\\r\\n    width: 308px;\\r\\n    height: 156px;\\r\\n    background:  #F6FBFE;\\r\\n    margin: 10px;\\r\\n    text-align: center;\\r\\n    color: var(--font);\\r\\n    /* padding: 137px 0 0px 0; */\\r\\n}\\r\\n.contact-city{\\r\\n    font-size: 16px;\\r\\n    line-height: 24px;\\r\\n    margin-top: 64px;\\r\\n    font-weight: 800;\\r\\n    font-size: 16px;\\r\\n    line-height: 24px;\\r\\n}\\r\\n.contact-phone{\\r\\n    color: var(--font);\\r\\n    margin: 9px 0 -15px 0;\\r\\n    display: block;\\r\\n    font-weight: normal;\\r\\n    font-size: 14px;\\r\\n    line-height: 16px;\\r\\n}\\r\\n.contact-name{\\r\\n    font-weight: 500;\\r\\n    font-size: 12px;\\r\\n    line-height: 16px;\\r\\n    display: block;\\r\\n    color: #58657D;\\r\\n}\\r\\nfooter{\\r\\n    font-family: 'Avenir';\\r\\n    background: #041E30;\\r\\n}\\r\\n.footer-line{\\r\\n    background: #6D7C87;\\r\\n    height: 1px;\\r\\n    width: 100%;\\r\\n    margin: 20px 0;\\r\\n}\\r\\n.footer-logo{\\r\\n    filter: brightness(9);\\r\\n}\\r\\n.footer-nav{\\r\\n    display: inline-block;\\r\\n\\r\\n}\\r\\n.footer-nav-item{\\r\\n    float: right;\\r\\n    margin-right: 20px;\\r\\n}\\r\\n.footer-bottom{\\r\\n    height: 24px;\\r\\n}\\r\\n.footer-link{\\r\\n\\r\\n    font-weight: 500;\\r\\n    font-size: 14px;\\r\\n    line-height: 24px;\\r\\n    color: #FFFFFF;\\r\\n}\\r\\n.footer-link:hover{\\r\\n    color: var(--orange);\\r\\n}\\r\\n.footer-rights{\\r\\n    float: right;\\r\\n    font-size: 14px;\\r\\n    line-height: 24px;\\r\\n    color: #FFFFFF;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./assets/font/Avenir-Heavy.ttf":
/*!**************************************!*\
  !*** ./assets/font/Avenir-Heavy.ttf ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a166744b3d247ffa9d927353878a813f.ttf\");\n\n//# sourceURL=webpack:///./assets/font/Avenir-Heavy.ttf?");

/***/ }),

/***/ "./assets/font/Avenir-Heavy.woff":
/*!***************************************!*\
  !*** ./assets/font/Avenir-Heavy.woff ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"94a57b63ca8f95804870bde5b506ca61.woff\");\n\n//# sourceURL=webpack:///./assets/font/Avenir-Heavy.woff?");

/***/ }),

/***/ "./assets/font/Avenir-Heavy.woff2":
/*!****************************************!*\
  !*** ./assets/font/Avenir-Heavy.woff2 ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"aea0197d4d716b4379e3415d23f21e36.woff2\");\n\n//# sourceURL=webpack:///./assets/font/Avenir-Heavy.woff2?");

/***/ }),

/***/ "./assets/font/Avenir-Medium.ttf":
/*!***************************************!*\
  !*** ./assets/font/Avenir-Medium.ttf ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"96223a075bbd22d7eb69b80ec341174b.ttf\");\n\n//# sourceURL=webpack:///./assets/font/Avenir-Medium.ttf?");

/***/ }),

/***/ "./assets/font/Avenir-Medium.woff":
/*!****************************************!*\
  !*** ./assets/font/Avenir-Medium.woff ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"77d901f5e09d585301d44bf637e38599.woff\");\n\n//# sourceURL=webpack:///./assets/font/Avenir-Medium.woff?");

/***/ }),

/***/ "./assets/font/Avenir-Medium.woff2":
/*!*****************************************!*\
  !*** ./assets/font/Avenir-Medium.woff2 ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"28002881c2a48251d88272e269b2ced1.woff2\");\n\n//# sourceURL=webpack:///./assets/font/Avenir-Medium.woff2?");

/***/ }),

/***/ "./assets/font/Avenir-Roman.ttf":
/*!**************************************!*\
  !*** ./assets/font/Avenir-Roman.ttf ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d7a0df991f3fd34b25c240d712b002eb.ttf\");\n\n//# sourceURL=webpack:///./assets/font/Avenir-Roman.ttf?");

/***/ }),

/***/ "./assets/font/Avenir-Roman.woff":
/*!***************************************!*\
  !*** ./assets/font/Avenir-Roman.woff ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"78a48a3743efa2a86b1210e601805ddd.woff\");\n\n//# sourceURL=webpack:///./assets/font/Avenir-Roman.woff?");

/***/ }),

/***/ "./assets/font/Avenir-Roman.woff2":
/*!****************************************!*\
  !*** ./assets/font/Avenir-Roman.woff2 ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"016811bb3afa36714c1b368d94b5729e.woff2\");\n\n//# sourceURL=webpack:///./assets/font/Avenir-Roman.woff2?");

/***/ }),

/***/ "./assets/img/about-us-pic.jpg":
/*!*************************************!*\
  !*** ./assets/img/about-us-pic.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"60c32fb42bdcbe190329b468a556fdc2.jpg\");\n\n//# sourceURL=webpack:///./assets/img/about-us-pic.jpg?");

/***/ }),

/***/ "./assets/img/logo.svg":
/*!*****************************!*\
  !*** ./assets/img/logo.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fdfb962b548bef44b6e5e6046a676f65.svg\");\n\n//# sourceURL=webpack:///./assets/img/logo.svg?");

/***/ }),

/***/ "./assets/img/main-pic.jpg":
/*!*********************************!*\
  !*** ./assets/img/main-pic.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"074a00c0d02a86b9a55922431498a40c.jpg\");\n\n//# sourceURL=webpack:///./assets/img/main-pic.jpg?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./styles/style.css?");

/***/ })

/******/ });