<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.96358 10.2715L2.94268 11.3347C2.24144 12.0831 2.38939 13.4115 3.27253 14.2976L5.72195 16.7552C6.16482 17.1996 6.70705 17.4497 7.22607 17.4924C8.04934 17.564 8.50914 17.0953 8.59385 17.0049C9.84459 15.6129 10.3124 15.9628 10.7514 15.7541"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.5681 6.7196L13.1482 3.36784C11.9413 2.18496 10.0142 2.21505 8.84415 3.43508L8.02967 4.33139C7.73702 4.63637 7.74451 5.12342 8.04626 5.41908L8.87268 6.22907C8.35149 5.72013 7.69776 5.43794 7.02591 5.37789C6.14222 5.2992 5.23489 5.6099 4.57269 6.30024L4.48527 6.39138C3.82058 7.08441 3.54138 8.0108 3.6466 8.90127C3.72957 9.57712 4.03003 10.2306 4.55187 10.742L8.78037 14.8863C9.98773 16.0696 11.9139 16.0394 13.0845 14.819L14.0723 13.7892L16.6347 11.0703C17.8049 9.85033 17.7752 7.90248 16.5682 6.7196H16.5681Z"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.54688 8.44847L7.87029 9.77637C8.45992 10.368 9.31053 10.4492 9.77097 9.95777L10.1918 9.45422C10.6877 8.86244 10.5396 7.86051 9.8572 7.19251L9.71511 7.05343L8.88251 6.23828"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.96094 9.77539L13.1541 12.8172C13.6279 13.2685 14.6281 13.2413 15.0779 12.7648"
        :stroke="color1"
        stroke-width="1.25"
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
      default: 20,
    },
    height: {
      type: Number,
      default: 20,
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
