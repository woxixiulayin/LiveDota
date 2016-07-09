import {Live, LiveDota} from '../model/models.js';
import {Spider} from './spider.js';
import {log} from '../utils/utils.js';

const $ = require("cheerio");

class Huyaspider extends Spider {
    constructor () {
        super();
    }

    //具体的爬取策略
    pickInfo (html) {
        let infos = [];
        let parse = $.load(html);
        let list = parse("li.video-list-item");
        let category = parse("div.box-hd h3").text();
        let website = "虎牙";
        list.each((i, ele) => {
            let name = $(ele).find("i.nick").text();
            let nums = $(ele).find("i.js-num").text();
            let title = $(ele).find("div.all_live_tit a").text();
            let img = $(ele).find("img.pic").attr("src");
            let live = new Live(name, nums, title, category, img, website);
            infos.push(live);
            // log(live);
        })
        return infos;
    }
}

//以下做测试
// let huya = new Huyaspider();
// let url = 'http://www.huya.com/g/6';
// huya.parseUrl(url);

export {Huyaspider};