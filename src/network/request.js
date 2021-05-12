import axios from 'axios'

export function request(config){
    const instance = axios.create({
        //想要接口的，请自己添加coderwhy老师微信购买
        //讲诚信，答应了不向外传接口
        baseURL: "http://xxxxxx/xxxxx/xxx",
        timeout: 5000
      })
      //请求拦截
      instance.interceptors.request.use(config=>{
          return config
      },err=>{

      })
      //响应拦截
      instance.interceptors.response.use(res=>{
          return res.data
      },err=>{
          console.log(err)
      })
      return instance(config)
}