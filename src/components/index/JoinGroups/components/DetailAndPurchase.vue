<!--商品详情和成交记录-->
<template>
	<div class="detailandpurchase">
		<van-tabs v-model="active">
			<van-tab title="商品详情">
			    <div class="detailandpurchase-shopdetail">
					商品详情
				</div>
			</van-tab>
			<van-tab title="成交记录">
				<div class="detailandpurchase-record">
					成交记录
				</div>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: 2
			};
		}
	}
</script>

<style scoped>
  .detailandpurchase{

  }
</style>

