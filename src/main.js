import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {
  library
} from '@fortawesome/fontawesome-svg-core';
import {
  faUserSecret,
  faUser,
  faFileAlt,
  faChartBar,
  faFileExcel,
  faTasks,
  faMarker,
  faPlusCircle
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';

library.add(faUserSecret, faUser, faFileAlt, faChartBar, faFileExcel, faTasks, faMarker, faPlusCircle);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');