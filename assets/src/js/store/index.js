// import mutations from './mutations'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    lives: []
  }
})

export default store
