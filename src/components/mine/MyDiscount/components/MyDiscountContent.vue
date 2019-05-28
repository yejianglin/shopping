<!--我的优惠券内容部分-->
<template>
  <div class="mydiscountcontent">
    <van-tabs v-model="active">
      <div class="mydiscountcontent-alldiscount">
          <div class="alldiscountscroll" ref="allDiscountScroll">
             <div class="container">
               <van-tab title="未使用">
                 <NOTused></NOTused>
               </van-tab>
               <van-tab title="已使用">
                 <AlreadyUsed></AlreadyUsed>
               </van-tab>
               <van-tab title="已失效">
                 <Failure></Failure>
               </van-tab>
             </div>
          </div>
      </div>
    </van-tabs>
  </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import NOTused from '../NotUsed/NotUsed'
    import Failure from '../Failure/Failure'
    import AlreadyUsed from '../AlreadyUsed/AlreadyUsed'
    export default {
        name: "MyDiscountContent",
      data() {
        return {
          active: 0
        }
      },
      mounted() {
        this.$nextTick(function(){
          this.alldiscountscroll=new BScroll(this.$refs.allDiscountScroll,{
            click:true
          })
        })

      },
      components:{
        NOTused,Failure,AlreadyUsed
      }
    }
</script>

<style scoped>
  .mydiscountcontent>>>.van-tabs{
    width: 100%;
    display: flex;
    position: absolute;
    top: 108px;
    bottom: 0px;
  }
  .mydiscountcontent>>>.van-tabs__wrap{
    position: fixed;
    top: 64px;
  }
  .mydiscountcontent>>>van-tabs--line{
    padding-top: 0px;
  }
  .mydiscountcontent-alldiscount{
    width: 100%;
    position: absolute;
    display: flex;
    top:0px;
    bottom: 0px;
    background-color: #F5F5F6;
  }
  .alldiscountscroll{
    width: 100%;
    overflow: hidden;
  }
</style>
