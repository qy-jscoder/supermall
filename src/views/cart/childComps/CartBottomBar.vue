<template>
  <div class="cartButtonBar">
    <div class="checkArea">
      <CheckButton
        :isActive="isActiveAll"
        @click.native="controlActiveAll"
        class="check"
      ></CheckButton>
      <span>全选</span>
    </div>
    <div class="total">合计:{{ totalPrice }}</div>
    <div class="calculate" @click="calculate">去计算:({{ checkCount }})</div>
    <Toast class="detailToast" :message="message" :isShow="toastShow"></Toast>
  </div>
</template>
<script>
import CheckButton from "components/content/checkButton/CheckButton";
import { mapGetters } from "vuex";

import Toast from "components/common/toast/Toast";
export default {
  name: "CartButtonBar",
  data() {
    return {
      message: "",
      toastShow: false,
    };
  },
  computed: {
    //通过导入mapGetters来将vuex中的 getters中的数组传过来
    ...mapGetters(["cartList"]),
    //总价计算
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter((item) => {
            return item.isActive;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
      );
    },
    //计算选中的商品的数量
    checkCount() {
      return this.cartList.filter((item) => item.isActive).length;
    },
    //由购物车列表选中情况，来自动判断全选按钮是否被选中
    isActiveAll() {
      if (this.cartList.length == 0) {
        return false;
      } else {
        return !this.cartList.find((item) => !item.isActive);
      }
    },
  },
  methods: {
    //通过点击全选按钮，来决定是否全选或者都不选
    controlActiveAll() {
      // if (this.cartList.filter((item) => item.isActive).length != this.cartList.length) {
      //   for (let i in this.cartList) {
      //     this.cartList[i].isActive = true;
      //   }
      // }else{
      //   for (let i in this.cartList) {
      //     this.cartList[i].isActive = false;
      //   }
      // }
      //此处不能简化，因为该方法和isActiveAll相互影响
      //this.cartList.forEach((item) => (item.isActive = !this.isActiveAll));
      if (this.isActiveAll) {
        this.cartList.forEach((item) => (item.isActive = false));
      } else {
        this.cartList.forEach((item) => (item.isActive = true));
      }
    },
    calculate() {
      if (!this.isActiveAll) {
        this.message = "无选中商品";
        this.toastShow = true;
        setTimeout(() => {
          this.toastShow = false;
          this.message = "";
        }, 1000);
      }
    },
  },
  components: {
    CheckButton,
    Toast,
  },
};
</script>
<style scoped>
.cartButtonBar {
  display: flex;
  height: 40px;
  line-height: 40px;
  bottom: 49px;
  left: 0;
  right: 0;
  background-color: #eee;
  position: absolute;
}
.checkArea {
  display: flex;
  flex: 1;
  text-align: center;
  align-items: center;
}
.checkArea span {
  font-size: 15px;
}
.check {
  width: 18px;
  height: 18px;
  line-height: 18px;
  margin-right: 5px;
}
.total {
  flex: 1;
}
.calculate {
  background-color: red;
  color: #eee;
  flex: 1;
  text-align: center;
}
</style>