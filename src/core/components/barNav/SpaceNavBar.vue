<template>
  <ToolsButtonNav
    v-for="(space,index) in dataSpace"
    @click="$emit('action', space._id)"
    :dataClass="'large'"
    class="mr-2.5"
    :slot="true"
  >
    <div
      :class="[
        $route.path.includes(space._id)
          ? ' border-gray-200 rounded-2xl '
          : 'border-Anthracite',
      ]"
      class="border-2 p-0.5"
    >
      <ImgFormated
        :key="store.spaceKey"
        :size="'l'"
        :type="'space'"
        :targetSpace="space._id"
        class="w-12 h-12 space"
        v-bind:class="{
          'space-selected': $route.path.includes(space._id),
        }"
      />
    </div>
  </ToolsButtonNav>
</template>

<script>
import ToolsButtonNav from "@components/buttons/ToolsButtonNav.vue";
import ImgFormated from "@components/img/ImgFormated.vue";
import useStoreAuth from "@stores/auth";
import useStoreSpace from "@stores/storeSpace";
export default {
  emits: ["action"],
  data() {
    const store = useStoreAuth();
    const storeSpace = useStoreSpace();
    return {
      store,
      storeSpace,
    };
  },
  props: {
    dataSpace: Object,
  },
  components: { ToolsButtonNav, ImgFormated },
};
</script>

<style lang="css">

.space {
    border-radius: 100%;
    transition: border-radius 1s;
}

.space-selected {
    border-radius: 12px;
}

.space:hover {
    border-radius: 12px;
}


</style>