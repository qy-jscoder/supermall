<template>
  <div class="cartList">
    <Scroll class="content" :pullUpload="true">
      <!-- <li v-for="(item, index) in cartList" :key="index">{{item}}</li> -->
      <CartListItem
        v-for="(item, index) in cartList"
        :key="index"
        :itemInfo="item"
      ></CartListItem>
    </Scroll>
  </div>
</template>
<script>
import Scroll from "components/common/scroll/Scroll";

import CartListItem from "./CartListItem";
import { mapGetters } from "vuex";
export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem,
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
};
</script>
<style scoped>

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 89px;
  left: 0;
  right: 0;
  
}
</style>