<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.06131 2.5H5.25C3.04086 2.5 1.25 4.29086 1.25 6.5V13.5C1.25 15.7091 3.04086 17.5 5.25 17.5H16.3889C17.923 17.5 19.1667 16.2563 19.1667 14.7222V10.1667C19.1667 9.61438 18.7189 9.16667 18.1667 9.16667C18.0286 9.16667 17.9167 9.05474 17.9167 8.91667V7.84722C17.9167 6.3898 16.7352 5.20833 15.2778 5.20833H11.2304C10.1988 5.20833 9.23298 4.70226 8.64583 3.85417C8.05869 3.00607 7.09282 2.5 6.06131 2.5Z"
        :stroke="color1"
        stroke-width="1.25"
      />
      <path
        d="M18.3333 9.15625H8.40406C6.44187 9.15625 4.76939 10.5796 4.45556 12.5165L3.75 16.8711"
        :stroke="color1"
        stroke-width="1.25"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 20,
    },
    height: {
      type: Number,
      default: 20,
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
