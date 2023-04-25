<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5.29297"
        y="5.34375"
        width="6.66667"
        height="6.66667"
        rx="2"
        :stroke="color1"
        stroke-width="2"
      />
      <rect
        x="19.9531"
        y="7.34375"
        width="6.66667"
        height="4"
        rx="2"
        :stroke="color1"
        stroke-width="2"
      />
      <rect
        x="19.9531"
        y="15.3438"
        width="6.66667"
        height="4"
        rx="2"
        :stroke="color1"
        stroke-width="2"
      />
      <rect
        x="19.9531"
        y="23.3438"
        width="6.66667"
        height="4"
        rx="2"
        :stroke="color1"
        stroke-width="2"
      />
      <path d="M11.9531 8.66992H19.9531" :stroke="color1" stroke-width="2" />
      <path
        d="M15.9531 17.3438L19.9531 17.3438"
        :stroke="color1"
        stroke-width="2"
      />
      <path
        d="M15.9531 8.66992V24.3366C15.9531 24.8889 16.4008 25.3366 16.9531 25.3366H17.9531H19.9531"
        :stroke="color1"
        stroke-width="2"
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
