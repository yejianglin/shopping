<!--添加地址,我的地址目录-->
<template>
  <div class="myaddressarray">
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      @edit="onEdit"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        chosenAddressId: '1',
        list: [
          {
            id: '1',
            name: '张三',
            tel: '13000000000',
            address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
          },
          {
            id: '2',
            name: '李四',
            tel: '1310000000',
            address: '浙江省杭州市拱墅区莫干山路 50 号'
          },
          {
            id: '3',
            name: '李四',
            tel: '1310000000',
            address: '浙江省杭州市拱墅区莫干山路 50 号'
          }
        ],
        disabledList: [
          {
            id: '3',
            name: '王五',
            tel: '1320000000',
            address: '浙江省杭州市滨江区江南大道 15 号'
          }
        ]
      }
    },

    methods: {
      onAdd() {
           this.$router.push({name:'AddAddress',params:{}})
      },
      onEdit(item, index) {
       
      }
    }
  }
</script>

<style scoped >
 .myaddressarray>>>.van-button{
   display: none;
 }
  .myaddressarray>>>.van-address-list{
    padding-bottom: 0px;
  }
</style>
