<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="4.89784"
        cy="14.2885"
        r="3.21424"
        :stroke="color1"
        stroke-width="1.25"
      />
      <circle
        cx="10.0092"
        cy="5.71424"
        r="3.21424"
        :stroke="color1"
        stroke-width="1.25"
      />
      <circle
        cx="15.1361"
        cy="14.2885"
        r="3.21424"
        :stroke="color1"
        stroke-width="1.25"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 20,
    },
    height: {
      type: Number,
      default: 20,
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
