<!--支付成功内容-->
<template>
    <div class="recivesuccessfulcontent">
       <div class="recivesuccessfulcontent-tips">
           <div class="recivesuccessfulcontent-tips-img">
             <img class="recivesuccessfulcontent-tips-img-content" src="../../../../../../assets/images/mine/defaultpage/successful.png"/>
           </div>
           <p class="recivesuccessfulcontent-tips-text">恭喜你,收货成功</p>
       </div>
       <div class="recivesuccessfulcontent-back">
               返回首页
       </div>
       <div class="recivesuccessfulcontent-continue">
              立即评价
       </div>
    </div>
</template>

<script>
    export default {
        name: "ReciveSuccessfulContent"
    }
</script>

<style scoped>
  .recivesuccessfulcontent-tips{
    width:100%;
    margin-top: 100px;
  }
  .recivesuccessfulcontent-tips-img{
    text-align: center;
  }
  .recivesuccessfulcontent-tips-img-content{
    width: 70px;
    height: 72px;
  }
  .recivesuccessfulcontent-tips-text{
    margin-top: 30px;
    text-align: center;
  }
  .recivesuccessfulcontent-back{
    width: 54%;
    height: 45px;
    background-color: #EEEEEE;
    text-align: center;
    line-height: 45px;
    margin: 100px auto 0 auto;
    border-radius: 22.5px;
  }
  .recivesuccessfulcontent-continue{
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
