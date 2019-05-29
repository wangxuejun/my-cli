import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  listMeta: {}, // 元数据
  user: {}, // 用户信息
  storeId: '', // 商铺Id
  pageKey: +new Date() // 页面key
}
const mutations = {
  changeKey (state, value) {
    state.pageKey = value
  },
  changeListMeta (state, value) {
    state.listMeta = value
  },
  changeUser (state, value) {
    state.user = value
  },
  changeStoreId (state, value) {
    state.storeId = value
  }
}
const actions = {
  getListMeta ({commit}, value) {
    commit('changeListMeta', value)
  },
  getUserInfo ({commit}, value) {
    commit('changeUser', value)
  },
  getStoreId ({commit}, value) {
    commit('changeStoreId', value)
  }
}
const getters = {
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
