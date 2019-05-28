<!--商品订单-->
<template>
    <div class="shoporder">
      <div class="shoporder-title">
          <span class="shoporder-title-text">商品信息</span>
      </div>
      <div style="background-color:white;margin-bottom: 10px;" v-for="(items,index) in submitShop" :key="index">
        <div class="shoporder-shop">
          <div class="shoporder-shop-box">
            <img class="shoporder-shop-img" :src="items.shopImg" />
          </div>
          <div class="shoporder-shop-detail">
            <span>{{items.shopName}}</span>
            <div class="shoporder-shop-detail-price">
              <div class="detail-price-box">
                <span class="detail-price-box-present">￥{{items.shopPrice}}</span>
              </div>
              <div class="shoporder-shop-number">
                <span>X{{items.shopNum}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="deliverymessage">
          <div class="deliverymessage-express">
            <span class="deliverymessage-express-kind">配送方式</span>
            <span class="deliverymessage-express-shunfeng">顺丰速运</span>
          </div>
          <div class="deliverymessage-cost">
            <span class="deliverymessage-cost-text">快递费</span>
            <span class="deliverymessage-cost-money">￥{{items.freight}}</span>
          </div>
          <div class="deliverymessage-leving">
            <span class="deliverymessage-leving-text">留言</span>
            <input class="deliverymessage-leving-input" placeholder="点击给商家留言">
          </div>
          <div class="deliverymessage-tatal">
            <span class="deliverymessage-tatal-text">合计</span>
            <span class="deliverymessage-tatal-price">￥{{items.shopPrice*items.shopNum+items.freight}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "shoporder",
        data(){
          return{

          }
        },
       props:[
         "submitShop"
       ],
        mounted() {

        },
       methods:{

       }

    }
</script>

<style scoped lang="less">
   .shoporder{
     width: 100%;
     display: flex;
     flex-direction: column;
   }
   .shoporder-title{
     width: 100%;
     height:50px;
     line-height: 50px;
     border-bottom:gainsboro solid 1px;
     background-color: white;
   }
   .shoporder-title-text{
     margin-left: 27px;
   }
   .shoporder-shop{
     width: 92%;
     display: flex;
     margin: 4% 4% 4% 4%;
   }
   .shoporder-shop-img{
     width: 100px;
     height: 100px;
   }
   .shoporder-shop-detail{
     margin-left: 4%;
     display: flex;
     flex-direction:column;
     justify-content: space-between;
   }
   .shoporder-shop-detail-price{
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
   .shoporder-shop-number{
     position: absolute;
     right: 20px;
     color: #999999;
   }

   .deliverymessage{
     width:100%;
     display: flex;
     flex-direction: column;
     background-color: white;
   }
   .deliverymessage-express{
     width: 100%;
     height: 50px;
     line-height: 50px;
     display: flex;
     border-bottom: gainsboro solid 1px;
   }
   .deliverymessage-express-kind{
     position:absolute;
     left:15px;
     font-size: 14px
   }
   .deliverymessage-express-shunfeng{
     position: absolute;
     right: 15px;
     font-size: 14px;
     color:#AAAAAA
   }
   .deliverymessage-cost{
     width: 100%;
     height: 50px;
     line-height: 50px;
     display: flex;
     border-bottom: gainsboro solid 1px;
   }
   .deliverymessage-cost-text{
     position:absolute;
     left:15px;
     font-size: 14px
   }
   .deliverymessage-cost-money{
     position: absolute;
     right: 15px;
     font-size: 14px;
     color:#AAAAAA
   }
   .deliverymessage-leving{
     width: 100%;
     height: 50px;
     line-height: 50px;
     display: flex;
     border-bottom: gainsboro solid 1px;
   }
   .deliverymessage-leving-text{
     position:absolute;
     left:15px;
     font-size: 14px
   }
   .deliverymessage-leving-input{
     position: absolute;
     padding: 0 0 0 0;
     border: none;
     left:90px;
     font-size: 14px
   }
   .deliverymessage-tatal{
     width: 100%;
     height: 50px;
     line-height: 50px;
     display: flex;
     border-bottom: gainsboro solid 1px;
   }
   .deliverymessage-tatal-text{
     position:absolute;
     left:15px;
     font-size: 14px
   }
   .deliverymessage-tatal-price{
     position: absolute;
     right: 15px;
     color: red;
     font-size: 14px
   }
</style>
