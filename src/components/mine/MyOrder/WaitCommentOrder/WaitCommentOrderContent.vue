<!--带评论订单内容-->
<template>
  <div class="waitcommentordercontent">
    <div class="waitcommentordercontent-box" v-for="(itemList,index) in shopList" :key="index">
      <div class="waitcommentordercontent-shop" v-for="(itemMember,index) in itemList.shopMember" :key='index' @click="goOrderDetail()">
        <div class="waitcommentordercontent-shop-box">
          <img class="waitcommentordercontent-shop-img" :src="itemMember.shopImg" />
        </div>
        <div class="waitcommentordercontent-shop-detail">
          <span>{{itemMember.shopName}}</span>
          <div class="waitcommentordercontent-shop-detail-price">
            <div class="detail-price-box">
              <span class="detail-price-box-present">{{itemMember.shopPrice}}</span>
            </div>
            <div class="waitcommentordercontent-shop-number">
              <span>x{{itemMember.shopCount}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="waitcommentordercontent-compute">
        <span class="waitcommentordercontent-compute-text">总计1件商品,实付款&nbsp;</span>
        <span class="waitcommentordercontent-compute-price">￥100</span>
      </div>
      <div class="waitcommentordercontent-status">
        <div class="waitcommentordercontent-status-box">
          <span class="waitcommentordercontent-status-box-comment" @click="goComment()">评价</span>
          <span class="waitcommentordercontent-status-box-refund" @click="goRefund()">退款</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "waitcommentordercontent",
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
      goComment(){
        this.$router.push({name:'Comment',params:{}})
      },
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
  .waitcommentordercontent{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .waitcommentordercontent-title{
    width: 100%;
    height:50px;
    line-height: 50px;
    border-bottom:gainsboro solid 1px;
  }
  .waitcommentordercontent-title-text{
    margin-left: 27px;
  }
  .waitcommentordercontent-box{
    background-color: white;
    margin-top: 10px;
  }
  .waitcommentordercontent-shop{
    width: 92%;
    display: flex;
    padding: 4% 4% 4% 4%;
    border-bottom: gainsboro 1px solid;
  }
  .waitcommentordercontent-shop-img{
    width: 120px;
    height: 120px;
  }
  .waitcommentordercontent-shop-detail{
    margin-left: 4%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
  }
  .waitcommentordercontent-shop-detail-price{
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
  .waitcommentordercontent-shop-number{
    position: absolute;
    right: 20px;
    color: #999999;
  }
  .waitcommentordercontent-compute{
    width:100%;
    height: 40px;
    line-height: 40px;
    border-bottom: gainsboro solid 1px;
  }
  .waitcommentordercontent-compute-text{
    position: absolute;
    right: 70px;
    font-size: 12px;
    color: #999999;

  }
  .waitcommentordercontent-compute-price{
    position: absolute;
    right: 20px;
  }
  .waitcommentordercontent-status{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
  }
  .waitcommentordercontent-status-box{
    position: absolute;
    right: 15px;
  }
  .waitcommentordercontent-status-box-comment{
    padding: 4px 8px 4px 8px;
    border: #333333 solid 1px;
    font-size: 12px;
  }
  .waitcommentordercontent-status-box-refund{
    padding: 4px 8px 4px 8px;
    border:#FF6C6C solid 1px;
    color: #FF6C6C;
    font-size: 12px;
  }

</style>

