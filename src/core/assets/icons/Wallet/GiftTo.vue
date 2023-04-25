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
        d="M5.44448 16.7969H3C2.44772 16.7969 2 17.2446 2 17.7969V24.0018C2 24.5541 2.44772 25.0018 3 25.0018H5.44448C5.99677 25.0018 6.44448 24.5541 6.44448 24.0018V17.7969C6.44448 17.2446 5.99677 16.7969 5.44448 16.7969Z"
        :stroke="color1"
        stroke-width="1.5"
      />
      <path
        d="M7 18.3353C7.74075 17.8225 9.66669 16.7969 11.4445 16.7969C13.6667 16.7969 16.4445 17.3097 16.4445 19.3609C16.4445 21.0019 13.6667 20.8994 13.6667 20.8994"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M7.55664 23.4636C8.85295 23.8055 11.89 24.4893 13.6678 24.4893C15.8349 24.4893 20.6437 23.5139 22.4266 20.1365C22.5158 19.9675 22.5469 19.7726 22.5068 19.5858C22.2491 18.3866 21.3074 17.1629 17.9377 19.6501C17.3094 20.1138 16.606 20.4839 15.8383 20.6271C15.0842 20.7678 14.2192 20.8994 13.6678 20.8994"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <rect
        x="9"
        y="3.60938"
        width="11.4783"
        height="3.13043"
        rx="1"
        :stroke="color1"
        stroke-width="1.5"
      />
      <rect
        x="10.043"
        y="6.73828"
        width="9.3913"
        height="6.26087"
        rx="1"
        :stroke="color1"
        stroke-width="1.5"
      />
      <path
        d="M14.7383 3.60938V13.0007"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M12.1309 2.30435C12.1309 1.58398 12.7148 1 13.4352 1V1C14.1556 1 14.7396 1.58398 14.7396 2.30435V3.6087H13.4352C12.7148 3.6087 12.1309 3.02472 12.1309 2.30435V2.30435Z"
        :stroke="color1"
        stroke-width="1.5"
      />
      <path
        d="M17.3477 2.30435C17.3477 1.58398 16.7637 1 16.0433 1V1C15.3229 1 14.739 1.58398 14.739 2.30435V3.6087H16.0433C16.7637 3.6087 17.3477 3.02472 17.3477 2.30435V2.30435Z"
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
