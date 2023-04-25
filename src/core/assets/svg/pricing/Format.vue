<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="4.6875"
        cy="18.4231"
        rx="2.4375"
        ry="2.5715"
        :stroke="color1"
        stroke-width="1.5"
      />
      <ellipse
        cx="12"
        cy="18.4231"
        rx="2.4375"
        ry="2.5715"
        :stroke="color1"
        stroke-width="1.5"
      />
      <ellipse
        cx="11.9707"
        cy="5.5715"
        rx="3.65625"
        ry="2.5715"
        :stroke="color1"
        stroke-width="1.5"
      />
      <ellipse
        cx="19.3125"
        cy="18.4231"
        rx="2.4375"
        ry="2.5715"
        :stroke="color1"
        stroke-width="1.5"
      />
      <path
        d="M12 8.14844V15.8629"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M4.6875 15.8553V12.998C4.6875 12.4458 5.13522 11.998 5.6875 11.998H18.3125C18.8648 11.998 19.3125 12.4458 19.3125 12.998V15.8553"
        :stroke="color1"
        stroke-width="1.5"
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
      default: 24,
    },
    height: {
      type: Number,
      default: 24,
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
