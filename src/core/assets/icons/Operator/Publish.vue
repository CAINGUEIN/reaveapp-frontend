<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V17C4 18.1046 4.89543 19 6 19H18C19.1046 19 20 18.1046 20 17V13"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M12 15L12 5"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M7 9L11.2929 4.70711C11.6834 4.31658 12.3166 4.31658 12.7071 4.70711L17 9"
        :stroke="color1"
        stroke-width="1.5"
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
      default: 24,
    },
    height: {
      type: Number,
      default: 24,
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
