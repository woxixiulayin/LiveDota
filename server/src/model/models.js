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
import {types, rankNum, sitesMap} from '../config';

//直播信息
var liveSchema = mongoose.Schema({
    name: String,
    nums: Number,
    title: String,
    link: {type:String, unique:true},
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

    static async getLivesByCategoryAndType (category='none', type = 'all', limit = 100) {
        let lives = [], query = {};
        console.log(`get [${category}-${type}] lives from db`);
        if (types.indexOf(type) === -1) {
            throw new Error(`${type} is not search type`);
        }
        if (type === 'all') {
            query = {"category":category};
        } else if (type === 'rank') {
            query = {"category":category};
            limit = rankNum;
        } else if (Object.keys(sitesMap).indexOf(type) !== -1) {
            query = {"category":category, "website": type};
        }
        try {
          // sort使用字符串选定属性来排序，object不行
            lives = await super.find(query).limit(limit).sort('-nums').exec();
            return lives;
        } catch (e) {
            console.log(e.stack);
            return [];
        }
    }

    async findAndUpdate () {
        try {
            let res =  await LiveModel.findOneAndUpdate({name: this.name},{
                nums: Number(this.nums),
                img: this.img,
                title: this.title,
                category: this.category
            }).exec();
            // console.log(res);
            if (!res) res = await this.save();
            return res;
        } catch (e) {
            console.log(this);
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
