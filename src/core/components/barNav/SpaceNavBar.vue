<template>
  <ToolsButtonNav
    v-for="space in data"
    @click="$emit('action', space._id, space.typeOfSpace)"
    :dataClass="'large'"
    class="mr-2"
    :slot="true"
  >
    <img
      src="https://via.placeholder.com/60"
      alt=""
      class="rounded-full my-auto"
    />
  </ToolsButtonNav>
</template>

<script>
import ToolsButtonNav from '@core/components/buttons/ToolsButtonNav.vue';
export default {
    props: ["data"],
    emits: ["action"],
    components: { ToolsButtonNav }
};
</script>
