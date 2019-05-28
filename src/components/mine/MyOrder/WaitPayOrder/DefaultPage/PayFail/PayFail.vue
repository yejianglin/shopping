<!--支付失败引入-->
<template>
    <div class="payfail">
      <PayFailHeader></PayFailHeader>
       <div class="payfailscroll" ref="payFailScroll">
        <div class="container">
          <PayFailContent></PayFailContent>
        </div>
      </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import PayFailHeader from './PayFailHeader'
    import PayFailContent from './PayFailContent'
    export default {
        name: "PayFail",
        components:{
          PayFailHeader,PayFailContent
        },
        mounted() {
          this.$nextTick(function () {
            this.payfailscroll=new BScroll(this.$refs.payFailScroll,{
              click:true
            })
          })
        }
    }
</script>

<style scoped>
   .payfail{
     width: 100%;
     display: flex;
     position: absolute;
     top: 64px;
     bottom: 0px;
   }
  .payfailscroll{
    width: 100%;
    overflow: hidden;
  }
</style>
