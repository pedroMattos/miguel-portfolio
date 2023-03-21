import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nextProject: null,
  },
  getters: {
    getNextProject: (state) => state.nextProject,
  },
  mutations: {
    nextProject: (state, payload) => {
      state.nextProject = payload;
    },
  },
  actions: {},
  modules: {},
});
