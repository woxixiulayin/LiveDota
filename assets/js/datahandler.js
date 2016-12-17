const rankNumber = 10;
var getRankinfo = (liveinfos) => {
    let lives = [],
        orderedlives = [];

    //取出所有直播信息拼成大数组
    liveinfos.forEach( (item, i) => {
        lives = lives.concat(item.lives);
    });


    orderedlives = lives.sort( (pre, after) => {
        return after.nums - pre.nums;
    });
    orderedlives = orderedlives.slice(0, rankNumber);
    orderedlives.forEach( live => {
        parseLive(live);
    });

    return orderedlives;
};

var parseLive = live => {
        let nums = live.nums;
        live.nums = nums > 10000 ? (nums/10000).toFixed(1) + "万" : nums;
};

module.exports = {
    getRankinfo: getRankinfo,
    parseLive: parseLive
}