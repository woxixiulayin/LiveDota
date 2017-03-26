export default {
  setCategoryCurrentSite: (state, payload) => {
    const { category, site } = payload
    state.ui.categoryCurrentSite[category] = site
  }
}
