import {gameCategory} from 'js/config'

const state = {
  ui: {
    categoryCurrentSite: Object.keys(gameCategory).reduce((siteMap, category) => {
      siteMap[category] = gameCategory[category][0]
      return siteMap
    }, {})
  },
  rankLives: Object.keys(gameCategory).reduce((rankLiveMap, category) => {
    rankLiveMap[category] = []
    return rankLiveMap
  }, {})
}

export default state
