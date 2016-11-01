import * as spiderManager from './spider-manager';
import {Live} from './model/models';
import {outDateTime, categories} from './config';
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
const workList = (() => {
    let list = [];
    return {
        //@param work: category 
        //@return boolean
        isWorkExist(work) {
            return list.indexOf(work) === -1 ? false : true;
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
    let res
    if (!_.keys(categories).indexOf(category)) return;
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
    _lvies.lives = lives.reduce((lives, live) => {
        return live
    }, {})
};

//return lives: []
var getLivesFromNetBycategory = async category => {
    let lives;
    if (categories.indexOf(category) === -1) {
        throw new Error(`no ${category} in categories`);
    };
    lives = await spiderManager.getAllLivesBycategory(category);
    return lives;
}

//return lives: []
export async function getAllLivesByCategory (category) {
    let lives = {};
    if (categories.indexOf(category) === -1) {
        throw new Error(`no ${category} in categories`);
    };
    if (isCategoryOutOfDate(category) && !workList.isWorkExist(category)) {
        try {
            workList.addWork(category);
            lives = await getLivesFromNetBycategory(category);
            log(lives)
            await Promise.all(lives.lives.map(async live => {
                return await live.save();
            }));
            workList.deleteWork(category);
        }
        catch (e) {
            console.log(e);
        }
    } else {
        try {
            lives = await Live.getAllLivesByCategory(category);
        } catch (e) {
            console.log(e);
        }
    }
    return lives;
}


