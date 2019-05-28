<!--无效的优惠券-->
<template>
  <div class="failure">
    <div class="failure-box" v-for="(item,index) in notUsedArray" :key="index">
      <div class="failure-left">
        <div class="failure-left-box">
          <span class="failure-left-box-price">{{item.discountPrice}}</span>
          <span class="failure-left-box-Company">{{item.company}}</span>
        </div>
        <span class="failure-left-condition">{{item.condition}}</span>
      </div>
      <div class="failure-right">
        <span class="failure-right-kind">{{item.discountKind}}</span>
        <span class="failure-right-data">{{item.discountData}}</span>
      </div>
      <div class="failure-icon">
        <div class="failure-icon-text">已失效</div>
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
  .failure-box{
    width: 90%;
    margin: 20px 5% 0px 5%;
    height: 90px;
    display: flex;
    background-color: white;
  }
  .failure-left{
    width: 100px;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #AAAAAA;
    color: white;
  }
  .failure-left-box{
    padding: 19px 26px 6px 26px;
    display: flex;
  }
  .failure-left-box-price{
    font-size: 28px;
  }
  .failure-left-box-Company{
    font-size:14px;
    padding-top: 14px;
  }
  .failure-left-condition {
    font-size: 10px;
  }
  .failure-right{
    background-color: white;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  .failure-right-kind{
    font-size: 16px;
    padding: 11px 0px 0px 15px;
  }
  .failure-right-data{
    font-size: 12px;
    color: #AAAAAA;
    padding: 29px 0 0 15px;
  }
  .failure-icon{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .failure-icon-text{
    width:50px;
    height:50px;
    line-height:45px;
    text-align:center;
    border: gainsboro solid 1px;
    border-radius: 50%;
    color: gainsboro;
    font-size: 12px;
    transform: rotate(30deg);
    align-self: flex-end;
  }
</style>
