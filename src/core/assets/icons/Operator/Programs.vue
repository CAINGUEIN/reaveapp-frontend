<template>
    <div>
      <svg :width="width"
      :height="height" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8357 11.5963V13.0007C11.8357 14.1053 10.9403 15.0007 9.83573 15.0007H3C1.89543 15.0007 1 14.1053 1 13.0007V6.5C1 5.39543 1.89543 4.5 3 4.5H4.06166" :stroke="color1"/>
<rect x="4.12695" y="1.5" width="10.3719" height="10.0203" rx="1.5" :stroke="color1"/>
<path d="M6.41992 4.0625L8.61688 5.97863C8.64887 6.00653 8.64887 6.05625 8.61688 6.08414L6.41992 8.00028" :stroke="color1" stroke-linecap="round"/>
<path d="M10.4736 8.4375H12.7311" :stroke="color1" stroke-linecap="round"/>
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
  