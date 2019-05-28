<!--我的订单引入-->
<template>
    <div class="myorder">
       <MyOrderHeader></MyOrderHeader>
       <MyOrderNac></MyOrderNac>
    </div>

</template>

<script>
  import  MyOrderHeader from './components/MyOrderHeader'
  import  MyOrderNac from './components/MyOrderNav'
    export default {
        name: "myorder",
        data(){
          return{

          }
        },
        components:{
          MyOrderHeader,MyOrderNac
        },
       beforeRouteLeave(to,from,next){
         if(to.name=='Mine'){
           this.$store.commit('keepAlives',[])
         }
         next();
       },
      methods: {

      }

    }
</script>

<style scoped lang="less">
   .myorder{
     margin-top: 64px;
   }
</style>
