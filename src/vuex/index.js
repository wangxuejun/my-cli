import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  // 黑夜模式
  night: false
}
const mutations = {
  toggleNight (state, value) {
    state.night = !state.night
  },
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
