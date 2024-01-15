<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.7806 3.80722L12.1723 4.34657M13.7393 6.50394L14.1311 7.04329M15.6981 9.20067L16.0898 9.74001M17.6568 11.8974L18.0486 12.4367M1.58991 10.3891C1.12628 10.7261 1.01326 11.362 1.33763 11.8085L2.91821 13.9846C3.39657 13.9259 3.87762 13.9924 4.31289 14.1774C4.74816 14.3624 5.12229 14.6593 5.39758 15.0383C5.67287 15.4174 5.83961 15.865 5.88099 16.3363C5.92238 16.8075 5.83695 17.2857 5.63331 17.7226L7.2139 19.8987C7.53827 20.3453 8.1778 20.4343 8.64143 20.0973L21.52 10.738C21.9836 10.401 22.0687 9.76514 21.7443 9.31857L20.1917 7.14249C19.7133 7.20119 19.2323 7.1347 18.797 6.94971C18.3617 6.76472 17.9876 6.46776 17.7123 6.08875C17.437 5.70974 17.2703 5.26207 17.2289 4.79082C17.1875 4.31957 17.273 3.8414 17.4766 3.40447L15.896 1.2284C15.5716 0.781818 14.9321 0.692834 14.4685 1.02977L1.58991 10.3891Z"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <ellipse cx="17.9984" cy="18" rx="5.99838" ry="6" fill="white" />
    <path
      d="M15 18H20.9984"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M17.9985 15V21"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M7.74902 12.9961L11.7104 10.1172M8.99932 14.7174L11.2629 13.0724"
      :stroke="color1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
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
      default: 33,
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
