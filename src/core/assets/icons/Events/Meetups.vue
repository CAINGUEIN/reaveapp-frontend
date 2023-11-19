<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5716 10.128C15.5716 8.46652 14.2032 7.11963 12.5152 7.11963C10.8271 7.11963 9.45874 8.46652 9.45874 10.128C9.45874 11.7895 10.8271 13.1363 12.5152 13.1363C14.2032 13.1363 15.5716 11.7895 15.5716 10.128Z"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.48145 18.6001C7.58081 17.2695 8.5123 16.2275 9.64389 16.2275H15.4811C16.5354 16.2275 17.4145 17.1301 17.6117 18.3297"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.75619 6.50509C8.65908 6.37191 8.5511 6.24683 8.43351 6.13109C7.88038 5.58666 7.11616 5.25 6.27218 5.25C5.4282 5.25 4.66411 5.58666 4.11098 6.13109C3.55798 6.67551 3.21582 7.42771 3.21582 8.25842C3.21582 9.08913 3.55798 9.8412 4.11098 10.3856C4.66411 10.9299 5.4282 11.2667 6.27218 11.2667C6.63244 11.2667 6.97823 11.2053 7.29929 11.0926"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.25 16.4601C1.44736 15.2605 2.32642 14.3579 3.38074 14.3579H8.79915"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.34082 11.1025V11.1021"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.6631 11.0926C17.984 11.2054 18.3298 11.2667 18.6901 11.2667C19.534 11.2667 20.2981 10.9299 20.8513 10.3856C21.4044 9.8412 21.7465 9.08913 21.7465 8.25842C21.7465 7.42771 21.4044 6.67551 20.8513 6.13109C20.2981 5.58666 19.534 5.25 18.6901 5.25C17.8461 5.25 17.0819 5.58666 16.5287 6.13109C16.4113 6.24683 16.3032 6.37191 16.2061 6.50509"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.2061 14.3579H21.6246C22.6789 14.3579 23.5578 15.2605 23.7552 16.4601"
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
