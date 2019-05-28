<!--商品详情底部-->
<template>
  <div class="bottomblank">
    <div class="bottomblank-operating">
      <div class="bottom-contact" @click="goChat">
        <i class="aisziyuan"></i>
      </div>
      <div class="bottom-shopcar">
        <i class="aisgouwuchekong"></i>
      </div>
    </div>
    <div class="bottomblank-buy" @click="ImmediateBuy()">
      <div class="buynow">
        <span>立即购买</span>
      </div>
      <div class="addshopcar" @click="AddShopcar()">
        <span>加入购物车</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showItem:{
          show:false,
          chatShow:false,
        }
      }
    },
    methods: {
      ImmediateBuy() {
        this.showItem.show=true
        this.showItem.chatShow=false
        this.$emit("toShopDetail",this.showItem)
      },
      AddShopcar() {
        this.showItem.show=true
        this.showItem.chatShow=false
       this.$emit("toShopDetail",this.showItem)
      },
      goChat(){
        this.showItem.chatShow=true
        this.showItem.show=false
        this.$emit("toShopDetail",this.showItem)
      }
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
    width: 50%;
    text-align: center;
    border-right: gainsboro solid 1px;
  }

  .bottom-shopcar {
    width: 50%;
    text-align: center;
    border-right: gainsboro solid 1px;
  }
  .bottomblank-buy {
    width: 60%;
    display: flex;
    flex-direction: row;
  }

  .buynow {
    width: 50%;
    text-align: center;
    background-color: #FF6C6C;
    color: white;
  }

  .addshopcar {
    width: 50%;
    text-align: center;
    background-color: #FFCB80;
    color: white;
  }
</style>
