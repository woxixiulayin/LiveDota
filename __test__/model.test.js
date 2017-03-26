import 'jest';
// jest.enableAutomock();
import mongoose  from "mongoose";
import {Live} from "../server/src/model/models";
import {getLivesByParams} from "../server/src/spider-manager.js"
import fs from 'fs';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
global.Promise = require.requireActual('promise');
// await mongoose.connection.close();
// mongoose.connect("mongodb://localhost/livedota");

let mockdata = {
        "name": "被遗忘的NaFaSh",
        "nums": "973",
        "title": "NaFaSh再看几场海选赛",
        "link": "http://www.panda.tv/309495",
        "category": "test",
        "img": "http://i8.pdim.gs/45/17d9fccb4ae621385bb56ad14a7c5f9f/w338/h190.jpg",
        "website": "熊猫"
    };

it('make sure db is connected', () => {
    expect(mongoose.connection.readyState).toBe(2);
});

it('test remove and save Live', async () => {
     let res ;
    await Live.remove({name: "被遗忘的NaFaSh"}).exec();
    res = await Live.isExistByName('被遗忘的NaFaSh');
    expect(res).toBe(false);
    let live = new Live(mockdata);
    let _live = await live.findAndUpdate();
    res = await Live.isExistByName('被遗忘的NaFaSh');
    expect(res).toBe(true);
    await Live.remove({name: "被遗忘的NaFaSh"}).exec();
})

it('get lives from db by', async () => {
    let lives = await getLivesByParams('熊猫', 'dota');
    let  db_lives = await Promise.all(lives.map( async live => {
        return await live.findAndUpdate();
    }));
    let dotaLives = await Live.getAllLivesByCategory('dota');
    expect(db_lives.length).toBeGreaterThan(10);
    db_lives.map(live => {
        expect(live.category).toBe('dota');
    })
})