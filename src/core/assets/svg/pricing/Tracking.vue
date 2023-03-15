<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8068 5.17434C14.8068 8.24736 11.7151 11.2424 10.1693 12.3559C8.5046 11.2424 5.35352 8.24736 5.35352 5.17434C5.35352 3.72691 6.60206 0.832031 10.1693 0.832031C13.7366 0.832031 14.8068 3.67123 14.8068 5.17434Z"
        :stroke="color1"
        stroke-width="1.25"
      />
      <ellipse
        cx="10.0783"
        cy="5.51303"
        rx="2.5451"
        ry="2.52084"
        :stroke="color1"
        stroke-width="1.25"
      />
      <path
        d="M10.1023 19.1658H3.38666C2.42235 19.1658 1.64062 18.3841 1.64062 17.4197V17.4197C1.64062 16.4554 2.42235 15.6737 3.38666 15.6737H16.8179C17.7822 15.6737 18.5639 14.892 18.5639 13.9277V13.9277C18.5639 12.9634 17.7822 12.1816 16.8179 12.1816H14.9375"
        :stroke="color1"
        stroke-width="1.25"
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
      default: 20,
    },
    height: {
      type: Number,
      default: 20,
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
