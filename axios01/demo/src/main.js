import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button,ContactList,ContactEdit  } from 'vant'

Vue.config.productionTip = false
Vue.use(Button,ContactList,ContactEdit )

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
