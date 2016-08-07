var componets = require("./componets.js");
var datahandler = require("./datahandler.js");

var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;

$(() => {
    let $aside_rank = $("aside.rank"),
        $ul_rank = $aside_rank.find("ul");
    
        //直播信息填充函数
    let fullfillLives = lives => {
        $("ul.ul-live-list").empty();
        lives.forEach( (item, i) => {
            datahandler.parseLive(item);
            let $live = componets.$_live(item);
            $("ul.ul-live-list").append($live);
        });
    };

    let main = data => {
            let websites = data.map((item, i, array) => {
                return item['website'];
            }),
            $websites = componets.$_weblist(websites),
            
            //从未经处理的live信息获得rank数据
            rankInfo = datahandler.getRankinfo(data);
            // console.log(data)

        //添加左侧网址列表
        $(".left-wrap").empty().append($websites);
        $websites.click(function (e) {
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
                $.get('/search', main, 'json');
                $(e.target).blur();
            }
        });

        //显示默认直播网站lives
        $websites.find("a:first").click();

        //添加右侧排行榜
        $ul_rank.empty();
        rankInfo.forEach( (live, i) => {
            let $li_rank = componets.$li_rank(live);
            $ul_rank.append($li_rank);
        });

    };



    //Ajax获取数据
    $.get('/search', main, 'json');

    //规划页面布局
    (() => {
            //排行版从右侧滑出
            $aside_rank.animate({left:pageWidth - 270 + "px"}, 1300);
    })();


});