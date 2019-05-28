<!--邀请加入代理头部-->
<template>
  <div class="invitationheader">
      <span class="invitationheader-left">
        <i class="aishtmal5icon37" @click="goBack()"></i>
        <i class="aischa"></i>
      </span>
    <div class="invitationheader-title">
      <span class="header-text"><strong>邀请</strong></span>
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
  @import "../../../.././assets/less/color.less";
  .invitationheader {
    width: 100%;
    height: 64px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    background-color:@color-FF6C6C;
  }
  .invitationheader-left{
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
  .invitationheader-title{
    text-align: center;
    margin-top: 34px;
  }
  .header-text{
    text-align: center;
    color: @color-333333;
  }
</style>
