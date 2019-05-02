<template>
  <section>
    <div
      class="roundCircle"
      :key="index"
      v-for="(circle, index) in circles"
      @mousedown="changeCircleColor($event)"
      @mousemove="doDrag"
    ></div>
  </section>
</template>

<script>
export default {
  name: "CircleGrid",
  data() {
    return {
      circles: 1000,
      dragging: false,
      newColor: "",
      x: "no",
      y: "no"
    };
  },
  methods: {
    changeCircleColor(event) {
      this.newColor = event.target.style.backgroundColor = this.randomColor();
      this.startDrag();
    },
    randomColor() {
      return (
        "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
      );
    },
    startDrag() {
      this.dragging = true;
    },
    stopDrag() {
      this.dragging = false;
    },
    doDrag(event) {
      if (this.dragging) {
        event.target.style.backgroundColor = this.newColor;
      }
    }
  },
  mounted() {
    window.addEventListener("mouseup", this.stopDrag);
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
