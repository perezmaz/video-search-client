<template>
  <header>
    <b-container fluid class="header bg-primary">
      <b-row class="py-3">
        <b-col>
          <b-form class="d-flex justify-content-between" @submit="search">
            <h4 class="m-0 p-0 brand pt-1">
              <b-link to="/" class="text-light">
                Video-Search
              </b-link>
            </h4>
            <b-form-input
              :placeholder="showPlaceholder"
              :state="isValid"
              v-model="text"
            ></b-form-input>
            <b-button
              class="ml-3 d-none d-md-block"
              variant="dark"
              type="submit"
            >
              Buscar
            </b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      isValid: null,
    };
  },
  computed: {
    ...mapState(["searchText", "items"]),
    text: {
      get() {
        return this.searchText;
      },
      set(value) {
        this.changeText(value);
      },
    },
    showPlaceholder() {
      if (this.isValid == false) {
        return "Debe escribir algo para poder iniciar la búsqueda";
      } else {
        return "¿Qué estas buscando?";
      }
    },
  },
  methods: {
    ...mapMutations(["changeText"]),
    ...mapActions(["searchVideos"]),
    search: async function(event) {
      event.preventDefault();
      if (this.text != "") {
        this.isValid = null;
        await this.changeText(this.text);
        this.searchVideos();
      } else {
        this.isValid = false;
      }
    },
  },
  created() {
    const text = localStorage.getItem("text");
    this.changeText(text);
  },
};
</script>
