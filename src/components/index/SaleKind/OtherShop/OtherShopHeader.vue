<!--其他分类商品头部-->
<template>
  <div class="othershopheader">
    <span class="othershopheader-left">
      <i class="aishtmal5icon37" @click="goback()"></i>
      <i class="aischa"></i>
    </span>
    <div class="othershopheader-title">
      <span class="header-text"><strong>{{desc}}</strong></span>
    </div>
    <i class="aisgengduo"></i>
  </div>
</template>

<script>
  export default{
    data(){
      return{
           desc:''
      }
    },
    mounted(){
      this.desc=this.$route.params.saleKind.desc
    },
    methods:{
      goback(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../../.././assets/less/color.less";
  .othershopheader {
    width: 100%;
    height: 64px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    background-color: @color-FF6C6C;
  }
  .othershopheader-left{
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
  .othershopheader-title{
    text-align: center;
    margin-top: 34px;
  }
  .header-text{
    text-align: center;
    color: @color-333333;
  }
</style>



