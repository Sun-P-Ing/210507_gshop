/*
* 路由器对象模块
* */
import Vue from 'vue'
import VueRouter from 'vue-router'

//引入路由组件
import Msite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'

//声明使用插件
Vue.use(VueRouter)

//创建路由器的构造对象
export default new VueRouter({
  //配置所有路由，路由器组件在pages文件夹
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login,
      //meta不写，则为空对象
      /*meta: {
        showFooter: true
      }*/
    },
    //自动跳转路由
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
