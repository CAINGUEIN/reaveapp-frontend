<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="30"
        cy="30"
        r="28.5"
        stroke="url(#paint0_linear_166_20545)"
        stroke-width="3"
      />
      <path
        d="M18.666 29.6673L24.4001 37.7934C25.1748 38.8913 26.7902 38.9281 27.6142 37.8666L41.9993 19.334"
        stroke="url(#paint1_linear_166_20545)"
        stroke-width="3"
        stroke-linecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_166_20545"
          x1="60"
          y1="-1.78814e-06"
          x2="-5.36442e-06"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#005620" />
          <stop offset="1" stop-color="#00FF5E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_166_20545"
          x1="41.9993"
          y1="19.334"
          x2="21.4839"
          y2="42.4965"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#005620" />
          <stop offset="1" stop-color="#00FF5E" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 60,
    },
    height: {
      type: Number,
      default: 60,
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
