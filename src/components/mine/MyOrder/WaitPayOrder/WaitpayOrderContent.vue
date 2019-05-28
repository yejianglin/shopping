<!--待支付订单内容-->
<template>
  <div class="waitpayordercontent">
    <div class="waitpayordercontent-box" v-for="(itemList,index) in shopList" :key="index">
      <div class="waitpayordercontent-shop" v-for="(itemMember,index) in itemList.shopMember" :key='index' @click="goOrderDetail()">
        <div class="waitpayordercontent-shop-box">
          <img class="waitpayordercontent-shop-img" :src="itemMember.shopImg" />
        </div>
        <div class="waitpayordercontent-shop-detail">
          <span>{{itemMember.shopName}}</span>
          <div class="waitpayordercontent-shop-detail-price">
            <div class="detail-price-box">
              <span class="detail-price-box-present">{{itemMember.shopPrice}}</span>
            </div>
            <div class="waitpayordercontent-shop-number">
              <span>x{{itemMember.shopCount}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="waitpayordercontent-compute">
        <span class="waitpayordercontent-compute-text">总计1件商品,实付款&nbsp;</span>
        <span class="waitpayordercontent-compute-price">￥100</span>
      </div>
      <div class="waitpayordercontent-status">
        <div class="waitpayordercontent-status-box">
          <span class="waitpayordercontent-status-box-logistics">立即支付</span>
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
      goOrderDetail(){
        this.$router.push({name:'OrderDetail',params:{}})
      }
    }

  }
</script>

<style scoped lang="less">
  .waitpayordercontent{
    width: 100%;
    display: flex;
    flex-direction: column;

  }
  .waitpayordercontent-title{
    width: 100%;
    height:50px;
    line-height: 50px;
    border-bottom:gainsboro solid 1px;
  }
  .waitpayordercontent-title-text{
    margin-left: 27px;
  }
  .waitpayordercontent-box{
    background-color: white;
    margin-top: 10px;
  }
  .waitpayordercontent-shop{
    width: 92%;
    display: flex;
    padding: 4% 4% 4% 4%;
    border-bottom: gainsboro 1px solid;
  }
  .waitpayordercontent-shop-img{
    width: 120px;
    height: 120px;
  }
  .waitpayordercontent-shop-detail{
    margin-left: 4%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
  }
  .waitpayordercontent-shop-detail-price{
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
  .waitpayordercontent-shop-number{
    position: absolute;
    right: 20px;
    color: #999999;
  }
  .waitpayordercontent-compute{
    width:100%;
    height: 40px;
    line-height: 40px;
    border-bottom: gainsboro solid 1px;
  }
  .waitpayordercontent-compute-text{
    position: absolute;
    right: 70px;
    font-size: 12px;
    color: #999999;

  }
  .waitpayordercontent-compute-price{
    position: absolute;
    right: 20px;
  }
  .waitpayordercontent-status{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
  }
  .waitpayordercontent-status-box{
    position: absolute;
    right: 15px;
  }
  .waitpayordercontent-status-box-logistics{
    padding: 4px 8px 4px 8px;
    border:#FF6C6C solid 1px;
    color: #FF6C6C;
    font-size: 12px;
  }

</style>
