import {Live, LiveDota} from '../model/models.js';
import {Spider} from './spider.js';

const $ = require("cheerio");

class Pandaspider extends Spider {
    constructor () {
        super();
    }

    //具体的爬取策略
    pickInfo (html) {
        let infos = [];
        let list = $("a.video-list-item-wrap", html);
        let category = $("div.main-header h3", html).text();
        let website = "熊猫TV";
        list.each((i, ele) => {
            let name = $(ele).find("span.video-nickname").text();
            let nums = $(ele).find("span.video-number").text();
            let title = $(ele).find("div.video-title").text();
            let img = $(ele).find("img.video-img").attr("data-original");
            let live = new Live(name, nums, title, category, img, website);
            console.log(live);
        })
    }
}

let panda = new Pandaspider();
panda.parseUrl('http://www.panda.tv/cate/dota2');