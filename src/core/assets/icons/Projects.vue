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
        x="1.25"
        y="10"
        width="17.5"
        height="8.75"
        rx="3"
        :stroke="color1"
        stroke-width="1.25"
      />
      <path
        d="M2.89062 8.06323C2.89062 6.40638 4.23377 5.06323 5.89063 5.06323H14.1094C15.7662 5.06323 17.1094 6.40638 17.1094 8.06323V9.98511H2.89062V8.06323Z"
        :stroke="color1"
        stroke-width="1.25"
      />
      <path
        d="M4.53125 4.25C4.53125 2.59315 5.8744 1.25 7.53125 1.25H12.4687C14.1256 1.25 15.4688 2.59315 15.4688 4.25V5.07812H4.53125V4.25Z"
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
      default: 32,
    },
    height: {
      type: Number,
      default: 33,
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
