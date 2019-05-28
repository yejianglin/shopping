<!--支付成功头部-->
<template>
  <div class="paysuccessfulheader">
      <span class="paysuccessfulheader-left">
        <i class="aishtmal5icon37" @click="goBack()"></i>
        <i class="aischa"></i>
      </span>
    <div class="paysuccessfulheader-title">
      <span class="header-text"><strong>支付成功</strong></span>
    </div>
    <i class="aisgengduo"></i>
  </div>
</template>

<script>
  export default {
    name: "myorderHeader",
    methods:{
      goBack(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../../../../.././assets/less/color.less";
  .paysuccessfulheader {
    width: 100%;
    height: 64px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    background-color: @color-FF6C6C;
  }
  .paysuccessfulheader-left{
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
  .paysuccessfulheader-title{
    text-align: center;
    margin-top: 34px;
  }
  .header-text{
    text-align: center;
    color: @color-333333;
  }
</style>
