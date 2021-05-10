<!--此处将轮播组件抽离出来，放在一个新组件中-->
<template>
  <Swiper>
    <SwiperItem v-for="(item, id) in banners" :key="id">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad" />
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  //父传子数据
  props: {
    //此处定义的数据，要在父组件中，赋值给父组件的变量
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isload: false,
    };
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imageLoad() {
      if (!this.isload) {
        this.$emit("swiperImageLoad");
        this.isload = true;
      }
    },
  },
};
</script>

<style scoped>
</style>
