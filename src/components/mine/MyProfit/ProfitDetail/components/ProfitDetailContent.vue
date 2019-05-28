<template>
    <div class="profitdetailcontent">
      <!--未结算-->
      <div class="profitdetailcontent-box" v-for="(item,index) in profit"  :key="index">
        <div v-if="item.state==1">
          <div class="profitdetailcontent-title">
            <span class="profitdetailcontent-title-text">{{item.desc}}</span>
            <span class="profitdetailcontent-title-price">￥12.9</span>
          </div>
          <div class="profitdetailcontent-settlement" v-for="(items,index) in item.SettlementList" :key="index">
            <div class="pdc-ns-left">
              <div class="pdc-ns-left-desc">
                 {{items.shopDesc}}
              </div>
              <div class="pdc-ns-left-data">
                <span class="pdc-ns-left-data-setup">创建日:&nbsp;{{items.setupData}}</span>
                <span class="pdc-ns-left-data-st">结算日:&nbsp;{{items.settlementData}}</span>
              </div>
              <div class="pdc-ns-left-consmer">
                消费者:{{items.consumer}}
              </div>
            </div>
            <div class="pdc-ns-right">
              <div class="pdc-ns-right-prifit">+&nbsp;￥{{items.profitPrice}}</div>
              <div class="pdc-ns-right-shopprice">订单金额:{{items.shopPrice}}</div>
            </div>
          </div>
        </div>
        <div v-if="item.state==2">
          <div class="profitdetailcontent-title">
            <span class="profitdetailcontent-title-text-ed">{{item.desc}}</span>
            <span class="profitdetailcontent-title-price">￥12.9</span>
          </div>
          <div class="profitdetailcontent-settlement" v-for="(items,index) in item.SettlementList" :key="index">
            <div class="pdc-ns-left">
              <div class="pdc-ns-left-desc">
                 {{items.shopDesc}}
              </div>
              <div class="pdc-ns-left-data">
                <span class="pdc-ns-left-data-setup">创建日:&nbsp;{{items.setupData}}</span>
                <span class="pdc-ns-left-data-st">结算日:&nbsp;{{items.settlementData}}</span>
              </div>
              <div class="pdc-ns-left-consmer">
                消费者:{{items.consumer}}
              </div>
            </div>
            <div class="pdc-ns-right">
              <div class="pdc-ns-right-prifit">+&nbsp;￥{{items.profitPrice}}</div>
              <div class="pdc-ns-right-shopprice">订单金额:{{items.shopPrice}}</div>
            </div>
          </div>
        </div>
      </div>
        </div>
</template>

<script>
    export default {
        name: "ProfitDetailContent",
        data(){
          return{
             profit:[]
          }
        },
        mounted() {
          this.profit=this.$route.params.profit
          console.log(this.profit)
        }

    }
</script>

<style scoped>
  .profitdetailcontent{
    width: 100%;
  }
  .profitdetailcontent-title{
    width:92%;
    padding: 0 4% 0 4%;
    display: flex;
    justify-content: space-between;
    height: 45px;
    line-height: 45px;
    background-color: #F5F5F6;
  }
  .profitdetailcontent-title-text{
    font-size: 18px;
    color: #333333;
  }
  .profitdetailcontent-title-text-ed{
    font-size: 18px;
    color: #AAAAAA;
  }
  .profitdetailcontent-title-price{
    color: #FF0000;
    font-size: 18px;
  }
  .profitdetailcontent-settlement{
    width: 92%;
    padding: 0 4% 0 4%;
    display: flex;
    justify-content: space-between;
    border-bottom: #F5F5F6 solid 1px;
    background-color: white;
  }
  .pdc-ns-left{
    width:70%;
  }
  .pdc-ns-left-desc{
    font-family: PingFangSC;
    font-size: 14px;
    overflow:hidden;
    word-break:keep-all;
    white-space:nowrap;
    text-overflow:ellipsis;
    padding: 15px 0px 0 0px;
    color: #333333;
  }
  .pdc-ns-left-data{
    width: 240px;
    padding:6px 0 0 0;
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    color: #AAAAAA;
  }
 .pdc-ns-left-consmer{
    font-size: 10px;
    color:#AAAAAA;
    padding: 8px 0 10px 0;
 }
  .pdc-ns-right{
    text-align: right;
  }
  .pdc-ns-right-prifit{
    font-size: 12px;
    color: #FF0000;
    padding: 17px 0 0 0;
  }
  .pdc-ns-right-shopprice{
    font-size: 10px;
    color: #AAAAAA;
    padding: 8px 0 0 0;
  }

</style>
