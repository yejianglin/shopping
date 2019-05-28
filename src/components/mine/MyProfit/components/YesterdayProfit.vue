<!--昨日收益-->
<template>
  <div class="yesterdayprofit">
    <div class="yesterdayprofit-title">
      <img class="yesterdayprofit-title-img" src="../../../../assets/images/mine/myprofit/yellowdeng.png" />
      <div class="yesterdayprofit-title-text">昨日收益</div>
    </div>
    <div class="yesterdayprofit-options">
      <div class="yesterdayprofit-options-recommend">
        <div class="yesterdayprofit-options-recommend-text">推荐商品</div>
        <div class="yesterdayprofit-options-recommend-num">23</div>
      </div>
      <div class="yesterdayprofit-options-pay">
        <div class="yesterdayprofit-options-pay-text">付款笔数</div>
        <div class="yesterdayprofit-options-pay-num">11</div>
      </div>
      <div class="yesterdayprofit-options-income">
        <div class="yesterdayprofit-options-income-text">预估收入</div>
        <div class="yesterdayprofit-options-income-num">￥334</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "YesterdayProfit"
  }
</script>

<style scoped>
  .yesterdayprofit{
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    background-color: white;
  }
  .yesterdayprofit-title{
    width: 95%;
    height: 50px;
    line-height: 50px;
    margin:0 0 0 5%;
    border-bottom: gainsboro solid 1px;
    display: flex;
  }
  .yesterdayprofit-title-img{
    width: 15px;
    height: 21px;
    overflow: hidden;
    margin-top: 16px;
  }
  .yesterdayprofit-title-text{
    padding: 0 0 0 11px;
  }
  .yesterdayprofit-options{
    width: 100%;
    display: flex;
  }
  .yesterdayprofit-options-recommend{
    width: 33.3%;
    text-align: center;
  }
  .yesterdayprofit-options-recommend-text{
    padding: 15px 0 0 0;
    font-family: PingFangSC;
    font-size: 14px;
    color: #AAAAAA;
  }
  .yesterdayprofit-options-recommend-num{
    padding:10px 0 17px 0;
    font-family: PingFangSC;
    font-size: 18px;
    color: #333333;
  }
  .yesterdayprofit-options-pay{
    width: 33.3%;
    text-align: center;
  }
  .yesterdayprofit-options-pay-text{
    padding: 15px 0 0 0;
    font-family: PingFangSC;
    font-size: 14px;
    color: #AAAAAA;
  }
  .yesterdayprofit-options-pay-num{
    padding:10px 0 17px 0;
    font-family: PingFangSC;
    font-size: 18px;
    color: #333333;
  }
  .yesterdayprofit-options-income{
    width: 33.3%;
    text-align: center;
  }
  .yesterdayprofit-options-income-text{
    padding: 15px 0 0 0;
    font-family: PingFangSC;
    font-size: 14px;
    color: #AAAAAA;
  }
  .yesterdayprofit-options-income-num{
    padding:10px 0 17px 0;
    font-family: PingFangSC;
    font-size: 18px;
    color: #333333;
  }
</style>
