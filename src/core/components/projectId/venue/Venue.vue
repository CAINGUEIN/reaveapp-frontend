<template>
  <div class="space-y-4">
    <h2>Venue</h2>
    <Location :yourPerm="yourPerm" :data="data" class="w-1/3"></Location>
  </div>
</template>

<script>
import Location from "./Location.vue";

export default {
  props: ["data", "yourPerm"],
  components: { Location },
};
</script>

<style lang="scss" scoped></style>
