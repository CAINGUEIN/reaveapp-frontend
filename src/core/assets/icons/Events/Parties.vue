<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.7505 17.2495V20.2495M17.2505 18.7495H20.2505"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.25049 3.74951V6.74951M3.75049 5.24951H6.75049"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.7505 3.74951V6.74951M17.2505 5.24951H20.2505"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.92026 11.4972C8.35455 10.836 9.27626 10.7434 9.82988 11.3053L12.521 14.0366C13.0746 14.5985 12.9834 15.534 12.3319 15.9748L6.5274 19.9023C6.03531 20.2353 5.38008 20.1694 4.96188 19.745L4.20558 18.9774C3.78739 18.5529 3.72251 17.8879 4.05057 17.3884L7.92026 11.4972Z"
      :stroke="color1"
      stroke-width="1.5"
    />
    <path
      d="M13.4331 10.6791L15.0547 9.0332"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M16.6753 12.2125C17.7049 11.3845 20.0112 10.2253 20.9997 12.2125"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M11.811 7.38867C12.6268 6.34367 13.769 4.00288 11.811 2.99968"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
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
