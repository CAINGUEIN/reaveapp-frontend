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
        d="M15.9985 24.6443C20.7763 24.6443 24.6494 20.7723 24.6494 15.996C24.6494 11.2196 20.7763 7.34766 15.9985 7.34766C11.2208 7.34766 7.34766 11.2196 7.34766 15.996C7.34766 20.7723 11.2208 24.6443 15.9985 24.6443Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.9219 1.03712C15.2746 1.00928 15.6366 1 15.9986 1C19.4144 1 22.5703 2.14135 25.0857 4.06217"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.5898 30.9344C15.0539 30.9808 15.5273 30.9993 16.0007 30.9993C21.8855 30.9993 26.9814 27.6124 29.4318 22.6758"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.13923 17.9989C1.04641 17.3401 1 16.672 1 15.9946C1 9.87953 4.6664 4.61817 9.92004 2.28906"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.6875 22.9277C4.20975 25.8322 6.64165 28.1705 9.60262 29.5624"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M28.5977 7.85742C30.1195 10.1958 31.001 12.9982 31.001 15.9954C31.001 16.58 30.9639 17.1646 30.8989 17.7306"
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
