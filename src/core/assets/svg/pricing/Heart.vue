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
        d="M11.9982 18.75C13.5487 18.0245 20.25 14.5942 20.25 9.52553C20.25 7.16801 18.3514 5.25 16.0178 5.25C14.6916 5.25 13.467 5.86067 12.6582 6.92553L12 7.79204L11.3418 6.92553C10.533 5.86067 9.3084 5.25 7.9822 5.25C5.64869 5.25 3.75 7.16801 3.75 9.52553C3.75 14.6306 10.4484 18.0317 11.9982 18.75Z"
        :stroke="color1"
        stroke-width="1.5"
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
