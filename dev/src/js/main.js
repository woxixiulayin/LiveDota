var componets = require("./componets.js");

$(() => {
    $.get('/search', (data) => {
        let websites = data.map((item, i, array) => {
                return item['website'];
            }),
            $websites = componets.dom_weblist(websites);
            console.log(data)
        $("div.livewebs").append($websites);

    }, 'json');
});