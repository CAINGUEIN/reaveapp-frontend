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
        x="1.48828"
        y="2.47852"
        width="17.0828"
        height="16.0643"
        rx="3.375"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linejoin="round"
      />
      <path
        d="M1.11914 7.39453H18.9427"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linejoin="round"
      />
      <path
        d="M1.11914 12.9141H18.9427"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linejoin="round"
      />
      <rect
        x="6.14727"
        y="1.16485"
        width="0.665643"
        height="2.8599"
        rx="0.332822"
        fill="white"
        :stroke="color1"
        stroke-width="0.665643"
        stroke-linejoin="round"
      />
      <rect
        x="13.2781"
        y="1.16485"
        width="0.665643"
        height="2.8599"
        rx="0.332822"
        fill="white"
        :stroke="color1"
        stroke-width="0.665643"
        stroke-linejoin="round"
      />
      <path d="M6.67773 7.5V18.3333" :stroke="color1" stroke-width="1.25" />
      <path d="M13.3223 7.5V18.3333" :stroke="color1" stroke-width="1.25" />
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
