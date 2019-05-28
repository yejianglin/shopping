<template>
      <div class="groupbuying" >
        <div class="groupbuying-box" v-for="(itemList,index) in shopList" :key="index">
          <div class="groupbuying-shop" v-for="(itemMember,index) in itemList.shopMember" :key='index' @click="goSeekMember()">
            <div class="groupbuying-shop-box">
              <img class="groupbuying-shop-img" :src="itemMember.shopImg" />
            </div>
            <div class="groupbuying-shop-detail">
              <span>{{itemMember.shopName}}</span>
              <div class="groupbuying-shop-detail-price">
                <div class="detail-price-box">
                  <span class="detail-price-box-present">{{itemMember.shopPrice}}</span>
                </div>
                <div class="groupbuying-shop-number">
                  <span>x{{itemMember.shopCount}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="groupbuying-member">
            <div class="groupbuying-member-head">
              <div class="groupbuying-member-head-img" v-for="(item,index) in joinMember" :key="index">
                <img class="groupbuying-member-head-img-content"  :src="item.memberHead" />
                <span class="groupbuying-member-head-img-text">{{item.memberName}}</span>
              </div>
            </div>
            <div class="groupbuying-member-btn">
              邀请团员
            </div>
          </div>
        </div>
      </div>
</template>

<script>
    export default {
        name: "GroupBuying",
        data(){
        return{
          shopList:[
            {
              shopMember: [
                {
                  shopImg: '../../../.././static/images/shop.png',
                  shopName: '商品名称',
                  shopPrice: 100,
                  shopCount: 1,
                },
              ],
            },
            {
              shopMember: [
                {
                  shopImg: '../../../.././static/images/shop.png',
                  shopName: '商品名称',
                  shopPrice: 100,
                  shopCount: 1,
                },
              ],
            }
          ],
          joinMember:[
             {
               memberName:'张三',
               memberHead:"http://img5.duitang.com/uploads/item/201409/23/20140923094045_BNYji.thumb.700_0.png"
             },
             {
               memberName:'张三',
               memberHead:"http://img5.duitang.com/uploads/item/201409/23/20140923094045_BNYji.thumb.700_0.png"
             },
          ],
          seekMember:true

        }
      },
        methods:{
          goSeekMember(){
            this.$router.push({name:'JoinGroups',params:{joinMember:this.joinMember,seekMember:this.seekMember}})
          }
        }
    }
</script>

<style scoped>
  .groupbuying{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .groupbuying-box{
    background-color: white;
    margin-top: 10px;
  }
  .groupbuying-shop{
    width: 92%;
    display: flex;
    padding: 4% 4% 4% 4%;
    border-bottom: gainsboro 1px solid;
  }
  .groupbuying-shop-img{
    width: 120px;
    height: 120px;
  }
  .groupbuying-shop-detail{
    margin-left: 4%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
  }
  .groupbuying-shop-detail-price{
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
  .groupbuying-shop-number{
    position: absolute;
    right: 20px;
    color: #999999;
  }
  .groupbuying-member{
    width: 94%;
    margin: 0 3% 0 3%;
    display: flex;
    justify-content: space-between;
  }
  .groupbuying-member-head{
    display: flex;
    flex-direction:row;
  }
  .groupbuying-member-head-img{
    display: flex;
    flex-direction: column;
    margin: 5px 15px 5px 0;
    text-align: center;
  }
  .groupbuying-member-head-img-text{
    font-size: 10px;
    color: #333333;
  }
  .groupbuying-member-head-img-content{
    width: 30px;
    height: 30px;
    border-radius: 15px;
  }


  .groupbuying-member-btn{
    width: 90px;
    height: 28px;
    border: #FF6C6C solid 1px;
    border-radius: 14px;
    font-size: 12px;
    color: #FF6C6C;
    text-align: center;
    line-height: 28px;
    margin: 13px 0 14px 0;
  }
</style>
