<!--商品详情头部-->
<template>
  <div class="CashMoneyRecordHeader">
    <span class="CashMoneyRecordHeader-left">
      <i class="aishtmal5icon37" @click="goback()"></i>
      <i class="aischa"></i>
    </span>
    <div class="CashMoneyRecordHeader-title">
      <span class="header-text"><strong>提现记录</strong></span>
    </div>
    <i class="aisgengduo"></i>
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    methods:{
      goback(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../../../../assets/less/color";
  .CashMoneyRecordHeader {
    width: 100%;
    height: 64px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    background-color: @color-FF6C6C;
  }
  .CashMoneyRecordHeader-left{
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
  .CashMoneyRecordHeader-title{
    text-align: center;
    margin-top: 34px;
  }
  .header-text{
    text-align: center;
    color: @color-333333;
  }
</style>





