const fs = require('fs');
const mongoose = require('mongoose');
const configPath = "/Users/Jackson/work/web/LiveDota/config.json";
const dbPath = JSON.parse(fs.readFileSync(configPath)).mongodb_config;

mongoose.connect(dbPath);

var db = mongoose.connection;

db.on("error", err => {
    console.log(err);
});

export default db;
export { mongoose };