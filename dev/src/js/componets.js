var $ul_weblist = websites => {
    if ( !websites instanceof Array) return false;
    let $ul = $("<ul></ul>");
    $ul.addClass("websites");
    websites.forEach( (ele, i) => {
        let $li = $(`<li><a href="#">${ele}</a></li>`);
        $li.addClass("website-item");
        $ul.append($li);
    });
    return $ul;
}

var $btn_refresh = () => {
    return $("<button>刷新</button>").addClass("btn-refresh");
};

var $li_live = live => {
    let html = `
        <li class="live-item left">
        <a class="li-a" href=${live.link} target="_blank">
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
        </li>`;
    return $(html);
}

var $ul_rank = lives => {
    let $ul = $("<ul></ul>").addClass("live-rank");

    lives.forEach((live, index) => {
        let html = `
        <li class="rank-item-wrap">
                <a class="rank-link" href=${live.link} target="_blank">
                <div class="rank-item">
                    <span class="rank-name">${live.name}</span>
                    <span class="rank-nums">${live.nums}</span>
                    <span class="rank-website">${live.website}</span>
                </div>
                    <div class="img-div">
                        <div class="rank-i-img-wrap">
                            <img src="${live.img}" class="rank-img" display="none">
                        </div>
                    </div>
                </a>
            </li>
        `,
        $li_rank = $(html)
            .hover((e)=>{
                $ul.find(".rank-i-img-wrap").stop().hide();
                $(e.currentTarget).find(".rank-i-img-wrap").stop().fadeIn(500);
            }, (e)=>{
                $ul.find(".rank-i-img-wrap").stop().hide();
                $(e.currentTarget).find(".rank-i-img-wrap").stop().fadeOut(500);
            });

        $li_rank.find(".rank-i-img-wrap").hide();

        $ul.append($li_rank);
    });

    return $ul;
};

module.exports = {
    $ul_weblist: $ul_weblist,
    $btn_refresh: $btn_refresh,
    $li_live: $li_live,
    $ul_rank: $ul_rank
}