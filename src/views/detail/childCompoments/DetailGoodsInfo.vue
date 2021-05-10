<template>
  <div v-if="Object.keys(detailInfo).length!=0" class="goodsInfo">
      <div class="infoDesc clear-fix">
          <div class="start"></div>
          <div class="desc">{{detailInfo.desc}}</div>
          <div class="end"></div>
      </div>
      <div class="infoKey">{{detailInfo.detailImage[0].key}}</div>
      <div class="infoList">
          <img v-for="(item, index) in detailInfo.detailImage[0].list" 
          :key="index"
          :src="item" 
          @load="imgLoad">
      </div>
  </div>
</template>
<script>
    export default{
        name:"DetailGoodsInfo",
        props:{
            detailInfo:{
                type:Object,

            }
        },
        data(){
            return {
                counter:0,
                imagesLength:0
            }
        },
        methods:{
            //因为在better-scroll插件中，要计算内容区的高德
            //然而，图片加载需要时间，可能会在页面加载完后才加载好图片
            //所以，要在图片全部加载完之后，再发射事件，让父组件刷新一次
            //为了不作多余的发射事件，所以要计算图片个数，在图片全部加载完只要发射一次
            imgLoad(){
                if(++this.counter==this.imagesLength){
                    this.$emit('imgGoodsLoad')
                }
            }
        },
        //监听属性的变化
        watch:{
            detailInfo() {
                this.imagesLength=this.detailInfo.detailImage[0].list.length
            }
        }
    }
</script>
<style scoped>
.goodsInfo {
    padding: 10px 0;
    border-bottom: 5px solid #f2f5f8;
}
.goodsInfo .infoDesc{
     padding: 20px 10px;
}
.start,.end{
    position: relative;
    width: 6px;
    height: 6px;
    background-color: #222;
}
.start::after,.end::before {
      content: "";
      position: absolute;
      top: 100%;
      width: 100px;
      height: 2px;
      background-color: #c3c4c4;
      transform: translateY(-100%);
}
.start{
    margin-left:10px;
}
.end{
    margin-right:10px;
}
.start::after{
    left:100%;
}
.end::before{
    right: 100%;
}
.end{
    float: right;
    margin-top: 10px;
}
.desc{
    margin-left:10px;
    margin-top: 10px;
    font-size:15px;
}
.infoKey{
    margin-left: 20px;
    color:#222;
    margin-top:-10px;
    font-size:17px;
    margin-bottom: 10px;
}



.goodsInfo .infoList img{
    width: 100%;
}
</style>