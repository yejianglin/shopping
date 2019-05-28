<template>
    <div class="suspension" @click="share">
       <img class="suspension-img" src="../../../../assets/images/index/shopdetail/xuanfu.png"/>
    </div>
</template>

<script>
    export default {
        name: "Suspension",
        methods:{
          share(){

          }
        }
    }
</script>

<style scoped>
   .suspension{
     position: fixed;
     bottom: 65px;
     right: 15px;
   }
  .suspension-img{
    width: 60px;
    height: 60px;
  }
</style>
