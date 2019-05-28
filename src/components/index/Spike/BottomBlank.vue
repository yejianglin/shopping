<!--秒杀详情页底部-->
<template>
  <div class="bottomblank">
    <div class="bottomblank-operating">
      <div class="bottom-contact">
        <i class="aisziyuan"></i>
      </div>
      <div class="bottom-shopcar">
        <i class="aisgouwuchekong"></i>
      </div>
      <div class="bottom-collection">
        <i class="aisshoucang1"></i>
      </div>
    </div>
    <div  class="bottomblank-buy" :class="{changestyle:time===0}" @click="ImmediateBuy(time)" >
      {{text}}
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shoplist: {
          shopname: '商品名称',
          shopimg: '.././static/images/shop.png',
          shopprice: 198,
          shopcount:0,
          checkshopVerification:false
        },
        time:10,
        days:0,
        hours:0,
        minutes:0,
        second:0,
        text:""
      }
    },
    methods: {
      ImmediateBuy(time) {
         if(time===0){
             console.log("秒杀")
         }
         if(time>0){
           console.log("还未开抢")
         }
      },
      countdown(){
        window.setInterval(() => {
          if(this.time>0){
            this.time--
            this.days=Math.floor(this.time/86400)
            this.hours=Math.floor((this.time-this.days*86400)/3600)
            this.minutes=Math.floor((this.time-this.days*86400-this.hours*3600)/60)
            this.second=this.time-this.days*86400-this.hours*3600-this.minutes*60
            this.text="立即秒杀"+"("+this.days+"天"+this.hours+"时"+this.minutes+"分"+this.second+"秒"+")"
          }
          if(this.time===0){
            this.text="立即秒杀"
          }
      },1000)
      }
    },
    mounted() {
      this.countdown();
    }
  }
</script>

<style scoped>
  .bottomblank {
    width: 100%;
    height: 50px;
    display: flex;
    position: fixed;
    z-index: 20;
    bottom: 0px;
    justify-content: space-between;
    line-height: 50px;
    border-top: gainsboro solid 1px;
  }

  .bottomblank-operating {
    width: 40%;
    display: flex;
    justify-content: space-between;
  }

  .bottom-contact {
    width: 33%;
    text-align: center;
    border-right: gainsboro solid 1px;
  }

  .bottom-shopcar {
    width: 33%;
    text-align: center;
    border-right: gainsboro solid 1px;
  }

  .bottom-collection {
    width: 33%;
    text-align: center;
    border-right: gainsboro solid 1px;
  }

  .bottomblank-buy {
    width: 60%;
    text-align: center;
    background-color: #FF8A8A;
    color: gainsboro;
    cursor: not-allowed;
  }
  .changestyle{
    background-color: #FF6C6C;
    color: white;
  }


</style>
