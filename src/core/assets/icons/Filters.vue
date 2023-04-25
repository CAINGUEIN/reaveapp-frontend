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
        d="M20.9957 5.25H17.9961"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.4986 5.25H3"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.0025 12H10.5039"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.99961 12H3"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.9957 18.75H17.9961"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.4986 18.75H3"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.24189 14.25C9.48437 14.25 10.4916 13.2427 10.4916 12C10.4916 10.7574 9.48437 9.75 8.24189 9.75C6.99942 9.75 5.99219 10.7574 5.99219 12C5.99219 13.2427 6.99942 14.25 8.24189 14.25Z"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.7458 7.50003C16.9883 7.50003 17.9955 6.49266 17.9955 5.25002C17.9955 4.00737 16.9883 3 15.7458 3C14.5033 3 13.4961 4.00737 13.4961 5.25002C13.4961 6.49266 14.5033 7.50003 15.7458 7.50003Z"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.7458 21C16.9883 21 17.9955 19.9927 17.9955 18.75C17.9955 17.5074 16.9883 16.5 15.7458 16.5C14.5033 16.5 13.4961 17.5074 13.4961 18.75C13.4961 19.9927 14.5033 21 15.7458 21Z"
        :stroke="color1"
        stroke-width="1.5"
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
      default: 33,
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
