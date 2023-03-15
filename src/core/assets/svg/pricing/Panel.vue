<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.52148 21.7498V18.3086"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M8.96289 21.7501L8.96289 13.7207"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M14.8281 21.7497L14.8281 16.5879"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M21.291 21.7492L21.291 9.70508"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <ellipse
        cx="2.60866"
        cy="11.5801"
        rx="1.85866"
        ry="1.875"
        :stroke="color1"
        stroke-width="1.5"
      />
      <ellipse
        cx="9.06765"
        cy="6.41992"
        rx="1.85866"
        ry="1.875"
        :stroke="color1"
        stroke-width="1.5"
      />
      <ellipse
        cx="14.9368"
        cy="9.85938"
        rx="1.85866"
        ry="1.875"
        :stroke="color1"
        stroke-width="1.5"
      />
      <ellipse
        cx="21.3958"
        cy="4.125"
        rx="1.85866"
        ry="1.875"
        :stroke="color1"
        stroke-width="1.5"
      />
      <path
        d="M3.69336 10.2791L7.21504 6.83789"
        :stroke="color1"
        stroke-width="1.5"
      />
      <path
        d="M13.3698 8.55859L10.7285 6.83801"
        :stroke="color1"
        stroke-width="1.5"
      />
      <path
        d="M16.0215 8.56032L19.8366 5.11914"
        :stroke="color1"
        stroke-width="1.5"
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
      default: "#FFFFFF",
    },
    color2: {
      type: String,
      default: "#111111",
    },
  },
};
</script>
