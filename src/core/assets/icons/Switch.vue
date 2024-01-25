<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.5 9.6087C14.5 8.16795 13.3807 7 12 7C10.6193 7 9.5 8.16795 9.5 9.6087C9.5 11.0494 10.6193 12.2174 12 12.2174C13.3807 12.2174 14.5 11.0494 14.5 9.6087Z"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 17C7 15.6957 7.83333 14.8261 9.13464 14.8261H14.8968C16.1667 14.8261 17 15.6957 17 17"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.6783 18.7592C19.2223 20.6286 17.2015 21.9779 14.9168 22.6062C12.632 23.2346 10.2055 23.1083 7.9983 22.2463C5.79111 21.3843 3.92127 19.8325 2.66711 17.8221C1.41294 15.8117 0.841502 13.45 1.03783 11.0886C1.23417 8.72718 2.18778 6.49229 3.75673 4.71658C5.32568 2.94086 7.4261 1.71924 9.74534 1.23356C12.0646 0.747871 14.4787 1.02408 16.6283 2.02107C18.7779 3.01807 20.5481 4.68254 21.6754 6.76676M23 3.29167L21.857 6.63654C21.8321 6.76063 21.7113 6.84104 21.5872 6.81613L17.7926 6.05454"
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
      default: 32,
    },
    height: {
      type: Number,
      default: 32,
    },
    color2: {
      type: String,
      default: "#000000",
    },
    color1: {
      type: String,
      default: "currentColor",
    },
  },
};
</script>
