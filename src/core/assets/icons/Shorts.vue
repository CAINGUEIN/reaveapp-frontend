<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 11V21"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M14 13V19"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M29 12V20"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M19 4L19 28"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M24 6L24 26"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M9 7L9 25"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
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
    color2: {
      type: String,
      default: "#000000",
    },
    color1: {
      type: String,
      default: "#FFFFFF",
    },
  },
};
</script>
