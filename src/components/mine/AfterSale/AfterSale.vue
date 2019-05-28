<!--售后引入-->
<template>
    <div class="aftersale">
       <AfterSaleHeader></AfterSaleHeader>
       <AfterSaleContent></AfterSaleContent>
    </div>
</template>

<script>
   import AfterSaleHeader from './components/AfterSaleHeader'
   import AfterSaleContent from './components/AfterSaleContent'
    export default {
        name: "AfterSale",
        components:{
          AfterSaleHeader,AfterSaleContent
        }
    }
</script>

<style scoped>

</style>
