<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.00586 9.25391C2.00586 10.0064 3.91329 10.6133 6.26699 10.6133C8.6207 10.6133 10.5245 10.0064 10.5245 9.25391"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.26467 6.72111C8.61674 6.72111 10.5235 6.11197 10.5235 5.36056C10.5235 4.60914 8.61674 4 6.26467 4C3.91259 4 2.00586 4.60914 2.00586 5.36056C2.00586 6.11197 3.91259 6.72111 6.26467 6.72111Z"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2 13.3047C2 14.0536 3.90743 14.6641 6.26113 14.6641C7.22564 14.6641 8.11819 14.5612 8.83443 14.3872"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.00586 5.36133V13.4566"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.5137 9.40895V8.11409V5.36133"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.5164 12.715C11.0706 12.8499 11.7329 12.9422 12.4562 12.9742C12.6613 12.9883 12.8737 12.9919 13.0896 12.9919C15.2058 12.9919 16.9621 12.5021 17.2931 11.8525C17.3327 11.7815 17.3507 11.707 17.3507 11.6325C17.3507 10.88 15.4433 10.2695 13.0896 10.2695C12.8737 10.2695 12.6613 10.2731 12.4562 10.2873C11.7328 10.3192 11.0706 10.4115 10.5164 10.5464C9.4943 10.7949 8.83203 11.1888 8.83203 11.6325C8.83203 12.0762 9.44742 12.4418 10.4119 12.6902"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.3452 11.8415V15.107C17.3452 15.1815 17.3271 15.256 17.2875 15.3271C16.9565 15.9767 15.2002 16.4664 13.0875 16.4664C12.0689 16.4664 11.1369 16.3527 10.4062 16.1646C9.44177 15.9162 8.82617 15.5329 8.82617 15.107V11.625C8.82617 12.051 9.44177 12.4344 10.4062 12.6827C10.4386 12.6898 10.4745 12.7005 10.5105 12.7076C11.0647 12.8425 11.7269 12.9346 12.4504 12.9668C12.6555 12.9809 12.8678 12.9844 13.0838 12.9844C15.2002 12.9844 16.9564 12.4946 17.2875 11.8451C17.3054 11.8451 17.3271 11.8451 17.3452 11.8415V11.8415Z"
        :stroke="color1"
        stroke-width="1.25"
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
