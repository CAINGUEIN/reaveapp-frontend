<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.50391 23.5421V22.2594"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.3592 14.465L24.6261 15.9859L20.6446 18.2008C20.2432 18.4251 19.8272 18.6215 19.3967 18.7757L18.9878 18.9228C16.9072 19.6098 14.6551 19.5536 12.6176 18.7757C12.1871 18.6215 11.7714 18.4253 11.3622 18.2008L7.50295 16.0562L4.641 14.465C2.453 13.2452 2.453 10.1611 4.641 8.94153L11.3552 5.19842C14.2316 3.60053 17.768 3.60053 20.6445 5.19842L27.359 8.94153C29.5468 10.1611 29.5468 13.2452 27.359 14.465H27.3592Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.6267 15.9859V22.9042C24.6267 23.612 24.2607 24.3198 23.5363 24.7265L19.0887 27.2009C17.1735 28.2664 14.8422 28.2664 12.9339 27.2009L8.47933 24.7265C8.46392 24.7178 8.4485 24.7089 8.43346 24.6997C7.85087 24.3518 7.50391 23.7249 7.50391 23.0576V16.056L11.3632 18.2007C11.7722 18.425 12.188 18.6213 12.6186 18.7755C14.656 19.5535 16.9082 19.6096 18.9888 18.9226L19.3976 18.7755C19.8282 18.6213 20.2442 18.4251 20.6456 18.2007L24.6271 15.9857L24.6267 15.9859Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29 11.7006V19.4011"
        :stroke="color1"
        stroke-width="2"
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
        default: 32
      },
      height: {
        type: Number,
        default: 32
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
  }
</script>