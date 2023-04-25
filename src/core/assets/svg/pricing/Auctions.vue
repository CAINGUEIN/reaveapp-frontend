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
        d="M1.25 18.75H11.5852"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <path
        d="M2.56641 18.75C2.56641 17.3693 3.68569 16.25 5.06641 16.25H7.81781C9.19852 16.25 10.3178 17.3693 10.3178 18.75V18.75H2.56641V18.75Z"
        :stroke="color1"
        stroke-width="1.25"
      />
      <path
        d="M6.42188 6.25L8.70565 4.04029L17.6124 12.6582C18.243 13.2683 18.243 14.2577 17.6124 14.8679V14.8679C16.9817 15.4781 15.9593 15.4781 15.3286 14.8679L6.42188 6.25Z"
        :stroke="color1"
        stroke-width="1.25"
      />
      <rect
        width="5.72005"
        height="11.4401"
        rx="2.86003"
        transform="matrix(0.718665 0.695357 -0.718665 0.695357 11.5996 1.25)"
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
