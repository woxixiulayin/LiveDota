//直播信息实例
// category:"魔兽 DOTA1"
// img:"http://screenshot.dwstatic.com/yysnapshot/c86e624a58f03e087a3d4235967bed865b44e0cf?imageview/4/0/w/280/h/158/blur/1"
// link:"http://www.huya.com/guai"
// name:"乖"
// nums:"23655"
// title:"单排模式！"
// website:"虎牙"

import {mongoose} from '../db/db';
import {log} from '../utils/utils';

//直播信息
var liveSchema = mongoose.Schema({
    name: {type:String, unique:true},
    nums: Number,
    title: String,
    link: String,
    category: String,
    img: String,
    website: String
});

export var Live = mongoose.model('Live', liveSchema);

export class Liveinfos {
    constructor (website, lives) {
        this.website = website;
        this.lives = lives;
    }
}