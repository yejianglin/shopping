<!--商品标题-->
<template>
	<div class="shoptitle">
		<div class="shoptitle-text">
			<span class="shopname">商品名称</span>
			<span class="shopprice">￥198.00</span>
		</div>
		<div class="shopmsg">
			<span class="yunfei">运费:免运费</span>
			<span class="shengyu">剩余:</span>
			<span class="xiaoliang">销量:</span>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped lang="less">
	.shoptitle{
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.shoptitle-text{
		width: 94%;
		display: flex;
		flex-direction: column;
		margin-left: 3%;
		margin-right: 3%;
		border-bottom: gainsboro solid 1px;
	}
	.shopname{
		padding: 10px 0 5px 0px;
	}
	.shopprice{
		padding: 5px 0 5px 0px;
		color: red;
		font-size: 19px;
	}
	.yuanshopprice{
		padding: 5px 0 5px 0px;
		color: gainsboro;
		text-decoration: line-through;
		font-size: 13px;
	}
	.shopmsg{
		width: 94%;
		height:40px;
		line-height: 40px;
		display: flex;
		flex-direction: row;
		justify-content:space-between;
		margin: 0 3% 0 3%;
		font-size: 13px;
		color: gainsboro;
	}
	
</style>
