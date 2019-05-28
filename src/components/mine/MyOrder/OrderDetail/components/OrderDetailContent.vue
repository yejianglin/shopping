<!--订单详情内容-->
<template>
  <div class="orderdetailcontent">
    <div class="orderdetailcontent-title">
      <span class="orderdetailcontent-title-text">退款商品</span>
    </div>
    <div class="orderdetailcontent-shop">
      <div class="orderdetailcontent-shop-box">
        <img class="orderdetailcontent-shop-img" :src="shopList.shopImg"/>
      </div>
      <div class="orderdetailcontent-shop-detail">
        <span>{{shopList.shopName}}</span>
        <div class="orderdetailcontent-shop-detail-price">
          <div class="detail-price-box">
            <span class="detail-price-box-present">￥{{shopList.shopPrice}}</span>
          </div>
          <div class="orderdetailcontent-shop-number">
            <span>x&nbsp;{{shopList.shopCount}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "OrderDetailContent",
      data(){
        return{
          shopList:{
            shopName:'商品名称',
            shopImg:'../../../static/images/shop.png',
            shopPrice:289,
            shopCount:3
          }
        }
      }
    }
</script>

<style scoped>
  .orderdetailcontent{
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
  }
  .orderdetailcontent-title{
    width: 100%;
    height:50px;
    line-height: 50px;
    border-bottom:gainsboro solid 1px;
  }
  .orderdetailcontent-title-text{
    margin-left: 27px;
  }
  .orderdetailcontent-shop{
    width: 92%;
    display: flex;
    margin: 4% 4% 4% 4%;
  }
  .orderdetailcontent-shop-img{
    width: 100px;
    height: 100px;
  }
  .orderdetailcontent-shop-detail{
    margin-left: 4%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
  }
  .orderdetailcontent-shop-detail-price{
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
  }
  .detail-price-box-present{
    margin: 0 0 4% 0;
  }
  .detail-price-box{
    display:flex;
    flex-direction: column;
  }
  .detail-price-box-present{
    font-size: 18px;
    color: #FB5651;
  }
  .orderdetailcontent-shop-number{
    position: absolute;
    right: 20px;
    color: #999999;
  }
</style>
