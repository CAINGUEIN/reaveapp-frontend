<template>
  <div>
    <svg :width=width :height=height viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.4244 6.78679C12.4244 10.1421 9.79002 12.8236 6.58718 12.8236C3.38434 12.8236 0.75 10.1421 0.75 6.78679C0.75 3.4315 3.38434 0.75 6.58718 0.75C9.79002 0.75 12.4244 3.4315 12.4244 6.78679Z"
        stroke="#808080" stroke-width="1.5" />
      <path d="M11.293 11.1562L15.9981 16.004" stroke="#808080" stroke-width="1.5" stroke-linecap="round" />
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