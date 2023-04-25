<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
    <rect x="4" y="4" width="5" height="5" rx="2" stroke="#808080" stroke-width="1.5"/>
<rect x="15" y="5.5" width="5" height="3" rx="1.5" stroke="#808080" stroke-width="1.5"/>
<rect x="15" y="11.5" width="5" height="3" rx="1.5" stroke="#808080" stroke-width="1.5"/>
<rect x="15" y="17.5" width="5" height="3" rx="1.5" stroke="#808080" stroke-width="1.5"/>
<path d="M9 6.5H15" stroke="#808080" stroke-width="1.5"/>
<path d="M12 13L15 13" stroke="#808080" stroke-width="1.5"/>
<path d="M12 6.5V18C12 18.5523 12.4477 19 13 19H13.5H15" stroke="#808080" stroke-width="1.5"/>
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
      default: 24,
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
