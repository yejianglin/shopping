<!--首页搜索模块-->
<template>
	<div class="serach">
		<input type="text" class="serach-text" placeholder="搜索商品"/>
	</div>
</template>

<script>
	export default{
		name:'serach',
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	.serach{
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align: center;
	}
	.serach-text{
		width: 85%;
		height: 30px;
		display: inline;
		background-color: gainsboro;
		border: gainsboro solid 1px;
		border-radius: 20px;
		text-align: center;
	}
	/*.aissousuo{
		position:absolute;
		left: 84%;
		top: 5%;
		
	}*/
</style>
