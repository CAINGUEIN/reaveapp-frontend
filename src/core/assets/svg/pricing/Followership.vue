<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.066 6.09589C8.066 4.58455 6.87466 3.35938 5.40507 3.35938C3.93548 3.35938 2.74414 4.58455 2.74414 6.09589C2.74414 7.60722 3.93548 8.8324 5.40507 8.8324C6.87466 8.8324 8.066 7.60722 8.066 6.09589Z"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 13.47C1.1698 12.2903 1.95653 11.6489 2.88263 11.6484H7.96453C8.88243 11.6484 9.65777 12.3788 9.82948 13.47"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.998 11.4494C18.9082 10.2677 18.0641 9.3457 17.0403 9.3457H12.6395"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.5127 6.25912C13.0495 6.25912 11.8633 5.08183 11.8633 3.62956C11.8633 2.17729 13.0495 1 14.5127 1C15.9759 1 17.1621 2.17729 17.1621 3.62956C17.1621 5.08183 15.9759 6.25912 14.5127 6.25912Z"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.56445 16.1548C6.26243 18.121 11.8658 22.0532 15.6013 14.8066"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <path
        d="M12.8867 15.1543L15.0222 14.7394C15.3972 14.6666 15.782 14.8127 16.0141 15.1161L17.105 16.5422"
        :stroke="color1"
        stroke-width="1.25"
        stroke-linecap="round"
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
      default: "#FFFFFF",
    },
    color2: {
      type: String,
      default: "#111111",
    },
  },
};
</script>
