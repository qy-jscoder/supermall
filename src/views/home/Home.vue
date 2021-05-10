<template>
  <div id="home" class="wrapper">
    <navbar class="homenav-color">
      <template v-slot:center> 购物街 </template>
    </navbar>
    <TabControl
      :titles="titles"
      @tabClick="tabClick"
      ref="tabControlOffsetTop1"
      class="tabControltop"
      v-show="isTabFixed"
    ></TabControl>
    <!--不加冒号，会将属性值认为是字符串-->
    <Scroll
      class="content"
      ref="scrolldom"
      :probeType="3"
      @scroll="contentControl"
      :pullUpload="true"
      @pullup="loadmore"
    >
      <HomeSwiper
        :banners="banners"
        class="homeswiper"
        @swiperImageLoad="swiperImageLoad"
      ></HomeSwiper>
      <!--被绑定的属性是子组件中的props中定义的属性，
    赋值给该属性的值是当前组件定义的变量-->
      <RecommendView :recommends="recommends"></RecommendView>
      <FeatureView></FeatureView>
      <TabControl
        :titles="titles"
        @tabClick="tabClick"
        ref="tabControlOffsetTop2"
      ></TabControl>
      <GoodsList :goods="showGoods"></GoodsList>
    </Scroll>

    <BackTop @click.native="backClick" v-show="isShowBackTop"></BackTop>
  </div>
</template>
<script>
import navbar from "components/common/navbar/Navbar";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";
export default {
  name: "Home",
  components: {
    navbar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      //预先定义变量，用来存放请求到的商品数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
      scrollDefinePosition:1000
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  //创建完vue实例，就立即发送请求
  created() {
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    //防抖操作
    this.Homeimagelist();
    //获取tabcontrol的offsetTop
    this.tabOffsetTop = this.$refs.tabControlOffsetTop2.$el.offsetTop;
  },
  methods: {
    /*
    网络请求相关的方法
    */
    //对数据请求的封装
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        //此处要将请求到的数据存储起来，赋值给一个变量来使用
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    //获取商品详情
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scrolldom.finishPullUp();
      });
    },
    //根据子组件中点击的index来显示对应的商品详情
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControlOffsetTop1.currentIndex = index;
      this.$refs.tabControlOffsetTop2.currentIndex = index;
    },
    backClick() {
      //调用scroll组件中的scrollToself方法
      this.$refs.scrolldom.scrollToself(0, 0);
    },
    //监听滚动位置相关的函数
    contentControl(position) {
      //backtop显示隐藏控制
      this.isShowBackTop = -position.y > this.scrollDefinePosition;
      //判断是否滚动的位置需要吸顶
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    loadmore() {
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControlOffsetTop2.$el.offsetTop;
    },
    Homeimagelist() {
      const refresheveryImage = debounce(
        this.$refs.scrolldom.refreshImage,
        500
      );
      //通过事件总线监听GoodsListItem传来的事件
      this.$bus.$on("itemImageLoad", () => {
        refresheveryImage();
      });
    }
    
  },
};
</script>
<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.homenav-color {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1; */
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tabControltop {
  position: relative;
  z-index: 9;
}
</style>