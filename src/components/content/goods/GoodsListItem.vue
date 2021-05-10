<template>
  <div class="goods-item" @click="itemClicktoId">
    <img :src="showImage" alt=""  @load="imageLoad"/>
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  //详情信息页的推荐部分，没有show，所以用计算属性来处理
  computed:{
    showImage(){
      return this.goodsItem.image||this.goodsItem.show.img
    }
  },
  methods:{
    //加载完一个图片就会执行
    imageLoad(){  
        this.$bus.$emit('itemImageLoad')
        
        this.$bus.$emit('detailimgLoad')
        
    },
    //点击商品跳转到详情界面，需要返回，用push
    itemClicktoId(){
      //路由跳转到对应界面，且可以返回
      this.$router.push('/detail/'+this.goodsItem.iid)
      
    }
  }
};
</script>
<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;

  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>