export default {
  setCategoryCurrentSite (state, payload) {
    const { category, site } = payload
    state.ui.categoryCurrentSite[category] = site
  },
  setCategoryRankLives (state, payload) {
    const { category, lives } = payload
    state.rankLives[category] = lives
  }
}
