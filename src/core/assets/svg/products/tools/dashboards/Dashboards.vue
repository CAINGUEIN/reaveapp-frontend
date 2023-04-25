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
        d="M29.286 6.86581C29.5668 7.02702 29.5668 7.43444 29.286 7.59546L23.6502 10.8287L13.6737 16.5519C13.5457 16.6253 13.3886 16.6253 13.2604 16.5519L8.77008 13.976L3.13251 10.7412C2.85166 10.58 2.85166 10.1725 3.13251 10.0115L18.745 1.05512C18.873 0.981627 19.0301 0.981627 19.1583 1.05512L29.2862 6.866L29.286 6.86581Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29.2894 14.0616C29.5702 14.2228 29.5702 14.6303 29.2894 14.7913L23.652 18.0245L13.4706 23.8662L8.77209 21.1718L2.5 17.5736L8.56678 14.094C8.69481 14.0205 8.85189 14.0205 8.97992 14.094L13.4703 16.6699L23.4467 10.9467C23.5747 10.8732 23.7318 10.8732 23.86 10.9467L29.2892 14.0614L29.2894 14.0616Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29.286 21.9887L13.6737 30.9451C13.5457 31.0186 13.3886 31.0186 13.2604 30.9451L3.13251 25.1342C2.85166 24.973 2.85166 24.5656 3.13251 24.4046L8.56186 21.2899C8.68989 21.2164 8.84697 21.2164 8.975 21.2899L13.4671 23.866L23.4418 18.143C23.5698 18.0695 23.7271 18.0695 23.8551 18.143L29.286 21.2593C29.5668 21.4205 29.5668 21.8279 29.286 21.9889V21.9887Z"
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
