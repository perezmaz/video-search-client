import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchText: "",
    items: [],
    isValid: null,
  },
  mutations: {
    changeText(state, value) {
      state.searchText = value;
      localStorage.setItem("text", value);
    },
    loadItems(state, items) {
      state.items = items;
    },
    showPlaceholder(state) {
      if (state.isValid == false) {
        return "Debe escribir algo para poder iniciar la búsqueda";
      } else {
        return "¿Qué estas buscando?";
      }
    },
  },
  actions: {
    searchVideos: async function({ commit }) {
      require("dotenv").config();

      const authData = {
        user: process.env.VUE_APP_USER,
        password: process.env.VUE_APP_PASSWORD,
      };

      const token = await axios
        .post(`${process.env.VUE_APP_BACKEND_HOST}/login`, authData)
        .then((response) => {
          return response.data.token;
        })
        .catch((error) => {
          console.log(error);
        });

      const params = {
        text: this.state.searchText,
      };

      axios
        .get(`${process.env.VUE_APP_BACKEND_HOST}/videos`, {
          params,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          commit("loadItems", response.data.items);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});
