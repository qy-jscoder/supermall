<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
  name: "Scroll",
  props:{
    //设置实时监听
    probeType:{
      type:Number,
      default:0
    },
    pullUpload:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    //创建better-scroll对象
    this.scroll = new Bscroll(this.$refs.wrapper,{
        probeType:this.probeType,
        click:true,
        pullUpLoad:this.pullUpload
    });
    //监听滚动的位置
    this.scroll.on('scroll',position=>{
      //将自定义事件发送到父组件中
      this.$emit('scroll',position)
    }),
    //监听上拉事件，触发一次加载更多
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullup')
    })
  },
  methods: {
      //将该回到顶部函数封装起来，其设置默认值为500
      scrollToself(x,y,time=500){
          this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      },
      refreshImage(){
        //scroll中内置的方法
        this.scroll.refresh()
      }
  },
};
</script>
<style scoped>
</style>