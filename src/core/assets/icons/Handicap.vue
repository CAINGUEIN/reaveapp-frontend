<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.76953 2.74658V2.74658C4.30714 2.74658 5.55362 3.99306 5.55362 5.53068V8.37158"
        :stroke="color1"
        stroke-linecap="round"
      />
      <path d="M12.3125 6.3252H5.75" :stroke="color1" stroke-linecap="round" />
      <path
        d="M10.7344 6.3252V9.10929"
        :stroke="color1"
        stroke-linecap="round"
      />
      <path
        d="M8.86719 9.30957H9.03996C11.1825 9.30957 13.0375 10.7976 13.5023 12.8891V12.8891L13.7392 14.0739C13.8327 14.5413 14.2431 14.8778 14.7198 14.8778H15.8886"
        :stroke="color1"
        stroke-linecap="round"
      />
      <path
        d="M13.5206 13.2871L9.74219 13.2871"
        :stroke="color1"
        stroke-linecap="round"
      />
      <circle cx="6.34872" cy="11.837" r="1.59091" :stroke="color1" />
      <circle cx="6.34908" cy="11.9511" r="3.57955" :stroke="color1" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 18,
    },
    height: {
      type: Number,
      default: 18,
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
