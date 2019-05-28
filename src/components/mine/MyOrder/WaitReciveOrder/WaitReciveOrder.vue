<!--待收货订单引入-->
<template>
    <div class="waitreciveorder">
       <WaitReciveOrderContent></WaitReciveOrderContent>
    </div>
</template>

<script>
  import WaitReciveOrderContent from './WaitReciveOrderContent'
    export default {
        name: "waitreciveorder",
        components:{
          WaitReciveOrderContent
        }
    }
</script>

<style scoped>

</style>
