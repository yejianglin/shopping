<!--是否确定退款-->
<template>
  <van-submit-bar
    :price="3050"
    button-text="确认退款"
    @submit="onSubmit"
  />
</template>

<script>
    export default {
        name: "sureRefund",
        methods:{
          onSubmit(){

          }
        }
    }
</script>

<style scoped>

</style>
