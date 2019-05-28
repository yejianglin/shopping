<!--底部提交按钮-->
<template>
  <van-submit-bar
    :price="computeAllPrice"
    button-text="提交订单"
    @submit="onSubmit"
  />
</template>

<script>
    export default {
        name: "bottomSummit",
        data(){
          return {

          }
        },
       props:[
         "computeAllPrice"
       ],

      mounted(){

      },
       methods:{
          onSubmit(){

          }
       }
    }
</script>

<style scoped>

</style>
