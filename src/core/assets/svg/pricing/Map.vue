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
        d="M7.08008 4.39844V17.0686"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.9199 2.5V15.501"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5832 2.55697L7.41664 4.38124C7.2016 4.4572 6.96494 4.4572 6.7499 4.38124L2.53797 2.89403C1.91422 2.67377 1.25 3.11073 1.25 3.7414V14.873C1.25 15.2505 1.49772 15.5884 1.87111 15.7203L6.7499 17.443C6.96494 17.519 7.2016 17.519 7.41664 17.443L12.5832 15.6186C12.7983 15.5427 13.0349 15.5427 13.25 15.6186L17.462 17.106C18.0858 17.3262 18.75 16.8893 18.75 16.2586V5.12704C18.75 4.74949 18.5023 4.4116 18.1289 4.27968L13.2501 2.55697C13.0351 2.48101 12.7984 2.48101 12.5834 2.55697H12.5832Z"
        :stroke="color1"
        stroke-width="1.5"
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
