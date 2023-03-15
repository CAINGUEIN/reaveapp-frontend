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
        d="M22.2917 18.2754L22.6331 23.698C22.6542 24.0322 22.5424 24.3422 22.3219 24.5617L18.1778 28.6877C17.4285 29.4337 16.0077 28.7661 15.9259 27.63L15.7266 24.8573"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.7272 9.70208L8.30483 9.36964C7.97066 9.34911 7.66067 9.45799 7.44121 9.67263L3.31542 13.7079C2.56948 14.4375 3.23697 15.821 4.37306 15.9006L7.14563 16.0947"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25.8381 14.3233L16.4737 23.6882C14.1353 26.0267 10.5814 26.2636 8.53542 24.2178L7.78058 23.4629C5.73463 21.4168 5.97173 17.8627 8.31011 15.5242L17.6724 6.16103C18.7921 5.04133 20.2128 4.28961 21.6991 4.03019L27.4684 3.02348C28.4031 2.85748 29.1396 3.59385 28.9781 4.53324L27.968 10.3007C27.708 11.7856 26.9565 13.2047 25.8379 14.3233H25.8381Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.2604 13.6309L4.9707 26.921"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.6621 5.31836L26.5451 13.2017"
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
      default: "#FFFFFF",
    },
    color2: {
      type: String,
      default: "#111111",
    },
  },
};
</script>
