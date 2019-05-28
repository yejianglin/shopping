<template>
    <div class="SMSVerification">
       <div class="SMSVerification-title">
         <div class="SMSVerification-title-text">
           验证码登录
         </div>
         <div class="SMSVerification-title-img" @click="cancel()">
           <img class="SMSVerification-title-img-content" src="../../../../assets/images/index/shopdetail/cancel.png"/>
         </div>
       </div>
       <div class="SMSVerification-phone">
         <input type="number" class="SMSVerification-phone-input" placeholder="输入手机号码"/>
       </div>
       <div class="SMSVerification-code">
         <input type="number" class="SMSVerification-code-input" placeholder="输入验证码"/>
         <div class="SMSVerification-code-obtain">获取验证码</div>
       </div>
      <div class="SMSVerification-btn">
        确定
      </div>
    </div>
</template>

<script>
    export default {
        name: "SMSVerification",
        data(){
          return{
            chatShow:false
          }
        },
        methods:{
          cancel(){
            this.$emit('toShopDetail',this.chatShow)
          }
        }
    }
</script>

<style scoped>
   .SMSVerification{
     width: 320px;
     height: 260px;
     padding: 17px 15px 22px 15px;
   }
  .SMSVerification-title{
    width: 100%;
    height: 26px;
    line-height: 26px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
  }
  .SMSVerification-title-img-content{
    width: 26px;
    height: 26px;
  }
   .SMSVerification-phone{
     margin-top: 20px;
   }
  .SMSVerification-phone-input{
    width: 290px;
    height: 46px;
    font-size: 14px;
    border: gainsboro solid 1px;
    padding: 0 15px 0 15px;

  }
  .SMSVerification-code{
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }
  .SMSVerification-code-input{
    width: 180px;
    height: 46px;
    font-size: 14px;
    border: gainsboro solid 1px;
    padding: 0 15px 0 15px;
  }
  .SMSVerification-code-obtain{
    width: 100px;
    height: 46px;
    line-height:46px;
    font-size: 14px;
    border: #E02F0D solid 1px;
    color: #E02F0D;
    text-align: center;
  }
  .SMSVerification-btn{
    margin-top: 20px;
    width: 100%;
    height: 48px;
    background-color: #FF6C6C;
    color: white;
    font-size: 14px;
    text-align: center;
    line-height: 48px;
  }
</style>
