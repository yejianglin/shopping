import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    //红包状态判断
    activeRedenvelopes:true,
    //判断是否为代理
    isAgent:false,
    //判断返回路由，是否回到顶部
    scrollTop:0,
    //要被缓存的页面
    keepAlives:[]
  },
  mutations: {
    //改变红包显示状态
    changeRedenvelopes(state,activeRedenvelopes){
      state.activeRedenvelopes=activeRedenvelopes
    },
   //判断是否缓存页面
    keepAlives(state,keepAlives){
      state.keepAlives=keepAlives
      console.log(keepAlives)
    },
    recordScrollTop(state,n){
      state.scrollTop=n
      console.log(n)
    },
    //判断是否是代理
    judgeIsAgent(state,isAgent){
      state.isAgent=isAgent
    }
  },
  actions: {

  },
  getters: {}
})
