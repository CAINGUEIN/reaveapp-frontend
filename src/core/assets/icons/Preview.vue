<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.0605 11.8757C15.0605 12.7992 14.7375 13.6849 14.1626 14.3379C13.5878 14.991 12.8081 15.3578 11.9951 15.3578C11.1821 15.3578 10.4024 14.991 9.82752 14.3379C9.25265 13.6849 8.92969 12.7992 8.92969 11.8757C8.92969 10.9522 9.25265 10.0665 9.82752 9.41345C10.4024 8.76042 11.1821 8.39355 11.9951 8.39355C12.8081 8.39355 13.5878 8.76042 14.1626 9.41345C14.7375 10.0665 15.0605 10.9522 15.0605 11.8757V11.8757Z"
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
    color3: {
      type: String,
      default: "#000000",
    },
    color2: {
      type: String,
      default: "#000000",
    },
    color1: {
      type: String,
      default: "currentColor",
    },
    colorPlus: {
      type: String,
      default: "#111111",
    },
  },
};
</script>
