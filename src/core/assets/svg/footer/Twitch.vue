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
        d="M0 5.56664V27.8253H7.99825V32H12.3653L16.7255 27.824H23.2713L32 19.48V0H2.18004L0 5.56664ZM5.08919 2.78H29.0909V18.0853L23.999 22.9546H15.998L11.6378 27.1239V22.9546H5.08919V2.78Z"
        :fill="color1"
      />
      <path
        d="M12.3945 8.34961H15.3022V16.6963H12.3945V8.34961Z"
        :fill="color1"
      />
      <path
        d="M20.3945 8.34961H23.3036V16.6963H20.3945V8.34961Z"
        :fill="color1"
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
