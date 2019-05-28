<!--邀请加入代理引入-->
<template>
    <div class="invitation">
      <InvitationHeader></InvitationHeader>
      <div class="invitationscroll" ref="invitationScroll">
        <div class="container">
          <InvitationContent></InvitationContent>
        </div>
      </div>
      <InvitationBottom></InvitationBottom>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import InvitationHeader from './components/InvatationHeader'
    import InvitationContent from './components/InvitaitionContent'
    import InvitationBottom from './components/InvitationBottom'

    export default {
        name: "Invitation",
        components:{
          InvitationHeader,InvitationContent,InvitationBottom
        },
        mounted() {
          this.$nextTick(function () {
            this.invitationscroll =new BScroll(this.$refs.invitationScroll,{
              click:true
            })
          })
        }
    }
</script>

<style scoped>
  .invitation{
    width: 100%;
    display: flex;
    position: absolute;
    top: 64px;
    bottom: 50px;
  }
  .invitationscroll{
    width: 100%;
    overflow: hidden;
  }
</style>
