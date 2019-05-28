<!--邀请加入底部-->
<template>
    <div class="invitationbottom">
       <span>代理数量:&nbsp;0位</span>
    </div>
</template>

<script>
    export default {
        name: "InvitationBottom"
    }
</script>

<style scoped>
   .invitationbottom{
     width: 100%;
     height: 50px;
     position: fixed;
     bottom: 0px;
     left: 0px;
     text-align: center;
     line-height: 50px;
     background:-webkit-linear-gradient(top,#FF8E8E,#FE7474);
     color: white;
     font-size: 18px;
     font-family: PingFangSC;
   }
</style>
