<!--每月收益预估-->
<template>
	<div class="monthsettlement"  @click="goMyProfit()">
		<div class="monthtop">
			<div class="currentmonth">
				<span class="currentmonth-money">￥32.12</span>
				<span class="currentmonth-text">本月预估</span>
			</div>
			<div class="nowday">
				<span class="nowday-money">￥0</span>
				<span class="now-text">今日收益</span>
			</div>
		</div>
		<div class="monthbottom">
			<div class="beforemonthsettlement">
				<span class="beforemonthsettlement-text">上月结算</span>
				<span class="beforemonthsettlement-money">￥0</span>
			</div>
			<div class="beforemonthEstimated">
				<span class="beforemonthEstimated-text">上月预估</span>
				<span class="beforemonthEstimated-money">￥0</span>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name:'monthsettlement',
    data(){
      return{

      }
    },
    methods:{
      goMyProfit(){
        this.$router.push({name:'MyProfit',params:{}})
      }
    }
  }
</script>

<style scoped>
	.monthsettlement{
		width: 92%;
		margin: 0 4% 0 4%;
		background-color: white;
		display: flex;
		flex-direction: column;
	}
	.monthtop{
		width: 100%;
		display: flex;
		flex-direction: row;	
		border-bottom: gainsboro solid 1px;
	}
	.currentmonth{
		width: 50%;
		display: flex;
		flex-direction: column;
		margin: 3% 0 6% 0;
		text-align: center;
		border-right: gainsboro solid 1px;
	}
	.currentmonth-money{
		padding: 0 0 6% 0;
	}
	.currentmonth-text{
		font-size: 12px;
		color: #AAAAAA;
	}
	.nowday{
		width: 50%;
		display: flex;
		flex-direction: column;
		margin: 3% 0 6% 0;
		text-align: center;
	}
	.nowday-money{
		padding: 0 0 6% 0;
	}
	.now-text{
		font-size: 12px;
		color: #AAAAAA;
	}
	.monthbottom{
		width: 100%;
    height:40px;
		display: flex;
    flex-direction: row;
	}
	.beforemonthsettlement{
		width: 50%;
    text-align: center;
    line-height: 40px;
	}
	.beforemonthsettlement-text{
		font-size: 12px;
		color: #AAAAAA;
	}
	.beforemonthEstimated{
		width: 50%;
    text-align: center;
    line-height: 40px;
	}
	.beforemonthEstimated-text{
		font-size: 12px;
		color: #AAAAAA;
	}
</style>
