<template>
  <div class="shopInfo">
    <div class="shopTop">
      <img :src="shop.logo" alt="" />
      <span class="title">{{ shop.name }}</span>
    </div>
    <div class="shopMiddle">
      <div class="shopMiddleItem shopMiddleLeft">
        <div class="infoSells">
          <div class="sellCount">
            {{ shop.sells | sellCountFilter }}
          </div>
          <div class="sellsText">总销量</div>
        </div>
        <div class="infoGoods">
          <div class="goodsCount">
            {{ shop.goodsCount }}
          </div>
          <div class="goodsText">全部宝贝</div>
        </div>
      </div>
      <div class="shopMiddleItem shopMiddleRight">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'scoreBetter': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'betterMore': item.isBetter }">
              <span>{{item.isBetter?'高':'低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shopBottom">
        <div class="enterShop">进店逛逛</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters:{
      sellCountFilter(val){
          if(val<10000)return val
          return (val/10000).toFixed(1)+'万'
      }
  }
};
</script>
<style scoped>
    .shopInfo{
        padding: 25px 8px;
        border-bottom: 5px solid #f2f5f8;
    }
    .shopTop{
        line-height: 45px;
        display: flex;
        align-items: center;
    }
    .shopTop img{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 1px solid rbga(0,0,0,.1);
    }
    .shopTop .title{
        margin-left: 10px;
        vertical-align: middle;
    }
    .shopMiddle{
        margin-top:15px;
        display: flex;
        align-items: center;
    }
    .shopMiddleItem{
        flex: 1;
    }
    .shopMiddleLeft{
        display: flex;
        justify-content: space-evenly;
        color:#333;
        text-align: center;
        border-right: 1px solid rbga(0,0,0,.1);
    }
    .sellsCount .goodsCount{
        font-size:18px;
    }
    .sellsText,.goodsText{
        margin-top:10px;
        font-size:12px;
    }
    .shopMiddleRight{
        font-size: 13px;
        color: #333;
    }
    .shopMiddleRight table{
        width:120px;
        margin-left: 30px;
    }
    .shopMiddleRight table td{
        padding: 5px 0;

    }
    .shopMiddleRight .score{
        color: #5ea732;

    }
    .shopMiddleRight .scoreBetter{
        color: #f13e3a;
    }
    .shopMiddleRight .better span{
        background-color: #5ea732;
        color: #fff;
        text-align:center;
    }
    .shopBottom{
      display: flex;
      margin-bottom: 8px;
      margin-top: 10px;
      justify-content: center;
    }
    .shopBottom .enterShop{
      padding: 5px 40px;
      border-radius: 10px;
      font-size: 13px;
      text-align: center;
      border: 2px solid #f2f5f8;
      background-color: #f2f5f8;
      
    }
</style>