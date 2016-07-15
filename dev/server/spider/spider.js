import {log} from '../utils/utils.js';
const superagent = require('superagent');

export class Spider {
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
                    let liveinfos = that.pickInfo(html);
                    //使用url作为下标存储html和对应的liveinfo
                    that.htmls[url] = html;
                    that.liveinfos[url] = liveinfos;
                    log(this.constructor.name + " finishs picking lives from " + url);
                    log("get " + liveinfos.lives.length + " lives!!")
                    //后续处理这个url下获取到的info信息
                    resolve(liveinfos);
                }
            });
        });
    }
}

export {Spider};

