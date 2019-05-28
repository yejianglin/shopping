<!--商品货源，担保，退货。公共按钮组件-->
<template>
	<div class="guarantee">
		<div class="straight ">
      <img class="straight-img" src="../../assets/images/index/gougou.png" />
			<span>一手货源直发</span>
		</div>
		<div class="danbao">
      <img class="danbao-img" src="../../assets/images/index/gougou.png" />
			<span>担保交易</span>
		</div>
		<div class="tuihuo">
      <img class="tuihuo-img" src="../../assets/images/index/gougou.png" />
			<span>七天无理由退货</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.guarantee{
		width: 100%;
		height: 40px;
		line-height: 40px;
		display: flex;
		justify-content: space-between;
		font-size: 13px;
		color: gainsboro;
	}
	.clickone{
		color: red;
	}
	.clicktwo{
		color:red;
	}
	.clickthree{
		color:red;
	}
  .straight-img{
    width: 15px;
    height: 14px;

  }
  .danbao-img{
    width: 15px;
    height: 14px;
    overflow: hidden;
  }
  .tuihuo-img{
    width: 15px;
    height: 14px;
    overflow: hidden;
  }
</style>
