import Huyaspider from "./spider/huyaspider.js";
import Pandaspider from "./spider/pandaspider.js";
import Quanminspider from "./spider/quanminspider.js";
import Zhanqispider from "./spider/zhanqispider.js";
import Douyuspider from "./spider/douyuspider.js";
import {jobs, DEBUG} from "./config.js";
import sitesMap from './config.js';
import {log} from "./utils/utils.js";
import _ from 'lodash';


let spiderMap = new Map([
    ['huya', Huyaspider],
    ['quanmin', Quanminspider],
    ['douyu', Douyuspider],
    ['panda', Pandaspider],
    ['zhanqi', Zhanqispider],
]);

let huya = new Huyaspider(),
    panda = new Pandaspider(),
    quanmin = new Quanminspider(),
    zhanqi = new Zhanqispider(),
    douyu = new Douyuspider();

let spiders = [panda, zhanqi, douyu, huya, quanmin];

let runJobs = function (jobs, callback) {
    let promises = []
    spiders.forEach((spider, index) => {
        //使用类名作为job的属性名，直接获取要爬取的url
        let spidername = spider.constructor.name,
            url = jobs[spidername];
        promises.push(spider.parseUrl(url));
    });
    return Promise.all(promises);
};

function getUrlByParams (site, category) {
    return sitesMap[site] && sitesMap[site].gameUrls[category];
}

function createSpiderByParams (site) {
    let _spidername = sitesMap[site].spider || null;

    if (!sitesMap) {
        log(`no spider for ${site}`);
        return;
    }
    let _Spider = spiderMap.get(_spidername);
    return new _Spider();
}

function getLivesByParams (site, category) {

}

// 以下做测试
// runJobs(jobs, infos => {
//     log("done");
// })

export {getUrlByParams, runJobs, createSpiderByParams};