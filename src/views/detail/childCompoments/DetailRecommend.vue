<template>
    <div class="recommend">
        <div class="hot">为 您 推 荐</div>
        <!-- <goods-list :goods="recommend"></goods-list> -->
        <div class="recommend-item">
            <div v-for="(item,index) in recommend" :key="index" class="good-item">
                <img v-lazy="item.image" class="good-img" @load="imageLoad">
                <div class="good-info">
                    <p class="good-title">{{item.title}}</p> 
                    <span class="good-price">￥{{item.price}}</span>
                    <span class="good-collect">{{item.cfav}}</span>    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailRecommend',
    props:{
        recommend:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods: {
        imageLoad(){
            this.$emit('RecommendImageLoad')
        }
    },
 
}
</script>

<style scoped>
.hot{
    
    padding: 10px 10px;
    text-align: center;
}
.recommend-item{
    display:flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 3px;
}
  .good-item{
        padding-bottom: 40px;
        width: 48%;
        position: relative;
    }
    .good-img{
        width: 100%;
        border-start-end-radius: 5px;
    }
    .good-info{
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }
    .good-info p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
        }
    .good-price{
        color:var(--color-high-text);
        margin-right: 20px;
    }
    .good-collect{
        position: relative;
    }
    .good-collect::before {
    content: '';
    
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>