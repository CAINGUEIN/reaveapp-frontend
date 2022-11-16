<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.00391 12.7129C4.00391 13.5156 6.0385 14.1629 8.54911 14.1629C11.0597 14.1629 13.0905 13.5156 13.0905 12.7129"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.54663 10.0119C11.0555 10.0119 13.0894 9.36215 13.0894 8.56064C13.0894 7.75913 11.0555 7.10938 8.54663 7.10938C6.03775 7.10938 4.00391 7.75913 4.00391 8.56064C4.00391 9.36215 6.03775 10.0119 8.54663 10.0119Z"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 17.0312C4 17.8301 6.03459 18.4813 8.54521 18.4813C9.57402 18.4813 10.5261 18.3715 11.2901 18.1859"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.00391 8.55664V17.1916"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.082 12.8741V11.4929V8.55664"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.0857 16.4015C13.6769 16.5453 14.3833 16.6438 15.1548 16.6779C15.3736 16.693 15.6002 16.6968 15.8304 16.6968C18.0877 16.6968 19.9611 16.1744 20.3142 15.4815C20.3564 15.4058 20.3756 15.3263 20.3756 15.2468C20.3756 14.4441 18.341 13.793 15.8304 13.793C15.6002 13.793 15.3736 13.7968 15.1548 13.8119C14.3832 13.846 13.6769 13.9444 13.0857 14.0883C11.9955 14.3534 11.2891 14.7735 11.2891 15.2468C11.2891 15.72 11.9455 16.11 12.9743 16.375"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.3721 15.4711V18.9543C20.3721 19.0338 20.3528 19.1133 20.3106 19.1891C19.9575 19.882 18.0841 20.4044 15.8306 20.4044C14.7441 20.4044 13.7499 20.2831 12.9705 20.0825C11.9418 19.8176 11.2852 19.4086 11.2852 18.9543V15.2402C11.2852 15.6947 11.9418 16.1036 12.9705 16.3684C13.005 16.376 13.0434 16.3875 13.0818 16.395C13.673 16.5389 14.3793 16.6372 15.151 16.6715C15.3698 16.6865 15.5963 16.6903 15.8266 16.6903C18.0841 16.6903 19.9574 16.1678 20.3106 15.475C20.3296 15.475 20.3528 15.475 20.3721 15.4711V15.4711Z"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.6816 5.1582H20.9991"
        :stroke="color1"
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
