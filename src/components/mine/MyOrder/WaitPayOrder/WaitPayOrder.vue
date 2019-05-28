<!--待支付页面引入-->
<template>
  <div class="waitpayorder">
    <WaitPayOrderContent></WaitPayOrderContent>
  </div>
</template>

<script>

  import WaitPayOrderContent from './WaitpayOrderContent'
  export default {
    name: "waitpayorder",
    data(){
      return{

      }
    },
    components:{
      WaitPayOrderContent
    }
  }
</script>

<style scoped>

</style>
