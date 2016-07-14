var componets = require("./componets.js");

$(() => {
    $.get('/search', (data) => {
        let websites = data.map((item, i, array) => {
                return item['website'];
            }),
            $websites = componets.$_weblist(websites);
            console.log(data)
        $("div.livewebs").append($websites);
        data[0].lives.forEach( (item, i) => {
            let $live = componets.$_live(item);
            $("ul.ul-live-list").append($live);
        })
    }, 'json');
});