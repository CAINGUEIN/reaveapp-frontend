<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 9 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect
          y="10.6414"
          width="10.6413"
          height="6.42554"
          rx="2.00002"
          transform="rotate(-90 0 10.6414)"
          :fill="color1"
        />
        <rect
          x="7.22754"
          y="9.82202"
          width="9.00421"
          height="1.60639"
          rx="0.803193"
          transform="rotate(-90 7.22754 9.82202)"
          :fill="color1"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 9,
    },
    height: {
      type: Number,
      default: 11,
    },
    color2: {
      type: String,
      default: "#000000",
    },
    color1: {
      type: String,
      default: "#FFFFFF",
    },
  },
};
</script>
