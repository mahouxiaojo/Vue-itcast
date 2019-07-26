import Vue from 'vue'
import Router from 'vue-router'
// 引入登录组件
import Login from '@/views/Login'
// 引入登录成功组件
import Home from '@/views/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }]
})
