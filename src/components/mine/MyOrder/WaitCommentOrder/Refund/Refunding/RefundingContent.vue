<!--退款中内容-->
<template>
  <div class="refundingcontent">
    <div class="refundingcontent-tips">
      <div class="refundingcontent-tips-img">
        <img class="refundingcontent-tips-img-content" src="../../../../../../assets/images/mine/defaultpage/refunding.png"/>
      </div>
      <p class="refundingcontent-tips-text">申请退款中,请等待工作人员处理</p>
    </div>
    <div class="refundingcontent-back">
      返回订单
    </div>
    <div class="refundingcontent-continue">
      继续逛逛
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .refundingcontent-tips{
    width:100%;
    margin-top: 100px;
  }
  .refundingcontent-tips-img{
    text-align: center;
  }
  .refundingcontent-tips-img-content{
    width: 70px;
    height: 72px;
  }
  .refundingcontent-tips-text{
    margin-top: 30px;
    text-align: center;
  }
  .refundingcontent-back{
    width: 54%;
    height: 45px;
    background-color: #EEEEEE;
    text-align: center;
    line-height: 45px;
    margin: 100px auto 0 auto;
    border-radius: 22.5px;
  }
  .refundingcontent-continue{
    width: 54%;
    height: 45px;
    background:-webkit-linear-gradient(top, #FF8B8B,#FF6C6C);
    text-align: center;
    line-height: 45px;
    margin: 30px auto 0 auto;
    border-radius: 22.5px;
    color: #FFFFFF;
  }
</style>

