import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const getters = {
  getGeo: state => state.geo,
};

const mutations = {
  setGeo: (state, geo) => {
    state.geo = geo;
  },
};

const actions = {
  currentGeo: ({ commit }) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const geo = {
          latitude: parseFloat(position.coords.latitude).toFixed(2),
          longitude: parseFloat(position.coords.longitude).toFixed(2),
        };

        commit('setGeo', geo);
      });
    }
  },
};

const store = new Vuex.Store({
  state: {
    geo: {
      longitude: 0.00,
      latitude: 0.00,
    },
  },
  getters,
  mutations,
  actions,
});

export default store;
