<template>
    <div class="mygroupbuy">
       <MyGroupBuyHeader></MyGroupBuyHeader>
       <MyGroupBuyNav></MyGroupBuyNav>
    </div>
</template>

<script>
    import MyGroupBuyHeader from './components/MyGroupBuyHeader'
    import MyGroupBuyNav from './components/MyGroupBuyNav'
    export default {
        name: "MyGroupBuy",
        components:{
          MyGroupBuyHeader,MyGroupBuyNav
        }
    }
</script>

<style scoped>

</style>
