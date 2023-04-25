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
        d="M13.7514 6.24863L2.5 17.5M5.9243 14.915L10.8517 14.756C10.9484 14.7529 11.0402 14.7131 11.1086 14.6447L16.3082 9.44514C17.897 7.85634 17.897 5.28039 16.3082 3.6916C14.7194 2.1028 12.1435 2.1028 10.5547 3.6916L5.35508 8.89118C5.28669 8.95958 5.24689 9.05144 5.24377 9.14812L5.08482 14.0755C5.06967 14.5453 5.45454 14.9301 5.9243 14.915Z"
        :stroke="color1"
        stroke-width="1.25"
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
