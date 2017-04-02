import {
  gameCategory
} from 'js/config'

const state = {
  videoStore: Object.keys(gameCategory).reduce((categoryVideoMap, category) => {
    categoryVideoMap[category] = gameCategory[category].reduce((siteVideoMap, site) => {
      siteVideoMap[site] = []
      return siteVideoMap
    }, {})
    return categoryVideoMap
  }, {}),
  categoryList: Object.keys(gameCategory),
  categorySites: gameCategory
}

state.videoStore['DOTA']['虎牙'] = [{
  name: '灰灰',
  nums: '629',
  title: '小奶：单排冲8000！         ' +
    '               ',
  link: 'http://www.douyu.com/xiaonai',
  img: 'https://rpic.douyucdn.cn/a1610/24/20/224460_161024205221.jpg'
}]

export default state
