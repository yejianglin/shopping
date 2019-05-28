<template>
    <div class="joingroups">
      <DetailHeader></DetailHeader>
       <div class="joingroups-scroll" ref="joingroupsScroll">
          <div class="container">
             <DetailSwiper></DetailSwiper>
             <GroupsShop></GroupsShop>
             <ShopContent></ShopContent>
             <JoinMember></JoinMember>
             <ShopContent></ShopContent>
             <GoClassification></GoClassification>
             <ShopContent></ShopContent>
             <DetailAndPurchase></DetailAndPurchase>
          </div>
       </div>
      <BottomBlank></BottomBlank>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import BottomBlank from './components/BottomBlank'
    import DetailAndPurchase from './components/DetailAndPurchase'
    import DetailSwiper from './components/DetailSwiper'
    import DetailHeader from './components/DetailHeader'
    import GoClassification from './components/GoClassification'
    import GroupsShop from './components/GroupsShop'
    import ShopContent from '../.././Public/ShopContent'
    import JoinMember from './components/JoinMember'

    export default {
        name: "JoinGroups",
        mounted(){
          this.$nextTick(function () {
             this.joingroupsscroll=new BScroll (this.$refs.joingroupsScroll,{
               click:true
             })
          })
        },
      beforeRouteLeave(to,from,next){
        if(to.name=='index'){
          this.$store.commit("keepAlives",[])
        }
        next()
      },
        components:{
          BottomBlank,DetailAndPurchase,DetailSwiper,DetailHeader,GoClassification,GroupsShop,ShopContent,JoinMember
        }
    }
</script>

<style scoped>
   .joingroups{
     width: 100%;
     display: flex;
     position: absolute;
     top: 64px;
     bottom: 50px;
   }
   .joingroups-scroll{
     width: 100%;
     overflow: hidden;
   }
</style>
