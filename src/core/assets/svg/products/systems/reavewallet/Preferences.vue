<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.9977 5.25H17.998"
        stroke="#808080"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.5006 5.25H3.00195"
        stroke="#808080"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.0045 12H10.5059"
        stroke="#808080"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.00156 12H3.00195"
        stroke="#808080"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.9977 18.75H17.998"
        stroke="#808080"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.5006 18.75H3.00195"
        stroke="#808080"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.2458 14.25C9.48828 14.25 10.4955 13.2427 10.4955 12C10.4955 10.7574 9.48828 9.75 8.2458 9.75C7.00332 9.75 5.99609 10.7574 5.99609 12C5.99609 13.2427 7.00332 14.25 8.2458 14.25Z"
        stroke="#808080"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.7478 7.50003C16.9902 7.50003 17.9975 6.49266 17.9975 5.25002C17.9975 4.00737 16.9902 3 15.7478 3C14.5053 3 13.498 4.00737 13.498 5.25002C13.498 6.49266 14.5053 7.50003 15.7478 7.50003Z"
        stroke="#808080"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.7478 21C16.9902 21 17.9975 19.9927 17.9975 18.75C17.9975 17.5074 16.9902 16.5 15.7478 16.5C14.5053 16.5 13.498 17.5074 13.498 18.75C13.498 19.9927 14.5053 21 15.7478 21Z"
        :stroke="color1"
        stroke-width="2"
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
      default: 32,
    },
    height: {
      type: Number,
      default: 32,
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
