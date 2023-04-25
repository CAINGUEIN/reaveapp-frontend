<template>
  <div>
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="9.375" stroke="white" stroke-width="1.25" />
      <path
        d="M14.9485 6.21611C14.3169 7.00705 13.2037 8.84505 14.3338 10.9597C14.4133 11.1086 14.3145 11.2898 14.1447 11.3042C13.2551 11.3797 10.5746 11.2176 6.97984 13.4441C6.77271 13.5724 6.49408 13.4766 6.34763 13.2832L5.10387 11.6406C4.96872 11.4621 4.96514 11.2181 5.09499 11.0357C5.88003 9.93366 8.89584 6.2922 14.7421 5.83672C14.949 5.82064 15.077 6.05515 14.9485 6.21603V6.21611Z"
        :fill="color1"
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
