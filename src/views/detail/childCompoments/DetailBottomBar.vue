<template>
  <div class="bottomBar">
    <div class="barItem barLeft">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon collect"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="barItem barRight">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
        this.$emit('addCart')
    },
  },
};
</script>
<style scoped>
.bottomBar {
  height: 50px;
  background-color: #fff;
  left: 0;
  right: 0;
  display: flex;
  position: fixed;
  bottom: 0;
  text-align: center;
}
.barItem {
  flex: 1;
  display: flex;
}
.barItem > div {
  flex: 1;
}
.barLeft .text {
  font-size: 13px;
}
.barLeft .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.barLeft .service {
  background-position: 0 -54px;
}
.barLeft .shop {
  background-position: 0 -98px;
}
.barRight {
  font-size: 15px;
  color: #fff;
  line-height: 58px;
}
.barRight .cart {
  background-color: #ffe817;
  color: #333;
}
.barRight .buy {
  background-color: #f69;
}
.sportBall {
  position: absolute;
  left: 225px;
  bottom: 20px;
}
</style>