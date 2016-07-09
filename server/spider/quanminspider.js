import {Live, LiveDota} from '../model/models.js';
import {Spider} from './spider.js';
import {log} from '../utils/utils.js';

const $ = require("cheerio");
const prelink = "http://www.quanmin.tv/v/";

class Quanminspider extends Spider {
    constructor () {
        super();
    }

    //具体的爬取策略，全名TV页面是动态生成的，需要找到数据请求的url来获取json
    pickInfo (html) {
        let infos = [];
        //获取到的是json数据，直接转成对象进行处理
        let list = JSON.parse(html).data;
        [].forEach.call(list, (ele, i) => {
            let name = ele.nick,
                nums = ele.view,
                title = ele.title,
                link = prelink + ele.uid,
                img = ele.thumb,
                category = ele.category_name,
                website = "全民",
                live = new Live(name, nums, title, link, category, img, website);
            infos.push(live);
            // log(live);
        });
        return infos;
    }
}

//以下做测试
// let quanmin = new Quanminspider();
// let url = 'http://www.quanmin.tv/json/categories/dota2/list.json';
// quanmin.parseUrl(url);

export {Quanminspider};