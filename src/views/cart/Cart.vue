<template>
  <div id="cart">
    <NavBar class="cartnav-color">
      <template v-slot:center>购物车({{length}}) </template>
    </NavBar>
    <CartList ></CartList>
    <CartButtonBar></CartButtonBar>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

import CartButtonBar from './childComps/CartBottomBar'
import NavBar from "components/common/navbar/Navbar";
import CartList from "./childComps/CartList";
export default {
  name: "Cart",
  data(){
      return {
          
      }
  },
  computed:{
      ...mapGetters({
          length:'cartLength'
      })
  },
  components: {
    NavBar,
    CartList,
    CartButtonBar
  },
};
</script>
<style scoped>
.cartnav-color {
  background-color: var(--color-tint);
  color: #fff;
}
.cart{
    height: 100vh;
    position: relative;
}
</style>