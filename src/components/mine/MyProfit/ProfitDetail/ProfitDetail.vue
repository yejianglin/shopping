<template>
    <div class="profitdetail">
      <ProfitDetailHeader></ProfitDetailHeader>
       <div class="profitdetailscroll" ref="profitDetailScroll">
          <div class="container">
            <ProfitDetailContent></ProfitDetailContent>
          </div>
       </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import ProfitDetailHeader from './components/ProfitDetailHeader'
  import ProfitDetailContent from './components/ProfitDetailContent'
    export default {
        name: "ProfitDetail",
        components:{
          ProfitDetailHeader,ProfitDetailContent
        },
        mounted() {
          this.$nextTick(function(){
            this.profitdetailscroll =new BScroll(this.$refs.profitDetailScroll,{
              click:true
            })
          })
        }
    }
</script>

<style scoped>
   .profitdetail{
     width: 100%;
     display: flex;
     position: absolute;
     top:64px;
     bottom: 0px;
   }
  .profitdetailscroll{
    width: 100%;
    overflow: hidden;
    background-color: #F5F5F6;
  }
</style>
