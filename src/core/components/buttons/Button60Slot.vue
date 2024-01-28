<template>
  <div>
    <button
      class="h-[60px] w-[60px] flex rounded-full text-White"
      :class="[
        props.selected ? 'bg-Platinium' : '',
        props.dataClass ? props.dataClass : 'bg-DarkRock hover:bg-LightRock',
      ]"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({ selected: Boolean, dataClass: String });
</script>
