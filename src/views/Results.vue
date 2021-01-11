<template>
  <div class="height-vh d-flex flex-column justify-content-between">
    <Header />
    <main class="mb-auto mt-4 mx-4">
      <List />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "./layout/Footer";
import List from "../components/List";

export default {
  name: "Results",
  components: {
    Header,
    Footer,
    List,
  },
};
</script>
