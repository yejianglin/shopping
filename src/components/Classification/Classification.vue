<template>
  <!--分类引入-->
	<div class="classification">
		  <ClassificationHeader></ClassificationHeader>
      <ClassificationContent></ClassificationContent>
	</div>
</template>

<script>
	import ClassificationHeader from './components/ClassificationHeader'
  import ClassificationContent from './components/ClassificationContent'
	export default{
		name:"classification",
		data(){
			return{
				
			}
		},
		components:{
      ClassificationHeader,ClassificationContent
		}
	}
</script>

<style scoped lang="less">
	.classification{
		margin-top: 50px;
	}
</style>
