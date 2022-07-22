<template>
  <div class="flex flex-col">
    <ToolsButtonNav
      v-for="dataButton in dataButtons"
      :target="dataButton.target"
      :src="dataButton.src"
      :dataClass="dataButton.class"
    />
  </div>
</template>

<script>
import ToolsButtonNav from "@core/components/buttons/ToolsButtonNav.vue";
export default {
    components: { ToolsButtonNav },
    props: ["dataButtons"],
}
</script>