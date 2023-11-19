<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="15.8795"
      cy="6.68252"
      r="5.93252"
      :stroke="color1"
      stroke-width="1.5"
    />
    <path
      d="M11.391 10.896C10.5441 12.3601 8.96115 13.3451 7.14815 13.3451C4.44298 13.3451 2.25 11.1521 2.25 8.44698C2.25 5.7418 4.44298 3.54883 7.14815 3.54883C8.34716 3.54883 9.44554 3.97964 10.297 4.69491"
      :stroke="color1"
      stroke-width="1.5"
    />
    <path
      d="M8.66434 14.0449L9.11669 14.9576C9.1852 15.0959 9.11329 15.263 8.9633 15.2991C7.94071 15.545 6.9407 15.437 6.07109 15.2818C5.9086 15.2528 5.82114 15.0755 5.89444 14.9276L6.33189 14.0449"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M17.278 13.0991L17.8845 14.6288C17.9358 14.7582 17.8715 14.9053 17.739 14.9483C16.4341 15.372 15.1557 15.182 14.0589 14.9302C13.9109 14.8962 13.8293 14.7379 13.8853 14.5967L14.479 13.0991"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M7.38699 21.6443L6.58765 19.2484C6.47357 18.9062 6.47393 18.4498 6.81622 17.9935C7.12236 17.5853 8.18586 17.0808 7.8436 15.5977"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M17.8231 22.2626V22.2626C17.2463 21.5927 16.7606 20.715 17.1504 19.9216C17.3617 19.4915 17.6446 19.1732 17.6858 18.8159C17.8231 17.625 15.7559 16.875 15.7559 15.2537"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M13.7489 3.30273C12.9334 4.02528 11.6286 6.08645 12.9334 8.55073"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M4.63086 7.04785C4.17443 8.18872 4.28823 9.10142 4.85941 9.90002"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M14.6019 10.303L14.1455 9.84668"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
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
