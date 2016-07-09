import {Live, LiveDota} from '../model/models.js';
import {Spider} from './spider.js';
import {log} from '../utils/utils.js';

const $ = require("cheerio");

class Pandaspider extends Spider {
    constructor () {
        super();
    }

    //具体的爬取策略
    pickInfo (html) {
        let infos = [];
        let parse = $.load(html);
        let list = parse("a.video-list-item-wrap");
        let category = parse("div.main-header h3").text();
        let website = "熊猫";
        list.each((i, ele) => {
            let name = $(ele).find("span.video-nickname").text();
            let nums = $(ele).find("span.video-number").text();
            let title = $(ele).find("div.video-title").text();
            let img = $(ele).find("img.video-img").attr("data-original");
            let live = new Live(name, nums, title, category, img, website);
            infos.push(live);
            // log(live);
        })
        return infos;
    }
}

//以下做测试
// let panda = new Pandaspider();
// let url = 'http://www.panda.tv/cate/dota2';
// panda.parseUrl(url);

export {Pandaspider};