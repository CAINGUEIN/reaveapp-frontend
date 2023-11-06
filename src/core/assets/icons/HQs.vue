<template>
  <div>
    <svg :width=width :height=height viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 20.8716H23" stroke="white" stroke-width="1.5" stroke-linecap="round" />
      <path d="M20.7475 20.8715V14.4358C20.7475 13.3312 19.8521 12.4358 18.7475 12.4358H15.7388" stroke="white"
        stroke-width="1.5" />
      <path
        d="M16.0024 20.8715V6C16.0024 4.89543 15.107 4 14.0024 4H8.51221C7.40764 4 6.51221 4.89543 6.51221 6V9.00871"
        stroke="white" stroke-width="1.5" />
      <path
        d="M11.2571 20.8714V9.64127C11.2571 8.08668 9.56119 7.12645 8.22814 7.92628L4.31964 10.2714C3.71723 10.6328 3.34863 11.2838 3.34863 11.9864V20.8714"
        stroke="white" stroke-width="1.5" />
      <path d="M5.98486 14.281H8.62103" stroke="white" stroke-width="1.5" />
      <path d="M5.98486 17.1809H8.62103" stroke="white" stroke-width="1.5" />
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