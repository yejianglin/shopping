<!--物流信息-->
<template>
    <div class="shipinformation">
      <ShipInformationHeader></ShipInformationHeader>
      <div class="shipinformationscroll" ref="shipinformationScroll">
         <div class="container">
           <Estimate></Estimate>
           <ShipDetail></ShipDetail>
         </div>
      </div>
      <div class="shipinformation-phone">
         <img class="shipinformation-phone-img" src="../../../../.././assets/images/mine/myorder/shipinformation/phone.png"/>
      </div>
      <ShipBottom></ShipBottom>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import ShipInformationHeader from './ShipInformationHeader'
    import Estimate from './Estimate'
    import ShipDetail from './ShipDetail'
    import ShipBottom from './ShipBottom'
    export default {
        name: "ShipInformation",
        components:{
          ShipInformationHeader,Estimate,ShipDetail,ShipBottom
        },
      mounted() {
        this.$nextTick(function(){
          this.shipinformationscroll=new BScroll(this.$refs.shipinformationScroll,{
            click:true
          })
        })
      },
    }
</script>

<style scoped>
  .shipinformation {
    width: 100%;
    display: flex;
    position: absolute;
    top: 64px;
    bottom: 50px;
    background-color: #F5F5F6;
  }
  .shipinformationscroll{
    width: 100%;
    overflow: hidden;
  }
  .shipinformation-phone{
    position: fixed;
    right: 32px;
    top: 360px;
  }
  .shipinformation-phone-img{
    width: 32px;
    height: 32px;
  }
</style>
