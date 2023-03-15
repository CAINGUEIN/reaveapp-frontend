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
        d="M19.5 12.6667L16 14.3333M16 14.3333L12.5 12.6667M16 14.3333V18.5M30 7.66667L26.5 9.33333M30 7.66667L26.5 6M30 7.66667V11.8333M19.5 2.66667L16 1M16 1L12.5 2.66667M16 1V5.6875M2 7.66667L5.5 6M2 7.66667L5.5 9.33333M2 7.66667V11.8333M16 31L12.5 29.3333M16 31L19.5 29.3333M16 31V26.8333M5.5 26L2 24.3333V20.1667M26.5 26L30 24.3333V20.1667"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2 24.2292L5.5 22.5625"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26.2656 22.5618L29.7656 24.2285"
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
      default: "#FFFFFF",
    },
    color2: {
      type: String,
      default: "#111111",
    },
  },
};
</script>
