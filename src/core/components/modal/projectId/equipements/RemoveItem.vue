<template>
  <div class="flex flex-col">
    <XButton36
      class="absolute right-0 z-10"
      @click.prevent="closeModal()"
    ></XButton36>
    <p class="text-2xl font-black text-white text-center mt-12">
      Sure of deleting this item?
    </p>
    <button
      class="rounded-full h-[50px] px-10 mx-auto mt-6 bg-Red mx-auto"
      @click.prevent="submit()"
    >
      <h4 class="text-White">Delete</h4>
    </button>
  </div>
</template>

<script>
import XButton36 from "@components/buttons/XButton36.vue";

import EventServices from "@axios/services/eventServices";

export default {
  components: {
    XButton36,
  },
  props: ["data", "select"],
  methods: {
    closeModal() {
      this.$emit("action");
    },
    async submit() {
      let body = {
        project_id: this.data._id,
        equipements_id: this.select._id,
      };
      console.log(body);
      let result = await EventServices.removeItem(body);
      if (result.data.success) {
        this.$emit("action", "update");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
