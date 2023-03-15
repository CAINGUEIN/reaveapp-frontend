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
        d="M12.5621 9.89593C12.5621 10.6655 12.293 11.4036 11.8139 11.9478C11.3349 12.492 10.6851 12.7977 10.0076 12.7977C9.33013 12.7977 8.68038 12.492 8.20132 11.9478C7.72226 11.4036 7.45312 10.6655 7.45312 9.89593C7.45312 9.12632 7.72226 8.38824 8.20132 7.84405C8.68038 7.29986 9.33013 6.99414 10.0076 6.99414C10.6851 6.99414 11.3349 7.29986 11.8139 7.84405C12.293 8.38824 12.5621 9.12632 12.5621 9.89593V9.89593Z"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.875 9.89584C2.95981 5.97165 6.18784 3.125 10 3.125C13.813 3.125 17.0402 5.97165 18.125 9.89584C17.0402 13.82 13.813 16.6667 10 16.6667C6.18784 16.6667 2.95981 13.82 1.875 9.89584Z"
        :stroke="color1"
        stroke-width="1.25"
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
