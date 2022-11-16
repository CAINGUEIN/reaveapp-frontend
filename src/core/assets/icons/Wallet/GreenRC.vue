<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="#00D44E" />
      <path
        d="M17.9382 7.65738C17.1803 8.6065 15.8445 10.8121 17.2005 13.3497C17.2959 13.5284 17.1774 13.7458 16.9736 13.7631C15.9062 13.8537 12.6895 13.6592 8.37581 16.331C8.12726 16.485 7.79289 16.37 7.61716 16.1379L6.12464 14.1667C5.96247 13.9525 5.95817 13.6597 6.11399 13.4409C7.05603 12.1184 10.675 7.74869 17.6905 7.20211C17.9388 7.18282 18.0924 7.46423 17.9382 7.65729V7.65738Z"
        fill="#A6F0C1"
      />
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
      default: "#FFFFFF",
    },
  },
};
</script>
