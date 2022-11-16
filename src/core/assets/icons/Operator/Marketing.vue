<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
    <path d="M14.882 2.25H9.25529C8.87019 2.25 8.51931 2.47113 8.35316 2.81854L5.18462 9.44354C4.86718 10.1073 5.35102 10.875 6.08676 10.875H9.73282C10.3376 10.875 10.804 11.4077 10.724 12.0072L9.44777 21.5792C9.42758 21.7307 9.62032 21.8118 9.71455 21.6915L19.61 9.05832C19.8671 8.73014 19.6333 8.25 19.2164 8.25H15.118C14.3747 8.25 13.8912 7.46769 14.2236 6.80279L15.7764 3.69721C16.1088 3.03231 15.6253 2.25 14.882 2.25Z" stroke="#808080" stroke-width="1.5"/>
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
