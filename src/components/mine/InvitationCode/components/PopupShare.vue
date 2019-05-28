<template>
    <div class="popupshare">
        <div class="popupshare-share">
           <div class="popupshare-share-friend">
               <div>
                 <img class="popupshare-share-friend-img" src="../../../../assets/images/mine/invitation/sharefriend.png"/>
               </div>
              <span class="popupshare-share-friend-text">分享好友</span>
           </div>
           <div class="popupshare-share-circle">
             <div>
               <img class="popupshare-share-circle-img" src="../../../../assets/images/mine/invitation/sharefrendclice.png"/>
             </div>
             <span class="popupshare-share-circle-text">分享朋友圈</span>
           </div>
        </div>
        <div class="popupshare-cancel" @click="cancel">
           取消
        </div>
    </div>
</template>

<script>
    export default {
        name: "PopupShare",
        data(){
          return{
            show:false
          }
        },
        methods:{
          cancel(){
            this.$emit("toInvitationCode",this.show)
          }
        }
    }
</script>

<style scoped>
  .popupshare-share{
    width:94%;
    padding: 12px 3% 12px 3%;
    display: flex;
    border-bottom: gainsboro 1px solid;
  }
  .popupshare-share-friend{
    width: 50%;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  .popupshare-share-friend-img{
    width: 50px;
    height: 50px;
  }
  .popupshare-share-circle{
    width: 50%;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  .popupshare-share-circle-img{
    width: 50px;
    height: 50px;
  }
  .popupshare-cancel{
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
</style>
