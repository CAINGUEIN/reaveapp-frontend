<template>
  <div>
    <svg :width=width :height=height viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.82519 14.7214L3.90234 16.5676" :stroke="color1" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.7324 14.7214L16.6553 16.5677" :stroke="color1" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5187 4.1665H12.4761C13.5881 4.1665 14.4909 5.03576 14.4909 6.10649V10.3812C14.4909 10.9932 13.9749 11.49 13.3394 11.49H6.65541C6.01986 11.49 5.50391 10.9932 5.50391 10.3812V6.10649C5.50391 5.03576 6.40668 4.1665 7.5187 4.1665V4.1665Z" :stroke="color1" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.36264 7.60248H3.39117C2.43947 7.60248 1.66797 8.30407 1.66797 9.16946V13.1187C1.66797 13.9841 2.43947 14.6857 3.39117 14.6857H16.6114C17.5631 14.6857 18.3346 13.9841 18.3346 13.1187V9.16946C18.3346 8.30407 17.5631 7.60248 16.6114 7.60248H14.6662" :stroke="color1" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
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
