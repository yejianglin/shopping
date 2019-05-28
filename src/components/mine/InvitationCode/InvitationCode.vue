<!--邀请码引入-->
<template>
    <div class="invitationcode">
      <InvitationCodeHeader></InvitationCodeHeader>
      <div class="invitationcodescroll" ref="invitationCodeScroll">
        <div class="container">
          <InvitationContent></InvitationContent>
          <InvitationCodeBottom v-on:toInvitationCode="fromInvitationCodeBottom"></InvitationCodeBottom>
        </div>
      </div>
      <van-popup v-model="show" position="bottom" :overlay="true">
         <PopupShare v-on:toInvitationCode="fromPopupShare"></PopupShare>
      </van-popup>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import InvitationCodeHeader from './components/InvitationCodeHeader'
    import InvitationContent from './components/InvitationContent'
    import InvitationCodeBottom from './components/InvatationCodeBottom'
    import PopupShare from './components/PopupShare'

    export default {
        name: "InvitationCode",
        data(){
          return{
            show:false,
          }
        },
        mounted(){
          this.$nextTick(function () {
            this.invitationcodescroll=new BScroll(this.$refs.invitationCodeScroll,{
              click:true
            })
          })
    },
        components:{
          InvitationCodeHeader,InvitationContent,InvitationCodeBottom,PopupShare
        },
        methods:{
          fromInvitationCodeBottom(data){
            this.show=data
          },
          fromPopupShare(data){
            this.show=data
          }
        }

    }
</script>

<style scoped>
  .invitationcode>>>.van-popup--bottom{
    width: 101%;
  }
  .invitationcode{
    width:100%;
    display: flex;
    position: absolute;
    top: 64px;
    bottom: 0px;
  }
 .invitationcodescroll{
   width: 100%;
   overflow: hidden;
 }
</style>
