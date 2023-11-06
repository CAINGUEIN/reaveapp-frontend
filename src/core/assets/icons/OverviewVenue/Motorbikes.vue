<template>
  <div>
    <svg :width=width :height=height viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4702 6.18666C11.2463 5.81353 10.0373 5.25012 9.5 5.25012C8.82836 5.25012 6 5.43296 6 7.00012" :stroke="color1" stroke-linecap="round"/>
<circle cx="13.2622" cy="9.99271" r="2.23881" :stroke="color1"/>
<circle cx="3.85795" cy="9.99271" r="2.23881" :stroke="color1"/>
<path d="M13.261 9.5449L10.9675 3.91526C10.8652 3.66423 10.6212 3.50012 10.3501 3.50012H9.45508" :stroke="color1" stroke-linecap="round"/>
<path d="M12.1428 6.63444V6.63444C12.6374 6.63444 13.0384 6.2335 13.0384 5.73892V5.34028C13.0384 4.90985 12.7629 4.52771 12.3546 4.39159L11.0234 3.94788" :stroke="color1" stroke-linecap="round"/>
<path d="M11.6937 5.73889L9.94972 9.42071C9.78429 9.76996 9.43243 9.99262 9.04598 9.99262H4.71989C4.45468 9.99262 4.20032 9.88727 4.01279 9.69973L3.41016 9.0971" :stroke="color1" stroke-linecap="round"/>
<path d="M10.3507 8.42546H7.43034C7.15124 8.42546 6.88484 8.30882 6.69554 8.10374L5.5459 6.8583M5.5459 6.8583L4.60291 5.83673C4.41361 5.63165 4.14721 5.51501 3.86811 5.51501H2.73878C2.49148 5.51501 2.29102 5.71548 2.29102 5.96278V5.96278C2.29102 6.45736 2.69195 6.8583 3.18654 6.8583H5.5459Z" :stroke="color1" stroke-linecap="round"/>
<path d="M0.5 9.54484C0.5 7.7538 1.17164 6.85828 3.85821 6.85828" :stroke="color1" stroke-linecap="round"/>
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
