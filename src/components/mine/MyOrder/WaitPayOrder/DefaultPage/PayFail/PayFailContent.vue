<!--支付失败内容-->
<template>
  <div class="payfailcontent">
    <div class="payfailcontent-tips">
      <div class="payfailcontent-tips-img">
        <img class="payfailcontent-tips-img-content" src="../../../../../.././assets/images/mine/defaultpage/fail.png"/>
      </div>
      <p class="payfailcontent-tips-text">很遗憾,您没有支付成功</p>
    </div>
    <div class="payfailcontent-back">
      返回订单
    </div>
    <div class="payfailcontent-continue">
      继续逛逛
    </div>
    <div class="payfailcontent-again">
       重新支付
    </div>
  </div>
</template>

<script>
  export default {
    name: "PaySuccessfulContent"
  }
</script>

<style scoped>
  .payfailcontent-tips{
    width:100%;
    margin-top: 100px;
  }
  .payfailcontent-tips-img{
    text-align: center;
  }
  .payfailcontent-tips-img-content{
    width: 70px;
    height: 72px;
  }
  .payfailcontent-tips-text{
    margin-top: 30px;
    text-align: center;
  }
  .payfailcontent-back{
    width: 54%;
    height: 45px;
    background-color: #EEEEEE;
    text-align: center;
    line-height: 45px;
    margin: 100px auto 0 auto;
    border-radius: 22.5px;
  }
  .payfailcontent-continue{
    width: 54%;
    height: 45px;
    background:-webkit-linear-gradient(top, #FF8B8B,#FF6C6C);
    text-align: center;
    line-height: 45px;
    margin: 30px auto 0 auto;
    border-radius: 22.5px;
    color: #FFFFFF;
  }
  .payfailcontent-again{
    text-align: center;
    margin-top: 41px;
    color: #7B7953;
  }
</style>

