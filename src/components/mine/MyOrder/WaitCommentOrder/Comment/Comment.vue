<!--评论引入-->
<template>
    <div class="comment">
      <CommentHeader></CommentHeader>
      <div class="commentscroll" ref="commentScroll">
        <div class="container">
          <ShopContent></ShopContent>
          <CommentShop></CommentShop>
        </div>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import CommentHeader from './components/CommentHeader'
  import ShopContent from './components/ShopContent'
  import CommentShop from './components/CommentShop'
    export default {
        name: "Comment",
        components:{
          CommentHeader,ShopContent,CommentShop
        },
      mounted() {
        this.$nextTick(function(){
          this.commentscroll=new BScroll(this.$refs.commentScroll,{
            click:true
          })
        })
      },
    }
</script>

<style scoped>
 .comment{
   width: 100%;
   display: flex;
   position: absolute;
   top: 64px;
   bottom: 0px;
 }
  .commentscroll{
    width: 100%;
    overflow: hidden;
  }
</style>
