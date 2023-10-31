<template>
  <div>
    <svg 
    :width=width 
    :height=height viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16667 2.5V5.83333M2.5 4.16667H5.83333M5 14.1667V17.5M3.33333 15.8333H6.66667M10.8333 2.5L12.7383 8.21417L17.5 10L12.7383 11.7858L10.8333 17.5L8.92833 11.7858L4.16667 10L8.92833 8.21417L10.8333 2.5Z" :stroke="color1" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
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
