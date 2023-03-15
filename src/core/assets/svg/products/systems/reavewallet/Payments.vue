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
        d="M11.6934 2C17.114 4.22524 21.8029 8.12086 24.7991 13.4085C27.7953 18.6961 28.6185 24.5284 27.5592 30M4 13.0971C6.56669 15.1292 8.76928 17.6493 10.442 20.6013C12.1147 23.5533 13.1106 26.6779 13.4726 29.8145M7.8384 7.55847C11.7034 9.84822 15.0075 13.0888 17.3112 17.1544C19.6149 21.2199 20.6324 25.6061 20.4977 29.8996"
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
