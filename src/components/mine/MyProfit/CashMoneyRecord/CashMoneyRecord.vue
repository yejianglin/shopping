<template>
    <div class="cashmoneyrecord">
       <CashMoneyRecordHeader></CashMoneyRecordHeader>
      <div class="cashmoneyrecord-scroll" ref="cashMoneyRecordScroll">
         <div class="container">
            <CashMoenyRecordContent></CashMoenyRecordContent>
         </div>
      </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import CashMoneyRecordHeader from './components/CashMoneyRecordHeader'
    import CashMoenyRecordContent from './components/CashMoneyRecordContent'

    export default {
        name: "CashMoneyRecord",
        components:{
          CashMoneyRecordHeader,CashMoenyRecordContent
        },
        mounted() {
          this.$nextTick(function () {
            this.cashMoneyRecordScroll=new BScroll(this.$refs.cashMoneyRecordScroll,{
              click:true
            })
          })
        }
    }
</script>

<style scoped>
    .cashmoneyrecord{
      width:100%;
      display: flex;
      position: absolute;
      top: 64px;
      bottom: 0px;
      background-color: #F5F5F6;
    }
    .cashmoneyrecord-scroll{
      width: 100%;
      overflow: hidden;
    }
</style>
