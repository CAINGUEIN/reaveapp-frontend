<template>
  <div class="space-y-4">
    <h2>Overview</h2>
    <Naming :data="data" class="w-2/5"></Naming>
  </div>
</template>

<script>
import Naming from "./Naming.vue";

export default {
  components: { Naming },
  props: ["data"],
};
</script>

<style lang="scss" scoped></style>
