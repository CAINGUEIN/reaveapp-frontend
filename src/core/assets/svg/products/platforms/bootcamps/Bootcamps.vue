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
        d="M6.78613 24L5.125 27.3232"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26.418 24L28.0791 27.3234"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.5368 5H20.4601C22.4617 5 24.0867 6.56466 24.0867 8.49197V16.1865C24.0867 17.288 23.158 18.1822 22.014 18.1822H9.98287C8.83887 18.1822 7.91016 17.288 7.91016 16.1865V8.49197C7.91016 6.56466 9.53515 5 11.5368 5V5Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.6504 11.1836H4.10176C2.3887 11.1836 1 12.4465 1 14.0042V21.1129C1 22.6706 2.3887 23.9334 4.10176 23.9334H27.8982C29.6113 23.9334 31 22.6706 31 21.1129V14.0042C31 12.4465 29.6113 11.1836 27.8982 11.1836H24.3968"
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
      default: "currentColor",
    },
    color2: {
      type: String,
      default: "#111111",
    },
  },
};
</script>
