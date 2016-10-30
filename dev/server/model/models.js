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
    nums: String,
    title: String,
    link: String,
    category: String,
    img: String,
    website: String
},
{
    timestamps: true
});

function transWan (nums) {
    if (typeof nums === 'number') return;
    let indexWan = String(nums).indexOf("万");
    return indexWan != -1 ? nums.substr(0, indexWan) * 10000 : nums;
};

var LiveModel = mongoose.model('Live', liveSchema);
export class Live extends LiveModel {
    constructor (params) {
        super(params);
        this.params = params;
    }

    static async isExistByName(name) {
        let res = await super.find({name}).exec();
        return res.length && res[0].name === name ? true : false;
    }

    static async getAllLivesByCategory (category) {
        return await super.find({category}).exec();
    }

    static async getLivesByCategoryAndSite (category, site) {
        return await super.find({category, site}).exec();
    }

    async findAndUpdate () {
        try {
            let res = await LiveModel.findOneAndUpdate({name: this.name},this.params, {upsert: true, overwrite: false}).exec();
            return res ? res : this;
        } catch (e) {
            console.log(e);
        }
    }
}

export class Liveinfos {
    constructor (website, lives) {
        this.website = website;
        this.lives = lives;
    }
}