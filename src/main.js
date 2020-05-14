import Vue from 'vue'  //node_modules引入过来的就写模块名
import App from './App'
import router from './router' //其他如果是代码中的就需要写路径
import rem from '../config/rem'
import './assets/sass/index.scss'
import 'babel-polyfill'
import fastclick from 'fastclick'

Vue.config.productionTip = false

fastclick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
