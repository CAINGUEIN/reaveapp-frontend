<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.68 25.14H15.06L17.86 17.08L20.68 25.14H24.06L28.74 11.04H24.72L22.28 19.14L19.58 11H16.24L13.54 19.14L11.1 11.04H7L11.68 25.14Z"
        fill="#00AE40"
      />
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: Number,
      default: 36,
    },
    height: {
      type: Number,
      default: 36,
    },
  },
};
</script>
