<template>
  <div>
    <svg :width=width :height=height viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.40833 6.53571H5.76786C4.7915 6.53571 4 5.74422 4 4.76786V4.66514C4 3.74551 4.74551 3 5.66514 3V3V3C6.62788 3 7.40833 3.78045 7.40833 4.74319V6.53571ZM7.40833 6.53571V18.9292C7.40833 20.0729 8.33545 21 9.47911 21H9.79542C10.7644 21 11.5499 20.2145 11.5499 19.2455V19.2455V19.0805C11.5499 18.2027 10.8383 17.4911 9.96044 17.4911V17.4911"
        stroke="white" stroke-width="1.5" />
      <path
        d="M9.56152 21.0001H18.2318C19.2082 21.0001 19.9997 20.2086 19.9997 19.2322V19.2322C19.9997 18.2559 19.2082 17.4644 18.2318 17.4644L9.95889 17.4644"
        stroke="white" stroke-width="1.5" stroke-linecap="round" />
      <path d="M18.5977 17.4643V5C18.5977 3.89543 17.7023 3 16.5977 3L5.69287 3" stroke="white" stroke-width="1.5" />
      <path d="M10.1113 13H13.0448" stroke="white" stroke-width="1.5" stroke-linecap="round" />
      <path d="M10.1113 10H15.9783" stroke="white" stroke-width="1.5" stroke-linecap="round" />
      <path d="M10.1113 7H15.9783" stroke="white" stroke-width="1.5" stroke-linecap="round" />
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