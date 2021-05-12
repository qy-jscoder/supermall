<template>
  <div id="category">
    <CategoryNavBar></CategoryNavBar>
    <div class="main">
      <CategoryTitleList
        :title-list="titleList"
        @handleCategoryTitle="handleCategoryTitle"
      ></CategoryTitleList>
      <Scroll class="content" ref="scroll" :pullUpload="true">
        <CategoryCommodityList :commodity-list="commodityList" />
      </Scroll>
    </div>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

import CategoryNavBar from "./childComps/CategoryNavBar";
import CategoryTitleList from "./childComps/CategoryTitleList";
import CategoryCommodityList from "./childComps/CategoryCommodityList";

import {
  getCategoryTitles,
  getCategoryMaitKey,
  getCategoryMiniWallkey,
} from "network/category";

import { debounce } from "common/utils";
export default {
  data() {
    return {
      titleList: [],
      commodityList: [],
      refresh: null,
      titles: ["综合", "新品", "销量"],
      tabControlList: [],
      type: "sell",
      miniWallkey: 0,
    };
  },
  components: {
    Scroll,
    CategoryNavBar,
    CategoryTitleList,
    CategoryCommodityList,
  },
  created() {
    this.getCategoryTitles();
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refreshImage, 500);
    this.$bus.$on("handleCommodityImg", () => {
      refresh();
    });
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
  methods: {
    getCategoryTitles() {
      getCategoryTitles().then((res) => {
        this.titleList = res.data.category.list;
        this.getCategoryMaitKey(this.titleList[0].maitKey);
        this.miniWallkey = this.titleList[0].miniWallkey;
        this.getCategoryMiniWallkey(this.miniWallkey, this.type);
      });
    },
    getCategoryMaitKey(maitKey) {
      getCategoryMaitKey(maitKey).then((res) => {
        this.commodityList = res.data.list;
      });
    },
    getCategoryMiniWallkey(miniWallkey, type) {
      getCategoryMiniWallkey(miniWallkey, type).then((res) => {
        this.tabControlList = res;
      });
    },
    handleCategoryTitle(maitKey, miniWallkey) {
      this.getCategoryMaitKey(maitKey);
      this.miniWallkey = miniWallkey;
      this.getCategoryMiniWallkey(this.miniWallkey, this.type);
    },
  },
};
</script>

<style scoped>
#category {
  position: relative;
}
#category .main {
  display: flex;
  height: calc(100vh - 93px);
  overflow: hidden;
}
#category .main .content {
  height: 100%;
}
</style>