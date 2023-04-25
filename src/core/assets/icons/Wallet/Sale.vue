<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.75"
        y="6.71094"
        width="18.5358"
        height="13.5392"
        rx="3.25"
        :stroke="color1"
        stroke-width="1.5"
      />
      <path
        d="M18.7412 17.3105H20.0006C22.2097 17.3105 24.0006 15.5196 24.0006 13.3105V7C24.0006 4.79086 22.2097 3 20.0006 3H7.41909C5.51136 3 3.96484 4.54652 3.96484 6.45425V6.45425"
        :stroke="color1"
        stroke-width="1.5"
      />
      <ellipse
        cx="4.00569"
        cy="13.8091"
        rx="1.00179"
        ry="0.939951"
        :fill="color1"
      />
      <ellipse
        cx="16.0272"
        cy="13.8091"
        rx="1.00179"
        ry="0.939951"
        :fill="color1"
      />
      <ellipse
        cx="10"
        cy="13.8553"
        rx="3"
        ry="2.96079"
        :stroke="color1"
        stroke-width="1.5"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 25,
    },
    height: {
      type: Number,
      default: 24,
    },
    color2: {
      type: String,
      default: "#000000",
    },
    color1: {
      type: String,
      default: "currentColor",
    },
  },
};
</script>
