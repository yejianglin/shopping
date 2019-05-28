<!--提交定单头部-->
<template>
  <div class="summitorderheader">
    <i class="aishtmal5icon37" @click="goShopCar()"></i>
     <span class="summitorderheader-text"><strong>结算</strong></span>
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
      goShopCar(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../../../assets/less/color.less";
  .summitorderheader{
    width: 100%;
    height: 64px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    z-index:20;
    background-color:@color-FF6C6C ;
    .aishtmal5icon37{
      margin: 34px 0 14px 17px;
      font-size: 16px;
      color: @color-333333;
    }
  }

  .aisgengduo{
    margin: 34px 17px 14px 0 ;
    font-size: 18px;
    color: @color-333333;
  }
  .summitorderheader-text{
    margin-top: 34px;
    color: @color-333333;
  }
</style>

