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
        d="M16.6916 21.4626L23.774 26.9184C23.9996 27.0913 24.3429 26.9761 24.4018 26.6975L28.9926 4.46094C29.0515 4.16317 28.7474 3.91343 28.4629 4.0287L3.24278 14.0087C2.91907 14.1336 2.91907 14.5851 3.24278 14.7195L8.84399 17.0152C8.94208 17.0537 9.01075 17.1305 9.04999 17.2266L12.2871 24.9397C12.395 25.1895 12.7187 25.2567 12.9247 25.0646L16.358 21.7795C16.5248 21.6162 16.515 21.3473 16.3286 21.2032L13.4152 18.9651C13.2288 18.8211 13.219 18.5425 13.3858 18.3888L20.8606 11.5401"
        :stroke="color1"
        stroke-width="2.36"
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
