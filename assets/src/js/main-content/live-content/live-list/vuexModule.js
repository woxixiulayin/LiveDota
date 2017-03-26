import {gameCategory} from '/js/config'
import ajax from '/js/lib/ajax'

const state = Object.keys(gameCategory).reduce((categorySiteLives, category) => {
  categorySiteLives[category] = gameCategory[category].reduce((siteLives, site) => {
    siteLives[site] = []
    return siteLives
  }, {})
  return categorySiteLives
}, {})

const mutations = {
  setCategorySiteLives (state, {category, site, lives}) {
    console.log(state)
    state[category][site] = lives
  }
}

const actions = {
  fetchCategorySiteLives (context, {category, site}) {
    if (Object.keys(gameCategory).indexOf(category) === -1) {
      throw new Error(`category [${category}] is not support
    support category list is: [${Object.keys(gameCategory)}]
`)
    }
    if (gameCategory[category].indexOf(site) === -1) {
      throw new Error(`site [${site}] is not support in category [${category}]
      category ${category} support site list is: [${gameCategory[category]}]
`)
    }
    // 获得游戏种类下指定网站的直播
    ajax.get(`/${category}/${site}`)
      .then(data => {
        if (Array.isArray(data)) {
          console.log({category, site, lives: data})
          context.commit('setCategorySiteLives', {category, site, lives: data})
        }
      })
  }
}

export default {state, mutations, actions}
