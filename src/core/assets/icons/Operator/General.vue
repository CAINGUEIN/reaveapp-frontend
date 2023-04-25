<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="13"
        y="3"
        width="8"
        height="8"
        rx="1"
        stroke="#808080"
        stroke-width="1.5"
      />
      <rect
        x="3"
        y="14"
        width="18"
        height="6"
        rx="1"
        stroke="#808080"
        stroke-width="1.5"
      />
      <path d="M3 3H10" stroke="#808080" stroke-width="1.5" />
      <path d="M3 7H10" stroke="#808080" stroke-width="1.5" />
      <path d="M3 11H10" stroke="#808080" stroke-width="1.5" />
    </svg>
  </div>
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
