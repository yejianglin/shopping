<!--我的收益内容-->
<template>
  <div class="myprofitcontent">
    <div class="monthtop">
      <div class="currentmonth">
        <span class="currentmonth-money">结算收入</span>
        <span class="currentmonth-text">￥20.90</span>
        <span class="currentmonth-last">上月收益</span>
      </div>
      <div class="nowday">
        <span class="nowday-money">本月已收入</span>
        <span class="nowday-text">￥20.90</span>
        <span class="nowday-month">本月收益</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MyProfitContent"
    }
</script>

<style scoped>
  .myprofitcontent{
    width: 100%;
    background-color: white;
  }
  .monthtop{
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .currentmonth{
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
    border-right: gainsboro solid 1px;
  }
  .currentmonth-money{
    font-size: 14px;
    font-family: PingFangSC;
    color: #AAAAAA;
    margin: 14px 0 0 0;
  }
  .currentmonth-text{
    font-size: 18px;
    color: #333333;
    font-family:PingFangSC;
    margin: 6px;
  }
  .currentmonth-last{
    font-size: 12px;
    font-family: PingFangSC;
    color: #AAAAAA;
    margin: 8px 0 10px 0;
  }
  .nowday{
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .nowday-money{
    font-size: 14px;
    font-family: PingFangSC;
    color: #AAAAAA;
    margin: 14px 0 0 0;
  }
  .nowday-text{
    font-size: 18px;
    color: #333333;
    font-family:PingFangSC;
    margin: 6px;
  }
  .nowday-month{
    font-size: 12px;
    font-family: PingFangSC;
    color: #AAAAAA;
    margin: 8px 0 10px 0;
  }
</style>
