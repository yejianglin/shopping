<!--订单总额-->
<template>
    <div class="orderdetailtotal">
       <div class="orderdetailtotal-num">
          <span>商品数量</span>
          <span>x1</span>
       </div>
       <div class="orderdetailtotal-total">
         <span>商品总额</span>
         <span>+￥123.00</span>
       </div>
       <div class="orderdetailtotal-discount">
         <span>商品优惠</span>
         <span>-￥0.00</span>
       </div>
      <div class="orderdetailtotal-express">
        <span>快递费</span>
        <span>+￥0.00</span>
      </div>
       <div class="orderdetailtotal-pay">
          <span class="orderdetailtotal-pay-text">实付款:</span>
          <span class="orderdetailtotal-pay-price">￥143.00</span>
       </div>
    </div>
</template>

<script>
    export default {
        name: "OrderDetailTotal"
    }
</script>

<style scoped>
  .orderdetailtotal{
    width:100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
  .orderdetailtotal-num{
    width: 92%;
    margin: 14px 4% 0 4%;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #777777;
  }
  .orderdetailtotal-total{
    width: 92%;
    margin: 10px 4% 0 4%;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #777777;
  }
  .orderdetailtotal-discount{
    width: 92%;
    margin: 10px 4% 0 4%;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #777777;
  }
  .orderdetailtotal-express{
    width: 92%;
    margin: 10px 4% 14px 4%;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #777777;
  }
  .orderdetailtotal-pay{
    width: 92%;
    height: 45px;
    margin: 0px 4% 0px 4%;
    line-height: 45px;
    text-align: right;
  }
  .orderdetailtotal-pay-text{
   font-size: 14px;
  }
  .orderdetailtotal-pay-price{
    font-size: 14px;
    color: #FE6E63;
  }
</style>
