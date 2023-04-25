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
        d="M16 29C23.1797 29 29 23.1797 29 16C29 8.8203 23.1797 3 16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29Z"
        :stroke="color1"
        stroke-width="2"
        stroke-miterlimit="10"
      />
      <path
        d="M20.7643 3.88867V8.47631C20.7643 10.0225 19.5131 11.2736 17.967 11.2736H16.2987C15.9224 11.2736 15.6172 11.5788 15.6172 11.9552V13.186C15.6172 14.7322 16.8684 15.9834 18.4145 15.9834C19.7166 15.9834 20.7643 17.0413 20.7643 18.3331V19.2384C20.7643 20.5405 21.8222 21.5882 23.1141 21.5882H27.7119"
        :stroke="color1"
        stroke-width="2"
        stroke-miterlimit="10"
      />
      <path
        d="M3.07031 14.5078H6.93573C8.22759 14.5078 9.27532 15.5555 9.27532 16.8474V17.5595C9.27532 18.8513 10.3231 19.899 11.6149 19.899H12.3371C13.5171 19.899 14.514 20.784 14.6564 21.9538C14.7785 22.9405 14.2698 23.8865 13.3747 24.3341L8.59379 26.7144"
        :stroke="color1"
        stroke-width="2"
        stroke-miterlimit="10"
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
      default: "currentColor",
    },
    color2: {
      type: String,
      default: "#111111",
    },
  },
};
</script>
