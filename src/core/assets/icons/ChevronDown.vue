<template>
    <svg :width="width" :height="height" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.5L7 8.5" stroke="#BEBEBE" stroke-width="2" stroke-linecap="round"/>
<path d="M13.001 1.5L7.00098 8.5" stroke="#BEBEBE" stroke-width="2" stroke-linecap="round"/>
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
      default: 7,
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