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
        d="M20.1075 13.5033C20.1075 11.288 18.2829 9.49219 16.0323 9.49219C13.7816 9.49219 11.957 11.288 11.957 13.5033C11.957 15.7186 13.7816 17.5145 16.0323 17.5145C18.2829 17.5145 20.1075 15.7186 20.1075 13.5033Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.30078 24.808C9.43327 23.0338 10.6753 21.6445 12.184 21.6445H19.967C21.3728 21.6445 22.5448 22.848 22.8078 24.4474"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.0239 8.67346C10.8944 8.49587 10.7504 8.3291 10.5936 8.17478C9.85613 7.44888 8.83718 7 7.71187 7C6.58656 7 5.56777 7.44888 4.83027 8.17478C4.09293 8.90068 3.63672 9.90361 3.63672 11.0112C3.63672 12.1188 4.09293 13.1216 4.83027 13.8475C5.56777 14.5732 6.58656 15.0223 7.71187 15.0223C8.19222 15.0223 8.65326 14.9404 9.08135 14.7901"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 21.9513C1.26314 20.3519 2.43522 19.1484 3.84099 19.1484H11.0655"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.13672 14.7934V14.793"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.8919 14.7901C23.3198 14.9405 23.7809 15.0223 24.2612 15.0223C25.3865 15.0223 26.4053 14.5732 27.1428 13.8475C27.8803 13.1216 28.3365 12.1188 28.3365 11.0112C28.3365 9.90361 27.8803 8.90068 27.1428 8.17478C26.4053 7.44888 25.3865 7 24.2612 7C23.1359 7 22.117 7.44888 21.3795 8.17478C21.2228 8.3291 21.0787 8.49587 20.9492 8.67346"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.9492 19.1484H28.1739C29.5797 19.1484 30.7516 20.3519 31.0148 21.9513"
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
