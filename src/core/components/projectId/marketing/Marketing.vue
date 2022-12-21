<template>
  <div class="">
    <h2>MARKETING</h2>
    <Description :yourPerm="yourPerm" :data="data" class="w-1/3"></Description>
  </div>
</template>

<script>
import Description from "./Description.vue";

export default {
  props: ["data", "yourPerm"],
  data() {
    return {
      open: false,
    };
  },
  methods: {
    close(value) {
      this.open = false;
      if (value === "update") {
        this.$emit("update");
      }
    },
  },
  components: { Description },
};
</script>

<style lang="scss" scoped></style>
