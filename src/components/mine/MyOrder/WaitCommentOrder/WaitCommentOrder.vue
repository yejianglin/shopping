<!--带评论订单引入-->
<template>
    <div class="waitcommentorder">
      <WaitCommentOrderContent></WaitCommentOrderContent>
    </div>
</template>

<script>
  import WaitCommentOrderContent from './WaitCommentOrderContent'
    export default {
        name: "WaitCommentOrder",
        components:{
          WaitCommentOrderContent
        }
    }
</script>

<style scoped>

</style>
