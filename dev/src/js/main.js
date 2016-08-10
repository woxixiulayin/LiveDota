var componets = require("./componets.js");
var datahandler = require("./datahandler.js");

var pageWidth = window.screen.width;

$(() => {
    let $aside_rank = $(".right-wrap"),
        $ul_live = $(".ul-live-list"),
        liveinfos = [],
        checkNum = 0;



    //live ul居中
    let liveul_margin = ((pageWidth - 500) - Math.floor((pageWidth - 500) / 290) * 290) / 2 - 10 + "px";
    $ul_live.css("margin-left", liveul_margin);

    //直播信息填充函数
    let fullfillLives = lives => {
        $ul_live.empty();
        lives.forEach((item, i) => {
            datahandler.parseLive(item);
            let $live = componets.$li_live(item);
            $ul_live.append($live);
        });
    };

    //页面显示主函数，参数data为后端返回的json数据
    let show = data => {
        let websites = data.map((item, i, array) => {
                return item['website'];
            }),
            //创建左侧websites ul组件
            $websites = componets.$ul_weblist(websites),
            //从未经处理的live信息获得rank数据
            rankInfo = datahandler.getRankinfo(data);


        //更新左侧网址列表
        $(".left-wrap ul")
            .replaceWith($websites)
        
        //显示默认直播网站lives
        $(".left-wrap")
            .find(`a:eq(${checkNum})`)
            .click();

        //更新右侧排行榜
        $(".right-wrap")
            .find("ul")
            .replaceWith(componets.$ul_rank(rankInfo));
    };

    let getNewData = function() {
        $.get('/search', (data) => {
            liveinfos = data;
            show(liveinfos);
        }, 'json');
    }

    //网址和刷新(重新获取数据)按钮的事件委托
    $(".left-wrap").click(function(e) {
        if (e.target.tagName === "A") {
            $(this).find("li").removeClass("checked");
            $(e.target).parent("li").addClass("checked");

            liveinfos.forEach((info, i) => {
            if (info.website === $(e.target).text()) {
                checkNum = i;
                fullfillLives(info.lives);
            }
        });

        } else if (e.target.tagName === "BUTTON") {
            //获取新数据
            getNewData();
            $(e.target).blur();
        }
    });

    //refresh获取数据click
    getNewData();
});