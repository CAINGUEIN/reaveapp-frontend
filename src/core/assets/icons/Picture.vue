<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 22 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="1"
      width="18"
      height="16"
      rx="2"
      :stroke="color1"
      stroke-width="1.5"
    />

    <path
      d="M1 13.0005L4.17482 10.0373C4.55903 9.67869 5.15525 9.67869 5.53946 10.0373L8.03197 12.3636C8.41617 12.7222 9.0124 12.7222 9.3966 12.3636L14.032 8.03728C14.4162 7.67869 15.0124 7.67869 15.3966 8.03728L19 11.4005"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <ellipse
      cx="9.18202"
      cy="5.80215"
      rx="1.63636"
      ry="1.6"
      :stroke="color1"
      stroke-width="1.5"
    />
    <ellipse cx="17.9994" cy="17" rx="3.99943" ry="4" :fill="color3" />
    <path
      d="M16.0001 17.0024H19.9995"
      :stroke="color1"
      stroke-width="1.24992"
      stroke-linecap="round"
    />
    <path
      d="M18.0001 14.9991V18.9991"
      :stroke="color1"
      stroke-width="1.24992"
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
      default: 33,
    },
    color3: {
      type: String,
      default: "#000000",
    },
    color2: {
      type: String,
      default: "#000000",
    },
    color1: {
      type: String,
      default: "currentColor",
    },
    colorPlus: {
      type: String,
      default: "#111111",
    },
  },
};
</script>
