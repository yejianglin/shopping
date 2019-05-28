<!--我的地址引入-->
<template>
  <div class="myaddress">
    <MyaddressHeader></MyaddressHeader>
    <div class="myaddressscroll" ref="myaddressScroll">
       <div class="container">
          <MyaddressArray></MyaddressArray>
       </div>
    </div>
    <MyaddressBottom></MyaddressBottom>
  </div>

</template>

<script>
   import BScroll from 'better-scroll'
   import MyaddressHeader from './components/MyAddressHeader'
   import MyaddressArray from './components/MyAddressArray'
   import MyaddressBottom from './components/MyAddressBottom'
   export default {
     components:{
        MyaddressHeader,MyaddressArray,MyaddressBottom
     },
     mounted() {
       this.$nextTick(function () {
         this.myaddressscroll=new BScroll(this.$refs.myaddressScroll,{
           click:true
         })
       })
     }
   }
</script>

<style scoped>
  .myaddress{
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 64px;
    bottom: 50px;
    background-color: #F5F5F6;
  }
  .myaddressscroll{
    width: 100%;
    overflow: hidden;
  }
</style>
