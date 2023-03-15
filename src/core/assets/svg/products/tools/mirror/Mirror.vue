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
        d="M10.8031 5H7.56875C5.975 5 4.5875 6.05044 4.18438 7.55106L2 15.7107V24.0767C2 25.9712 3.56563 27.5 5.49688 27.5H10.6156C12.5469 27.5 14.1125 25.9619 14.1125 24.0767V22.1446C14.1125 21.8258 14.375 21.5725 14.6938 21.5725H17.4031C17.7219 21.5725 17.9844 21.8258 17.9844 22.1446V24.0767C17.9844 25.9712 19.55 27.5 21.4813 27.5H26.6C28.5313 27.5 30.0969 25.9619 30.0969 24.0767V15.7107L27.9031 7.55106C27.5 6.04106 26.1031 5 24.5188 5H21.2844"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2 15.7109H30.125"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.2531 15.8047V18.3933C10.2531 19.4156 9.29687 20.2409 8.11562 20.2409H2.125"
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
