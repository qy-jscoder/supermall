<template>
  <div id="detail">
    <DetailNavBar
      class="detailnav"
      @DetailNavItemClick="DetailNavItemClick"
      ref="detailnav"
    ></DetailNavBar>
    <Scroll class="content" :pullUpload="true" ref="scrolldetail" :probeType="3" @scroll="detailscroll">
      <DetailSwiper
        :topImages="topImages"
        @swiperLoad="swiperLoad"
      ></DetailSwiper>
      <DetailBaseInfo :goods="goods" ref="baseInfo"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo
        :detailInfo="detailInfo"
        @imgGoodsLoad="imgGoodsLoad"
      ></DetailGoodsInfo>
      <DetailParamInfo :paramInfo="paramInfo" ref="paramInfo"></DetailParamInfo>
      <DetailCommentInfo
        :commentInfo="commentInfo"
        ref="commentInfo"
      ></DetailCommentInfo>
      <DetailRecommend
        :recommend="recommends"
        @RecommendImageLoad="RecommendImageLoad"
        ref="recommendInfo"
      ></DetailRecommend>
      
    </Scroll>
    <DetailBottomBar @addCart="addCart"></DetailBottomBar>
    <BackTop @click.native="backClick" v-show="isShowBackTop"></BackTop>
  </div>
</template>
<script>
import DetailNavBar from "./childCompoments/DetailNavBar";
import {
  getDetail,
  GoodInfo,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail.js";
import DetailSwiper from "./childCompoments/DetailSwiper";
import DetailBaseInfo from "./childCompoments/DetailBaseInfo";
import DetailShopInfo from "./childCompoments/DetailShopInfo";
import DetailGoodsInfo from "./childCompoments/DetailGoodsInfo";
import DetailParamInfo from "./childCompoments/DetailParamInfo";
import DetailCommentInfo from "./childCompoments/DetailCommentInfo";
import DetailRecommend from "./childCompoments/DetailRecommend";
import DetailBottomBar from "./childCompoments/DetailBottomBar";
import BackTop from "components/content/backTop/BackTop";

import { debounce } from "common/utils";

import Scroll from "components/common/scroll/Scroll";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      //对于接口中的数据，应该分的详细
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTops: [],
      currentIndex:0,
      isShowBackTop: false,
      scrollDefinePosition:1000
    };
  },
  created() {
    //获取到当前详情界面的id
    this.iid = this.$route.params.iid;
    //根据iid获取详情界面数据
    getDetail(this.iid).then((res) => {
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      //创建商品信息对象
      this.goods = new GoodInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //创建店铺信息对象
      this.shop = new Shop(data.shopInfo);
      //获取商品详情信息
      this.detailInfo = data.detailInfo;
      //取出参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //取出评论的信息
      if (data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0];
      }

      //根据最新的dom，对应的数据已经加载出来，但是图片还没加载
      // this.$nextTick(() => {
      //   //不能在created中使用 会出现组件还没被创建但函数已经执行的问题
      //   //不能在mounted使用 dom已经渲染但数据可能没有完全加载 获取的值都是不准确的
      //   this.themeTops = [];
      //   this.themeTops.push(this.$refs.baseInfo.$el.offsetTop);
      //   this.themeTops.push(this.$refs.paramInfo.$el.offsetTop);
      //   this.themeTops.push(this.$refs.commentInfo.$el.offsetTop);
      //   this.themeTops.push(this.$refs.recommendInfo.$el.offsetTop);
      //   this.themeTops.push(Number.MAX_VALUE);
      // });
    });
    //取出商品详情页的推荐信息,不需要通过param来获取
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommend,
    DetailBottomBar,
    BackTop
  },
  methods: {
    swiperLoad() {
      // this.$refs.scrolldetail.refreshImage()
      this.detailRefresh();
    },
    imgGoodsLoad() {
      // this.$refs.scrolldetail.refreshImage()
      this.detailRefresh();
    },
    //防抖函数
    detailRefresh() {
      const refresh = debounce(() => {
        this.$refs.scrolldetail && this.$refs.scrolldetail.refreshImage();
      }, 200);
      refresh();
    },
    //创建各组件所在的offsetTop的数组
    getThemeTopmany() {
      this.themeTops = [];
      this.themeTops.push(0);
      this.themeTops.push(this.$refs.paramInfo.$el.offsetTop);
      this.themeTops.push(this.$refs.commentInfo.$el.offsetTop);
      this.themeTops.push(this.$refs.recommendInfo.$el.offsetTop);
      this.themeTops.push(Number.MAX_VALUE)
    },
    //详情界面推荐图片区加载
    RecommendImageLoad() {
      //每次加载图片后就refresh一次
      this.detailRefresh();
      //获取offsetTop值必须要dom和数据都渲染完成之后
      const getThemeTopa = debounce(() => {
        this.getThemeTopmany();
      }, 200);
      getThemeTopa();
    },
    //详情界面navabar点击跳转到对应区域
    DetailNavItemClick(index) {
      this.$refs.scrolldetail.scrollToself(0, -this.themeTops[index], 200);
    },
    //利用scroll组件发射来的事件，来实时监听当前滚动位置。
    //滚动到什么地方，navbar就显示对应的标题
    detailscroll(position){
      const positionY=-position.y
      
      let length=this.themeTops.length
      
      for(let i =0;i<length-1;i++){
        if(this.currentIndex!=i&&(positionY>=this.themeTops[i]&&positionY<this.themeTops[i+1])){
            this.currentIndex=i
           
            this.$refs.detailnav.currentIndex=this.currentIndex
        }
      }
      this.onTimeWatch(position)
    },
    //实时监听 当前高度
    onTimeWatch(position){
      this.isShowBackTop = -position.y > this.scrollDefinePosition;
    },
    //回到顶部按钮
    backClick() {
      //调用scroll组件中的scrollToself方法
      this.$refs.scrolldetail.scrollToself(0, 0);
    },
    addCart(){
      //获取购物车需要展示的信息
      const good={}
      good.image=this.topImages[0]
      good.title=this.goods.title
      good.desc=this.goods.desc
      good.price=this.goods.newPrice
      good.iid=this.iid
      //将商品添加到购物车里
      
    }
  }
};
</script>
<style scoped>
#detail {
  position: relative;
  height: 100vh;
  background-color: #fff;
  z-index: 9;
}
.detailnav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 94px);
}
</style>