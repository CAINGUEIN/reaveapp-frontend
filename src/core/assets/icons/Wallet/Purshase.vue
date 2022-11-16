<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8.54102" cy="20.3008" r="1.5" :fill="color1" />
      <circle cx="18.6211" cy="20.3008" r="1.5" :fill="color1" />
      <path
        d="M2 3H3.68204C4.65252 3 5.48295 3.69671 5.65161 4.65243L7.7342 16.4538C7.81853 16.9316 8.23374 17.28 8.71898 17.28H18.9014C19.3404 17.28 19.7281 16.9937 19.8572 16.5741L22.6018 7.65409C22.7997 7.01103 22.3188 6.36 21.646 6.36H7.04"
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
    color2: {
      type: String,
      default: "#000000",
    },
    color1: {
      type: String,
      default: "#FFFFFF",
    },
  },
};
</script>
