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
        d="M22.8625 17.6472V17.792C22.8625 22.1589 19.3477 25.6895 15.0102 25.6895C10.6728 25.6895 7.16602 22.1589 7.16602 17.792C7.16602 13.4251 10.6328 9.94278 14.9224 9.89453"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.8512 3.67773H14.7634C7.15876 3.67773 1 9.88633 1 17.5345C1 25.1826 7.15876 31.3912 14.7634 31.3912C22.3679 31.3912 28.5187 25.1907 28.5187 17.5345"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.7559 17.5903L18.9576 13.4727"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M31.4016 7.38552L27.2318 11.6881L25.6422 13.3368L21.5284 13.385L18.9563 13.4172L18.8684 10.9161L18.7246 6.75823L20.6178 4.99698L24.9073 1C24.9153 1.53079 25.0192 3.5333 26.5609 5.25434C28.438 7.34531 30.9862 7.38552 31.4016 7.38552Z"
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
      default: "currentColor",
    },
  },
};
</script>
