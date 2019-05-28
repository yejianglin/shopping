<!--邀请码中间内容-->
<template>
    <div class="invitationcontent">
       <div class="invitationcontent-qrcode">

       </div>
       <div class="invitationcontent-code">
         邀请码:634233
       </div>
    </div>
</template>

<script>
    export default {
        name: "InvitationContent"
    }
</script>

<style scoped>
   .invitationcontent{
     width: 76%;
     height: 490px;
     margin: 25px 12% 0 12%;
     background-color:gainsboro;
   }
  .invitationcontent-qrcode{
    width: 70px;
    height: 70px;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%,0);
    background-color: #0086b3;
  }
  .invitationcontent-code{
    position: absolute;
    top:75%;
    left: 50%;
    transform: translate(-50%,0);
    font-size: 12px;
    color: rebeccapurple;
  }
</style>
