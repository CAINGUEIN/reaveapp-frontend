<template>
    <div>
      <svg
        :width="width"
        :height="height"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="5.78571" cy="5.78571" r="2.78571" :fill="color1" />
        <circle cx="16.0006" cy="5.78571" r="2.78571" :fill="color1" />
        <circle cx="26.2154" cy="5.78571" r="2.78571" :fill="color1" />
        <circle cx="5.78571" cy="15.9999" r="2.78571" :fill="color1" />
        <circle cx="16.0006" cy="16.0001" r="2.78571" :fill="color1" />
        <circle cx="26.2154" cy="16.0001" r="2.78571" :fill="color1" />
        <circle cx="5.78571" cy="26.2143" r="2.78571" :fill="color1" />
        <circle cx="16.0006" cy="26.2143" r="2.78571" :fill="color1" />
        <circle cx="26.2154" cy="26.2143" r="2.78571" :fill="color1" />
      </svg>
    </div>
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
        default: "#FFFFFF",
      },
    },
  };
  </script>