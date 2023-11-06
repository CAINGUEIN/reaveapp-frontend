<template>
    <div>
        <svg :width=width :height=height viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 6.87524V13.1252" :stroke="color1" stroke-linecap="round"/>
<path d="M8.75 8.12524V11.8752" :stroke="color1" stroke-linecap="round"/>
<path d="M18.125 7.50024V12.5002" :stroke="color1" stroke-linecap="round"/>
<path d="M11.875 2.50024L11.875 17.5002" :stroke="color1" stroke-linecap="round"/>
<path d="M15 3.75024L15 16.2502" :stroke="color1" stroke-linecap="round"/>
<path d="M5.625 4.37524L5.625 15.6252" :stroke="color1" stroke-linecap="round"/>
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
  