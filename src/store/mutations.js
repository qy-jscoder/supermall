export default{
    
    addGoodCounter(state,playload){
        playload.count++
    },
    addToCart(state,playload){
        playload.isActive=true
        state.cartList.push(playload)
    }
}