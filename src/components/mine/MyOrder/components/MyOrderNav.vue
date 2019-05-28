<!--我的订单导航选项卡-->
<template>
   <div class="myordernav">
     <van-tabs v-model="active">
       <div class="myordernav-allorder">
           <div class="allorderscroll" ref="allOrderScroll">
             <div class="container">
               <van-pull-refresh v-model="isLoading" @refresh="onRefresh">

               <van-tab title="全部订单">
                 <AllOrder></AllOrder>
               </van-tab>
               <van-tab title="待付款">
                 <WaitPayOrder></WaitPayOrder>
               </van-tab>
               <van-tab title="待收货">
                 <WaitReciveOrder></WaitReciveOrder>
               </van-tab>
               <van-tab title="待评价">
                 <WaitCommentOrder></WaitCommentOrder>
               </van-tab>
               <van-tab title="已完成">
                 <CompleteOrder></CompleteOrder>
               </van-tab>

               </van-pull-refresh>
             </div>
           </div>

       </div>
     </van-tabs>
   </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import AllOrder from '../AllOrder/AllOrder'
  import WaitPayOrder from '../WaitPayOrder/WaitPayOrder'
  import WaitReciveOrder from '../WaitReciveOrder/WaitReciveOrder'
  import WaitCommentOrder from '../WaitCommentOrder/WaitCommentOrder'
  import CompleteOrder from '../CompleteOrder/ComPleteOrder'
  export default {
    data() {
      return {
        active: this.$route.params.active,
        count: 0,
        isLoading: false,
        kkkk:{}
      };
    },
    mounted(){
      this.$nextTick(function(){
        this.allorderscroll=new BScroll(this.$refs.allOrderScroll, {
          click: true
        })
      });
    },
    components: {
      AllOrder,WaitPayOrder,WaitReciveOrder,WaitCommentOrder,CompleteOrder
    },
    methods:{
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isLoading = false;
          this.count++;
        }, 500);
      }
    }
  }
</script>
<style scoped>
  .myordernav>>>.van-tabs{
    width: 100%;
    display: flex;
    position: absolute;
    top: 108px;
    bottom: 0px;
  }
  .myordernav>>>.van-tabs__wrap{
    position: fixed;
    top: 64px;
  }
  .myordernav>>>.van-tabs--line{
    padding-top: 0px;
  }

   .myordernav-allorder{
     width: 100%;
     position: absolute;
     display: flex;
     top:0px;
     bottom: 0px;
     background-color: #F5F5F6;
   }
  .allorderscroll{
    width: 100%;
    overflow: hidden;
  }
</style>
