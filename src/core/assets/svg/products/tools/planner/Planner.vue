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
        width="22"
        height="4"
        rx="2"
        :stroke="color1"
        stroke-width="2"
      />
      <rect
        x="8"
        y="23"
        width="16"
        height="4"
        rx="2"
        :stroke="color1"
        stroke-width="2"
      />
      <path
        d="M10 23C10.8825 21.9241 12.6474 17.4177 12.6474 8"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M22 23C21.1175 21.9241 19.3526 17.4177 19.3526 8"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M23 7H9C8.44772 7 8 6.55228 8 6L8 1L9.44118 0.999999V1.82353C9.44118 2.9281 10.3366 3.82353 11.4412 3.82353H12.0882C13.1928 3.82353 14.0882 2.9281 14.0882 1.82353L14.0882 1L17.9118 0.999999V1.82353C17.9118 2.9281 18.8072 3.82353 19.9118 3.82353H20.5588C21.6634 3.82353 22.5588 2.9281 22.5588 1.82353V1H24V6C24 6.55229 23.5523 7 23 7Z"
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
