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
        d="M12.532 16.6664L17.98 20.9362C18.1535 21.0715 18.4176 20.9813 18.4629 20.7633L21.9943 3.36074C22.0396 3.1277 21.8057 2.93225 21.5869 3.02246L2.18676 10.8329C1.93775 10.9307 1.93775 11.284 2.18676 11.3892L6.49537 13.1858C6.57083 13.2159 6.62365 13.2761 6.65384 13.3512L9.14393 19.3876C9.22693 19.5831 9.47594 19.6357 9.63441 19.4853L12.2754 16.9144C12.4037 16.7866 12.3961 16.5761 12.2528 16.4634L10.0117 14.7119C9.86832 14.5991 9.86078 14.3811 9.98905 14.2608L15.7389 8.90098"
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
      default: "currentColor",
    },
    color2: {
      type: String,
      default: "#111111",
    },
  },
};
</script>
