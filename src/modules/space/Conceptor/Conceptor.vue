<template>
  <div class="flex flex-1 w-full h-full">
    <div class="my-auto mx-auto">
      <BoxWIP
        class="w-[400px] h-fit"
        icon="Conceptor"
        title="Conceptor"
        :year="2024"
        version="Alpha"
        :desc="desc"
      />
    </div>
  </div>
</template>

<script setup>
import BoxWIP from "../../space/views/BoxWIP.vue";
const desc = `<ul class="list-disc ml-7">
  <li class="font-medium">
    Nest dynamic data into items (Venue name, Attendee Seat coordinates, Winner name...)
  </li>
  <li class="font-medium">
    Create Evolutions, Combinations, Dependencies, Collections & Worlds of items.
  </li>`;
</script>

<style lang="scss" scoped></style>
