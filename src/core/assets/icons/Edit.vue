<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.655 2.98863L12.1545 1.48821C12.4671 1.17562 12.8911 1 13.3331 1C13.7752 1 14.1992 1.17562 14.5118 1.48821C14.8244 1.80081 15 2.22478 15 2.66686C15 3.10894 14.8244 3.53291 14.5118 3.84551L5.07282 13.2845C4.6029 13.7541 4.02339 14.0993 3.38663 14.2889L1 15L1.7111 12.6134C1.90068 11.9766 2.24588 11.3971 2.71553 10.9272L10.655 2.98863ZM10.655 2.98863L12.9998 5.33349"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
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
      default: "currentColor",
    },
    color2: {
      type: String,
      default: "#111111",
    },
  },
};
</script>