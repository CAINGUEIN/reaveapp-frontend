<template>
  <div>
    <button
      class=" flex rounded-full text-White"
      :class="[
        props.selected ? 'bg-Platinium' : '',
        props.dataClass ? props.dataClass : 'bg-DarkRock hover:bg-LightRock h-[60px] w-[60px]',
      ]"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({ selected: Boolean, dataClass: String });
</script>
