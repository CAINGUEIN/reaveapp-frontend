<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.50805 5.38231C5.25015 4.2709 6.49825 3.60352 7.83464 3.60352H16.1542C17.4905 3.60352 18.7387 4.2709 19.4808 5.38231L21.5819 8.52914C21.5864 8.53578 21.5816 8.54469 21.5736 8.54469H2.41519C2.4072 8.54469 2.40243 8.53579 2.40687 8.52914L4.50805 5.38231Z"
      :stroke="color1"
      stroke-width="1.5"
    />
    <path
      d="M2.39941 8.54883C2.3995 9.86648 2.76502 12.5018 5.44614 12.5018C8.12727 12.5018 8.79787 9.86648 8.79803 8.54883"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M8.79785 8.54883C8.79794 9.86648 9.16346 12.5018 11.8446 12.5018C14.5257 12.5018 15.1963 9.86648 15.1965 8.54883"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M15.2168 8.54883C15.2169 9.86648 15.5824 12.5018 18.2635 12.5018C20.9446 12.5018 21.6152 9.86648 21.6154 8.54883"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M3.4541 12.0059L3.4541 19.4059C3.4541 19.9581 3.90182 20.4059 4.4541 20.4059L19.5171 20.4059C20.0694 20.4059 20.5171 19.9581 20.5171 19.4059L20.5171 12.0059"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
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
