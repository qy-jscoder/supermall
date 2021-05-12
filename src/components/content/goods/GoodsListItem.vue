<template>
  <div class="goods-list-item" @click="handleSkipDetail(itemgood.iid)">
    <img v-lazy="imgPath" alt="" @load="handleGoodsListImg" />
    <div class="goods-list-item-info">
      <p class="info-title">{{ itemgood.title }}</p>
      <span class="info-price">¥{{ itemgood.price }}</span>
      <span class="info-collect">{{ itemgood.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemgood: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    imgPath() {
      return this.itemgood.img || this.itemgood.image || this.itemgood.show.img;
    },
  },
  methods: {
    handleGoodsListImg() {
      this.$bus.$emit("itemImageLoad");
    },
    handleSkipDetail(iid) {
      this.$router.push("/detail/" + iid);
    },
  },
};
</script>
<style scoped>
.goods-list-item {
  width: 47%;
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
}
.goods-list-item img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 5px;
}
.goods-list-item-info .info-title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 3px;
  font-weight: 700;
}
.goods-list-item-info .info-price {
  margin-right: 20px;
  color: var(--color-high-text);
}
.goods-list-item-info .info-collect {
  position: relative;
}
.goods-list-item-info .info-collect::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: -15px;
  height: 15px;
  width: 15px;
  margin: auto 0;
  background-image: url("~assets/img/common/collect.svg");
  background-size: 100% 100%;
}
</style>
