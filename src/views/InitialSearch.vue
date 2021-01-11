<template>
  <div class="height-vh d-flex flex-column justify-content-between">
    <header>
      <b-container fluid class="header bg-light">
        <b-row class="py-3">
          <b-col class="text-center">
            <h4 class="m-0 p-0">
              <b-link href="/" class="text-secondary">
                <span class="text-primary">Video</span>-Search
              </b-link>
            </h4>
          </b-col>
        </b-row>
      </b-container>
    </header>
    <main>
      <Search />
    </main>
    <Footer />
  </div>
</template>

<script>
import Search from "../components/Search";
import Footer from "./layout/Footer";

export default {
  name: "InitialSearch",
  components: {
    Search,
    Footer,
  },
};
</script>
