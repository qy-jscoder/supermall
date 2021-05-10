<template>
  <div class="tab-bar-item" @click="btnClick">
      <div v-if="!isActive">
          <slot name="item-icon"></slot>
      </div>
      <div v-else>
          <slot name="item-icon-active"></slot>
      </div>
      <div :style="activeStyle">
          <slot name="item-text"></slot>
      </div>
  </div>
</template>
<script>
export default{
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'#d4237a'
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path)!=-1
        },
        activeStyle(){
            return this.isActive ? {color:this.activeColor}:{}
        }
    },
    //data(){
        // return {
        //     isActive:true
        // }
    //},
    methods: {
        btnClick(){
            this.$router.replace(this.path)
        }
    },
}
</script>
<style scoped>
    .tab-bar-item{
        text-align: center;
    }
    .tab-bar-item img {
        height: 24px;
        width: 24px;
        vertical-align: middle;
        margin-top: 3px;
    }

</style>