import jest from 'jest';
import {mongoose} from '../dev/server/db/db';
import sitesMap from '../dev/server/config';
import _ from 'lodash';
import * as spiderManager from '../dev/server/spider-manager';
import Huyaspider from "../dev/server/spider/huyaspider";
import Douyuspider from "../dev/server/spider/douyuspider";

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
        expect(lives.website).toBe('虎牙');
        expect(lives.lives.length).toBeGreaterThan(5);
    })

    //not use
    it.skip('test getAllLivesBycategory',  () => {
        let allLives;
        return spiderManager.getAllLivesBycategory('dota')
            .then(lives => {
                allLives = lives;
                expect(allLives).toBeTruthy();
                expect(allLives.category).toBe('dota');
                expect(allLives.lives.length).toBe(_.keys(sitesMap).length);
            });
    })
})
