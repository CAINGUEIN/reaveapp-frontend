<template>
  <div>
    <svg :width=width :height=height viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 14H9.08699" stroke="white" stroke-linecap="round" />
      <path
        d="M2.89746 13.9999C2.89746 13.0532 3.66497 12.2856 4.61175 12.2856H6.49842C7.44519 12.2856 8.2127 13.0532 8.2127 13.9999V13.9999H2.89746V13.9999Z"
        stroke="white" />
      <path
        d="M5.54443 5.42847L7.11045 3.91324L13.2179 9.82263C13.6504 10.241 13.6504 10.9194 13.2179 11.3379V11.3379C12.7855 11.7563 12.0844 11.7563 11.6519 11.3379L5.54443 5.42847Z"
        stroke="white" />
      <rect width="3.92232" height="7.84464" rx="1.96116"
        transform="matrix(0.718665 0.695357 -0.718665 0.695357 9.09326 2)" stroke="white" />
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