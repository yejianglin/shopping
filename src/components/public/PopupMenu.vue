<!--商品属性弹出菜单-->
<template>
  <div class="popupmenu">
      <div class="bottommenus-img" @click="cancel()">
        <img class="bottommenus-img-content" src="../.././assets/images/index/quxiao.png"/>
      </div>
      <div class="bottommenus-desc" >
        <div class="bottommenus-desc-box">
          <img class="bottommenus-desc-img"/>
        </div>
        <div class="bottommenus-desc-detail">
          <span></span>
          <div class="bottommenus-desc-detail-price">
            <div class="detail-price-box">
              <span class="detail-price-box-present"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="bottommenus-spec">
        <div class="bottommenus-spec-title">
          尺寸选择
        </div>
        <div class="bottommenus-spec-size">
          <span class="bottommenus-spec-size-l">2升容量</span>
          <span class="bottommenus-spec-size-l">4升容量</span>
        </div>
        <div class="bottommenus-spec-title">
          颜色选择
        </div>
        <div class="bottommenus-spec-color">
          <span class="bottommenus-spec-color-c">香槟色</span>
          <span class="bottommenus-spec-color-c">黄色</span>
        </div>
        <div class="bottommenus-spec-title">
          数量选择
        </div>
        <div class="bottommenus-spec-count">
          <span class="aisjianqu" @click="reduceCount()"></span>
          <span class="sum"></span>
          <span class="aisjia" @click="addCount()"></span>
        </div>
      </div>
      <div class="botton-sure" @click="sureAdd()">
        确定
      </div>
    </div>

</template>

<script>
  export default {
    name: "Popupmenu",
    data(){
      return{

      }
    },
    props:[
     "popupMessage"
    ],
    methods:{
      cancel(){
        this.$emit("toOtherShop",false)
      },
      reduceCount(){
        if(this.$store.state.shopMsg.shopSpec.shopcount>1){
          this.$store.state.shopMsg.shopSpec.shopcount--
        }
      },
      addCount(){
        this.$store.state.shopMsg.shopSpec.shopcount++
      },
      sureAdd(){
        this.$emit("toOtherShop",false)
      }
    }
  }
</script>

<style scoped>
  .bottommenus-img{
    width:100%;
    text-align: right;
  }
  .bottommenus-img-content{
    width: 30px;
    height: 30px;
    padding-top: 10px;
    padding-right: 10px;
  }
  .bottommenus-desc{
    width: 92%;
    display: flex;
    margin: 0px 4% 0px 4%;
    padding-bottom: 20px;
    border-bottom: gainsboro solid 1px;
  }
  .bottommenus-desc-img{
    width: 70px;
    height: 70px;
  }
  .bottommenus-desc-detail{
    margin-left: 4%;
    display: flex;
    flex-direction:column;
    font-size: 14px;
    font-family: PingFangSC;
    justify-content: space-between;
  }
  .bottommenus-desc-detail-price{
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
  }
  .detail-price-box-present{
    margin: 0 0 4% 0;
  }
  .detail-price-box{
    display:flex;
    flex-direction: column;
  }
  .detail-price-box-present{
    font-size: 18px;
    color: #FB5651;
  }
  .bottommenus-spec{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .bottommenus-spec-title{
    width: 92%;
    height: 50px;
    line-height: 50px;
    font-family: PingFangSC;
    font-weight: bolder;
    font-size: 14px;
    margin: 0 4% 0 4%;
  }
  .bottommenus-spec-size{
    width: 92%;
    display: flex;
    font-size: 12px;
    margin: 0 4% 0 4%;
  }
  .bottommenus-spec-size-l{
    padding: 6px 19px 6px 19px;
    border-radius: 14px;
    background-color: #EEEEEE;
    margin-right: 10px;
  }
  .bottommenus-spec-color{
    width: 92%;
    display: flex;
    font-size: 12px;
    margin: 0 4% 0 4%;
  }
  .bottommenus-spec-color-c{
    padding: 6px 19px 6px 19px;
    border-radius: 14px;
    background-color: #EEEEEE;
    margin-right: 10px;
  }
  .bottommenus-spec-count {
    width: 92%;
    display: flex;
    margin: 0 4% 0 4%;
  }

  .aisjianqu {
    border: gainsboro 1px solid;
  }

  .sum {
    width: 30px;
    text-align: center;
    border: gainsboro 1px solid;
  }

  .aisjia {
    border: gainsboro 1px solid;
  }
  .botton-sure{
    width: 92%;
    height: 45px;
    text-align: center;
    line-height: 45px;
    margin: 30px 4% 0 4%;
    background-color: #FF6C6C;
    border-radius: 23px;
    color: white;
  }
</style>
>
