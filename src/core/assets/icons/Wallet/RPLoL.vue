<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.3317 4.66667L11.9984 2L8.66504 4.66667V14L11.9984 16.6667L15.3317 14V4.66667Z"
      :fill="color1"
    />
    <path
      d="M2 9.99982L6 5.99982V15.3332L11.3333 19.3332V21.9998H8.66667L2 16.6665L3.33333 15.3332V11.3332L2 9.99982Z"
      :fill="color1"
    />
    <path
      d="M22 9.99982L18 5.99982V15.3332L12.6667 19.3332V21.9998H15.3333L22 16.6665L20.6667 15.3332V11.3332L22 9.99982Z"
      :fill="color1"
    />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 20,
    },
    height: {
      type: Number,
      default: 20,
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
