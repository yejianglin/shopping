<!--首页轮播模块-->
<template>
 <!-- <van-swipe :autoplay="3000" indicator-color="green">
    <van-swipe-item>
    </van-swipe-item>
    <van-swipe-item>
      <div class="itemtwo">

      </div>
    </van-swipe-item>
    <van-swipe-item>
      <div class="itemthree">

      </div>
    </van-swipe-item>
    <van-swipe-item>
      <div class="itemfour">

      </div>
    </van-swipe-item>
  </van-swipe>-->
  <div class="itemone">
    <img class="itemoneimg" src="../../../assets/images/index/indextop.png" />
  </div>
</template>

<script>
    import 'swiper/dist/css/swiper.min.css';
	export default{
		name:'swiper',
		data(){
			return{
				
			}
		},
	}
</script>

<style scoped>
  .itemone{
    width: 100%;
    height: 150px;
    background-color: #0077aa;
  }
  .itemoneimg{
    width:100%;
    height: 100%;
    overflow: hidden;
  }
</style>
