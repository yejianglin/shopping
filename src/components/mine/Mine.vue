<!-- 我的-引入 -->
<template>
	<div class="mine">
		<MineHeader></MineHeader>
		<div class="minescroll" ref='myscroll'>
			<div class="mine-container">
        <MonthSettleMent></MonthSettleMent>
        <MineOrder></MineOrder>
        <MineTool></MineTool>
			</div>
		</div>
	</div>
</template>

<script>
	import Betterscroll from 'better-scroll'
	import MineHeader from './components/MineHeader'
  import MonthSettleMent from './components/MonthSettlement'
  import MineOrder from './components/MineOrder'
  import MineTool from './components/MineTool'
	export default{
		data(){
			return{
				
			}
		},
		components:{
			MineHeader,MonthSettleMent,MineOrder,MineTool
		},
		mounted(){
			this.$nextTick(function(){
				this.minescroll=new Betterscroll(this.$refs.myscroll,{
					click:true
				})
			})
		},
    beforeRouteLeave(to,from,next){
     if(to.name=='MyOrder'){
       this.$store.commit("keepAlives",['myorder'])
     }
     next();
    }
	}
</script>

<style scoped>
	.mine{
	        width: 100%;
			display: flex;
			position: absolute;			
			top: 196px;
			bottom: 51px;
			background-color: #F5F5F6;
	}
	.minescroll{
		width: 100%;		
		overflow: hidden;
	
	}
</style>
