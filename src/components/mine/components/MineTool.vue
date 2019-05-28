<!--我的工具模块-->
<template>
	<div class="minetool">
		<div class="minetool-box">	
			<span class="minetool-text">我的工具</span>
		</div>
		<div class="minetool-icon">
			<div class="Novice-box pubsty" @click="goNoviceGuide()">
				<img class="Novice-img pubsty-img" src="../../../assets/images/mine/xinshouzhiyin.png" />
				<span class="Novice-text pubsty-text">新手指引</span>
			</div>
			<div class="address-box pubsty" @click="goMyAddress()">
				<img class="address-img pubsty-img" src="../../../assets/images/mine/myaddress.png" />
				<span class="address-text pubsty-text">我的地址</span>
			</div>
			<div class="Discount-box pubsty" @click="goMyDiscount()">
				<img class="Discount-img pubsty-img" src="../../../assets/images/mine/youhui.png" />
				<span class="Discount-text pubsty-text">优惠券</span>
			</div>
      <div class="Discount-box pubsty" @click="goMyGroupBuy()">
        <img class="Discount-img pubsty-img" src="../../../assets/images/mine/mygroup.png" />
        <span class="Discount-text pubsty-text">我的团购</span>
      </div>
      <div class="problem-box pubsty" @click="goInvitation()">
        <img class="problem-img pubsty-img" src="../../../assets/images/mine/usuallyIssue.png" />
        <span class="problem-text pubsty-text">邀请码</span>
      </div>
			<div class="Opinion-box pubsty">
				<img class="Opinion-img pubsty-img" src="../../../assets/images/mine/yijianfankui.png" />
				<span class="Opinion-text pubsty-text">意见反馈</span>
			</div>
			<div class="aboutus-box pubsty">
				<img class="aboutus-img pubsty-img" src="../../../assets/images/mine/guanyuwomen.png" />
				<span class="aboutus-text pubsty-text">关于我们</span>
			</div>
    </div>
	</div>
</template>

<script>
   export default {
     methods:{
       goMyAddress(){
         this.$router.push({name:'MyAddress',params:{}})
       },
       goNoviceGuide(){
         this.$router.push({name:'NoviceGuide',params:{}})
       },
       goMyDiscount(){
         this.$router.push({name:'MyDiscount',params:{}})
       },
       goMyGroupBuy(){
         this.$router.push({name:'MyGroupBuy',params:{}})
       },
       goInvitation(){
           this.$router.push({name:'Invitation',params:{}})
       },

     }
   }
</script>

<style scoped lang="less">
	.minetool{
		width: 92%;
		display: flex;
		flex-direction: column;		
		margin: 3% 4% 0 4%;
		background-color: white;
		border-radius: 8px;
	}
	.minetool-box{
		width: 92%;
		line-height:40px;
		margin: 0 4% 0 4%;
	}
	.minetool-text{
		font-size: 16px;
    color: #333333;
    font-weight: 600;
	}
	.minetool-icon{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		border-top: gainsboro solid 1px;
				
	}
	.pubsty{
		width: 25%;
		display: flex;
		flex-direction: column;
		text-align: center;
		margin: 5% 0 3% 0;
	}
	.pubsty-img{
		width: 20px;
		height: 26px;
		overflow: hidden;
		margin: 0 auto;
	}
	.pubsty-text{
		margin: 8% 0 0 0;
		color: gainsboro;
		font-size: 13px;
	}
</style>
