import Vue from 'vue'
import Router from 'vue-router'
import * as ROUTE from './import'


Vue.use(Router)

export default new Router({
  routes: [
    {
      /**************************************************进入项目首页********************************************************/
      path: '/', redirect:'/Index', name: 'Entry', component: ROUTE.Entry,meta:{keepAlive:true},
			children:[{path:'/Index', name:'Index', component:ROUTE.Index},
                {path:'/Classification', name:'Classification', component:ROUTE.Classification},
			          {path:'ShopCar', name:'ShopCar', component:ROUTE.ShopCar},
			          {path:'/Mine', name:'Mine', component:ROUTE.Mine}
			         ]
    },
    /****************************************************首页***********************************************************/
		{path:'/Index/ShopDetail/ShopDetail', name:'ShopDetail', component:ROUTE.ShopDetail},
    {path:'/Index/JoinGroups/JoinGroups', name:'JoinGroups', component:ROUTE.JoinGroups,meta:{keepAlive:false}},
    {path:'/Index/SaleKind/GroupBuy/GroupBuy',name:'GroupBuy',component:ROUTE.GroupBuy,meta:{keepAlive:true}},
    {path:'/Index/SaleKind/OtherShop/OtherShop',name:'OtherShop',component:ROUTE.OtherShop,meta:{keepAlive:true}},
    /*************************************************我的*********************************************************/
    {path:'/Mine/MyOrder/WaitCommentOrder/Refund/Refund', name:'Refund', component:ROUTE.Refund},
    {path:'/Mine/MyAddress/AddAddress/AddAddress', name:'AddAddress', component:ROUTE.AddAddress},
    {path:'/Mine/MyAddress/MyAddress', name:'MyAddress', component:ROUTE.MyAddress},
    {path:'/Mine/NoviceGuide/NoviceGuide', name:'NoviceGuide', component:ROUTE.NoviceGuide},
    {path:'/Mine/MyOrder/MyOrder', name:'MyOrder', component:ROUTE.MyOrder,meta:{keepAlive:true}},
    {path:'/Mine/MyProfit/MyProfit', name:'MyProfit', component:ROUTE.MyProfit},
    {path:'/Mine/MyCollection/MyCollection', name:'MyCollection', component:ROUTE.MyCollection},
    {path:'/Mine/MyOrder/WaitCommentOrder/Comment/Comment', name:'Comment', component:ROUTE.Comment},
    {path:'/Mine/MyOrder/AllOrder/ShipInformation/ShipInformation', name:'ShipInformation', component:ROUTE.ShipInformation},
    {path:'/Mine/CashMoney/CashMoney',name:'CashMoney', component:ROUTE.CashMoney},
    {path:'/Mine/MyDiscount/MyDiscount', name:'MyDiscount', component:ROUTE.MyDiscount},
    {path:'/Mine/MyGroupBuy/MyGroupBuy',name:'MyGroupBuy',component:ROUTE.MyGroupBuy},
    {path:'/Mine/AfterSale/AfterSale',name:'AfterSale',component:ROUTE.AfterSale},
    {path:'/Mine/MyOrder/WaitPayOrder/DefaultPage/PaySuccessful/PaySuccessful',name:'PaySuccessful',component:ROUTE.PaySuccessful},
    {path:'/Mine/MyOrder/WaitPayOrder/DefaultPage/PayFail/PayFail',name:'PayFail',component:ROUTE.PayFail},
    {path:'/Mine/MyOrder/WaitCommentOrder/Refund/Refunding/DefaultPage/PayFail/PayFail',name:'Refunding',component:ROUTE.Refunding},
    {path:'/Mine/MyOrder/OrderDetail/OrderDetail',name:'OrderDetail',component:ROUTE.OrderDetail},
    {path:'/Mine/BecomeAgent/BecomeAgent',name:'BecomeAgent',component:ROUTE.BecomeAgent},
    {path:'/Mine/Invitation/Invitation',name:'Invitation',component:ROUTE.Invitation},
    {path:'/Mine/InvitationCode/InvitationCode',name:'InvitationCode',component:ROUTE.InvitationCode},
    {path:'/Mine/MyProfit/ProfitDetail/ProfitDetail',name:'ProfitDetail',component:ROUTE.ProfitDetail},
    {path:'/Mine/MyProfit/CashMoneyRecord/CashMoneyRecord',name:'CashMoneyRecord',component:ROUTE.CashMoneyRecord},
    /************************************************购物车****************************************************/
    {path:'/ShopCar/SummitOrder/SummitOrder', name:'SummitOrder', component:ROUTE.SummitOrder,meta:{keepAlive:true}},

  ]
})
