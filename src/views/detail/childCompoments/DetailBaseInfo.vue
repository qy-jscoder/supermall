<template>
  <div v-if="Object.keys(goods).length!=0" class="baseInfo">
      <div class="infoTitle">{{goods.title}}</div>
      <div class="infoPrice">
          <span class="nPrice">{{goods.newPrice}}</span>
          <span class="oPrice">{{goods.oldPrice}}</span>
          <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
      </div>
      <div class="infoOther">
          <span>{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <div class="infoService">
          <span class="infoServiceItem" v-for="index in goods.services.length-1" :key="index">
              <img v-lazy="goods.services[index-1].icon" >
              <span>{{goods.services[index-1].name}}</span>
          </span>
      </div>
  </div>
</template>
<script>
    export default{
        name:"DetailBaseInfo",
        props:{
            goods:{
                type:Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>
<style scoped>
    .baseInfo{
        margin-top:15px;
        padding: 0 8px ;
        color:#999;
        border-bottom: 5px solid #f2f5f8;;
    }
    .infoTitle{
        color:#222;

    }
    .infoPrice{
        margin-top:10px;
    }
    .infoPrice .nPrice{
        font-size:24px;
        color:var(--color-high-text);

    }
    .infoPrice .oPrice{
        font-size:13px;
        margin-left:5px;
        text-decoration: line-through;
    }
    .infoPrice .discount{
        font-size:12px;
        padding: 2px 5px;
        color:#fff;
        background-color: var(--color-high-text);
        border-radius: 8px;
        margin-left: 5px;
        /*使元素上浮，使用相对定位即可*/
        position: relative;
        top:-8px;
    }

    .infoOther{
        margin-top:15px;
        line-height: 30px;
        display: flex;
        font-size:13px;
        border-bottom: 1px solid rgba(100,100,100,.1);
        justify-content: space-between;
    }
    .infoService{
        display: flex;
        justify-content: space-between;
        line-height: 60px;
    }
    .infoServiceItem img{
        width: 14px;
        height: 14px;
        position: relative;
        top:2px;

    }
    .infoServiceItem span{
        font-size:13px;
        color:#333;
    }
</style>