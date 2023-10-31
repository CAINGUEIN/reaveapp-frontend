<template>
  <div>
    <svg :width="width" :height="height" :viewBox="'0 0 ' + width + ' ' + height" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse v-for="position in positions" :key="position" :cx="position.cx" :cy="position.cy" :rx="position.rx" :ry="position.ry" :fill="position.color" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 32,
    },
    height: {
      type: Number,
      default: 32,
    },
    color1: {
      type: String,
      default: "#FFFFFF",
    },
    color2: {
      type: String,
      default: "#000000",
    },
  },
  data() {
    return {
      positions: [
        { cx: 7.35717, cy: 7.35717, rx: 2.35717, ry: 2.35717, color: this.color1 },
        { cx: 15.9939, cy: 7.35717, rx: 2.35717, ry: 2.35717, color: this.color1 },
        { cx: 24.6482, cy: 7.35717, rx: 2.35717, ry: 2.35717, color: this.color1 },
        { cx: 7.35717, cy: 16.0002, rx: 2.35717, ry: 2.35717, color: this.color1 },
        { cx: 15.9939, cy: 16.0002, rx: 2.35717, ry: 2.35717, color: this.color1 },
        { cx: 24.6482, cy: 16.0002, rx: 2.35717, ry: 2.35717, color: this.color1 },
        { cx: 7.35717, cy: 24.6428, rx: 2.35717, ry: 2.35717, color: this.color1 },
        { cx: 15.9939, cy: 24.6428, rx: 2.35717, ry: 2.35717, color: this.color1 },
        { cx: 24.6482, cy: 24.6428, rx: 2.35717, ry: 2.35717, color: this.color1 },
      ],
    };
  },
  watch: {
    color1(newVal) {
      this.positions.forEach(position => {
        position.color = newVal;
      });
    },
    color2(newVal) {
      this.positions.forEach((position, index) => {
        position.color = index % 2 === 0 ? newVal : this.color1;
      });
    },
  },
};
</script>
