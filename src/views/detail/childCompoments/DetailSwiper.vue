<template>
  <Swiper class="swiperheight" >
    <SwiperItem v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt="" @load="swiperImageLoad">
    </SwiperItem>
  </Swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    swiperImageLoad(){
      this.$emit('swiperLoad')
    }
  },
};
</script>
<style scoped>
.swiperheight{
    height: 300px;
    overflow: hidden;
}
</style>