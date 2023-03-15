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
        d="M29.9997 13.9357C29.977 16.8963 28.7838 19.5815 26.852 21.5208C24.9202 23.4601 22.2271 24.6994 19.2612 24.6994H18.2725C17.7839 24.6994 17.3862 25.101 17.3862 25.5944V28.1075C17.3862 28.8075 16.6135 29.2435 16.0226 28.8534L7.3863 23.265L6.5454 22.7142L6.52268 22.6912C3.78407 20.729 2 17.493 2 13.8439C2 10.849 3.20453 8.14083 5.14769 6.1786C7.09085 4.21636 9.77264 3 12.7385 3H19.0794C25.0225 3 30.0451 7.91133 29.9997 13.9128V13.9357Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.9062 12.7578H21.213"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.9062 17.2227H15.9971"
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
