import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nextProject: null,
    currentProject: null,
  },
  getters: {
    getNextProject: (state) => state.nextProject,
    currentProject: (state) => state.currentProject,
  },
  mutations: {
    nextProject: (state, payload) => {
      state.nextProject = payload;
    },
    currentProject: (state, payload) => {
      state.currentProject = payload;
    },
  },
  actions: {},
  modules: {},
});
