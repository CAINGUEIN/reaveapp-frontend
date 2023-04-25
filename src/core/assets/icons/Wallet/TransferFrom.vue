<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5555 13.7969H21C21.5523 13.7969 22 14.2446 22 14.7969V21.0018C22 21.5541 21.5523 22.0018 21 22.0018H18.5555C18.0032 22.0018 17.5555 21.5541 17.5555 21.0018V14.7969C17.5555 14.2446 18.0032 13.7969 18.5555 13.7969Z"
        :stroke="color1"
        stroke-width="1.5"
      />
      <path
        d="M17.5566 15.3353C16.8159 14.8225 14.89 13.7969 13.1122 13.7969C10.8899 13.7969 8.11211 14.3097 8.11211 16.3609C8.11211 18.0019 10.8899 17.8994 10.8899 17.8994"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M17 20.4636C15.7037 20.8055 12.6666 21.4893 10.8888 21.4893C8.72173 21.4893 3.91297 20.5139 2.13 17.1365C2.0408 16.9675 2.0097 16.7726 2.04984 16.5858C2.30752 15.3866 3.24919 14.1629 6.61893 16.6501C7.24723 17.1138 7.95067 17.4839 8.71832 17.6271C9.47246 17.7678 10.3374 17.8994 10.8888 17.8994"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <ellipse
        rx="3.33336"
        ry="3.07686"
        transform="matrix(-1 0 0 1 8.66664 8.15303)"
        :stroke="color1"
        stroke-width="1.5"
      />
      <path
        d="M11.9987 8.15372C11.9987 5.07686 8.66531 5.07686 8.66531 5.07686C8.66531 3.37756 10.1577 2 11.9987 2C13.8396 2 15.332 3.37756 15.332 5.07686C15.332 6.77617 13.8396 8.15372 11.9987 8.15372Z"
        :stroke="color1"
        stroke-width="1.5"
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
