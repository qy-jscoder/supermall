import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import VueLazyLoad from 'vue-lazyload'

// import toast from './components/common/toast/index'

import FastClick from 'fastclick'

Vue.config.productionTip = false

//通过vue实例来定义一个事件总线
Vue.prototype.$bus=new Vue()

//安装自定义的toast
// Vue.use(toast)

//使用懒加载插件
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/holder.png')
})

//解决移动端300ms的延迟
FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

