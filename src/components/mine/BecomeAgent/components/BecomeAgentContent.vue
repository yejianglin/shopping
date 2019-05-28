<!--成为代理中间内容部分-->
<template>
    <div class="becomeagentcontent">
      <div class="becomeagentcontent-box">
        <div class="becomeagentcontent-box-title">
           姓名
        </div>
        <input class="becomeagentcontent-box-input" placeholder="请输入姓名" v-model="name" />
      </div>
      <div class="becomeagentcontent-box">
        <div class="becomeagentcontent-box-title">
          性别
        </div>
        <input class="becomeagentcontent-box-input" placeholder="请输入性别" v-model="sex"/>
      </div>
      <div class="becomeagentcontent-box">
        <div class="becomeagentcontent-box-title">
          身份证号码
        </div>
        <input class="becomeagentcontent-box-input" placeholder="请输入身份证号码" v-model="idCard"/>
      </div>

      <div class="becomeagentcontent-box">
        <div class="becomeagentcontent-box-title">
          手机号码
        </div>
        <div class="becomeagentcontent-box-num">
          <input class="becomeagentcontent-box-num-input" placeholder="请输入手机号码" v-model="phoneNum"/>
          <div class="becomeagentcontent-box-num-img">
            <img class="becomeagentcontent-box-num-img-content" src="../../../../assets/images/mine/verification/yanzheng.png"/>
          </div>
        </div>
      </div>

      <div class="becomeagentcontent-box">
        <div class="becomeagentcontent-box-title">
          手机验证码
        </div>
          <input class="becomeagentcontent-box-input" placeholder="请输入手机验证码" v-model="verificationCode"/>
      </div>
      <div class="becomeagentcontent-box">
        <div class="becomeagentcontent-box-title">
          邀请码
        </div>
        <input class="becomeagentcontent-box-input" placeholder="如果您有邀请码,请输入" v-model="InvitationCode"/>
      </div>
    </div>
</template>

<script>
    export default {
        name: "BecomeAgentContent",
        data(){
          return{
            name:null,
            sex:null,
            idCard:null,
            phoneNum:null,
            verificationCode:null,
            InvitationCode:null,
          }
        },
        methods:{
        }
    }
</script>

<style scoped>
  .becomeagentcontent-box-title{
    width: 96%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #333333;
    font-family: PingFangSC;
    background-color:#F5F5F6;
    padding:0 0 0 4%;

  }
   input::-webkit-input-placeholder{
     color: #CCCCCC;
     width: 96%;
     height: 50px;
     font-size: 14px;
   }
  .becomeagentcontent-box-input{
    width: 96%;
    height: 50px;
    border: 0px;
    padding: 0 0 0 4%;
    font-size: 14px;
  }
  .becomeagentcontent-box-num{
    display: flex;
  }
  .becomeagentcontent-box-num-input{
    width: 60%;
    height: 50px;
    border: 0px;
    padding: 0 0 0 4%;
    font-size: 14px;
  }
  .becomeagentcontent-box-num-img{
    flex: 1;
    background-color: white;
  }
  .becomeagentcontent-box-num-img-content{
    width:88px;
    height: 28px;
    position: absolute;
    right: 10px;
    margin-top: 11px;
  }
</style>
