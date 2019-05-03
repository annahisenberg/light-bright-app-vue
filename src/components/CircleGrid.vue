<template>
  <section>
    <div
      class="roundCircle"
      :key="index"
      v-for="(circle, index) in circles"
      @mousedown="changeCircleColor($event)"
      @mousemove="doDrag"
      @dblclick="backToBlack($event)"
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
      newColor: ""
    };
  },
  methods: {
    changeCircleColor(event) {
      this.newColor = event.target.style.backgroundColor = this.randomColor();
      this.addStyles(event);
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
        this.addStyles(event);
      }
    },
    backToBlack(event) {
      event.target.style.backgroundColor = "black";
      event.target.style.boxShadow = "none";
      event.target.style.border = "1px solid pink";
    },
    addStyles(e) {
      e.target.style.boxShadow = `0px 0px 20px 2px ${
        this.newColor
      }, inset 1.5px 1.5px 5px #fff`;
      e.target.style.border = `1px solid ${this.newColor}`;
    }
  },
  mounted() {
    window.addEventListener("mouseup", this.stopDrag);
  }
};
</script>

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

.restartGame {
  background-color: black;
  box-shadow: none;
  border: 1px solid pink;
}
</style>
