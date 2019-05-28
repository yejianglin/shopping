<!--秒杀商品分类内容-->
<template>
  <div class="joingroupscontent">
    <div class="joingroupscontent-shop" v-for="(item,index) in shopDetailList" :key='index'>
      <div class="joingroupscontent-shop-box">
        <img class="joingroupscontent-shop-img" :src="item.shopImg" />
      </div>
      <div class="joingroupscontent-shop-detail">
        <span>{{item.shopDetail}}</span>
        <div class="joingroupscontent-shop-detail-price">
          <div class="detail-price-box">
            <span class="detail-price-box-present">{{item.presentPrice}}</span>
            <span class="detail-price-box-original">{{item.originalPrice}}</span>
          </div>
          <div class="Instantgroups-box" >
            <span class="Instantgroups" @click="goGroups()">我要参团</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "WeekSpikeContent",
        data(){
          return{
            shopDetailList:[]
          }
        },
        mounted(){
          this.shopDetailList=this.$route.params.saleKind.leiBie.shopDetailList
        },
        methods:{
          goGroups(){
            this.$router.push({name:'JoinGroups',params:{startGroups:true,joinMember:[]}})
          },

        }
    }
</script>

<style scoped>
  .joingroupscontent{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
  .joingroupscontent-shop{
    width: 92%;
    display: flex;
    margin: 4% 4% 4% 4%;
  }
  .joingroupscontent-shop-img{
    width: 120px;
    height: 120px;
  }
  .joingroupscontent-shop-detail{
    margin-left: 4%;
    flex-grow: 1;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
  }
  .joingroupscontent-shop-detail-price{
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
