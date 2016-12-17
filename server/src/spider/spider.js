import {log} from '../utils/utils.js';
const superagent = require('superagent');

export default class Spider {
    constructor () {
        this.htmls = {};
        this.liveinfos = {};
    }

    //子类需要复写该方法制定具体的爬取策略
    pickInfo (html) {
        let liveinfos = {};
        /**
            将获取的结果存入infos中
        **/
        return liveinfos;
    }

    transWan (nums) {
    if (typeof nums === 'number') return nums;
    let indexWan = String(nums).indexOf("万");
    return indexWan != -1 ? nums.substr(0, indexWan) * 10000 : +nums;
    }
    parseUrl(url) {
        let that = this;
        return new Promise( (resolve, reject) => {
            superagent.get(url)
            .end( (err, res) => {
                if (err || !res.ok) {
                    console.log(err);
                    reject(err);
                } else {
                    let html = res.text;
                    let lives = that.pickInfo(html);
                    resolve(lives);
                }
            });
        });
    }
}


