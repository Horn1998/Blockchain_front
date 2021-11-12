import { createStore } from 'vuex'

export default createStore({
  state: {
    block: '雅思',
  },
  mutations: {
    changeBlock (state, block) {
      state.block = block;
    },
  },
  actions: {
  },
  getters:{
    getBlock: state =>{
      return state.block;
    }
  },
  modules: {
  }
})
