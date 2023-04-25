<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3Z"
        :stroke="color1"
        stroke-width="1.5"
      />
      <path d="M9 3.74731V20.9973" :stroke="color1" stroke-width="1.5" />
      <path d="M15 3.74731V20.9973" :stroke="color1" stroke-width="1.5" />
      <path d="M3 9H21" :stroke="color1" stroke-width="1.5" />
      <path d="M3 15H21" :stroke="color1" stroke-width="1.5" />
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
