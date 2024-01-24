<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L7 7"
      :stroke="color1"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M1 13L7 7"
      :stroke="color1"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 10,
    },
    height: {
      type: Number,
      default: 14,
    },
    color1: {
      type: String,
      default: "currentColor",
    },
    color2: {
      type: String,
      default: "#111111",
    },
  },
};
</script>
