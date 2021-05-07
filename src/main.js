/*
入口JS
*/
import Vue from 'vue'
import App from './App'
//注册路由1
import router from './router'

new Vue({
  el: '#app',
  render: h => h(App),
  //注册路由2
  router
})
