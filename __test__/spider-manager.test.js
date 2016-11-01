import jest from 'jest';
import { mongoose } from '../dev/server/db/db';
import sitesMap from '../dev/server/config';
import _ from 'lodash';
import * as spiderManager from '../dev/server/spider-manager';
import Douyuspider from "../dev/server/spider/douyuspider";
import Huyaspider from "../dev/server/spider/huyaspider";

describe('test dev/server/spider-manajer.js', () => {
    beforeEach(async function (done) {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        setTimeout(function () {
            console.log(`inside default timeout`);
            done();
        }, 1000);
    });
    it('test function getUrlByParams', () => {
        expect(spiderManager.getUrlByParams('虎牙', 'dota')).toBe('http://www.huya.com/g/6');
        expect(spiderManager.getUrlByParams('熊猫', 'dota')).toBe('http://www.panda.tv/cate/dota2');
    })

    it('test createSpiderByParams', () => {
        let spider = spiderManager.createSpiderByParams('虎牙');
        expect(spider instanceof Huyaspider).toBeTruthy();
        expect(spider instanceof Douyuspider).toBeFalsy();
    })

    it('test getLivesByParams', async () => {
        let lives = await spiderManager.getLivesByParams('虎牙', 'dota');
        expect(lives).toBeTruthy();
        expect(lives.length).toBeGreaterThan(1);
        expect(lives[1].website).toBe('虎牙');
    })

    it('test spider getAllLivesBycategory', async () => {
        let lives =  await spiderManager.getAllLivesBycategory('dota');
        expect(lives).toBeTruthy();
        expect(lives.length).toBeGreaterThan(5);
        expect(lives[0].category).toBe('dota');
        expect(+lives[0].nums).toBeGreaterThan(1);
    })
})
