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
        d="M3 15.4261V7.59631C3 6.88498 3.37782 6.22717 3.99226 5.86875L11.3176 1.59566C11.9403 1.23241 12.7103 1.23241 13.333 1.59566L20.6583 5.86875C21.2728 6.22718 21.6506 6.88498 21.6506 7.59631V15.4261C21.6506 16.124 21.2867 16.7715 20.6906 17.1344L13.3653 21.5937C12.7265 21.9826 11.9241 21.9826 11.2853 21.5937L3.96003 17.1344C3.36385 16.7715 3 16.124 3 15.4261Z"
        :stroke="color1"
        stroke-width="1.5"
      />
      <path
        d="M3 6.44922L11.2485 11.7191C11.9051 12.1386 12.7455 12.1386 13.4021 11.7191L21.6506 6.44922"
        :stroke="color1"
        stroke-width="1.5"
      />
      <path
        d="M5.58398 14.7383L9.72856 17.3286"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M7.67188 3.85938L16.9972 9.55817"
        :stroke="color1"
        stroke-width="1.5"
      />
      <path
        d="M12.334 12.6719L12.334 21.5137"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M16.9395 9.55078V12.6592"
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
