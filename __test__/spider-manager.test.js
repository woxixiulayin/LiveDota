import jest from 'jest';

import sitesMap from '../dev/server/config';
import _ from 'lodash';
import * as spiderManager from '../dev/server/spider-manager.js';
import Huyaspider from "../dev/server/spider/huyaspider.js";
import Douyuspider from "../dev/server/spider/douyuspider.js";

describe('test dev/server/spider-manajer.js', () => {
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
        expect(lives.lives.length).toBeGreaterThan(1);
    })

    it('test getAllLivesBycategory',  () => {
        let allLives;
        return spiderManager.getAllLivesBycategory('dota')
            .then(lives => {
                allLives = lives;
                console.log(allLives);
                expect(allLives).toBeTruthy();
                expect(allLives.category).toBe('dota');
                expect(allLives.lives.length).toBe(_.keys(sitesMap).length);
            });
    })
})