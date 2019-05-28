<!--商品详情页滚动栏-->
<template>
  <van-swipe :autoplay="3000" indicator-color="white">
    <van-swipe-item>
      <div class="itemone">

      </div>
    </van-swipe-item>
    <van-swipe-item>
      <div class="itemtwo">

      </div>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
	export default{
		name:'swiper',
		data(){
			return{
				
			}
		},
		mounted() {
			new Swiper('.swiper-container',{
				loop:true,autoplay:true
			})
		}
	}
</script>

<style scoped>
	.itemone{
    width: 100%;
    height: 300px;
    background-color: #0077aa;
  }
  .itemtwo{
    width: 100%;
    height: 300px;
    background-color: green;
  }
</style>
