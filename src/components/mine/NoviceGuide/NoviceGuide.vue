<!--新手指引引入-->
<template>
    <div class="noviceguide">
      <NoviceGuideHeader></NoviceGuideHeader>
      <div class="noviceguidescroll" ref="noviceGuideScroll">
        <div class="container">
          <NoviveGuideMoudel></NoviveGuideMoudel>
        </div>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import NoviceGuideHeader from './NoviceGuideHeader'
  import NoviveGuideMoudel from './NoviceGuideMoudel'
    export default {
        name: "noviceGuide",
        components:{
          NoviceGuideHeader,NoviveGuideMoudel
        },
        mounted() {
          this.$nextTick(function(){
            this.noviceguidescroll=new BScroll(this.$refs.noviceGuideScroll,{
              click:true
            })
          })
        }
    }
</script>

<style scoped lang="less">
   .noviceguide{
     width: 100%;
     display: flex;
     position: absolute;
     top: 64px;
     bottom: 0px;
     background-color: #F5F5F6;
   }
  .noviceguidescroll{
    width: 100%;
    overflow: hidden;
  }
</style>
