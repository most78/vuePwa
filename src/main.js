import Vue from 'vue'
import CoApp from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#codit',
  router,
  template: '<co-app/>',
  components: { CoApp },
  data: {

  }
})
