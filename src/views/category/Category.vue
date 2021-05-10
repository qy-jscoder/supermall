<template>
  <div class="wrapper" ref="aaa">
    <ul class="content">
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default{
  name:"Category",
  data(){
    return {
      scroll:null
    }
  },
  mounted() {
    this.scroll=new BScroll('.wrapper',{
      probeType:3,
      pullUpLoad:true
    })


  },
  components:{
    BScroll
  }
}
</script>
<style scoped>
.wrapper{
  height: 300px;
  background-color: tomato;
  overflow: hidden;
}
</style>