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

/***/ "./src/commission-DOM.js":
/*!*******************************!*\
  !*** ./src/commission-DOM.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadCommissionsDOM\": () => (/* binding */ loadCommissionsDOM),\n/* harmony export */   \"removeCommissions\": () => (/* binding */ removeCommissions),\n/* harmony export */   \"createCommissionsDOM\": () => (/* binding */ createCommissionsDOM)\n/* harmony export */ });\n\r\nfunction loadCommissionsDOM(quest){ //calls createCommissionsDOM to load all commissions in quest to DOM \r\n    const comms = quest.commissions; \r\n    comms.forEach(comm => {\r\n        createCommissionsDOM(comm, quest); \r\n    })\r\n}\r\n\r\nconst commUl = document.getElementById('commissions-ul'); \r\nconst addCommButton = document.getElementById('add-commissions-button'); \r\n\r\nfunction createCommissionsDOM(commission, quest){ //creates commission in DOM, adds event listener to img \r\n    const commli = document.createElement('li'); \r\n    commli.classList.add('commissions-item'); \r\n    const commDiv = document.createElement('div'); \r\n    commDiv.classList.add('commissions-item-left'); \r\n\r\n    const commImg = document.createElement('img'); \r\n    commImg.classList.add('commission-img'); \r\n    commImg.src = './assets/Icon-Commission.png'; \r\n    checkOffCommissionButton(commImg); \r\n\r\n    const infoDiv = document.createElement('div');\r\n    infoDiv.classList.add('comm-info-div'); \r\n    const commTitle = document.createElement('h3'); \r\n    commTitle.classList.add('commissions-title'); \r\n    commTitle.textContent = commission.name; \r\n\r\n    const questTag = document.createElement('h4'); \r\n    questTag.classList.add('commission-quest-tag'); \r\n    questTag.textContent = quest.name; \r\n\r\n    //add subtag with quest \r\n    //can use this to find quest when deleting comms from daily\r\n    \r\n    commDiv.appendChild(commImg); \r\n    infoDiv.appendChild(commTitle); \r\n    infoDiv.appendChild(questTag); \r\n    commDiv.appendChild(infoDiv); \r\n\r\n    commli.appendChild(commDiv); \r\n    commUl.insertBefore(commli, addCommButton);  \r\n}\r\n//Check off Commission \r\nfunction checkOffCommissionButton(icon) {\r\n    icon.addEventListener('click', (e) => {\r\n       // console.log('in event listener')\r\n        const infoDiv = icon.nextElementSibling; \r\n        //console.log(infoDiv); \r\n        const titleDiv = infoDiv.querySelector('.commissions-title'); \r\n        const commName = titleDiv.textContent; \r\n        const questDiv = infoDiv.querySelector('.commission-quest-tag'); \r\n        const questName = questDiv.textContent; \r\n       // console.log(`${commName} ${questName}`);\r\n       // console.log(_quests); \r\n        //const commQuest = _quests.find(quest => quest.name == questName); \r\n        const commQuest = JSON.parse(localStorage.getItem(`${questName}`)); \r\n       // console.log(commQuest); \r\n        const arr = commQuest.commissions; \r\n        const index = arr.findIndex(i => i.name === commName); \r\n        arr.splice(index, 1); \r\n\r\n        //console.log(\"index: \" + index);\r\n        const li = e.target.closest('.commissions-item'); \r\n        li.remove(); \r\n\r\n        //local storage remove comm from quest \r\n        localStorage.setItem(`${commQuest.name}`, JSON.stringify(commQuest));\r\n    }); \r\n}\r\n\r\nfunction removeCommissions(){ //from dom \r\n    const commissionsLi = document.querySelectorAll('.commissions-item'); \r\n    commissionsLi.forEach(commission => commission.remove()); \r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://game-todo/./src/commission-DOM.js?");

/***/ }),

/***/ "./src/daily-commissions-DOM.js":
/*!**************************************!*\
  !*** ./src/daily-commissions-DOM.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadDailyDOM\": () => (/* binding */ loadDailyDOM)\n/* harmony export */ });\n/* harmony import */ var _commission_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commission-DOM */ \"./src/commission-DOM.js\");\n//import {getQuest, removeCommissions} from './quest.js';\r\n\r\n\r\nfunction loadDailyDOM(){\r\n    (0,_commission_DOM__WEBPACK_IMPORTED_MODULE_0__.removeCommissions)(); \r\n    for (let i = 0; i < localStorage.length; i++){\r\n        //loadCommissionsDOM(_quests[i]); \r\n        (0,_commission_DOM__WEBPACK_IMPORTED_MODULE_0__.loadCommissionsDOM)(JSON.parse(localStorage.getItem(localStorage.key(i)))); \r\n    }\r\n}\r\n \n\n//# sourceURL=webpack://game-todo/./src/daily-commissions-DOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _quest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quest.js */ \"./src/quest.js\");\n\nconsole.log(localStorage.length); \nfor (let i = 0; i < localStorage.length; i++){\n    console.log(JSON.stringify(localStorage.getItem(localStorage.key(i)))); \n}\n\n_quest_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setStyles(); \n\n\n\n//# sourceURL=webpack://game-todo/./src/index.js?");

/***/ }),

/***/ "./src/quest-DOM.js":
/*!**************************!*\
  !*** ./src/quest-DOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addQuestToNav\": () => (/* binding */ addQuestToNav),\n/* harmony export */   \"loadQuest\": () => (/* binding */ loadQuest)\n/* harmony export */ });\n/* harmony import */ var _commission_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commission-DOM */ \"./src/commission-DOM.js\");\n/* harmony import */ var _quest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quest */ \"./src/quest.js\");\n\r\n \r\n\r\nfunction addQuestToNav(name, quest){\r\n    const navItems = document.getElementById('nav-items'); \r\n\r\n    const newQuest = document.createElement('li'); \r\n    newQuest.classList.add('quest-item'); \r\n    const newQuestLink = document.createElement('a'); \r\n    newQuestLink.classList.add('quest-item-a'); \r\n    newQuestLink.textContent = name; \r\n    newQuestLink.addEventListener('click', () => {\r\n        loadQuest(quest); \r\n        _quest__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changeCurrentQuest(quest);  \r\n    })\r\n    newQuest.appendChild(newQuestLink); \r\n    navItems.appendChild(newQuest); \r\n}\r\n\r\nfunction loadQuest(quest){ //in dom \r\n    (0,_commission_DOM__WEBPACK_IMPORTED_MODULE_0__.removeCommissions)(); \r\n    if (quest.commissions.length !== 0) (0,_commission_DOM__WEBPACK_IMPORTED_MODULE_0__.loadCommissionsDOM)(quest); \r\n}\r\n\r\n\n\n//# sourceURL=webpack://game-todo/./src/quest-DOM.js?");

/***/ }),

/***/ "./src/quest.js":
/*!**********************!*\
  !*** ./src/quest.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commission_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commission-DOM */ \"./src/commission-DOM.js\");\n/* harmony import */ var _daily_commissions_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./daily-commissions-DOM */ \"./src/daily-commissions-DOM.js\");\n/* harmony import */ var _quest_DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quest-DOM */ \"./src/quest-DOM.js\");\n\n\n\n\nconst quests = (() => { \n    const addQuestBut = document.getElementById('add-quest-button'); \n    const navItems = document.getElementById('nav-items'); \n\n    //start of quests \n    let _quests = [\n        {\n           name: 'Daily Commissions', \n           commissions: []\n        }, \n    ]; \n    let _currentQuest = _quests[0];  \n\n    function getQuests() {\n        return _quests; \n    }\n    function getCurrentQuest() {\n        return _currentQuest; \n    }\n    function getQuest(index){\n        return _quests[index]; \n    }\n\n    function setStyles() {\n        if (localStorage.length == 0){\n            localStorage.setItem('Daily Commissions', JSON.stringify(_quests[0])); \n        } else {\n        //loop through all quests/commissions and load them on to page \n            for (let i = 1; i < localStorage.length; i++){\n                let questStor = localStorage.getItem(localStorage.key(i));\n                let quest = JSON.parse(questStor);  \n                console.log(quest.name);\n                (0,_quest_DOM__WEBPACK_IMPORTED_MODULE_2__.addQuestToNav)(quest.name, quest); \n            }\n            loadDailyCommissions(); \n        }\n    }\n\n    function changeCurrentQuest(quest){\n        for (const a of document.querySelectorAll('.quest-item-a')){\n            if (a.textContent.includes(_currentQuest.name)){\n                a.classList.remove('current-quest'); \n            } \n        };\n        _currentQuest = quest; \n        for (const a of document.querySelectorAll('.quest-item-a')){\n            if (a.textContent.includes(_currentQuest.name)){\n                a.classList.add('current-quest'); \n            } \n        };\n    }\n\n    addQuestBut.addEventListener('click', () => {\n        const input = document.createElement('input');\n        input.type = 'text'; \n        input.classList.add('input-textbox'); \n        navItems.appendChild(input); \n\n        const submitBut = document.createElement('button'); \n        submitBut.textContent = 'Add'; \n        submitBut.addEventListener('click', () => {\n            const name = input.value;\n            input.remove(); \n            submitBut.remove(); \n            \n            const newQuest = createQuest(name)\n            ;(0,_quest_DOM__WEBPACK_IMPORTED_MODULE_2__.addQuestToNav)(name, newQuest); \n        })\n        navItems.appendChild(submitBut); \n    }); \n\n    function createQuest(name) {\n        const newQuest = {\n            name: name, \n            commissions: []\n        }; \n        _quests.push(newQuest); \n        //local storage\n        /*new to edit: creating quest, editing quest, removing quest */\n        /* the name of the quest, then same name to edit on other function*/\n        localStorage.setItem(`${newQuest.name}`, JSON.stringify(newQuest)); \n        console.log('in createQuest. local storage: ' + localStorage); \n        return newQuest;  \n    }\n\n\n    //Commissions\n    const commUl = document.getElementById('commissions-ul'); \n    const addCommButton = document.getElementById('add-commissions-button'); \n\n    addCommButton.addEventListener('click', () => {\n        const inputDiv = document.createElement('div'); \n        inputDiv.classList.add('input-div'); \n\n        const input = document.createElement('input');\n        input.type = 'text'; \n        input.classList.add('input-textbox'); \n        inputDiv.appendChild(input); \n\n        const submitBut = document.createElement('button'); \n        submitBut.textContent = 'Add';\n        submitBut.addEventListener('click', () => {\n            const commName = input.value; \n            //input.remove(); \n            //submitBut.remove();\n            inputDiv.remove(); \n            let newComm = createCommission(commName, _currentQuest); \n            (0,_commission_DOM__WEBPACK_IMPORTED_MODULE_0__.createCommissionsDOM)(newComm, _currentQuest); \n        }) \n        inputDiv.appendChild(submitBut); \n        commUl.appendChild(inputDiv); \n    })\n    function createCommission(name, quest){ //adds commission to _quest\n        let comms = quest.commissions; \n        //console.log(comms); \n        const newComm = {name: name}; \n        //console.log(newComm); \n        comms.push(newComm); \n\n        //local storage: editing quests \n        localStorage.setItem(`${quest.name}`, JSON.stringify(quest)); \n        return newComm; \n    }\n\n    //Daily Commissions Tab \n    const dailyCommTab = document.getElementById('daily-commissions'); \n    dailyCommTab.addEventListener('click', () => {\n        loadDailyCommissions(); \n    }); \n    function loadDailyCommissions() { \n        changeCurrentQuest(_quests[0]); \n        (0,_daily_commissions_DOM__WEBPACK_IMPORTED_MODULE_1__.loadDailyDOM)(); \n    }\n\n    return{\n        createQuest,   \n        createCommission, \n        setStyles, \n        getCurrentQuest, \n        getQuests, \n        getQuest, \n        changeCurrentQuest\n    }\n    \n})(); \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (quests); \n\n//# sourceURL=webpack://game-todo/./src/quest.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;