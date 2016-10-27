import jest from 'jest';
import {getUrlByParams,createSpiderByParams} from '../dev/server/spider-manager.js';
import Huyaspider from "../dev/server/spider/huyaspider.js";
import Douyuspider from "../dev/server/spider/douyuspider.js";

describe('test dev/server/spider-manajer.js', () => {
	it('test function getUrlByParams', () => {
		expect(getUrlByParams('虎牙', 'dota')).toBe('http://www.huya.com/g/6');
		expect(getUrlByParams('熊猫', 'dota')).toBe('http://www.panda.tv/cate/dota2');
	})

	it('test createSpiderByParams', ()=> {
		let spider = createSpiderByParams('虎牙');
		expect(spider instanceof Huyaspider).toBeTruthy();
		expect(spider instanceof Douyuspider).toBeFalsy();
	})
})