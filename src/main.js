import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Buefy from 'buefy';
import { TOGGLE_SIDEBAR } from './mutation-types';

Vue.config.productionTip = false;

Vue.use(Buefy);

const { state } = store;

router.beforeEach((route, redirect, next) => {
  if (state.device.isMobile && state.sidebar.opened) {
    store.commit(TOGGLE_SIDEBAR, false);
  }
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
