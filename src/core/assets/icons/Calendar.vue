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
        x="1.48438"
        y="2.48047"
        width="17.0828"
        height="16.0643"
        rx="3.375"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linejoin="round"
      />
      <path
        d="M1.10938 7.39844H18.9329"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linejoin="round"
      />
      <path
        d="M1.10938 12.9141H18.9329"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linejoin="round"
      />
      <rect
        x="6.14532"
        y="1.16876"
        width="0.665643"
        height="2.8599"
        rx="0.332822"
        :fill="color1"
        :stroke="color1"
        stroke-width="0.665643"
        stroke-linejoin="round"
      />
      <rect
        x="13.2703"
        y="1.16876"
        width="0.665643"
        height="2.8599"
        rx="0.332822"
        :fill="color1"
        :stroke="color1"
        stroke-width="0.665643"
        stroke-linejoin="round"
      />
      <path d="M6.67969 7.5V18.3333" :stroke="color1" stroke-width="1.25" />
      <path d="M13.3203 7.5V18.3333" :stroke="color1" stroke-width="1.25" />
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
