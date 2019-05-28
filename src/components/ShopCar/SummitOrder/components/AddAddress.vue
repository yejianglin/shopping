<!--添加地址-->
<template>
    <div class="addaddress">
        <div class="addaddress-box">
          <div class="addaddress-box-right">
            <img class="addaddress-box-right-icon" src="../../../../assets/images/addressimg/zengjia.png" @click="goAddAddress()">
            <span class="addaddress-box--right-text">新增收获地址</span>
          </div>
            <span class="aisjiantouyou" @click="goMyAddress()"></span>
        </div>
      <div>
        <img class="divsion" src="../../../../assets/images/addressimg/fenlan.png">
      </div>
    </div>
</template>

<script>
    export default {
        name: "addaddress",
        methods:{
          goAddAddress(){
            this.$router.push({name:'AddAddress',params:{}})
          },
          goMyAddress(){
            this.$router.push({name:'MyAddress',params:{}})
          }
        }

    }
</script>

<style scoped lang="less">
       .addaddress{
          background-color: #F5F5F6;
       }
      .addaddress-box{
        width: 100%;
        display: flex;

      }
      .addaddress-box-right{
        width: 90%;
        display: flex;
      }
      .addaddress-box-right-icon{
        width:50px;
        height: 50px;
        margin: 14px 0 10px 15px;
      }
      .addaddress-box--right-text{
        font-size: 16px;
        margin: 27px 0 25px 15px;
      }
      .aisjiantouyou{
        position: absolute;
        top: 30px;
        right: 20px;
        color: #AAAAAA;

      }
      .divsion{
        width: 100%;
        overflow: hidden;
      }
</style>
