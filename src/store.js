import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    device: {
      isMobile: false,
      isTablet: false
    },
    sidebar: {
      opened: false,
      hidden: false
    }
  },

  getters: {
    sidebar(state) {
      return state.sidebar;
    },
    device(state) {
      return state.device;
    }
  },

  mutations: {
    [types.TOGGLE_DEVICE](state, device){
      state.device.isMobile = device === 'mobile';
      state.device.isTablet = device === 'tablet';
    },

    [types.TOGGLE_SIDEBAR](state, config){
      if (state.device.isMobile && config.hasOwnProperty('opened')) {
        state.sidebar.opened = config.opened;
      } else {
        state.sidebar.opened = true;
      }

      if (config.hasOwnProperty('hidden')) {
        state.sidebar.hidden = config.hidden;
      }
    },
  },

  actions: {
    toggleSidebar({commit}, config) {
      if (config instanceof Object) {
        commit(types.TOGGLE_SIDEBAR, config);
      }
    },

    toggleDevice({commit}, device) {
      commit(types.TOGGLE_DEVICE, device);
    }
  }
});
