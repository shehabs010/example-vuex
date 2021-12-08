import Vue from 'vue'
import Vuex from 'vuex'
import example1 from './modules/example1/index'
import example2 from './modules/example2/index'
Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ex1:example1,
    ex2:example2
  }
});

export default Store