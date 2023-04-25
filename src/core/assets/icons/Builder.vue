<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="19.75"
        y="1"
        width="11.25"
        height="30"
        rx="2"
        :stroke="color1"
        stroke-width="2"
      />
      <path d="M19.75 8.03125H31" :stroke="color1" stroke-width="2" />
      <path d="M19.75 16H31" :stroke="color1" stroke-width="2" />
      <path d="M19.75 23.5H31" :stroke="color1" stroke-width="2" />
      <path
        d="M15.0625 1H8.5625C8.01022 1 7.5625 1.44772 7.5625 2V8.5"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M7.5625 23.5V30C7.5625 30.5523 8.01022 31 8.5625 31H15.0625"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M12.125 22.5625H3C1.89543 22.5625 1 21.6671 1 20.5625V11.4375C1 10.3329 1.89543 9.4375 3 9.4375H12.125C13.2296 9.4375 14.125 10.3329 14.125 11.4375V20.5625C14.125 21.6671 13.2296 22.5625 12.125 22.5625Z"
        :stroke="color1"
        stroke-width="2"
      />
      <path
        d="M7.5625 12.7188V19.2813"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M4.28125 16H10.8438"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
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
