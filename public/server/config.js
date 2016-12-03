"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rankNum = exports.types = exports.jobs = exports.DEBUG = exports.categories = exports.outDateTime = exports.sitesMap = undefined;

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEBUG = true;

var jobs = {
    Pandaspider: "",
    Quanminspider: "http://www.quanmin.tv/json/categories/dota2/list.json",
    Huyaspider: "",
    Zhanqispider: "",
    Douyuspider: "https://www.douyu.com/directory/game/LOL"
};

var sitesMap = exports.sitesMap = {
    "全民": {
        "spiderName": "Quanminspider",
        "gameUrls": {
            "dota": "http://www.quanmin.tv/json/categories/dota2/list.json"
        }
    },
    "熊猫": {
        "spiderName": "Pandaspider",
        "gameUrls": {
            "dota": "http://www.panda.tv/cate/dota2"
        }
    },
    "战旗": {
        "spiderName": "Zhanqispider",
        "gameUrls": {
            "dota": "www.zhanqi.tv/games/dota2"
        }
    },
    "虎牙": {
        "spiderName": "Huyaspider",
        "gameUrls": {
            "dota": "http://www.huya.com/g/6"
        }
    },
    "斗鱼": {
        "spiderName": "Douyuspider",
        "gameUrls": {
            "dota": "https://www.douyu.com/directory/game/LOL"
        }
    }
};
var outDateTime = exports.outDateTime = 2 * 60;
var categories = exports.categories = ['dota', 'lol', 'hearthstone'];
exports.DEBUG = DEBUG;
exports.jobs = jobs;
var types = exports.types = _lodash2.default.keys(sitesMap).concat(['rank', 'all']);
var rankNum = exports.rankNum = 10;