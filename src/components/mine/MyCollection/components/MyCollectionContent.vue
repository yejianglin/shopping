<!--我的收藏内容部分-->
<template>
    <div class="mycollectioncontent-shop-bigbox">
        <div class="mycollectioncontent-shop" v-for="(item,index) in this.$store.state.collectionArray" :key='index' >
        <div class="mycollectioncontent-shop-box" @click="goShopDetail()">
          <img class="mycollectioncontent-shop-img" :src="item.shopImg" />
        </div>
        <div class="mycollectioncontent-shop-detail">
          <span class="mycollectioncontent-shop-detail-text">{{item.shopName}}</span>
          <div class="mycollectioncontent-shop-detail-price">
            <div class="detail-price-box">
              <span class="detail-price-box-present">{{item.shopPrice}}</span>
            </div>
            <div class="mycollectioncontent-shop-detail-price-add" @click="">
              <img class="mycollectioncontent-shop-detail-price-add-img">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default{
    data(){
      return{
        shopMsg:{
          shopSpec:{

          }
        },
      }
    },
    methods:{
      goShopDetail(){
        this.$router.push({name:'ShopDetail',params:{}})
      },
    }
  }
</script>

<style scoped>
  .mycollectioncontent-shop-bigbox{
    width: 92%;
    display: flex;
    flex-wrap: wrap;
    margin: 5px 4% 0 4%;
  }
  .mycollectioncontent-shop{
    width: 30%;
    display: flex;
    background-color: #F2F2F2;
    flex-direction: column;
    margin: 2% 1.66% 2% 1.66%;
    border-radius: 10px;
  }
  .mycollectioncontent-shop-img{
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .mycollectioncontent-shop-detail{
    margin-left: 4%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
  }
  .mycollectioncontent-shop-detail-text{
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
  .mycollectioncontent-shop-detail-price{
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
  .mycollectioncontent-shop-detail-price-add{
    width: 16px;
    height:16px;
  }
  .mycollectioncontent-shop-detail-price-add-img{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

</style>

