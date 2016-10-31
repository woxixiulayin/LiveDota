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

var getLivesFromNetBycategory = async function (category) {
    let lives;
    workList.addWork(category);
    lives = await spiderManager.getAllLivesBycategory(category);
    workList.deleteWork(category);
    return lives;
}
//{category, lives: Live[]}
export async function getAllLivesByCategory (category) {
    let lives = {};
    if (isCategoryOutOfDate(category) && !workList.isWorkExist(category)) {
        lives = await getLivesFromNetBycategory(category);
    } else {
        lives = await Live.getAllLivesByCategory(category);
    }
    return lives;
}


