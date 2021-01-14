import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 10
  },
  mutations: {
    increment_mutation(state,counting){
      state.count += counting
    }
  },
  actions: {
    increment_action(context, counting){
      context.commit('increment_mutation',counting)
    }
  },
  modules: {}
});
