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
        d="M19.8008 11.6934H2.19922C1.53691 11.6934 1 12.2779 1 12.9989V26.6949C1 27.4159 1.53691 28.0004 2.19922 28.0004H19.8008C20.4631 28.0004 21.0001 27.4159 21.0001 26.6949V12.9989C21.0001 12.2779 20.4631 11.6934 19.8008 11.6934Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M31.0001 5.30554V19.0015C31.0001 19.7225 30.4631 20.307 29.8008 20.307H22.1993C21.537 20.307 21.0001 19.7225 21.0001 19.0015V12.9985C21.0001 12.2775 20.4632 11.693 19.8009 11.693H12.1992C11.5369 11.693 11 11.1084 11 10.3874V5.30554C11 4.58454 11.5369 4 12.1992 4H29.8008C30.4631 4 31.0001 4.58454 31.0001 5.30554V5.30554Z"
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
      default: "currentColor",
    },
    color2: {
      type: String,
      default: "#111111",
    },
  },
};
</script>
