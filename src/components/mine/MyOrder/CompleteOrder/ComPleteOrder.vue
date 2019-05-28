<!--已完成订单引入-->
<template>
    <div class="completeOrder">
      <ComPleteOrderContent></ComPleteOrderContent>
    </div>
</template>

<script>
  import ComPleteOrderContent from './ComPleteOrderContent'
    export default {
        name: "ComPleteOrder",
        components:{
          ComPleteOrderContent
        }
    }
</script>

<style scoped>

</style>
