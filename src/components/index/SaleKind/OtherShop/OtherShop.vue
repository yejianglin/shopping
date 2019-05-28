<!--其他分类商品引入-->
<template>
    <div class="othershop">
      <OtherShopHeader></OtherShopHeader>
      <div class=othershopscroll ref="otherShopScroll">
         <div class="container">
           <OtherShopContent v-on:toOtherShop="fromOtherShopContent"></OtherShopContent>
         </div>
      </div>
     <!-- <van-popup v-model="show" position="bottom" :overlay="true">
        <PopupMenu v-on:toOtherShop="fromPopupMenu"></PopupMenu>
      </van-popup>-->
      <van-sku
        v-model="show"
        :sku="sku"
        :goods="goods"
        :goods-id="goodsId"
        :close-on-click-overlay="closeOnClickOverlay"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
        ref="skuMessage"
      />
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import OtherShopHeader from './OtherShopHeader'
  import OtherShopContent from './OtherShopContent'
  import PopupMenu from '@/components/Public/PopupMenu'

    export default {
        name: "OtherShop",
        data(){
          return{
            show:false,
            closeOnClickOverlay:true,
            sku: {
              tree: [
                {
                  k: '颜色', // skuKeyName：规格类目名称
                  v: [
                    {
                      id: '1', // skuValueId：规格值 id
                      name: '红色', // skuValueName：规格值名称
                      imgUrl: '../../../static/images/shop.png' // 规格类目图片，只有第一个规格类目可以定义图片
                    },
                    {
                      id: '2',
                      name: '蓝色',
                      imgUrl: 'https://img.yzcdn.cn/2.jpg'
                    }
                  ],
                  k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                },
                {
                  k: '尺寸', // skuKeyName：规格类目名称
                  v: [
                    {
                      id: '3', // skuValueId：规格值 id
                      name: 'M', // skuValueName：规格值名称
                    },
                    {
                      id: '4',
                      name: 'L',
                    }
                  ],
                  k_s: 's2' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                }
              ],
              // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
              list: [
                {
                  id: 2259, // skuId，下单时后端需要
                  price: 100, // 价格（单位分）
                  s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
                  s2: '3', // 规格类目 k_s 为 s2 的对应规格值 id
                  stock_num: 110 // 当前 sku 组合对应的库存
                },
                {
                  id: 2260, // skuId，下单时后端需要
                  price: 100, // 价格（单位分）
                  s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
                  s2: '4', // 规格类目 k_s 为 s2 的对应规格值 id
                  stock_num: 110 // 当前 sku 组合对应的库存
                },
                {
                  id: 2259, // skuId，下单时后端需要
                  price: 100, // 价格（单位分）
                  s1: '2', // 规格类目 k_s 为 s1 的对应规格值 id
                  s2: '3', // 规格类目 k_s 为 s2 的对应规格值 id
                  stock_num: 110 // 当前 sku 组合对应的库存
                },
                {
                  id: 2259, // skuId，下单时后端需要
                  price: 100, // 价格（单位分）
                  s1: '2', // 规格类目 k_s 为 s1 的对应规格值 id
                  s2: '4', // 规格类目 k_s 为 s2 的对应规格值 id
                  stock_num: 110 // 当前 sku 组合对应的库存
                }
              ],
              price: '1.00', // 默认价格（单位元）
              stock_num: 227, // 商品总库存
              collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
              none_sku: false, // 是否无规格商品
              messages: [
                {
                  // 商品留言
                  datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
                  multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
                  name: '留言', // 留言名称
                  type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
                  required: '1' // 是否必填 '1' 表示必填
                }
              ],
              hide_stock: false // 是否隐藏剩余库存
            },
            goods: {
              goodsId:123,
              title: '测试商品',
              picture: '../../../static/images/shop.png'
            },
            goodsId:null
          }
        },
        components:{
          OtherShopHeader,OtherShopContent,PopupMenu
        },
        beforeRouteLeave(to,from,next){
          if(to.name=='index'){
            this.$store.commit("keepAlives",[])
          }
          next()
        },
        mounted() {
          this.$nextTick(function () {
            this.othershopscroll=new BScroll(this.$refs.otherShopScroll,{
              click:true
            })
          })
        },
        methods:{
          fromOtherShopContent(data){
            this.show=data
          },
          fromPopupMenu(data){
            this.show=data
          },
          onBuyClicked(){

          },
          onAddCartClicked(){

          }
        }
    }
</script>

<style scoped>
  .othershop{
    width:100%;
    display: flex;
    position: absolute;
    top: 64px;
    bottom: 0px;
  }
  .othershopscroll{
    width: 100%;
    overflow: hidden;
  }
</style>
