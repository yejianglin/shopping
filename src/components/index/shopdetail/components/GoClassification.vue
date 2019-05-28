<!--去分类页面-->
<template>
	<div class="gofenlei">
		<div class="gofenleicontent">
			<div class="gofenleicontent-set">
				<i class="aisshangcheng"></i>
				<span class="gofenleicontent-shop">CC商城护肤彩妆</span>
			</div>
			<div>
				<span class="gofenleicontent-text">进入分类</span>
				<i class="aisjiantouyou"></i>
			</div>	
		</div>
		<Guarantee></Guarantee>
	</div>
</template>

<script>
	import Guarantee from '../../../Public/Guarantee.vue'
	export default{
		components:{
			Guarantee
		}
	}
</script>

<style scoped lang="less">
	.gofenlei{
		width: 94%;
    margin: 0 3% 0 3%;
		display: flex;
		flex-direction: column;
	}
	.gofenleicontent{
		width: 100%;
		height: 50px;
		line-height: 50px;
		display:flex;
		flex-direction:row;
		justify-content: space-between;
		border-bottom: gainsboro solid 1px;
	}
	.gofenleicontent-shop{
		padding: 0 0 0 5px;
	}
	.aisshangcheng{
		color:gray;
	}
	.gofenleicontent-text{
		font-size: 14px;
		color: gainsboro;
	}
	.aisjiantouyou{
		font-size: 14px;
		color: gainsboro;
	}
</style>
