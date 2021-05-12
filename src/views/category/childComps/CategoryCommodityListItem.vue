<template>
  <div class="category-commodity-list-item">
    <a :href="item.link">
      <img :src="item.image" alt="" @load="handleCommodityImg" class="catelistitem" />
      <span class="spanitem"> {{ item.title }}</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    handleCommodityImg() {
      this.$bus.$emit("handleCommodityImg");
    },
  },
};
</script>
<style scoped>
.category-commodity-list-item {
  margin-right: 2px;
}
.category-commodity-list-item a {
  display: flex;
  flex-direction: column;
  width: 80px;
  text-align: center;
  font-size: 14px;
}
.catelistitem {
  display: block;
  width: 50px;
  margin: 0 auto;
}
.spanitem {
  padding: 15px 0;
}
/*# sourceMappingURL=./hh.css.map */
</style>