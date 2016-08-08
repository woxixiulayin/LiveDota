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

	var pageWidth = window.screen.width;
	// var pageHeight = window.innerHeight;
	// console.log(pageWidth);
	$(function () {
	    var $aside_rank = $("aside.rank"),
	        $ul_rank = $aside_rank.find("ul"),
	        $ul_live = $("ul.ul-live-list");

	    //live ul居中
	    var liveul_margin = (pageWidth - 500 - Math.floor((pageWidth - 500) / 290) * 290) / 2 - 10 + "px";
	    console.log(liveul_margin);
	    $ul_live.css("margin-left", liveul_margin);

	    //直播信息填充函数
	    var fullfillLives = function fullfillLives(lives) {
	        $ul_live.empty();
	        lives.forEach(function (item, i) {
	            datahandler.parseLive(item);
	            var $live = componets.$li_live(item);
	            $ul_live.append($live);
	        });
	    };

	    //显示页面内容
	    var show = function (data) {
	        var websites = data.map(function (item, i, array) {
	            return item['website'];
	        }),
	            $websites = componets.$ul_weblist(websites),


	        //从未经处理的live信息获得rank数据
	        rankInfo = datahandler.getRankinfo(data);
	        // console.log(data)

	        //更新左侧网址列表
	        $(".left-wrap").empty().append($websites).append(componets.$btn_refresh());

	        //点击直播网站事件
	        $(".left-wrap").click(function (e) {
	            if (e.target.tagName === "A") {
	                $(this).find("li").removeClass("checked");
	                $(e.target).parent("li").addClass("checked");

	                //显示中间直播list
	                for (var i = 0, len = data.length; i < len; i++) {
	                    if (data[i].website === $(e.target).text()) {
	                        fullfillLives(data[i].lives);
	                    }
	                }
	            } else if (e.target.tagName === "BUTTON") {
	                //Ajax获取数据
	                $.get('/search', show, 'json');
	                $(e.target).blur();
	            }
	        });

	        //显示默认直播网站lives
	        $websites.find("a:first").click();

	        //添加右侧排行榜
	        $ul_rank.empty();
	        rankInfo.forEach(function (live, i) {
	            var $li_rank = componets.$li_rank(live);
	            $ul_rank.append($li_rank);
	        });
	    }.bind(this);

	    //Ajax获取数据
	    $.get('/search', show, 'json');
	}.bind(undefined));

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	var $ul_weblist = function $ul_weblist(websites) {
	    if (!websites instanceof Array) return false;
	    var $ul = $("<ul></ul>");
	    $ul.addClass("websites");
	    websites.forEach(function (ele, i) {
	        var $li = $("<li><a href=\"#\">" + ele + "</a></li>");
	        $li.addClass("website-item");
	        $ul.append($li);
	    });
	    return $ul;
	};

	var $btn_refresh = function $btn_refresh() {
	    return $("<button></button>").addClass("btn-refresh");
	};

	var $li_live = function $li_live(live) {
	    var html = "\n        <li class=\"live-item left\">\n        <a class=\"li-a\" href=" + live.link + " target=\"_blank\">\n                <img class=\"live-img\" src=\"" + live.img + "\">\n                <div class=\"live-info\">\n                <div class=\"live-title\">" + live.title + "</div>\n                <div class=\"live-name-nums\">\n                <span class=\"live-name left\">" + live.name + "</span>\n                <span class=\"live-nums right\">" + live.nums + "</span>\n                </div>\n                </div>\n            <div class=\"mask\"></div>\n            </a>\n        </li>";
	    return $(html);
	};

	var $li_rank = function $li_rank(live) {
	    var html = "\n        <li class=\"rank-item\">\n                <a class=\"rank-link\" href=" + live.link + " target=\"_blank\">\n                <div class=\"rank-person\">\n                    <span class=\"rank-name\">" + live.name + "</span>\n                    <span class=\"rank-nums\">" + live.nums + "</span>\n                </div>\n                <div class=\"rank-title\">" + live.title + "</div>\n                <div class=\"rank-website\">" + live.website + "</div>\n                </div>\n                </a>\n            </li>\n    ";
	    return $(html);
	};

	module.exports = {
	    $ul_weblist: $ul_weblist,
	    $btn_refresh: $btn_refresh,
	    $li_live: $li_live,
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
	    orderedlives = orderedlives.slice(0, rankNumber);
	    orderedlives.forEach(function (live) {
	        parseLive(live);
	    });

	    return orderedlives;
	};

	var parseLive = function parseLive(live) {
	    var nums = live.nums;
	    live.nums = nums > 10000 ? (nums / 10000).toFixed(1) + "万" : nums;
	};

	module.exports = {
	    getRankinfo: getRankinfo,
	    parseLive: parseLive
	};

/***/ }
/******/ ]);