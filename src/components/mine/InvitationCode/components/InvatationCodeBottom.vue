<!--邀请码底部-->
<template>
    <div class="InvatationCodeBottom">
       <div class="InvatationCodeBottom-copy">
           复制注册口令
       </div>
      <div class="InvatationCodeBottom-share" @click="sharePoster()">
           分享专属海报
      </div>
    </div>
</template>

<script>
    export default {
        name: "InvatationCodeBottom",
        data(){
          return{
            show:true
          }
        },
        methods:{
          sharePoster(){
            this.$emit("toInvitationCode",this.show)
          }
        }
    }
</script>

<style scoped>
   .InvatationCodeBottom{
     width: 86%;
     margin: 36px 7% 0 7%;
     display: flex;
   }
   .InvatationCodeBottom-copy{
     width: 48%;
     border:orange solid 1px;
     height: 34px;
     line-height: 34px;
     text-align: center;
     color: orange;
     border-radius: 5px;
   }
   .InvatationCodeBottom-share{
     width: 48%;
     border:indianred solid 1px;
     height: 34px;
     line-height: 34px;
     text-align: center;
     color: indianred;
     border-radius: 5px;
     margin-left: 4%;
   }
</style>
