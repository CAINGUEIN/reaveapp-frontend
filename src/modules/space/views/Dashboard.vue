<template>
  <div class="flex flex-1 w-full h-full">
    <div class="my-auto mx-auto">
      <BoxWIP
        class="w-[432px] h-fit"
        icon="Dashboards"
        title="Dashboards"
        :year="2025"
        version="Beta"
        :desc="desc"
      />
    </div>
  </div>
</template>

<script setup>
import BoxWIP from "../../space/views/BoxWIP.vue";
const desc = `
<ul class="list-disc ml-7">
  <li class="font-medium">
    Track progress on all games with extremely advanced, precise & unique metrics invented by Reave and best esport coaches in the world.
  </li>
  <li class="font-medium">See your match history with detailed match summaries.</li>
  <li class="font-medium">Manage your in-game overlays.</li>
  <li class="font-medium">Monitor game statistics, rankings & trends.
  </li>
  </ul>`;
</script>

<style lang="scss" scoped></style>
