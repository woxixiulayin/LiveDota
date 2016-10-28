import Quanminspider from "./spider/quanminspider.js";
import Huyaspider from "./spider/huyaspider.js";
import Zhanqispider from "./spider/zhanqispider.js";
import Douyuspider from "./spider/douyuspider.js";
import Pandaspider from "./spider/pandaspider.js";

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
        "spider": Quanminspider,
        "gameUrls": {
            "dota": "http://www.quanmin.tv/json/categories/dota2/list.json"
        }
    },
    "熊猫": {
        "spider": Pandaspider,
        "gameUrls": {
            "dota": "http://www.panda.tv/cate/dota2"
        }
    },
    "战旗": {
        "spider": Zhanqispider,
        "gameUrls": {
            "dota": "www.zhanqi.tv/games/dota2"
        }
    },
    "斗鱼": {
        "spider": Douyuspider,
        "gameUrls": {
            "dota": "https://www.douyu.com/directory/game/LOL"
        }
    },
    "虎牙": {
        "spider": Huyaspider,
        "gameUrls": {
            "dota": "http://www.huya.com/g/6"
        }
    }
}
export default sitesMap;
export { DEBUG, jobs };
