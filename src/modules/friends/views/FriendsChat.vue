<template>
  <div class="flex flex-1 w-full h-full">
    <div class="my-auto mx-auto">
      <BoxWIP
        class="w-[470px] h-fit"
        icon="Messages"
        title="Chats"
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
      Channels with Text, Shorts & Integrations from other Reave Products (items, events, calendar....)
    </li>
    <li class="font-medium">
      Calls with Voice, Camera & Screenshares.
    </li>
  </ul>`;
</script>

<style lang="scss" scoped></style>
