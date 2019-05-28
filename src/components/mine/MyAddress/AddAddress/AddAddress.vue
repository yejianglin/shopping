<!--添加新的地址引入-->
<template>
  <div class="addaddress">
    <AddAddressHeader></AddAddressHeader>
    <div class="addaddressscroll" ref="addaddressScroll">
      <div class="container">
        <AddAddressContent></AddAddressContent>
      </div>
    </div>
  </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import AddAddressHeader from './components/AddAddressHeader'
    import AddAddressContent from './components/AddAddressContent'
    export default {
        name: "addAddress",
        components:{
          AddAddressHeader,AddAddressContent
        },
        mounted() {
          this.$nextTick(function () {
            this.addaddressscroll = new BScroll(this.$refs.addaddressScroll,{
              click: true
            })
          })

        }
    }


</script>

<style scoped lang="less">
  .addaddress{
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 64px;
    bottom:0px;
    background-color: #F5F5F6;
  }
  .addaddressscroll{
    width: 100%;
    overflow: hidden;
  }
</style>
