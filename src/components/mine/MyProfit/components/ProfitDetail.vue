<!--收益详情-->
<template>
  <div class="profitdetail" @click="goProfitDetail">
    <div class="profitdetail-text">我的收益详情</div>
    <i class="aisjiantouyou"></i>
  </div>
</template>

<script>
  export default {
    name: "profitdetail",
    data(){
      return{
        profit:[
          {
            state:1,
            desc:"未结算",
            SettlementList:[
              {
                shopDesc:'进口老杨咸蛋黄饼干',
                profitPrice:'1.69',
                setupData:'02-08-22:22',
                settlementData:'02-08-22:22',
                shopPrice:18.9,
                consumer:'张三'
              },
              {
                shopDesc:'进口老杨咸蛋黄饼干',
                profitPrice:'1.69',
                setupData:'02-08-22:22',
                settlementData:'02-08-22:22',
                shopPrice:18.9,
                consumer:'张三'
              },
              {
                shopDesc:'进口老杨咸蛋黄饼干',
                profitPrice:'1.69',
                setupData:'02-08-22:22',
                settlementData:'02-08-22:22',
                shopPrice:18.9,
                consumer:'张三'
              },
              {
                shopDesc:'进口老杨咸蛋黄饼干',
                profitPrice:'1.69',
                setupData:'02-08-22:22',
                settlementData:'02-08-22:22',
                shopPrice:18.9,
                consumer:'张三'
              }
            ]
          },
          {
            state:2,
            desc:"已结算",
            SettlementList:[
              {
                shopDesc:'进口老杨咸蛋黄饼干',
                profitPrice:1.69,
                setupData:'02-08-22:22',
                settlementData:'02-08-22:22',
                shopPrice:18.9,
                consumer:'张三'
              },
              {
                shopDesc:'进口老杨咸蛋黄饼干',
                profitPrice:'1.69',
                setupData:'02-08-22:22',
                settlementData:'02-08-22:22',
                shopPrice:18.9,
                consumer:'张三'
              },
              {
                shopDesc:'进口老杨咸蛋黄饼干',
                profitPrice:'1.69',
                setupData:'02-08-22:22',
                settlementData:'02-08-22:22',
                shopPrice:18.9,
                consumer:'张三'
              }
            ]
          }
        ]
      }
    },
    methods:{
      goProfitDetail(){
        this.$router.push({name:"ProfitDetail",params:{profit:this.profit}})
      }
    }
  }
</script>

<style scoped>
  .profitdetail{
    width: 100%;
    height: 50px;
    margin-top: 10px;
    line-height: 50px;
    display: flex;
    background-color: white;
  }
  .profitdetail-text{
    margin: 0 0 0 15px;
    font-size: 14px;
    font-family: PingFangSC;
    color: #333333;
  }
  .aisjiantouyou{
    position: absolute;
    right: 15px;
    font-size: 12px;
    color: #AAAAAA;
  }
</style>
