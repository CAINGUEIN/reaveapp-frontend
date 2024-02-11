<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="9.52897"
      cy="11.3141"
      r="7.85709"
      :stroke="color1"
      stroke-width="1.25"
    />
    <path
      d="M14.9799 4.97936C14.7359 5.22344 14.7359 5.61917 14.9799 5.86325C15.224 6.10732 15.6197 6.10732 15.8638 5.86325L14.9799 4.97936ZM15.8638 5.86325L17.8281 3.89897L16.9442 3.01509L14.9799 4.97936L15.8638 5.86325Z"
      :fill="color1"
    />
    <path
      d="M16.0703 2.79688L18.0346 4.76115"
      :stroke="color1"
      stroke-width="1.25"
      stroke-linecap="round"
    />
    <path
      d="M6.90625 0.835938H12.1443"
      :stroke="color1"
      stroke-width="1.25"
      stroke-linecap="round"
    />
    <path
      d="M9.53125 8.03906V11.9676"
      :stroke="color1"
      stroke-width="1.25"
      stroke-linecap="round"
    />
  </svg>
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
