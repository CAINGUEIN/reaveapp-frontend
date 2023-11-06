<template>
  <div>
    <svg :width=width :height=height viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.5 9.53623C20.5 14.8696 14.7767 20.0676 11.9151 22C8.83333 20.0676 3 14.8696 3 9.53623C3 7.02415 5.31132 2 11.9151 2C18.5189 2 20.5 6.92754 20.5 9.53623Z"
        stroke="white" stroke-width="2" />
      <ellipse cx="11.7467" cy="10.1239" rx="4.71154" ry="4.375" stroke="white" stroke-width="2" />
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