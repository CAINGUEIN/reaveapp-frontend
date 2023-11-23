<template>
  <div class="relative flex flex-col">
    <div class="w-full h-fit rounded-2xl relative">
      <img :src="props.dataEvent.image" class="object-contain" />
      <div
        class="absolute text-White space-x-2 pr-0 top-3 right-3 flex flex-row"
      >
        <Icon v-for="game in props.dataEvent.games" :key="game" :icon="game" />
      </div>
      <div class="absolute text-White space-x-2 pr-0 bottom-3 right-3">
        <Icon :icon="props.dataEvent.type" :width="24" :height="24" />
      </div>
    </div>
    <div>
      <div class="flex flex-row mt-2 space-y-1">
        <img
          class="w-6 h-6 rounded-full my-auto mr-2"
          :src="props.dataEvent.spaceIcon"
        />
        <p class="font-medium text-White">{{ props.dataEvent.space }}</p>
      </div>
      <p class="text-White mt-2 text-xl font-semibold">
        {{ props.dataEvent.title }}
      </p>
      <p class="text-Cloud font-medium">{{ props.dataEvent.date }}</p>
      <p class="text-Cloud font-medium">{{ props.dataEvent.location }}</p>
    </div>
  </div>
</template>

<script setup>
import Icon from "./Icon.vue";
const props = defineProps({
  dataEvent: Object,
});
</script>
