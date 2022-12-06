<template>
  <div class="space-y-4">
    <h2>Venue</h2>
    <Location :data="data" class="w-1/3"></Location>
  </div>
</template>

<script>
import Location from './Location.vue';


export default {
    props: ["data"],
    components: { Location }
};
</script>

<style lang="scss" scoped></style>
