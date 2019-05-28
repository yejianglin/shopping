<!--所有订单引入-->
<template>
    <div class="allorder">
           <AllOrderContent></AllOrderContent>
    </div>
</template>

<script>

    import AllOrderContent from './AllOrderContent'
    export default {
        name: "allorder",
        data(){
          return{

          }
        },
        components:{
          AllOrderContent
        }
    }
</script>

<style scoped>

</style>
