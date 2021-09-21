import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import home from './components/homePage.vue';
import category from './components/categoryPage.vue'
import VModal from 'vue-js-modal'

Vue.use(VueRouter);
Vue.use(VModal)

Vue.config.productionTip = false

const routes = [
     { path :'/',component:home},
     {path:'/category',component:category}
]

const router = new VueRouter({
  routes,
  mode : 'history'
});


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
