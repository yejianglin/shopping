<template>
    <div class="mygroupbuynav">
      <van-tabs v-model="active">
          <div class="mygroupbuynav-group-scroll" ref="myGroupBuyNavScroll">
            <div class="container">
              <van-tab title="拼团中" >
                <GroupBuying></GroupBuying>
              </van-tab>
              <van-tab title="已完成">

              </van-tab>
            </div>
          </div>
      </van-tabs>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import GroupBuying from '../GroupBuying/GroupBuying'
    export default {
      name: "MyGroupBuyNav",
      data() {
        return {
          active: 0
        }
      },
      mounted() {
        this.$nextTick(function () {
          this.mygroupbuynav = new BScroll(this.$refs.myGroupBuyNavScroll, {
            click: true
          })
        })
      },
      components:{
        GroupBuying
      },
      methods: {

      }
    }
</script>

<style scoped>
  .mygroupbuynav>>>.van-tabs{
    width: 100%;
    display: flex;
    position: absolute;
    top: 108px;
    bottom: 0px;
  }
  .mygroupbuynav>>>.van-tabs__wrap{
    position: fixed;
    top: 64px;
  }
  .mygroupbuynav>>>.van-tabs--line{
    padding-top: 0px;
  }
  .mygroupbuynav>>>.van-tabs__content{
    width: 100%;
    position: absolute;
    display: flex;
    top:0px;
    bottom: 0px;
    background-color: #F5F5F6;
  }
  .mygroupbuynav-group-scroll{
    width: 100%;
    overflow: hidden;
  }

</style>
