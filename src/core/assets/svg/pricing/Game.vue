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
        d="M0.625 13.2508V12.8734C0.625 10.3124 2.7011 8.23633 5.2621 8.23633H14.7379C17.2989 8.23633 19.375 10.3124 19.375 12.8734V13.379C19.375 15.6608 17.5253 17.5105 15.2435 17.5105C14.2812 17.5105 13.3491 17.1746 12.608 16.5608L12.4485 16.4287C11.0325 15.2558 8.97029 15.3002 7.60609 16.5329C6.9097 17.1622 6.00454 17.5105 5.06598 17.5105H4.88471C2.53214 17.5105 0.625 15.6034 0.625 13.2508Z"
        :stroke="color1"
        stroke-width="1.25"
      />
      <path
        d="M4.71094 11.1172V14.6253"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <path
        d="M6.46691 12.8711H2.9375"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <ellipse
        cx="13.2417"
        cy="11.9942"
        rx="0.882353"
        ry="0.877016"
        :fill="color1"
      />
      <ellipse
        cx="15.5855"
        cy="14.334"
        rx="0.882353"
        ry="0.877016"
        :fill="color1"
      />
      <path
        d="M10 7.64113V7.014C10 5.55207 11.1851 4.36694 12.6471 4.36694V4.36694C14.109 4.36694 15.2941 3.18181 15.2941 1.71988V0.625"
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
      default: "currentColor",
    },
    color2: {
      type: String,
      default: "#111111",
    },
  },
};
</script>
