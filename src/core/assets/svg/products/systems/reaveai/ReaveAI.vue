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
        d="M13.2524 11.9622C14.9991 11.9622 16.415 10.5221 16.415 8.74573C16.415 6.96934 14.9991 5.5293 13.2524 5.5293C11.5058 5.5293 10.0898 6.96934 10.0898 8.74573C10.0898 10.5221 11.5058 11.9622 13.2524 11.9622Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.2524 30.9993C14.9991 30.9993 16.415 29.5592 16.415 27.7828C16.415 26.0065 14.9991 24.5664 13.2524 24.5664C11.5058 24.5664 10.0898 26.0065 10.0898 27.7828C10.0898 29.5592 11.5058 30.9993 13.2524 30.9993Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.16258 22.3684C5.90922 22.3684 7.32516 20.9284 7.32516 19.152C7.32516 17.3756 5.90922 15.9355 4.16258 15.9355C2.41593 15.9355 1 17.3756 1 19.152C1 20.9284 2.41593 22.3684 4.16258 22.3684Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.0649 20.595C19.8116 20.595 21.2275 19.1549 21.2275 17.3785C21.2275 15.6022 19.8116 14.1621 18.0649 14.1621C16.3183 14.1621 14.9023 15.6022 14.9023 17.3785C14.9023 19.1549 16.3183 20.595 18.0649 20.595Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.5091 14.5809L14.8164 11.5449"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.9402 25.5894L6.47266 21.3477"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.9282 17.7793L7.30078 18.7515"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23.5063 7.43287C25.253 7.43287 26.6689 5.99282 26.6689 4.21644C26.6689 2.44005 25.253 1 23.5063 1C21.7597 1 20.3438 2.44005 20.3438 4.21644C20.3438 5.99282 21.7597 7.43287 23.5063 7.43287Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.3891 28.802C26.1358 28.802 27.5517 27.362 27.5517 25.5856C27.5517 23.8092 26.1358 22.3691 24.3891 22.3691C22.6425 22.3691 21.2266 23.8092 21.2266 25.5856C21.2266 27.362 22.6425 28.802 24.3891 28.802Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.8384 19.1516C29.585 19.1516 31.0009 17.7116 31.0009 15.9352C31.0009 14.1588 29.585 12.7188 27.8384 12.7188C26.0917 12.7188 24.6758 14.1588 24.6758 15.9352C24.6758 17.7116 26.0917 19.1516 27.8384 19.1516Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.7106 16.3984L21.1992 16.9175"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26.722 12.9247L24.6172 7.22852"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.4423 23.0531L20.0195 19.9102"
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
