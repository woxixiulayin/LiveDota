import Vue from 'vue'
import Router from 'vue-router'
import liveContent from 'js/main-content/live-content'
import liveList from 'js/main-content/live-content/live-list'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/DOTA'
    },
    {
      path: '/:currentCategory',
      component: liveContent,
      redirect: to => {
        const currentCategory = to.params.currentCategory
        // 重定向自路由和无游戏种类的url
        return currentCategory ? `/${currentCategory}/熊猫` : '/DOTA/熊猫'
      },
      children: [
        {
          path: ':site',
          component: liveList
        }
      ]
    }
  ]
})

export default router
console.log(router)
