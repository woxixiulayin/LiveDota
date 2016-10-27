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
        "spider": 'quanmin',
        "gameUrls": {
            "dota": "http://www.quanmin.tv/json/categories/dota2/list.json"
        }
    },
    "熊猫": {
        "spider": 'panda',
        "gameUrls": {
            "dota": "http://www.panda.tv/cate/dota2"
        }
    },
    "战旗": {
        "spider": 'zhanqi',
        "gameUrls": {
            "dota": "www.zhanqi.tv/games/dota2"
        }
    },
    "斗鱼": {
        "spider": 'douyu',
        "gameUrls": {
            "dota": "https://www.douyu.com/directory/game/LOL"
        }
    },
    "虎牙": {
        "spider": 'huya',
        "gameUrls": {
            "dota": "http://www.huya.com/g/6"
        }
    }
}
export default sitesMap;
export { DEBUG, jobs };
