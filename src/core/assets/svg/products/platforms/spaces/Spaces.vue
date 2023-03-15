<template>
  <div>
    <svg
      :width="width"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9522 7C19.8204 7.47754 19.75 7.98055 19.75 8.5C19.75 11.6066 22.2684 14.125 25.375 14.125C28.4816 14.125 31 11.6066 31 8.5C31 5.3934 28.4816 2.875 25.375 2.875C24.9007 2.875 24.44 2.93371 24 3.04427"
        :stroke="color1"
        stroke-width="2"
      />
      <path
        d="M15.3258 15.0869C12.7677 13.1305 9.23379 12.6337 6.11826 14.0988C1.66709 16.192 -0.244413 21.4973 1.8488 25.9484C3.94201 30.3996 9.24728 32.3111 13.6984 30.2179C15.9637 29.1527 17.5712 27.2555 18.3279 25.0624M21.7979 17.5051C23.0906 20.2539 21.9102 23.5302 19.1614 24.8228C16.4126 26.1155 13.1363 24.935 11.8437 22.1862C10.551 19.4374 11.7315 16.1612 14.4803 14.8686C17.2291 13.5759 20.5053 14.7563 21.7979 17.5051Z"
        :stroke="color1"
        stroke-width="2"
      />
      <circle
        cx="9.4375"
        cy="4.75"
        r="3.75"
        :stroke="color1"
        stroke-width="2"
      />
      <circle cx="21" cy="4" r="3" :stroke="color1" stroke-width="2" />
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
