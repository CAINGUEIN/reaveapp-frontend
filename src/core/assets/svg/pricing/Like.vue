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
        d="M5.84365 8.48538V16.1059C5.84365 16.5992 5.45014 16.9994 4.96521 16.9994H2.87843C2.39351 16.9994 2 16.5992 2 16.1059V8.48538C2 7.98812 2.39351 7.58789 2.87843 7.58789H4.96521C5.45014 7.58789 5.84365 7.98812 5.84365 8.48538V8.48538Z"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.84375 8.36067C5.84375 7.86341 6.03454 7.39041 6.37638 7.03465L10.065 3.21831C10.1962 3.07681 10.379 3 10.5658 3H12.1279C12.5175 3 12.8315 3.31938 12.8315 3.71556V7.77043C12.8315 7.96448 12.9865 8.12215 13.1773 8.12215H15.8802C17.323 8.12215 18.3446 9.55732 17.8914 10.9521L16.1982 16.1551C16.0352 16.6604 15.5701 17 15.0494 17H9.0236C7.26673 17 5.84375 15.5527 5.84375 13.7658V8.36067V8.36067Z"
        :stroke="color1"
        stroke-width="1.25"
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
