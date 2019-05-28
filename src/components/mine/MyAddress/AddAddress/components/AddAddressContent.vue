<!--添加地址内容部分-->
<template>
  <div class="addaddresscontent">
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>

</template>

<script>
  import area from '.././area'
  export default {
    data() {
      return {
        areaList:area,

        searchResult: []
      }
    },

    methods: {
      onSave() {
        console.log("jjfjkdfdj")
      },
      onDelete() {

      },
      onChangeDetail(val) {
        if (val) {
          this.searchResult = [{
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }];
        } else {
          this.searchResult = [];
        }
      }
    }
  }
</script>

<style scoped>
</style>
