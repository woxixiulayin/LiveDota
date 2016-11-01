import jset from 'jest';
import * as Spiders from "../dev/server/spider/spiderindex";
import {isCategoryOutOfDate,
    categoryUpdateTime,
    getAllLivesByCategory} from '../dev/server/live-manager'
import _ from 'lodash';

describe('test live-manager', () => {
    it('test isCategoryOutOfDate', () => {
        let res = isCategoryOutOfDate('dota');
        expect(res).toBe(true);
    })
    it('test live-maneger getAllLivesByCategory', async () => {
        let lives = await getAllLivesByCategory('dota');
        console.log(lives);
    })
})