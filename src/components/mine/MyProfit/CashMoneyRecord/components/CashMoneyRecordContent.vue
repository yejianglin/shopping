<template>
    <div class="cashmoneyrecordcontent">
        <div class="cmrc-box" v-for="(item,index) in cashMoneyRecord" :key="index">
           <div class="cmrc-box-left">
              <img class="cmrc-box-left" :src="item.icon"/>
           </div>
           <div class="cmrc-box-center">
               <div class="cmrc-box-center-success">
                  {{item.cashMoneyStatus}}
               </div>
               <div class="cmrc-box-center-message">
                  <div class="cmrc-box-center-message-order">订单:</div>
                  <div class="cmrc-box-center-message-num">&nbsp;{{item.orderNum}}</div>
                  <van-button type="default" v-clipboard:copy="item.orderNum">复制</van-button>
               </div>
           </div>
           <div class="cmrc-box-right">
                <div class="cmrc-box-right-money">+&nbsp;￥{{item.cashMoneySum}}</div>
                <div class="cmrc-box-right-data">{{item.cashMoneyTime}}</div>
           </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CashMoneyRecordContent",
        data(){
          return{
            cashMoneyRecord:[],
          }
        },
        mounted() {
          this.cashMoneyRecord=this.$route.params.cashMoneyRecord
        }
    }
</script>

<style scoped>
  .cashmoneyrecordcontent>>>.van-button{
    width: 42px;
    height: 17px;
    border-radius: 8px;
    line-height: 17px;
    font-size: 12px ;
    color: #AAAAAA;
    padding: 0;
    margin-left: 10px;
  }
  .cmrc-box{
    width: 92%;
    padding: 12px 15px 16px 15px;
    display: flex;
    background-color: white;
    border-bottom: #F5F5F6 solid 1px;
  }
  .cmrc-box-left{
    width: 15px;
    height: 15px;
  }
  .cmrc-box-center{
    margin: 0 0 0 10px;
    width: 50%;
  }
  .cmrc-box-center-success{
    font-size: 14px;
    color: #AAAAAA;
  }
  .cmrc-box-center-message{
    display: flex;
    margin-top: 5px;
    font-size: 12px;
    color: #AAAAAA;
  }
  .cmrc-box-right{
    flex-grow: 1;
    font-size: 12px;
    text-align: right;
  }
  .cmrc-box-right-money{
    color: #FF0000;
  }
  .cmrc-box-right-data{
    margin-top: 8px;
    color:#AAAAAA;
  }
</style>
