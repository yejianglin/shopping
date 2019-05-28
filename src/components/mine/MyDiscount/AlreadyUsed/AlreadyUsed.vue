<!--已使用的优惠券-->
<template>
  <div class="alreadyused">
    <div class="alreadyused-box" v-for="(item,index) in notUsedArray" :key="index">
      <div class="alreadyused-left">
        <div class="alreadyused-left-box">
          <span class="alreadyused-left-box-price">{{item.discountPrice}}</span>
          <span class="alreadyused-left-box-Company">{{item.company}}</span>
        </div>
        <span class="alreadyused-left-condition">{{item.condition}}</span>
      </div>
      <div class="alreadyused-right">
        <span class="alreadyused-right-kind">{{item.discountKind}}</span>
        <span class="alreadyused-right-data">{{item.discountData}}</span>
      </div>
      <div class="alreadyused-icon">
        <div class="alreadyused-icon-text">已使用</div>
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
  .alreadyused-box{
    width: 90%;
    margin: 20px 5% 0px 5%;
    height: 90px;
    display: flex;
    background-color: white;
  }
  .alreadyused-left{
    width: 100px;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #AAAAAA;
    color: white;
  }
  .alreadyused-left-box{
    padding: 19px 26px 6px 26px;
    display: flex;
  }
  .alreadyused-left-box-price{
    font-size: 28px;
  }
  .alreadyused-left-box-Company{
    font-size:14px;
    padding-top: 14px;
  }
  .alreadyused-left-condition {
    font-size: 10px;
  }
  .alreadyused-right{
    background-color: white;
   /* flex-grow: 1;*/
    display: flex;
    flex-direction: column;
  }
  .alreadyused-right-kind{
    font-size: 16px;
    padding: 11px 0px 0px 15px;
  }
  .alreadyused-right-data{
    font-size: 12px;
    color: #AAAAAA;
    padding: 29px 0 0 15px;
  }
  .alreadyused-icon{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .alreadyused-icon-text{
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
