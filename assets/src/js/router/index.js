import Vue from 'vue'
import Router from 'vue-router'
import liveContent from 'js/main-content/live-content'
import {gameCategory} from 'js/config'

Vue.use(Router)

export default new Router({
  path: '/',
  routes: [{
    path: '/',
    redirect: '/DOTA'
  }].concat(
    Object.keys(gameCategory).map(game => ({
      path: `/:currentCategory`,
      name: game,
      component: liveContent
    }))
  )
})
