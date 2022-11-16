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
        d="M22.2897 18.2715L22.6311 23.6941C22.6522 24.0283 22.5404 24.3383 22.32 24.5578L18.1758 28.6838C17.4265 29.4297 16.0057 28.7622 15.924 27.6261L15.7246 24.8534"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.7272 9.70013L8.30483 9.36769C7.97067 9.34716 7.66067 9.45604 7.44121 9.67068L3.31542 13.706C2.56948 14.4356 3.23697 15.819 4.37306 15.8987L7.14564 16.0928"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25.8381 14.3233L16.4737 23.6882C14.1353 26.0267 10.5814 26.2636 8.53543 24.2178L7.78058 23.4629C5.73463 21.4168 5.97173 17.8627 8.31011 15.5242L17.6724 6.16103C18.7921 5.04133 20.2128 4.28961 21.6991 4.0302L27.4684 3.02348C28.4031 2.85748 29.1396 3.59385 28.9781 4.53324L27.968 10.3007C27.708 11.7856 26.9565 13.2047 25.8379 14.3233H25.8381Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.2604 13.6328L4.9707 26.9229"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.6621 5.32031L26.5451 13.2036"
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
    color2: {
      type: String,
      default: "#000000",
    },
    color1: {
      type: String,
      default: "#FFFFFF",
    },
  },
};
</script>
