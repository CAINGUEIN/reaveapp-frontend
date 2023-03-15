<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="18.4414"
        width="4.88876"
        height="8.55532"
        rx="1"
        :stroke="color1"
        stroke-width="2"
      />
      <rect
        x="13.543"
        y="5"
        width="4.88876"
        height="21.9992"
        rx="1"
        :stroke="color1"
        stroke-width="2"
      />
      <rect
        x="22.1055"
        y="13.5586"
        width="4.88876"
        height="13.4441"
        rx="1"
        :stroke="color1"
        stroke-width="2"
      />
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
      default: "#111111",
    },
  },
};
</script>
