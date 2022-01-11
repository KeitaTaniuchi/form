<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: { Header },
};
</script>