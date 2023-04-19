<template>
  <div class="">
    <div name="layout" class="flex justify-between items-center">
      <p>
        <span class="font-black text-xl text-LightGrey">Overview</span>
      </p>
      <XButton36 @click="goBack" class="z-10"></XButton36>
    </div>
    <Location :yourPerm="yourPerm" :data="data" class="max-w-7xl w-[95%] mx-auto mt-8"></Location>
  </div>
</template>

<script>
import Location from "./Location.vue";
import XButton36 from "@components/buttons/XButton36.vue";

export default {
  props: ["data", "yourPerm"],
  components: { Location, XButton36 },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped></style>
