<template>
  <Scroll class="content" :pullUpload='true'>
    <div class="category-title-list">
      <div
        class="category-title-list-item"
        v-for="(item, index) in titleList"
        :key="index"
        @click="handleCategoryTitle(index, item.maitKey, item.miniWallkey)"
        :class="{ active: currentIndex === index }"
      >
        {{ item.title }}
      </div>
    </div>
  </Scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titleList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Scroll,
  },
  methods: {
    handleCategoryTitle(index, maitKey, miniWallkey) {
      this.currentIndex = index;
      this.$emit("handleCategoryTitle", maitKey, miniWallkey);
    },
  },
};
</script>
<style scoped>
.content {
  height: 100vh;
}
.content .category-title-list {
  width: 100px;
  text-align: center;
  background-color: #f6f6f6;
  font-size: 14px;
  height: 100%;
}
.content .category-title-list .category-title-list-item {
  padding: 10px 0;
}
.active {
  border-left: 3px solid var(--color-high-text);
  background-color: #fff;
  color: var(--color-high-text);
}
</style>