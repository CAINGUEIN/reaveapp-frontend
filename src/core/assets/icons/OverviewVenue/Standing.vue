<template>
  <div>
    <svg :width=width :height=height viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.55469 11.6667C6.07552 10.5093 7.66406 7.50006 10.138 7.50006" :stroke="color1" stroke-width="1.25" stroke-linecap="round"/>
<path d="M9.95703 11.3094C9.95703 14.0771 8.34398 17.7676 6.91016 18.8392" :stroke="color1" stroke-width="1.25" stroke-linecap="round"/>
<path d="M16.3867 4.37506C15.6558 5.3311 12.819 7.50006 10.1367 7.50006" :stroke="color1" stroke-width="1.25" stroke-linecap="round"/>
<path d="M11.6121 19.1666C12.2139 17.7017 12.3644 13.0407 9.95703 11.3094" :stroke="color1" stroke-width="1.25" stroke-linecap="round"/>
<path d="M9.95703 5.08923V11.6368" :stroke="color1" stroke-width="1.25" stroke-linecap="round"/>
<circle cx="9.95443" cy="3.54207" r="2.70833" fill="#808080"/>
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
