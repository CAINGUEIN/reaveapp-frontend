<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5041 29L15.6816 18.7703H6L17.4959 3L16.3184 13.2295H26L14.5041 29Z"
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
    color2: {
      type: String,
      default: "#000000",
    },
    color1: {
      type: String,
      default: "#FFFFFF",
    },
  },
};
</script>