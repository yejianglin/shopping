<!--已完成订单头部-->
<template>
  <div class="completeordercontent">
    <div class="completeordercontent-box"  v-for="(itemList,index) in shopList" :key="index">
      <div class="completeordercontent-shop" v-for="(itemMember,index) in itemList.shopMember" :key='index' @click="goOrderDetail()">
        <div class="completeordercontent-shop-box">
          <img class="completeordercontent-shop-img" :src="itemMember.shopImg" />
        </div>
        <div class="completeordercontent-shop-detail">
          <span>{{itemMember.shopName}}</span>
          <div class="completeordercontent-shop-detail-price">
            <div class="detail-price-box">
              <span class="detail-price-box-present">{{itemMember.shopPrice}}</span>
            </div>
            <div class="completeordercontent-shop-number">
              <span>x{{itemMember.shopCount}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="completeordercontent-compute">
        <span class="completeordercontent-compute-text">总计1件商品,实付款&nbsp;</span>
        <span class="completeordercontent-compute-price">￥100</span>
      </div>
      <div class="completeordercontent-status">
        <div class="completeordercontent-status-box">
          <span class="completeordercontent-status-box-onceagain">再次购买</span>
          <span class="completeordercontent-status-box-refund" @click="goRefund()">退款</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "waitpayordercontent",
    data(){
      return{
        shopList:[
          {
            shopMember: [
              {
                shopImg: '../../../.././static/images/shop.png',
                shopName: '商品名称',
                shopPrice: 100,
                shopCount: 1,
              },
            ],
          },
          {
            shopMember: [
              {
                shopImg: '../../../.././static/images/shop.png',
                shopName: '商品名称',
                shopPrice: 100,
                shopCount: 1,
              },
              {
                shopImg: '../../../.././static/images/shop.png',
                shopName: '商品名称',
                shopPrice: 100,
                shopCount: 1,
              },
            ],
          }
        ]
      }
    },
    methods:{
      goRefund(){
        this.$router.push({name:'Refund',params:{}})
      },
      goOrderDetail(){
        this.$router.push({name:'OrderDetail',params:{}})
      }
    }
  }
</script>

<style scoped lang="less">
  .completeordercontent{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .completeordercontent-title{
    width: 100%;
    height:50px;
    line-height: 50px;
    border-bottom:gainsboro solid 1px;
  }
  .completeordercontent-title-text{
    margin-left: 27px;
  }
  .completeordercontent-box{
    background-color: white;
    margin-top: 10px;
  }
  .completeordercontent-shop{
    width: 92%;
    display: flex;
    padding: 4% 4% 4% 4%;
    border-bottom: gainsboro 1px solid;
  }
  .completeordercontent-shop-img{
    width: 120px;
    height: 120px;
  }
  .completeordercontent-shop-detail{
    margin-left: 4%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
  }
  .completeordercontent-shop-detail-price{
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
  .completeordercontent-shop-number{
    position: absolute;
    right: 20px;
    color: #999999;
  }
  .completeordercontent-compute{
    width:100%;
    height: 40px;
    line-height: 40px;
    border-bottom: gainsboro solid 1px;
  }
  .completeordercontent-compute-text{
    position: absolute;
    right: 70px;
    font-size: 12px;
    color: #999999;

  }
  .completeordercontent-compute-price{
    position: absolute;
    right: 20px;
  }
  .completeordercontent-status{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
  }
  .completeordercontent-status-box{
    position: absolute;
    right: 15px;
  }
  .completeordercontent-status-box-onceagain{
    padding: 4px 8px 4px 8px;
    border: #333333 solid 1px;
    font-size: 12px;
  }
  .completeordercontent-status-box-refund{
    padding: 4px 8px 4px 8px;
    border:#FF6C6C solid 1px;
    color: #FF6C6C;
    font-size: 12px;
  }

</style>

