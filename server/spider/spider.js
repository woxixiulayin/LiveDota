import {log} from '../utils/utils.js';
const superagent = require('superagent');

export class Spider {
    constructor () {
        this.htmls = {};
        this.liveinfos = {};
    }

    //子类需要复写该方法制定具体的爬取策略
    pickInfo (html) {
        this.liveinfos[url] = [];
    }

    parseUrl(url) {
        let that = this;
         superagent.get(url)
            .end( (err, res) => {
                if (err || !res.ok) {
                    console.log(err);
                } else {
                    let html = res.text;
                    //使用url作为下标存储html和对应的liveinfo
                    that.htmls[url] = html;
                    that.pickInfo(html);
                    //后续处理info信息，返回一个promise
                    that.parseInfo(url);
                    log("finish picking info from " + url);
                }
            });
    }

    //返回promise为了方便写回调（这里主要是存储数据）
    parseInfo (url) {
        let that = this;
        let promise = new Promise( (res, rej) => {
            if (that.liveinfos[url] instanceof Array && that.liveinfos[url].length !== 0) {
                resolve(that.liveinfos[url]);
            } else {
                throw "no info in " + url;
            }
        })

        //加then完成链式编写后续方法
        return promise;
    }
}

// export {Spider};

