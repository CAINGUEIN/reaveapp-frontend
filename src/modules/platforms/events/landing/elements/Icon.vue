<template>
  <div class="bg-Anthracite p-2 my-auto rounded-full">
    <SvgTarget :target="props.icon" :width="20" :height="20" />
  </div>
</template>

<script setup>
import SvgTarget from "@components/SvgTarget.vue";
const props = defineProps({
  icon: String,
});
</script>
