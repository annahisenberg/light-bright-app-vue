<template>
  <section>
    <div
      class="roundCircle"
      :key="index"
      v-for="(circle, index) in circles"
      @click="changeCircleColor($event)"
      @mousedown="changeCircleColor($event)"
      @mouseover="changeCircleColor($event)"
      @mouseup="changeCircleColor($event)"
    ></div>
  </section>
</template>

<script>
export default {
  name: "CircleGrid",
  data() {
    return {
      circles: 1000
    };
  },
  methods: {
    changeCircleColor(event) {
      event.target.style.backgroundColor = this.randomColor();
    },
    randomColor() {
      return (
        "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.roundCircle {
  border-radius: 50%;
  border: 1px solid pink;
  width: 30px;
  height: 30px;
}

section {
  display: flex;
  flex-wrap: wrap;
}
</style>
