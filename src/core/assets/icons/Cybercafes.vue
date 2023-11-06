<template>
  <div>
    <svg :width=width :height=height viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.575 15H19.0179C19.4912 15 19.875 15.3838 19.875 15.8571V15.8571C19.875 18.6975 17.5725 21 14.7321 21H9.26786C6.42754 21 4.125 18.6975 4.125 15.8571V15.8571C4.125 15.3838 4.50876 15 4.98214 15H10.425"
        stroke="white" stroke-width="1.5" />
      <path
        d="M4.125 11.2287C4.125 11.3234 4.20175 11.4001 4.29643 11.4001H19.7036C19.7982 11.4001 19.875 11.3234 19.875 11.2287V10.8751C19.875 6.52591 16.3492 3.00015 12 3.00015V3.00015C7.65076 3.00015 4.125 6.52591 4.125 10.8751V11.2287Z"
        stroke="white" stroke-width="1.5" />
      <path
        d="M10.425 14.9999H3.3C2.30589 14.9999 1.5 14.194 1.5 13.1999V13.1999C1.5 12.2058 2.30589 11.3999 3.3 11.3999H20.7C21.6941 11.3999 22.5 12.2058 22.5 13.1999V13.1999C22.5 14.194 21.6941 14.9999 20.7 14.9999H13.575"
        stroke="white" stroke-width="1.5" />
      <path d="M11.2468 15.9401L7.27441 11.4001H16.7244L12.752 15.9401C12.3536 16.3954 11.6452 16.3954 11.2468 15.9401Z"
        stroke="white" stroke-width="1.5" />
      <path d="M13.5 6.75H15" stroke="white" stroke-width="1.5" stroke-linecap="round" />
      <path d="M9 8.25H10.5" stroke="white" stroke-width="1.5" stroke-linecap="round" />
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
        default: "currentColor",
      },
      color2: {
        type: String,
        default: "#111111",
      },

    },
  };
</script>