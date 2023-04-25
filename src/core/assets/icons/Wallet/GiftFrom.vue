<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5555 16.7969H22C22.5523 16.7969 23 17.2446 23 17.7969V24.0018C23 24.5541 22.5523 25.0018 22 25.0018H19.5555C19.0032 25.0018 18.5555 24.5541 18.5555 24.0018V17.7969C18.5555 17.2446 19.0032 16.7969 19.5555 16.7969Z"
        :stroke="color1"
        stroke-width="1.5"
      />
      <path
        d="M18 18.3353C17.2593 17.8225 15.3333 16.7969 13.5555 16.7969C11.3333 16.7969 8.55547 17.3097 8.55547 19.3609C8.55547 21.0019 11.3333 20.8994 11.3333 20.8994"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M17.4434 23.4636C16.1471 23.8055 13.11 24.4893 11.3322 24.4893C9.16509 24.4893 4.35633 23.5139 2.57336 20.1365C2.48416 19.9675 2.45306 19.7726 2.49319 19.5858C2.75088 18.3866 3.69255 17.1629 7.06229 19.6501C7.69059 20.1138 8.39402 20.4839 9.16168 20.6271C9.91582 20.7678 10.7808 20.8994 11.3322 20.8994"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <rect
        width="11.4783"
        height="3.13043"
        rx="1"
        transform="matrix(-1 0 0 1 16 3.60938)"
        :stroke="color1"
        stroke-width="1.5"
      />
      <rect
        width="9.3913"
        height="6.26087"
        rx="1"
        transform="matrix(-1 0 0 1 14.957 6.73828)"
        :stroke="color1"
        stroke-width="1.5"
      />
      <path
        d="M10.2617 3.60938V13.0007"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M12.8691 2.30435C12.8691 1.58398 12.2852 1 11.5648 1V1C10.8444 1 10.2604 1.58398 10.2604 2.30435V3.6087H11.5648C12.2852 3.6087 12.8691 3.02472 12.8691 2.30435V2.30435Z"
        :stroke="color1"
        stroke-width="1.5"
      />
      <path
        d="M7.65234 2.30435C7.65234 1.58398 8.23632 1 8.95669 1V1C9.67706 1 10.261 1.58398 10.261 2.30435V3.6087H8.95669C8.23632 3.6087 7.65234 3.02472 7.65234 2.30435V2.30435Z"
        :stroke="color1"
        stroke-width="1.5"
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
      default: 26,
    },
    color2: {
      type: String,
      default: "#000000",
    },
    color1: {
      type: String,
      default: "currentColor",
    },
  },
};
</script>
