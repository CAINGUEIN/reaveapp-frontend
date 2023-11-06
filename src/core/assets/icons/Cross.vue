<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L13 13"
      :stroke="color1"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M13 1L1 13"
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
      default: 12,
    },
    height: {
      type: Number,
      default: 12,
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
};
</script>
