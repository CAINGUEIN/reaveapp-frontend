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
        d="M15.1499 12.6036C15.4448 11.576 16.901 11.576 17.1959 12.6036V12.6036C17.3306 13.0731 17.7676 13.3906 18.2557 13.3736V13.3736C19.3242 13.3366 19.7741 14.7214 18.888 15.3195V15.3195C18.4831 15.5927 18.3162 16.1064 18.4831 16.5654V16.5654C18.8486 17.5701 17.6705 18.426 16.8279 17.768V17.768C16.443 17.4674 15.9028 17.4674 15.5179 17.768V17.768C14.6753 18.426 13.4972 17.5701 13.8626 16.5654V16.5654C14.0296 16.1064 13.8627 15.5927 13.4578 15.3195V15.3195C12.5716 14.7214 13.0216 13.3366 14.09 13.3736V13.3736C14.5782 13.3906 15.0152 13.0731 15.1499 12.6036V12.6036Z"
        :stroke="color1"
        stroke-width="2"
      />
      <ellipse
        cx="9.73539"
        cy="6.60326"
        rx="2.08696"
        ry="3.47826"
        :stroke="color1"
        stroke-width="2"
      />
      <ellipse
        cx="6.50385"
        cy="19.5823"
        rx="2.27009"
        ry="3.40513"
        transform="rotate(-96.2739 6.50385 19.5823)"
        :stroke="color1"
        stroke-width="2"
      />
      <ellipse
        cx="11.2829"
        cy="25.0178"
        rx="2.27009"
        ry="3.40513"
        transform="rotate(-142.566 11.2829 25.0178)"
        :stroke="color1"
        stroke-width="2"
      />
      <ellipse
        cx="5.79889"
        cy="12.3685"
        rx="2.27009"
        ry="3.40513"
        transform="rotate(129.919 5.79889 12.3685)"
        :stroke="color1"
        stroke-width="2"
      />
      <ellipse
        cx="2.08696"
        cy="3.47826"
        rx="2.08696"
        ry="3.47826"
        transform="matrix(-1 0 0 1 24.3438 3.125)"
        :stroke="color1"
        stroke-width="2"
      />
      <ellipse
        cx="2.27009"
        cy="3.40513"
        rx="2.27009"
        ry="3.40513"
        transform="matrix(0.109281 -0.994011 -0.994011 -0.109281 28.625 22.2109)"
        :stroke="color1"
        stroke-width="2"
      />
      <ellipse
        cx="2.27009"
        cy="3.40513"
        rx="2.27009"
        ry="3.40513"
        transform="matrix(0.794051 -0.607851 -0.607851 -0.794051 20.9766 29.1016)"
        :stroke="color1"
        stroke-width="2"
      />
      <ellipse
        cx="2.27009"
        cy="3.40513"
        rx="2.27009"
        ry="3.40513"
        transform="matrix(0.641699 0.766957 0.766957 -0.641699 22.1172 12.8125)"
        :stroke="color1"
        stroke-width="2"
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
      default: "#FFFFFF",
    },
    color2: {
      type: String,
      default: "#111111",
    },
  },
};
</script>
