<template>
  <div>
    <svg
      :width="20"
      :height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.52462 10.0701C6.52462 10.5004 6.99477 10.895 7.77735 11.2027C8.78181 11.5975 10.3007 11.8492 12.0006 11.8492C13.7006 11.8492 15.2193 11.5976 16.2236 11.2027C17.0062 10.895 17.4766 10.5005 17.4766 10.0701C17.4766 9.08746 15.0248 8.29102 12.0006 8.29102C8.97648 8.29102 6.52462 9.08746 6.52462 10.0701Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.5001 9.3742C1.5001 10.3716 2.40168 11.2868 3.90225 12C5.82828 12.9153 8.74076 13.4987 12.0002 13.4987C15.2597 13.4987 18.1719 12.9153 20.0976 12C21.5982 11.2868 22.5 10.372 22.5 9.3742C22.5 7.09633 17.7989 5.25 12.0001 5.25C6.2013 5.25 1.5 7.09633 1.5 9.3742H1.5001Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.5 9.375V14.6263C1.5 16.9042 6.20109 18.7508 12.0001 18.7508C17.7991 18.7508 22.5 16.9042 22.5 14.6263V9.375C22.5 10.3728 21.5982 11.2876 20.0976 12.0007C18.1718 12.9161 15.2593 13.4995 12.0002 13.4995C8.74108 13.4995 5.82828 12.9161 3.90225 12.0007C2.40168 11.2876 1.5001 10.3724 1.5001 9.375H1.5Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.7749 11.3594L18.252 12.6885V17.9326"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.418 8.85547L17.4419 9.86994"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.25 6.05859L14.702 8.52148"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.2207 11.3594L5.74373 12.6885V17.9326"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.58269 8.85547L6.55664 9.86994"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.78812 6.08789L9.29688 8.52351"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.0664 16.3028C15.0664 14.7547 13.6967 13.5 12.0069 13.5C10.3171 13.5 8.94701 14.7548 8.94701 16.3028"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.94531 18.5763V16.3047"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.0664 18.5745V16.3047"
        stroke="white"
        stroke-width="1.5"
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
