<!--项目入口-->
<template>
	<div class="index">
		<Nav></Nav>
		<router-view></router-view>
	</div>
</template>

<script>
	import Nav from '@/components/Public/Nav.vue'
	import Index from '@/components/Index/Index'
	import Classification from '@/components/Classification/Classification'
	import ShopCar from '@/components/ShopCar/ShopCar'
	import Mine from '@/components/Mine/Mine'
	
	export default{
		name:'index',
		data(){
			return{
				
			}
		},
		components:{
			Nav,Index,Classification,ShopCar,Mine
		}
	}
</script>

<style scoped>
	
</style>
