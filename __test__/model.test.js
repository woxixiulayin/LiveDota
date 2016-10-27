require('jest');
import { db, liveModel, mongoose } from "../dev/server/db/schema.js";

test('make sure db is connected', () => {
	// console.log(11);
	var live = new liveModel({
		"name": "被遗忘的NaFaSh",
		"nums": "973",
		"title": "NaFaSh再看几场海选赛",
		"link": "http://www.panda.tv/309495",
		"category": "test",
		"img": "http://i8.pdim.gs/45/17d9fccb4ae621385bb56ad14a7c5f9f/w338/h190.jpg",
		"website": "熊猫"
	});
	// live.save();
	return new Promise( (resolve, reject) => {
		liveModel.findOne({ name: "被遗忘的NaFaSh" }, (err, live) => {
			if (err) return reject(err);
			resolve(live);
		})
	}).then( live => {
		expect(live.name).toBe('被遗忘的NaFaSh');
		// live.remove();
	})
});

