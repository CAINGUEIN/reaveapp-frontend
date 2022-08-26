<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13 25H23.66V21.6H16.88V11H13V25Z" fill="#F82E2E" />
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
