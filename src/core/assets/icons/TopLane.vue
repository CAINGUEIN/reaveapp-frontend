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
        d="M4.0448 10.7532L2 12.7977V2H12.7989L10.7541 4.04457H4.0448V10.7532Z"
        :fill="color1"
      />
      <path
        d="M14.0013 3.20117V14H3.20117L5.24598 11.9555H11.9565V5.24575L14.0013 3.20117Z"
        :fill="color2"
      />
      <path d="M9.66951 6.33057H6.33008V9.67H9.66951V6.33057Z" :fill="color2" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 16,
    },
    height: {
      type: Number,
      default: 16,
    },
    color2: {
      type: String,
      default: "#808080",
    },
    color1: {
      type: String,
      default: "#E5E5E5",
    },
  },
};
</script>
