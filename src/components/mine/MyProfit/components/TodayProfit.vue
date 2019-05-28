<!--今日收益-->
<template>
    <div class="todayprofit">
      <div class="todayprofit-title">
        <img class="todayprofit-title-img" src="../../../../assets/images/mine/myprofit/yellowdeng.png" />
        <div class="todayprofit-title-text">今日收益</div>
      </div>
      <div class="todayprofit-options">
         <div class="todayprofit-options-recommend">
            <div class="todayprofit-options-recommend-text">推荐商品</div>
            <div class="todayprofit-options-recommend-num">23</div>
         </div>
        <div class="todayprofit-options-pay">
            <div class="todayprofit-options-pay-text">付款笔数</div>
            <div class="todayprofit-options-pay-num">11</div>
        </div>
        <div class="todayprofit-options-income">
          <div class="todayprofit-options-income-text">预估收入</div>
          <div class="todayprofit-options-income-num">￥334</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TodayProfit"
    }
</script>

<style scoped>
  .todayprofit{
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    background-color: white;
  }
  .todayprofit-title{
    width: 95%;
    height: 50px;
    line-height: 50px;
    margin:0 0 0 5%;
    border-bottom: gainsboro solid 1px;
    display: flex;
  }
  .todayprofit-title-img{
    width: 15px;
    height: 21px;
    overflow: hidden;
    margin-top: 16px;
  }
  .todayprofit-title-text{
    padding: 0 0 0 11px;
  }
  .todayprofit-options{
    width: 100%;
    display: flex;
  }
  .todayprofit-options-recommend{
    width: 33.3%;
    text-align: center;
  }
  .todayprofit-options-recommend-text{
    padding: 15px 0 0 0;
    font-family: PingFangSC;
    font-size: 14px;
    color: #AAAAAA;
  }
  .todayprofit-options-recommend-num{
    padding:10px 0 17px 0;
    font-family: PingFangSC;
    font-size: 18px;
    color: #333333;
  }
  .todayprofit-options-pay{
    width: 33.3%;
    text-align: center;
  }
  .todayprofit-options-pay-text{
    padding: 15px 0 0 0;
    font-family: PingFangSC;
    font-size: 14px;
    color: #AAAAAA;
  }
  .todayprofit-options-pay-num{
    padding:10px 0 17px 0;
    font-family: PingFangSC;
    font-size: 18px;
    color: #333333;
  }
  .todayprofit-options-income{
    width: 33.3%;
    text-align: center;
  }
  .todayprofit-options-income-text{
    padding: 15px 0 0 0;
    font-family: PingFangSC;
    font-size: 14px;
    color: #AAAAAA;
  }
  .todayprofit-options-income-num{
    padding:10px 0 17px 0;
    font-family: PingFangSC;
    font-size: 18px;
    color: #333333;
  }
</style>
