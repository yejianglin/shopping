<!--支付成功内容-->
<template>
    <div class="paysuccessfulcontent">
       <div class="paysuccessfulcontent-tips">
           <div class="paysuccessfulcontent-tips-img">
             <img class="paysuccessfulcontent-tips-img-content" src="../../../../../../assets/images/mine/defaultpage/successful.png"/>
           </div>
           <p class="paysuccessfulcontent-tips-text">恭喜你,付款成功</p>
       </div>
       <div class="paysuccessfulcontent-back">
               返回订单
       </div>
       <div class="paysuccessfulcontent-continue">
              继续逛逛
       </div>
    </div>
</template>

<script>
    export default {
        name: "PaySuccessfulContent"
    }
</script>

<style scoped>
  .paysuccessfulcontent-tips{
    width:100%;
    margin-top: 100px;
  }
  .paysuccessfulcontent-tips-img{
    text-align: center;
  }
  .paysuccessfulcontent-tips-img-content{
    width: 70px;
    height: 72px;
  }
  .paysuccessfulcontent-tips-text{
    margin-top: 30px;
    text-align: center;
  }
  .paysuccessfulcontent-back{
    width: 54%;
    height: 45px;
    background-color: #EEEEEE;
    text-align: center;
    line-height: 45px;
    margin: 100px auto 0 auto;
    border-radius: 22.5px;
  }
  .paysuccessfulcontent-continue{
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
