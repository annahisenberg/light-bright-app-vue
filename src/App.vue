<template>
  <div id="app">
    <section>
      <h1>Light-bright Colour Changing Circles</h1>
      <button @click="resetColors()">Reset All</button>
    </section>
    <CircleGrid/>
  </div>
</template>

<script>
import CircleGrid from "./components/CircleGrid.vue";

export default {
  name: "app",
  components: {
    CircleGrid
  },
  methods: {
    resetColors() {
      this.$store.dispatch("clickButton");
    }
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

h1 {
  color: white;
  font-family: "Comic Sans MS", cursive, sans-serif;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073,
    0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
}
</style>
