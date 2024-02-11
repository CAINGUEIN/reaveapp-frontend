<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.0718 10.1275C15.0718 8.46603 13.7034 7.11914 12.0154 7.11914C10.3274 7.11914 8.95898 8.46603 8.95898 10.1275C8.95898 11.789 10.3274 13.1359 12.0154 13.1359C13.7034 13.1359 15.0718 11.789 15.0718 10.1275Z"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.98145 18.5991C7.08081 17.2685 8.0123 16.2266 9.14389 16.2266H14.9811C16.0354 16.2266 16.9145 17.1292 17.1117 18.3287"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.25619 6.50509C8.15908 6.37191 8.0511 6.24683 7.93351 6.13109C7.38038 5.58666 6.61616 5.25 5.77218 5.25C4.9282 5.25 4.16411 5.58666 3.61098 6.13109C3.05798 6.67551 2.71582 7.42771 2.71582 8.25842C2.71582 9.08913 3.05798 9.8412 3.61098 10.3856C4.16411 10.9299 4.9282 11.2667 5.77218 11.2667C6.13244 11.2667 6.47823 11.2053 6.79929 11.0926"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M0.75 16.4596C0.947358 15.26 1.82642 14.3574 2.88074 14.3574H8.29915"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.84082 11.102V11.1016"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.1631 11.0926C17.484 11.2054 17.8298 11.2667 18.1901 11.2667C19.034 11.2667 19.7981 10.9299 20.3513 10.3856C20.9044 9.8412 21.2465 9.08913 21.2465 8.25842C21.2465 7.42771 20.9044 6.67551 20.3513 6.13109C19.7981 5.58666 19.034 5.25 18.1901 5.25C17.3461 5.25 16.5819 5.58666 16.0287 6.13109C15.9113 6.24683 15.8032 6.37191 15.7061 6.50509"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.7061 14.3574H21.1246C22.1789 14.3574 23.0578 15.26 23.2552 16.4596"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <ellipse cx="18.9987" cy="19" rx="4.99865" ry="5" fill="white" />
    <path
      d="M16.5 19.0006H21.4987"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M18.999 16.5V21.5"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
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
