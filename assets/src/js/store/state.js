import {gameCategory} from 'js/config'

const state = {
  ui: {
    categoryCurrentSite: Object.keys(gameCategory).reduce((siteMap, category) => {
      siteMap[category] = gameCategory[category][0]
      return siteMap
    }, {})
  }
}

export default state
