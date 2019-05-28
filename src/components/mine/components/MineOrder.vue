<!--我的订单模块-->
<template>
	<div class="mineorder">
		<div class="mineorder-box">	
			<span class="mineorder-text">我的订单</span>
			<span class="mineorder-all" @click="goAllOrder()">查看全部订单&nbsp;&nbsp;<i class="aisjiantouyou mineorder-all-go"></i></span>
			
		</div>
		<div class="mineorder-icon">
			<div class="waitpay-box pubsty" @click="goWaitPayOrder()">
				<img class="waitpay-img pubsty-img" src="../../../assets/images/mine/waitpay.png" />
				<span class="waitpay-text pubsty-text">待付款</span>
			</div>
			<div class="waitreceiv-box pubsty" @click="goWaitRecive()">
				<img class="waitreceiv-img pubsty-img" src="../../../assets/images/mine/waitrecive.png" />
				<span class="waitreceiv-text pubsty-text">待收货</span>
			</div>
			<div class="waitcomment-box pubsty" @click=" goWaitComment()">
				<img class="waitcomment-img pubsty-img" src="../../../assets/images/mine/waitcomment.png" />
				<span class="waitcomment-text pubsty-text">待评价</span>
			</div>
			<div class="complete-box pubsty" @click="goAfterSale()">
				<img class="complete-img pubsty-img" src="../../../assets/images/mine/shouhou.png" />
				<span class="complete-text pubsty-text">退款/售后</span>
			</div>
		</div>
	</div>
</template>

<script>
   export default {
     methods:{
       goAllOrder(){
         this.$router.push({name:"MyOrder",params:{active:0}})
       },
       goWaitPayOrder(){
         this.$router.push({name:"MyOrder",params:{active:1}})
       },
       goWaitRecive(){
         this.$router.push({name:"MyOrder",params:{active:2}})
       },
       goWaitComment(){
         this.$router.push({name:"MyOrder",params:{active:3}})
       },
       goAfterSale(){
         this.$router.push({name:'AfterSale',params:{}})
       }
     },
   }
</script>

<style scoped>
	.mineorder{
		width: 92%;
		display: flex;
		flex-direction: column;		
		margin: 3% 4% 0 4%;
		background-color: white;
		border-radius: 8px;
	}
	.mineorder-box{
		width: 92%;
		display: flex;
		justify-content: space-between;
		line-height:40px;
		margin: 0 4% 0 4%;
	}
	.mineorder-text{
		font-size: 16px;
    font-weight: 600;
    color: #333333;
	}
	.mineorder-all{
		font-size: 13px;
		color: gainsboro;
	}
	.mineorder-all-go{
		font-size: 12px;
		color: gainsboro;
	}
	.mineorder-icon{
		width: 100%;
		display: flex;
		border-top: gainsboro solid 1px;
				
	}
	.pubsty{
		width: 25%;
		display: flex;
		flex-direction: column;
		text-align: center;
		margin: 6% 0 6% 0;
	}
	.pubsty-img{
		width: 1.5rem;
		height: 20px;
		overflow: hidden;
		margin: 0 auto;
	}
	.pubsty-text{
		margin: 8% 0 0 0;
		color: gainsboro;
		font-size: 13px;
	}
</style>
