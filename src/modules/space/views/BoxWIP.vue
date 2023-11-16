<template>
  <div class="p-8 bg-DarkRock text-White rounded-xl">
    <div class="items-center h-6 space-x-2 flex flex-row">
      <SvgTarget :target="props.icon" :height="24" :width="24" />
      <h3 class="text-2xl leading-none font-bold text-White">
        {{ props.title }}
      </h3>
      <div
        :class="{
          'bg-Green ': props.version === 'Beta',
          'bg-Blue': props.version === 'Alpha',
        }"
        class="px-2.5 py-1.5 rounded-3xl"
      >
        <p class="text-Anthracite text-xs leading-none  font-extrabold">{{ props.version }}</p>
      </div>
    </div>
    <div class="mt-6">
      <h3 class="text-xl">WIP, Coming in {{ props.year }}</h3>
      <p v-html="props.desc" class="mt-1 font-medium leading-tight">
      </p>
    </div>
  </div>
</template>

<script setup>
import SvgTarget from "@components/SvgTarget.vue";
import Dashboard from "../../../core/assets/icons/Dashboard.vue";
const props = defineProps({
  icon: String,
  title: String,
  version: String,
  year: Number,
  desc: String,
});
</script>
