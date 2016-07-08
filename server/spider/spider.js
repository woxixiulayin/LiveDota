const superagent = require('superagent');

let url = "http://www.quanmin.tv/game/dota2";

class Spider {
    constructor () {
        this.htmls = {};
        this.liveinfos = {};
    }

    pickInfo (html) {
        //在子类设置具体的爬去策略
        this.liveinfos[url] = '';
    }

    //callback回调处理结果
    parseUrl(url, callback) {
        let that = this;
         superagent.get(url)
            .end( (err, res) => {
                if (err || !res.ok) {
                    console.log(err);
                } else {
                    let html = res.text;
                    //使用url作为下标存储html和对应的liveinfo
                    that.htmls[url] = html;
                    that.pickInfo(url);
                    if ( callback) 
                        callback.call(that);
                    console.log("finish picking info from " + url);
                }
            });
    }

}


