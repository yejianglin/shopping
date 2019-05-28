<!--首页引入-->
<template>
		<div class="index">
			<ShopHeader></ShopHeader>
      <RedEnvelopes></RedEnvelopes>
		  <div class="indexscroll" ref='indexgundong'>
			   <div class="scroll-container" ref="scrollContainer">
           <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
             <Swiper></Swiper>
             <Safeguard></Safeguard>
             <Serach></Serach>
             <Category v-bind:goodList="goodList"></Category>
             <ShopList v-bind:goodList="goodList" v-on:toIndex="fromShopList"></ShopList>
           </van-pull-refresh>
			</div>
		  </div>
      <!--<van-popup v-model="popupMenus.show" position="bottom" :overlay="true">
        <PopupMenu v-on:toOtherShop="fromPopupMenu" v-bind:popupMessage="popupMenus.popupMessage"></PopupMenu>
      </van-popup>-->
      <van-sku
        v-model="popupMenus.show"
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
	import ShopHeader from "./components/ShopHeader.vue"
  import RedEnvelopes from './components/RedEnvelopes'
	import Swiper from './components/Swiper'
	import Safeguard from './components/Safeguard'
	import Serach from './components/serach'
	import Category from './components/Category'
  import PopupMenu from '.././Public/PopupMenu'
  import ShopList from './components/ShopList'
	
	export default{
		name:'index',
		data(){
			return{
        count: 0,
        scrollY:0,
        isLoading: true,
        closeOnClickOverlay:true,
        goodList:{
          leiBieArray:[
            {
              id:6,
              desc:'每周团购',
              state:2,
              leiBieImg:'../../../static/images/index/weekgroup.png',
              leiBieIcon:'../../../../static/images/index/icon-weekgroup.png',
              leiBie:{
                shopDetailList:[
                  {
                    id:1,
                    shopImg:'../../../static/images/shop.png',
                    shopDetail:'美肤宝',
                    originalPrice:'原价:￥198.00',
                    presentPrice:'￥150.00'
                  },
                  {
                    id:2,
                    shopImg:'../../../static/images/shop.png',
                    shopDetail:'美肤宝',
                    originalPrice:'原价:￥198.00',
                    presentPrice:'￥150.00'
                  },
                  {
                    id:3,
                    shopImg:'../../../static/images/shop.png',
                    shopDetail:'美肤宝',
                    originalPrice:'原价:￥198.00',
                    presentPrice:'￥150.00'
                  }
                ]
              }
            }
            ,{
            id:1,
            desc:'鞋包服饰配饰',
            state:1,
            leiBieImg:'../../../static/images/index/clothshop.png',
            leiBieIcon:'../../../../static/images/index/icon-shoeclose.png',
            leiBie:{
             shopDetailList:[
                {
                  id:1,
                  shopImg:'../../../static/images/shop.png',
                  shopDetail:'美肤宝',
                  originalPrice:'原价:￥198.00',
                  presentPrice:'￥150.00'
                },
                {
                  id:2,
                  shopImg:'../../../static/images/shop.png',
                  shopDetail:'美肤宝',
                  originalPrice:'原价:￥198.00',
                  presentPrice:'￥150.00'
                },
                {
                  id:3,
                  shopImg:'../../../static/images/shop.png',
                  shopDetail:'美肤宝',
                  originalPrice:'原价:￥198.00',
                  presentPrice:'￥150.00'
                }
              ]
            }
          },{
            id:2,
            desc:'儿童用品',
            state:1,
            leiBieImg:'../../../static/images/index/children.png',
            leiBieIcon:'../../../../static/images/index/icon-children.png',
            leiBie:{
              shopDetailList:[
                {
                  id:1,
                  shopImg:'../../../static/images/shop.png',
                  shopDetail:'美肤宝',
                  originalPrice:'原价:￥198.00',
                  presentPrice:'￥150.00'
                },
                {
                  id:2,
                  shopImg:'../../../static/images/shop.png',
                  shopDetail:'美肤宝',
                  originalPrice:'原价:￥198.00',
                  presentPrice:'￥150.00'
                },
                {
                  id:3,
                  shopImg:'../../../static/images/shop.png',
                  shopDetail:'美肤宝',
                  originalPrice:'原价:￥198.00',
                  presentPrice:'￥150.00'
                }
              ]
            }
          },{
            id:3,
            desc:'生活百货',
            state:1,
            leiBieImg:'../../../static/images/index/lifeuser.png',
            leiBieIcon:'../../../../static/images/index/icon-lifeuser.png',
            leiBie:{
              shopDetailList:[
                {
                  id:1,
                  shopImg:'../../../static/images/shop.png',
                  shopDetail:'美肤宝',
                  originalPrice:'原价:￥198.00',
                  presentPrice:'￥150.00'
                },
                {
                  id:2,
                  shopImg:'../../../static/images/shop.png',
                  shopDetail:'美肤宝',
                  originalPrice:'原价:￥198.00',
                  presentPrice:'￥150.00'
                },
                {
                  id:3,
                  shopImg:'../../../static/images/shop.png',
                  shopDetail:'美肤宝',
                  originalPrice:'原价:￥198.00',
                  presentPrice:'￥150.00'
                }
              ]
            }
          },
            {
              id:4,
              desc:'宠物用品',
              state:1,
              leiBieImg:'../../../static/images/index/petuser.png',
              leiBieIcon:'../../../../static/images/index/icon-petuser.png',
              leiBie:{
                shopDetailList:[
                  {
                    id:1,
                    shopImg:'../../../static/images/shop.png',
                    shopDetail:'美肤宝',
                    originalPrice:'原价:￥198.00',
                    presentPrice:'￥150.00'
                  },
                  {
                    id:2,
                    shopImg:'../../../static/images/shop.png',
                    shopDetail:'美肤宝',
                    originalPrice:'原价:￥198.00',
                    presentPrice:'￥150.00'
                  },
                  {
                    id:3,
                    shopImg:'../../../static/images/shop.png',
                    shopDetail:'美肤宝',
                    originalPrice:'原价:￥198.00',
                    presentPrice:'￥150.00'
                  }
                ]
              }
            },
            {
              id:5,
              desc:'进口专卖',
              state:1,
              leiBieImg:'../../../static/images/index/import.png',
              leiBieIcon:'../../../../static/images/index/icon-import.png',
              leiBie:{
                shopDetailList:[
                  {
                    id:1,
                    shopImg:'../../../static/images/shop.png',
                    shopDetail:'美肤宝',
                    originalPrice:'原价:￥198.00',
                    presentPrice:'￥150.00'
                  },
                  {
                    id:2,
                    shopImg:'../../../static/images/shop.png',
                    shopDetail:'美肤宝',
                    originalPrice:'原价:￥198.00',
                    presentPrice:'￥150.00'
                  },
                  {
                    id:3,
                    shopImg:'../../../static/images/shop.png',
                    shopDetail:'美肤宝',
                    originalPrice:'原价:￥198.00',
                    presentPrice:'￥150.00'
                  }
                ]
              }
            }
          ],
        },
        popupMenus: {
          show:false,
          popupMessage:{

          }
        },
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
    beforeRouteLeave(to,from,next){
		  if(to.name=="GroupBuy"){
        this.$store.commit("keepAlives",["GroupBuy"])
      }else if(to.name=='OtherShop'){
        this.$store.commit("keepAlives", ["OtherShop"])
      }
      this.$store.commit("recordScrollTop", this.scrollY)
      next()
    },
		mounted() {
			this.$nextTick(function(){
				this.indexscroll=new BScroll(this.$refs.indexgundong,{
					click:true,
          probeType:3,
				})
        this.indexscroll.on('scroll',(pos)=>{
          this.scrollY=Math.abs(Math.round(pos.y))
        })
        this.indexscroll.scrollTo(0,-this.$store.state.scrollTop)
			})
		},
		components:{
			ShopHeader,Swiper,Serach,Safeguard,Category,RedEnvelopes,PopupMenu,
      ShopList
		},
    methods: {
      onRefresh() {
        setTimeout(() => {
          this.isLoading = false;
          this.count++;
        }, 1000);
      },
      fromPopupMenu(data){
        this.popupMenus.show=data
      },
      fromShopList(data){
        this.popupMenus.show=data.show
        this.goodsId=data.popupMessage.id
      },
      onBuyClicked(){
       console.log(this.$refs.skuMessage.getSkuData())
      },
      onAddCartClicked(){

      }
    }

	}
</script>

<style scoped>
  .index>>>.van-pull-refresh{
    overflow: visible;
  }
	.index{
	    width: 100%;
			display: flex;
			position: absolute;
			bottom: 51px;
			top: 64px;
	}
	.indexscroll{
		width: 100%;
		overflow: hidden;
	}

</style>
