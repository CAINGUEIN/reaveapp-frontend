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
        d="M19.5547 13.3353L26.6658 7.99902"
        :stroke="color1"
        stroke-width="2.5"
        stroke-linecap="round"
      />
      <path
        d="M19.5547 2.66553L26.6658 8.00181"
        :stroke="color1"
        stroke-width="2.5"
        stroke-linecap="round"
      />
      <path
        d="M26.6693 8.01953L5.33594 8.01953"
        :stroke="color1"
        stroke-width="2.5"
        stroke-linecap="round"
      />
      <path
        d="M12.4473 29.3351L5.33757 23.9995"
        :stroke="color1"
        stroke-width="2.5"
        stroke-linecap="round"
      />
      <path
        d="M12.4473 18.666L5.33757 24.0016"
        :stroke="color1"
        stroke-width="2.5"
        stroke-linecap="round"
      />
      <path
        d="M5.33887 24.0098H26.668"
        :stroke="color1"
        stroke-width="2.5"
        stroke-linecap="round"
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
      default: "#FFFFFF",
    },
    color2: {
      type: String,
      default: "#111111",
    },
  },
};
</script>
