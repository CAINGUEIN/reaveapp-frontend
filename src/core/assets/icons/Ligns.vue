<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 12H21"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M7 18H21"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M7 6H21"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M3 18H4"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M3 12H4"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path d="M3 6H4" :stroke="color1" stroke-width="2" stroke-linecap="round" />
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
