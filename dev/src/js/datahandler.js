const rankNumber = 10;
var getRankinfo = (liveinfos) => {
    let lives = [],
        orderedlives = [];

    //取出所有直播信息拼成大数组
    liveinfos.forEach( (item, i) => {
        lives = lives.concat(item.lives);
    });
    console.log(lives);

    orderedlives = lives.sort( (pre, after) => {
        return after.nums - pre.nums;
    });
    return orderedlives.slice(0, rankNumber);
};

module.exports = {
    getRankinfo: getRankinfo
}