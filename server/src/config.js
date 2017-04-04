import assert from 'assert'

const DEBUG = true;

const jobs = {
  Pandaspider: "",
  Quanminspider: "http://www.quanmin.tv/json/categories/dota2/list.json",
  Huyaspider: "",
  Zhanqispider: "",
  Douyuspider: "https://www.douyu.com/directory/game/LOL"
}

/**
 * 同一个网站的直播地址比较固定，不同游戏只是url中的标签不同，这里拼接字符串输出各游戏网址
 */
const urlFactory = {
  "全民": gamesLabel => `http://www.quanmin.tv/json/categories/${gamesLabel}/list.json`,
  "熊猫": gamesLabel => `http://www.panda.tv/cate/${gamesLabel}`,
  "战旗": gamesLabel => `http://www.zhanqi.tv/games/${gamesLabel}`,
  "虎牙": gamesLabel => `http://www.huya.com/g/${gamesLabel}`,
  "斗鱼": gamesLabel => `https://www.douyu.com/directory/game/${gamesLabel}`,
}

/**
 * 根据标签生成网址信息
 * @param {*} site 
 * @param {*} spiderName 
 * @param {*} labelMap 
 */
const gameUrlMapFactory = (site, labelMap) => {
  assert(typeof urlFactory[site] === 'function', '${site} urlFactory not found')
  return Object.keys(labelMap).reduce((gameUrlMap, label) => {
    gameUrlMap[label] = urlFactory[site](labelMap[label])
    return gameUrlMap
  }, {})
}

const labelMaps = {
  "全民": {
    "DOTA": 'war3',
    "DOTA2": 'dota2',
    "LOL": 'lol',
    "炉石": 'heartstone',
    "王者荣耀": 'wangzhe',
    "守望先锋": 'overwatch',
    "狼人杀": 'tiantianlangrensha',
    "魔兽世界": 'blizzard',
    "颜值": 'showing'
  },
  "熊猫": {
    "DOTA": "war3",
    "DOTA2": "dota2",
    "LOL": "lol",
    "炉石": "hearthstone",
    "王者荣耀": "kingglory",
    "守望先锋": "overwatch",
    "狼人杀": 'langrensha',
    "魔兽世界": 'wow',
    '颜值': 'yzdr'
  },
  "战旗": {
    "DOTA": "war3",
    "DOTA2": "dota2",
    "LOL": "lol",
    "炉石": "how",
    "王者荣耀": "wangzherongyao",
    "守望先锋": 'watch',
    "狼人杀": 'langrensha',
    "魔兽世界": 'wow',
    "颜值": 'xindong'
  },
  "虎牙": {
    "DOTA": "6",
    "DOTA2": "7",
    "LOL": "lol",
    "炉石": "393",
    "王者荣耀": "2336",
    "守望先锋": '2174',
    "狼人杀": '2785',
    "魔兽世界": 'wow',
    '颜值': '1663'
  },
  "斗鱼": {
    "DOTA": "mszb",
    "DOTA2": "dota2",
    "LOL": "lol",
    "炉石": "how",
    "王者荣耀": "wzry",
    "守望先锋": 'Overwatch',
    "狼人杀": 'werewolf',
    "魔兽世界": 'wow',
    "颜值": 'yz'
  }
}

function getGameUrls (site) {
  return gameUrlMapFactory(site, labelMaps[site])
}

export const sitesMap = {
  "全民": {
    spiderName: "Quanminspider",
    gameUrls: getGameUrls("全民")
  },
  "熊猫": {
    spiderName: "Pandaspider",
    gameUrls: getGameUrls("熊猫")
  },
  "战旗": {
    spiderName: "Zhanqispider",
    gameUrls: getGameUrls("战旗")
  },
  "虎牙": {
    spiderName: "Huyaspider",
    gameUrls: getGameUrls("虎牙")
  },
  "斗鱼": {
    "spiderName": "Douyuspider",
    gameUrls: getGameUrls("斗鱼") 
  }
}

export var outDateTime = 2 * 60 * 1000; // 单位毫秒
export var categories = ['DOTA', 'DOTA2', 'LOL', '颜值', '炉石', '王者荣耀', '守望先锋', '狼人杀', '魔兽世界'];
export {
  DEBUG,
  jobs
};
export var types = Object.keys(sitesMap).concat(['rank', 'all']);
export var rankNum = 15;