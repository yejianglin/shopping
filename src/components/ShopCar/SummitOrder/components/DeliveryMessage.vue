<!--配送信息-->
<template>
   <div class="deliverymessage">
      <div class="deliverymessage-express">
          <span class="deliverymessage-express-kind">配送方式</span>
          <span class="deliverymessage-express-shunfeng">顺丰速运</span>
      </div>
      <div class="deliverymessage-cost">
          <span class="deliverymessage-cost-text">快递费</span>
          <span class="deliverymessage-cost-money">￥0.00</span>
      </div>
      <div class="deliverymessage-leving">
          <span class="deliverymessage-leving-text">留言</span>
          <input class="deliverymessage-leving-input" placeholder="点击给商家留言">
      </div>
      <div class="deliverymessage-tatal">
          <span class="deliverymessage-tatal-text">合计</span>
          <span class="deliverymessage-tatal-price">￥500</span>
      </div>
   </div>
</template>

<script>
    export default {
        name: "Deliverymessage",
        props:[
          "submitShop"
        ]
    }
</script>

<style scoped>
  .deliverymessage{
    width:100%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    background-color: white;
  }
  .deliverymessage-express{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    border-bottom: gainsboro solid 1px;
  }
  .deliverymessage-express-kind{
    position:absolute;
    left:15px;
    font-size: 14px
  }
  .deliverymessage-express-shunfeng{
    position: absolute;
    right: 15px;
    font-size: 14px;
    color:#AAAAAA
  }
  .deliverymessage-cost{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    border-bottom: gainsboro solid 1px;
  }
  .deliverymessage-cost-text{
    position:absolute;
    left:15px;
    font-size: 14px
  }
  .deliverymessage-cost-money{
    position: absolute;
    right: 15px;
    font-size: 14px;
    color:#AAAAAA
  }
  .deliverymessage-leving{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    border-bottom: gainsboro solid 1px;
  }
  .deliverymessage-leving-text{
    position:absolute;
    left:15px;
    font-size: 14px
  }
  .deliverymessage-leving-input{
    position: absolute;
    padding: 0 0 0 0;
    border: none;
    left:90px;
    font-size: 14px
  }
  .deliverymessage-tatal{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    border-bottom: gainsboro solid 1px;
  }
  .deliverymessage-tatal-text{
    position:absolute;
    left:15px;
    font-size: 14px
  }
  .deliverymessage-tatal-price{
    position: absolute;
    right: 15px;
    color: red;
    font-size: 14px
  }
</style>
