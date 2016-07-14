var $_weblist = function (websites) {
    if ( !websites instanceof Array) return false;
    let $ul = $("<ul></ul>");

    websites.forEach( (ele, i) => {
        let $li = $(`<li><a href="#">${ele}</a></li>`);
        $ul.append($li);
    });
    return $ul;
}

var $_live = function (live) {
    let html = `
        <a class="live-item left" href=${live.link} target="_blank">
                <img class="live-img" src="${live.img}">
                <div class="live-info">
                <div class="live-title">${live.title}</div>
                <div class="live-name-nums">
                <span class="live-name left">${live.name}</span>
                <span class="live-nums right">${live.nums}</span>
                </div>
                </div>
                <div class="mask"></div>
            </a>
            `;
    return $(html);
}

module.exports = {
    $_weblist: $_weblist,
    $_live: $_live
}