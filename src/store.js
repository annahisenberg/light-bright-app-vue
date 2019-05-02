import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    buttonClicked: false
  },
  mutations: {
    CLICKED_RESET_BUTTON(state) {
      state.buttonClicked = true;
    }
  },
  actions: {
    clickButton({
      commit
    }) {
      commit('CLICKED_RESET_BUTTON');
    }
  }
})