import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
axios.defaults.baseURL = 'https://cnodejs.org/api/v1'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
import { Button,Pagination,Backtop,Card} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Button)
Vue.use(Backtop)
Vue.use(Pagination)
Vue.use(Card)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
