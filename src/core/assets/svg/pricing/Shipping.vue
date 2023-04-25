<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="5.82465"
        cy="15.5571"
        rx="1.52778"
        ry="1.52778"
        :stroke="color1"
        stroke-width="1.25"
      />
      <ellipse
        cx="15.0024"
        cy="15.5571"
        rx="1.52778"
        ry="1.52778"
        :stroke="color1"
        stroke-width="1.25"
      />
      <path d="M7.36523 15.5566H13.4763" :stroke="color1" stroke-width="1.25" />
      <path
        d="M16.5191 15.5597H17.1927C18.2973 15.5597 19.1927 14.6642 19.1927 13.5597V9.15681C19.1927 8.84632 19.1204 8.5401 18.9816 8.26239L17.5594 5.41802C17.39 5.07924 17.0437 4.86523 16.665 4.86523H12.8906"
        :stroke="color1"
        stroke-width="1.25"
      />
      <path
        d="M1.80469 11.9297V13.5582C1.80469 14.6627 2.70012 15.5582 3.80469 15.5582H4.28733"
        :stroke="color1"
        stroke-width="1.25"
      />
      <path
        d="M18.4193 7.53906H16.5547C16.0024 7.53906 15.5547 7.98678 15.5547 8.53906V9.97656C15.5547 10.5288 16.0024 10.9766 16.5547 10.9766H18.9922"
        :stroke="color1"
        stroke-width="1.25"
      />
      <rect
        x="0.859375"
        y="3.33594"
        width="12.2222"
        height="8.78472"
        rx="1"
        :stroke="color1"
        stroke-width="1.25"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 20,
    },
    height: {
      type: Number,
      default: 20,
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
