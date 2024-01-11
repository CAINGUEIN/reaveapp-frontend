<template>
  <div class="w-full grid grid-cols-4 gap-4">
    <div
      v-for="tab in tabs"
      :key="tab"
      class="cursor-pointer hover:bg-Rock rounded-xl"
    >
      <p class="font-bold text-base py-1.5 px-3 text-White">{{ tab }}</p>
    </div>
  </div>
</template>

<script setup>
const tabs = ["Quests", "Circuits", "Games", "People"];
</script>
