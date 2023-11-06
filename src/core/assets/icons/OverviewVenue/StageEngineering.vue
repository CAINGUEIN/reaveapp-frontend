<template>
    <div>
        <svg :width=width :height=height viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.28014 12.4124L3.68054 12.2513L3.51953 11.6513L3.95813 11.2124L4.55773 11.3735L4.71874 11.9735L4.28014 12.4124Z" :stroke="color1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.75943 10.9374L10.9367 6.75741C11.9255 7.11316 13.0698 6.89638 13.8585 6.10706C14.6473 5.31775 14.8695 4.13935 14.4918 3.13881L12.6087 5.02315L11.3311 4.67852L10.9867 3.40006L12.8698 1.51572C11.8755 1.13774 10.7089 1.34896 9.90349 2.14939C9.09803 2.94982 8.89806 4.08932 9.25357 5.07318L5.07631 9.25319C4.08755 8.89745 2.94325 9.11423 2.15446 9.90354C1.0657 10.993 1.0657 12.7606 2.15446 13.8501C3.24321 14.9396 5.00965 14.9396 6.09841 13.8501C6.8872 13.0608 7.10384 11.9102 6.74832 10.9263L6.75943 10.9374Z" :stroke="color1" stroke-linecap="round" stroke-linejoin="round"/>
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
  