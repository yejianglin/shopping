<!--我的收益引入-->
<template>
  <div class="myprofit">
    <MyprofitHeader></MyprofitHeader>
    <div class="myprofitscroll" ref="myprofitScroll">
       <div class="container">
         <MyprofitContent></MyprofitContent>
         <TodayProfit></TodayProfit>
         <YesterdayProfit></YesterdayProfit>
         <CashMoney></CashMoney>
         <ProfitDetail></ProfitDetail>
       </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import MyprofitHeader from './components/MyProfitHeader'
  import MyprofitContent from './components/MyProfitContent'
  import TodayProfit from './components/TodayProfit'
  import YesterdayProfit from './components/YesterdayProfit'
  import CashMoney from './components/CashMoney'
  import ProfitDetail from './components/ProfitDetail'
  export default {
       components:{
         MyprofitHeader,MyprofitContent,TodayProfit,YesterdayProfit,CashMoney,ProfitDetail
       },
       mounted() {
         this.$nextTick(function () {
           this.myprofitscroll=new BScroll(this.$refs.myprofitScroll,{
             click:true
           })
         })
       }
  }
</script>

<style scoped>
  .myprofit{
    width: 100%;
    display: flex;
    position: absolute;
    top: 200px;
    bottom: 0px;
    background-color: #F5F5F6;
  }
  .myprofitscroll{
    width: 100%;
    overflow: hidden;
  }
</style>
