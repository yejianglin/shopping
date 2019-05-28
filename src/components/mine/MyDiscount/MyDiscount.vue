<!--我的优惠券引入-->
<template>
    <div class="mydiscount">
      <MyDiscountHeader></MyDiscountHeader>
      <MyDiscountContent></MyDiscountContent>
      <MyDiscountContent></MyDiscountContent>
    </div>
</template>

<script>
    import MyDiscountHeader from './components/MyDiscountHeader'
    import MyDiscountContent from './components/MyDiscountContent'
    export default {
        name: "MyDiscount",
        components:{
          MyDiscountHeader,MyDiscountContent
        }
    }
</script>

<style scoped>
   .mydiscount{
     margin-top: 64px;
   }
</style>
