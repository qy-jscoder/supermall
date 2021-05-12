//封装Toast插件
import Toast from './Toast'
const obj={}
//自定义自带的install函数内的内容
obj.install=function(Vue){
    const toastConstructor=Vue.extend(Toast)

    const toast=new toastConstructor()

    toast.$mount(document.createElement('div'))

    document.body.appendChild(toast.$el)

    Vue.prototype.$toast=Toast
}


export default obj