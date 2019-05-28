<!--我的收益头部-->
<template>
    <div class="myprofitheader">
      <div class="myprofitheader-top">
        <span class="myprofitheader-top-left">
          <i class="aishtmal5icon37" @click="goBack()"></i>
          <i class="aischa"></i>
        </span>
        <div class="myprofitheader-top-title">
          <span class="header-text"><strong>我的收益</strong></span>
        </div>
        <i class="aisgengduo"></i>
      </div>
      <div class="myprofitheader-money">
         <div class="myprofitheader-money-num">
            ￥29993.00
         </div>
         <div class="myprofitheader-money-text">
            累计收益结算
         </div>
         <div class="myprofitheader-money-balance">
            账户余额:￥90.00
         </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "MyProfitHeader",
        methods:{
          goBack(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style scoped lang="less">
  @import "../../../../assets/less/color.less";
  .myprofitheader{
    width: 100%;
    background-color: @color-FF6C6C;
    position: fixed;
    top: 0px;
    left: 0px;
  }
  .myprofitheader-top {
    width: 100%;
    height: 64px;
    position: fixed;
    background-color: @color-FF6C6C;
  }
  .myprofitheader-top-left{
    position: absolute;
    top: 34px;
    left: 15px;
    color: @color-333333;
  }

  .aisgengduo{
    position: absolute;
    top: 34px;
    right: 15px;
    color: @color-333333;
  }
  .myprofitheader-top-title{
    text-align: center;
    margin-top: 34px;
  }
  .header-text{
    text-align: center;
    color: @color-333333;
  }
  .myprofitheader-money{
    margin-top: 64px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .myprofitheader-money-num{
    text-align: center;
    font-size: 28px;
    font-family: PingFangSC;
    color: white;
    margin-top: 24px;
  }
  .myprofitheader-money-text{
    text-align: center;
    font-family: PingFangSC;
    font-size:12px;
    color: #FFDBDB;
    margin-top: 8px;
  }
  .myprofitheader-money-balance{
    text-align: center;
    font-family: PingFangSC;
    font-size: 14px;
    color: white;
    margin: 12px 0 20px 0;
  }
</style>
