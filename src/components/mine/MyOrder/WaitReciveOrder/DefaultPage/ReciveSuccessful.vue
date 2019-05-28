<!--支付成功引入-->
<template>
    <div class="recivesuccessful">
      <ReciveSuccessfulHeader></ReciveSuccessfulHeader>
       <div class="recivesuccessfulscroll" ref="reciveSuccessfulScroll">
          <div class="container">
            <ReciveSuccessfulContent></ReciveSuccessfulContent>
          </div>
       </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import ReciveSuccessfulHeader from './ReciveSuccessfulHeader'
  import ReciveSuccessfulContent from './ReciveSuccessfulContent'
    export default {
        name: "ReciveSuccessful",
        components:{
          ReciveSuccessfulHeader,ReciveSuccessfulContent
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
  .recivesuccessful{
    width: 100%;
    display: flex;
    position: absolute;
    top: 64px;
    bottom: 0px;
  }
  .recivesuccessfulscroll{
    width: 100%;
    overflow: hidden;
  }
</style>
