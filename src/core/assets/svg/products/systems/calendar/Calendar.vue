<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2.75"
        y="3.86285"
        width="18.4981"
        height="17.3871"
        rx="2.25"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        d="M2.27289 9.15863H21.7155"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        d="M2.27289 15.1768H21.7155"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <rect
        x="7.76602"
        y="2.36305"
        width="0.726109"
        height="3.11968"
        rx="0.363054"
        fill="#BEBEBE"
        :stroke="color1"
        stroke-width="0.726109"
        stroke-linejoin="round"
      />
      <rect
        x="15.5385"
        y="2.36391"
        width="0.726109"
        height="3.11968"
        rx="0.363054"
        fill="#BEBEBE"
        :stroke="color1"
        stroke-width="0.726109"
        stroke-linejoin="round"
      />
      <path d="M8.34903 9.26984V21.0872" :stroke="color1" stroke-width="1.5" />
      <path d="M15.5929 9.26984V21.0872" :stroke="color1" stroke-width="1.5" />
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
