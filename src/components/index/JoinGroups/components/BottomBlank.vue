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
    </div>
    <div  class="bottomblank-start" v-if="startGroups" >
       我要开团
    </div>
    <div class="bottomblank-join" v-if="false">
       立即参团
    </div>
    <div class="bottomblank-seek" v-if="seekMember">
       寻找团员
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
        startGroups:false,
        seekMember:false
      }
    },
    mounted(){
      this.startGroups=this.$route.params.startGroups
      this.seekMember=this.$route.params.seekMember
    },
    methods: {

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
  .bottomblank-start {
    width: 60%;
    text-align: center;
    background-color: #FF6C6C;
    color: white;
    cursor: not-allowed;
  }
  .bottomblank-join{
    width: 60%;
    text-align: center;
    background-color: #FF6C6C;
    color: white;
    cursor: not-allowed;
  }
  .bottomblank-seek{
    width: 60%;
    text-align: center;
    background-color: #FF6C6C;
    color: white;
    cursor: not-allowed;
  }
</style>
