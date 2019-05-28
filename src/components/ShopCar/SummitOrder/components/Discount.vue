<!--优惠券-->
<template>
    <div class="discount">
      <div class="discount-integral">
         <span class="discount-integral-text">积分抵扣</span>
         <span class="discount-integral-go">剩余20积分,最多可抵扣2元&nbsp;<i class="aisjiantouyou"></i></span>
      </div>
      <div class="discount-ponpu" @click="myDiscount()">
        <span class="discount-ponpu-text">优惠券</span>
        <span class="discount-ponpu-go">暂无可用<i class="aisjiantouyou"></i></span>
      </div>
    </div>
</template>

<script>
      export default {
      name: "Discount",
      data() {
        return {

        }
      },
      methods: {
        myDiscount(){
          this.$router.push({name:'MyDiscount',params:{}})
        }
      },

      }
</script>

<style scoped lang="less">
   .discount{
     width: 100%;
     display: flex;
     flex-direction: column;
     background-color: white;
   }
  .discount-integral{
    width: 100%;
    height: 50px;
    display: flex;
    line-height: 50px;
    border-bottom: gainsboro solid 1px;
  }
  .discount-integral-text{
    position: absolute;
    left: 15px;
    font-size: 14px
  }
  .discount-integral-go{
    position: absolute;
    right: 15px;
    color: #AAAAAA;
    font-size: 14px;
  }
   .discount-ponpu{
     width: 100%;
     height: 50px;
     display: flex;
     line-height: 50px;
     border-bottom: gainsboro solid 1px;
   }
   .discount-ponpu-text{
     position: absolute;
     left: 15px;
     font-size: 14px
   }
   .discount-ponpu-go{
     position: absolute;
     right: 15px;
     color: #AAAAAA;
     font-size: 14px;
   }
  .aisjiantouyou{
    font-size:14px;
  }

</style>
