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
        d="M19.8172 7.77833C19.8172 5.69162 18.1092 4 16.0023 4C13.8955 4 12.1875 5.69162 12.1875 7.77833V14.4736C12.1875 16.5603 13.8955 18.252 16.0023 18.252C18.1092 18.252 19.8172 16.5603 19.8172 14.4736V7.77833Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24 13.3439V14.4532C24 18.8291 20.4184 22.3765 15.9999 22.3765C11.5814 22.3765 8 18.8289 8 14.453V13.3438"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 22.375V27.0015"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.7344 27H20.276"
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
