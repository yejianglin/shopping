<!--商品标题-->
<template>
  <div class="groupsshop">
    <div class="groupsshop-text">
      <div class="groupsshop-text-left">
        <span class="shopname">商品名称</span>
        <span class="shopprice">￥198.00</span>
      </div>
      <div class="groupsshop-text-right">
         <div class="endgroups">距离截团还有:</div>
         <div class="surplus">09:00:00</div>
      </div>
    </div>
    <div class="shopmsg">
      <span class="yunfei">运费:免运费</span>
      <span class="shengyu">剩余:</span>
      <span class="xiaoliang">销量:</span>
    </div>
  </div>
</template>

<script>
  export default{

  }
</script>

<style scoped lang="less">
  .groupsshop{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .groupsshop-text{
    width: 94%;
    display: flex;
    margin-left: 3%;
    margin-right: 3%;
    border-bottom: gainsboro solid 1px;
  }
  .groupsshop-text-left{
    display: flex;
    flex-direction: column;
  }
  .groupsshop-text-right{
    position: absolute;
    right: 15px;
    width: 151px;
    height: 71px;
  }
  .endgroups{
    position: absolute;
    top: 40px;
    font-size: 12px;
    color: #AAAAAA;
  }
  .surplus{
    position: absolute;
    top:39px;
    right: 0px;
    font-size: 14px;
    color: #FF6C6C;
  }
  .shopname{
    padding: 10px 0 5px 0px;
  }
  .shopprice{
    padding: 5px 0 5px 0px;
    color: red;
    font-size: 19px;
  }
  .yuanshopprice{
    padding: 5px 0 5px 0px;
    color: gainsboro;
    text-decoration: line-through;
    font-size: 13px;
  }
  .shopmsg{
    width:94%;
    height:40px;
    line-height: 40px;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    margin: 0 3% 0 3%;
    font-size: 13px;
    color: gainsboro;
  }

</style>
