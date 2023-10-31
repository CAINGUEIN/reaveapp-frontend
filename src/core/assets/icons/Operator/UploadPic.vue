<template>
  <div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="3" y="4" width="18" height="16" rx="2" stroke="#808080" stroke-width="1.5"/>
<path d="M3 16.0004L6.17482 13.0372C6.55903 12.6786 7.15525 12.6786 7.53946 13.0372L10.032 15.3636C10.4162 15.7222 11.0124 15.7222 11.3966 15.3636L16.032 11.0372C16.4162 10.6786 17.0124 10.6786 17.3966 11.0372L21 14.4004" stroke="#808080" stroke-width="1.5" stroke-linecap="round"/>
<ellipse cx="11.1823" cy="8.80215" rx="1.63636" ry="1.6" stroke="#808080" stroke-width="1.5"/>
<ellipse cx="19.9994" cy="20" rx="3.99943" ry="4" fill="#111111"/>
<path d="M18 20.0024H21.9994" stroke="#808080" stroke-width="1.24992" stroke-linecap="round"/>
<path d="M20 17.999V21.999" stroke="#808080" stroke-width="1.24992" stroke-linecap="round"/>
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
