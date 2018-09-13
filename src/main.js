// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import 'alertifyjs/build/css/alertify.min.css'
import 'alertifyjs/build/css/themes/default.min.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@/assets/css/notosans-fontface.css'
import '@/assets/css/iconMoon.css'
Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    toolbar: '#2A99B7',
    card: '#3CC2C2',
    divider: '#94DEDE',

    d_cyan: '#2A99B7',
    d_green: '#09D342',
    d_orange: '#FFB600',
    d_red: '#BF0000'
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
