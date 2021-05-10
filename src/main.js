import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

//通过vue实例来定义一个事件总线
Vue.prototype.$bus=new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
