<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="16" fill="#111111" />
    <path
      d="M14.6667 24L19.3333 14L24 24M16 21.3333H22.6667M8 10.3298C9.76924 10.1096 11.5504 9.99948 13.3333 10M13.3333 10C14.3289 10 15.3182 10.0338 16.2969 10.1013M13.3333 10V8M16.2969 10.1013C15.2676 14.8071 12.1689 18.7378 8 20.8907M16.2969 10.1013C17.0933 10.1556 17.8836 10.232 18.6667 10.3298M14.5876 17.8809C13.1297 16.3988 11.9743 14.6471 11.1858 12.7236"
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
      default: 16,
    },
    height: {
      type: Number,
      default: 16,
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

