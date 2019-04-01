// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'bootstrap'
import 'vue-loading-overlay/dist/vue-loading.css'

import App from './App'
import router from './router'
import './bus'
import CurrencyFilter from './filters/currency'
 
Vue.use(VueAxios, axios)
Vue.component('Loading' , Loading)
Vue.filter('currency', CurrencyFilter)

axios.defaults.withCredentials = true
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

//處理 使用網址router 可以無需驗證就登入管理頁面的問題

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){
    const api = `${process.env.APIPATH}/api/user/check`;
    //因為運行環境不在vue之下 直接取用import當中的axios
    axios.post(api).then(response => {
        console.log(response.data)
        if(response.data.success){
          // 如果處於登入狀態,就前往to的頁面
          next();
        }else{
          // 如果未登入,就導向登入頁面
          next({
            path:'/login'
          });
        }
    });
  }else{
    next()
  }
})
