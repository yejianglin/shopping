<!--秒杀商品引入-->
<template>
  <div class="joingroups">
    <GroupBuyHeader></GroupBuyHeader>
    <div class="joingroupsscroll" ref="joinGroupsScroll">
      <div class="container">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
           <GroupBuyContent></GroupBuyContent>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import GroupBuyHeader from './components/GroupBuyHeader'
  import GroupBuyContent from './components/GroupBuyContent'
  export default {
    name:'GroupBuy',
    data() {
      return {
        count: 0,
        isLoading: false
      }
    },
     components:{
       GroupBuyHeader,GroupBuyContent
     },
     beforeRouteLeave(to,from,next){
       if(to.name=='index'){
         this.$store.commit("keepAlives",[])
       }
       next();
     },
     mounted() {
       this.$nextTick(
         function () {
           this.weekspikescroll=new BScroll(this.$refs.joinGroupsScroll,{
             click:true
           })
         }
       )
     },
    methods:{
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isLoading = false;
          this.count++;
        }, 1000);
      }
    }
  }

</script>

<style scoped>
  .joingroups>>>.van-pull-refresh{
    overflow: visible;
  }
  .joingroups{
    width: 100%;
    display: flex;
    position:absolute;
    top: 64px;
    bottom: 0px;
  }
  .joingroupsscroll{
    width: 100%;
    overflow: hidden;
  }
</style>


