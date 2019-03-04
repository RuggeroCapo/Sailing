import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './router'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(VueChartkick, {
  adapter: Chart
})
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(BootstrapVue);
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

vm = new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
