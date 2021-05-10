<template>
  <div>
    <NavBar>
      <template v-slot:left>
        <div @click="backClick">
          <img src="~assets/img/common/back.svg" alt="" />
        </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <div
            v-for="(item, index) in titles"
            :key="index"
            @click="itemClick(index)"
            :class="{ active: index == currentIndex }"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </NavBar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/Navbar";
export default {
  name: "Detail",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('DetailNavItemClick',index)
    },
    backClick() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.title {
  font-size: 13px;
  display: flex;
}
.title div {
  flex: 1;
}
.active {
  color: var(--color-tint);
}
.left div{
    height: 44px;
}
.left img{
    margin-top: 12px;
}
</style>