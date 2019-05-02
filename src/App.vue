<template>
  <div id="app">
    <CircleGrid/>
  </div>
</template>

<script>
import CircleGrid from "./components/CircleGrid.vue";

export default {
  name: "app",
  components: {
    CircleGrid
  }
};
</script>

<style>
#app {
  background-color: black;
}

body {
  background-color: black;
  text-align: center;
}
</style>
