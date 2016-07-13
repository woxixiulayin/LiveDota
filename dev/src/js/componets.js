var dom_weblist = function (websites) {
    if ( !websites instanceof Array) return false;
    let $ul = $("<ul></ul>");

    websites.forEach( (ele, i) => {
        let $li = $(`<li><a href="#">${ele}</a></li>`);
        $ul.append($li);
    });
    return $ul;
}

var dom_liveinfo = function (live) {

}

module.exports = {
    dom_weblist: dom_weblist
}