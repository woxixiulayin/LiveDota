//@flow
import jset from 'jest';
import * as Spiders from "../dev/server/spider/spiderindex";
import {isCategoryOutOfDate,
    categoryUpdateTime,
    workList,
    getLives} from '../dev/server/live-manager'
import _ from 'lodash';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
describe('test live-manager', () => {
    it('test isCategoryOutOfDate', () => {
        let res = isCategoryOutOfDate('dota');
        expect(res).toBe(true);
    })
    it(`test worklist `, () => {
        expect(workList.isWorkExist('斗鱼')).toBe(false);
        workList.addWork('斗鱼');
        expect(workList.isWorkExist('斗鱼')).toBe(true);
        workList.deleteWork('斗鱼');
        expect(workList.isWorkExist('斗鱼')).toBe(false);
    })
    it.skip('test live-maneger getLives', async () => {
        let lives = [];
        lives = await getLives('dota', '虎牙');
        expect(lives.length).toBeGreaterThan(20);
    })
    it('test live-maneger getLives rank', async () => {
        let lives = [];
        lives = await getLives('dota', 'rank');
        expect(lives.length).toBeGreaterThan(5);
        console.log(lives);
    })
})