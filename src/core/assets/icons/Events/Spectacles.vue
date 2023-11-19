<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.0582 11.8772C15.0582 12.8007 14.7352 13.6864 14.1603 14.3394C13.5855 14.9924 12.8058 15.3593 11.9928 15.3593C11.1798 15.3593 10.4001 14.9924 9.8252 14.3394C9.25033 13.6864 8.92737 12.8007 8.92737 11.8772C8.92737 10.9536 9.25033 10.0679 9.8252 9.41492C10.4001 8.76189 11.1798 8.39502 11.9928 8.39502C12.8058 8.39502 13.5855 8.76189 14.1603 9.41492C14.7352 10.0679 15.0582 10.9536 15.0582 11.8772V11.8772Z"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.25 11.875C3.55177 7.16598 7.42541 3.75 12 3.75C16.5756 3.75 20.4482 7.16598 21.75 11.875C20.4482 16.584 16.5756 20 12 20C7.42541 20 3.55177 16.584 2.25 11.875Z"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
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
