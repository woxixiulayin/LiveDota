"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.jobs = exports.DEBUG = exports.categories = exports.outDateTime = undefined;

var _quanminspider = require("./spider/quanminspider.js");

var _quanminspider2 = _interopRequireDefault(_quanminspider);

var _huyaspider = require("./spider/huyaspider.js");

var _huyaspider2 = _interopRequireDefault(_huyaspider);

var _zhanqispider = require("./spider/zhanqispider.js");

var _zhanqispider2 = _interopRequireDefault(_zhanqispider);

var _douyuspider = require("./spider/douyuspider.js");

var _douyuspider2 = _interopRequireDefault(_douyuspider);

var _pandaspider = require("./spider/pandaspider.js");

var _pandaspider2 = _interopRequireDefault(_pandaspider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEBUG = true;

var jobs = {
    Pandaspider: "",
    Quanminspider: "http://www.quanmin.tv/json/categories/dota2/list.json",
    Huyaspider: "",
    Zhanqispider: "",
    Douyuspider: "https://www.douyu.com/directory/game/LOL"
};

var sitesMap = {
    "全民": {
        "spider": _quanminspider2.default,
        "gameUrls": {
            "dota": "http://www.quanmin.tv/json/categories/dota2/list.json"
        }
    },
    "熊猫": {
        "spider": _pandaspider2.default,
        "gameUrls": {
            "dota": "http://www.panda.tv/cate/dota2"
        }
    },
    "战旗": {
        "spider": _zhanqispider2.default,
        "gameUrls": {
            "dota": "www.zhanqi.tv/games/dota2"
        }
    },
    "虎牙": {
        "spider": _huyaspider2.default,
        "gameUrls": {
            "dota": "http://www.huya.com/g/6"
        }
    },
    "斗鱼": {
        "spider": _douyuspider2.default,
        "gameUrls": {
            "dota": "https://www.douyu.com/directory/game/LOL"
        }
    }
};
var outDateTime = exports.outDateTime = 2 * 60;
var categories = exports.categories = ['dota', 'lol', 'hearthstone'];
exports.default = sitesMap;
exports.DEBUG = DEBUG;
exports.jobs = jobs;