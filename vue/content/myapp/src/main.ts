import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import Top from './components/Top.vue'
import MAP from './components/MAP-app.vue'
import VueRouter from 'vue-router'
import AR from './components/AR-app.vue'

Vue.use(VueRouter)
 
const router = new VueRouter({
  mode:"history",
  routes:[
    {
    path: '/',
    name: 'Home',
    component: Top
  },
  {
    path: '/map',
    name: 'map',
    component: MAP
  },
  {
    path: '/ar',
    name: 'ar',
    component: AR
  },
]
})


new Vue({
  store,
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')