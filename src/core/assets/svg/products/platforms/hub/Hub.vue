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
        d="M18.6401 4.97868C18.6401 4.97868 13.2396 -5.67247 10.5547 13.3074"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.2787 14.5713C27.2787 14.5713 35.3846 5.72201 16.4062 10.2668"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23.0523 24.8592C23.0523 24.8592 34.9866 26.9814 21.082 13.5273"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.9023 26.7425C11.9023 26.7425 16.333 37.8141 20.7024 19.1445"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.41506 18.4219C4.41506 18.4219 -2.87409 27.9318 15.6346 21.7754"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.71143 7.80575C7.71143 7.80575 -4.3657 6.72461 10.6924 18.9274"
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
