<!--每一个添加的商品信息的布局-->
<template>
  <div id="shopItem">
      <div class="itemSelector">
          <CheckButton  @click.native="ActiveController" :isActive="itemInfo.isActive"></CheckButton>
      </div>
      <div class="itemImg">
          <img v-lazy="itemInfo.image" alt="商品图片">
      </div>
      <div class="itemInfo">
          <div class="itemTitle">{{itemInfo.title}}</div>
          <div class="itemDesc">{{itemInfo.desc}}</div>
          <div class="infoBottom">
              <div class="itemPrice left">￥{{itemInfo.price}}</div>
              <div class="itemCount right">X{{itemInfo.count}}</div>
          </div>
      </div>
      
  </div>
 
</template>
<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
  name: "CartListItem",
  components: {
      CheckButton
  },
  props:{
      itemInfo:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  methods: {
      ActiveController(){
          this.itemInfo.isActive=!this.itemInfo.isActive
      }
  },
};
</script>
<style scoped>
#shopItem{
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
}
.itemSelector{
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.itemTitle,.itemDesc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
} 
.itemImg{
    padding: 5px;
}
.itemImg img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
}

.itemInfo{
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
}
.itemInfo .itemDesc{
    font-size: 14px;
    color: #666;
    margin-top: 15px;
}
.infoBottom{
    margin-top: 10px;
    position: absolute;
    bottom:10px;
    left:10px;
    right: 10px;
}
.infoBottom .itemPrice{
    color: orangered;
}

</style>