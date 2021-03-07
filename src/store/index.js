// import dependency to handle HTTP request to our back end
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentApp: null,
    allApps: [],
  },
  mutations: {
    setCurrentApp(state, payload) {
      state.currentApp = payload;
      state.allApps.push(payload);
    },
  },
  actions: {},
  modules: {},
  getters: {
    getCurrentApp(state) {
      return state.currentApp;
    },
  },
});
