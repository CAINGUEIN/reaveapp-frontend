<template>
  <div>
    <button
      class="h-[60px] w-[60px] flex rounded-full text-White"
      :class="selected ? 'bg-Platinium' : 'bg-DarkRock hover:bg-LightRock'"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: ["selected"],
};
</script>
