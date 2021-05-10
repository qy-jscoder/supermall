import Vue from 'vue'
import Vuex from 'vuex'
//使用插件
Vue.use(Vuex)
const store=new Vuex.store({
    state:{
        cartList:[]
    },
    mutations:{

    }
})
export default store
