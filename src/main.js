import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'
import './plugins/axios.js'
import firebase from 'firebase/app'
import 'firebase/firestore'

import mixin from './mixin.js'

import VueGtag from 'vue-gtag'
import vuetify from './plugins/vuetify'
Vue.use(VueGtag, {
  config: { id: 'G-78YVENP49Q' }
})

Vue.use(VueSweetalert2)
Vue.component('ImgInputer', ImgInputer)

Vue.mixin(mixin)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: 'AIzaSyCeMFwWBMzn6Bj1CBy03clle0pE9pSIDH0',
  authDomain: 'dentalclinic-324006.firebaseapp.com',
  projectId: 'dentalclinic-324006',
  storageBucket: 'dentalclinic-324006.appspot.com',
  messagingSenderId: '900551933964',
  appId: '1:900551933964:web:ff8cf403caf88036172e29'
})

export const db = firebase.firestore()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
