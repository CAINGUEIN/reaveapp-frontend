<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.04481 10.7532L2 12.7977V2H12.7989L10.7541 4.04457H4.04481V10.7532Z"
        :fill="color2"
      />
      <path
        d="M13.9993 3.20117V14H3.19922L5.24402 11.9555H11.9545V5.24575L13.9993 3.20117Z"
        :fill="color1"
      />
      <path d="M9.67146 6.33057H6.33203V9.67H9.67146V6.33057Z" :fill="color2" />
    </svg>
  </div>
</template>

<script>
  export default {
    props: {
      width: {
        type: Number,
        default: 16
      },
      height: {
        type: Number,
        default: 16
      },
    color1: {
      type: String,
      default: "#808080",
    },
    color2: {
      type: String,
      default: "#E5E5E5",
    },
    },
  }
</script>