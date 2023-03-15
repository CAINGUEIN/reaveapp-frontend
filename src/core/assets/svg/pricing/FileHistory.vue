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
        d="M5.66562 10.002H4.125C3.02043 10.002 2.125 10.8974 2.125 12.002V14.1895C2.125 15.294 3.02043 16.1895 4.125 16.1895H15.875C16.9796 16.1895 17.875 15.294 17.875 14.1895V12.002C17.875 10.8974 16.9796 10.002 15.875 10.002H14.2662C13.7729 10.002 13.297 10.1843 12.9299 10.5139L12.1013 11.2579C11.7343 11.5875 11.2584 11.7698 10.7651 11.7698H9.08438C8.55043 11.7698 8.03864 11.5563 7.663 11.1768L7.08699 10.5949C6.71135 10.2155 6.19957 10.002 5.66562 10.002Z"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <path
        d="M3 7.35547H17"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <path
        d="M3 3.81445H17"
        :stroke="color1"
        stroke-width="1.25"
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
      default: 20,
    },
    height: {
      type: Number,
      default: 20,
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
