<!--退款中引入-->
<template>
    <div class="refunding">
      <RefundingHeader></RefundingHeader>
      <div class="refundingscroll" ref="refundingScroll">
         <div class="container">
           <RefundingContent></RefundingContent>
         </div>
      </div>
    </div>
</template>

<script>
    import RefundingHeader from './RefundingHeader'
    import RefundingContent from './RefundingContent'
    export default {
        name: "Refunding",
        components:{
          RefundingHeader,RefundingContent
        },
      mounted() {
        this.$nextTick(function () {
          this.refundingscroll=new BScroll(this.$refs.payFailScroll,{
            click:true
          })
        })
      }
    }
</script>

<style scoped>
   .refunding{
     width: 100%;
     display: flex;
     position: absolute;
     top: 64px;
     bottom: 0px;
   }
  .refundingscroll{
    width:100%;
    overflow: hidden;
  }
</style>
