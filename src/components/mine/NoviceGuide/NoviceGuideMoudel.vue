<!--新手指引模块内容-->
<template>
    <div class="noviceguidemoudel">
      <div class="noviceguidemoudel-share">
         <div class="noviceguidemoudel-share-top">
            <div class="noviceguidemoudel-share-top-content">
               分享商品赚收益
            </div>
         </div>
         <div class="noviceguidemoudel-share-bottom">
              <span class="noviceguidemoudel-share-bottom-text">分享商品赚收益攻略</span>
              <span class="aisfenxiang"></span>
         </div>
      </div>
      <div class="noviceguidemoudel-explain">
        <div class="noviceguidemoudel-explain-top">
          <div class="noviceguidemoudel-explain-top-content">
            分享商品赚收益
          </div>
        </div>
        <div class="noviceguidemoudel-explain-bottom">
          <span class="noviceguidemoudel-explain-bottom-text">订单与收益说明</span>
          <span class="aisfenxiang"></span>
        </div>
      </div>
      <div class="noviceguidemoudel-cash">
        <div class="noviceguidemoudel-cash-top">
          <div class="noviceguidemoudel-cash-top-content">
            分享商品赚收益
          </div>
        </div>
        <div class="noviceguidemoudel-cash-bottom">
          <span class="noviceguidemoudel-cash-bottom-text">收益提现流程</span>
          <span class="aisfenxiang"></span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "noviceGuideMoudel"
    }
</script>

<style scoped lang="less">
  .noviceguidemoudel{
    width:100%;
    display: flex;
    flex-direction: column;
  }
  .noviceguidemoudel-share{
    display: flex;
    flex-direction: column;
    margin: 10px 15px 0px 15px;
  }
  .noviceguidemoudel-share-top{
    width:100%;
    padding:0 0 0 0;
    /*height:135px;*/
    background:-webkit-linear-gradient(left,#FFA2DC,#B867FF);
    display: flex;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .noviceguidemoudel-share-top-content {
    width: 49.5%;
    height:40px;
    line-height: 40px;
    text-align: center;
    overflow: hidden;
    background-image: url("../../.././assets/images/mine/noviceguide/boxborder.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 15% 25.5% 15%  25%;
    color: white;
  }
  .noviceguidemoudel-share-bottom{
    width:100%;
    height: 35px;
    line-height: 35px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    background-color: white;
  }
  .noviceguidemoudel-share-bottom-text{
    position:absolute;
    font-size: 12px;
    left: 20px;

  }
  .aisfenxiang{
    position: absolute;
    right:20px;
  }
  .noviceguidemoudel-explain{
    display: flex;
    flex-direction: column;
    margin: 10px 15px 0px 15px;
  }
  .noviceguidemoudel-explain-top{
    width:100%;
   /* height:135px;*/
    background:-webkit-linear-gradient(left,#FFA277,#FF8567);
    display: flex;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .noviceguidemoudel-explain-top-content {
    width: 49.5%;
    height:40px;
    line-height: 40px;
    text-align: center;
    overflow: hidden;
    background-image: url("../../.././assets/images/mine/noviceguide/boxborder.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 15%  25.5% 15%  25%;
    color: white;
  }
  .noviceguidemoudel-explain-bottom{
    width:100%;
    height: 35px;
    line-height: 35px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    background-color: white;
  }
  .noviceguidemoudel-explain-bottom-text{
    position:absolute;
    left: 20px;
    font-size: 12px;
  }
  .noviceguidemoudel-cash{
    display: flex;
    flex-direction: column;
    margin: 10px 15px 0px 15px;
  }
  .noviceguidemoudel-cash-top{
    width:100%;
   /* height:135px;*/
    background:-webkit-linear-gradient(left,
    #FFE777,#FFB467);
    display: flex;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .noviceguidemoudel-cash-top-content {
    width: 49.5%;
    height:40px;
    line-height: 40px;
    text-align: center;
    overflow: hidden;
    background-image: url("../../.././assets/images/mine/noviceguide/boxborder.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 15%  25.5% 15%  25%;
    color: white;
  }
  .noviceguidemoudel-cash-bottom{
    width:100%;
    height: 35px;
    line-height: 35px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    background-color: white;
  }
  .noviceguidemoudel-cash-bottom-text{
    position:absolute;
    left: 20px;
    font-size: 12px;
  }

</style>
