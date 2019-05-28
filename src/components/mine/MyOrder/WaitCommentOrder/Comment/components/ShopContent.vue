<!--商品内容-->
<template>
    <div class="shopcontent">
       <div class="shopcontent-msg">
         <div class="shopcontent-msg-box">
           <img class="shopcontent-msg-box-img" src="../../../../../../../static/images/shop.png" />
         </div>
         <div class="shopcontent-msg-desc">
           <span class="shopcontent-msg-desc-text">
             商品名称
           </span>
         </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: "CommentShop"
    }
</script>

<style scoped>
  .shopcontent{
    width: 70%;
    margin:0 auto;
    border-bottom:gainsboro solid 1px;
  }
  .shopcontent-msg{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .shopcontent-msg-box{
    text-align: center;
  }
  .shopcontent-msg-box-img{
    width: 60px;
    height: 60px;
    overflow: hidden;
    margin:20px 0 15px 0;
    border-radius: 30px;
  }
  .shopcontent-msg-desc{
    text-align: center;
    margin-bottom: 20px;
  }
</style>
