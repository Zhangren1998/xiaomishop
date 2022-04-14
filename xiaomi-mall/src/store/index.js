import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

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
        cartList: JSON.parse(sessionStorage.getItem('cartList')) || []
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
