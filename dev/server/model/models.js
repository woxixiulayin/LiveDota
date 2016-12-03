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
import {types, rankNum} from '../config';

//直播信息
var liveSchema = mongoose.Schema({
    name: {type:String, unique:true},
    nums: Number,
    title: String,
    link: String,
    category: String,
    img: String,
    website: String
},
{
    timestamps: true
});

var LiveModel = mongoose.model('Live', liveSchema);
export class Live extends LiveModel {
    constructor (params) {
        super(params);
    }

    static async isExistByName(name) {
        let res = await super.find({name}).exec();
        return res.length && res[0].name === name ? true : false;
    }

    static async getAllLivesByCategory (category) {
        return await super.find({category}).exec();
    }

    static async getLivesByCategoryAndType (category='none', type = 'all', limit = 100, sort = {}) {
        let lives = [], query = {};
        console.log(`get lives from db`);
        if (types.indexOf(type) === -1) {
            throw new Error(`${type} is not search type`);
        }
        switch(type) {
            case 'all': query = {"category":category};
            break;
            case 'rank': query = {"category":category};
                        limit = rankNum;
                        sort = {"nums": -1};
            break;
            //默认type按网址寻找
            default: 
                query = {"category":category, "website": type};
            break;
        }
        try {
            lives = await super.find(query).sort(sort).limit(limit).exec();
            return lives;
        } catch (e) {
            console.log(e.stack);
        }
        return lives;
    }

    async findAndUpdate () {
        try {
            let res =  await LiveModel.findOneAndUpdate({name: this.name},{
                nums: this.nums,
                img: this.img,
                title: this.title,
                category: this.category
            }).exec();
            // console.log(res);
            if (!res) res = await this.save();
            return res;
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