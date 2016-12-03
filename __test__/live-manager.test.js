//@flow
import jset from 'jest';
import * as Spiders from "../dev/server/spider/spiderindex";
import {isCategoryOutOfDate,
    categoryUpdateTime,
    workList,
    getLives} from '../dev/server/live-manager'
import _ from 'lodash';

describe('test live-manager', () => {
    it('test isCategoryOutOfDate', () => {
        let res = isCategoryOutOfDate('dota');
        expect(res).toBe(true);
    })
    it(`test worklist `, () => {
        console.log(workList.getList());
        expect(workList.isWorkExist('斗鱼')).toBe(false);
        workList.addWork('斗鱼');
        expect(workList.isWorkExist('斗鱼')).toBe(true);
        workList.deleteWork('斗鱼');
        expect(workList.isWorkExist('斗鱼')).toBe(false);
    })
    it('test live-maneger getLives', async () => {
        let lives = await getLives('dota', '虎牙');
        expect(lives.length).toBeGreaterThan(20);
        console.log(lives);
    })
})