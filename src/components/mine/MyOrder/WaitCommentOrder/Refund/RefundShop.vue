<!--退款商品-->
<template>
    <div class="refundshop">
      <div class="refundshop-title">
        <span class="refundshop-title-text">商品信息</span>
      </div>
      <div class="refundshop-shop">
        <div class="refundshop-shop-box">
          <img class="refundshop-shop-img" :src="shopList.shopImg"/>
        </div>
        <div class="refundshop-shop-detail">
          <span>{{shopList.shopName}}</span>
          <div class="refundshop-shop-detail-price">
            <div class="detail-price-box">
              <span class="detail-price-box-present">￥{{shopList.shopPrice}}</span>
            </div>
            <div class="refundshop-shop-number">
              <span>x&nbsp;{{shopList.shopCount}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "refundshop",
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

<style scoped lang="less">
  .refundshop{
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
  }
  .refundshop-title{
    width: 100%;
    height:50px;
    line-height: 50px;
    border-bottom:gainsboro solid 1px;
  }
  .refundshop-title-text{
    margin-left: 27px;
  }
  .refundshop-shop{
    width: 92%;
    display: flex;
    margin: 4% 4% 4% 4%;
  }
  .refundshop-shop-img{
    width: 100px;
    height: 100px;
  }
  .refundshop-shop-detail{
    margin-left: 4%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
  }
  .refundshop-shop-detail-price{
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
  .refundshop-shop-number{
    position: absolute;
    right: 20px;
    color: #999999;
  }
</style>
