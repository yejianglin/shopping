<!--添加地址头部-->
<template>
  <div class="addaddressHeader">
    <i class="aishtmal5icon37" @click="goback()"></i>
    <span class="addaddress-text"><strong>新增收货地址</strong></span>
    <i class="aisgengduo"></i>
  </div>
</template>

<script>
    export default {
        name: "addaddressHeader",
        methods:{
          goback(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style scoped lang="less">
  @import "../../../../../assets/less/color.less";
  .addaddressHeader{
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
  .addaddress-text{
    margin-top: 34px;
    color: @color-333333;
  }
</style>
