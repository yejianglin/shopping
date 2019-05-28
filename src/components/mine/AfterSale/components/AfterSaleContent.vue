<!--售后内容-->
<template>
    <div class="aftersalecontent">
      <van-tabs v-model="active">
        <div class="aftersalecontent-all">
          <div class="aftersalecontentscroll" ref="afterSaleContentScroll">
            <div class="container">
              <van-tab title="售后申请">
                <div>
                   <div class="all">
                     <div class="all-shopbox">
                       <div>

                       </div>
                       <div>

                       </div>
                       <div>

                       </div>
                     </div>
                   </div>
                </div>
              </van-tab>
              <van-tab title="处理中">
              </van-tab>
              <van-tab title="售后评价">
              </van-tab>
              <van-tab title="申请记录">
              </van-tab>
            </div>
          </div>
        </div>
      </van-tabs>
    </div>
</template>

<script>
    export default {
        name: "AfterSaleContent",
        data(){
          return{
            active:0
          }
        }
    }
</script>

<style scoped>
  .aftersalecontent>>>.van-tabs{
    width: 100%;
    display: flex;
    position: absolute;
    top: 108px;
    bottom: 0px;
  }
  .aftersalecontent>>>.van-tabs__wrap{
    position: fixed;
    top: 64px;
  }
  .aftersalecontent>>>.van-tabs--line{
    padding-top: 0px;
  }

  .aftersalecontent-all{
    width: 100%;
    position: absolute;
    display: flex;
    top:0px;
    bottom: 0px;
    background-color: #F5F5F6;
  }
  .aftersalecontentscroll{
    width: 100%;
    overflow: hidden;
  }
</style>
