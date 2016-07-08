//直播信息
class Liver {
    constructor (name, nums, label, category, img, website) {        
        this.name = name || '';
        this.nums = nums || '';
        this.label = label || '';
        this.category = category || '';
        this.img = img || '';
        this.website = website || '';
    }
}

class LiveDota extends Liver {
        constructor () {
            super(name, nums, label, category, img, website);
            this.category = "Dota";
        }
}