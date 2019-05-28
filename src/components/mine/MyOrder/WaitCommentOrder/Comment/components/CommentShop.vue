<!--评论商品-->
<template>
    <div class="commentshop">
      <div class="commentshop-name">
        评价商品
      </div>
      <div class="commentshop-star" >
        <img class="commentshop-star-img" v-for="(item,index) in stars" :src=item.starUrl  @click="choseStar(index)"/>
      </div>
      <div class="commentshop-input">
        <textarea class="commentshop-input-text" placeholder="写其他意见或建议" v-model="commentContent"></textarea>
      </div>
      <div class="commentshop-commit">
         提交
      </div>
    </div>
</template>

<script>
    var starOff='../../.././static/images/commentImg/huixing.png'
    var starOn='../../.././static/images/commentImg/hongxing.png'

    export default {
        name: "CommentShop",
        data(){
          return{
            commentContent:null,//评论文字
            stars:[
              {
               starUrl:starOff,
               isActive:false
              },
              {
                starUrl:starOff,
                isActive:false
              },
              {
                starUrl:starOff,
                isActive:false
              },
              {
                starUrl:starOff,
                isActive:false
              },
              {
                starUrl:starOff,
                isActive:false
              },
            ],
            lightStar:0 //亮着的星星的数量
          }
        },
        methods:{
           choseStar(index){
            var currentStar=index+1 //当前应该亮的星星数量
            //点击图标，点到哪里亮到哪里
             if(this.lightStar===0){
               this.lightStar=currentStar
               for(var i=0;i<currentStar;i++){
                 this.stars[i].starUrl=starOn
                 this.stars[i].isActive=true
               }
             }
             //如果之前点亮过图标,接着此处继续点亮后面的
             else if(this.lightStar<currentStar){
                this.lightStar=currentStar
               for(var i=0;i<currentStar;i++){
                 this.stars[i].starUrl=starOn
                 this.stars[i].isActive=true
               }
             }
             else{
               //如果点击的图标为最高级星级
               if(index===this.lightStar-1){
                 this.stars[index].starUrl=starOff
                 this.stars[index].isActive=false
                 var reduceStar=0
                 reduceStar++
                 this.lightStar=this.lightStar-reduceStar
               }
               //如果点击的图标小于最高级图标
               else if(index<this.lightStar-1){
                 var reduceStar=0
                 for(index;index<this.lightStar;index++){
                   this.stars[index].starUrl=starOff
                   this.stars[index].isActive=false
                   reduceStar++
                 }
                 this.lightStar=this.lightStar-reduceStar
               }
             }
          }

        }

    }
</script>

<style scoped>
   .commentshop{
     width: 85%;
     margin: 0 auto;
     display: flex;
     flex-direction: column;
   }
  .commentshop-name{
    text-align: center;
    width: 100%;
    height: 65px;
    line-height: 65px;
  }
   .commentshop-star{
     margin: 0 auto;
   }
   .commentshop-star-img{
     width: 34px;
     height: 32px;
     overflow: hidden;
     margin: 0 7px 0 7px;
   }
  .commentshop-input{
    width: 100%;
    margin: 37px auto 0 auto;
  }
  .commentshop-input-text{
    width: 90%;
    height: 150px;
    padding:15px 5% 15px 5%;
    border:0;
    background-color:#F6F6F6 ;
  }
  .commentshop-commit{
    width: 100%;
    height: 50px;
    margin-top: 50px;
    background:-webkit-linear-gradient(top,#FF9898,#FF6C6C);
    text-align: center;
    line-height: 50px;
    color: white;
  }
</style>
