<template>
  <button
    :class="props.class"
    class="text-right cursor-pointer p-3 outline-0 bg-DarkRock hover:bg-LightRock rounded-full w-auto"
    @click="close"
  >
    <Cross :width="props.width" :height="props.height" />
  </button>
</template>

<script setup>
import Cross from "@assets/icons/Cross.vue";

const emit = defineEmits("closeModal");
const close = () => {
  emit("closeModal");
};
const props = defineProps({
  width: Number,
  height: Number,
  class: String,
});
</script>
