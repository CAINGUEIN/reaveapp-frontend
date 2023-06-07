<template>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 18 18"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 10.5C5.46875 9.45833 6.89844 6.75 9.125 6.75"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M8.96094 10.1787C8.96094 12.6696 7.50919 15.9911 6.21875 16.9555"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M14.75 3.9375C14.0922 4.79794 11.5391 6.75 9.125 6.75"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M10.4505 17.2501C10.9921 15.9317 11.1275 11.7368 8.96094 10.1787"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M8.96094 4.58057V10.4734"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <circle cx="8.96094" cy="3.1875" r="2.4375" :fill="color1"
      stroke-width="2" />
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
      default: "#111111",
    },
    color2: {
      type: String,
      default: "#111111",
    },
  },
};
</script>
