import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'

import Top from './components/Top'
import MAP from './components/MAP-app'
import VueRouter from 'vue-router'

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
]
})


new Vue({
  store,
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')