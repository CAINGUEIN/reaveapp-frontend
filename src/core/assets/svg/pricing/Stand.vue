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
        d="M3.56168 4.77879C4.30378 3.66739 5.55189 3 6.88828 3H13.1082C14.4446 3 15.6927 3.66739 16.4348 4.77879L17.9861 7.10209C17.9906 7.10874 17.9858 7.11765 17.9778 7.11765H2.0187C2.01071 7.11765 2.00595 7.10874 2.01038 7.10209L3.56168 4.77879Z"
        :stroke="color1"
        stroke-width="1.25"
      />
      <path
        d="M2 7.12109C2.00008 8.21913 2.30467 10.4152 4.53894 10.4152C6.77321 10.4152 7.33204 8.21913 7.33218 7.12109"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <path
        d="M7.32812 7.12109C7.3282 8.21913 7.6328 10.4152 9.86707 10.4152C12.1013 10.4152 12.6602 8.21913 12.6603 7.12109"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <path
        d="M12.6719 7.12109C12.672 8.21913 12.9765 10.4152 15.2108 10.4152C17.4451 10.4152 18.0039 8.21913 18.0041 7.12109"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <path
        d="M2.89062 10L2.89063 16C2.89063 16.5523 3.33834 17 3.89063 17L16.1098 17C16.662 17 17.1098 16.5523 17.1098 16L17.1098 10"
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
      default: "currentColor",
    },
    color2: {
      type: String,
      default: "#111111",
    },
  },
};
</script>
