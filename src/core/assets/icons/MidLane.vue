<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9995 6.16699V14.0001H6.16992L8.21325 11.9556H11.9561V8.21156L13.9995 6.16699Z"
        fill="#808080"
      />
      <path
        d="M2 9.83314V2H9.82954L7.78621 4.04457H4.04333V7.78857L2 9.83314Z"
        fill="#808080"
      />
      <path
        d="M14.0005 2V4.22057L4.22704 14H2.00781V11.7691L11.7722 2H14.0005Z"
        fill="#E5E5E5"
      />
    </svg>
  </div>
</template>

<script>
  export default {
    props: {
      width: {
        type: Number,
        default: 16
      },
      height: {
        type: Number,
        default: 16
      },
    },
  }
</script>
