<!--商品详情头部-->
<template>
	<div class="detailheader">
		<i class="aishtmal5icon37" @click="backindex()"></i>
		<span class="detailheader-text"><strong>商品详情</strong></span>
		<i class="aisgengduo"></i>
	</div>
</template>

<script>
	export default{
		name:'detailheader',
		data(){
			return{
				
			}
		},
		methods:{
			backindex(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped lang="less">
  @import "../../.././assets/less/color.less";
  .detailheader{
    width: 100%;
    height: 64px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    top: 0;
    left: 0;
    text-align: center;
    z-index:20;
    background-color:@color-FF6C6C ;
    .aishtmal5icon37{
      margin: 34px 0 14px 17px;
      font-size: 16px;
      color: white;
    }
  }

  .aisgengduo{
    margin: 34px 17px 14px 0 ;
    font-size: 18px;
    color: white;
  }
  .detailheader-text{
    margin-top: 34px;
    color: white;
  }
</style>
