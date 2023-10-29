<template>
  <div>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="7.35717" cy="7.35717" rx="2.35717" ry="2.35717" fill="currentColor" />
      <ellipse cx="15.9939" cy="7.35717" rx="2.35717" ry="2.35717" fill="currentColor" />
      <ellipse cx="24.6482" cy="7.35717" rx="2.35717" ry="2.35717" fill="currentColor" />
      <ellipse cx="7.35717" cy="16.0002" rx="2.35717" ry="2.35717" fill="currentColor" />
      <ellipse cx="15.9939" cy="16.0002" rx="2.35717" ry="2.35717" fill="currentColor" />
      <ellipse cx="24.6482" cy="16.0002" rx="2.35717" ry="2.35717" fill="currentColor" />
      <ellipse cx="7.35717" cy="24.6428" rx="2.35717" ry="2.35717" fill="currentColor" />
      <ellipse cx="15.9939" cy="24.6428" rx="2.35717" ry="2.35717" fill="currentColor" />
      <ellipse cx="24.6482" cy="24.6428" rx="2.35717" ry="2.35717" fill="currentColor" />
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