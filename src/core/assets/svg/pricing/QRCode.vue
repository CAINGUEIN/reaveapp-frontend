<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4.7207"
        y="4.71484"
        width="3.92046"
        height="3.92046"
        :stroke="color1"
        stroke-width="1.25"
      />
      <rect
        x="4.7207"
        y="11.3633"
        width="3.92046"
        height="3.92046"
        :stroke="color1"
        stroke-width="1.25"
      />
      <rect
        x="11.3496"
        y="4.71289"
        width="3.92046"
        height="3.92046"
        :stroke="color1"
        stroke-width="1.25"
      />
      <rect
        x="10.9977"
        y="11.0153"
        width="0.553977"
        height="0.553977"
        :stroke="color1"
        stroke-width="0.553977"
      />
      <rect
        x="13.0289"
        y="11.0153"
        width="0.553977"
        height="0.553977"
        :stroke="color1"
        stroke-width="0.553977"
      />
      <rect
        x="10.9977"
        y="13.0465"
        width="0.553977"
        height="0.553977"
        :stroke="color1"
        stroke-width="0.553977"
      />
      <rect
        x="10.9977"
        y="15.0778"
        width="0.553977"
        height="0.553977"
        :stroke="color1"
        stroke-width="0.553977"
      />
      <rect
        x="13.0289"
        y="13.0465"
        width="0.553977"
        height="0.553977"
        :stroke="color1"
        stroke-width="0.553977"
      />
      <rect
        x="15.0602"
        y="13.0465"
        width="0.553977"
        height="0.553977"
        :stroke="color1"
        stroke-width="0.553977"
      />
      <rect
        x="15.0602"
        y="15.0778"
        width="0.553977"
        height="0.553977"
        :stroke="color1"
        stroke-width="0.553977"
      />
      <path
        d="M1.875 5.56818V2.875C1.875 2.32271 2.32272 1.875 2.875 1.875H5.56818"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <path
        d="M1.875 14.4318V17.125C1.875 17.6773 2.32272 18.125 2.875 18.125H5.56818"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <path
        d="M14.4318 1.875L17.125 1.875C17.6773 1.875 18.125 2.32272 18.125 2.875V5.56818"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <path
        d="M14.4318 18.125H17.125C17.6773 18.125 18.125 17.6773 18.125 17.125V14.4318"
        :stroke="color1"
        stroke-width="1.25"
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
      default: 20,
    },
    height: {
      type: Number,
      default: 20,
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
