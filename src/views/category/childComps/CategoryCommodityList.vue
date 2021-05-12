<template>
  <div class="category-commodity-list">
    <category-commodity-list-item
      v-for="(item, index) in commodityList"
      :item="item"
      :key="index"
      class="listItem"
    />
  </div>
</template>

<script>
import CategoryCommodityListItem from "./CategoryCommodityListItem";
export default {
  props: {
    commodityList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    CategoryCommodityListItem,
  },
};
</script>
<style scoped>
.category-commodity-list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 15px;
}
.listItem{
  flex: 1;
}
.category-commodity-list .listItem:nth-child(3n) {
  margin-right: 0;
}

</style>