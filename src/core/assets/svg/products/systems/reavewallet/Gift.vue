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
        d="M8.18479 20.4282H5C4.44772 20.4282 4 20.8759 4 21.4282V28.9998C4 29.5521 4.44772 29.9998 5 29.9998H8.18479C8.73707 29.9998 9.18479 29.5521 9.18479 28.9998V21.4282C9.18479 20.8759 8.73707 20.4282 8.18479 20.4282Z"
        :stroke="color1"
        stroke-width="2"
      />
      <path
        d="M9.83887 22.2228C10.703 21.6245 12.9497 20.4281 15.0237 20.4281C17.616 20.4281 20.8565 21.0263 20.8565 23.4192C20.8565 25.3335 17.616 25.2139 17.616 25.2139"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M10.4868 28.2054C11.999 28.6043 15.542 29.4019 17.6159 29.4019C20.1531 29.4019 25.7945 28.2558 27.8562 24.281C27.9442 24.1114 27.975 23.9167 27.9371 23.7294C27.6473 22.2967 26.5436 20.7821 22.435 23.8775C21.8113 24.3474 21.1093 24.7121 20.3425 24.8596C19.4208 25.0368 18.3071 25.2141 17.6159 25.2141"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <rect
        x="12.1567"
        y="5.043"
        width="13.3902"
        height="3.65186"
        rx="1"
        :stroke="color1"
        stroke-width="2"
      />
      <rect
        x="13.3721"
        y="8.69492"
        width="10.9556"
        height="7.30372"
        rx="1"
        :stroke="color1"
        stroke-width="2"
      />
      <path
        d="M18.8486 5.043V15.9986"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M15.8022 3.52161C15.8022 2.68125 16.4835 2 17.3239 2V2C18.1642 2 18.8455 2.68125 18.8455 3.52161V5.04322H17.3239C16.4835 5.04322 15.8022 4.36197 15.8022 3.52161V3.52161Z"
        :stroke="color1"
        stroke-width="2"
      />
      <path
        d="M21.895 3.52161C21.895 2.68125 21.2138 2 20.3734 2V2C19.533 2 18.8518 2.68125 18.8518 3.52161V5.04322H20.3734C21.2138 5.04322 21.895 4.36197 21.895 3.52161V3.52161Z"
        :stroke="color1"
        stroke-width="2"
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
      default: "#FFFFFF",
    },
    color2: {
      type: String,
      default: "#111111",
    },
  },
};
</script>
