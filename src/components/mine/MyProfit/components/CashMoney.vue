<!--我的收益提现记录-->
<template>
    <div class="cashmoney" @click="cashMoneyRecord">
       <div class="cashmoney-text">我的提现记录</div>
       <i class="aisjiantouyou"></i>
    </div>
</template>

<script>
    export default {
        name: "CashMoney",
        data(){
          return{
             cashMoneyDetail:[
               {
                 icon:'../../../../.././static/images/mine/myprofit/success.png',
                 cashMoneyStatus:'成功',
                 orderNum:23434232323,
                 cashMoneySum:24,
                 cashMoneyTime:'02-24 17:34'
               },
               {
                 icon:'../../../../.././static/images/mine/myprofit/success.png',
                 cashMoneyStatus:'成功',
                 orderNum:23434232323,
                 cashMoneySum:24,
                 cashMoneyTime:'02-24 17:34'
               },{
                 icon:'../../../../.././static/images/mine/myprofit/success.png',
                 cashMoneyStatus:'成功',
                 orderNum:23434232323,
                 cashMoneySum:24,
                 cashMoneyTime:'02-24 17:34'
               }

             ]
          }
        },
        methods:{
          cashMoneyRecord(){
            this.$router.push({name:"CashMoneyRecord",params:{cashMoneyRecord:this.cashMoneyDetail}})
          }
        }
    }
</script>

<style scoped>
  .cashmoney{
    width: 100%;
    height: 50px;
    margin-top: 10px;
    line-height: 50px;
    display: flex;
    background-color: white;
  }
  .cashmoney-text{
    margin: 0 0 0 15px;
    font-size: 14px;
    font-family: PingFangSC;
    color: #333333;
  }
  .aisjiantouyou{
    position: absolute;
    right: 15px;
    font-size: 12px;
    color: #AAAAAA;
  }
</style>
