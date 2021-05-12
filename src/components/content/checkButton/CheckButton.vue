<template>
  <div class="checkButton" :class="{active:isActive}">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>
<script>
export default {
  name: "CheckButton",
  props: {
    isActive: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
};
</script>
<style scoped>
.checkButton {

  border-radius: 50%;
  border: 2px solid #aaa;
}
.active{
    background-color: red;
    border-color: red;
}
</style>