// import mutations from './mutations'
import Vuex from 'vuex'
import Vue from 'vue'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import {liveListModul} from '../main-content/live-content/live-list'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    categorySiteLives: liveListModul
  },
  state,
  mutations,
  getters
})

export default store
