<template>
  <div>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.86768" y="9.80916" width="14.2593" height="8.14815" rx="1" stroke="#BEBEBE" stroke-width="1.25" />
      <rect width="18.3333" height="4.07407" rx="1" transform="matrix(1 0 0 -1 0.829102 9.80916)" stroke="#BEBEBE"
        stroke-width="1.25" />
      <path
        d="M15.0869 2.67995C15.0869 4.36749 13.7189 5.7355 12.0314 5.7355H9.99432V4.20773C9.99432 2.80145 11.1343 1.66143 12.5406 1.66143H14.0684C14.6309 1.66143 15.0869 2.11744 15.0869 2.67995V2.67995Z"
        stroke="#BEBEBE" stroke-width="1.25" />
      <path
        d="M4.90625 2.67995C4.90625 4.36749 6.27427 5.7355 7.96181 5.7355H9.99884V4.20773C9.99884 2.80145 8.85883 1.66143 7.45255 1.66143H5.92477C5.36226 1.66143 4.90625 2.11744 4.90625 2.67995V2.67995Z"
        stroke="#BEBEBE" stroke-width="1.25" />
      <path d="M9.99414 4.71243L9.99414 17.9532" stroke="#BEBEBE" stroke-width="1.25" />
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
