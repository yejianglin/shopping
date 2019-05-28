<!--我的收藏引入-->
<template>
    <div class="mycollection">
      <MyCollectionHeader></MyCollectionHeader>
      <div class="mycollectionscroll" ref="mycollectionScroll">
         <div class="container">
           <MyCollectionContent></MyCollectionContent>
         </div>
      </div>


    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import MyCollectionHeader from './components/MyCollectionHeader'
    import MyCollectionContent from './components/MyCollectionContent'
    export default {
        name: "mycollection",
        components:{
          MyCollectionHeader,MyCollectionContent
        },
        mounted() {
          this.$nextTick(function(){
            this.mycollectionscroll=new BScroll(this.$refs.mycollectionScroll,{
              click:true
            })
          })
        }
    }
</script>

<style scoped>
  .mycollection{
    width: 100%;
    display: flex;
    position: absolute;
    top: 64px;
    bottom: 0px;
  }
  .mycollectionscroll{
    width: 100%;
    overflow: hidden;
  }
</style>
