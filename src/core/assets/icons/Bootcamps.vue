<template>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5387 5H20.462C22.4636 5 24.0886 6.56466 24.0886 8.49197V16.1865C24.0886 17.288 23.1599 18.1822 22.0159 18.1822H9.98482C8.84082 18.1822 7.91211 17.288 7.91211 16.1865V8.49197C7.91211 6.56466 9.53711 5 11.5387 5V5Z"
        :stroke="color1"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.6504 11.1844H4.10176C2.3887 11.1844 1 12.4473 1 14.005V21.1137C1 22.6714 2.3887 23.9342 4.10176 23.9342H27.8982C29.6113 23.9342 31 22.6714 31 21.1137V14.005C31 12.4473 29.6113 11.1844 27.8982 11.1844H24.3968"
        :stroke="color1"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.78613 23.935L5.125 27.2582"
        :stroke="color1"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26.418 23.9344L28.0791 27.2578"
        :stroke="color1"
        stroke-width="2.5"
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
      default: "#111111",
    },
    color2: {
      type: String,
      default: "#111111",
    },
  },
};
</script>