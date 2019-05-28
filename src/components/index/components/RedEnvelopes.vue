<!--首页弹出红包模块-->
<template>
    <div class="redenvelopes">
       <div class="redenvelopescover" v-if="this.$store.state.activeRedenvelopes" >
         <div  class="redenvelopesimg">
           <div class="redenvelopes-discount" >
             <div class="redenvelopes-discount-box" v-for="(item,index) in discountArray" :key="index">
               <div class="redenvelopes-discount-box-price">
                 ￥{{item.price}}
               </div>
               <div class="redenvelopes-discount-box-desc">
                 <span class="text">{{item.desc}}</span>
                 <span class="effectivedata">{{item.effectiveData}}</span>
               </div>
               <div class="redenvelopes-discount-box-btn">
                 <div class="btn">立即使用</div>
               </div>
             </div>
           </div>
           <div class="redenvelopes-look">
             查看我的优惠券
           </div>
           <div class="redenvelopes-img-cancel" @click="cancel()">
             <img class="redenvelopes-img-cancel-img" src="../../../assets/images/index/chacha.png"/>
           </div>
         </div>
       </div>

    </div>
</template>

<script>
    export default {
        name: "RedeEnvelopes",
        data(){
          return{
            discountArray:[
              {
                 price:50,
                 desc:"全品类新手券",
                 effectiveData:"有效期:2019-01-02"
              },
              {
                price:50,
                desc:"全品类新手券",
                effectiveData:"有效期:2019-01-02"
              },
              {
                price:50,
                desc:"全品类新手券",
                effectiveData:"有效期:2019-01-02"
              },
            ],
          }
        },
        methods:{
          cancel(){
            this.$store.commit("changeRedenvelopes",false)
          }
        },
        mounted() {
          this.discountArray.splice(1,this.discountArray.length-2)
        }
    }
</script>

<style scoped>
  .redenvelopescover{
     width: 100%;
     height: 100%;
     background-color: rgba(0,0,0,0.5);
     position: fixed;
     top: 0px;
     left: 0px;
     z-index: 99;
   }
  .redenvelopesimg{
     width: 270px;
     height: 350px;
     background-image: url("../../../assets/images/index/redbag.png");
     background-size:100% 86% ;
     background-repeat: no-repeat;
     position: fixed;
     top: 0px;
     left: 0px;
     bottom: 0px;
     right: 0px;
     margin: auto;
     z-index: 100;
  }
  .redenvelopes-discount{
     margin-top: 110px;
  }
  .redenvelopes-discount-box{
     width:90%;
     display: flex;
     margin:5px auto ;
    background-color: white;
    border-radius: 5px;
  }
  .redenvelopes-discount-box-price{
    height: 70px;
    font-size: 17px;
    color:#FB0007;
    line-height: 70px;
    padding-left: 15px;
  }
  .redenvelopes-discount-box-desc{
    display: flex;
    flex-direction: column;
    margin-left: 14px;
  }
  .text{
    font-size: 14px;
    font-family: PingFangSC;
    margin-top: 14px;
  }
  .effectivedata{
    font-size: 10px;
    font-family: PingFangSC;
    margin-top: 8px;
    color: #AAAAAA;
  }
  .redenvelopes-discount-box-btn{
    margin-left: 24px;
  }
  .btn{
    width: 56px;
    height: 25px;
    font-family: PingFangSC;
    line-height: 25px;
    text-align: center;
    background-color: #FF6466;
    font-size: 12px;
    color: white;
    margin-top: 24px;
  }
  .redenvelopes-look{
    color: #FEBD09;
    font-size: 14px;
    font-family: PingFangSC;
    text-align: center;
    margin-top: 11px;
  }
  .redenvelopes-img-cancel{
    position: absolute;
    bottom: 0px;
    left: 50%;
    margin-left: -14px;
  }
  .redenvelopes-img-cancel-img{
    width: 28px;
    height: 28px;
  }

</style>
