<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="4"
        width="7.74125"
        height="7.53981"
        rx="1"
        :stroke="color1"
        stroke-width="1.5"
      />
      <rect
        x="3"
        y="14.3438"
        width="17.4178"
        height="5.65486"
        rx="1"
        :stroke="color1"
        stroke-width="1.5"
      />
      <path d="M14.2266 4H21.0002" :stroke="color1" stroke-width="1.5" />
      <path d="M14.2266 7.76953H21.0002" :stroke="color1" stroke-width="1.5" />
      <path d="M14.2266 11.5391H21.0002" :stroke="color1" stroke-width="1.5" />
    </svg>
  </div>
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
