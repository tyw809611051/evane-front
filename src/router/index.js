import Vue from 'vue'
import Router from 'vue-router'

//  引入组件
import Home from '@/page/home/home'
import Login from '@/page/login.vue'
import home from '@/page/home.vue'
import NotFound from '@/page/404.vue'
import MenuTable from '@/page/menu1/menuTab.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '导航一',
      component: home,
      iconCls: 'el-icon-message',
      children: [{
        path: '/menutab',
        component: MenuTable,
        name: 'Tab'
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/404',
      component: NotFound,
      name: 'notFound',
      hidden: true
    }
  ]
})
