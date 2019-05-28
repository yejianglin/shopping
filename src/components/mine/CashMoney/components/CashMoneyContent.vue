<!--提现中间内容-->
<template>
    <div class="cashmoenycontent">
       <div class="cashmoenycontent-box">
         <div class="cashmoneycontent-target">
           <div class="cashmoneycontent-target-left">
             到账目标
           </div>
           <div class="cashmoneycontent-target-right">
             <span class="cashmoneycontent-target-right-text">零钱</span>
             <span class="cashmoneycontent-target-right-arrive">立即到账</span>
           </div>
         </div>
         <div class="cashmoneycontent-sum">
           <div class="cashmoneycontent-sum-title">
             提现金额
           </div>
           <div class="cashmoneycontent-sum-input">
             <span class="cashmoneycontent-sum-input-text">￥</span>
             <input class="cashmoneycontent-sum-input-money" readonly="readonly" type="text" @touchstart.stop="show=true" v-model="inputValue" />
           </div>
         </div>
         <div class="cashmoneycontent-cash">
           <div class="cashmoneycontent-cash-title">
             <span class="cashmoneycontent-cash-title-money">余额￥243.23,</span>
             <span class="cashmoneycontent-cash-title-all">全部提现</span>
           </div>
           <div class="cashmoneycontent-cash-button">
             提现
           </div>
         </div>
       </div>
      <van-number-keyboard
        :show="show"
        extra-key="."
        close-button-text="完成"
        @blur="show = false"
        @input="onInput"
        @delete="onDelete"
        @show="myFun"
      />
    </div>
</template>

<script>
    export default {
        name: "CashMoneyContent",
      data() {
        return {
          show: false,
          inputValue:''
        }
      },

      methods: {
        onInput(value) {

          this.inputValue=(this.inputValue+value).slice(0)
        },
        onDelete() {
          this.inputValue=this.inputValue.slice(0,this.inputValue.length-1)
        },
        myFun(){
        event.preventDefault()
        }
      }
    }
</script>

<style scoped>
   .cashmoenycontent{
     width: 94%;
     display: flex;
     flex-direction: column;
     margin: 20px 3% 0px 3%;
   }
   .cashmoenycontent-box{
     background-color: white;
   }
  .cashmoneycontent-target{
    width: 90%;
    display: flex;
    border-bottom: gainsboro solid 1px;
    margin:0 5% 0 5%;
  }
  .cashmoneycontent-target-left{
    width:30%;
    margin:15px 0 50px 0px ;
    font-family: PingFangSC;
    font-size: 14px;
    font-weight: 500;
  }
  .cashmoneycontent-target-right{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    margin: 15px 0 0 0;
  }
  .cashmoneycontent-target-right-text{
    font-family: PingFangSC;
    font-size: 14px;
    font-weight: 500;
  }
  .cashmoneycontent-target-right-arrive{
    font-family: PingFangSC;
    font-size: 12px;
    font-weight: 500;
    color: #AAAAAA;
    margin-top: 5px;
  }
  .cashmoneycontent-sum{
    width: 90%;
    display: flex;
    flex-direction: column;
    border-bottom: gainsboro solid 1px;
    margin:0 5% 0 5%;
  }
  .cashmoneycontent-sum-title{
    margin: 15px 0 0 0px;
    font-size: 14px;
    font-family: PingFangSC;
    font-weight: 500;
  }
  .cashmoneycontent-sum-input{
    margin: 10px 0 10px 0px;
  }
  .cashmoneycontent-sum-input-text{
    font-size: 40px;
    font-family: PingFangSC;
    font-weight: bolder;
  }
  .cashmoneycontent-sum-input-money{
    border: none;
    padding: 0 0 0 0;
    height:40px;
    font-size:20px;
  }
  .cashmoneycontent-cash{
    width: 90%;
    display: flex;
    flex-direction: column;
    margin:0 5% 0 5%;
  }

  .cashmoneycontent-cash-title{
    margin: 15px 0 0 0px;
  }
  .cashmoneycontent-cash-title-money{
    font-family: PingFangSC;
    font-size: 12px;
    font-weight: 500;
    color: #AAAAAA;
  }
  .cashmoneycontent-cash-title-all{
    font-family: PingFangSC;
    font-size: 12px;
    font-weight: 500;
    color: dodgerblue;
  }
  .cashmoneycontent-cash-button{
    margin:31px 0 26px 0px;
    width: 100%;
    height: 45px;
    background-color: #FF6C6C;
    text-align:center ;
    line-height: 45px;
    color: white;
  }
</style>
