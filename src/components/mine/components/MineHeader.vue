<!--我的页面，头部-->
<template>
	<div class="mineheader">
		<div class="mineheader-top">
			<i class="aischa"></i>
			<span class="header-text"><strong>个人中心</strong></span>
			<i class="aisgengduo"></i>
		</div>
		<div class="mineavatar">
			<div class="minevatar-vatar">
				<div class="minevatar-vatar-img">
					<img class="vatar" src="http://img5.duitang.com/uploads/item/201409/23/20140923094045_BNYji.thumb.700_0.png" />
				</div>
				<div class="content">
					<span class="content-nickname">
						用户昵称
					</span>
					<span class="content-account">
						账号:#######
					</span>
				</div>
				<i class="aisjiantouyou"></i>
			</div>
			<div class="minevatar-balance">
				<div class="minevatar-balance-left">
					<span class="balancetitle">佣金&nbsp;&nbsp;￥0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;推广金&nbsp;&nbsp;￥0</span>
					<span class="cashtitle">每周六为余额提现日&nbsp;&nbsp;<span class="iconfont aisjiantouyou cashtitle-go"></span></span>
				</div>
				<div class="minevatar-balance-right">
          <span class="immedaitlycash" v-if="$store.state.isAgent" @click="goCashMoney()">立即提现</span>
          <span class="becomeagent" v-else @click="goBecomeAgent()">立即成为代理</span>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default{
		name:'mineheader',
		data(){
			return{
				
			}
		},
    methods:{
      goCashMoney(){
        this.$router.push({name:'CashMoney',params:{}})
      },
      goBecomeAgent(){
        this.$store.commit("judgeIsAgent",true)
        this.$router.push({name:'BecomeAgent',params:{}})
      }
    }
	}
</script>

<style scoped lang="less">
  @import "../../../assets/less/color.less";
	.mineheader{
		width: 100%;
		background-color:@color-FF6C6C;
		position: fixed; 
		top: 0px;
    left: 0px;
	}
  .mineheader-top{
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: space-between;
    z-index:20;
    background-color:@color-FF6C6C;
  .aischa{
    margin: 34px 0 14px 17px;
    font-size: 16px;
    color: @color-333333;
  }
  }

  .aisgengduo{
    margin: 34px 17px 14px 0 ;
    font-size: 18px;
    color: @color-333333;
  }
  .header-text{
    margin-top: 34px;
    color: @color-333333;
  }
	.mineavatar{
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.minevatar-vatar{
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
	}
	.minevatar-vatar-img{
		margin: 5px 0 17px 4%;
	}
	.vatar{
		width: 56px;
		height:56px;
		overflow: hidden;
		border-radius: 50%;		
	}
	.content{
		width: 65%;
		display: flex;
		flex-direction: column;
		margin: 11px 4% 17px 3%;
		color: @color-333333;
	}
	.aisjiantouyou{
		color: @color-333333;
		margin-right: 5%;
		align-self:center;
	}
	.minevatar-balance{
		width: 92%;
    height: 49px;
		display: flex;
		flex-direction: row;
		background: -webkit-linear-gradient(top,#666666,#323232);
		margin: 0 4% 0 4%;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
	}
	
	.minevatar-balance-left{
		/*width: 70%;*/
		display: flex;
		flex-direction: column;
		margin:4px 0px 0px 15px;
	}
	.balancetitle{
		color: #DCB173;
		font-size: 14px;
	}
	.cashtitle{
		color: #AAAAAA;
		font-size: 13px;
		margin:5px 0 0 0;
	}
	.cashtitle-go{
		font-size: 10px;
		color:#AAAAAA ;
	}
	.minevatar-balance-right{
    flex-grow: 1;
    margin-right: 15px;
	}
  .immedaitlycash{
    position: absolute;
    background-color: #C8964E;
    height: 16px;
    line-height: 16px;
    padding: 4px 6px 4px 6px;
    font-size: 12px;
    color: #FFF5E7;
    margin-top: 13px;
    right: 8%;
    border-radius: 5px;
  }
  .becomeagent{
    position: absolute;
    background-color: #C8964E;
    height: 16px;
    line-height: 16px;
    padding: 4px 6px 4px 6px;
    font-size: 12px;
    color: #FFF5E7;
    margin-top: 13px;
    right: 8%;
    border-radius: 5px;
  }
</style>
