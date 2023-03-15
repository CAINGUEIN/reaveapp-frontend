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
        d="M7.39911 3H16.5887C16.9563 3 17.2493 3.2751 17.2493 3.6098V12.2845C17.2493 14.9621 14.8948 17.1399 11.9889 17.1399C9.088 17.1399 6.72852 14.9667 6.72852 12.2845V3.6098C6.72852 3.27051 7.02656 3 7.38917 3H7.39911Z"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.77987 6.14648H6.7404V12.6021C4.67399 12.6021 3 11.0524 3 9.14962V6.86632C3 6.46743 3.34771 6.14648 3.77987 6.14648V6.14648Z"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.2596 12.6016V9.37377V6.14597H20.2201C20.6523 6.14597 21 6.46692 21 6.86581V9.14911C21 11.0564 19.321 12.6016 17.2596 12.6016Z"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 17.1406V21.0011"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.22852 20.998H15.7391"
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
