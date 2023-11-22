<template>
  <svg :width=width :height=height viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0552 6.75301C10.0552 5.64536 9.14294 4.74744 8.0176 4.74744C6.89225 4.74744 5.97998 5.64536 5.97998 6.75301C5.97998 7.86065 6.89225 8.75858 8.0176 8.75858C9.14294 8.75858 10.0552 7.86065 10.0552 6.75301Z" :stroke="color1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.65234 12.4065C4.71859 11.5194 5.33958 10.8248 6.09397 10.8248H9.98545C10.6883 10.8248 11.2744 11.4266 11.4059 12.2263" :stroke="color1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.5095 4.33673C5.44475 4.24794 5.37277 4.16455 5.29438 4.08739C4.92562 3.72444 4.41615 3.5 3.85349 3.5C3.29084 3.5 2.78144 3.72444 2.41269 4.08739C2.04403 4.45034 1.81592 4.95181 1.81592 5.50561C1.81592 6.05942 2.04403 6.5608 2.41269 6.92375C2.78144 7.28662 3.29084 7.51114 3.85349 7.51114C4.09367 7.51114 4.32419 7.47019 4.53823 7.39507" :stroke="color1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M0.5 10.9786C0.631572 10.1789 1.21761 9.57715 1.92049 9.57715H5.53277" :stroke="color1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.56592 7.39928V7.3988" :stroke="color1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.444 7.39507C11.658 7.47027 11.8885 7.51114 12.1287 7.51114C12.6913 7.51114 13.2007 7.28662 13.5695 6.92375C13.9382 6.5608 14.1663 6.05942 14.1663 5.50561C14.1663 4.95181 13.9382 4.45034 13.5695 4.08739C13.2007 3.72444 12.6913 3.5 12.1287 3.5C11.566 3.5 11.0565 3.72444 10.6878 4.08739C10.6095 4.16455 10.5374 4.24794 10.4727 4.33673" :stroke="color1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.4731 9.57715H14.0855C14.7884 9.57715 15.3743 10.1789 15.5059 10.9786" :stroke="color1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  
  </template>
  
  <script>
  export default {
    props: {
      width: {
        type: Number,
        default: 32,
      },
      height: {
        type: Number,
        default: 33,
      },
      color2: {
        type: String,
        default: "#000000",
      },
      color1: {
        type: String,
        default: "currentColor",
      },
    },
  };
  </script>
  