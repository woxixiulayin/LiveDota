import Vue from 'vue'
import Router from 'vue-router'
import liveContent from 'js/main-content/live-content'
import {gameCategory} from 'js/config'
import Header from 'js/header'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Header,
    children: Object.keys(gameCategory).map(game => ({
      path: `/:currentCategory`,
      component: liveContent
    }))
  }]
})
