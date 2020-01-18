import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blackBg: false,
    FileData: {
      fileConfig: {
        name: ''
      },
      questions: []
    }
  },
  mutations: {
    revertBlackBg(state) {
      state.blackBg = !state.blackBg;
    },
    insertFileData(state, payload) {
      state.FileData = payload;
    }
  },
  actions: {
    isShowBlackBg(context) {
      context.commit('revertBlackBg');
    },
    ChangeFileData(context, data) {
      console.log("store");
      console.log(data);
      context.commit('insertFileData', data);
    }
  },
  modules: {}
});