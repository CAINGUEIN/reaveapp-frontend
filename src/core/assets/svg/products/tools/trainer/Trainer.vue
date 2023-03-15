<template>
  <div>
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 25.791H5.77612"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M1 31.5215H10.5522"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M19.0544 29.4907L2.56808 12.5837C2.20386 12.2102 2 11.7091 2 11.1874V9.02872C2 8.43832 2.26086 7.87808 2.71271 7.49807L10.0637 1.31585L9.42002 0.550527L10.0637 1.31585C10.3062 1.11185 10.613 1 10.93 1C11.7044 1 12.319 1.65188 12.2735 2.42494L12.1885 3.87056C12.0278 6.6029 14.6146 8.67269 17.2558 7.63291C17.6256 7.4873 17.9928 7.34156 18.3526 7.19874C18.9628 6.95652 19.5519 6.72267 20.0975 6.512C20.7438 6.26242 21.0782 6.3654 21.2775 6.50189C21.5328 6.67675 21.825 7.08436 22.0291 7.87443C22.8191 10.9315 24.3288 15.1235 25.2794 17.3256C25.3848 17.5696 25.5141 17.7959 25.6603 18.0048L31.6385 26.545C31.8738 26.8812 32 27.2816 32 27.6919V29C32 30.1046 31.1046 31 30 31H22.6342C21.2862 31 19.9954 30.4558 19.0544 29.4907Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M3.38672 7.64258L20.1677 25.7842C20.7355 26.398 21.5338 26.7471 22.37 26.7471H30.6106"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M16.2852 13.3732L22.0165 12.418"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M19.1484 17.1935L23.9246 16.2383"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
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
