<!--物流详情-->
<template>
    <div class="shipdetail">
       <div class="shipdetail-header">
          <div class="shipdetail-header-img">
              <img class="shipdetail-header-img-content" src="../../../../../../static/images/shop.png" />
          </div>
          <div class="shipdetail-header-desc">
              <span class="shipdetail-header-desc-status">物流状态:正在配送</span>
              <span class="shipdetail-header-desc-source">承运来源:顺丰快递</span>
              <span class="shipdetail-header-desc-odd">物流单号:12466466566565565655</span>
              <span class="shipdetail-header-desc-senddata">发货时间:2018-4-11&nbsp;12:20</span>
          </div>
       </div>
       <div class="shipdetail-track">
         <div class="shipdetail-track-text">
            <span>物流跟踪</span>
         </div>
         <van-steps direction="vertical" active-color="#333333" :active="0">
           <van-step v-for="(item,index) in shipStatus" :key="index">
              <p>{{item.shipMsg}}</p>
              <p>{{item.shipData}}</p>
           </van-step>

         </van-steps>
       </div>
    </div>
</template>

<script>
    export default {
        name: "Shipdetail",
        data(){
          return{
            shipStatus:[
              {
                shipMsg:'物流状态1',
                shipData:'2018-9-9'
              },
              {
                shipMsg:'物流状态1',
                shipData:'2018-9-9'
              },
              {
                shipMsg:'物流状态1',
                shipData:'2018-9-9'
              },
              {
                shipMsg:'物流状态1',
                shipData:'2018-9-9'
              },
            ]
          }

        }
    }
</script>

<style scoped>
  .shipdetail{
    width: 93%;
    background-color: white;
    position: relative;
    top:-70px;
    left: 3.5%;
    box-shadow: -1px 0 8px gainsboro,0 -1px 8px gainsboro,1px 0px 8px gainsboro,0 1px 8px gainsboro;
  }
  .shipdetail-header{
    width: 92%;
    margin: 0 auto;
    display: flex;
    border-bottom:gainsboro solid 1px;
  }
  .shipdetail-header-img{
    margin: 16px 0 18px 0;
  }
  .shipdetail-header-img-content{
    width: 66px;
    height: 66px;
    border-radius: 33px ;
  }
  .shipdetail-header-desc{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    margin: 16px 0 18px 12px;
  }
  .shipdetail-header-desc span{
    font-size: 12px;
    color: #777777;
    padding: 0 0 1px 0;
  }
  .shipdetail-track-text{
    font-size: 14px;
    margin: 10px 0 0 15px;
    color:#777777;
  }
</style>
