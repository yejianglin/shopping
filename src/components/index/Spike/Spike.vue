<!--秒杀引入-->
<template>
    <div class="spike">
      <SpikeHeader></SpikeHeader>
      <div class="spikescroll" ref="spikeScroll">
        <div class="container">
          <SpikeSwiper></SpikeSwiper>
          <SpikeShop></SpikeShop>
          <ShopContent></ShopContent>
          <SpikeGoFenlei></SpikeGoFenlei>
          <ShopContent></ShopContent>
          <SpikePurchase></SpikePurchase>
        </div>
      </div>
        <BottomBlank></BottomBlank>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import SpikeHeader from './DetailHeader'
    import SpikeSwiper from './DetailSwiper'
    import SpikeShop  from './SpikeShop'
    import SpikeGoFenlei from './GoClassification'
    import ShopContent from '@/components/Public/ShopContent'
    import SpikePurchase from './DetailAndPurchase'
    import BottomBlank from './BottomBlank'
    export default {
        name: "spike",
        components:{
          SpikeHeader,SpikeSwiper,SpikeShop,ShopContent,SpikeGoFenlei,ShopContent,SpikePurchase,BottomBlank
        },
        mounted() {
            this.$nextTick(function(){
            this.spikescroll=new BScroll(this.$refs.spikeScroll,{
              click:true
            })
          })
        }
    }
</script>

<style scoped lang="less">
  .spike{
    width: 100%;
    display: flex;
    position: absolute;
    bottom: 50px;
    top: 50px;
  }
  .spikescroll {
    width: 100%;
    overflow: hidden;

  }
</style>
