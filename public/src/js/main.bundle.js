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

	"use strict";

	var componets = __webpack_require__(2);
	var datahandler = __webpack_require__(3);

	var pageWidth = window.innerWidth;
	var pageHeight = window.innerHeight;

	$(function () {
	    var $aside_rank = $("aside.rank"),
	        $ul_rank = $aside_rank.find("ul");

	    $.get('/search', function (data) {
	        var websites = data.map(function (item, i, array) {
	            return item['website'];
	        }),
	            $websites = componets.$_weblist(websites);
	        console.log(data);

	        //添加左侧网址列表
	        $("div.livewebs").append($websites);
	        //添加中间直播页面
	        data[1].lives.forEach(function (item, i) {
	            var $live = componets.$_live(item);
	            $("ul.ul-live-list").append($live);
	        });
	        //添加右侧排行榜
	        var rankInfo = datahandler.getRankinfo(data);
	        rankInfo.forEach(function (live, i) {
	            var $li_rank = componets.$li_rank(live);
	            $ul_rank.append($li_rank);
	        });
	    }, 'json');

	    //规划页面布局
	    (function () {
	        $aside_rank.css("left", pageWidth - 270 + "px");
	    })();
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

	var $li_rank = function $li_rank(live) {
	    var html = "\n        <li class=\"rank-item\">\n                <a class=\"rank-link\" href=" + live.link + " target=\"_blank\">\n                <div class=\"rank-person\">\n                    <span class=\"rank-name\">" + live.name + "</span>\n                    <span class=\"rank-nums\">" + live.nums + "</span>\n                </div>\n                <div class=\"rank-title\">" + live.title + "</div>\n                <div class=\"rank-website\">" + live.website + "</div>\n                </div>\n                </a>\n            </li>\n    ";
	    return $(html);
	};

	module.exports = {
	    $_weblist: $_weblist,
	    $_live: $_live,
	    $li_rank: $li_rank
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	var rankNumber = 10;
	var getRankinfo = function getRankinfo(liveinfos) {
	    var lives = [],
	        orderedlives = [];

	    //取出所有直播信息拼成大数组
	    liveinfos.forEach(function (item, i) {
	        lives = lives.concat(item.lives);
	    });
	    console.log(lives);

	    orderedlives = lives.sort(function (pre, after) {
	        return after.nums - pre.nums;
	    });
	    return orderedlives.slice(0, rankNumber);
	};

	module.exports = {
	    getRankinfo: getRankinfo
	};

/***/ }
/******/ ]);