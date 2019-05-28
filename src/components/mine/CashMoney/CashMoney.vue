<!--提现引入-->
<template>
   <div class="cashmoney">
     <CashMoneyHeader></CashMoneyHeader>
     <CashMoneyContent></CashMoneyContent>
   </div>
</template>

<script>

  import CashMoneyHeader from './components/CashMoneyHeader'
  import CashMoneyContent from './components/CashMoneyContent'
    export default {
        name: "CashMoney",
        components:{
          CashMoneyHeader,CashMoneyContent
        },
    }
</script>

<style scoped>
   .cashmoney{
     width:100%;
     display: flex;
     position:absolute;
     top: 64px;
     bottom: 0px;
     background-color: #F5F5F6;
   }
</style>
