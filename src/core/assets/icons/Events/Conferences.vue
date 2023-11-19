<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.3629 5.83375C15.3629 4.26871 14.0819 3 12.5018 3C10.9216 3 9.64062 4.26871 9.64062 5.83375V10.8552C9.64062 12.4203 10.9216 13.689 12.5018 13.689C14.0819 13.689 15.3629 12.4203 15.3629 10.8552V5.83375Z"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.5 10.0079V10.8399C18.5 14.1218 15.8138 16.7824 12.4999 16.7824C9.18606 16.7824 6.5 14.1217 6.5 10.8397V10.0078"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.5 16.7812V20.2511"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.30078 20.25H15.707"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
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
