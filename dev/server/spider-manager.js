import * as Spiders from "./spider/spiderindex";
import sitesMap, { jobs, DEBUG, categories} from "./config.js";
import { log } from "./utils/utils.js";
import _ from 'lodash';
import 'babel-polyfill'
import assert from 'assert';

// let huya = new Huyaspider(),
//     panda = new Pandaspider(),
//     quanmin = new Quanminspider(),
//     zhanqi = new Zhanqispider(),
//     douyu = new Douyuspider();

// let spiders = [panda, zhanqi, douyu, huya, quanmin];

// export let runJobs = function (jobs, callback) {
//     let promises = []
//     Spiders.forEach((spider, index) => {
//         //使用类名作为job的属性名，直接获取要爬取的url
//         let spidername = spider.constructor.name,
//             url = jobs[spidername];
//         promises.push(spider.parseUrl(url));
//     });
//     return Promise.all(promises);
// };

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

//return lives:[]
export let getLivesByParams = async (site, category) => {
    let lives = [];
    let url = getUrlByParams(site, category),
        spider = createSpiderByParams(site, category);
    try {
        lives = await spider.parseUrl(url);
    } catch (e) {
        console.log(`getLivesByParams`);
        console.log(e.stack);
    }
    if (!lives || lives.length < 1) {
        console.log(`get no ${category} lvies from ${site} `);
        return [];
    }
    //重新定义每个live的类别
    await lives.map(live => {
        live.category = category;
    });
    return lives;
};


//return lives: []
export var getAllLivesBycategory = async (category) => {
    let lives,siteLives=[];
    if (categories.indexOf(category) === -1) {
        throw new Error(`no ${category} in categories`);
    };
    siteLives = await Promise.all(_.keys(sitesMap).map( site => {
        return getLivesByParams(site, category);
    }));
    if (!siteLives || siteLives.length < 1) return [];
    lives = siteLives.reduce((live, item) => {
        return live.concat(item);
    }, []);
    return lives;
};

// 以下做测试
// runJobs(jobs, infos => {
//     log("done");
// })