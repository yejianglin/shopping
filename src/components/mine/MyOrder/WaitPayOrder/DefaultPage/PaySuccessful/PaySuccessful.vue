<!--支付成功引入-->
<template>
    <div class="paysuccessful">
      <PaySuccessfulHeader></PaySuccessfulHeader>
       <div class="paysuccessfulscroll" ref="paySuccessfulScroll">
          <div class="container">
            <PaySuccessfulContent></PaySuccessfulContent>
          </div>
       </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import PaySuccessfulHeader from './PaySuccessfulHeader'
  import PaySuccessfulContent from './PaySuccessfulContent'
    export default {
        name: "PaySuccessful",
        components:{
          PaySuccessfulHeader,PaySuccessfulContent
        },
        mounted() {
          this.$nextTick(function () {
            this.paysuccessfulscroll=new BScroll(this.$refs.paySuccessfulScroll,{
              click:true
            })
          })
        }
    }
</script>

<style scoped>
  .paysuccessful{
    width: 100%;
    display: flex;
    position: absolute;
    top: 64px;
    bottom: 0px;
  }
  .paysuccessfulscroll{
    width: 100%;
    overflow: hidden;
  }
</style>
