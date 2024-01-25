<template>
  <svg
  :width="width"
  :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.4259 10.7851C16.4259 14.1392 13.7915 16.8202 10.588 16.8202C7.38444 16.8202 4.75 14.1392 4.75 10.7851C4.75 7.43101 7.38444 4.75 10.588 4.75C13.7915 4.75 16.4259 7.43101 16.4259 10.7851Z"
      stroke="#BEBEBE"
      stroke-width="1.5"
    />
    <path
      d="M15.2942 15.1536L19.9998 20.0001"
      stroke="#BEBEBE"
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
