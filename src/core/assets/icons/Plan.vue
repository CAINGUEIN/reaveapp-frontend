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
        d="M7.1875 23H5C2.79086 23 1 21.2091 1 19V18.3333M1 18.3333V3.66667V3C1 1.89543 1.89543 1 3 1H3.8125C4.91707 1 5.8125 1.89543 5.8125 3V13C5.8125 15.2091 3.91568 16.6336 1.85413 17.4275C1.34233 17.6246 1 17.9126 1 18.3333Z"
        :stroke="color1"
        stroke-width="1.5"
      />
      <path
        d="M5.8125 3.66602H19C21.2091 3.66602 23 5.45688 23 7.66602V7.66602"
        :stroke="color1"
        stroke-width="1.5"
      />
      <path
        d="M11.7177 22.9993H22C22.5523 22.9993 23 22.5516 23 21.9993V12.0287C23 11.1452 21.9381 10.6957 21.3039 11.3108L11.0216 21.2814C10.3767 21.9068 10.8194 22.9993 11.7177 22.9993Z"
        :stroke="color1"
        stroke-width="1.5"
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
