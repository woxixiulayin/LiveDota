var componets = require("./componets.js");
var datahandler = require("./datahandler.js");

var pageWidth = window.screen.width;
// var pageHeight = window.innerHeight;
// console.log(pageWidth);
$(() => {
    let $aside_rank = $(".right-wrap"),
        $ul_live = $(".ul-live-list");
    
    //live ul居中
    let liveul_margin = ((pageWidth - 500) - Math.floor((pageWidth - 500)/290)*290)/2 - 10 + "px";
        console.log(liveul_margin);
        $ul_live.css("margin-left", liveul_margin);

    //直播信息填充函数
    let fullfillLives = lives => {
        $ul_live.empty();
        lives.forEach( (item, i) => {
            datahandler.parseLive(item);
            let $live = componets.$li_live(item);
            $ul_live.append($live);
        });
    };

    //显示页面内容
    let show = data => {
            let websites = data.map((item, i, array) => {
                return item['website'];
            }),
            $websites = componets.$ul_weblist(websites),
            
            //从未经处理的live信息获得rank数据
            rankInfo = datahandler.getRankinfo(data);
            // console.log(data)

        //更新左侧网址列表
        $(".left-wrap").empty()
            .append($websites)
            .append(componets.$btn_refresh());

        //点击直播网站事件
        $(".left-wrap").click(function (e) {
            if(e.target.tagName === "A") {
                $(this).find("li").removeClass("checked");
                $(e.target).parent("li").addClass("checked");

                //显示中间直播list
                for(let i=0,len=data.length; i<len; i++) {
                    if (data[i].website === $(e.target).text()) {
                        fullfillLives(data[i].lives);
                    }
                }
            } else if (e.target.tagName === "BUTTON") {
                //Ajax获取数据
                $.get('/search', show, 'json');
                $(e.target).blur();
            }
        });

        //显示默认直播网站lives
        $websites.find("a:first").click();

        //添加右侧排行榜
        $(".right-wrap")
            .remove(".live-rank")
            .append(componets.$ul_rank(rankInfo));
    };

    //Ajax获取数据
    $.get('/search', show, 'json');


});