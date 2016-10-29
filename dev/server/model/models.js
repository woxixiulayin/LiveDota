//直播信息实例
// category:"魔兽 DOTA1"
// img:"http://screenshot.dwstatic.com/yysnapshot/c86e624a58f03e087a3d4235967bed865b44e0cf?imageview/4/0/w/280/h/158/blur/1"
// link:"http://www.huya.com/guai"
// name:"乖"
// nums:"23655"
// title:"单排模式！"
// website:"虎牙"

import {liveModel} from '../db/schema';

//直播信息
export class Live{
    constructor (name, nums, title, link, category, img, website) {
        this.name = name || '';
        this.nums = nums || '';
        this.title = title || '';
        this.link = link || '';
        this.category = category || '';
        this.img = img || '';
        this.website = website || '';
        this._live = new liveModel({name, nums, title, link, category, img, website});
    }

    async save () {
        await this._live.save();
    }
}

export class Liveinfos {
    constructor (website, lives) {
        this.website = website;
        this.lives = lives;
    }
}