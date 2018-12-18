import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Msg from './plugins/Msg'

Vue.config.productionTip = false
// 加载Msg插件
Vue.use(Msg)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
