const fs = require('fs');
const mongoose = require('mongoose');
const configPath = "/Users/Jackson/work/web/LiveDota/config.json";
const dbPath = JSON.parse(fs.readFileSync(configPath)).mongodb_config;

mongoose.connect("mongodb://localhost/test");

var Schema = mongoose.Schema;

var liveSchema = new Schema({
    name: String,
    nums: Number,
    title: String,
    link: String,
    category: String,
    img: String,
    website: String
});

var liveModel = mongoose.model('live', liveSchema);

export { liveModel };