import {gameCategory} from '/js/config'
import axios from 'axios'

const state = {
  state: Object.keys(gameCategory).reduce((categorySiteLives, category) => {
    categorySiteLives[category] = gameCategory[category].reduce((siteLives, site) => {
      siteLives[site] = []
      return siteLives
    }, {})
    return categorySiteLives
  }, {})
}

const mutaions = {
  setCategorySiteLives (state, payload) {
    const {category, site, lives} = payload
    state[category][site] = lives
  }
}

const actions = {
  fetchCategorySiteLives (category, site) {
    axios.get(`/${category}/${site}`)
      .then(data => console.log(data.body))
  }
}

actions.fetchCategorySiteLives('dota', '战旗')
export default {state, mutaions, actions}
