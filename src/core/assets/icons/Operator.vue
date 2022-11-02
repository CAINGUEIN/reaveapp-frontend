<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 32 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.0002 24.6448C20.7781 24.6448 24.6513 20.7727 24.6513 15.9962C24.6513 11.2197 20.7781 7.34766 16.0002 7.34766C11.2224 7.34766 7.34912 11.2197 7.34912 15.9962C7.34912 20.7727 11.2224 24.6448 16.0002 24.6448Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.9229 1.03712C15.2756 1.00928 15.6376 1 15.9996 1C19.4155 1 22.5715 2.14139 25.087 4.06226"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.5884 30.9365C15.0525 30.9829 15.5259 31.0015 15.9993 31.0015C21.8843 31.0015 26.9803 27.6145 29.4308 22.6777"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.13923 17.9994C1.04641 17.3405 1 16.6724 1 15.995C1 9.87975 4.66651 4.61823 9.92029 2.28906"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.68799 22.9277C4.21029 25.8322 6.64225 28.1707 9.6033 29.5626"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M28.5967 7.85742C30.1185 10.1959 31.0001 12.9983 31.0001 15.9956C31.0001 16.5802 30.963 17.1648 30.898 17.7309"
      stroke="currentColor"
      stroke-width="2"
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
      default: 32,
    },
    height: {
      type: Number,
      default: 33,
    },
    color2: {
      type: String,
      default: "#000000",
    },
    color1: {
      type: String,
      default: "#FFFFFF",
    },
  },
};
</script>
