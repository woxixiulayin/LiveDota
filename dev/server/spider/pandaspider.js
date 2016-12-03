import {Live} from '../model/models.js';
import Spider from './spider.js';
import {log} from '../utils/utils.js';

const $ = require("cheerio");
const prelink = "http://www.panda.tv";

export default class Pandaspider extends Spider {
    constructor () {
        super();
    }

    //具体的爬取策略
    pickInfo (html) {
        let lives = [],
            parse = $.load(html),
            list = parse("a.video-list-item-wrap"),
            category = parse("div.main-header h3").text(),
            website = "熊猫";
        list.each((i, ele) => {
            let name = $(ele).find("span.video-nickname").text(),
                nums = +$(ele).find("span.video-number").text(),
                title = $(ele).find("div.video-title").text(),
                link = prelink + $(ele).attr("href"),
                img = $(ele).find("img.video-img").attr("data-original"),
                live = new Live({name, nums, title, link, category, img, website});
                lives.push(live);
            // log(live);
        })
        return lives;
    }
}

//以下做测试
// let panda = new Pandaspider();
// let url = 'http://www.panda.tv/cate/dota2';
// panda.parseUrl(url);