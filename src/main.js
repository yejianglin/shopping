
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import iconfont from './assets/iconfont/iconfont.css'
import 'vant/lib/index.css'
import store from './store'
import VueClipboard from 'vue-clipboard2'



Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(VueClipboard)

new Vue({
  el: '#app',
  router,
  store,
  Vant,
  VueClipboard,
  components: { App },
  template: '<App/>',
})
