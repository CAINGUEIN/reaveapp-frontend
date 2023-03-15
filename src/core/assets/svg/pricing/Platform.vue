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
        x="4"
        y="4"
        width="12"
        height="12"
        rx="2"
        :stroke="color1"
        stroke-width="1.25"
      />
      <rect
        x="7"
        y="7"
        width="6"
        height="6"
        rx="1"
        :stroke="color1"
        stroke-width="1.25"
      />
      <path
        d="M6.99219 1.25V3.98438"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <path
        d="M6.99219 16.0156V18.75"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <path
        d="M10 1.25V3.98438"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <path
        d="M10 16.0156V18.75"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <path
        d="M13.0078 1.25V3.98438"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <path
        d="M13.0078 16.0156V18.75"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <path
        d="M1.25 13.0078L3.98438 13.0078"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <path
        d="M16.0156 13.0078L18.75 13.0078"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <path
        d="M1.25 10L3.98438 10"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <path
        d="M16.0156 10L18.75 10"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <path
        d="M1.25 6.99219L3.98438 6.99219"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <path
        d="M16.0156 6.99219L18.75 6.99219"
        :stroke="color1"
        stroke-width="1.25"
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
