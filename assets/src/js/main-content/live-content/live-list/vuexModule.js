import {gameCategory} from 'js/config'
import ajaxOperation from 'js/ajaxOperation'

const state = Object.keys(gameCategory).reduce((categorySiteLives, category) => {
  categorySiteLives[category] = gameCategory[category].reduce((siteLives, site) => {
    siteLives[site] = []
    return siteLives
  }, {})
  return categorySiteLives
}, {})

const mutations = {
  setCategorySiteLives (state, {category, site, lives}) {
    console.log(`mutations setCategorySiteLives`)
    state[category][site] = lives
  }
}

const actions = {
  /**
   * 获取视频数据，如果本地有且没过时则用本地数据，否则从远端更新
   */
  updateLivesIfNeed (context, {category, site}) {
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
    if (shouldGetNewLive(context.state[category][site])) {
      // 获得游戏种类下指定网站的直播
      return ajaxOperation.live.fetchLives({category, site})
        .then(lives => context.commit('setCategorySiteLives', {category, site, lives: lives}))
        .then(() => ajaxOperation.live.fetchLives({category, site: 'rank'}))
        .then(lives => context.commit('setCategoryRankLives', {category, site, lives: lives}))
    }
  }
}

function shouldGetNewLive (currentLives) {
  console.log(!Array.isArray(currentLives))
  console.log(currentLives.length === 0)
  console.log(currentLives.length === 0)
  return !Array.isArray(currentLives) || currentLives.length === 0 || (new Date(currentLives[0]['updateAt']) - new Date() < -60000)
}
export default {state, mutations, actions}
