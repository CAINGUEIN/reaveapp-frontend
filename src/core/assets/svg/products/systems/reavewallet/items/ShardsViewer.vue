<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M41.3809 25.4935L25.4958 41.3807C24.6703 42.2064 23.3317 42.2064 22.5062 41.3807L6.6191 25.4935C5.79363 24.668 5.79363 23.3294 6.6191 22.5039L22.5064 6.61909C23.3319 5.79364 24.6703 5.79364 25.4958 6.61909L41.3809 22.5042C42.2064 23.3296 42.2064 24.668 41.3809 25.4935Z"
        stroke="url(#paint0_linear_1273_1857)"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30.9881 25.5514L24.98 40.231C24.6216 41.1065 23.3821 41.1065 23.0237 40.231L17.0156 25.5514L23.0004 7.83191C23.324 6.87374 24.6795 6.87374 25.0031 7.83191L30.9881 25.5514Z"
        stroke="url(#paint1_linear_1273_1857)"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.23438 23.0273C9.58479 23.857 13.3319 24.4594 17.3323 24.7766C19.4859 24.9483 21.716 25.0408 23.9964 25.0408C26.2767 25.0408 28.5068 24.9483 30.6604 24.7766C34.6609 24.4594 38.4077 23.857 41.7584 23.0273"
        stroke="url(#paint2_linear_1273_1857)"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1273_1857"
          x1="-5.96495"
          y1="29.1357"
          x2="54.8773"
          y2="23.9848"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF3D00" />
          <stop offset="1" stop-color="#FFF16F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1273_1857"
          x1="12.3717"
          y1="28.8186"
          x2="36.1262"
          y2="27.9866"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF3D00" />
          <stop offset="1" stop-color="#FFF16F" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1273_1857"
          x1="-5.57236"
          y1="24.3213"
          x2="13.1426"
          y2="-3.63234"
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
