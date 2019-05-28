<!--退款描述-->
<template>
  <div class="refunddesc">
    <div class="refunddesc-kind">
      <span class="refunddesc-kind-chose">类型选择</span>
      <span class="refunddesc-kind-redfund">退款</span>
    </div>

    <div class="refunddesc-mode">
      <span class="refunddesc-mode-mode">退款方式</span>
      <span class="refunddesc-mode-seven">1-7个工作日内原路返回</span>
    </div>
    <div class="refund-reason">
     <!-- <input class="Refund-reason-input" placeholder="退款理由">-->
      <textarea class="refund-reason-textarea" placeholder="退款理由" v-model="refundreason"></textarea>
    </div>
  </div>
</template>

<script>
    export default {
        name: "refundDesc",
        data(){
          return{
            refundreason:null
          }
        }
    }
</script>

<style scoped lang="less">
  .refunddesc{
    width:100%;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    background-color: #F5F5F6;
  }
  .refunddesc-kind{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    border-bottom: gainsboro solid 1px;
    background-color:white;
  }
  .refunddesc-kind-chose{
    position:absolute;
    left:15px;
    font-size: 14px
  }
  .refunddesc-kind-redfund{
    position: absolute;
    right: 15px;
    font-size: 14px;
    color:#AAAAAA
  }
  .refunddesc-mode{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    background-color:white;
  }
  .refunddesc-mode-mode{
    position:absolute;
    left:15px;
    font-size: 14px
  }
  .refunddesc-mode-seven{
    position: absolute;
    right: 15px;
    color: #AAAAAA;
    font-size: 14px
  }
  .refund-reason{
    width:100%;
    height: 124px;
    margin-top: 5px;
    background-color:white;
  }
  .refund-reason-textarea{
    width: 92%;
    height: 100%;
    border: none;
    padding: 0px;
    margin-left: 15px;
  }
</style>
