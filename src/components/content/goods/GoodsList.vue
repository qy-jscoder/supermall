<template>
  <div class="goods">
      <GoodsListItem v-for="(item,index) in listItem" :key="index" :itemgood="item"></GoodsListItem>
  </div>
</template>
<script>
    import GoodsListItem from './GoodsListItem'
    export default{
        name:"GoodsList",
        props:{
            listItem:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        components:{
            GoodsListItem
        }
    }
</script>
<style scoped>
    .goods{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 2px;
    }
</style>