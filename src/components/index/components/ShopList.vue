<template>
  <div class="shoplist">
    <!--每周团购-->
    <div v-for="(item,index) in this.goodList.leiBieArray" v-if="item.state==2" :key="index">
      <div class="joingroups">
        <div class="joingroups-content">
          <img class="joingroups-content-img" :src="item.leiBieImg">
        </div>
        <div class="joingroups-shop"  v-for="(items,index) in item.leiBie.shopDetailList" @click="goGroups()" :key='index'>
          <div class="joingroups-shop-box">
            <div class="joingroups-shop-time">
              <div class="joingroups-shop-time-tips">
            <span class="joingroups-shop-time-tips-time">
               20:00
            </span>
                <span class="joingroups-shop-time-tips-start">
               开团
            </span>
              </div>
              <img class="joingroups-shop-time-img" src="../../../assets/images/index/hongchou.png"/>
            </div>
            <img class="joingroups-shop-img" :src="items.shopImg" />
          </div>
          <div class="joingroups-shop-detail">
            <span>{{items.shopDetail}}</span>
            <div class="joingroups-shop-detail-price">
              <div class="detail-price-box">
                <span class="detail-price-box-present">{{items.presentPrice}}</span>
                <span class="detail-price-box-original">{{items.originalPrice}}</span>
              </div>
              <div class="Instantgroups-box">
                <span class="Instantgroups">我要开团</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   <!--其他销售产品-->
    <div class="othershop" v-for="(item,index) in this.goodList.leiBieArray" v-if="item.state==1" :key="index">
        <div class="othershop-content">
          <img class="othershop-content-img" :src="item.leiBieImg">
        </div>
        <div class="othershop-shop-bigbox">
          <div class="othershop-shop"  v-for="(items,index) in item.leiBie.shopDetailList" :key="index">
            <div class="othershop-shop-box" @click="goShopDetail()">
              <img class="othershop-shop-img" :src="items.shopImg" />
            </div>
            <div class="othershop-shop-detail">
              <span class="othershop-shop-detail-text">{{items.shopDetail}}</span>
              <div class="othershop-shop-detail-price">
                <div class="othershop-detail-price-box">
                  <span class="othershop-detail-price-box-present">{{items.presentPrice}}</span>
                </div>
                <div class="othershop-shop-detail-price-add" @click="popupMenu(items)">
                  <img class="othershop-shop-detail-price-add-img" src="../../../assets/images/index/jiahao.png">
                </div>
              </div>
            </div>
            <div class="othershop-commission" v-if="$store.state.isAgent">
              佣金:&nbsp;5.23%
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "ShopList",
        props:{
          goodList:{
            type:Object
          }
        },
        data(){
          return{
            popupMenus:{
              show:false,
              popupMessage:{

              }
            }
          }
        },
        methods:{
          goGroups(){
            this.$router.push({name:'JoinGroups',params:{startGroups:true,joinMember:[]}})
          },
          goShopDetail(){
            this.$router.push({name:'ShopDetail',params:{}})
          },
          popupMenu(items){
            this.popupMenus.show=true
            this.popupMenus.popupMessage=items
            this.$emit("toIndex",this.popupMenus)
          }
        },
    }
</script>

<style scoped>
  /*其他商品销售*/
  .othershop{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
  .othershop-content{
    width: 92%;
    margin: 0 4% 0 4%;

  }
  .othershop-content-img{
    width: 100%;
    overflow: hidden;
  }
  .othershop-shop-bigbox{
    width: 92%;
    display: flex;
    flex-wrap: wrap;
    margin: 5px 4% 0 4%;
  }
  .othershop-shop{
    width: 30%;
    display: flex;
    background-color: #F2F2F2;
    flex-direction: column;
    margin: 2% 1.66% 2% 1.66%;
    border-radius: 10px;
  }
  .othershop-shop-img{
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .othershop-shop-detail{
    margin-left: 4%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
  }
  .othershop-shop-detail-text{
    font-family: PingFangSC;
    font-size: 14px;
    height: 40px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:2;
    overflow: hidden;
    padding: 0 8px 0 3px;
    color: #333333;
  }
  .othershop-shop-detail-price{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    padding: 0 5px 5px 0px;
  }
  .othershop-detail-price-box-present{
    margin: 0 0 4% 0;
  }
  .othershop-detail-price-box{
    display:flex;
    flex-direction: column;
  }
  .othershop-detail-price-box-present{
    font-size: 12px;
    color: #FB5651;
  }
  .othershop-shop-detail-price-add{
    width: 16px;
    height:16px;
  }
  .othershop-shop-detail-price-add-img{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .othershop-commission{
    width:100%;
    height: 24px;
    background-color: #FFA7A7;
    font-size: 12px;
    color: white;
    line-height: 24px;
    text-align: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .joingroups{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
  .joingroups-content{
    width: 92%;
    margin: 0 4% 0 4%;
  }
  .joingroups-content-img{
    width: 100%;
    overflow: hidden;
  }
  .joingroups-shop{
    width: 92%;
    display: flex;
    margin: 4% 4% 4% 4%;
  }
  .joingroups-shop-time{
    position: absolute;
    left:6%;
  }
  .joingroups-shop-time-img{
    width: 35px;
    height: 42px;
  }
  .joingroups-shop-time-tips{
    position: absolute;
    left: 1px;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    color: white;
    text-align: center;
  }

  /*每周团购*/
  .joingroups-shop-img{
    width: 120px;
    height: 120px;
  }
  .joingroups-shop-detail{
    margin-left: 4%;
    flex-grow: 1;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
  }
  .joingroups-shop-detail-price{
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
  .detail-price-box-original{
    font-size: 12px;
    color: gainsboro;
    text-decoration: line-through;
  }
  .Instantgroups-box{
    text-align: center;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .Instantgroups{
    padding: 4px 15px 4px 15px;
    border-radius: 15px;
    background:-webkit-linear-gradient(top,#FF8A8A,#FF6C6C);
    font-size: 12px;
    color: white;
  }
</style>
