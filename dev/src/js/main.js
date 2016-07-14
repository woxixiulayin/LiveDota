var componets = require("./componets.js");

var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;

$(() => {
    let $aside_rank = $("aside.rank");

    $.get('/search', (data) => {
        let websites = data.map((item, i, array) => {
                return item['website'];
            }),
            $websites = componets.$_weblist(websites);
            console.log(data)
        $("div.livewebs").append($websites);
        data[1].lives.forEach( (item, i) => {
            let $live = componets.$_live(item);
            $("ul.ul-live-list").append($live);
        })
    }, 'json');


    //规划页面布局
    (() => {
        $aside_rank.css("left", pageWidth - 260 + "px");
    })();

});