import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.filter('to-lowercase', function (value) { 
    return value.toLowerCase();
 });