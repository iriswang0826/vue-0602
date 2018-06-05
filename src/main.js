// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5b1347490f30f86cb1418f8a/movie-iris'
Vue.config.productionTip = false
Vue.prototype.axios = axios

/* eslint-disable no-new */
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
