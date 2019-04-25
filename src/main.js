// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import $ from 'jquery'
import 'bootstrap3/dist/css/bootstrap.css';
import 'bootstrap3/dist/js/bootstrap.js';
import axios from 'axios'
import VueAxios from 'vue-axios'
require('./mock');
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueAxios, axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
