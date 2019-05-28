<!--分类头部-->
<template>
  <div class="classificationheader">
    <i class="aischa"></i>
    <span class="header-text"><strong>分类</strong></span>
    <i class="aisgengduo"></i>
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../../assets/less/color.less";
  .classificationheader{
    width: 100%;
    height: 64px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    z-index:20;
    background-color:@color-FF6C6C ;
    .aischa{
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
  .header-text{
    margin-top: 34px;
    color: @color-333333;
  }
</style>
