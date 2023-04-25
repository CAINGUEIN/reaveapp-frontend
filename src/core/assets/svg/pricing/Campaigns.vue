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
        d="M2.03125 11.7167C2.03125 9.21531 4.05906 7.1875 6.56049 7.1875H14.6356V16.246H6.5605C4.05906 16.246 2.03125 14.2182 2.03125 11.7167V11.7167Z"
        :stroke="color1"
        stroke-width="1.5"
      />
      <path
        d="M5.46875 16.3105C5.84611 18.1707 7.26742 21.8688 9.95368 21.9573C10.0186 21.9594 10.0839 21.9673 10.1488 21.9709C10.5495 21.9934 11.198 21.7096 11.198 20.3774C11.198 18.9314 10.2431 17.0637 9.76568 16.3105"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M15.7469 5.44389L19.7678 3.45718C21.097 2.80041 22.6537 3.76762 22.6537 5.25024V16.9292C22.6537 18.4119 21.097 19.3791 19.7678 18.7223L15.7469 16.7356C15.0646 16.3985 14.6328 15.7035 14.6328 14.9425V7.23696C14.6328 6.476 15.0646 5.78097 15.7469 5.44389Z"
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
      default: "currentColor",
    },
    color2: {
      type: String,
      default: "#111111",
    },
  },
};
</script>
