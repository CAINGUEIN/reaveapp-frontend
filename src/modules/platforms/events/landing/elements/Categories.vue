<template>
  <div class="mt-6 grid grid-cols-8 gap-12 xl:grid-cols-6 xl:col-span-6 lg:grid-cols-5 sm:grid-cols-4">
    <div
      v-for="categorie in categories"
      :key="categorie"
      class="min-w-fit w-24 cursor-pointer p-1 flex flex-col text-Gravel hover:bg-LightRock rounded-xl"
      :class="{ 'xl:col-start-3': categorie === 'Festivals', 'lg:col-start-2': categorie === 'Parties'}"
    >
      <SvgTarget class="mx-auto" :width="24" :height="24" :target="categorie" />
      <p class="font-medium mx-auto text-sm pt-3" >
        {{ categorie }}
      </p>
    </div>
  </div>
</template>

<script setup>
import SvgTarget from "@components/SvgTarget.vue";
const categories = [
  "Spectacles",
  "Tournaments",
  "Ceremonies",
  "Conferences",
  "Meetups",
  "Parties",
  "Festivals",
  "Conventions",
];
</script>
