<template>
    <div>
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.9112 7.67122C13.9112 11.3766 11.0002 14.3424 7.45558 14.3424C3.91096 14.3424 1 11.3766 1 7.67122C1 3.96581 3.91096 1 7.45558 1C11.0002 1 13.9112 3.96581 13.9112 7.67122Z" :stroke="color1" stroke-width="1.5"/>
  <path d="M12.6016 12.45L17.7484 17.7508" :stroke="color1" stroke-width="1.5" stroke-linecap="round"/>
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
  