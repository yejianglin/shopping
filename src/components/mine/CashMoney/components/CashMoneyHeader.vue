<!--提现头部-->
<template>
  <div class="cashmoneyheader">
    <span class="cashmoneyheader-left">
      <i class="aishtmal5icon37" @click="goBack()"></i>
      <i class="aischa"></i>
    </span>
    <div class="cashmoneyheader-title">
      <span class="header-text"><strong>提现</strong></span>
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
      goBack(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../../../assets/less/color.less";
  .cashmoneyheader {
    width: 100%;
    height: 64px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    background-color: @color-FF6C6C;
  }
  .cashmoneyheader-left{
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
  .cashmoneyheader-title{
    text-align: center;
    margin-top: 34px;
  }
  .header-text{
    text-align: center;
    color: @color-333333;
  }
</style>


