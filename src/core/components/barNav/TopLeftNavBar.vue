<template>
  <div class="flex flex-col">
    <ToolsButtonNav
    >
      <Feed />
    </ToolsButtonNav>
    <ToolsButtonNav
    >
      <Screen/>
    </ToolsButtonNav>
  </div>
</template>

<script>
import ToolsButtonNav from "@core/components/buttons/ToolsButtonNav.vue";
import Feed from "../../assets/icons/Feed.vue";
import Screen from "../../assets/icons/Screen.vue";
export default {
    components: { ToolsButtonNav, Feed, Screen },
    props: ["dataButtons"],
}
</script>