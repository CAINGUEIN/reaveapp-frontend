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
        d="M4.00586 6C4.00586 3.79086 5.79672 2 8.00586 2H13.2211C13.7217 2 14.2041 2.18774 14.573 2.52612L19.3475 6.90555C19.7605 7.28435 19.9956 7.81903 19.9956 8.37942V18C19.9956 20.2091 18.2047 22 15.9956 22H8.00586C5.79672 22 4.00586 20.2091 4.00586 18V6Z"
        :stroke="color1"
        stroke-width="1.5"
      />
      <path
        d="M14 2.5V5C14 6.10457 14.8954 7 16 7H19"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M7.99609 11.502H15.991"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M7.99609 14.5H14.9916"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M7.99609 17.498H12.9929"
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
      default: "#FFFFFF",
    },
    color2: {
      type: String,
      default: "#111111",
    },
  },
};
</script>
