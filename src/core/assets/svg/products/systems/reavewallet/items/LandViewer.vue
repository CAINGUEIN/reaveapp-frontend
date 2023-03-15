<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="23.4518"
        cy="23.9995"
        rx="15.3659"
        ry="14.9995"
        stroke="url(#paint0_linear_1273_1851)"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.6719 25.6066C14.6719 22.7495 16.428 17.0354 23.4524 17.0354"
        stroke="url(#paint1_linear_1273_1851)"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M33.3293 12.2143C35.5244 11.1429 38.2683 10.6072 41.561 10.6072C44.8537 10.6072 46.5 12.2133 46.5 14.3571C46.5 23.9996 14.6707 39.0001 6.98781 39.0001C5.15854 38.9998 1.5 38.2492 1.5 35.2493C1.5 32.2494 4.79268 28.8209 8.08537 26.6781"
        stroke="url(#paint2_linear_1273_1851)"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1273_1851"
          x1="-2.12804"
          y1="28.2791"
          x2="49.7922"
          y2="23.7762"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF3D00" />
          <stop offset="1" stop-color="#FFF16F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1273_1851"
          x1="11.7536"
          y1="22.5437"
          x2="26.588"
          y2="21.2572"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF3D00" />
          <stop offset="1" stop-color="#FFF16F" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1273_1851"
          x1="-13.4562"
          y1="28.8541"
          x2="61.7871"
          y2="18.7582"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF3D00" />
          <stop offset="1" stop-color="#FFF16F" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 48,
    },
    height: {
      type: Number,
      default: 48,
    },
  },
};
</script>
