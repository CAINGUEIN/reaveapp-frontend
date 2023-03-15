<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1H2.39567C2.86309 1 3.26815 1.3238 3.37111 1.77974L6.09202 13.8295C6.19498 14.2854 6.60004 14.6092 7.06746 14.6092H16.3653"
        :stroke="color1"
        stroke-width="1.25"
      />
      <path
        d="M3.85547 3.85547H18.1246C18.7859 3.85547 19.2651 4.48592 19.0881 5.12311L17.4486 11.0253C17.3284 11.4581 16.9343 11.7576 16.4851 11.7576H5.6115"
        :stroke="color1"
        stroke-width="1.25"
      />
      <circle
        cx="6.27121"
        cy="16.8044"
        r="2.19504"
        :stroke="color1"
        stroke-width="1.25"
      />
      <circle
        cx="16.363"
        cy="16.8044"
        r="2.19504"
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
