import Vue from 'vue'
import Router from 'vue-router'
// import home from '../page/home'
// import category from '../page/category'
// import cart from '../page/cart'
// import my from '../page/my'
//import product from '../page/product'  //使用了路由懒加载后不用这个导入了
import test from '../page/demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../page/home'),  //路由懒加载
      children: [{   //设置二级路由
        name: 'product',
        path: 'product/:id',
        component: () => import('../page/product')  
      }]
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('../page/category')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../page/cart') 
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('../page/my') 
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '*', //除配置的路由外，任意输入，跳转到指定页面
      redirect: '/'
    }
  ]
})