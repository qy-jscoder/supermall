<template>
  <div class="nav-bar">
      <!--给插槽设置样式，并设置具名插槽-->
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
</script>
<style scoped>
    .nav-bar{
        display: flex;
        line-height: 44px;
        height: 44px;
        text-align: center;
    }
    .left,.right{
        width: 60px;
    }
    .center{
        flex: 1;
    }
</style>