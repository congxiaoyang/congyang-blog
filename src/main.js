// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import Marked from './common/marked.js'
import './assets/scss/variables.scss'
import '../static/style/reset.css'
import '../static/style/markdown.css'
import './assets/scss/public.scss'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Marked);
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
