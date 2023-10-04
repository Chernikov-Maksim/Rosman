<template>
  <div class="app">
    <Header />
    <Person />
    <News />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Person from "./components/Person.vue";
import News from "./components/News.vue";
export default {
  components: {
    Header,
    Person,
    News,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
@font-face {
  font-family: "TT Hoves Pro";
  src: url("../public/fonts/TTHoves-Light.woff") format("woff");
  src: url("../public/fonts/TTHoves-Light.woff2") format("woff2");
}
@font-face {
  font-family: "TT Hoves Pro";
  src: url("../public/fonts/TTHoves-Regular.woff") format("woff");
  src: url("../public/fonts/TTHoves-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "TT Hoves Pro";
  src: url("../public/fonts/TTHoves-Medium.woff") format("woff");
  src: url("../public/fonts/TTHoves-Medium.woff2") format("woff2");
  font-weight: 500;
}

* {
  color: #000000;
  font-family: TT Hoves Pro;
}
</style>
