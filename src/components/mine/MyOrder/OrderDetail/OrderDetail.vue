<!--订单详情引入-->
<template>
    <div class="orderdetail">
      <OrderDetailHeader></OrderDetailHeader>
      <OrderDetailBottom></OrderDetailBottom>
      <div class="orderdetailscroll" ref="orderDetailScroll">
        <div class="container">
          <OrderDetailContent></OrderDetailContent>
          <OrderDetailNumber></OrderDetailNumber>
          <OrderDetailTotal></OrderDetailTotal>
        </div>
      </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import OrderDetailHeader from './components/OrderDetailHeader'
    import OrderDetailBottom from './components/OrderDetailBottom'
    import OrderDetailContent from './components/OrderDetailContent'
    import OrderDetailNumber from './components/OrderDetailNumber'
    import OrderDetailTotal from './components/OrderDetailTotal'
    export default {
        name: "OrderDetail",
        components:{
          OrderDetailHeader,OrderDetailBottom,OrderDetailContent,OrderDetailNumber,OrderDetailTotal
        },
        mounted() {
          this.$nextTick(function () {
            this.orderdetailsrcroll=new BScroll(this.$refs.orderDetailScroll,{
              click:true
            })
          })
        },
    }
</script>

<style scoped>
    .orderdetail{
      width: 100%;
      display: flex;
      position: absolute;
      top: 64px;
      bottom: 50px;
      background-color: #F5F5F6;
    }
    .orderdetailscroll{
      width: 100%;
      overflow: hidden;
    }
</style>
