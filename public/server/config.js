"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var DEBUG = true;

var jobs = {
    Pandaspider: "",
    Quanminspider: "http://www.quanmin.tv/json/categories/dota2/list.json",
    Huyaspider: "",
    Zhanqispider: "",
    Douyuspider: "https://www.douyu.com/directory/game/LOL"
};

var spiderMap = {
    "全民": {
        "dota": "http://www.quanmin.tv/json/categories/dota2/list.json"
    },
    "熊猫": {
        "dota": "http://www.panda.tv/cate/dota2"
    },
    "战旗": {
        "dota": "www.zhanqi.tv/games/dota2"
    },
    "斗鱼": {
        "dota": "https://www.douyu.com/directory/game/LOL"
    },
    "虎牙": {
        "dota": "http://www.huya.com/g/6"
    }
};
exports.DEBUG = DEBUG;
exports.jobs = jobs;