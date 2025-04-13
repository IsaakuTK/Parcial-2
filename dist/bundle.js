/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/button/button.css":
/*!******************************************!*\
  !*** ./src/components/button/button.css ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* From Uiverse.io by augustin_4687 */ \\r\\n.button {\\r\\n    --stone-50: #fafaf9;\\r\\n    --stone-800: #292524;\\r\\n    --yellow-400: #facc15;\\r\\n  \\r\\n    font-family: \\\"Rubik\\\", sans-serif;\\r\\n    cursor: pointer;\\r\\n    position: relative;\\r\\n    display: inline-flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    font-weight: bold;\\r\\n    line-height: 1;\\r\\n    font-size: 1rem;\\r\\n    border-radius: 1rem;\\r\\n    outline: 2px solid transparent;\\r\\n    outline-offset: 6px;\\r\\n    color: var(--stone-50);\\r\\n  \\r\\n    &:active {\\r\\n      outline-color: var(--yellow-400);\\r\\n    }\\r\\n  \\r\\n    &:focus-visible {\\r\\n      outline-color: var(--yellow-400);\\r\\n      outline-style: dashed;\\r\\n    }\\r\\n  \\r\\n    &::before {\\r\\n      content: \\\"\\\";\\r\\n      position: absolute;\\r\\n      z-index: 0;\\r\\n      height: 200%;\\r\\n      max-height: 100px;\\r\\n      aspect-ratio: 1;\\r\\n      margin: auto;\\r\\n      background: white;\\r\\n      clip-path: polygon(\\r\\n        100% 50%,\\r\\n        91.48% 56.57%,\\r\\n        97.55% 65.45%,\\r\\n        87.42% 69.07%,\\r\\n        90.45% 79.39%,\\r\\n        79.7% 79.7%,\\r\\n        79.39% 90.45%,\\r\\n        69.07% 87.42%,\\r\\n        65.45% 97.55%,\\r\\n        56.57% 91.48%,\\r\\n        50% 100%,\\r\\n        43.43% 91.48%,\\r\\n        34.55% 97.55%,\\r\\n        30.93% 87.42%,\\r\\n        20.61% 90.45%,\\r\\n        20.3% 79.7%,\\r\\n        9.55% 79.39%,\\r\\n        12.58% 69.07%,\\r\\n        2.45% 65.45%,\\r\\n        8.52% 56.57%,\\r\\n        0% 50%,\\r\\n        8.52% 43.43%,\\r\\n        2.45% 34.55%,\\r\\n        12.58% 30.93%,\\r\\n        9.55% 20.61%,\\r\\n        20.3% 20.3%,\\r\\n        20.61% 9.55%,\\r\\n        30.93% 12.58%,\\r\\n        34.55% 2.45%,\\r\\n        43.43% 8.52%,\\r\\n        50% 0%,\\r\\n        56.57% 8.52%,\\r\\n        65.45% 2.45%,\\r\\n        69.07% 12.58%,\\r\\n        79.39% 9.55%,\\r\\n        79.7% 20.3%,\\r\\n        90.45% 20.61%,\\r\\n        87.42% 30.93%,\\r\\n        97.55% 34.55%,\\r\\n        91.48% 43.43%\\r\\n      );\\r\\n  \\r\\n      animation: star-rotate 4s linear infinite;\\r\\n      opacity: 0.1;\\r\\n    }\\r\\n  \\r\\n    &:hover::before {\\r\\n      opacity: 1;\\r\\n    }\\r\\n  \\r\\n    & > div {\\r\\n      padding: 2px;\\r\\n      border-radius: 1rem;\\r\\n      background-color: var(--yellow-400);\\r\\n      transform: translate(-4px, -4px);\\r\\n      transition: all 150ms ease;\\r\\n      box-shadow:\\r\\n        0.5px 0.5px 0 0 var(--yellow-400),\\r\\n        1px 1px 0 0 var(--yellow-400),\\r\\n        1.5px 1.5px 0 0 var(--yellow-400),\\r\\n        2px 2px 0 0 var(--yellow-400),\\r\\n        2.5px 2.5px 0 0 var(--yellow-400),\\r\\n        3px 3px 0 0 var(--yellow-400),\\r\\n        0 0 0 2px var(--stone-800),\\r\\n        0.5px 0.5px 0 2px var(--stone-800),\\r\\n        1px 1px 0 2px var(--stone-800),\\r\\n        1.5px 1.5px 0 2px var(--stone-800),\\r\\n        2px 2px 0 2px var(--stone-800),\\r\\n        2.5px 2.5px 0 2px var(--stone-800),\\r\\n        3px 3px 0 2px var(--stone-800),\\r\\n        3.5px 3.5px 0 2px var(--stone-800),\\r\\n        4px 4px 0 2px var(--stone-800),\\r\\n        0 0 0 4px var(--stone-50),\\r\\n        0.5px 0.5px 0 4px var(--stone-50),\\r\\n        1px 1px 0 4px var(--stone-50),\\r\\n        1.5px 1.5px 0 4px var(--stone-50),\\r\\n        2px 2px 0 4px var(--stone-50),\\r\\n        2.5px 2.5px 0 4px var(--stone-50),\\r\\n        3px 3px 0 4px var(--stone-50),\\r\\n        3.5px 3.5px 0 4px var(--stone-50),\\r\\n        4px 4px 0 4px var(--stone-50);\\r\\n  \\r\\n      .button:hover & {\\r\\n        transform: translate(0, 0);\\r\\n        box-shadow:\\r\\n          0 0 0 0 var(--yellow-400),\\r\\n          0 0 0 0 var(--yellow-400),\\r\\n          0 0 0 0 var(--yellow-400),\\r\\n          0 0 0 0 var(--yellow-400),\\r\\n          0 0 0 0 var(--yellow-400),\\r\\n          0 0 0 0 var(--yellow-400),\\r\\n          0 0 0 2px var(--stone-800),\\r\\n          0 0 0 2px var(--stone-800),\\r\\n          0 0 0 2px var(--stone-800),\\r\\n          0 0 0 2px var(--stone-800),\\r\\n          0 0 0 2px var(--stone-800),\\r\\n          0 0 0 2px var(--stone-800),\\r\\n          0 0 0 2px var(--stone-800),\\r\\n          0 0 0 2px var(--stone-800),\\r\\n          0 0 0 2px var(--stone-800),\\r\\n          0 0 0 4px var(--stone-50),\\r\\n          0 0 0 4px var(--stone-50),\\r\\n          0 0 0 4px var(--stone-50),\\r\\n          0 0 0 4px var(--stone-50),\\r\\n          0 0 0 4px var(--stone-50),\\r\\n          0 0 0 4px var(--stone-50),\\r\\n          0 0 0 4px var(--stone-50),\\r\\n          0 0 0 4px var(--stone-50),\\r\\n          0 0 0 4px var(--stone-50);\\r\\n      }\\r\\n  \\r\\n      & > div {\\r\\n        position: relative;\\r\\n        pointer-events: none;\\r\\n        border-radius: calc(1rem - 2px);\\r\\n        background-color: var(--stone-800);\\r\\n  \\r\\n        &::before {\\r\\n          content: \\\"\\\";\\r\\n          position: absolute;\\r\\n          inset: 0;\\r\\n          border-radius: 1rem;\\r\\n          opacity: 0.1;\\r\\n          background-image: radial-gradient(\\r\\n              rgb(255 255 255 / 80%) 20%,\\r\\n              transparent 20%\\r\\n            ),\\r\\n            radial-gradient(rgb(255 255 255 / 100%) 20%, transparent 20%);\\r\\n          background-position:\\r\\n            0 0,\\r\\n            4px 4px;\\r\\n          background-size: 8px 8px;\\r\\n          mix-blend-mode: hard-light;\\r\\n          box-shadow: inset 0 0 0 1px var(--stone-800);\\r\\n          animation: dots 0.4s infinite linear;\\r\\n          transition: opacity 150ms ease;\\r\\n        }\\r\\n  \\r\\n        & > div {\\r\\n          position: relative;\\r\\n          display: flex;\\r\\n          align-items: center;\\r\\n          padding: 0.75rem 1.25rem;\\r\\n          gap: 0.25rem;\\r\\n          filter: drop-shadow(0 -1px 0 var(--stone-800));\\r\\n  \\r\\n          &:hover {\\r\\n            filter: drop-shadow(0 -1px 0 rgba(255, 255, 255, 0.1));\\r\\n          }\\r\\n  \\r\\n          &:active {\\r\\n            transform: translateY(2px);\\r\\n          }\\r\\n        }\\r\\n      }\\r\\n    }\\r\\n  }\\r\\n  \\r\\n  @keyframes star-rotate {\\r\\n    from {\\r\\n      transform: rotate(0deg);\\r\\n    }\\r\\n    to {\\r\\n      transform: rotate(360deg);\\r\\n    }\\r\\n  }\\r\\n  \\r\\n  @keyframes dots {\\r\\n    0% {\\r\\n      background-position:\\r\\n        0 0,\\r\\n        4px 4px;\\r\\n    }\\r\\n    100% {\\r\\n      background-position:\\r\\n        8px 0,\\r\\n        12px 4px;\\r\\n    }\\r\\n  }\\r\\n  \\r\\n  @media (prefers-color-scheme: dark) {\\r\\n    .button {\\r\\n      &:active,\\r\\n      &:focus-visible {\\r\\n        outline-color: var(--yellow-400);\\r\\n      }\\r\\n    }\\r\\n  }\\r\\n  \", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/button/button.css?");

/***/ }),

/***/ "./src/components/card/card.css":
/*!**************************************!*\
  !*** ./src/components/card/card.css ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* From Uiverse.io by joe-watson-sbf - Modificado para manejar texto largo */\\r\\n.flip-card {\\r\\n    background-color: transparent;\\r\\n    width: 190px;\\r\\n    height: 254px;\\r\\n    perspective: 1000px;\\r\\n    font-family: sans-serif;\\r\\n    overflow: hidden; /* Añadido para contener el contenido */\\r\\n}\\r\\n\\r\\n.title {\\r\\n    font-size: 1.5em;\\r\\n    font-weight: 900;\\r\\n    text-align: center;\\r\\n    margin: 0;\\r\\n    padding: 10px; /* Añadido espacio alrededor del título */\\r\\n}\\r\\n\\r\\n.flip-card-inner {\\r\\n    position: relative;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    text-align: center;\\r\\n    transition: transform 0.8s;\\r\\n    transform-style: preserve-3d;\\r\\n}\\r\\n\\r\\n.flip-card:hover .flip-card-inner {\\r\\n    transform: rotateY(180deg);\\r\\n}\\r\\n\\r\\n.flip-card-front, .flip-card-back {\\r\\n    box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);\\r\\n    position: absolute;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center; /* Centra horizontalmente */\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    -webkit-backface-visibility: hidden;\\r\\n    backface-visibility: hidden;\\r\\n    border: 1px solid white;\\r\\n    border-radius: 1rem;\\r\\n    padding: 15px; /* Añadido espacio interno */\\r\\n    box-sizing: border-box; /* Incluye padding en el tamaño total */\\r\\n    overflow: auto; /* Permite scroll si el contenido es muy largo */\\r\\n}\\r\\n\\r\\n.flip-card-front {\\r\\n    background: linear-gradient(120deg, black 60%, black 88%,\\r\\n       yellow 40%, #facc15 48%);\\r\\n    color: coral;\\r\\n}\\r\\n\\r\\n.flip-card-back {\\r\\n    background: #facc15;\\r\\n    color: white;\\r\\n    transform: rotateY(180deg);\\r\\n}\\r\\n\\r\\n/* Estilos para los párrafos dentro de las cards */\\r\\n.flip-card-front p, .flip-card-back p {\\r\\n    margin: 10px 0;\\r\\n    word-wrap: break-word; /* Rompe palabras largas */\\r\\n    overflow-wrap: break-word; /* Alternativa para navegadores modernos */\\r\\n    max-width: 100%; /* Limita el ancho al contenedor */\\r\\n    text-overflow: ellipsis; /* Añade puntos suspensivos si el texto es muy largo */\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/card/card.css?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":host {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    background-color: black;\\r\\n    min-height: 100vh; /* Para que ocupe toda la altura de la pantalla */\\r\\n    padding: 20px; /* Opcional: espacio alrededor del contenido */\\r\\n    gap: 20px;\\r\\n}\\r\\n\\r\\n.button-container{\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    border-radius: 3px;\\r\\n    margin-top: 10px;\\r\\n    gap: 20px;\\r\\n    width: 100%;\\r\\n    height:fit-content;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\n.cards-container{\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    margin-top: 30px;\\r\\n    padding-top:30px;\\r\\n    gap: 20px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://dca_scoffolding/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://dca_scoffolding/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/button/button.ts":
/*!*****************************************!*\
  !*** ./src/components/button/button.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributtesButton\": () => (/* binding */ AttributtesButton),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.css */ \"./src/components/button/button.css\");\n\nvar AttributtesButton;\n(function (AttributtesButton) {\n    AttributtesButton[\"name\"] = \"name\";\n})(AttributtesButton || (AttributtesButton = {}));\nclass Button extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    static get observedAttributes() {\n        const attrs = {\n            name: null,\n        };\n        return Object.keys(attrs);\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n                <button class=\"button\">\r\n                    <div>\r\n                        <div>\r\n                        <div>${this.name}</div>\r\n                        </div>\r\n                    </div>\r\n                </button>\r\n            `;\n            const css = this.ownerDocument.createElement(\"style\");\n            css.innerHTML = _button_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(css);\n        }\n    }\n}\ncustomElements.define(\"chis-button\", Button);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/button/button.ts?");

/***/ }),

/***/ "./src/components/card/card.ts":
/*!*************************************!*\
  !*** ./src/components/card/card.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attributtes\": () => (/* binding */ Attributtes),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.css */ \"./src/components/card/card.css\");\n\nvar Attributtes;\n(function (Attributtes) {\n    Attributtes[\"icon_url\"] = \"icon_url\";\n    Attributtes[\"idu\"] = \"idu\";\n    Attributtes[\"url\"] = \"url\";\n    Attributtes[\"value\"] = \"value\";\n})(Attributtes || (Attributtes = {}));\nclass Card extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    static get observedAttributes() {\n        const attrs = {\n            icon_url: null,\n            idu: null,\n            url: null,\n            value: null\n        };\n        return Object.keys(attrs);\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n                <div class=\"flip-card\">\r\n                    <div class=\"flip-card-inner\">\r\n                        <div class=\"flip-card-front\">\r\n                            <img class=\"title\" src=\"${this.icon_url}\">\r\n                            <p>${this.idu}</p>\r\n                        </div>\r\n                        <div class=\"flip-card-back\">\r\n                            <a href=\"${this.url}\" target=\"_blank\" class=\"title\">Ver en API</a>\r\n                            <p>${this.value}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            `;\n            const css = this.ownerDocument.createElement(\"style\");\n            css.innerHTML = _card_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(css);\n        }\n    }\n}\ncustomElements.define(\"chis-card\", Card);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/card/card.ts?");

/***/ }),

/***/ "./src/data.ts":
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cat\": () => (/* binding */ cat)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction cat() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const data = yield fetch('https://api.chucknorris.io/jokes/categories');\n            const jokes = yield data.json();\n            return jokes;\n        }\n        catch (error) {\n            console.log(error);\n        }\n    });\n}\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/data.ts?");

/***/ }),

/***/ "./src/data2.ts":
/*!**********************!*\
  !*** ./src/data2.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"jokes\": () => (/* binding */ jokes)\n/* harmony export */ });\n// export async function jokes(category: string) {\n//     try {\n//         const array = [];\n//         for (let index = 1; index <= 16; index++) {\n//             const data = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);\n//             const jokes = await data.json();\n//             array.push(jokes);\n//         };\n//         return array;\n//     } catch (error) {\n//         console.log(error);\n//     }\n// }\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction jokes(category) {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const jokesArray = [];\n            for (let i = 0; i < 5; i++) {\n                const response = yield fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);\n                const jokeData = yield response.json();\n                jokesArray.push(jokeData);\n            }\n            return jokesArray;\n        }\n        catch (error) {\n            console.error(\"Error fetching jokes:\", error);\n            return [];\n        }\n    });\n}\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/data2.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.ts\");\n/* harmony import */ var _data2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data2 */ \"./src/data2.ts\");\n/* harmony import */ var _components_card_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/card/card */ \"./src/components/card/card.ts\");\n/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/button/button */ \"./src/components/button/button.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.buttons = [];\n        this.attachShadow({ mode: \"open\" });\n        this.cardsContainer = document.createElement(\"section\");\n        this.cardsContainer.className = \"cards-container\";\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            // Cargar categorías y crear botones\n            const categories = yield (0,_data__WEBPACK_IMPORTED_MODULE_1__.cat)();\n            categories === null || categories === void 0 ? void 0 : categories.forEach((category) => {\n                const button = this.ownerDocument.createElement(\"chis-button\");\n                button.setAttribute(_components_button_button__WEBPACK_IMPORTED_MODULE_4__.AttributtesButton.name, category);\n                button.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {\n                    yield this.loadJokes(category);\n                }));\n                this.buttons.push(button);\n            });\n            this.render();\n        });\n    }\n    loadJokes(category) {\n        return __awaiter(this, void 0, void 0, function* () {\n            // Limpiar cartas existentes\n            this.cardsContainer.innerHTML = \"\";\n            // Obtener 5 nuevos chistes\n            const jokesData = yield (0,_data2__WEBPACK_IMPORTED_MODULE_2__.jokes)(category);\n            // Crear y agregar las nuevas cartas\n            jokesData === null || jokesData === void 0 ? void 0 : jokesData.forEach((joke) => {\n                const card = this.ownerDocument.createElement(\"chis-card\");\n                card.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_3__.Attributtes.icon_url, joke.icon_url);\n                card.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_3__.Attributtes.idu, joke.id);\n                card.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_3__.Attributtes.url, joke.url);\n                card.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_3__.Attributtes.value, joke.value);\n                this.cardsContainer.appendChild(card);\n            });\n        });\n    }\n    render() {\n        if (!this.shadowRoot)\n            return;\n        this.shadowRoot.innerHTML = '';\n        // Agregar estilos\n        const css = this.ownerDocument.createElement(\"style\");\n        css.innerHTML = _index_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        this.shadowRoot.appendChild(css);\n        // Crear contenedor de botones\n        const buttonContainer = document.createElement(\"div\");\n        buttonContainer.className = \"button-container\";\n        // Agregar botones\n        this.buttons.forEach(button => {\n            buttonContainer.appendChild(button);\n        });\n        // Agregar elementos al shadow DOM\n        this.shadowRoot.appendChild(buttonContainer);\n        this.shadowRoot.appendChild(this.cardsContainer);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;