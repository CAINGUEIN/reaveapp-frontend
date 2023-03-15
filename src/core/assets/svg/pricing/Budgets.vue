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
        d="M23.2593 13.5557C23.2593 16.1321 22.1915 18.4667 20.4631 20.1515L13.8184 13.5557L23.2286 12.8379C23.2516 13.0721 23.2593 13.3139 23.2593 13.5557V13.5557Z"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.8357 20.5592C15.1303 22.2214 12.7874 23.249 10.1909 23.249C4.97499 23.249 0.75 19.0935 0.75 13.9633C0.75 8.83321 4.97499 4.67773 10.1909 4.67773C10.2601 4.67773 10.3292 4.67773 10.3983 4.68529L10.1909 13.9633L16.8357 20.5592Z"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23.2286 9.31029L13.8184 10.0281L14.0258 0.75C18.9037 0.84822 22.8675 4.5806 23.2286 9.31029Z"
        :stroke="color1"
        stroke-width="1.5"
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
      default: 24,
    },
    height: {
      type: Number,
      default: 24,
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
