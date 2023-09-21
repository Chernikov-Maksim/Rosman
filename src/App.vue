<template>
  <div class="app">
    <Header />
    <News />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import News from "./components/News.vue";
export default {
  components: {
    Header,
    News,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
* {
  color: #000000;
}
</style>
