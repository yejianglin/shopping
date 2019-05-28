<!--待收货订单内容-->
<template>
  <div class="waitreciveordercontent">
    <div class="waitreciveordercontent-box" v-for="(itemList,index) in shopList" :key="index">
      <div class="waitreciveordercontent-shop" v-for="(itemMember,index) in itemList.shopMember" :key='index' @click="goOrderDetail()">
        <div class="waitreciveordercontent-shop-box">
          <img class="waitreciveordercontent-shop-img" :src="itemMember.shopImg" />
        </div>
        <div class="waitreciveordercontent-shop-detail">
          <span>{{itemMember.shopName}}</span>
          <div class="waitreciveordercontent-shop-detail-price">
            <div class="detail-price-box">
              <span class="detail-price-box-present">{{itemMember.shopPrice}}</span>
            </div>
            <div class="waitreciveordercontent-shop-number">
              <span>x{{itemMember.shopCount}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="waitreciveordercontent-compute">
        <span class="waitreciveordercontent-compute-text">总计1件商品,实付款&nbsp;</span>
        <span class="waitreciveordercontent-compute-price">￥100</span>
      </div>
      <div class="waitreciveordercontent-status">
        <div class="waitreciveordercontent-status-box">
          <span class="waitreciveordercontent-status-box-logistics" @click="goShip()">查看物流</span>
          <span class="waitreciveordercontent-status-box-recive">确认收货</span>
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
      goShip(){
        this.$router.push({name:'ShipInformation',params:{}})
      },
      goOrderDetail(){
        this.$router.push({name:'OrderDetail',params:{}})
      },
    }
  }
</script>

<style scoped lang="less">
  .waitreciveordercontent{
    width: 100%;
    display: flex;
    flex-direction: column;

  }
  .waitreciveordercontent-title{
    width: 100%;
    height:50px;
    line-height: 50px;
    border-bottom:gainsboro solid 1px;
  }
  .waitreciveordercontent-title-text{
    margin-left: 27px;
  }
  .waitreciveordercontent-box{
    background-color: white;
    margin-top: 10px;
  }
  .waitreciveordercontent-shop{
    width: 92%;
    display: flex;
    padding: 4% 4% 4% 4%;
    border-bottom: gainsboro 1px solid;
  }
  .waitreciveordercontent-shop-img{
    width: 120px;
    height: 120px;
  }
  .waitreciveordercontent-shop-detail{
    margin-left: 4%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
  }
  .waitreciveordercontent-shop-detail-price{
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
  .waitreciveordercontent-shop-number{
    position: absolute;
    right: 20px;
    color: #999999;
  }
  .waitreciveordercontent-compute{
    width:100%;
    height: 40px;
    line-height: 40px;
    border-bottom: gainsboro solid 1px;
  }
  .waitreciveordercontent-compute-text{
    position: absolute;
    right: 70px;
    font-size: 12px;
    color: #999999;

  }
  .waitreciveordercontent-compute-price{
    position: absolute;
    right: 20px;
  }
  .waitreciveordercontent-status{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
  }
  .waitreciveordercontent-status-box{
    position: absolute;
    right: 15px;
  }
  .waitreciveordercontent-status-box-logistics{
    padding: 4px 8px 4px 8px;
    border: #333333 solid 1px;
    font-size: 12px;
  }
  .waitreciveordercontent-status-box-recive{
    padding: 4px 8px 4px 8px;
    border:#FF6C6C solid 1px;
    color: #FF6C6C;
    font-size: 12px;
  }

</style>
