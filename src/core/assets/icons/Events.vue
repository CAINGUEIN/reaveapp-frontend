<template>
  <div>
    <svg
      :width="20"
      :height="20"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.62898 2.6665V8.59243M2.66602 5.62947H8.59194M7.11046 23.4072V29.3332M4.1475 26.3702H10.0734M17.4808 2.6665L20.8675 12.825L29.3327 15.9998L20.8675 19.1747L17.4808 29.3332L14.0942 19.1747L5.62898 15.9998L14.0942 12.825L17.4808 2.6665Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
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
