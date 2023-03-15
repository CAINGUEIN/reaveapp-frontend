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
        d="M27.5873 16.9956L16.9972 27.5871C16.4469 28.1376 15.5544 28.1376 15.0041 27.5871L4.41273 16.9956C3.86242 16.4453 3.86242 15.5529 4.41273 15.0026L15.0043 4.41273C15.5546 3.86242 16.4469 3.86242 16.9972 4.41273L27.5873 15.0028C28.1376 15.5531 28.1376 16.4453 27.5873 16.9956Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.6587 17.0342L16.6534 26.8207C16.4144 27.4043 15.5881 27.4043 15.3491 26.8207L11.3438 17.0342L15.3336 5.22127C15.5493 4.58249 16.453 4.58249 16.6687 5.22127L20.6587 17.0342Z"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.16016 15.3496C6.39376 15.9027 8.89181 16.3043 11.5588 16.5158C12.9945 16.6303 14.4812 16.6919 16.0015 16.6919C17.5217 16.6919 19.0085 16.6303 20.4442 16.5158C23.1111 16.3043 25.609 15.9027 27.8428 15.3496"
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
      default: 32,
    },
    height: {
      type: Number,
      default: 32,
    },
    color1: {
      type: String,
      default: "#FFFFFF",
    },
    color2: {
      type: String,
      default: "#111111",
    },
  },
};
</script>
