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
        d="M16.4043 30.6014V22.0639L26.2979 16.9575V26.0561C26.2979 26.1519 26.2431 26.2394 26.1568 26.2811L16.7632 30.8264C16.5972 30.9067 16.4043 30.7858 16.4043 30.6014Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M16.4043 31L3.00004 24.2979"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M3 15.6809V24.2979"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M3 15.6808L11.7656 11.2981C12.4305 10.9656 13.2128 11.4491 13.2128 12.1925V20.4681"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M3 15.6809L7.46809 17.8605M16.0851 22.0639L11 19.5002"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M5.87305 6.42554L25.9794 16.9575"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M18.957 13.1276C20.7655 10.6807 25.0209 6.55304 27.5741 8.34028"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M5.55273 6.22326C7.36125 3.77645 11.6166 -0.351255 14.1698 1.43598"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M25.6602 17.2765C28.1239 15.4912 29.8091 10.2552 27.575 8.34033"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M13.8516 1.31909L27.575 8.34037"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M9.59386 21.375L8.59386 20.9306C8.23273 20.7701 8 20.412 8 20.0168V17.5388C8 16.8151 8.74485 16.331 9.40614 16.625L10.4061 17.0694C10.7673 17.2299 11 17.588 11 17.9832V20.4612C11 21.1849 10.2551 21.669 9.59386 21.375Z"
        :stroke="color1"
        stroke-width="2"
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
