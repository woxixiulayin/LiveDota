import Huyaspider from "./spider/huyaspider.js";
import Pandaspider from "./spider/pandaspider.js";
import Quanminspider from "./spider/quanminspider.js";
import Zhanqispider from "./spider/zhanqispider.js";
import Douyuspider from "./spider/douyuspider.js";
import * as Spiders from "./spider/spiderindex";
import { jobs, DEBUG } from "./config.js";
import sitesMap from './config.js';
import { log } from "./utils/utils.js";
import _ from 'lodash';
import 'babel-polyfill'
import assert from 'assert';

let huya = new Huyaspider(),
    panda = new Pandaspider(),
    quanmin = new Quanminspider(),
    zhanqi = new Zhanqispider(),
    douyu = new Douyuspider();

let spiders = [panda, zhanqi, douyu, huya, quanmin];

export let runJobs = function (jobs, callback) {
    let promises = []
    Spiders.forEach((spider, index) => {
        //使用类名作为job的属性名，直接获取要爬取的url
        let spidername = spider.constructor.name,
            url = jobs[spidername];
        promises.push(spider.parseUrl(url));
    });
    return Promise.all(promises);
};

export let getUrlByParams = (site, category) => {
    return sitesMap[site] && sitesMap[site].gameUrls[category];
};

export let createSpiderByParams = (site, category) => {
    let Spider, spiderName;
    assert(sitesMap[site]);
    spiderName = sitesMap[site].spiderName;
    assert(spiderName);
    Spider = Spiders[spiderName]
    if(!Spider) {
        throw new Error(`createSpiderByParams failed by ${site} ${category}: get spider ${Spider}`);
    }
    return new Spider();
};

//return {website, lives:[]}
export let getLivesByParams = async (site, category) => {
    let url = getUrlByParams(site, category),
        spider = createSpiderByParams(site, category),
        lives = await spider.parseUrl(url);
    //重新定义每个live的类别
    await lives.lives.map(live => {
        live.category = category;
    });
    return lives;
};


//return {category, lives:[{website, lives:[]}]}
export var getAllLivesBycategory = async (category) => {
    let allLive = {};
    if (typeof category !== 'string') return;
    category = category.toLowerCase();
    allLive.category = category;
    allLive.lives = [];
    var lives = await Promise.all(_.keys(sitesMap).map(async site => {
        return await getLivesByParams(site, category);
    }));
    allLive.lives = lives;
    return allLive;
};

// 以下做测试
// runJobs(jobs, infos => {
//     log("done");
// })