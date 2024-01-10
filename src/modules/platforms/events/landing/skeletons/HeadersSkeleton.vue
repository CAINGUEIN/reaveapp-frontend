<template>
  <div class="flex mx-auto flex-row justify-between">
    <div class="flex flex-row">
      <div
        v-if="props.visitor"
        class="w-12 h-12 mr-8 bg-DarkRock flex rounded-full animate-pulse"
      >
        <div class="w-6 h-6 rounded-full bg-LightRock mx-auto my-auto"></div>
      </div>
      <TabsSkeleton class="my-auto" />
    </div>
    <div
      class="flex my-auto mr-40 flex-row justify-between rounded-full w-[400px] h-12 bg-DarkRock"
      :class="[props.visitor ? 'mr-24' : 'mr-36']"
    >
      <div
        class="h-6 w-6 m-3 my-auto text-Gravel bg-LightRock rounded-full"
      ></div>
      <div
        class="h-6 w-6 m-3 my-auto rounded-full bg-LightRock animate-pulse"
      ></div>
    </div>
    <div class="flex flew-row space-x-1 text-White">
      <div
        class="py-2 px-5 w-36 bg-LightRock my-auto rounded-full animate-pulse"
      ></div>
    </div>
  </div>
</template>

<script setup>
import TabsSkeleton from "./TabsSkeleton.vue";

const props = defineProps({
  visitor: Boolean,
});
</script>
