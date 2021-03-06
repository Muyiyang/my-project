// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
/* import App from './App' */
import todoList from './todoList'
import yomail from './yomail'
import './jquery.min.js'
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/bootstrap/js/bootstrap.min'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    yomail
  },
  template: '<yomail/>'
})
/*new Vue({
  el: '#example',
  components: {
	example
  },
  template: '<example/>'
})*/
