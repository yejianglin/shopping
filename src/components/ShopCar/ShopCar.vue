<!--购物车引入-->
<template>
	<div class="shopcar">
    <ShopCarHeader></ShopCarHeader>
    <div class="shopcar-scroll" ref="shopCarScroll">
      <div class="container">
        <div class="scc">
          <van-swipe-cell :right-width="65":on-close="onClose" v-for="(items,index) in shopCar" :key="index">
            <van-cell-group >
              <div class="scc-shop" @click="goShopDetail">
                <div style="width: 45px;display: flex" @click.stop="stopMaoPao">
                  <van-checkbox v-model="items.checked" @click="seleted()"></van-checkbox>
                </div>
                <div style="margin: 13px 0 13px 0; align-self: center; width: 27%;">
                  <img style="width:100%;height: 100%" :src="items.shopImg"/>
                </div>
                <div style="flex-grow:1;margin:13px 15px 13px 15px;padding: 0 0 5px 0;display: flex;flex-direction: column;justify-content: space-between">
                  <div style="width: 100%;">
                    {{items.shopName}}
                  </div>
                  <div style="display: flex;justify-content: space-between">
                    <div>￥{{items.shopPrice}}</div>
                    <div @click.stop="stopMaoPao">
                      <van-stepper v-model="items.shopNum" @plus="addCount(items)" @minus="reduceCount(items)"  />
                    </div>
                  </div>
                </div>
              </div>
            </van-cell-group>
            <span slot="right">删除</span>
          </van-swipe-cell>
        </div>
      </div>
    </div>
    <div>
      <van-submit-bar
        :price="totalPrice"
        :disabled="selectArray.length==0"
        button-text="立即结算"
        @submit="onSubmit"
      >
        <van-checkbox v-model="checkedAll" @click="seletedAll()">全选</van-checkbox>
      </van-submit-bar>
    </div>
	</div>
</template>

<script>
  import BScroll from 'better-scroll'
	import ShopCarHeader from './components/ShopCarHeader'
  import {Dialog} from 'vant';

	export default {
		name: 'shopcar',
    data(){
      return{
        checkedAll:false,//是否全选
        shopCar:[
          {
            shopName:"这是一个商品",
            shopImg:"../../../../static/images/shop.png",
            shopPrice:120,
            shopNum:2,
            checked:null,
            freight:6
          },
          {
            shopName:"这是一个商品",
            shopImg:"../../../../static/images/shop.png",
            shopPrice:120,
            shopNum:2,
            checked:null,
            freight:6
          },
          {
            shopName:"这是一个商品",
            shopImg:"../../../../static/images/shop.png",
            shopPrice:120,
            shopNum:2,
            checked:null,
            freight:0
          },
          {
            shopName:"这是一个商品",
            shopImg:"../../../../static/images/shop.png",
            shopPrice:120,
            shopNum:2,
            checked:null,
            freight:3
          }
        ],
        totalPrice:0,//商品总价
        selectArray:[],//被选中的商品存放在此数组
      }
    },
    mounted(){
		  this.$nextTick(function () {
        this.shopcarscroll=new BScroll(this.$refs.shopCarScroll,{
          click:true
        })
      })
      for(var i in this.shopCar){
        this.shopCar[i].checked=false
      }
    },
    beforeRouteLeave(to,from,next){
		  if(to.name=="SummitOrder"){
        this.$store.commit("keepAlives",["SummitOrder"])
      }
		  next()
    },
		components: {
      ShopCarHeader
		},
    computed:{
		  //计算选中的商品的价格
       computePrice(){
        var  sumPrice=0
        for(let i in this.shopCar){
          if(this.shopCar[i].checked==true){
            sumPrice=sumPrice+this.shopCar[i].shopPrice*100*this.shopCar[i].shopNum
          }
        }
         return sumPrice
      },
    },
    methods: {
      onSubmit(){
        this.$router.push({name:'SummitOrder',params:{selectArray:this.selectArray}})
      },
      stopMaoPao(){
      },
      goShopDetail(){
       this.$router.push({name:"ShopDetail",params:{}})

      },
      onClose(clickPosition, instance) {
        switch (clickPosition) {
          case 'left':
          case 'cell':
          case 'outside':
            instance.close();
            break;
          case 'right':
            Dialog.confirm({
              message: '确定删除吗？'
            }).then(() => {
              instance.close();
            });
            break;
        }
      },
      //单选
      seleted(){
        //计算选中了多少个购物车中的商品
        var seletedCount=0
        this.selectArray=[]
       for(let i in this.shopCar){
         if(this.shopCar[i].checked==true){
           seletedCount++
           this.selectArray.push(this.shopCar[i])
         }
       }
       this.totalPrice=this.computePrice

       //如果全部选中,全选按钮也被选中
       if(seletedCount==this.shopCar.length){
         this.checkedAll=true
       }else{
         this.checkedAll=false
       }
      },

      //全选
      seletedAll(){
        this.selectArray=[]
        if(this.checkedAll==true){
          for(let i in this.shopCar){
            this.shopCar[i].checked=true
            this.selectArray.push(this.shopCar[i])
          }
          this.totalPrice=this.computePrice
        }else{
          for(let i in this.shopCar){
            this.shopCar[i].checked=false
          }
          this.totalPrice=0
        }
      },

      //商品增加
      addCount(items){
         items.shopNum++
        if(items.checked==true){
          this.totalPrice=this.computePrice
        }
      },
      //商品减少
      reduceCount(items){
        items.shopNum--
        if(items.checked==true){
          this.totalPrice=this.computePrice
        }
      }
    }
	}
</script>

<style scoped>
   .shopcar{
     width: 100%;
     display: flex;
     position: absolute;
     bottom: 100px;
     top: 64px;
   }
  .shopcar-scroll{
    width:100%;
    overflow: hidden;
  }
   .shopcar>>>.van-swipe-cell__right {
     display: flex;
     width: 65px ;
     font-size: 15px ;
     color: #fff ;
     text-align: center ;
     background-color: #f44 ;
     align-items: center;
   }
   .scc-shop{
     width: 100%;
     display: flex;
   }
   .shopcar>>>.van-checkbox{
     width: 45px;
     text-align: center;
     align-self: center
   }
  .shopcar>>>.van-submit-bar{
    bottom: 51px;
  }
</style>
