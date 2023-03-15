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
        d="M24.6798 9.44922H7.32019C5.4865 9.44922 4 10.9929 4 12.8972V24.552C4 26.4563 5.4865 28 7.32019 28H24.6798C26.5135 28 28 26.4563 28 24.552V12.8972C28 10.9929 26.5135 9.44922 24.6798 9.44922Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.7995 4H18.1553C20.3277 4 22.0915 5.83158 22.0915 8.08778V9.44922H9.86328V8.08778C9.86328 5.83175 11.627 4 13.7995 4Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.9972 13.5547C28.0035 13.5611 27.9972 13.5611 27.9972 13.5611C27.7739 14.06 27.4548 14.5077 27.072 14.8917C26.2362 15.7361 25.0812 16.2541 23.8051 16.2541H8.19838C6.33526 16.2541 4.73376 15.1539 4 13.5611"
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
