import {gameCategory} from '/js/config'

export default {
  state: Object.keys(gameCategory).reduce((categorySiteLives, category) => {
    categorySiteLives[category] = gameCategory[category].reduce((siteLives, site) => {
      siteLives[site] = []
      return siteLives
    }, {})
    return categorySiteLives
  }, {})
}
