<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12" md="8" offset-sm="2">
        <b-form class="d-flex justify-content-between" @submit="search">
          <b-form-input
            id="input-large"
            size="lg"
            :placeholder="showPlaceholder"
            v-model="text"
            :state="isValid"
          ></b-form-input>
          <b-button type="submit" size="lg" class="ml-3" variant="primary">
            Buscar
          </b-button>
        </b-form>
      </b-col>
      <b-col cols="12" md="8" offset-sm="2">
        <span></span>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Search",
  data() {
    return {
      text: "",
      isValid: null,
    };
  },
  computed: {
    ...mapState(["searchText"]),
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
    search(event) {
      event.preventDefault();
      if (this.text != "") {
        this.isValid = true;
        this.changeText(this.text);
        this.$router.push("/result");
      } else {
        this.isValid = false;
      }
    },
  },
};
</script>
