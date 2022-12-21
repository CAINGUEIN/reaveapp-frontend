<template>
  <div>
    <button
      class="h-[50px] w-[50px] flex rounded-full text-White"
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
