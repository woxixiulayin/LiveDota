//@flow
import * as spiderManager from './spider-manager';
import {Live} from './model/models';
import {outDateTime, categories, types} from './config';
import {log} from './utils/utils';
import _ from 'lodash';

export const categoryUpdateTime = ( () => {
    return categories.reduce( (map, item) => {
        //set a old time
        map[item] = new Date('2016-10-10');
        return map;
    }, {});
})();
categoryUpdateTime.update = (category) => {
    categoryUpdateTime[category] = new Date();
}

export const workList = (() => {
    let list = [];
    return {
        //@param work: category 
        //@return boolean
        isWorkExist(work) {
            return list.indexOf(work) !== -1;
        },
        addWork(work) {
            if (this.isWorkExist(work)) return;
            list.push(work);
        },
        deleteWork(work) {
            _.remove(list, item => item === work);
            categoryUpdateTime.update(work);
        },
        getList() {
            return list;
        }
    }
})();


export var isCategoryOutOfDate = category => {
    let res;
    res = new Date() - categoryUpdateTime[category] > outDateTime;
    return res;
}

//@param lives: []
//return {category, lives:[{website, lives:[]}]}
var giveLiveListTag = (lives, category) => {
    let _lives = {};
    assert(lives instanceof Array);
    if (categories.indexOf(category) === -1) {
        throw new Error(`no ${category} in categories`);
    };
    _lives.category = category;
    _lives.lives = lives.reduce((lives, live) => {
        return live
    }, {})
};


//get live from net
//return lives: []
var getLivesFromNetBycategory = async category => {
    let lives;
    if (categories.indexOf(category) === -1) {
        throw new Error(`no ${category} in categories`);
    };
    lives = await spiderManager.getAllLivesBycategory(category);
    return lives;
}

/**
 * return: lives:[]
 * param: category
 * param: type
 */
export async function getLives(category = "none", type = "all", limit = 100) {
    let lives = [];
    if (categories.indexOf(category) === -1) {
        throw new Error(`no ${category} in categories`);
    };
    if (isCategoryOutOfDate(category) && !workList.isWorkExist(category)) {
        try {
            console.log(`get lives from net`);
            workList.addWork(category);
            lives = await getLivesFromNetBycategory(category);
            await Promise.all(lives.map(async live => live.findAndUpdate()));
            workList.deleteWork(category);
        } catch (e) {
            console.log(e.stack);
            return [];
        }
    }
    lives = await Live.getLivesByCategoryAndType(category, type, limit);
    return lives;
}
