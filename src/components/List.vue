<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h4 class="text-primary m-0 p-0 mb-3">
          Resultados de búsqueda
        </h4>
        <div class="table-responsive">
          <b-list-group>
            <b-list-group-item
              class="m-0 p-3 d-flex justify-content-between mb-5 shadow-sm"
              v-for="(item, index) of items"
              :key="index"
            >
              <img
                :src="item.image"
                class="d-none d-md-block image align-self-start mt-3"
                width="auto"
              />
              <img
                :src="item.imageSmall"
                class="d-block d-md-none image align-self-start mt-3"
                width="auto"
              />
              <div class="d-flex p-3 mr-auto flex-column">
                <h4 class="text-secondary" v-html="item.title"></h4>
                <p class="mt-2" v-html="item.description"></p>
              </div>
            </b-list-group-item>
          </b-list-group>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "List",
  computed: {
    ...mapState(["items"]),
  },
  methods: {
    ...mapActions(["searchVideos"]),
  },
  created() {
    this.searchVideos();
  },
};
</script>
