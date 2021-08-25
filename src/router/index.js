import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '佳友牙醫診所'
    }
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: () => import(/* webpackChunkName: "login" */ '../views/AboutUs.vue'),
    meta: {
      title: '診所介紹 | 佳友牙醫診所'
    }
  },
  {
    path: '/newest/:id',
    name: 'Newest',
    component: () => import(/* webpackChunkName: "login" */ '../views/Newest.vue'),
    meta: {
      title: '牙齒百科 | 佳友牙醫診所'
    }
  },
  {
    path: '/serve1',
    name: 'Serve1',
    component: () => import(/* webpackChunkName: "login" */ '../views/Serve1.vue'),
    meta: {
      title: '兒童牙科 | 佳友牙醫診所'
    }
  },
  {
    path: '/serve2',
    name: 'Serve2',
    component: () => import(/* webpackChunkName: "login" */ '../views/Serve2.vue'),
    meta: {
      title: '人工植牙 | 佳友牙醫診所'
    }
  },
  {
    path: '/serve3',
    name: 'Serve3',
    component: () => import(/* webpackChunkName: "login" */ '../views/Serve3.vue'),
    meta: {
      title: '齒顎矯正 | 佳友牙醫診所'
    }
  },
  {
    path: '/serve4',
    name: 'Serve4',
    component: () => import(/* webpackChunkName: "login" */ '../views/Serve4.vue'),
    meta: {
      title: '根管治療 | 佳友牙醫診所'
    }
  },
  {
    path: '/serve5',
    name: 'Serve5',
    component: () => import(/* webpackChunkName: "login" */ '../views/Serve5.vue'),
    meta: {
      title: '一般牙科 | 佳友牙醫診所'
    }
  },
  {
    path: '/articleall',
    name: 'ArticleAll',
    component: () => import(/* webpackChunkName: "login" */ '../views/ArticleAll.vue'),
    meta: {
      title: '牙齒百科 | 佳友牙醫診所'
    }
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import(/* webpackChunkName: "login" */ '../views/Article.vue'),
    meta: {
      title: '牙齒百科 | 佳友牙醫診所'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "login" */ '../views/Contact.vue'),
    meta: {
      title: '聯絡我們 | 佳友牙醫診所'
    }
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import(/* webpackChunkName: "login" */ '../views/Info.vue'),
    meta: {
      title: '聯絡我們 | 佳友牙醫診所'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      title: '登入 | 佳友牙醫診所'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: {
      title: '註冊 | 佳友牙醫診所'
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue'),
    children: [
      {
        path: '',
        name: 'UserHome',
        component: () => import(/* webpackChunkName: "admin" */ '../views/UserHome.vue'),
        meta: {
          login: true,
          title: '線上預約 | 佳友牙醫診所'
        }
      },
      {
        path: 'reserve',
        name: 'UserReserve',
        component: () => import(/* webpackChunkName: "admin" */ '../views/UserReserve.vue'),
        meta: {
          login: true,
          title: '線上預約 | 佳友牙醫診所'
        }
      },
      {
        path: 'record',
        name: 'UserRecord',
        component: () => import(/* webpackChunkName: "admin" */ '../views/UserRecord.vue'),
        meta: {
          login: true,
          title: '就診紀錄 | 佳友牙醫診所'
        }
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminHome.vue'),
        meta: {
          login: true,
          admin: true,
          title: '後台管理 | 佳友牙醫診所'
        }
      },
      {
        path: 'articles',
        name: 'AdminArticles',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminArticles.vue'),
        meta: {
          login: true,
          admin: true,
          title: '文章管理 | 佳友牙醫診所'
        }
      },
      {
        path: 'orders',
        name: 'AdminOrders',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminOrders.vue'),
        meta: {
          login: true,
          admin: true,
          title: '預約管理 | 佳友牙醫診所'
        }
      },
      {
        path: 'newests',
        name: 'AdminNeweats',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminNewests.vue'),
        meta: {
          login: true,
          admin: true,
          title: '預約管理 | 佳友牙醫診所'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.login && store.state.user.account.length === 0) {
    next('/login')
  } else if (to.meta.admin && store.state.user.role !== 1) {
    next('/')
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
