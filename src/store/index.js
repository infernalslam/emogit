import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    showToggle: true
  },
  getters: {
    showToggle: state => state.showToggle
  },
  actions: {
    changeToggle ({commit}, nowStateToggle) {
      commit('CHANGE_STATE_TOGGLE', !nowStateToggle)
    }
  },
  mutations: {
    CHANGE_STATE_TOGGLE (state, stateToggle) {
      state.showToggle = stateToggle
    }
  }
})

export default store
