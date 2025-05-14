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

/***/ "./src/JS/AudioController.js":
/*!***********************************!*\
  !*** ./src/JS/AudioController.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AudioController: () => (/* binding */ AudioController)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar AudioController = /*#__PURE__*/function () {\n  function AudioController() {\n    _classCallCheck(this, AudioController);\n    this.bgMusic = new Audio('../Audio/dogWalk.mp3');\n    this.flipSound = new Audio('../Audio/flip.mp3');\n    this.matchSound = new Audio('../Audio/match.mp3');\n    this.wrongSound = new Audio('../Audio/wrong.mp3');\n    this.victorySound = new Audio('../Audio/victory.mp3');\n    this.gameOverSound = new Audio('../Audio/gameOver.mp3');\n    this.bgMusic.volume = 0.5;\n    this.bgMusic.loop = true;\n  }\n  return _createClass(AudioController, [{\n    key: \"startMusic\",\n    value: function startMusic() {\n      this.bgMusic.play();\n    }\n  }, {\n    key: \"stopMusic\",\n    value: function stopMusic() {\n      this.bgMusic.pause();\n      this.bgMusic.currentTime = 0; //restart from the start\n    }\n  }, {\n    key: \"flip\",\n    value: function flip() {\n      this.flipSound.play();\n    }\n  }, {\n    key: \"match\",\n    value: function match() {\n      this.matchSound.play();\n    }\n  }, {\n    key: \"wrong\",\n    value: function wrong() {\n      this.wrongSound.play();\n    }\n  }, {\n    key: \"victory\",\n    value: function victory() {\n      this.stopMusic(); //stop bg music\n      this.victorySound.play();\n    }\n  }, {\n    key: \"gameOver\",\n    value: function gameOver() {\n      this.stopMusic();\n      this.gameOverSound.play();\n    }\n  }]);\n}();\n\n//# sourceURL=webpack://whereismydog/./src/JS/AudioController.js?");

/***/ }),

/***/ "./src/JS/CardGenerate.js":
/*!********************************!*\
  !*** ./src/JS/CardGenerate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cardGenerator: () => (/* binding */ cardGenerator)\n/* harmony export */ });\n/* harmony import */ var _getCardData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCardData */ \"./src/JS/getCardData.js\");\n\nvar section = document.querySelector('section');\n\n//Generate html\nvar cardGenerator = function cardGenerator() {\n  //Shuffle cards\n  var cardData = (0,_getCardData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  cardData.sort(function () {\n    return Math.random() - 0.5;\n  });\n  cardData.forEach(function (item) {\n    // Create elements\n    var card = document.createElement('div');\n    var cardBack = document.createElement('div');\n    var cardBackImg = document.createElement('img');\n    var cardFront = document.createElement('div');\n    var cardFrontImg = document.createElement('img');\n\n    //Add class\n    card.classList.add('card');\n    cardBack.classList.add('card-back', 'card-face');\n    cardBackImg.classList.add('card-backImg');\n    cardFront.classList.add('card-front', 'card-face');\n    cardFrontImg.classList.add('card-value');\n\n    //Add card img src and alt\n    cardBackImg.src = '../Images/cardBack.png';\n    cardBackImg.setAttribute('alt', 'backImg-pawBox');\n    cardFrontImg.src = item.imgSrc;\n    cardFrontImg.setAttribute('alt', item.name);\n\n    //Add elements\n    section.appendChild(card);\n    card.appendChild(cardBack);\n    cardBack.appendChild(cardBackImg);\n    card.appendChild(cardFront);\n    cardFront.appendChild(cardFrontImg);\n\n    // Created html inside of Section\n    // <div class='card'>\n    // \t<div class='card-back card-face'>\n    // \t\t<img class='card-backImg' />\n    // \t</div>\n    // \t<div class='card-front card-face'>\n    // \t\t<img class='card-value' alt='' />\n    // \t</div>\n    // </div>;\n  });\n};\n\n//# sourceURL=webpack://whereismydog/./src/JS/CardGenerate.js?");

/***/ }),

/***/ "./src/JS/GameController.js":
/*!**********************************!*\
  !*** ./src/JS/GameController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameController: () => (/* binding */ GameController)\n/* harmony export */ });\n/* harmony import */ var _AudioController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudioController.js */ \"./src/JS/AudioController.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar GameController = /*#__PURE__*/function () {\n  function GameController(totalTime, cards) {\n    _classCallCheck(this, GameController);\n    this.cardsArray = cards;\n    this.totalTime = totalTime;\n    this.timeRemaining = totalTime; //countdown time\n    this.timer = document.getElementById('time-remaining');\n    this.playerLiveCount = document.getElementById('playerLiveCount');\n    this.audioController = new _AudioController_js__WEBPACK_IMPORTED_MODULE_0__.AudioController();\n  }\n  return _createClass(GameController, [{\n    key: \"startGame\",\n    value: function startGame() {\n      var _this = this;\n      this.clickedCard = null;\n      this.timeRemaining = this.totalTime;\n      this.playerLives = 10;\n      this.matchedCards = [];\n      this.busy = true;\n\n      //For control game to delay\n      setTimeout(function () {\n        _this.audioController.startMusic();\n        _this.countDown = _this.startCountDown();\n        _this.busy = false;\n      }, 500);\n\n      // Reset game\n      this.hideCards();\n      this.timer.innerText = this.timeRemaining;\n      this.playerLiveCount.innerText = this.playerLives;\n    }\n\n    //To reset cards\n  }, {\n    key: \"hideCards\",\n    value: function hideCards() {\n      this.cardsArray.forEach(function (card) {\n        card.classList.remove('visible');\n        card.classList.remove('matched');\n      });\n    }\n\n    //1.Not busy, animation happening\n    // 2.Not matched cards\n    // 3.Not already flipped card\n  }, {\n    key: \"canFlipCard\",\n    value: function canFlipCard(card) {\n      return !this.busy && !this.matchedCards.includes(card) && card !== this.clickedCard;\n    }\n  }, {\n    key: \"flipCard\",\n    value: function flipCard(card) {\n      if (this.canFlipCard(card)) {\n        this.audioController.flip();\n        card.classList.add('visible');\n\n        //Match or not\n        if (this.clickedCard) {\n          this.checkForCardMatch(card);\n        } else {\n          this.clickedCard = card;\n        }\n      }\n    }\n\n    // Get img src attribute\n  }, {\n    key: \"getCardType\",\n    value: function getCardType(card) {\n      return card.getElementsByClassName('card-value')[0].src;\n    }\n\n    // Check flipped card match or not\n  }, {\n    key: \"checkForCardMatch\",\n    value: function checkForCardMatch(card) {\n      if (this.getCardType(card) === this.getCardType(this.clickedCard)) {\n        this.cardMatch(card, this.clickedCard);\n      } else {\n        this.cardMismatch(card, this.clickedCard);\n      }\n      this.clickedCard = null;\n    }\n  }, {\n    key: \"cardMatch\",\n    value: function cardMatch(card1, card2) {\n      var _this2 = this;\n      this.matchedCards.push(card1);\n      this.matchedCards.push(card2);\n      setTimeout(function () {\n        card1.classList.add('matched');\n        card2.classList.add('matched');\n        _this2.audioController.match();\n      }, 300);\n      setTimeout(function () {\n        if (_this2.matchedCards.length === _this2.cardsArray.length) {\n          _this2.victory();\n        }\n      }, 1000);\n    }\n  }, {\n    key: \"cardMismatch\",\n    value: function cardMismatch(card1, card2) {\n      var _this3 = this;\n      this.busy = true;\n      // Give time to remember flipped cards\n      setTimeout(function () {\n        card1.classList.remove('visible');\n        card2.classList.remove('visible');\n        _this3.playerLives--;\n        _this3.playerLiveCount.innerText = _this3.playerLives;\n        _this3.audioController.wrong();\n      }, 800);\n      setTimeout(function () {\n        if (_this3.playerLives === 0) {\n          _this3.gameOver();\n        }\n        _this3.busy = false;\n      }, 1500);\n    }\n  }, {\n    key: \"startCountDown\",\n    value: function startCountDown() {\n      var _this4 = this;\n      return setInterval(function () {\n        _this4.timeRemaining--;\n        _this4.timer.innerText = _this4.timeRemaining;\n        if (_this4.timeRemaining === 0) {\n          _this4.gameOver();\n        }\n      }, 1000);\n    }\n  }, {\n    key: \"victory\",\n    value: function victory() {\n      clearInterval(this.countDown);\n      this.audioController.victory();\n      document.getElementById('victory-text').classList.add('visible');\n    }\n  }, {\n    key: \"gameOver\",\n    value: function gameOver() {\n      clearInterval(this.countDown);\n      this.audioController.gameOver();\n      document.getElementById('game-over-text').classList.add('visible');\n    }\n  }]);\n}();\n\n//# sourceURL=webpack://whereismydog/./src/JS/GameController.js?");

/***/ }),

/***/ "./src/JS/gameReady.js":
/*!*****************************!*\
  !*** ./src/JS/gameReady.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CardGenerate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardGenerate.js */ \"./src/JS/CardGenerate.js\");\n/* harmony import */ var _GameController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameController.js */ \"./src/JS/GameController.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles.css */ \"./src/styles/styles.css\");\n\n\n\nfunction GameReady() {\n  (0,_CardGenerate_js__WEBPACK_IMPORTED_MODULE_0__.cardGenerator)();\n  var overlays = Array.from(document.getElementsByClassName('overlay-text'));\n  var cards = Array.from(document.getElementsByClassName('card'));\n  // Pass totalTime and shuffle cards\n  var gameStart = new _GameController_js__WEBPACK_IMPORTED_MODULE_1__.GameController(60, cards);\n\n  // Start game\n  overlays.forEach(function (overlay) {\n    overlay.addEventListener('click', function () {\n      overlay.classList.remove('visible');\n      gameStart.startGame();\n    });\n  });\n\n  // Flip sound\n  cards.forEach(function (card) {\n    card.addEventListener('click', function () {\n      gameStart.flipCard(card);\n    });\n  });\n}\nif (document.readyState == 'loading') {\n  document.addEventListener('DOMContentLoaded', GameReady);\n} else {\n  GameReady();\n}\n\n//# sourceURL=webpack://whereismydog/./src/JS/gameReady.js?");

/***/ }),

/***/ "./src/JS/getCardData.js":
/*!*******************************!*\
  !*** ./src/JS/getCardData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar getCardData = function getCardData() {\n  return [{\n    imgSrc: '../Images/dog-collar.png',\n    name: 'collar'\n  }, {\n    imgSrc: '../Images/dog-collar.png',\n    name: 'collar'\n  }, {\n    imgSrc: '../Images/dog-food.png',\n    name: 'dogFood'\n  }, {\n    imgSrc: '../Images/dog-food.png',\n    name: 'dogFood'\n  }, {\n    imgSrc: '../Images/dog-head.png',\n    name: 'dogHead'\n  }, {\n    imgSrc: '../Images/dog-head.png',\n    name: 'dogHead'\n  }, {\n    imgSrc: '../Images/dog.png',\n    name: 'dogNormal'\n  }, {\n    imgSrc: '../Images/dog.png',\n    name: 'dogNormal'\n  }, {\n    imgSrc: '../Images/dogSit.png',\n    name: 'dogSit'\n  }, {\n    imgSrc: '../Images/dogSit.png',\n    name: 'dogSit'\n  }, {\n    imgSrc: '../Images/dogTongue.png',\n    name: 'dogTongue'\n  }, {\n    imgSrc: '../Images/dogTongue.png',\n    name: 'dogTongue'\n  }, {\n    imgSrc: '../Images/dog-colorful.png',\n    name: 'dogColorful'\n  }, {\n    imgSrc: '../Images/dog-colorful.png',\n    name: 'dogColorful'\n  }, {\n    imgSrc: '../Images/hot-dog.png',\n    name: 'hotDog'\n  }, {\n    imgSrc: '../Images/hot-dog.png',\n    name: 'hotDog'\n  }];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCardData);\n\n//# sourceURL=webpack://whereismydog/./src/JS/getCardData.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://whereismydog/./src/styles/styles.css?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/JS/gameReady.js");
/******/ 	
/******/ })()
;