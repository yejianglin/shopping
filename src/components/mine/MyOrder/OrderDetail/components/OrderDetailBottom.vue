<!--订单详情底部-->
<template>
    <div class="OrderDetailBottom">
       <div class="OrderDetailBottom-waitpay"  v-if="true">
         <div class="OrderDetailBottom-waitpay-box">
           <span class="OrderDetailBottom-waitpay-box-cancel">取消订单</span>
           <span class="OrderDetailBottom-waitpay-box-pay">立即支付</span>
         </div>
       </div>
       <div class="OrderDetailBottom-waitrecive"  v-if="false">
         <div class="OrderDetailBottom-waitrecive-box">
           <span class="OrderDetailBottom-waitrecive-box-ship">查看物流</span>
           <span class="OrderDetailBottom-waitrecive-box-recive">确认收货</span>
         </div>
       </div>
       <div class="OrderDetailBottom-waitcomment"  v-if="false">
         <span class="OrderDetailBottom-waitcomment-del">删除订单</span>
         <div class="OrderDetailBottom-waitcomment-box">
           <span class="OrderDetailBottom-waitcomment-box-refund">申请退款</span>
           <span class="OrderDetailBottom-waitcomment-box-comment">立即评价</span>
         </div>
       </div>
       <div class="OrderDetailBottom-complete" v-if="false">
           <span class="OrderDetailBottom-complete-del">删除订单</span>
         <div class="OrderDetailBottom-complete-box">
           <span class="OrderDetailBottom-complete-box-onceagain">再次购买</span>
           <span class="OrderDetailBottom-complete-box-refund" @click="goRefund()">退款</span>
         </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: "OrderDetailBottom"
    }
</script>

<style scoped>
  /*待支付订单*/
  .OrderDetailBottom-waitpay{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    position: fixed;
    bottom: 0px;
    background-color: white;
  }
  .OrderDetailBottom-waitpay-box{
    position: absolute;
    right: 15px;
  }
  .OrderDetailBottom-waitpay-box-cancel{
    padding: 4px 8px 4px 8px;
    border: #333333 solid 1px;
    font-size: 12px;
  }
  .OrderDetailBottom-waitpay-box-pay{
    padding: 4px 8px 4px 8px;
    border:#FF6C6C solid 1px;
    color: #FF6C6C;
    font-size: 12px;
  }
  /*待收货订单*/
  .OrderDetailBottom-waitrecive{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    position: fixed;
    bottom: 0px;
    background-color: white;
  }
  .OrderDetailBottom-waitrecive-box{
    position: absolute;
    right: 15px;
  }
  .OrderDetailBottom-waitrecive-box-ship{
    padding: 4px 8px 4px 8px;
    border: #333333 solid 1px;
    font-size: 12px;
  }
  .OrderDetailBottom-waitrecive-box-recive{
    padding: 4px 8px 4px 8px;
    border:#FF6C6C solid 1px;
    color: #FF6C6C;
    font-size: 12px;
  }
  /*评价订单*/
  .OrderDetailBottom-waitcomment{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    position: fixed;
    bottom: 0px;
    background-color: white;
  }
  .OrderDetailBottom-waitcomment-box{
    position: absolute;
    right: 15px;
  }
  .OrderDetailBottom-waitcomment-del{
    font-size: 12px;
    margin-left: 20px;
  }
  .OrderDetailBottom-waitcomment-box-refund{
    padding: 4px 8px 4px 8px;
    border: #333333 solid 1px;
    font-size: 12px;
  }
  .OrderDetailBottom-waitcomment-box-comment{
    padding: 4px 8px 4px 8px;
    border:#FF6C6C solid 1px;
    color: #FF6C6C;
    font-size: 12px;
  }
   /*已完成订单*/
  .OrderDetailBottom-complete{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    position: fixed;
    bottom: 0px;
    background-color: white;
  }
  .OrderDetailBottom-complete-box{
    position: absolute;
    right: 15px;
  }
  .OrderDetailBottom-complete-del{
    font-size: 12px;
    margin-left: 20px;
  }
  .OrderDetailBottom-complete-box-onceagain{
    padding: 4px 8px 4px 8px;
    border: #333333 solid 1px;
    font-size: 12px;
  }
  .OrderDetailBottom-complete-box-refund{
    padding: 4px 8px 4px 8px;
    border:#FF6C6C solid 1px;
    color: #FF6C6C;
    font-size: 12px;
  }
</style>
