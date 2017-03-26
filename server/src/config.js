import _ from 'lodash'
const DEBUG = true;

const jobs = {
    Pandaspider: "",
    Quanminspider: "http://www.quanmin.tv/json/categories/dota2/list.json",
    Huyaspider: "",
    Zhanqispider: "",
    Douyuspider: "https://www.douyu.com/directory/game/LOL"
}

export const sitesMap = {
    "全民": {
        "spiderName": "Quanminspider",
        "gameUrls": {
            "DOTA": "http://www.quanmin.tv/json/categories/dota2/list.json"
        }
    },
    "熊猫": {
        "spiderName": "Pandaspider",
        "gameUrls": {
            "DOTA": "http://www.panda.tv/cate/dota2"
        }
    },
    "战旗": {
        "spiderName": "Zhanqispider",
        "gameUrls": {
            "DOTA": "www.zhanqi.tv/games/dota2"
        }
    },
    "虎牙": {
        "spiderName": "Huyaspider",
        "gameUrls": {
            "DOTA": "http://www.huya.com/g/6"
        }
    },
    "斗鱼": {
        "spiderName": "Douyuspider",
        "gameUrls": {
            "DOTA": "https://www.douyu.com/directory/game/DOTA2"
        }
    }
}
export var outDateTime = 2 * 60 * 1000; // 单位毫秒
export var categories = ['DOTA', 'LOL', '炉石'];
export { DEBUG, jobs };
export var types = _.keys(sitesMap).concat(['rank', 'all']);
export var rankNum = 10;
