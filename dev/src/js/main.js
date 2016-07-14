var componets = require("./componets.js");
var datahandler = require("./datahandler.js");

var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;

$(() => {
    let $aside_rank = $("aside.rank"),
        $ul_rank = $aside_rank.find("ul");
        
    $.get('/search', (data) => {
        let websites = data.map((item, i, array) => {
                return item['website'];
            }),
            $websites = componets.$_weblist(websites);
            console.log(data)

        //添加左侧网址列表
        $("div.livewebs").append($websites);
        //添加中间直播页面
        data[1].lives.forEach( (item, i) => {
            let $live = componets.$_live(item);
            $("ul.ul-live-list").append($live);
        });
        //添加右侧排行榜
        let rankInfo = datahandler.getRankinfo(data);
        rankInfo.forEach( (live, i) => {
            let $li_rank = componets.$li_rank(live);
            $ul_rank.append($li_rank);
        });

    }, 'json');


    //规划页面布局
    (() => {
        $aside_rank.css("left", pageWidth - 270 + "px");
    })();

});