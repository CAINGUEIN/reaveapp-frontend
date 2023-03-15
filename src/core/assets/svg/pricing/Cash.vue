<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.875"
        y="6.53516"
        width="13.3603"
        height="9.71673"
        rx="1.375"
        :stroke="color1"
        stroke-width="1.25"
      />
      <path
        d="M14.9157 14.1853H16.7509C17.8555 14.1853 18.7509 13.2899 18.7509 12.1853V5.75C18.7509 4.64543 17.8555 3.75 16.7509 3.75H6.14063C5.03606 3.75 4.14062 4.64543 4.14062 5.75V6.26887"
        :stroke="color1"
        stroke-width="1.25"
      />
      <ellipse
        cx="4.17192"
        cy="11.6327"
        rx="0.730513"
        ry="0.685421"
        :fill="color1"
      />
      <ellipse
        cx="12.9375"
        cy="11.6327"
        rx="0.730513"
        ry="0.685421"
        :fill="color1"
      />
      <ellipse
        cx="8.54896"
        cy="11.6668"
        rx="2.18763"
        ry="2.15903"
        :stroke="color1"
        stroke-width="1.25"
      />
    </svg>
  </div>
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
    color1: {
      type: String,
      default: "#FFFFFF",
    },
    color2: {
      type: String,
      default: "#111111",
    },
  },
};
</script>
