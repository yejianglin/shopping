<template>
    <div class="MyAddressBottom" @click="goAddress()">
       新增地址
    </div>
</template>

<script>
    export default {
        name: "MyAddressBottom",
        methods:{
          goAddress(){
            this.$router.push({name:"AddAddress",params:{}})
          }
        }
    }
</script>

<style scoped>
   .MyAddressBottom{
     width: 100%;
     height: 50px;
     text-align: center;
     line-height: 50px;
     background-color: #f44;
     font-size: 16px;
     color: white;
     position: fixed;
     bottom: 0px;
   }
</style>
