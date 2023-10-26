<template>
    <svg 
    :width="width"
    :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.4998 10.4518C22.4827 12.6722 21.5879 14.6861 20.139 16.1406C18.6902 17.595 16.6703 18.5245 14.4459 18.5245H13.7044C13.3379 18.5245 13.0396 18.8257 13.0396 19.1958V21.0806C13.0396 21.6056 12.4601 21.9326 12.0169 21.64L5.53973 17.4487L4.90905 17.0356L4.89201 17.0184C2.83805 15.5467 1.5 13.1198 1.5 10.383C1.5 8.13672 2.4034 6.10563 3.86077 4.63395C5.31814 3.16227 7.32948 2.25 9.55389 2.25H14.3095C18.7669 2.25 22.5339 5.9335 22.4998 10.4346V10.4518Z" 
    :stroke="color1" stroke-width="1.5"  stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.17969 9.56836H15.9097" 
    :stroke="color1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.17969 12.9171H11.9978" 
    :stroke="color1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
      default: 32,
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
