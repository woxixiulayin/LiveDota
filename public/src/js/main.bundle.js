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

	$(function () {
	    var $aside_rank = $(".right-wrap"),
	        $ul_live = $(".ul-live-list"),
	        liveinfos = [],
	        checkNum = 0;

	    //live ul居中
	    var liveul_margin = (pageWidth - 500 - Math.floor((pageWidth - 500) / 290) * 290) / 2 - 10 + "px";
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

	    //页面显示主函数，参数data为后端返回的json数据
	    var show = function show(data) {
	        var websites = data.map(function (item, i, array) {
	            return item['website'];
	        }),

	        //创建左侧websites ul组件
	        $websites = componets.$ul_weblist(websites),

	        //从未经处理的live信息获得rank数据
	        rankInfo = datahandler.getRankinfo(data);

	        //更新左侧网址列表
	        $(".left-wrap ul").replaceWith($websites);

	        //显示默认直播网站lives
	        $(".left-wrap").find("a:eq(" + checkNum + ")").click();

	        //更新右侧排行榜
	        $(".right-wrap").find("ul").replaceWith(componets.$ul_rank(rankInfo));
	    };

	    var getNewData = function getNewData() {
	        $.get('/search', function (data) {
	            liveinfos = data;
	            show(liveinfos);
	        }, 'json');
	    };

	    //网址和刷新(重新获取数据)按钮的事件委托
	    $(".left-wrap").click(function (e) {
	        //更新显示内容
	        if (e.target.tagName === "A") {
	            $(this).find("li").removeClass("checked");
	            $(e.target).parent("li").addClass("checked");

	            liveinfos.forEach(function (info, i) {
	                if (info.website === $(e.target).text()) {
	                    checkNum = i;
	                    fullfillLives(info.lives);
	                }
	            });
	            //刷新动作
	        } else if (e.target.tagName === "BUTTON") {
	            $(e.target).blur();
	            if (this.disabled && this.disabled == true) {
	                return false;
	            }
	            //获取新数据,定义5秒内不能再刷新
	            getNewData();
	            this.disabled = true;
	            var that = this;
	            setTimeout(function () {
	                this.disabled = false;
	            }.bind(this), 5000);
	        }
	    });

	    //refresh获取数据click
	    getNewData();
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

	var $li_live = function $li_live(live) {
	    var html = "\n        <li class=\"live-item left\">\n        <a class=\"li-a\" href=" + live.link + " target=\"_blank\">\n                <img class=\"live-img\" src=\"" + live.img + "\">\n                <div class=\"live-info\">\n                <div class=\"live-title\">" + live.title + "</div>\n                <div class=\"live-name-nums\">\n                <span class=\"live-name left\">" + live.name + "</span>\n                <span class=\"live-nums right\">" + live.nums + "</span>\n                </div>\n                </div>\n            <div class=\"mask\"></div>\n            </a>\n        </li>";
	    return $(html);
	};

	var $ul_rank = function $ul_rank(lives) {
	    var $ul = $("<ul></ul>").addClass("live-rank");

	    lives.forEach(function (live, index) {
	        var html = "\n        <li class=\"rank-item-wrap\">\n                <a class=\"rank-link\" href=" + live.link + " target=\"_blank\">\n                <div class=\"rank-item\">\n                    <span class=\"rank-name\">" + live.name + "</span>\n                    <span class=\"rank-nums\">" + live.nums + "</span>\n                    <span class=\"rank-website\">" + live.website + "</span>\n                </div>\n                    <div class=\"img-div\">\n                        <div class=\"rank-i-img-wrap\">\n                            <img src=\"" + live.img + "\" class=\"rank-img\" display=\"none\">\n                        </div>\n                    </div>\n                </a>\n            </li>\n        ",
	            $li_rank = $(html).hover(function (e) {
	            $ul.find(".rank-i-img-wrap").stop().hide();
	            $(e.currentTarget).find(".rank-i-img-wrap").stop().fadeIn(500);
	        }, function (e) {
	            $ul.find(".rank-i-img-wrap").stop().hide();
	            $(e.currentTarget).find(".rank-i-img-wrap").stop().fadeOut(500);
	        });

	        $li_rank.find(".rank-i-img-wrap").hide();

	        $ul.append($li_rank);
	    });

	    return $ul;
	};

	module.exports = {
	    $ul_weblist: $ul_weblist,
	    $li_live: $li_live,
	    $ul_rank: $ul_rank
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