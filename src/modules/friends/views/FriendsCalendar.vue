<template>
  <div class="flex flex-1 w-full h-full">
    <div class="my-auto mx-auto">
      <BoxWIP
        class="w-88 h-fit"
        icon="Calendar"
        title="Calendar"
        :year="2024"
        version="Alpha"
        :desc="desc"
      />
    </div>
  </div>
</template>

<script setup>
import BoxWIP from "../../space/views/BoxWIP.vue";
const desc = `Coordinate your teams around tasks and events together.`;
</script>

<style lang="scss" scoped></style>
