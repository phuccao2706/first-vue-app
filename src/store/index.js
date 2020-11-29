import Vue from "vue";
import Vuex from "vuex";
import { COMMIT_KEYS } from "../appConstants";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentSong: {},
  },
  mutations: {
    [COMMIT_KEYS.SET_CURRENT_SONG](state, song) {
      console.log(state, song);
      state.currentSong = song;
    },
  },
});

export default store;
