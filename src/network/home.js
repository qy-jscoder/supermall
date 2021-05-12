import {request} from './request'

export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}
//获取首页tabControl数据
export function getHomeGoods(type,page){
    return request({
        url:'/home/data',
        //url后的参数
        params:{
            type,
            page
        }
    })
}
export function getCategory(){
    return request({
        url:'/category'
    })
}