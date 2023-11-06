<template>
  <div>
    <svg :width=width :height=height viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.0628 16.5397L17 19.992V6.49152C17 5.11552 16.0271 4 14.74 4H9.33062C8.04348 4 7 5.11552 7 6.49152V19.953C7 19.9551 7.00012 19.9572 7.00035 19.9592C7.00423 19.9943 7.04312 20.0112 7.07072 19.9919L12.0082 16.5397C12.0247 16.5282 12.0462 16.5282 12.0628 16.5397Z"
        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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