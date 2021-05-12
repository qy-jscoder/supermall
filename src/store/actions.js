export default {
    addCartvuex(context, playload) {
        return new Promise((resolve, reject) => {
            // let oldGood = null
            // for (let item of state.cartList) {
            //     if (item.iid == playload.iid) {
            //         oldGood = item
            //     }
            // }
            let oldGood = context.state.cartList.find(item => item.iid == playload.iid)
            //如果已经存在该商品
            if (oldGood) {
                context.commit('addGoodCounter', oldGood)
                resolve('当前商品数量+1')
                //添加新商品
            } else {
                playload.count = 1
                context.commit('addToCart', playload)
                resolve('已添加到购物车')
            }
        })

    }
}