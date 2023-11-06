<template>
  <div>
    <svg :width=width :height=height viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.6615 5.33203H18.5508" stroke="white" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round" />
      <path d="M13.8875 5.33203H3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M21.6677 12.332H10.7803" stroke="white" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round" />
      <path d="M6.11071 12.332H3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M21.6615 19.332H18.5508" stroke="white" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round" />
      <path d="M13.8875 19.332H3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M8.43655 14.6667C9.72504 14.6667 10.7696 13.622 10.7696 12.3334C10.7696 11.0447 9.72504 10 8.43655 10C7.14805 10 6.10352 11.0447 6.10352 12.3334C6.10352 13.622 7.14805 14.6667 8.43655 14.6667Z"
        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M16.2176 7.6667C17.506 7.6667 18.5506 6.62202 18.5506 5.33335C18.5506 4.04468 17.506 3 16.2176 3C14.9291 3 13.8845 4.04468 13.8845 5.33335C13.8845 6.62202 14.9291 7.6667 16.2176 7.6667Z"
        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M16.2178 21.6667C17.5063 21.6667 18.5508 20.622 18.5508 19.3333C18.5508 18.0447 17.5063 17 16.2178 17C14.9293 17 13.8848 18.0447 13.8848 19.3333C13.8848 20.622 14.9293 21.6667 16.2178 21.6667Z"
        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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