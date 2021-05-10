<template>
  <div class="recommend">
      <div v-for="(item,id) in recommends" :key="id" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>
<script>
    export default{
        name:"RecommendView",
        props:{
            recommends:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>
<style scoped>
    .recommend{
        display: flex;
        padding: 10px 0 20px;
        border-bottom: 10px solid #eee;
    }
    .recommend-item a img{
        flex: 1;
        width: 80%;
        margin-bottom: 10px;
    }
    .recommend-item{
        text-align: center;
        font-size: 12px;
    }
</style>