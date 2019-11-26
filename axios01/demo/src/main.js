import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, ContactList, Toast, ContactEdit,Popup  } from 'vant'
import Http from './service/http'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(ContactList)
Vue.use(Toast)
Vue.use(ContactEdit)
Vue.use(Popup )
Vue.prototype.$Http=Http
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
