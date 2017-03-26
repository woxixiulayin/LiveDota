// import mutations from './mutations'
import Vuex from 'vuex'
import Vue from 'vue'
import state from './state'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  mutations,
  getters
})

export default store
