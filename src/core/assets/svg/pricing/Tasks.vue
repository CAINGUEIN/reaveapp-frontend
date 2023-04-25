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
        d="M16.5882 12.996V13.0955C16.5882 16.0978 14.1718 18.525 11.1898 18.525C8.20776 18.525 5.79688 16.0978 5.79688 13.0955C5.79688 10.0933 8.1803 7.69919 11.1294 7.66602"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.0852 3.39062H11.0248C5.79665 3.39062 1.5625 7.65903 1.5625 12.9171C1.5625 18.1752 5.79665 22.4437 11.0248 22.4437C16.253 22.4437 20.4816 18.1808 20.4816 12.9171"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.0156 12.9598L13.9043 10.1289"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.4654 5.94083L19.5987 8.89886L18.5059 10.0323L15.6776 10.0655L13.9093 10.0876L13.8489 8.36807L13.75 5.50956L15.0515 4.29871L18.0006 1.55078C18.0061 1.9157 18.0775 3.29242 19.1374 4.47564C20.428 5.91318 22.1799 5.94083 22.4654 5.94083Z"
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
