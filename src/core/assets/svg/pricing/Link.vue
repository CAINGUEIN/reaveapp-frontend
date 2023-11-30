<template>
  <div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4788 16.1479L17.382 19.9433C17.5382 20.0635 17.7759 19.9834 17.8166 19.7896L20.9949 4.32065C21.0356 4.11351 20.8251 3.93978 20.6282 4.01996L3.16808 10.9626C2.94397 11.0495 2.94397 11.3635 3.16808 11.4571L7.04584 13.0541C7.11375 13.0808 7.16129 13.1343 7.18845 13.2011L9.42954 18.5668C9.50424 18.7405 9.72835 18.7873 9.87096 18.6536L12.2479 16.3684C12.3633 16.2548 12.3565 16.0677 12.2275 15.9675L10.2105 14.4105C10.0815 14.3103 10.0747 14.1165 10.1901 14.0096L15.365 9.24532" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
