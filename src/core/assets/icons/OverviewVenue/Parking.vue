<template>
  <div>
    <svg :width=width :height=height viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 16.0001V3.75012H10.25C13.3475 3.75012 15.3425 5.34262 15.3425 8.05512V8.09012C15.3425 10.9776 13.12 12.5001 10.075 12.5001H8.395V16.0001H5ZM8.395 9.84012H10.005C11.2125 9.84012 11.9475 9.21012 11.9475 8.24762V8.21262C11.9475 7.16262 11.2125 6.60262 9.9875 6.60262H8.395V9.84012Z" fill="white"/>
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
