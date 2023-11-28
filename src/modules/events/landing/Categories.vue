<template>
    <div class="w-fit mt-6 space-x-16 flex flex-row">
      <div
        v-for="categorie in categories"
        :key="categorie"
        class="cursor-pointer p-1 flex flex-col text-Gravel hover:bg-LightRock rounded-xl"
      >
        <SvgTarget class="mx-auto" :width="24" :height="24" :target="categorie" />
        <p class="font-medium mx-auto text-sm pt-3">
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
  