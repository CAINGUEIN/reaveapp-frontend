<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.4241 11.2361C21.4241 8.34427 18.9927 6 15.9933 6C12.994 6 10.5625 8.34427 10.5625 11.2361C10.5625 14.1279 12.994 16.4722 15.9933 16.4722C18.9927 16.4722 21.4241 14.1279 21.4241 11.2361Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7 25.9986C7.17656 23.6826 8.83167 21.8691 10.8423 21.8691H21.2142C23.0876 21.8691 24.6495 23.4401 25 25.528"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
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
      default: "#FFFFFF",
    },
    color2: {
      type: String,
      default: "#111111",
    },
  },
};
</script>
