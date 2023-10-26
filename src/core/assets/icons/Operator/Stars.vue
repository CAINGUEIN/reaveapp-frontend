<template>
  <svg
    :width="width"
      :height="height"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.16667 1.5V4.83333M1.5 3.16667H4.83333M4 13.1667V16.5M2.33333 14.8333H5.66667M9.83333 1.5L11.7383 7.21417L16.5 9L11.7383 10.7858L9.83333 16.5L7.92833 10.7858L3.16667 9L7.92833 7.21417L9.83333 1.5Z"
      :stroke="color1"
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
</svg>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 24,
    },
    height: {
      type: Number,
      default: 24,
    },
    color2: {
      type: String,
      default: "#000000",
    },
    color1: {
      type: String,
      default: "currentColor",
    },
  },
};
</script>