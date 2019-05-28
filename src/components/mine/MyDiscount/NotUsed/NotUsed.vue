<!--未使用的优惠券-->
<template>
    <div class="notused">
      <div class="notused-box"  v-for="(item,index) in notUsedArray" :key="index">
        <div class="notused-left">
          <div class="notused-left-box">
            <span class="notused-left-box-price">{{item.discountPrice}}</span>
            <span class="notused-left-box-Company">{{item.company}}</span>
          </div>
          <span class="notused-left-condition">{{item.condition}}</span>
        </div>
        <div class="notused-right">
          <span class="notused-right-kind">{{item.discountKind}}</span>
          <span class="notused-right-data">{{item.discountData}}</span>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "NotUsed",
        data(){
          return{
            notUsedArray:[
              {
                discountPrice:10,
                company:'元',
                condition:'满100元可用',
                discountKind:'全品类新人券',
                discountData:'有效期至2018-1-2'
              },
              {
                discountPrice:10,
                company:'元',
                condition:'满100元可用',
                discountKind:'全品类新人券',
                discountData:'有效期至2018-1-2'
              },
              {
                discountPrice:10,
                company:'元',
                condition:'满100元可用',
                discountKind:'全品类新人券',
                discountData:'有效期至2018-1-2'
              },
            ]
          }

        }

    }
</script>

<style scoped>
  .notused-box{
    width: 90%;
    margin: 20px 5% 0px 5%;
    height: 90px;
    display: flex;
    background-color: white;
  }
  .notused-left{
    width: 100px;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #FF6C6C;
    color: white;
  }
  .notused-left-box{
    padding: 19px 26px 6px 26px;
    display: flex;
  }
  .notused-left-box-price{
    font-size: 28px;
  }
  .notused-left-box-Company{
    font-size:14px;
    padding-top: 14px;
  }
  .notused-left-condition {
    font-size: 10px;
  }
  .notused-right{
    background-color: white;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  .notused-right-kind{
    font-size: 16px;
    padding: 11px 0px 0px 15px;
  }
  .notused-right-data{
    font-size: 12px;
    color: #AAAAAA;
    padding: 29px 0 0 15px;
  }
</style>
