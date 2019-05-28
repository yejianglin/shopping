<!--邀请加入代理中间内容部分-->
<template>
    <div class="invitationcontent">
      <div class="invitationcontent-items">
        <div class="invitationcontent-items-invitation">
           <div class="invitationcontent-items-invitation-img"></div>
           <span class="invitationcontent-items-invitation-text">邀请好友</span>
        </div>
        <div class="invitationcontent-items-order">
          <div class="invitationcontent-items-invitation-img"></div>
          <span class="invitationcontent-items-invitation-text">好友下单</span>
        </div>
        <div class="invitationcontent-items-profit">
          <div class="invitationcontent-items-invitation-img"></div>
          <span class="invitationcontent-items-invitation-text">获得收益</span>
        </div>
      </div>
      <div class="invitationcontent-immediately-agent"  @click="goInvitationCode" v-if="$store.state.isAgent">
          立即邀请
      </div>
      <div class="invitationcontent-immediately-noagent" v-if="!$store.state.isAgent">
         立即邀请
      </div>
    </div>
</template>

<script>
    export default {
        name: "InvitaitionContent",
        methods:{
          goInvitationCode(){
            this.$router.push({name:'InvitationCode',params:{}})
          }
        }
    }
</script>

<style scoped>
  .invitationcontent{
    width: 100%;
  }
  .invitationcontent-items{
    display: flex;
    width: 80%;
    margin: 153px 10% 0 10%;
    justify-content: space-between;
  }
  .invitationcontent-items-invitation-img{
    width: 42px;
    height: 42px;
    border-radius: 21px;
    background-color: gainsboro;
    margin: 0 auto 15px auto;
  }
  .invitationcontent-items-invitation-text{
    color: #AAAAAA;
    font-size: 14px;
    font-family: PingFangSC;
  }
  .invitationcontent-immediately-agent{
    width: 80%;
    height: 40px;
    background: -webkit-linear-gradient(top,#FF8E8E,#FF6C6C);
    border-radius: 20px;
    margin: 80px 10% 0 10%;
    text-align: center;
    line-height: 40px;
    font-family:PingFangSC;
    font-size: 16px;
    color: white;
  }
  .invitationcontent-immediately-noagent{
    width: 80%;
    height: 40px;
    background: -webkit-linear-gradient(top,#D8D8D8,gray);
    border-radius: 20px;
    margin: 80px 10% 0 10%;
    text-align: center;
    line-height: 40px;
    font-family:PingFangSC;
    font-size: 16px;
    color: white;
  }
</style>
