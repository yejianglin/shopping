<!--首页商品分类导航模块-->
<template>
	<div class="category">
			<div class="category-icon" >
        <div class="category-icon-content" v-for="(item,index) in goodList.leiBieArray" :key="index" @click="goSaleKind(item)">
          <img class="category-icon-content-img" :src="item.leiBieIcon" />
          <span class="category-icon-content-text">{{item.desc}}</span>
        </div>
        <div class="category-icon-content">
          <img class="category-icon-content-img" src="../../../assets/images/index/icon-daili.png" />
          <span class="category-icon-content-text">VIP代理签到</span>
        </div>
      </div>
				<!--<div class="Novice-box pubsty">
					<img class="Novice-img pubsty-img" src="../../assets/images/index/icon-weekgroup.png" />
					<span class="Novice-text pubsty-text">每周拼团</span>
				</div>
				<div class="Clothes-box pubsty">
					<img class="Clothes -img pubsty-img" src="../../assets/images/index/icon-shoeclose.png" />
					<span class="Clothes -text pubsty-text">服饰鞋包配饰</span>
				</div>
				<div class="decorate-box pubsty">
					<img class="decorate-img pubsty-img" src="../../assets/images/index/icon-lifeuser.png" />
					<span class="decorate-text pubsty-text">生活百货</span>
				</div>
				<div class="Departmentstore-box pubsty">
					<img class="Departmentstore-img pubsty-img" src="../../assets/images/index/icon-children.png" />
					<span class="Departmentstore-text pubsty-text">儿童用品</span>
				</div>
				<div class="children-box pubsty">
					<img class="children-img pubsty-img" src="../../assets/images/index/icon-petuser.png" />
					<span class="children-text pubsty-text">宠物用品</span>
				</div>
				<div class="Hometextiles-box pubsty">
					<img class="Hometextiles-img pubsty-img" src="../../assets/images/index/icon-import.png" />
					<span class="Hometextiles-text pubsty-text">进口专卖</span>
				</div>
				<div class="Imported-box pubsty">
					<img class="Imported-img pubsty-img" src="../../assets/images/index/icon-daili.png" />
					<span class="Imported-text pubsty-text">VIP代理签到</span>
				</div>-->

		</div>
</template>

<script>
  export  default {
    name:"category",
    data(){
      return{

      }
    },
    props:[
      'goodList'
    ],
    methods:{
      goSaleKind(item){
        if(item.state==2){
          this.$router.push({name:'GroupBuy',params:{"saleKind":item}})
          console.log(item)
        }
        if(item.state==1){
          this.$router.push({name:'OtherShop',params:{"saleKind":item}})
        }
      }
    }
  }

</script>

<style scoped>
  .category {
    width: 92%;
    display: flex;
    flex-direction: column;
    margin: 3% 4% 0 4%;
    background-color: white;
    border-radius: 8px;
  }
  .category-icon{
    width: 100%;
    display: flex;
    flex-wrap: wrap;

  }
  .category-icon-content{
    width: 25%;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 5% 0 3% 0;
  }
  .category-icon-content-img{
    width: 35px;
    height: 45px;
    overflow: hidden;
    margin: 0 auto;
  }
  .category-icon-content-text{
    margin: 8% 0 0 0;
    color: gainsboro;
    font-size: 13px;
  }



	/*.pubsty{
		width: 25%;
		display: flex;
		flex-direction: column;
		text-align: center;
		margin: 5% 0 3% 0;
	}
	.pubsty-img{
		width: 35px;
		height: 45px;
		overflow: hidden;
		margin: 0 auto;
	}
	.pubsty-text{
		margin: 8% 0 0 0;
		color: gainsboro;
		font-size: 13px;
	}*/
</style>

