<template>
  <div>
    <XButton36
      class="absolute right-0 z-10"
      @click.prevent="closeModal()"
    ></XButton36>
    <div class="pt-12 pb-8 flex flex-col">
      <h4 class="text-center">Remove member staff</h4>
      <button
        class="rounded-full h-16 px-10 mx-auto mt-6 bg-Red"
        @click.prevent="submit()"
      >
        <h4 class="text-White">Remove</h4>
      </button>
    </div>
  </div>
</template>

<script>
//services
import EventServices from "@axios/services/eventServices";
import XButton36 from "@components/buttons/XButton36.vue";
export default {
  components: { XButton36 },
  props: ["data", "select"],
  methods: {
    closeModal() {
      this.$emit("action");
    },
    async submit() {
      let body = {
        project_id: this.data._id,
        staff_id: this.select._id,
      };
      console.log(body);
      let result = await EventServices.removeStaff(body)
      if (result.data.success) {
        this.$emit("action", "update");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
