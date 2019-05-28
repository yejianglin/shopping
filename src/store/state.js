const state={
  state: {
    //红包状态判断
    activeRedenvelopes:true,
    //判断是否为代理
    isAgent:false,
    //所有的商品跳转时,存放在下面对象中
    allShop:{
      groupShop:{

      },
      otherShop:{

      }
    },
    shopArray: [],//存放选中的商品
    shopMsg:{
      shopSpec:{

      }
    },
    optionArg:null,
    //要被缓存的页面
    keepAlives:''
  },
}
export default state
