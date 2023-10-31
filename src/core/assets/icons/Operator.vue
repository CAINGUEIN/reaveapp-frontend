<template>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9973 17.7668C15.1828 17.7668 17.7651 15.1844 17.7651 11.9988C17.7651 8.8133 15.1828 6.23091 11.9973 6.23091C8.81182 6.23091 6.22949 8.8133 6.22949 11.9988C6.22949 15.1844 8.81182 17.7668 11.9973 17.7668Z" :stroke="color1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.2715 2.02476C11.5067 2.00619 11.748 2 11.9894 2C14.2668 2 16.3709 2.76122 18.048 4.04229" :stroke="color1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.0635 21.9567C11.3729 21.9876 11.6885 22 12.0041 22C15.9277 22 19.3253 19.7411 20.9591 16.4487" :stroke="color1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.09283 13.3321C2.03094 12.8927 2 12.4471 2 11.9953C2 7.91693 4.44451 4.4079 7.94727 2.85452" :stroke="color1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.125 16.6206C4.13993 18.5577 5.76136 20.1173 7.73553 21.0456" :stroke="color1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.3975 6.56439C21.4124 8.12396 22.0004 9.99296 22.0004 11.9919C22.0004 12.3818 21.9756 12.7717 21.9323 13.1492" :stroke="color1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
      default: "currentColor",
    },
  },
};
</script>
