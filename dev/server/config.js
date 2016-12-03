import _ from 'lodash'
const DEBUG = true;

const jobs = {
    Pandaspider: "",
    Quanminspider: "http://www.quanmin.tv/json/categories/dota2/list.json",
    Huyaspider: "",
    Zhanqispider: "",
    Douyuspider: "https://www.douyu.com/directory/game/LOL"
}

const sitesMap = {
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
}
export var outDateTime = 2 * 60;
export var categories = ['dota', 'lol', 'hearthstone'];
export default sitesMap;
export { DEBUG, jobs };
export var types = _.keys(sitesMap).concat(['rank', 'all']);
export var rankNum = 10;
