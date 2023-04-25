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
        d="M22.4621 4.10681L16.9621 1.2408C16.6725 1.0899 16.3275 1.0899 16.0379 1.2408L10.5379 4.10681C10.2073 4.27906 10 4.62088 10 4.99363V12.0064C10 12.3791 10.2073 12.7209 10.5379 12.8932L16.0379 15.7592C16.3275 15.9101 16.6725 15.9101 16.9621 15.7592L22.4621 12.8932C22.7927 12.7209 23 12.3791 23 12.0064V4.99363C23 4.62088 22.7927 4.27906 22.4621 4.10681Z"
        :stroke="color1"
        stroke-width="2"
      />
      <path d="M16.5 15.9992V7.77344" :stroke="color1" stroke-width="2" />
      <path
        d="M10 4.38281L16.5 7.76991L23 4.38281"
        :stroke="color1"
        stroke-width="2"
      />
      <path
        d="M13.4621 19.1068L7.96211 16.2408C7.67252 16.0899 7.32748 16.0899 7.03789 16.2408L1.53789 19.1068C1.20732 19.2791 1 19.6209 1 19.9936V27.0064C1 27.3791 1.20732 27.7209 1.53789 27.8932L7.03789 30.7592C7.32748 30.9101 7.67252 30.9101 7.96211 30.7592L13.4621 27.8932C13.7927 27.7209 14 27.3791 14 27.0064V19.9936C14 19.6209 13.7927 19.2791 13.4621 19.1068Z"
        :stroke="color1"
        stroke-width="2"
      />
      <path d="M7.5 30.9992V22.7734" :stroke="color1" stroke-width="2" />
      <path
        d="M1 19.3828L7.5 22.7699L14 19.3828"
        :stroke="color1"
        stroke-width="2"
      />
      <path
        d="M30.4621 19.1068L24.9621 16.2408C24.6725 16.0899 24.3275 16.0899 24.0379 16.2408L18.5379 19.1068C18.2073 19.2791 18 19.6209 18 19.9936V27.0064C18 27.3791 18.2073 27.7209 18.5379 27.8932L24.0379 30.7592C24.3275 30.9101 24.6725 30.9101 24.9621 30.7592L30.4621 27.8932C30.7927 27.7209 31 27.3791 31 27.0064V19.9936C31 19.6209 30.7927 19.2791 30.4621 19.1068Z"
        :stroke="color1"
        stroke-width="2"
      />
      <path d="M24.5 30.9992V22.7734" :stroke="color1" stroke-width="2" />
      <path
        d="M18 19.3828L24.5 22.7699L31 19.3828"
        :stroke="color1"
        stroke-width="2"
      />
      <path
        d="M11 26C15.2898 28.6694 17.5109 28.5121 21.5 26"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M10 10C8.66667 10.6667 6 12 6 16"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M20 9.5C21.3333 10.1667 26.5 13 26.5 17"
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
      default: "currentColor",
    },
    color2: {
      type: String,
      default: "#111111",
    },
  },
};
</script>
