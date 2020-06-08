import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    uploadVisible: true,

    blackBg: false,
    FileData: {
      fileConfig: {
        name: ''
      },
      questions: []
    },
    UploadData: {},
    userData: {},
    isLogin: false,
    nowForm: '',
    formOption: ['hr', 'ENG&MAIN', 'CumSer', 'PubRel']
  },
  mutations: {
    nowFormState(state, payload) {
      state.nowForm = state.formOption[payload];
    },
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
    },
    clearUploadData(state) {
      state.UploadData = {};
    },
    changeUploadVisible(state) {
      state.uploadVisible = !state.uploadVisible;
    }
  },
  actions: {
    changeUploadVisible(context) {
      context.commit('changeUploadVisible');
    },
    changeFormState(context, index) {
      context.commit('nowFormState', index);
    },
    changeLoginState(context) {
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
      context.commit('clearUploadData');
    },
    ChangeFileData(context, data) {
      context.commit('insertFileData', data);
    }
  },
  modules: {}
});