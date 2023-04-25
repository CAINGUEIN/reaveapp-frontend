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
        d="M25.3892 9H18.5227H10.4748H8.54281H6.61079C5.16829 9 4 10.0819 4 11.4177V24.5823C4 25.9181 5.16829 27 6.61079 27H25.3892C26.8317 27 28 25.9181 28 24.5823V21.0463V15.407V11.4177C28 10.0819 26.8317 9 25.3892 9Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27 15.3486H23.3809C22.0654 15.3486 21 16.4997 21 17.9209V18.7763C21 20.1976 22.0654 21.3486 23.3809 21.3486H27"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18 9L13.9683 4.44292C13.446 3.85236 12.5955 3.85236 12.073 4.44292L8 9"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 6.75169L18.0454 4.44279C18.5702 3.8524 19.4247 3.8524 19.9496 4.44279L24 9"
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
