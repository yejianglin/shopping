<!--所有订单内容部分-->
<template>
  <div class="allordercontent" >
    <div class="allordercontent-box" v-for="(itemList,index) in shopList" :key="index">
      <div class="allordercontent-shop" v-for="(itemMember,index) in itemList.shopMember" :key='index' @click="goOrderDetail()">
        <div class="allordercontent-shop-box">
          <img class="allordercontent-shop-img" :src="itemMember.shopImg" />
        </div>
        <div class="allordercontent-shop-detail">
          <span>{{itemMember.shopName}}</span>
          <div class="allordercontent-shop-detail-price">
            <div class="detail-price-box">
              <span class="detail-price-box-present">{{itemMember.shopPrice}}</span>
            </div>
            <div class="allordercontent-shop-number">
              <span>x{{itemMember.shopCount}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="allordercontent-compute">
        <span class="allordercontent-compute-text">总计1件商品,实付款&nbsp;</span>
        <span class="allordercontent-compute-price">￥100</span>
      </div>
      <div class="allordercontent-status">
        <div class="allordercontent-status-box">
          <span class="allordercontent-status-box-logistics" @click="checkShip()">查看物流</span>
          <span class="allordercontent-status-box-recive">确认收货</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "allordercontent",
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
        checkShip(){
          this.$router.push({name:'ShipInformation',params:{arg:'all'}})
        },
        goOrderDetail(){
          this.$router.push({name:'OrderDetail',params:{}})
        }
      }
    }
</script>

<style scoped lang="less">
  .allordercontent{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .allordercontent-title{
    width: 100%;
    height:50px;
    line-height: 50px;
    border-bottom:gainsboro solid 1px;
  }
  .allordercontent-title-text{
    margin-left: 27px;
  }
  .allordercontent-box{
    background-color: white;
    margin-top: 10px;
  }
  .allordercontent-shop{
    width: 92%;
    display: flex;
    padding: 4% 4% 4% 4%;
    border-bottom: gainsboro 1px solid;
  }
  .allordercontent-shop-img{
    width: 120px;
    height: 120px;
  }
  .allordercontent-shop-detail{
    margin-left: 4%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
  }
  .allordercontent-shop-detail-price{
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
  .allordercontent-shop-number{
    position: absolute;
    right: 20px;
    color: #999999;
  }
  .allordercontent-compute{
    width:100%;
    height: 40px;
    line-height: 40px;
    border-bottom: gainsboro solid 1px;
  }
  .allordercontent-compute-text{
    position: absolute;
    right: 70px;
    font-size: 12px;
    color: #999999;

  }
  .allordercontent-compute-price{
    position: absolute;
    right: 20px;
  }
  .allordercontent-status{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
  }
  .allordercontent-status-box{
    position: absolute;
    right: 15px;
  }
  .allordercontent-status-box-logistics{
    padding: 4px 8px 4px 8px;
    border: #333333 solid 1px;
    font-size: 12px;
  }
  .allordercontent-status-box-recive{
    padding: 4px 8px 4px 8px;
    border: #FF6C6C solid 1px;
    color: #FF6C6C;
    font-size: 12px;
  }
</style>
