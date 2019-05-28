<!--秒杀商品信息-->
<template>
	<div class="spikeshop">
		<div class="spikeshop-text">
			<span class="shopname">商品名称</span>
      <div class="spikeshop-box">
        <div class="spikeshop-box-price">
          <span class="shopprice">￥198.00</span>
          <span class="yuanshopprice">原价:208.00</span>
        </div>
          <span class="countdown">距离倒计时还有:</span>
      </div>
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
	.spikeshop{
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.spikeshop-text{
		width: 94%;
		display: flex;
		flex-direction: column;
		margin-left: 3%;
		margin-right: 3%;
		border-bottom: gainsboro solid 1px;
	}
	.shopname{
		padding: 10px 0 5px 20px;
	}
  .spikeshop-box{
    width: 100%;
    display:flex;
  }
  .spikeshop-box-price{
    display:flex;
    flex-direction: column;
  }
	.shopprice{
		padding: 5px 0 5px 20px;
		color: red;
		font-size: 19px;
	}
	.yuanshopprice{
		padding: 5px 0 5px 20px;
		color: gainsboro;
		text-decoration: line-through;
		font-size: 13px;
	}
	.shopmsg{
		width: 84%;
		height:40px;
		line-height: 40px;
		display: flex;
		flex-direction: row;
		justify-content:space-between;
		margin: 0 8% 0 8%;
		font-size: 13px;
		color: gainsboro;
	}
  .countdown{
    color: #AAAAAA;
    font-size: 13px;
    position: absolute;
    right: 70px;
  }
</style>
