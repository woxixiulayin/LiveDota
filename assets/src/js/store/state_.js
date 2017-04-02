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

export default state
