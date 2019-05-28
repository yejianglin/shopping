<!--提交定单引入-->
<template>
	<div class="summitorder">
    <SummitOrderHeader></SummitOrderHeader>
     <div class="summitorderscroll" ref="summitorderScroll">
       <div class="container">
         <AddAddress></AddAddress>
         <ShopOrder :submitShop="submitShop"></ShopOrder>
         <Discount></Discount>
       </div>
     </div>
     <BottomSummit :computeAllPrice="computeAllPrice"></BottomSummit>
	</div>
</template>

<script>
   import BScroll from 'better-scroll'
   import SummitOrderHeader from './components/SummitOrderHeader'
   import AddAddress from './components/AddAddress'
   import ShopOrder from './components/ShopOrder'
   import Discount from './components/Discount'
   import BottomSummit from './components/BottomSummit'
  export default {
     name:'SummitOrder',
     data(){
       return{
         submitShop:[]
       }
     },
     mounted(){
       this.$nextTick(function () {
         this.summitorderscroll = new BScroll(this.$refs.summitorderScroll,{
           click: true
         })
         this.summitorderscroll.on('scroll',(pos)=>{
           this.scrollY=Math.abs(Math.round(pos.y))
         })
         this.summitorderscroll.scrollTo(0,-this.$store.state.scrollTop)
       })
       this.submitShop=this.$route.params.selectArray
     },
     computed:{
       computeAllPrice(){
         var allPrice=0
         for(let i in this.submitShop){
           allPrice=allPrice+(this.submitShop[i].shopNum*this.submitShop[i].shopPrice+this.submitShop[i].freight)*100
         }
         return allPrice
       }
     },
     components:{
       SummitOrderHeader,AddAddress,ShopOrder,Discount,BottomSummit
     }
  }
</script>

<style scoped lang="less">
  .summitorder{
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 64px;
    bottom: 50px;
    background-color: #F5F5F6;
  }
  .summitorderscroll{
    width: 100%;
    overflow: hidden;
  }
</style>
