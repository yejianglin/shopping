<!--退款引入-->
<template>
    <div class="refund">
      <RefundHeader></RefundHeader>
      <div class="refundscroll" ref="refundScroll">
        <div class="container">
          <RefundShop></RefundShop>
          <RefundDesc></RefundDesc>
        </div>
      </div>
      <SureRefund></SureRefund>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import RefundHeader from './RefundHeader'
    import RefundShop from './RefundShop'
    import RefundDesc from './RefundDesc'
    import SureRefund from './SureRefund'
    export default {
        name: "Refund",
        components:{
           RefundHeader, RefundShop,RefundDesc,SureRefund
        },
        mounted() {
          this.refundscroll = new BScroll(this.$refs.refundScroll,{
            click: true
          })
        }
    }
</script>

<style scoped lang="less">
  .refund{
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 64px;
    bottom: 50px;
    background-color: #F5F5F6;
  }
  .refundscroll{
    width: 100%;
    overflow: hidden;
  }
</style>
