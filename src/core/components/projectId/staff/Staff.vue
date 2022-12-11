<template>
  <div class="">
    <h2>STAFF</h2>
    <button
      class="absolute right-0 top-0 bg-White text-Anthracite h-9 rounded-full items-center hover:bg-DarkRock hover:text-White"
      @click.prevent="open = true"
    >
      <PlusIcon class="mx-2 h-5 w-5" />
    </button>
    <Teams :data="data" @action="close" class="w-full"></Teams>
    <ModalClear :open="open" @action="close()">
      <AddMembers :data="data" @action="close"></AddMembers>
    </ModalClear>
  </div>
</template>

<script>
import ModalClear from "@components/modal/ModalClear.vue";
import { PlusIcon } from "@heroicons/vue/outline";
import AddMembers from "@components/modal/projectId/staff/AddMembers.vue";
import Teams from "./Teams.vue";

export default {
  props: ["data"],
  components: { Teams, PlusIcon, ModalClear, AddMembers },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    close(value) {
      this.open = false;
      if (value === "update") {
        this.$emit("update");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
