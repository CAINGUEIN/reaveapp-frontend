<template>
  <div>
    <svg :width=width :height=height viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.80834 10.4271H2.66602C1.56145 10.4271 0.666016 9.53166 0.666016 8.42709V7.16507C0.666016 6.52286 0.971045 5.91364 1.52396 5.58696C2.74352 4.8664 4.62621 4.00012 6.26901 4.00012C7.92249 4.00012 9.48146 4.8777 10.422 5.60099C10.8425 5.92434 11.346 6.14244 11.8765 6.14244H13.5422C13.8527 6.14244 14.1651 6.20704 14.413 6.39407C14.8438 6.7192 15.3327 7.26691 15.3327 7.95518C15.3327 8.34988 15.2724 8.7687 15.1905 9.15748C15.0282 9.92788 14.3073 10.4271 13.5199 10.4271V10.4271" :stroke="color1" stroke-linecap="round"/>
<path d="M5.44531 10.4271H10.7187" :stroke="color1"/>
<circle cx="4.12695" cy="10.097" r="1.31835" :stroke="color1"/>
<circle cx="12.0371" cy="10.097" r="1.31835" :stroke="color1"/>
<path d="M6.27158 4.00012C5.62263 5.12664 5.72646 6.67604 11.3333 6.00012" :stroke="color1"/>
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
