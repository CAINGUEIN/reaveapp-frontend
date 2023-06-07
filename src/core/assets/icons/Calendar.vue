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
        x="4"
        y="5.44434"
        width="24"
        height="22.5556"
        rx="3"
        :stroke="color1"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M3.35938 12.3057H28.6372"
        :stroke="color1"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M11 7V4"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M21 7V4"
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
