<!--邀请码头部-->
<template>
  <div class="invitationcodeheader">
      <span class="invitationcodeheader-left">
        <i class="aishtmal5icon37" @click="goBack()"></i>
        <i class="aischa"></i>
      </span>
    <div class="invitationcodeheader-title">
      <span class="header-text"><strong>邀请码</strong></span>
    </div>
    <i class="aisgengduo"></i>
  </div>
</template>

<script>
  export default {
    name: "InvatationHeader",
    methods:{
      goBack(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../../../assets/less/color.less";
  .invitationcodeheader {
    width: 100%;
    height: 64px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    background-color:@color-FF6C6C;
  }
  .invitationcodeheader-left{
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
  .invitationcodeheader-title{
    text-align: center;
    margin-top: 34px;
  }
  .header-text{
    text-align: center;
    color: @color-333333;
  }
</style>

