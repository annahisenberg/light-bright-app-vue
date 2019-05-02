<template>
  <div id="app">
    <h1>Light-bright Colour Changing Circles</h1>
    <CircleGrid/>
    <!-- <directions-section></directions-section> -->
  </div>
</template>

<script>
import CircleGrid from "./components/CircleGrid.vue";
// import DirectionsSection from "./components/CircleGrid.vue";

export default {
  name: "app",
  components: {
    CircleGrid
    // DirectionsSection
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
  animation: glow 1s ease-in-out infinite alternate;
  font-family: "Comic Sans MS", cursive, sans-serif;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073,
      0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6,
      0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
}
</style>
