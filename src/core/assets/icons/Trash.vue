<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5 6.67447H19.4296"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M8.23218 6.6743V6.6743C8.23218 5.12829 9.48546 3.875 11.0315 3.875H12.8977C14.4437 3.875 15.697 5.12829 15.697 6.6743V6.6743"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M6.36572 9.23892V16.4361C6.36572 18.6452 8.15658 20.4361 10.3657 20.4361H13.5629C15.772 20.4361 17.5629 18.6452 17.5629 16.4361V9.46744"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M10.0979 9.93771V17.4025"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M13.8306 9.93771V17.4025"
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
    color2: {
      type: String,
      default: "#111111",
    },
    color1: {
      type: String,
      default: "currentColor",
    },
  },
};
</script>
