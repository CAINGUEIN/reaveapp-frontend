<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.25629 12.3252L4.03122 13.6011C3.18972 14.4991 3.36726 16.0933 4.42704 17.1566L7.36634 20.1057C7.89779 20.6389 8.54846 20.939 9.17129 20.9902C10.1592 21.0762 10.711 20.5138 10.8126 20.4052C12.3135 18.7348 12.8749 19.1548 13.4017 18.9043"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.3881 8.06352L16.2841 4.04141C14.8359 2.62196 12.5234 2.65806 11.1193 4.1221L10.1419 5.19767C9.79075 5.56364 9.79973 6.1481 10.1618 6.5029L11.1535 7.47488C10.5281 6.86416 9.74363 6.52553 8.93741 6.45346C7.87699 6.35904 6.78819 6.73189 5.99355 7.56028L5.88864 7.66966C5.09102 8.50129 4.75598 9.61296 4.88224 10.6815C4.98181 11.4925 5.34236 12.2768 5.96856 12.8904L11.0428 17.8635C12.4916 19.2835 14.803 19.2473 16.2077 17.7828L17.3931 16.547L20.468 13.2843C21.8722 11.8204 21.8365 9.48297 20.3882 8.06352H20.3881Z"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.35388 10.1312L9.94198 11.7247C10.6495 12.4347 11.6703 12.5321 12.2228 11.9424L12.7278 11.3381C13.3229 10.628 13.1451 9.42567 12.3263 8.62408L12.1558 8.45719L11.1566 7.479"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.4274 11.7397L16.2592 15.3899C16.8277 15.9314 18.028 15.8988 18.5677 15.327"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
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
