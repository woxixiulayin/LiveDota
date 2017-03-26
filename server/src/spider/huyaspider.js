import {Live, Liveinfos} from '../model/models.js';
import Spider from './spider.js';
import {log} from '../utils/utils.js';

const $ = require("cheerio");

export default class Huyaspider extends Spider {
    constructor () {
        super();
    }

    //具体的爬取策略
    pickInfo (html) {
        console.log(html)
        let lives = [],
            list = parse("li.game-live-item"),
            category = parse("div.box-hd h2").text(),
            website = "虎牙";
        list.each((i, ele) => {
            let name = $(ele).find("i.nick").text(),
                nums = this.transWan($(ele).find("i.js-num").text()),
                title = $(ele).find("a.title").text(),
                link = $(ele).find("a").attr("href"),
                img = $(ele).find("span.imgbox>img").attr("src"),
                live = new Live({name, nums, title, link, category, img, website});
                lives.push(live);
        })
        return lives;
    }
}

//以下做测试
// let huya = new Huyaspider();
// let url = 'http://www.huya.com/g/6';
// huya.parseUrl(url);
