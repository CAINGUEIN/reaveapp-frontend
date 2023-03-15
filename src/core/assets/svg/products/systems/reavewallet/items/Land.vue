<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="15.6345"
        cy="15.9997"
        rx="10.2439"
        ry="9.99968"
        :stroke="color1"
        stroke-width="2"
      />
      <path
        d="M9.78125 17.0715C9.78125 15.1668 10.952 11.3574 15.6349 11.3574"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M22.2195 8.14268C23.6829 7.42842 25.5122 7.07129 27.7073 7.07129C29.9024 7.07129 31 8.14205 31 9.57121C31 15.9996 9.78049 25.9999 4.65854 25.9999C3.43902 25.9997 1 25.4993 1 23.4993C1 21.4994 3.19512 19.2138 5.39024 17.7852"
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
      default: "#FFFFFF",
    },
    color2: {
      type: String,
      default: "#111111",
    },
  },
};
</script>
