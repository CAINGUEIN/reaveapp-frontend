<template>
  <div>
    <svg :width=width :height=height viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.19952 5.5845C2.19952 5.5845 2.70975 7.37944 7.86078 8.04208C8.61798 8.1393 9.34708 8.42051 9.94604 8.89916C10.6958 9.50046 11.4471 10.5146 11.4471 12.1645C11.4471 12.1645 11.1617 16.5965 7.43781 16.5965C7.43781 16.5965 1.5 16.5965 1.5 9.28358C1.5 9.28358 1.56507 6.69138 2.201 5.58301L2.19952 5.5845Z"
        stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
      <path
        d="M21.8573 3.75C21.8573 3.75 22.5001 5.39046 22.5001 6.68988C22.5001 7.9893 21.4887 12.4249 17.5375 12.4249C13.5863 12.4249 13.8281 8.72071 13.8281 8.72071C13.8281 8.72071 14.0525 5.56919 17.698 5.56919C21.3435 5.56919 21.8573 3.75 21.8573 3.75Z"
        stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
      <path d="M12.4531 20.6427C12.4531 14.6173 15.1926 11.9678 15.1926 11.9678" stroke="white" stroke-width="1.5"
        stroke-miterlimit="10" stroke-linejoin="round" />
      <path d="M10.6309 14.7085C10.6309 14.7085 12.6854 16.4649 12.6854 17.9045" stroke="white" stroke-width="1.5"
        stroke-miterlimit="10" stroke-linejoin="round" />
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