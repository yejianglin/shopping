<template>
  <div class="scroll" >
    <div class="left-scroll" ref='menus'>
      <div class="menus-container">
        <ul class="menus-content">
          <li class="" v-for="(item,index) in menusList" :key='index'
              @click="selectMenu(index)" :class="{current:index==relationShopList}" ref="menusListHook">{{item.menusName}}</li>
        </ul>
      </div>
    </div>
    <div class="right-scroll" ref='shop'>
      <div class="shop-container">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <ul class="shop-content">
            <li class="shop-list-hook" v-for="(items,index) in shopListArray" :key="index" ref="shopListHook" v-if="index==relationShopList">
              <div class="shoptitle">
                <span class="shoptitle-content">{{items.shopLei.shopKinds}}</span>
              </div>
              <div class="shopdetail">
                <div class="shopdetail-content" v-for="(item,index) in items.shopLei.shopDetail" :key='index'>
                  <div class="shopitem-chicun">
                    <img class="shoplist-item-img" :src="item.shopImg" ref="shopListItemImg"/>
                  </div>
                  <div class="shopitem-wenzi">
                    <span class="shoplist-item-text">{{item.shopMsg}}</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "ScrollTwo",
        data(){
          return{
            relationShopList:0,
            isLoading:true,
            menusList:[
              {
                menusName:'服饰鞋包配饰'
              },
              {
                menusName:'生活百货'
              },
              {
                menusName:'儿童用品'
              },
              {
                menusName:'进口专卖'
              },
              {
                menusName:'宠物用品'
              },
            ],
            shopListArray:[
              {
                shopLei:{
                  shopKinds:"服饰鞋包配饰",
                  shopDetail:[
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                  ]
                }
              },
              {
                shopLei:{
                  shopKinds:"生活百货",
                  shopDetail:[
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                  ]
                }
              },
              {
                shopLei:{
                  shopKinds:"儿童用品",
                  shopDetail:[
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                  ]
                }
              },
              {
                shopLei:{
                  shopKinds:"进口专卖",
                  shopDetail:[
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                  ]
                }
              },
              {
                shopLei:{
                  shopKinds:"宠物用品",
                  shopDetail:[
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                    {
                      shopImg:'../../.././static/images/timg.png',
                      shopMsg:'美容工具'
                    },
                  ]
                }
              },

            ]
          }
        },
      mounted() {
        this.$nextTick(function(){

          this.menuScroll=new BScroll(this.$refs.menus,{
            click:true,
          })
          this.shopScroll=new BScroll(this.$refs.shop,{
            probeType:3,
            click:true,
          })
        })
      },
      methods:{
          selectMenu(index){
            this.relationShopList=index
          },
          onRefresh() {
           setTimeout(() => {
             this.isLoading = false;
             this.count++;
           }, 1000);
        },

        }
    }
</script>

<style scoped>
  .index>>>.van-pull-refresh{
    overflow: visible;
  }
  .scroll{
    width: 100%;
    display: flex;
    position: absolute;
    bottom:51px;
    top: 64px;
    flex-direction: row;
  }
  .left-scroll{
    flex: 0 0 110px;
    overflow: hidden;
  }
  .right-scroll{
    flex-grow: 1;
    overflow: hidden;
  }
  .menus-content{
    margin:0 0 0 0 ;
    padding: 0 0 0 0;
    text-align: center;
  }
  .menus-container{
    background-color:#f9f9f9;
  }
  .menus-content li{
    list-style: none;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 14px;
    color:#AAAAAA;
  }
  .current{
    background-color: #FFFFFF;
    color: black!important;
  }
  h3{
    margin: 0 0 0 0;
  }
  .shop-content{
    margin: 0 0 0 0;
    padding: 0 0 0 0;
  }
  .shop-list-hook{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .shop-content{
    display: flex;
    flex-direction: column;
  }
  .shop-list-hook{
    text-align: center;
    line-height: 50px;
  }
  .shoptitle{
    margin:0 auto;
  }
  .shopdetail{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .shopdetail-content{
    width: 30%;
    display: flex;
    flex-direction: column;
    margin: 2% 1.66% 2% 1.66%;
  }
  .shopitem-chicun{
    width: 100%;
    height: 60%;
    margin-top: 2%;
  }
  .shopitem-wenzi{
    width: 100%;
    height: 50%;
  }
  .shoplist-item-img{
    width: 23%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
  }
  .shoplist-item-text{
  }
</style>
