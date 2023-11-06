<template>
    <div>
        <svg :width=width :height=height viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 18.7502H5.75C4.64543 18.7502 3.75 17.8548 3.75 16.7502V8.87524C3.75 7.77067 4.64543 6.87524 5.75 6.87524H13.625C14.7296 6.87524 15.625 7.77067 15.625 8.87524V10.6252" :stroke="color1" stroke-width="1.25" stroke-linecap="round"/>
<path d="M7.5 6.87524V5.37524C7.5 4.82296 7.94772 4.37524 8.5 4.37524H11.5C12.0523 4.37524 12.5 4.82296 12.5 5.37524V6.87524" :stroke="color1" stroke-width="1.25" stroke-linecap="round"/>
<path d="M5.625 1.87524C6.25 1.25024 6.5 1.25024 10 1.25024H13.125" :stroke="color1" stroke-width="1.25" stroke-linecap="round"/>
<path d="M10 1.25024V4.37524" :stroke="color1" stroke-width="1.25" stroke-linecap="round"/>
<path d="M13.75 16.8752C13.75 14.8752 15 13.9586 15.625 13.7502C16.25 13.9586 17.5 14.8752 17.5 16.8752C17.5 18.8752 16.25 18.7502 15.625 18.7502C15 18.7502 13.75 18.8752 13.75 16.8752Z" :stroke="color1" stroke-width="1.25"/>
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
  