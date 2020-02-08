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
    },
    UploadData: {},
    userData: {},
    isLogin: false
  },
  mutations: {
    loginState(state) {
      state.isLogin = !state.isLogin;
    },
    editUserdata(state, payload) {
      state.userData = payload;
    },
    revertBlackBg(state) {
      state.blackBg = !state.blackBg;
    },
    insertFileData(state, payload) {
      state.FileData = payload;
    },
    insertUploadData(state, payload) {
      state.UploadData[payload[0]] = payload[1];
    }
  },
  actions: {
    chnageLoginState(context) {
      context.commit('loginState');
    },
    editUserdata(context, data) {
      context.commit('editUserdata', data);
    },
    addUploadData(context, data) {
      context.commit('insertUploadData', data);
    },
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