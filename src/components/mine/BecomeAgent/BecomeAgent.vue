<!--成为代理引入-->
<template>
    <div class="becomeagent">
      <BecomeAgentHeader></BecomeAgentHeader>
       <div class="becomeagentscroll" ref="becomeAgentScroll">
          <div class="container">
            <BecomeAgentContent></BecomeAgentContent>
            <BecomeAgentBottom></BecomeAgentBottom>
          </div>
       </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import BecomeAgentHeader from './components/BecomeAgentHeader'
  import BecomeAgentContent from './components/BecomeAgentContent'
  import BecomeAgentBottom from './components/BecomeAgentBottom'
    export default {
        name: "BecomeAgent",
        components:{
          BecomeAgentHeader,BecomeAgentContent,BecomeAgentBottom
        },
        mounted() {
          this.$nextTick(function () {
            this.becomeagentscroll=new BScroll(this.$refs.becomeAgentScroll,{
              click:true
            })
          })
        }
    }
</script>

<style scoped>
   .becomeagent{
     width: 100%;
     display: flex;
     position: absolute;
     top: 64px;
     bottom: 0px;
     background-color:#F5F5F6 ;
   }
  .becomeagentscroll{
    width: 100%;
    overflow: hidden;
  }
</style>
