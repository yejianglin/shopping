<!--其他分类商品内容-->
<template>
    <div class="othershopcontent">
      <div class="othershopcontent-shop-bigbox">
        <div class="othershopcontent-shop" v-for="(item,index) in shopDetailList" :key='index' >
          <div class="othershopcontent-shop-box" @click="goShopDetail()">
            <img class="othershopcontent-shop-img" :src="item.shopImg" />
          </div>
          <div class="othershopcontent-shop-detail">
            <span class="othershopcontent-shop-detail-text">{{item.shopDetail}}</span>
            <div class="othershopcontent-shop-detail-price">
              <div class="detail-price-box">
                <span class="detail-price-box-present">{{item.presentPrice}}</span>
              </div>
              <div class="othershopcontent-shop-detail-price-add" @click="popupMenu()">
                <img class="othershopcontent-shop-detail-price-add-img" src="../../../../assets/images/index/jiahao.png">
              </div>
            </div>
          </div>
          <div class="othershopcontent-commission" v-if="$store.state.isAgent">
            佣金:&nbsp;5.23%
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ChildrenContent",
        data(){
          return{
            show:false,
            shopDetailList:[]
          }
        },
        mounted() {
          this.shopDetailList=this.$route.params.saleKind.leiBie.shopDetailList
          console.log(this.$route.params.saleKind.leiBie.shopDetailList)
        },
      methods:{
        goShopDetail(){
          this.$router.push({name:'ShopDetail',params:{}})
        },
        popupMenu(){
          this.show=true
          this.$emit("toOtherShop",this.show)
        }
      },

    }
</script>

<style scoped>
  .othershopcontent-shop-bigbox{
    width: 92%;
    display: flex;
    flex-wrap: wrap;
    margin: 5px 4% 0 4%;
  }
  .othershopcontent-shop{
    width: 30%;
    display: flex;
    background-color: #F2F2F2;
    flex-direction: column;
    margin: 2% 1.66% 2% 1.66%;
    border-radius: 10px;
  }
  .othershopcontent-shop-img{
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .othershopcontent-shop-detail{
    margin-left: 4%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
  }
  .othershopcontent-shop-detail-text{
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
  .othershopcontent-shop-detail-price{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    padding: 0 5px 5px 0px;
  }
  .detail-price-box-present{
    margin: 0 0 4% 0;
  }
  .detail-price-box{
    display:flex;
    flex-direction: column;
  }
  .detail-price-box-present{
    font-size: 12px;
    color: #FB5651;
  }
  .othershopcontent-shop-detail-price-add{
    width: 16px;
    height:16px;
  }
  .othershopcontent-shop-detail-price-add-img{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .othershopcontent-commission{
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
</style>
