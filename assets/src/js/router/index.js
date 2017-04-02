import Vue from 'vue'
import Router from 'vue-router'
import liveContent from 'js/main-content/live-content'
import liveList from 'js/main-content/live-content/live-list/list.vue'
import {gameCategory} from 'js/config'

Vue.use(Router)
console.log(liveList)
const defaultCategory = Object.keys(gameCategory)[0]
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/DOTA'
    },
    {
      path: '/:currentCategory',
      component: liveContent,
      // 导航的路径中只有category时进行重定向，会对所有符合该匹配的路由进行跳转
      redirect: to => {
        let currentCategory = to.params.currentCategory
        if (Object.keys(gameCategory).indexOf(currentCategory) === -1) {
          // 重定向到下级路由
          currentCategory = defaultCategory
        }
        return `/${currentCategory}/${gameCategory[defaultCategory][0]}`
      },
      children: [
        {
          // site的过滤可以放在组件中进行检测跳转
          path: ':currentSite',
          component: liveList
        }
      ]
    },
    {path: '*', redirect: '/'}
  ]
})

export default router
console.log(router)
