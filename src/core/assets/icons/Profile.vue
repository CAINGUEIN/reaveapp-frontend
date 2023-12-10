<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.0681 8.42706C16.0681 6.25821 14.2445 4.5 11.995 4.5C9.74547 4.5 7.92188 6.25821 7.92188 8.42706C7.92188 10.5959 9.74547 12.3541 11.995 12.3541C14.2445 12.3541 16.0681 10.5959 16.0681 8.42706Z"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.25 19.4975C5.38242 17.7605 6.62376 16.4004 8.13176 16.4004H15.9107C17.3157 16.4004 18.4872 17.5786 18.75 19.1445"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
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
