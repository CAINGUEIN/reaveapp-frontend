<template>
  <div>
    <svg :width=width :height=height viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.07812 3.05194V3.05194C4.78658 3.05194 6.17156 4.43692 6.17156 6.14538V9.30194" :stroke="color1" stroke-width="1.25" stroke-linecap="round"/>
<path d="M13.6823 7.02783H6.39062" :stroke="color1" stroke-width="1.25" stroke-linecap="round"/>
<path d="M11.9258 7.02783V10.1213" :stroke="color1" stroke-width="1.25" stroke-linecap="round"/>
<path d="M9.85547 10.3441H10.0474C12.428 10.3441 14.4892 11.9975 15.0056 14.3213V14.3213L15.2867 15.727C15.3802 16.1945 15.7906 16.5309 16.2673 16.5309H17.6571" :stroke="color1" stroke-width="1.25" stroke-linecap="round"/>
<path d="M15.0225 14.7637L10.8242 14.7637" :stroke="color1" stroke-width="1.25" stroke-linecap="round"/>
<circle cx="7.05283" cy="13.1525" r="1.76768" :stroke="color1" stroke-width="1.25"/>
<circle cx="7.0554" cy="13.2792" r="3.97727" :stroke="color1" stroke-width="1.25"/>
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
