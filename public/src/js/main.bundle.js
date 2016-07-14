/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var componets = __webpack_require__(2);

	$(function () {
	    $.get('/search', function (data) {
	        var websites = data.map(function (item, i, array) {
	            return item['website'];
	        }),
	            $websites = componets.$_weblist(websites);
	        console.log(data);
	        $("div.livewebs").append($websites);
	        data[0].lives.forEach(function (item, i) {
	            var $live = componets.$_live(item);
	            $("ul.ul-live-list").append($live);
	        });
	    }, 'json');
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	var $_weblist = function $_weblist(websites) {
	    if (!websites instanceof Array) return false;
	    var $ul = $("<ul></ul>");

	    websites.forEach(function (ele, i) {
	        var $li = $("<li><a href=\"#\">" + ele + "</a></li>");
	        $ul.append($li);
	    });
	    return $ul;
	};

	var $_live = function $_live(live) {
	    var html = "\n        <li class=\"live-item left\">\n        <a class=\"li-a\" href=" + live.link + " target=\"_blank\">\n                <img class=\"live-img\" src=\"" + live.img + "\">\n                <div class=\"live-info\">\n                <div class=\"live-title\">" + live.title + "</div>\n                <div class=\"live-name-nums\">\n                <span class=\"live-name left\">" + live.name + "</span>\n                <span class=\"live-nums right\">" + live.nums + "</span>\n                </div>\n                </div>\n            <div class=\"mask\"></div>\n            </a>\n        </li>";
	    return $(html);
	};

	module.exports = {
	    $_weblist: $_weblist,
	    $_live: $_live
	};

/***/ }
/******/ ]);