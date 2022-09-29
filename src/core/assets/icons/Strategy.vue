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
        x="5"
        y="27"
        width="21.9996"
        height="3.9999"
        rx="1.99995"
        :stroke="color1"
        stroke-width="2"
      />
      <rect
        x="8"
        y="23"
        width="15.9997"
        height="3.9999"
        rx="1.99995"
        :stroke="color1"
        stroke-width="2"
      />
      <path
        d="M10 22.9997C10.8824 21.9238 12.6473 17.4176 12.6473 8"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M21.9995 22.9997C21.1171 21.9238 19.3522 17.4176 19.3522 8"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M22.9997 6.99986H9C8.44772 6.99986 8 6.55215 8 5.99986L8 1L9.44112 1V1.82348C9.44112 2.92805 10.3365 3.82348 11.4411 3.82348H12.0881C13.1927 3.82348 14.0881 2.92805 14.0881 1.82348L14.0881 1L17.9116 1V1.82348C17.9116 2.92805 18.807 3.82348 19.9116 3.82348H20.5586C21.6631 3.82348 22.5586 2.92805 22.5586 1.82348L22.5586 1L23.9997 1V5.99986C23.9997 6.55215 23.552 6.99986 22.9997 6.99986Z"
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
      default: 16,
    },
    height: {
      type: Number,
      default: 16,
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
