import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,

  },
  getters: {},
  mutations: {
    add(state, n) {
      state.count += n
    }
  },
  actions: {},
  modules: {
    carts: {
      state: {
        count: JSON.parse(sessionStorage.getItem('count')) || 0,
      },
      mutations: {
        add(state, n) {
          state.count += n
        }
      },
      actions: {
        add(context, n) {
          console.log(context);
          context.commit('add', n)
        }
      },
    }
  }
})
