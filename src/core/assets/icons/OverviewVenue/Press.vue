<template>
    <div>
        <svg :width=width :height=height viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99151 4.35669V17.3074C9.99151 17.4519 9.84369 17.5458 9.71916 17.4775C8.77546 16.9608 5.5022 15.3228 1.84213 15.2691C1.74035 15.2677 1.6582 15.1846 1.6582 15.0806V3.02989C1.6582 2.96856 1.68463 2.91044 1.73408 2.8757C1.90636 2.75478 2.4028 2.50024 3.52716 2.50024C5.00184 2.50024 9.99151 3.46347 9.99151 4.35669Z" :stroke="color1" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.98828 4.35669V17.3074C9.98828 17.4519 10.1361 17.5458 10.2606 17.4775C11.2043 16.9608 14.4776 15.3228 18.1377 15.2691C18.2394 15.2677 18.3216 15.1846 18.3216 15.0806V3.02989C18.3216 2.96856 18.2952 2.91044 18.2457 2.8757C18.0734 2.75478 17.577 2.50024 16.4526 2.50024C14.978 2.50024 9.98828 3.46347 9.98828 4.35669Z" :stroke="color1" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.95898 5.86206L7.67557 7.24497" :stroke="color1" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.9625 5.86206L12.2461 7.24497" :stroke="color1" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.9625 11.1542L12.2461 12.5372" :stroke="color1" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.95898 8.95447V12.4943L7.67557 13.8513V10.3115L3.95898 8.95447Z" :stroke="color1" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
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
  