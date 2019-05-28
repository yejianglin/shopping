<!--左滑删除订单-->
<template>
  <div class="deleteshop">
    <!--购物车选中的商品容器-->
    <div class="deleteshopscroll" ref='deleteShopScroll'>
      <div class="container">
        <!--循环遍历被添加到购物车中的商品-->
        <van-swipe-cell :right-width="65" v-for="(item,index) in this.$store.state.shopArray" :name="index" :key='index'
                        :on-close="onClose">
          <van-cell-group>
            <div class="deleteshop-shop">
              <div class="deleteshop-check">
                <i class="aisfuxuankuang_xuanzhong" :class="{checkcolor:item.checkshopVerification}"
                   @click="checkShop(index)"></i>
              </div>
              <div class="deleteshop-shop-box">
                <img class="deleteshop-shop-img" :src="item.shopImg"/>
              </div>
              <div class="deleteshop-shop-detail">
                <span>{{item.shopDetail}}</span>
                <div class="deleteshop-shop-detail-price">
                  <div class="detail-price-box">
                    <span class="detail-price-box-present">{{item.presentPrice}}</span>
                    <div class="detail-price-addreducenum">
                      <span class="aisjianqu" @click="computeCountReduce(index)"></span>
                      <span class="sum">{{item.shopCount}}</span>
                      <span class="aisjia" @click="computeCountAdd(index)"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </van-cell-group>
              <span slot="right">删除</span>
          </van-swipe-cell>
      </div>
    </div>
    <!--全选，提交订单按钮-->
      <van-submit-bar :disabled="checksubmit" :price="5050" button-text="立即结算" @submit="onSubmit">
        <van-checkbox v-model="checked" @click="choseAllShop(checked)">全选</van-checkbox>
      </van-submit-bar>

  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  import {Dialog} from 'vant';

  export default {
    data() {
      return {
        checksubmit: true,
        checked:false,
      }
    },
    /*页面挂载后加载betterscroll样式*/
    mounted() {
        this.$nextTick(function () {
          this.deleteshopcar = new BScroll(this.$refs.deleteShopScroll,{
            click: true
          })
        })

    },
    methods: {
      onClose(clickPosition, instance) {
        const index = instance.$attrs.name;
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
              this.$store.commit('deleteIndex', index)
            });
            break;
        }
      },
      /*减少商品的个数*/
      computeCountReduce(index) {
        this.$store.commit('computeCountReduce', index)
      },
      /*增加商品的个数*/
      computeCountAdd(index) {
        this.$store.commit('computeCountAdd', index)
      },
      /*判断是否有商品被选中*/
      checkShop(index) {
        this.$store.commit('checkshopstatu', index)
        var shopArray = this.$store.state.shopArray
        for (var i = 0; i < shopArray.length; i++) {
          if (shopArray[i].checkshopVerification) {
            this.checksubmit = !shopArray[i].checkshopVerification
            break;
          } else {
            this.checksubmit = true
          }
        }
      },
      /*全选商品*/
      choseAllShop(checked){
        var shopArray=this.$store.state.shopArray
        if(checked){
          if(shopArray.length===0){
            this.checksubmit=true;
          }else{
            this.checksubmit=false;
          }
          for (var i = 0; i < shopArray.length; i++) {
            shopArray[i].checkshopVerification=true;
          }
         }else{
          for (var i = 0; i < shopArray.length; i++) {
            shopArray[i].checkshopVerification=false;
          }
          this.checksubmit=true;
        }
      },
      /*立即结算*/
      onSubmit() {
        this.$router.push({path:'/SummitOrder',params:{}})
      }
    },



  }
</script>

<style scoped>
  .deleteshop>>>.van-swipe-cell__right {
    display: flex !important;
    width: 65px !important;
    height: 100% !important;
    font-size: 15px !important;
    align-items: center;
    color: #fff !important;
    background-color: #f44 !important;
  }
  .deleteshop {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 101px;
    top: 64px;
  }
  .deleteshopscroll {
    width: 100%;
    overflow: hidden;
  }

  .deleteshop-shop {
    width: 92%;
    display: flex;
    margin: 4% 4% 4% 4%;
  }

  .deleteshop-check {
    display: flex;
    align-items: center;
    width: 30px;
    color: gainsboro;
  }

  .checkcolor {
    color: red;
  }

  .aisfuxuankuang_xuanzhong {
    margin-left: 7px;
  }

  .deleteshop-shop-img {
    width: 120px;
    height: 120px;
  }

  .deleteshop-shop-detail {
    margin-left: 4%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .deleteshop-shop-detail-price {
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
  }

  .detail-price-box-present {
    margin: 0 0 4% 0;
  }

  .detail-price-box {
    display: flex;
    flex-direction: row;
  }

  .detail-price-box-present {
    font-size: 18px;
    color: #FB5651;
  }

  .detail-price-addreducenum {
    display: flex;
    position: absolute;
    right: 20px
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

  .van-submit-bar {
    position: fixed;
    bottom: 51px;
    width: 100%;
    z-index: 100;
  }
</style>
