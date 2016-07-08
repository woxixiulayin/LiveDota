//直播信息
class Live {
    constructor (name, nums, title, category, img, website) {        
        this.name = name || '';
        this.nums = nums || '';
        this.title = title || '';
        this.category = category || '';
        this.img = img || '';
        this.website = website || '';
    }
}

class LiveDota extends Live {
        constructor (name, nums, title, category, img, website) {
            super(name, nums, title, category, img, website);
            this.category = "Dota";
        }
}

export {Live, LiveDota}