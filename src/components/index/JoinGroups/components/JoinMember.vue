<template>
    <div class="joinmember">
      <div class="joinmember-title">
        <div class="joinmember-title-left">
          参团成员&nbsp;({{joinMember.length}})
        </div>
        <div class="joinmember-title-right" v-if="startGroups">
          <img class="joinmember-title-right-img" src="../../../../assets/images/index/joingroups/wenhao.png"/>
        </div>
    </div>

      <!--我要开团-->
       <div class="joinmember-start" v-if="startGroups">
         <div class="joinmember-start-img">
           <img class="joinmember-start-img-content" src="../../../../assets/images/index/joingroups/nostartgroup.png"/>
         </div>
         <div class="joinmember-start-tips">
           您尚未开团
         </div>
         <div class="joinmember-start-btn">
          <div class="joinmember-start-btn-text">
            立刻开团
          </div>
         </div>
       </div>
      <!--寻找团员-->
       <div class="joinmember-img" ref="joinMemberImgScroll" v-if="seekMember">
         <div class="joinmember-img-scroll" ref="itemLength">
             <div class="joinmember-img-head" v-for="(item,index) in joinMember" :key="index">
               <img class="joinmember-img-head-content" :src="item.memberHead" />
               <div class="joinmember-img-head-name">{{item.memberName}}</div>
             </div>
         </div>
       </div>
    </div>
</template>

<script>
    import  BScroll from 'better-scroll'
    export default {
        name: "JoinMember",
        data(){
          return{
             joinMember:[],
            startGroups:false,
            seekMember:false
          }
        },
        mounted(){
        /*let width=this.$refs.itemLength.style.width=65*this.joinMember.length+'px'
          console.log(width)
         this.$nextTick(function () {
           this.joinmemberimgscroll=new BScroll (this.$refs.joinMemberImgScroll,{
            click:true,
             startX:0,
            scrollX:true,
            scrollY:false
          })
        })*/

        this.startGroups=this.$route.params.startGroups
        this.joinMember=this.$route.params.joinMember
        this.seekMember =this.$route.params.seekMember
    },
    }
</script>

<style scoped>
   .joinmember{
     width: 94%;
     margin: 0 3% 0 3%;
   }
   .joinmember-title{
     width: 100%;
     height: 50px;
     line-height: 50px;
     display: flex;
     justify-content: space-between;
   }
   .joinmember-title-right-img{
     margin-top: 15px;
     width: 18px;
     height: 18px;
   }

   .joinmember-start-img{
     text-align: center;
   }
   .joinmember-start-img-content{
     width: 50px;
     height: 50px;
   }
   .joinmember-start-tips{
     text-align: center;
     font-size: 12px;
     color: #AAAAAA;
   }
   .joinmember-start-btn{
     text-align: center;
   }
   .joinmember-start-btn-text{
     display: inline-block;
     width: 90px;
     height: 24px;
     margin-top: 14px;
     text-align: center;
     line-height: 24px;
     font-size: 12px;
     color: #FF6C6C;
     border: #FF6C6C solid 1px;
     border-radius: 12px;
   }

   .joinmember-img{
    width: 100%;
    margin: 0 0  14px 0;
  }
  .joinmember-img-scroll{
    width: 100%;
    overflow: hidden;

  }
  .joinmember-img-head{
    margin: 0 15px 0 0 ;
    text-align: center;
    display: inline-block;
  }
  .joinmember-img-head-content{
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
  .joinmember-img-head-name{
    font-size: 12px;
    color: #333333;
  }
</style>
