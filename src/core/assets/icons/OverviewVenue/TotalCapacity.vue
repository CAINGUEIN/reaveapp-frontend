<template>
  <div>
    <svg :width=width :height=height viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5686 8.44153C13.5686 7.05698 12.4283 5.93457 11.0216 5.93457C9.61495 5.93457 8.47461 7.05698 8.47461 8.44153C8.47461 9.82609 9.61495 10.9485 11.0216 10.9485C12.4283 10.9485 13.5686 9.82609 13.5686 8.44153Z" :stroke="color1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.81445 15.5084C6.89726 14.3995 7.6735 13.5312 8.61649 13.5312H13.4808C14.3594 13.5312 15.092 14.2834 15.2564 15.283" :stroke="color1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.88651 5.42103C7.80558 5.31004 7.71559 5.20581 7.6176 5.10936C7.15666 4.65567 6.51982 4.37512 5.8165 4.37512C5.11318 4.37512 4.47644 4.65567 4.0155 5.10936C3.55467 5.56305 3.26953 6.18988 3.26953 6.88214C3.26953 7.57439 3.55467 8.20112 4.0155 8.65481C4.47644 9.1084 5.11318 9.38905 5.8165 9.38905C6.11672 9.38905 6.40487 9.33785 6.67242 9.24396" :stroke="color1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.625 13.7235C1.78946 12.7239 2.52201 11.9717 3.40062 11.9717H7.91596" :stroke="color1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.70703 9.24914V9.24866" :stroke="color1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.306 9.24396C15.5734 9.33796 15.8616 9.38905 16.1618 9.38905C16.8651 9.38905 17.5019 9.1084 17.9628 8.65481C18.4237 8.20112 18.7089 7.57439 18.7089 6.88214C18.7089 6.18988 18.4237 5.56305 17.9628 5.10936C17.5019 4.65567 16.8651 4.37512 16.1618 4.37512C15.4585 4.37512 14.8216 4.65567 14.3607 5.10936C14.2628 5.20581 14.1727 5.31004 14.0918 5.42103" :stroke="color1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.0918 11.9717H18.6072C19.4858 11.9717 20.2183 12.7239 20.3828 13.7235" :stroke="color1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
