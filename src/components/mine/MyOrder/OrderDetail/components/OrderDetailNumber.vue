<!--订单详情编号-->
<template>
    <div class="orderdetailnumber">
        <div class="orderdetailnumber-text">
           <span class="orderdetailnumber-text-num">
              订单编号:{{message}}
           </span>
          <van-button type="default" size="mini" v-clipboard:copy="message">
            复制
          </van-button>
        </div>
        <div class="orderdetailnumber-data">
              支付时间:
        </div>
    </div>
</template>

<script>
    export default {
        name: "OrderDetailNumber",
        data(){
          return{
            message:'123455777',
          }
        },
    }
</script>

<style scoped>
  .orderdetailnumber>>>.van-button--mini{
    width: 40px;
    height: 16px;
    color: #999999;
    line-height: 16px;
    margin-left: 20px;
  }
   .orderdetailnumber{
     width: 100%;
     margin-top:10px;
     display: flex;
     flex-direction: column;
     background-color: white;
   }
   .orderdetailnumber-text{
     display: flex;
     width: 92%;
     margin: 13px 4% 0 4%;
   }
   .orderdetailnumber-text-num{
     font-size: 13px;
     color: #777777;
     height: 16px;
     line-height: 16px;
   }
  .orderdetailnumber-text-copy{
    padding: 0 8px 0 8px;
    margin-left: 17px;
    border: gainsboro solid 1px;
    font-size: 12px;
    color: #999999;
  }
  .orderdetailnumber-data{
    width:92%;
    margin: 8px 4% 13px 4%;
    font-size: 13px;
    color: #777777;
  }

</style>
