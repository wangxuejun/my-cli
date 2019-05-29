import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '*',
      redirect (to) {
        if (to.path === '/') {
          return '/loading'
        } else {
          return '/wait'
        }
      }
    },
    {
      name: 'wait',
      path: '/wait',
      component: resolve => require(['@/page/config/wait'], resolve)
    },
    {
      name: 'loading',
      path: '/loading',
      component: resolve => require(['@/page/config/loading'], resolve)
    },
    {
      name: 'error',
      path: '/error',
      component: resolve => require(['@/page/config/error'], resolve)
    },
    // 首页
    {
      name: 'index',
      path: '/index',
      component: resolve => require(['@/page/index'], resolve),
      meta: {
        login: false
      }
    },
    // 用户
    {
      name: 'userIndex',
      path: '/user',
      component: resolve => require(['@/page/user/index'], resolve),
      redirect: '/user/user',
      meta: {
        login: false
      },
      children: [
        // 编辑资料
        {
          name: 'user',
          path: 'user',
          component: resolve => require(['@/page/user/user'], resolve),
          meta: {
            login: false
          }
        },
        // 编辑资料
        {
          name: 'modify',
          path: 'modify',
          component: resolve => require(['@/page/user/modify'], resolve),
          meta: {
            login: false
          }
        }
      ]
    }
  ],
  linkActiveClass: 'active'
  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // }
})
// router.beforeEach((to, from, next) => {
//   if (to.meta.login === false) {
//     if (sessionStorage.getItem('openid')) {
//       next()
//     } else {
//       next({path: '/login', query: {rediUrl: to.fullPath}})
//     }
//     // next()
//   } else {
//     next()
//   }
// })

export default router
