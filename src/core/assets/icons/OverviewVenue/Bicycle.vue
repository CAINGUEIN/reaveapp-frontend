<template>
  <div>
    <svg :width=width :height=height viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="3.30602" cy="9.71947" r="2.64" :stroke="color1"/>
<circle cx="12.6927" cy="9.71947" r="2.64" :stroke="color1"/>
<path d="M12.5448 9.86679L11.0662 4.49002C10.9867 4.20065 10.7235 4.00012 10.4234 4.00012H9.46484" :stroke="color1" stroke-linecap="round"/>
<path d="M7.11901 10.0129L5.65234 5.02625" :stroke="color1" stroke-linecap="round"/>
<path d="M4.03906 5.02625H5.50573H6.82573" :stroke="color1" stroke-linecap="round"/>
<path d="M11.3725 5.6134C11.2551 5.73074 8.53692 8.59563 7.11914 10.0134" :stroke="color1" stroke-linecap="round"/>
<path d="M11.3738 5.6134C11.233 5.63687 7.79508 6.20985 6.09375 6.4934" :stroke="color1" stroke-linecap="round"/>
<path d="M3.60042 10.0131C3.66299 9.91919 5.3376 7.62728 6.09375 6.49306" :stroke="color1" stroke-linecap="round"/>
<path d="M3.59914 10.0124C3.68893 10.0046 7.11914 10.0131 7.11914 10.0131" :stroke="color1" stroke-linecap="round"/>
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
