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
        d="M5.44448 13.7969H3C2.44772 13.7969 2 14.2446 2 14.7969V21.0018C2 21.5541 2.44772 22.0018 3 22.0018H5.44448C5.99677 22.0018 6.44448 21.5541 6.44448 21.0018V14.7969C6.44448 14.2446 5.99677 13.7969 5.44448 13.7969Z"
        :stroke="color1"
        stroke-width="1.5"
      />
      <path
        d="M7 15.3353C7.74075 14.8225 9.66669 13.7969 11.4445 13.7969C13.6667 13.7969 16.4445 14.3097 16.4445 16.3609C16.4445 18.0019 13.6667 17.8994 13.6667 17.8994"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M7 20.4636C8.29631 20.8055 11.3334 21.4893 13.1112 21.4893C15.2783 21.4893 20.087 20.5139 21.87 17.1365C21.9592 16.9675 21.9903 16.7726 21.9502 16.5858C21.6925 15.3866 20.7508 14.1629 17.3811 16.6501C16.7528 17.1138 16.0493 17.4839 15.2817 17.6271C14.5275 17.7678 13.6626 17.8994 13.1112 17.8994"
        :stroke="color1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <ellipse
        cx="15.3334"
        cy="8.15303"
        rx="3.33336"
        ry="3.07686"
        :stroke="color1"
        stroke-width="1.5"
      />
      <path
        d="M12.0013 8.15372C12.0013 5.07686 15.3347 5.07686 15.3347 5.07686C15.3347 3.37756 13.8423 2 12.0013 2C10.1604 2 8.66797 3.37756 8.66797 5.07686C8.66797 6.77617 10.1604 8.15372 12.0013 8.15372Z"
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
