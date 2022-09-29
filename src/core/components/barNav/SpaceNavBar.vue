<template>
  <ToolsButtonNav
    v-for="space in storeSpace.dataSpace"
    @click="$emit('action', space._id, space.typeOfSpace)"
    :dataClass="'large'"
    class="mr-2.5"
    :slot="true"
  >
    <ImgFormated
      :key="store.spaceKey"
      :size="'l'"
      :type="'friend'"
      :targetSpace="space._id"
      class="rounded-full my-auto"
    />
  </ToolsButtonNav>
</template>

<script>
import ToolsButtonNav from "@components/buttons/ToolsButtonNav.vue";
import ImgFormated from "@components/img/ImgFormated.vue";
import useStoreAuth from "@stores/auth";
import useStoreSpace from "@stores/storeSpace";
export default {
  props: ["data"],
  emits: ["action"],
  data() {
    const store = useStoreAuth();
    const storeSpace = useStoreSpace();
    return {
      store,
      storeSpace
    };
  },
  components: { ToolsButtonNav, ImgFormated },
};
</script>
