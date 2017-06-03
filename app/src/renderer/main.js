import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import Router from 'vue-router'
import VeeValidate from 'vee-validate'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'
import moment from 'moment'

import App from './App'
import routes from './routes'

Vue.use(Electron)
Vue.use(Resource)
Vue.use(Router)
Vue.use(VeeValidate)

Vue.config.debug = true

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

//To display our timestamps in a proper way 
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(value).format('YYYY/MM/DD hh:mm');
  }
});

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app');

var eventHub = new Vue();
