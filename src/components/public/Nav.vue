<!--操作导航-->
<template>
	<div class="nav">	    
		   <router-link class='down' to='/Index'>
			   <span class="aisshouye icon"></span>
			   <span>首页</span>
       </router-link>
       <router-link class='down' to='/Classification'>
			   <span class="aisleimupinleifenleileibie2 icon"></span>
			   <span>分类</span>
		   </router-link>
       <router-link class='down' to='/ShopCar'>
			   <span class="aisgouwuche icon"></span>
			   <span>购物车</span>
		   </router-link>
       <router-link class='down' to='/Mine'>
			   <span class="aiswode icon"></span>
			   <span>我的</span>
		   </router-link>
	   
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
	}
</script>

<style scoped>
	.nav{
    width: 100%;
    height: 50px;
    background-color: white;
    border-top: gainsboro solid 1px;
    display: flex;
    position: fixed;
    z-index: 20;
    margin: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
	}
	.down{
		text-decoration: none;
		font-size: 10px;
		flex: 1;
		text-align: center;
    color: gray;
	}
	.router-link-active{
		color: #FF6C6C!important
	}
	.icon{
		display: block;
	}
</style>
