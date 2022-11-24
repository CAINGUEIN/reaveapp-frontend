<template>
  <div>
    <button class="h-10 w-10 flex rounded-full text-White"
    :class="selected ? 'bg-Platinium': 'bg-DarkRock hover:bg-LightRock'">
      <slot></slot>
    </button>
  </div>
</template>

<script>

export default {
    props: ['selected']
};
</script>
