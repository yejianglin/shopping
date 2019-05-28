/*项目入口*/
export {default as Entry} from '../components/Entry'

/*首页*/
export {default as Index} from '../components/Index/Index'
export {default as GroupBuy} from "../components/Index/SaleKind/GroupBuy/GroupBuy"//秒杀类商品
export {default as OtherShop} from "../components/Index/SaleKind/OtherShop/OtherShop"//其他类商品
export {default as ShopDetail} from '../components/Index/shopdetail/ShopDetail'//商品详情
export {default as JoinGroups} from "../components/Index/JoinGroups/JoinGroups"


/*分类*/
export {default as Classification} from  '../components/Classification/Classification'

/*我的*/
export {default as Mine} from '../components/Mine/Mine'
export {default as AfterSale} from "../components/Mine/AfterSale/AfterSale"//售后
export {default as BecomeAgent} from '../components/Mine/BecomeAgent/BecomeAgent'//成为代理
export {default as CashMoney} from "../components/Mine/CashMoney/CashMoney"//提现
export {default as Invitation} from '../components/Mine/Invitation/Invitation'//邀请其他人成为代理
export {default as InvitationCode} from '../components/Mine/InvitationCode/InvitationCode'//邀请码
export {default as MyAddress} from '../components/Mine/MyAddress/MyAddress'//我的地址
export {default as AddAddress} from '../components/Mine/MyAddress/AddAddress/AddAddress'//添加地址
export {default as MyCollection} from '../components/Mine/MyCollection/MyCollection'//我的收藏
export {default as MyDiscount} from "../components/Mine/MyDiscount/MyDiscount"//我的优惠券
export {default as MyOrder} from '../components/Mine/MyOrder/myorder'//我的订单
export {default as ShipInformation} from "../components/Mine/MyOrder/AllOrder/ShipInformation/ShipInformation"//物流
export {default as OrderDetail} from '../components/Mine/MyOrder/OrderDetail/OrderDetail'//订单详情
export {default as Comment} from'../components/Mine/MyOrder/WaitCommentOrder/Comment/Comment'//订单评论
export {default as Refund} from '../components/Mine/MyOrder/WaitCommentOrder/Refund/Refund'//退款
export {default as Refunding} from "../components/Mine/MyOrder/WaitCommentOrder/Refund/Refunding/Refunding"//退款中
export {default as PaySuccessful} from '../components/Mine/MyOrder/WaitPayOrder/DefaultPage/PaySuccessful/PaySuccessful'//支付成功
export {default as PayFail} from '../components/Mine/MyOrder/WaitPayOrder/DefaultPage/PayFail/PayFail'//支付失败
export {default as MyProfit} from "../components/Mine/MyProfit/MyProfit"//我的收益
export {default as ProfitDetail} from '../components/Mine/MyProfit/ProfitDetail/ProfitDetail'//收益详情
export {default as CashMoneyRecord} from '../components/Mine/MyProfit/CashMoneyRecord/CashMoneyRecord'//提现记录
export {default as NoviceGuide} from '../components/Mine/NoviceGuide/NoviceGuide'//新手指引
export {default as MyGroupBuy} from '../components/Mine/MyGroupBuy/MyGroupBuy'

/*购物车*/
export {default as ShopCar} from'../components/ShopCar/ShopCar'
export {default as SummitOrder} from'../components/ShopCar/SummitOrder/SummitOrder'//提交订单
